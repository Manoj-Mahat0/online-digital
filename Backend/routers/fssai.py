# routers/fssai.py
import os
import shutil
from fastapi import APIRouter, UploadFile, File, Form, BackgroundTasks, HTTPException, status
from typing import List, Optional
from schemas import FssaiApplicationOut
from crud_fssai import create_fssai_application, list_fssai_applications
from email_utils import send_confirmation_email  # re-use same email util

router = APIRouter(prefix="/fssai", tags=["fssai"])

# ensure uploads dir exists
UPLOAD_DIR = os.environ.get("UPLOAD_DIR", "./uploads")
os.makedirs(UPLOAD_DIR, exist_ok=True)

@router.post("/", response_model=FssaiApplicationOut, status_code=status.HTTP_201_CREATED)
async def submit_application(
    background_tasks: BackgroundTasks,
    applicant_name: str = Form(...),
    email: Optional[str] = Form(None),
    mobile_number: Optional[str] = Form(None),
    business_name: Optional[str] = Form(None),
    food_category: Optional[str] = Form(None),
    business_address: Optional[str] = Form(None),
    pincode: Optional[str] = Form(None),
    state: Optional[str] = Form(None),
    district: Optional[str] = Form(None),
    file: Optional[UploadFile] = File(None),
    agreed_terms: bool = Form(False),
    verification_code: Optional[str] = Form(None),
    additional_notes: Optional[str] = Form(None),
):
    """
    Accepts multipart/form-data including an optional file.
    Saves the file to UPLOAD_DIR and stores record in DB.
    Sends confirmation email in background if email provided.
    """
    # basic server-side validations (expand as needed)
    if not applicant_name or not agreed_terms:
        raise HTTPException(status_code=422, detail="Applicant name and agreement to terms are required.")

    saved_filename = None
    if file:
        # sanitize filename minimally
        original_name = os.path.basename(file.filename)
        # create a safe unique filename (timestamp + original)
        import time, uuid
        uid = uuid.uuid4().hex[:8]
        ts = int(time.time())
        ext = os.path.splitext(original_name)[1]
        saved_filename = f"fssai_{ts}_{uid}{ext}"
        dest_path = os.path.join(UPLOAD_DIR, saved_filename)

        try:
            with open(dest_path, "wb") as buffer:
                shutil.copyfileobj(file.file, buffer)
        except Exception as e:
            raise HTTPException(status_code=500, detail="Failed to save uploaded file: " + str(e))
        finally:
            file.file.close()

    payload = {
        "applicant_name": applicant_name,
        "email": email,
        "mobile": mobile_number,
        "business_name": business_name,
        "food_category": food_category,
        "business_address": business_address,
        "pincode": pincode,
        "state": state,
        "district": district,
 "uploaded_filename": f"uploads/{saved_filename}",
                 "agreed_terms": bool(agreed_terms),
        "verification_code": verification_code,
        "additional_notes": additional_notes,
    }

    try:
        record_id = await create_fssai_application(payload)
    except Exception as e:
        raise HTTPException(status_code=500, detail="DB error: " + str(e))

    # send confirmation email in background (if email provided)
    if email:
        # pass a simple registration dict that email util expects
        email_payload = {
            "full_name": applicant_name,
            "business_name": business_name,
            "business_type": food_category,
            "mobile_number": mobile_number,
        }
        background_tasks.add_task(send_confirmation_email, email, email_payload)

    return {"id": record_id, "message": "FSSAI application received"}

# ✅ New GET route
@router.get("/", response_model=List[dict])
async def get_applications(limit: int = 100, offset: int = 0):
    """
    List FSSAI applications (with pagination).
    """
    rows = await list_fssai_applications(limit=limit, offset=offset)
    return [dict(r) for r in rows]