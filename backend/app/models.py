from sqlalchemy import Column, Integer, String, Text

from .database import Base


class Document(Base):
    __tablename__ = "documents"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(50), unique=True, index=True)
    content = Column(Text)
    url = Column(String(50))
    author = Column(String(50))
    course = Column(String(20))
    topic = Column(String(20))
    year = Column(String(4))
    uploader = Column(String(20))


# class History(Base):
#     __tablename__ = "items"

#     id = Column(Integer, primary_key=True, index=True)
#     title = Column(String, index=True)
#     description = Column(String, index=True)
#     owner_id = Column(Integer, ForeignKey("users.id"))

#     owner = relationship("User", back_populates="items")
