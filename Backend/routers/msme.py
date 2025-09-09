# routers/msme.py
from fastapi import APIRouter, BackgroundTasks, HTTPException, status
from typing import List
from fastapi.responses import JSONResponse

from schemas import MsmeRegistrationIn, MsmeRegistrationOut
from crud_msme import create_msme_registration, list_msme_registrations
from email_utils import send_confirmation_email  # reuse existing email util (optional)

router = APIRouter(prefix="/msme", tags=["msme"])

@router.post("/", response_model=MsmeRegistrationOut, status_code=status.HTTP_201_CREATED)
async def create_msme(reg: MsmeRegistrationIn, background_tasks: BackgroundTasks):
    data = reg.dict()

    # prepare DB payload (keys must match models)
    db_payload = {
        "applicant_name": data["applicant_name"],
        "mobile": data["mobile"],
        "email": data["email"],
        "office_address": data.get("office_address"),
        "pincode": data.get("pincode"),
        "state": data.get("state"),
        "district": data.get("district"),
        "social_category": data.get("social_category"),
        "organisation_type": data.get("organisation_type"),
        "business_name": data.get("business_name"),
        "incorporation_date": data.get("incorporation_date"),
        "main_activity": data.get("main_activity"),
        "additional_details": data.get("additional_details"),
    }

    try:
        record_id = await create_msme_registration(db_payload)
    except Exception as e:
        raise HTTPException(status_code=500, detail="DB error: " + str(e))

    # optional: send confirmation email to applicant (non-blocking)
    try:
        background_tasks.add_task(send_confirmation_email, data["email"], {
            "full_name": data["applicant_name"],
            "business_name": data.get("business_name"),
            "business_type": data.get("main_activity"),
            "mobile_number": data["mobile"],
        })
    except Exception:
        pass

    headers = {"Location": f"/msme/{record_id}"}
    return JSONResponse(status_code=201, content={"id": record_id, "message": "MSME registration received"}, headers=headers)


@router.get("/", response_model=List[dict])
async def list_msmes(limit: int = 100, offset: int = 0):
    rows = await list_msme_registrations(limit=limit, offset=offset)
    return [dict(r) for r in rows]
