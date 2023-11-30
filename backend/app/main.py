from .services.plag_service import PlagiarismDetect

from .utils.pdf_handler import get_content

from fastapi import Depends, FastAPI, File, UploadFile, HTTPException, Form, status
from fastapi.middleware.cors import CORSMiddleware

from sqlalchemy.orm import Session

from . import models
from .database import SessionLocal, engine


app = FastAPI()
models.Base.metadata.create_all(bind=engine)

origins = [
    "https://3aa3-36-85-39-220.ngrok-free.app",
    "http://localhost:1604",
    "localhost:1604"
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

@app.get('/contributions/', status_code=status.HTTP_200_OK)
async def get_documents(db: Session = Depends(get_db)):
    docs = db.query(models.Document).offset(0).all()
    if docs is None:
        raise HTTPException(status_code=404, detail='Document not found')
    
    return docs

@app.post('/check/', status_code=status.HTTP_201_CREATED)
async def plagiarism_check(
    file: UploadFile = File(...), 
    start: int = Form(...), 
    end: int = Form(...), 
    db: Session = Depends(get_db)):
    try:
        # Get uploaded file content
        raw_contents = await file.read()
        content = get_content(raw_contents, start, end)

        # Get db data
        docs = db.query(models.Document).offset(0).limit(10).all()
        plag_detect = PlagiarismDetect()
        similar_docs = plag_detect.compute_similarity(docs, content)

        data = {
            'content': content, 
            'score': similar_docs[0]['score']
        }
        
        doc = models.Submission(**data)
        db.add(doc)
        db.commit()

        return { 
            'status' : 'OK', 
            'score' : similar_docs[0]['score'], 
            'similar_docs' : similar_docs 
        }
    except Exception as e:
        return { 'status' : 'ERROR', 'message' : e }

@app.post('/contribute/', status_code=status.HTTP_201_CREATED)
async def submit_contribution(
    file: UploadFile = File(...),
    start: int = Form(...), 
    end: int = Form(...),  
    title: str = Form(...), 
    author: str = Form(...),
    course: str = Form(...),
    topic: str = Form(...),
    year: str = Form(...),
    uploader: str = Form(...),
    db: Session = Depends(get_db)):
    try:
        raw_contents = await file.read()
        content = get_content(raw_contents, start, end)

        data = {
            'title':title, 
            'author':author, 
            'content':content, 
            'course':course, 
            'topic':topic, 
            'year':year, 
            'uploader':uploader
        }
        
        doc = models.Document(**data)
        
        db.add(doc)
        db.commit()
        
        return { 'status' : 'OK', 'message' : 'Thank you for your contribution' }
    except Exception as e:
        return { 'status' : 'ERROR', 'message' : e }