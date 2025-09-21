import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Load from env if provided; default to local MySQL on the standard port (3306)
SQLALCHEMY_DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "mysql+pymysql://root:chaiaurcode@localhost:3306/test_db",
)

# Make the engine resilient and avoid long hangs on bad connections
engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    pool_pre_ping=True,
    pool_recycle=280,
    connect_args={"connect_timeout": 5},  # PyMySQL option to fail fast if DB is unreachable
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
