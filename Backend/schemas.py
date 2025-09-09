from typing import Optional
from pydantic import BaseModel, Field, EmailStr, constr

MobileStr = constr(strip_whitespace=True, min_length=6, max_length=15)

class RegistrationIn(BaseModel):
    full_name: constr(strip_whitespace=True, min_length=2) = Field(..., example="John Doe")
    dob: Optional[str] = Field(None, description="dd-mm-yyyy", example="01-01-1990")
    business_name: Optional[str] = Field(None, example="Acme Pvt Ltd")
    business_type: Optional[str] = Field(None, example="Proprietorship")
    mobile_number: Optional[MobileStr] = Field(None, example="9123456789")
    email: Optional[EmailStr] = Field(None, example="john@example.com")
    pan_number: Optional[str] = Field(None, example="ABCDE1234F")
    state: Optional[str] = Field(None, example="Jharkhand")
    district: Optional[str] = Field(None, example="Ranchi")


class RegistrationOut(BaseModel):
    id: int
    message: str



MobileStr = constr(strip_whitespace=True, min_length=6, max_length=15)

class CompanyRegistrationIn(BaseModel):
    authorized_person_name: constr(strip_whitespace=True, min_length=2) = Field(..., example="Manoj Mahato")
    email: Optional[EmailStr] = Field(None, example="manoj@example.com")
    mobile_number: Optional[MobileStr] = Field(None, example="9123456789")
    date_of_birth: Optional[str] = Field(None, description="dd-mm-yyyy", example="01-01-1990")
    organization_name: constr(strip_whitespace=True, min_length=1) = Field(..., example="Acme Pvt Ltd")
    organization_type: Optional[str] = Field(None, example="Private Limited")
    incorporation_date: Optional[str] = Field(None, description="dd-mm-yyyy", example="01-01-2015")
    business_pan: Optional[str] = Field(None, example="ABCDE1234F")
    state: Optional[str] = Field(None, example="Jharkhand")
    district: Optional[str] = Field(None, example="Ranchi")
    full_address: Optional[str] = Field(None, example="123, MG Road, Ranchi")

class CompanyRegistrationOut(BaseModel):
    id: int
    message: str

class FssaiApplicationOut(BaseModel):
    id: int
    message: str



MobileStr = constr(strip_whitespace=True, min_length=6, max_length=15)

class EnquiryIn(BaseModel):
    enquiry_type: Optional[str] = Field(None, example="New Registration")
    certificate_type: Optional[str] = Field(None, example="GST / FSSAI")
    applicant_name: constr(strip_whitespace=True, min_length=2) = Field(..., example="Manoj Kumar")
    mobile: MobileStr = Field(..., example="9123456789")
    email: Optional[EmailStr] = Field(None, example="manoj@example.com")
    message: Optional[str] = Field(None, example="Please contact me regarding...")

class EnquiryOut(BaseModel):
    id: int
    message: str




MobileStr = constr(strip_whitespace=True, min_length=6, max_length=15)

class IecRegistrationIn(BaseModel):
    name: constr(strip_whitespace=True, min_length=2) = Field(..., example="Manoj Kumar")
    email: EmailStr = Field(..., example="manoj@example.com")
    mobile: MobileStr = Field(..., example="9123456789")
    state: Optional[str] = Field(None, example="Jharkhand")
    agree_terms: bool = Field(..., description="User must agree to terms")

class IecRegistrationOut(BaseModel):
    id: int
    message: str




class MsmeRegistrationIn(BaseModel):
    applicant_name: constr(strip_whitespace=True, min_length=2) = Field(..., example="Manoj Kumar")
    mobile: MobileStr = Field(..., example="9123456789")
    email: EmailStr = Field(..., example="manoj@example.com")
    office_address: Optional[str] = Field(None, example="123 MG Road, Ranchi")
    pincode: Optional[str] = Field(None, example="834001")
    state: Optional[str] = Field(None, example="Jharkhand")
    district: Optional[str] = Field(None, example="Ranchi")
    social_category: Optional[str] = Field(None, example="General")
    organisation_type: Optional[str] = Field(None, example="Proprietorship")
    business_name: Optional[str] = Field(None, example="Acme Foods")
    incorporation_date: Optional[str] = Field(None, description="dd-mm-yyyy", example="01-01-2018")
    main_activity: Optional[str] = Field(None, example="Food Processing")
    additional_details: Optional[str] = Field(None, example="We manufacture snacks")

class MsmeRegistrationOut(BaseModel):
    id: int
    message: str



class SignupIn(BaseModel):
    name: Optional[str] = Field(None, example="Manoj Kumar")
    email: EmailStr = Field(..., example="manoj@example.com")
    mobile: Optional[MobileStr] = Field(None, example="9123456789")
    password: constr(min_length=6) = Field(..., example="strongpassword")

class LoginIn(BaseModel):
    email: EmailStr = Field(..., example="manoj@example.com")
    password: constr(min_length=1) = Field(..., example="strongpassword")

class AuthOut(BaseModel):
    id: int
    message: str



PhoneStr = constr(strip_whitespace=True, min_length=6, max_length=32)

class PaymentIn(BaseModel):
    payer_name: constr(strip_whitespace=True, min_length=2) = Field(..., example="Manoj Kumar")
    phone: PhoneStr = Field(..., example="9123456789")
    reference_id: constr(strip_whitespace=True, min_length=3) = Field(..., example="TXN123456789")
    amount: Optional[str] = Field(None, example="1500.00")
    method: Optional[str] = Field(None, example="UPI / Card / NetBanking")

class PaymentOut(BaseModel):
    id: int
    message: str
