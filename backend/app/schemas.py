from typing import Union

from pydantic import BaseModel

class DocumentBase(BaseModel):
    title: str
    content: str
    url: str
    author: str
    course: str
    topic: str
    year: str
    uploader: str
    

class Document(DocumentBase):
    id: int

    class Config:
        orm_mode = True
