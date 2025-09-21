from fastapi import FastAPI, Depends, HTTPException
from database import Base, engine, SessionLocal
from pydantic import BaseModel
from sqlalchemy.orm import Session
from models import User as UserModel , Student as StudentModel, Account as AccountModel
from typing import List

app = FastAPI()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


Base.metadata.create_all(bind=engine)


@app.get("/")
def read_root():
    return {"Hello": "World"}


class UserCreate(BaseModel):
    name: str
    email: str


class UserRead(BaseModel):
    name: str
    email: str

    class Config:
        orm_mode = True


@app.post("/users/", response_model=UserRead)
async def create_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = UserModel(name=user.name, email=user.email)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


@app.get("/users/", response_model=List[UserRead]) 
async def read_user(db: Session = Depends(get_db)):
    return db.query(UserModel).all()

@app.put("/users/{user_id}", response_model=UserRead)
async def update_user(user_id: int, user: UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(UserModel).filter(UserModel.id == user_id).first()
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    db_user.name = user.name
    db_user.email = user.email
    db.commit()
    db.refresh(db_user)
    return db_user


@app.delete("/users/{user_id}")
async def delete_user(user_id: int, db: Session = Depends(get_db)):
    db_user = db.query(UserModel).filter(UserModel.id == user_id).first()
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    db.delete(db_user)
    db.commit()
    return {"detail": "User deleted"}


class StudentSchema(BaseModel):
    name: str
    age: int
    grade: str

    class Config:
        orm_mode = True



@app.post("/students/", response_model=StudentSchema)
async def create_student(student: StudentSchema, db: Session = Depends(get_db)):
    db_student = StudentModel(name=student.name, age=student.age, grade=student.grade)
    db.add(db_student)
    db.commit()
    db.refresh(db_student)
    return db_student

@app.get("/students/", response_model=List[StudentSchema])
async def read_students(db: Session = Depends(get_db)):
    return db.query(StudentModel).all()


@app.put("/students/{student_id}", response_model=StudentSchema)
async def update_student(student_id: int, student: StudentSchema, db: Session = Depends(get_db)):
    db_student = db.query(StudentModel).filter(StudentModel.id == student_id).first()
    if not db_student:
        raise HTTPException(status_code=404, detail="Student not found")
    db_student.name = student.name
    db_student.age = student.age
    db_student.grade = student.grade
    db.commit()
    db.refresh(db_student)
    return db_student


@app.delete("/students/{student_id}")
async def delete_student(student_id: int, db: Session = Depends(get_db)):
    db_student = db.query(StudentModel).filter(StudentModel.id == student_id).first()
    if not db_student:
        raise HTTPException(status_code=404, detail="Student not found")
    db.delete(db_student)
    db.commit()
    return {"detail": "Student deleted"}


class AccountSchema(BaseModel):
    user_id: int
    balance: float

    class Config:
        orm_mode = True
        

@app.post("/accounts/", response_model=AccountSchema)
async def create_account(account: AccountSchema, db: Session = Depends(get_db)):
    db_account = AccountModel(user_id=account.user_id, balance=account.balance)
    db.add(db_account)
    db.commit()
    db.refresh(db_account)
    return db_account


@app.get("/accounts/", response_model=List[AccountSchema])
async def read_accounts(db: Session = Depends(get_db)):
    return db.query(AccountModel).all()

@app.put("/accounts/{account_id}", response_model=AccountSchema)
async def update_account(account_id: int, account: AccountSchema, db: Session = Depends(get_db)):
    db_account = db.query(AccountModel).filter(AccountModel.id == account_id).first()
    if not db_account:
        raise HTTPException(status_code=404, detail="Account not found")
    db_account.user_id = account.user_id
    db_account.balance = account.balance
    db.commit()
    db.refresh(db_account)
    return db_account

@app.delete("/accounts/{account_id}")
async def delete_account(account_id: int, db: Session = Depends(get_db)):
    db_account = db.query(AccountModel).filter(AccountModel.id == account_id).first()
    if not db_account:
        raise HTTPException(status_code=404, detail="Account not found")
    db.delete(db_account)
    db.commit()
    return {"detail": "Account deleted"}