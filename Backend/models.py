# models.py
import sqlalchemy
from database import metadata

# Common pattern: use String(255) for VARCHAR columns in MySQL
# Use sqlalchemy.text('0') for Boolean server_default when targeting MySQL

registrations = sqlalchemy.Table(
    "registrations",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("full_name", sqlalchemy.String(255), nullable=False),
    sqlalchemy.Column("dob", sqlalchemy.String(50), nullable=True),
    sqlalchemy.Column("business_name", sqlalchemy.String(255), nullable=True),
    sqlalchemy.Column("business_type", sqlalchemy.String(128), nullable=True),
    sqlalchemy.Column("mobile_number", sqlalchemy.String(32), nullable=True),
    sqlalchemy.Column("email", sqlalchemy.String(255), nullable=True),
    sqlalchemy.Column("pan_number", sqlalchemy.String(20), nullable=True),
    sqlalchemy.Column("state", sqlalchemy.String(128), nullable=True),
    sqlalchemy.Column("district", sqlalchemy.String(128), nullable=True),
    sqlalchemy.Column("created_at", sqlalchemy.DateTime, server_default=sqlalchemy.func.now()),
)


company_registrations = sqlalchemy.Table(
    "company_registrations",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("authorized_person_name", sqlalchemy.String(255), nullable=False),
    sqlalchemy.Column("email", sqlalchemy.String(255), nullable=True),
    sqlalchemy.Column("mobile_number", sqlalchemy.String(32), nullable=True),
    sqlalchemy.Column("date_of_birth", sqlalchemy.String(50), nullable=True),
    sqlalchemy.Column("organization_name", sqlalchemy.String(255), nullable=False),
    sqlalchemy.Column("organization_type", sqlalchemy.String(128), nullable=True),
    sqlalchemy.Column("incorporation_date", sqlalchemy.String(50), nullable=True),
    sqlalchemy.Column("business_pan", sqlalchemy.String(20), nullable=True),
    sqlalchemy.Column("state", sqlalchemy.String(128), nullable=True),
    sqlalchemy.Column("district", sqlalchemy.String(128), nullable=True),
    sqlalchemy.Column("full_address", sqlalchemy.Text, nullable=True),
    sqlalchemy.Column("created_at", sqlalchemy.DateTime, server_default=sqlalchemy.func.now()),
)


fssai_applications = sqlalchemy.Table(
    "fssai_applications",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("applicant_name", sqlalchemy.String(255), nullable=False),
    sqlalchemy.Column("email", sqlalchemy.String(255), nullable=True),
    sqlalchemy.Column("mobile", sqlalchemy.String(32), nullable=True),
    sqlalchemy.Column("business_name", sqlalchemy.String(255), nullable=True),
    sqlalchemy.Column("food_category", sqlalchemy.String(128), nullable=True),
    sqlalchemy.Column("business_address", sqlalchemy.Text, nullable=True),
    sqlalchemy.Column("pincode", sqlalchemy.String(16), nullable=True),
    sqlalchemy.Column("state", sqlalchemy.String(128), nullable=True),
    sqlalchemy.Column("district", sqlalchemy.String(128), nullable=True),
    sqlalchemy.Column("uploaded_filename", sqlalchemy.String(255), nullable=True),
    sqlalchemy.Column("agreed_terms", sqlalchemy.Boolean, nullable=False, server_default=sqlalchemy.text('0')),
    sqlalchemy.Column("verification_code", sqlalchemy.String(64), nullable=True),
    sqlalchemy.Column("additional_notes", sqlalchemy.Text, nullable=True),
    sqlalchemy.Column("created_at", sqlalchemy.DateTime, server_default=sqlalchemy.func.now()),
)


enquiries = sqlalchemy.Table(
    "enquiries",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("enquiry_type", sqlalchemy.String(128), nullable=True),
    sqlalchemy.Column("certificate_type", sqlalchemy.String(128), nullable=True),
    sqlalchemy.Column("applicant_name", sqlalchemy.String(255), nullable=False),
    sqlalchemy.Column("mobile", sqlalchemy.String(32), nullable=False),
    sqlalchemy.Column("email", sqlalchemy.String(255), nullable=True),
    sqlalchemy.Column("message", sqlalchemy.Text, nullable=True),
    sqlalchemy.Column("created_at", sqlalchemy.DateTime, server_default=sqlalchemy.func.now()),
)


iec_registrations = sqlalchemy.Table(
    "iec_registrations",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("name", sqlalchemy.String(255), nullable=False),
    sqlalchemy.Column("email", sqlalchemy.String(255), nullable=False),
    sqlalchemy.Column("mobile", sqlalchemy.String(32), nullable=False),
    sqlalchemy.Column("state", sqlalchemy.String(128), nullable=True),
    sqlalchemy.Column("agree_terms", sqlalchemy.Boolean, nullable=False, server_default=sqlalchemy.text('0')),
    sqlalchemy.Column("created_at", sqlalchemy.DateTime, server_default=sqlalchemy.func.now()),
)


msme_registrations = sqlalchemy.Table(
    "msme_registrations",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("applicant_name", sqlalchemy.String(255), nullable=False),
    sqlalchemy.Column("mobile", sqlalchemy.String(32), nullable=False),
    sqlalchemy.Column("email", sqlalchemy.String(255), nullable=False),
    sqlalchemy.Column("office_address", sqlalchemy.Text, nullable=True),
    sqlalchemy.Column("pincode", sqlalchemy.String(16), nullable=True),
    sqlalchemy.Column("state", sqlalchemy.String(128), nullable=True),
    sqlalchemy.Column("district", sqlalchemy.String(128), nullable=True),
    sqlalchemy.Column("social_category", sqlalchemy.String(64), nullable=True),
    sqlalchemy.Column("organisation_type", sqlalchemy.String(128), nullable=True),
    sqlalchemy.Column("business_name", sqlalchemy.String(255), nullable=True),
    sqlalchemy.Column("incorporation_date", sqlalchemy.String(50), nullable=True),
    sqlalchemy.Column("main_activity", sqlalchemy.String(255), nullable=True),
    sqlalchemy.Column("additional_details", sqlalchemy.Text, nullable=True),
    sqlalchemy.Column("created_at", sqlalchemy.DateTime, server_default=sqlalchemy.func.now()),
)


users = sqlalchemy.Table(
    "users",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("name", sqlalchemy.String(255), nullable=True),
    sqlalchemy.Column("email", sqlalchemy.String(255), nullable=False, unique=True, index=True),
    sqlalchemy.Column("mobile", sqlalchemy.String(32), nullable=True),
    sqlalchemy.Column("password_hash", sqlalchemy.String(255), nullable=False),
    sqlalchemy.Column("session_token", sqlalchemy.String(255), nullable=True, index=True),
    sqlalchemy.Column("created_at", sqlalchemy.DateTime, server_default=sqlalchemy.func.now()),
)


payments = sqlalchemy.Table(
    "payments",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("payer_name", sqlalchemy.String(255), nullable=False),
    sqlalchemy.Column("phone", sqlalchemy.String(32), nullable=False),
    sqlalchemy.Column("reference_id", sqlalchemy.String(128), nullable=False, unique=False),
    sqlalchemy.Column("amount", sqlalchemy.String(64), nullable=True),        # optional, string to avoid float rounding issues
    sqlalchemy.Column("method", sqlalchemy.String(64), nullable=True),        # e.g., UPI, NetBanking, Card
    sqlalchemy.Column("uploaded_filename", sqlalchemy.String(255), nullable=True),
    sqlalchemy.Column("created_at", sqlalchemy.DateTime, server_default=sqlalchemy.func.now()),
)
