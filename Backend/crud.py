from models import registrations
from database import database

async def create_registration(payload_dict: dict):
    query = registrations.insert().values(**payload_dict)
    record_id = await database.execute(query)
    return record_id


async def list_registrations(limit: int = 100, offset: int = 0):
    query = registrations.select().limit(limit).offset(offset)
    rows = await database.fetch_all(query)
    return rows
