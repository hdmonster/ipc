import io
from PyPDF2 import PdfReader 

def get_content(raw_content, start, end):
    pdf_reader = PdfReader(io.BytesIO(raw_content))
    
    pages = pdf_reader.pages 

    # introduction_section_index = get_section_page_index('BAB', pages)
    # conclusion_section_index = len(pages) - get_section_page_index('BAB', pages[::-1])

    content = ""

    for page in pages[start - 1 : end]:
        content += remove_escpace_seq(page.extract_text())
    
    return content

def get_section_page_index(keyword, pages):
     for index, page in enumerate(pages):
          if keyword in page.extract_text():
               return index
          
def remove_escpace_seq(input_string):
    escape_seq = ["\n", "'"]

    words = input_string.split()
    escape_sequence_set = set(escape_seq)
    filtered_words = [word for word in words if word not in escape_sequence_set]
    result_string = ' '.join(filtered_words)
    return result_string