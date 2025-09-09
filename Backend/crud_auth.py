# crud_auth.py
from database import database
from models import users
from typing import Optional
from sqlalchemy import select

async def create_user(db_payload: dict) -> int:
    query = users.insert().values(**db_payload)
    return await database.execute(query)

async def get_user_by_email(email: str) -> Optional[dict]:
    q = users.select().where(users.c.email == email)
    row = await database.fetch_one(q)
    return dict(row) if row else None

async def get_user_by_session(token: str) -> Optional[dict]:
    q = users.select().where(users.c.session_token == token)
    row = await database.fetch_one(q)
    return dict(row) if row else None

async def set_session_token(user_id: int, token: Optional[str]):
    q = users.update().where(users.c.id == user_id).values(session_token=token)
    await database.execute(q)

async def delete_user_session_by_token(token: str):
    q = users.update().where(users.c.session_token == token).values(session_token=None)
    await database.execute(q)
