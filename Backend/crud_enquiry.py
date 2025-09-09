# crud_enquiry.py
from database import database
from models import enquiries

async def create_enquiry(payload: dict):
    query = enquiries.insert().values(**payload)
    record_id = await database.execute(query)
    return record_id

async def list_enquiries(limit: int = 100, offset: int = 0):
    query = enquiries.select().limit(limit).offset(offset)
    rows = await database.fetch_all(query)
    return rows
