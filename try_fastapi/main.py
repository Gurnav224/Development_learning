from fastapi import FastAPI, Depends, HTTPException, Header, status , BackgroundTasks, UploadFile, File 
from pydantic import BaseModel, Field
from typing import Optional

app = FastAPI()

db = []


class Item(BaseModel):
    name: str
    description: Optional[str] = Field(
        None, title="The description of the item", max_length=300
    )
    price: float = Field(..., gt=0, description="The price must be greater than zero")
    tax: Optional[float] = None


@app.get("/")
async def read_root():
    return {"msg": "Hello - Fastapi running on Docker!"}







def verify_token(x_token: str = Header(...)):
    if x_token != "fake-super-secret-token":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid X-Token header",
        )
    return x_token

@app.post("/items/", dependencies=[Depends(verify_token)])
async def create_item(item: Item):
    db.append(item)
    return item


@app.get("/items/")
async def read_items():
    return {"items": db}


@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str | None = None):
    item = db[item_id] if item_id < len(db) else None
    return {"item": item, "q": q}


@app.get("/secure-items/", dependencies=[Depends(verify_token)])
async def read_secure_items():
    return {"items": db}    


def save_file(data: bytes, filename: str):
    with open(filename, "wb") as f:
        f.write(data)
        

@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile = File(...)):
    data = await file.read()
    save_file(data, file.filename)
    return {"filename": file.filename, "content_type": file.content_type, "size": len(data)}


@app.get("/file/{filename}")
async def get_file(filename: str):
    try:
        with open(filename, "rb") as f:
            data = f.read()
        return {"filename": filename, "size": len(data)}
    except FileNotFoundError as e:
      raise HTTPException(status_code=404, detail=str(e)) from e
