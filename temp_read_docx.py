import json
from docx import Document

doc_path = r"C:\Users\advan\Downloads\ieee-format-template-word-2025 (1).docx"
doc = Document(doc_path)

for i, para in enumerate(doc.paragraphs):
    if para.text.strip():
        print(f"[P{i}] {para.text}")
