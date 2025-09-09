import os
import sqlalchemy
import databases
from dotenv import load_dotenv

load_dotenv()

# DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./registrations.db")
DATABASE_URL = "mysql+pymysql://root:@localhost:3306/online_digital"

database = databases.Database(DATABASE_URL)
metadata = sqlalchemy.MetaData()

engine = sqlalchemy.create_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False} if "sqlite" in DATABASE_URL else {},
)
