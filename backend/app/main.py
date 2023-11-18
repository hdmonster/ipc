from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware

from typing import Annotated
from sqlalchemy.orm import Session

from . import crud, models, schemas
from .database import SessionLocal, engine


app = FastAPI()
models.Base.metadata.create_all(bind=engine)

origins = [
    "http://localhost:1605",
    "localhost:1605"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

@app.post('/contribute/', status_code=status.HTTP_201_CREATED)
async def submit_contribution(document: schemas.DocumentBase, db: db_dependency):
    db_document = models.Document(**document.dict())
    db.add(db_document)
    db.commit()