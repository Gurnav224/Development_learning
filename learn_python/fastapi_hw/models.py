from sqlalchemy import Column, Integer, String , Boolean , ForeignKey
from db import Base



    
    
class Feedback(Base):
    __tablename__ = "feedback"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    comment = Column(String)
    


class Category(Base):
    __tablename__ = "category"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    

class Tag(Base):
    __tablename__ = "tag"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    
    
class Product(Base):
    __tablename__ = "product"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    description = Column(String)
    quantity = Column(Integer)
    is_archived = Column(Boolean, default=False)  
    
    
    
class ProductFeedback(Base):
    __tablename__ = "product_feedback"

    id = Column(Integer, primary_key=True, index=True)
    product_id = Column(Integer, ForeignKey("product.id"))
    comment = Column(String)
    rating = Column(Integer)