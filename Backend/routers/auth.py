# routers/auth.py
import secrets
from fastapi import APIRouter, Depends, HTTPException, status, Response, Request
from passlib.context import CryptContext
from typing import Optional

from schemas import SignupIn, LoginIn, AuthOut
from crud_auth import create_user, get_user_by_email, set_session_token, get_user_by_session, delete_user_session_by_token

router = APIRouter(prefix="/auth", tags=["auth"])

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
SESSION_COOKIE_NAME = "session_token"
# cookie params - adjust secure=True for production + https
COOKIE_PARAMS = {"httponly": True, "samesite": "lax", "path": "/", "secure": False}

def hash_password(password: str) -> str:
    return pwd_context.hash(password)

def verify_password(plain: str, hashed: str) -> bool:
    return pwd_context.verify(plain, hashed)

async def get_current_user(request: Request) -> Optional[dict]:
    token = request.cookies.get(SESSION_COOKIE_NAME)
    if not token:
        return None
    user = await get_user_by_session(token)
    return user

@router.post("/signup", response_model=AuthOut, status_code=status.HTTP_201_CREATED)
async def signup(payload: SignupIn):
    # check duplicate email
    existing = await get_user_by_email(payload.email)
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")

    pwd_hash = hash_password(payload.password)
    db_payload = {
        "name": payload.name,
        "email": payload.email,
        "mobile": payload.mobile,
        "password_hash": pwd_hash,
        "session_token": None
    }
    user_id = await create_user(db_payload)
    return {"id": user_id, "message": "User created"}

@router.post("/login", response_model=AuthOut)
async def login(payload: LoginIn, response: Response):
    user = await get_user_by_email(payload.email)
    if not user:
        raise HTTPException(status_code=400, detail="Invalid credentials")
    if not verify_password(payload.password, user["password_hash"]):
        raise HTTPException(status_code=400, detail="Invalid credentials")

    # generate a secure session token, store it in DB
    token = secrets.token_urlsafe(32)
    await set_session_token(user["id"], token)

    # set cookie
    response.set_cookie(key=SESSION_COOKIE_NAME, value=token, **COOKIE_PARAMS)
    return {"id": user["id"], "message": "Logged in"}

@router.post("/logout", response_model=AuthOut)
async def logout(response: Response, request: Request):
    token = request.cookies.get(SESSION_COOKIE_NAME)
    if token:
        await delete_user_session_by_token(token)
    # clear cookie from client
    response.delete_cookie(SESSION_COOKIE_NAME, path=COOKIE_PARAMS.get("path", "/"))
    return {"id": 0, "message": "Logged out"}

@router.get("/me")
async def me(current_user: Optional[dict] = Depends(get_current_user)):
    if not current_user:
        raise HTTPException(status_code=401, detail="Not authenticated")
    # don't return password_hash or session_token
    safe = {k: v for k, v in current_user.items() if k not in ("password_hash", "session_token")}
    return safe
