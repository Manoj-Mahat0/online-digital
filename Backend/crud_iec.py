# crud_iec.py
from database import database
from models import iec_registrations

async def create_iec_registration(payload: dict):
    query = iec_registrations.insert().values(**payload)
    record_id = await database.execute(query)
    return record_id

async def list_iec_registrations(limit: int = 100, offset: int = 0):
    query = iec_registrations.select().limit(limit).offset(offset)
    rows = await database.fetch_all(query)
    return rows
