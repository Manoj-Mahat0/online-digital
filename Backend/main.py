from fastapi import FastAPI
from dotenv import load_dotenv
from database import database, engine, metadata
from routers import registration, company
from routers.fssai import router as fssai_router
from routers.enquiry import router as enquiry_router
from routers.iec import router as iec_router
from routers.msme import router as msme_router
from routers.auth import router as auth_router
from routers.payments import router as payments_router
from fastapi.middleware.cors import CORSMiddleware

from fastapi.staticfiles import StaticFiles
import os
import models

load_dotenv()

app = FastAPI(title="GST Registration API")

origins = [
    "*",   # production frontend
]

# ✅ Add middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,            # only these origins allowed
    allow_credentials=True,
    allow_methods=["*"],              # allow all methods (GET, POST, PUT, DELETE…)
    allow_headers=["*"],              # allow all headers
)

UPLOAD_DIR = os.getenv("UPLOAD_DIR", "./uploads")
os.makedirs(UPLOAD_DIR, exist_ok=True)

# mount uploads at /uploads
app.mount("/uploads", StaticFiles(directory=UPLOAD_DIR), name="uploads")

app.include_router(registration.router)
app.include_router(company.router)
app.include_router(fssai_router)
app.include_router(enquiry_router)
app.include_router(iec_router)
app.include_router(msme_router)
app.include_router(auth_router)
app.include_router(payments_router)


@app.on_event("startup")
async def startup():
    metadata.create_all(engine)
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

@app.get("/health")
async def health():
    return {"status": "ok"}
