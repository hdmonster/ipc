from sqlalchemy import Column, DateTime, Integer, String
from sqlalchemy.dialects.mysql import LONGTEXT
from datetime import datetime
from .database import Base


class Document(Base):
    __tablename__ = "documents"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), unique=True, index=True)
    content = Column(LONGTEXT)
    author = Column(String(50))
    course = Column(String(20))
    topic = Column(String(20))
    year = Column(String(4))
    uploader = Column(String(20))
    created_at = Column(DateTime, default=datetime.utcnow)

class Submission(Base):
    __tablename__ = "submissions"

    id = Column(Integer, primary_key=True, index=True)
    content = Column(LONGTEXT)
    score = Column(Integer)
    created_at = Column(DateTime, default=datetime.utcnow)