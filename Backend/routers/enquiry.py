# routers/enquiry.py
from fastapi import APIRouter, BackgroundTasks, HTTPException, status
from fastapi.responses import JSONResponse
from typing import List

from schemas import EnquiryIn, EnquiryOut
from crud_enquiry import create_enquiry, list_enquiries
from email_utils import send_confirmation_email  # optional: re-use existing email util

router = APIRouter(prefix="/enquiries", tags=["enquiries"])

@router.post("/", response_model=EnquiryOut, status_code=status.HTTP_201_CREATED)
async def create(enquiry: EnquiryIn, background_tasks: BackgroundTasks):
    data = enquiry.dict()
    # map mobile field to DB 'mobile' (same) — already matching
    try:
        record_id = await create_enquiry(data)
    except Exception as e:
        raise HTTPException(status_code=500, detail="DB error: " + str(e))

    # optionally send notification email to admin / user
    if data.get("email"):
        # craft a lightweight email payload for send_confirmation_email
        email_payload = {
            "full_name": data.get("applicant_name"),
            "business_name": data.get("certificate_type"),
            "business_type": data.get("enquiry_type"),
            "mobile_number": data.get("mobile"),
        }
        background_tasks.add_task(send_confirmation_email, data["email"], email_payload)

    headers = {"Location": f"/enquiries/{record_id}"}
    return JSONResponse(status_code=201, content={"id": record_id, "message": "Enquiry received"}, headers=headers)


@router.get("/", response_model=List[dict])
async def list_all(limit: int = 100, offset: int = 0):
    rows = await list_enquiries(limit=limit, offset=offset)
    return [dict(r) for r in rows]
