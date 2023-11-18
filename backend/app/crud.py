from sqlalchemy.orm import Session

from . import models, schemas


def get_document(db: Session, id: int):
    return db.query(models.Document).filter(models.Document.id == id).first()


def get_document_by_title(db: Session, title: str):
    return db.query(models.Document).filter(models.Document.title == title).first()


def get_documents(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Document).offset(skip).limit(limit).all()


def create_document(db: Session, document: schemas.DocumentBase):
    db_doc = models.Document(
                title=document.title, 
                content=document.content, 
                url=document.url,
                uploader=document.uploader,
                author=document.author,
                course=document.course,
                topic=document.topic,
                year=document.year
            )
    db.add(db_doc)
    db.commit()
    db.refresh(db_doc)

    return db_doc