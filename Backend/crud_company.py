# crud_company.py
from database import database
from models import company_registrations

async def create_company_registration(payload_dict: dict):
    """
    Insert company registration and return inserted id.
    """
    query = company_registrations.insert().values(**payload_dict)
    record_id = await database.execute(query)
    return record_id

async def list_company_registrations(limit: int = 100, offset: int = 0):
    query = company_registrations.select().limit(limit).offset(offset)
    rows = await database.fetch_all(query)
    return rows
