# routers/payments.py
import os
import shutil
import time
import uuid
from fastapi import APIRouter, UploadFile, File, Form, HTTPException, status, BackgroundTasks, Depends
from fastapi.responses import JSONResponse, FileResponse
from typing import Optional, List

from schemas import PaymentOut
from crud_payments import create_payment_record, list_payments, get_payment

router = APIRouter(prefix="/payments", tags=["payments"])

# ensure uploads/payments dir exists
BASE_UPLOAD_DIR = os.getenv("UPLOAD_DIR", "./uploads")
PAYMENT_UPLOAD_DIR = os.path.join(BASE_UPLOAD_DIR, "payments")
os.makedirs(PAYMENT_UPLOAD_DIR, exist_ok=True)

def _sanitize_filename(name: str) -> str:
    # keep only basename and remove suspicious chars
    name = os.path.basename(name)
    name = name.replace(" ", "_")
    return "".join(c for c in name if c.isalnum() or c in ("_", "-", "."))

@router.post("/", response_model=PaymentOut, status_code=status.HTTP_201_CREATED)
async def create_payment(
    background_tasks: BackgroundTasks,
    payer_name: str = Form(...),
    phone: str = Form(...),
    reference_id: str = Form(...),
    amount: Optional[str] = Form(None),
    method: Optional[str] = Form(None),
    screenshot: Optional[UploadFile] = File(None),
):
    # basic validation
    if not payer_name or not phone or not reference_id:
        raise HTTPException(status_code=422, detail="payer_name, phone and reference_id are required.")

    saved_filename = None
    if screenshot:
        original = screenshot.filename or "screenshot"
        ext = os.path.splitext(original)[1] or ".png"
        uid = uuid.uuid4().hex[:8]
        ts = int(time.time())
        safe_name = _sanitize_filename(original)
        saved_filename = f"payment_{ts}_{uid}_{safe_name}"
        dest_path = os.path.join(PAYMENT_UPLOAD_DIR, saved_filename)
        try:
            with open(dest_path, "wb") as buffer:
                shutil.copyfileobj(screenshot.file, buffer)
        except Exception as e:
            raise HTTPException(status_code=500, detail="Failed to save screenshot: " + str(e))
        finally:
            screenshot.file.close()
        # store relative path so it can be served via /uploads or via a file route
        uploaded_path = f"uploads/payments/{saved_filename}"
    else:
        uploaded_path = None

    payload = {
        "payer_name": payer_name,
        "phone": phone,
        "reference_id": reference_id,
        "amount": amount,
        "method": method,
        "uploaded_filename": uploaded_path,
    }

    try:
        record_id = await create_payment_record(payload)
    except Exception as e:
        raise HTTPException(status_code=500, detail="DB error: " + str(e))

    # (optional) background task: notify admin via email etc.
    # background_tasks.add_task(notify_admin_payment, record_id, payload)

    headers = {"Location": f"/payments/{record_id}"}
    return JSONResponse(status_code=201, content={"id": record_id, "message": "Payment recorded"}, headers=headers)


@router.get("/", response_model=List[dict])
async def payments_list(limit: int = 100, offset: int = 0):
    rows = await list_payments(limit=limit, offset=offset)
    return [dict(r) for r in rows]


@router.get("/{payment_id}", response_model=dict)
async def payment_get(payment_id: int):
    rec = await get_payment(payment_id)
    if not rec:
        raise HTTPException(status_code=404, detail="Not found")
    return rec


# optional helper to download screenshot (if you prefer route instead of StaticFiles)
@router.get("/files/{filename}", response_class=FileResponse)
async def download_payment_file(filename: str):
    if ".." in filename or filename.startswith(("/", "\\")):
        raise HTTPException(status_code=400, detail="Invalid filename")
    filepath = os.path.join(PAYMENT_UPLOAD_DIR, filename)
    if not os.path.exists(filepath):
        raise HTTPException(status_code=404, detail="File not found")
    return FileResponse(path=filepath, filename=filename)
