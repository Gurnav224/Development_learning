from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import session
from db import SessionLocal, engine
import db
from schemas import (
    FeedbackCreate,
    FeedbackResponse,
    CategoryCreate,
    CategoryResponse,
    TagCreate,
    TagResponse,
    ProductCreate,
    ProductResponse,
    ProductFeedbackCreate,
    ProductFeedbackResponse
)
from models import Feedback, Category, Tag, Product , ProductFeedback
from typing import List

app = FastAPI(title="Fast API Homework")

# Create the database tables
db.Base.metadata.create_all(bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI Homework!"}


# Question 1 And Question 4 validation for unique name in feedback


@app.post("/feedback")
async def create_feedback(feedback: FeedbackCreate, db: session = Depends(get_db)):
    try:
        db_feedback = Feedback(name=feedback.name, comment=feedback.comment)
        if db.query(Feedback).filter(Feedback.name == feedback.name).first():
            raise HTTPException(
                status_code=400,
                detail=f"Feedback with this name '{feedback.name}' already exists.",
            )
        db.add(db_feedback)
        db.commit()
        db.refresh(db_feedback)
        return db_feedback
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e)) from e


@app.get("/feedback",response_model=List[FeedbackResponse])
async def get_feedbacks(query: str, db: session = Depends(get_db)):
    try:
        # := walrus operator to assign and check in one line
        if (feedbacks := db.query(Feedback).filter(Feedback.name.contains(query)).all()) == []:
            raise HTTPException(
                status_code=404, detail="No feedbacks found with that name."
            )
        return feedbacks
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) from e


# Question 2


@app.post("/category")
async def create_category(category: CategoryCreate, db: session = Depends(get_db)):
    try:
        if db.query(Category).filter(Category.name == category.name).first():
            raise HTTPException(
                status_code=400,
                detail=f"Category with this name '{category.name}' already exists.",
            )
        db_category = Category(name=category.name)
        db.add(db_category)
        db.commit()
        db.refresh(db_category)
        return db_category
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e)) from e


@app.get("/category")
async def get_categories(db: session = Depends(get_db)):
    try:
        categories: list[CategoryResponse] = db.query(Category).all()
        return categories
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) from e


# Question 3


@app.post("/tag")
async def create_tag(tag: TagCreate, db: session = Depends(get_db)):
    try:
        db_tag = Tag(name=tag.name)
        db.add(db_tag)
        db.commit()
        db.refresh(db_tag)
        return db_tag
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e)) from e


@app.get("/tag")
async def get_tags(db: session = Depends(get_db)):
    try:
        tags: list[TagResponse] = db.query(Tag).all()
        return tags
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) from e


# Question 5


@app.post("/product")
async def create_product(product: ProductCreate, db: session = Depends(get_db)):
    try:
        if product.quantity < 0:
            raise HTTPException(status_code=400, detail="Quantity cannot be negative.")
        db_product = Product(
            name=product.name,
            description=product.description,
            quantity=product.quantity,
        )
        db.add(db_product)
        db.commit()
        db.refresh(db_product)
        return db_product
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e)) from e


@app.get("/product")
async def get_products(db: session = Depends(get_db)):
    try:
        products: list[ProductResponse] = db.query(Product).all()
        return products
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) from e


# Q7: Get Product by Name (Search Endpoint)


@app.get("/product/search/{name}", response_model=List[ProductResponse])
async def search_products_by_name(name: str, db: session = Depends(get_db)):
    try:
        products = db.query(Product).filter(Product.name.ilike(f"%{name}%")).all()
        if len(products) == 0:
            raise HTTPException(
                status_code=404, detail="No products found with that name."
            )
        return products
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) from e



# Q9: archive product endpoint
@app.patch("/product/{product_id}/archive")
async def archive_product(product_id: int, db: session = Depends(get_db)):
    try:
        product = db.query(Product).filter(Product.id == product_id).first()
        if not product:
            raise HTTPException(status_code=404, detail="Product not found.")
        product.is_archived = True
        db.commit()
        db.refresh(product)
        return product
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e)) from e
    
    

# Q10 : create product feedback

@app.post("/product/feedback")
async def create_product_feedback(feedback: ProductFeedbackCreate, db: session = Depends(get_db)):
    try:
        product = db.query(Product).filter(Product.id == feedback.product_id).first()
        if not product:
            raise HTTPException(status_code=404, detail="Product not found.")
        if feedback.rating < 1 or feedback.rating > 5:
            raise HTTPException(status_code=400, detail="Rating must be between 1 and 5.")
        if product.is_archived:
            raise HTTPException(status_code=400, detail="Cannot add feedback to an archived product.")
        db_feedback = ProductFeedback(
            product_id=feedback.product_id,
            comment=feedback.comment,
            rating=feedback.rating
        )
        db.add(db_feedback)
        db.commit()
        db.refresh(db_feedback)
        return db_feedback
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e)) from e
    
    

@app.get("/product/feedback/{product_id}", response_model=List[ProductFeedbackResponse])
async def get_product_feedbacks(product_id: int, db: session = Depends(get_db)):
    try:
        feedbacks = db.query(ProductFeedback).filter(ProductFeedback.product_id == product_id).all()
        if len(feedbacks) == 0:
            raise HTTPException(status_code=404, detail="No feedback found for this product.")
        return feedbacks
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) from e