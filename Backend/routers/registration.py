from fastapi import APIRouter, BackgroundTasks, HTTPException
from schemas import RegistrationIn, RegistrationOut
from crud import create_registration, list_registrations
from email_utils import send_confirmation_email

router = APIRouter(prefix="/registrations", tags=["registrations"])


@router.post("/", response_model=RegistrationOut, status_code=201)
async def create(payload: RegistrationIn, background_tasks: BackgroundTasks):
    data = payload.dict()
    try:
        record_id = await create_registration(data)
    except Exception as e:
        raise HTTPException(status_code=500, detail="DB error: " + str(e))

    if data.get("email"):
        background_tasks.add_task(send_confirmation_email, data["email"], data)

    return {"id": record_id, "message": "Registration received"}


@router.get("/", response_model=list)
async def list_all(limit: int = 100, offset: int = 0):
    rows = await list_registrations(limit=limit, offset=offset)
    return [dict(r) for r in rows]
