from ..schemas import DocumentBase
import nltk, string
from operator import itemgetter
from sklearn.feature_extraction.text import TfidfVectorizer

# nltk.download('punkt')

class PlagiarismDetect():
    vectorizer = None
    
    @staticmethod
    def tokenize_and_stem(doc):
        """
        Split document in tokens and perform stemming 
        """
        punctuation_remover = dict((ord(char), None) for char in string.punctuation)
        tokens = nltk.word_tokenize(doc.lower().translate(punctuation_remover))

        return PlagiarismDetect.stem_tokens(tokens)

    @staticmethod
    def stem_tokens(tokens):
        """
        Stem the tokenized document
        """
        stemmer = nltk.stem.porter.PorterStemmer()
        stemmed_token = [stemmer.stem(item) for item in tokens]

        return stemmed_token

    
    def cos_similarity(self, db_doc, input_doc):
        vectorizer = self.vectorizer or TfidfVectorizer(tokenizer=PlagiarismDetect.tokenize_and_stem, stop_words='english')
        tfidf = vectorizer.fit_transform([db_doc, input_doc])
        return ((tfidf * tfidf.T).A)[0,1]

    
    def compute_similarity(self, db_doc : DocumentBase, input_doc):
        similar_docs_ranked = [] 
        for doc in db_doc:
            score = round(self.cos_similarity(doc.content, input_doc) * 100)
            similar_docs_ranked.append({'title': doc.title, 'course':doc.course, 'author': doc.author, 'year':doc.year, 'score': score})

        return sorted(similar_docs_ranked, key=itemgetter('score'), reverse=True)
