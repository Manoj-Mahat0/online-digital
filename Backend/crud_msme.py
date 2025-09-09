# crud_msme.py
from database import database
from models import msme_registrations

async def create_msme_registration(payload: dict):
    query = msme_registrations.insert().values(**payload)
    record_id = await database.execute(query)
    return record_id

async def list_msme_registrations(limit: int = 100, offset: int = 0):
    query = msme_registrations.select().limit(limit).offset(offset)
    rows = await database.fetch_all(query)
    return rows
