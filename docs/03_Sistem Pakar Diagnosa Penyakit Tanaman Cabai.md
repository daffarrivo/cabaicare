SOFTWARE ARCHITECTURE DOCUMENT (SAD)

Sistem Pakar Diagnosa Penyakit Tanaman Cabai

Menggunakan Metode Forward Chaining dan Certainty Factor

Document Information

Item

Value

Document ID

DOC-03

Version

1.0 Final

Status

Approved

Frontend

Next.js 15

Backend

Supabase

Database

PostgreSQL

Deployment

Vercel

Architecture

Serverless Web Application

1. Tujuan Dokumen

Dokumen ini menjelaskan arsitektur sistem secara menyeluruh meliputi:

•

Struktur sistem

•

Struktur database

•

Arsitektur frontend

•

Arsitektur backend

•

Inference Engine

•

Authentication

•

Deployment

•

Security

•

Integrasi komponen

Dokumen ini menjadi acuan utama pada tahap implementasi.

1

2. Gambaran Umum Arsitektur

Sistem menggunakan arsitektur modern berbasis:

•

Next.js 15

•

Supabase

•

PostgreSQL

•

Vercel

Arsitektur:

User

  │

  ▼
Next.js Frontend

  │

  ▼
Supabase Auth

  │

  ▼
Supabase Database

  │

  ▼
Inference Engine

  │

  ▼
Diagnosis Result

3. Technology Stack

Frontend

•

Next.js 15 App Router

•

TypeScript

•

Tailwind CSS

•

Shadcn UI

•

React Hook Form

•

Zod Validation

2

Backend

Supabase

Digunakan untuk:

•

Authentication

•

Database

•

Storage

•

Security

Database

PostgreSQL

Managed by Supabase

Deployment

Frontend:

•

Vercel

Backend:

•

Supabase Cloud

4. Architecture Pattern

Sistem menggunakan:

Layered Architecture

Presentation Layer

      │
Business Logic Layer

      │
Inference Engine Layer

      │
Data Access Layer

3

      │
Database Layer

5. Frontend Architecture

Struktur Folder

src/

├── app/
│   ├── login
│   ├── dashboard
│   ├── diagnosa
│   ├── riwayat
│   └── admin

├── components/
│   ├── ui
│   ├── forms
│   ├── cards
│   └── charts

├── lib/
│   ├── supabase
│   ├── cf
│   └── forward-chaining

├── hooks/

├── types/

└── utils/

6. Backend Architecture

Backend menggunakan Supabase.

Tidak menggunakan Express.js.

4

Tidak menggunakan NestJS.

Semua operasi dilakukan melalui:

•

Supabase Client

•

PostgreSQL

•

Server Actions

7. Authentication Architecture

Supabase Auth
Role:

Guest

Akses:

•

Diagnosa (tanpa login)

Admin

Akses:

•

Dashboard

•

Knowledge Base

•

Statistik

•

Lihat Daftar User

Authentication Flow

Login

   │

   ▼
Supabase Auth

   │

   ▼
JWT Token

   │

5

   ▼
Role Verification

   │

   ▼
Dashboard

8. Knowledge Base Architecture

PENTING

Knowledge Base TIDAK di-hardcode.

Semua data berada di database.

Admin dapat mengubah seluruh knowledge base tanpa deploy ulang.

Data Yang Dikelola

Gejala

Contoh:

•

G01 Daun menguning

•

G02 Daun keriting

Penyakit

Contoh:

•

P01 Antraknosa

•

P02 Layu Fusarium

Rule Forward Chaining

Contoh:

IF G01 AND G02 AND G03

THEN P01

6

Disimpan pada database.

Certainty Factor

Contoh:

P01 - G01 = 0.8

P01 - G02 = 0.7

Disimpan pada database.

9. Inference Engine Architecture

Sistem menggunakan dua tahap:

Tahap 1

Forward Chaining

Mencari penyakit kandidat.

Tahap 2

Certainty Factor

Menghitung tingkat keyakinan.

Flow

User memilih gejala

          │

          ▼
Forward Chaining

          │

          ▼
Penyakit Kandidat

          │

7

          ▼
Certainty Factor

          │

          ▼
Ranking Penyakit

10. Forward Chaining Flow

Contoh:

Rule:

IF G01 AND G02

THEN P01

User memilih:

G01

G02

Hasil:

P01 Aktif

11. Certainty Factor Flow

Formula:

CF(H,E)=CFuser × CFpakar

Kombinasi:

CFcombine =

CF1 + CF2(1-CF1)

Output:

8

P01 = 0.89

89%

12. Database Architecture

Entity Relationship

Users

  │
  └── Diagnosa (admin log)

Gejala

  │
  └── Rule_Details

Phases

  │
  └── Rules

Penyakit

  │
  ├── Rules
  └── Certainty_Factor

Rules

  │
  └── Rule_Details

13. Database Tables

users

id UUID PK

name VARCHAR

email VARCHAR

role VARCHAR

9

gejala

id UUID PK

kode_gejala VARCHAR

nama_gejala TEXT

phases

id UUID PK

kode_fase VARCHAR

nama_fase VARCHAR

deskripsi TEXT

penyakit

id UUID PK

kode_penyakit VARCHAR

nama_penyakit VARCHAR

deskripsi TEXT
solusi TEXT

pencegahan TEXT

rules

id UUID PK

penyakit_id UUID

rule_details

id UUID PK

rule_id UUID
gejala_id UUID

certainty_factor

id UUID PK

penyakit_id UUID

gejala_id UUID

mb FLOAT

10

md FLOAT

cf FLOAT

diagnosa

id UUID PK

user_id UUID NULLABLE

hasil JSONB

created_at TIMESTAMP

14. API Architecture

Karena menggunakan Supabase.

API tidak dibuat manual.

Komunikasi:

Frontend

   │

   ▼
Supabase Client

   │

   ▼
PostgreSQL

11

15. Security Architecture

Authentication

Supabase Auth

Authorization

Role Based Access Control

GUEST

ADMIN

Row Level Security

Aktif pada:

•

diagnosa

•

users

Data Protection

•

JWT

•

HTTPS

•

Password Hashing

16. Responsive Architecture

Mobile First

Breakpoint:

Mobile < 768px

Tablet 768–1023px

12

Desktop >= 1024px

Layout Mobile

Navbar

Content

Bottom Navigation

Layout Desktop

Sidebar

Content

17. Deployment Architecture

GitHub

   │

   ▼
Vercel

   │

   ▼
Production

Database:

Supabase Cloud

18. Monitoring

Menggunakan:

•

Vercel Analytics

13

•

Supabase Logs

19. Performance Target

Page Load:

< 3 detik

Diagnosis:

< 5 detik

Database Query:

< 1 detik

20. Scalability

Target:

•

1.000+ User

•

10.000+ Diagnosa

•

Unlimited Rule Knowledge Base

21. Future Enhancement

Fase berikutnya:

•

Upload Foto Tanaman

•

AI Image Detection

•

PWA Mobile App

•

Multi Bahasa

•

Export PDF Hasil Diagnosa

•

Dashboard Pakar

14

22. Architecture Decision Record (ADR)

ADR-01

Frontend menggunakan Next.js 15

ADR-02

Database menggunakan PostgreSQL via Supabase

ADR-03

Deployment menggunakan Vercel

ADR-04

Knowledge Base wajib dinamis

ADR-05

Tidak ada hardcode rule pada source code

ADR-06

Inference Engine menggunakan:

•

Forward Chaining

•

Certainty Factor

ADR-07

Responsive Mobile First wajib diterapkan

END OF DOCUMENT

File Name: 03_SAD_FINAL_Sistem_Pakar_Cabai.md

15

