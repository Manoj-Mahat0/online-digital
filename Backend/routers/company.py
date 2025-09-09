# routers/company.py
from fastapi import APIRouter, BackgroundTasks, HTTPException, status
from typing import List
from schemas import CompanyRegistrationIn, CompanyRegistrationOut
from crud_company import create_company_registration, list_company_registrations
from email_utils import send_confirmation_email  # reuse existing email util

router = APIRouter(prefix="/company-registrations", tags=["company-registrations"])

@router.post("/", response_model=CompanyRegistrationOut, status_code=status.HTTP_201_CREATED)
async def create_company(payload: CompanyRegistrationIn, background_tasks: BackgroundTasks):
    data = payload.dict()
    try:
        record_id = await create_company_registration(data)
    except Exception as e:
        raise HTTPException(status_code=500, detail="DB error: " + str(e))

    # send confirmation if email provided
    if data.get("email"):
        # add task using existing email util - pass the same shape as earlier (it will read fields it knows)
        background_tasks.add_task(send_confirmation_email, data["email"], {
            "full_name": data.get("authorized_person_name"),
            "business_name": data.get("organization_name"),
            "business_type": data.get("organization_type"),
            "mobile_number": data.get("mobile_number"),
            "pan_number": data.get("business_pan"),
            "state": data.get("state"),
            "district": data.get("district"),
        })

    # optional: include Location header
    return {"id": record_id, "message": "Company registration received"}

@router.get("/", response_model=List[dict])
async def list_companies(limit: int = 100, offset: int = 0):
    rows = await list_company_registrations(limit=limit, offset=offset)
    # convert RowMapping to dict
    return [dict(r) for r in rows]
