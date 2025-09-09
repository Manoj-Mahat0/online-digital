# routers/iec.py
from fastapi import APIRouter, BackgroundTasks, HTTPException, status
from fastapi.responses import JSONResponse
from typing import List

from schemas import IecRegistrationIn, IecRegistrationOut
from crud_iec import create_iec_registration, list_iec_registrations
from email_utils import send_confirmation_email

router = APIRouter(prefix="/iec", tags=["iec"])

@router.post("/", response_model=IecRegistrationOut, status_code=status.HTTP_201_CREATED)
async def create_iec(reg: IecRegistrationIn, background_tasks: BackgroundTasks):
    data = reg.dict()
    # enforce agree_terms True
    if not data.get("agree_terms"):
        raise HTTPException(status_code=422, detail="You must agree to the terms.")

    # normalize DB payload keys if needed (columns: name,email,mobile,state,agree_terms)
    db_payload = {
        "name": data["name"],
        "email": data["email"],
        "mobile": data["mobile"],
        "state": data.get("state"),
        "agree_terms": bool(data["agree_terms"]),
    }

    try:
        record_id = await create_iec_registration(db_payload)
    except Exception as e:
        raise HTTPException(status_code=500, detail="DB error: " + str(e))

    # optional: send confirmation email
    try:
        email_payload = {
            "full_name": data["name"],
            "business_name": "IEC Registration",
            "business_type": "IEC",
            "mobile_number": data["mobile"],
        }
        background_tasks.add_task(send_confirmation_email, data["email"], email_payload)
    except Exception:
        # don't block on email errors
        pass

    headers = {"Location": f"/iec/{record_id}"}
    return JSONResponse(status_code=201, content={"id": record_id, "message": "IEC registration received"}, headers=headers)


@router.get("/", response_model=List[dict])
async def list_all_iec(limit: int = 100, offset: int = 0):
    rows = await list_iec_registrations(limit=limit, offset=offset)
    return [dict(r) for r in rows]
