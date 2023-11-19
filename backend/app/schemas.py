from datetime import datetime
from typing import Optional, Union

from pydantic import BaseModel

class DocumentBase(BaseModel):
    title: str
    content: str
    author: str
    course: str
    topic: str
    year: str
    uploader: str
    created_at: Optional[str] = str(datetime.now())
    

class Document(DocumentBase):
    id: int

    class Config:
        orm_mode = True

class SubmissionBase(BaseModel):
    content: str
    score: int
    created_at: Optional[str] = str(datetime.now())

class Submission(SubmissionBase):
    id: int

    class Config:
        orm_mode = True