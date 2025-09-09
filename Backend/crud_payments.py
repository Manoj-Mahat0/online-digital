# crud_payments.py
from database import database
from models import payments

async def create_payment_record(payload: dict):
    query = payments.insert().values(**payload)
    record_id = await database.execute(query)
    return record_id

async def list_payments(limit: int = 100, offset: int = 0):
    query = payments.select().limit(limit).offset(offset)
    rows = await database.fetch_all(query)
    return rows

async def get_payment(payment_id: int):
    q = payments.select().where(payments.c.id == payment_id)
    row = await database.fetch_one(q)
    return dict(row) if row else None
