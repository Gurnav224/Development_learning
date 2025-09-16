# db.py
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Get the NeonDB connection string
DATABASE_URL = os.getenv("DATABASE_URL")

# Create the SQLAlchemy engine
# echo=True will log SQL queries — useful for learning/debugging
engine = create_engine(DATABASE_URL, echo=True)

# Each instance of SessionLocal is a database session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class for declarative models
Base = declarative_base()
