# crud_fssai.py
from database import database
from models import fssai_applications

async def create_fssai_application(payload: dict):
    """
    payload is a plain dict matching table columns (except id/created_at)
    """
    query = fssai_applications.insert().values(**payload)
    record_id = await database.execute(query)
    return record_id

async def list_fssai_applications(limit: int = 100, offset: int = 0):
    query = fssai_applications.select().limit(limit).offset(offset)
    rows = await database.fetch_all(query)
    return rows
