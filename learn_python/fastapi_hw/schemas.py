

from pydantic import BaseModel , Field

class FeedbackCreate(BaseModel):
    name: str
    comment: str

    class Config:
        orm_mode = True
        
        
        
class FeedbackResponse(BaseModel):
    id: int
    name: str
    comment: str

    class Config:
        orm_mode = True      
        
        
class CategoryCreate(BaseModel):
    name: str

    class Config:
        orm_mode = True
        
        
class CategoryResponse(BaseModel):
    id: int
    name: str

    class Config:
        orm_mode = True
        
        
class TagCreate(BaseModel):
    name: str

    class Config:
        orm_mode = True


class TagResponse(BaseModel):
    id: int
    name: str

    class Config:
        orm_mode = True
        
class ProductCreate(BaseModel):
    name: str
    description: str
    quantity: int
    is_archived: bool = False

    class Config:
        orm_mode = True
        
class ProductResponse(BaseModel):
    id: int
    name: str
    description: str
    quantity: int = Field(..., ge=0)
    is_archived: bool

    class Config:
        orm_mode = True
        
        

class ProductFeedbackCreate(BaseModel):
    product_id: int
    comment: str
    rating: int

    class Config:
        orm_mode = True
        
class ProductFeedbackResponse(BaseModel):
    id: int
    product_id: int
    comment: str
    rating: int

    class Config:
        orm_mode = True