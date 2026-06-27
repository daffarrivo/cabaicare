DOC07 — Deployment & DevOps

Sistem Pakar Diagnosis Penyakit Cabai Berbasis Web

Version: 1.0

Status: Production Deployment Specification

1. Tujuan Dokumen

Dokumen ini menjelaskan strategi deployment, DevOps, monitoring, keamanan, backup, dan maintenance untuk Sistem Pakar Diagnosis Penyakit Cabai berbasis web.

Dokumen menjadi acuan implementasi lingkungan produksi berdasarkan arsitektur yang telah dirancang pada:

- DOC 01 — Product Requirements Document
- DOC 02 — Software Requirement Specification
- DOC 03 — Software Architecture Document
- DOC 04 — API Specification
- DOC 05 — Knowledge Base & Inference Engine Design
- DOC 06 — UI/UX Specification

2. Deployment Architecture

Production Architecture

Users

  │

  ▼
Vercel CDN

  │

  ▼
Next.js Application

  │
  ├── Route Handlers
  ├── Server Actions
  └── Inference Engine

          │

          ▼

     PostgreSQL Database (Direct Connection)

3. Infrastructure Overview

Frontend

Platform:

Vercel

Responsibilities:

- Render UI
- Static Asset Delivery
- Server Components
- Route Handlers
- Middleware
- Authentication Session Handling

Backend

Backend berjalan dalam Next.js Fullstack Application.

Components:

Route Handlers

Server Actions

Inference Engine

Validation Layer

Tidak memerlukan server terpisah.

Database

Provider:

PostgreSQL (Direct Connection / pg Pool)

Responsibilities:

- Menyimpan data gejala
- Menyimpan data penyakit
- Menyimpan data fase pertumbuhan
- Menyimpan rules
- Menyimpan histori diagnosis
- Menyimpan data administrator

Development

NODE_ENV=development

DATABASE_URL="postgresql://user:password@localhost:5432/cabaicare"

JWT_SECRET="your-development-jwt-secret"

Production

NODE_ENV=production

DATABASE_URL="postgresql://prod_user:prod_password@host:5432/cabaicare"

JWT_SECRET="your-production-jwt-secret-key"

Security Rules

Jangan pernah mengekspos:

DATABASE_URL atau JWT_SECRET ke frontend.

Hanya digunakan pada:

- Route Handlers
- Server Actions
- Backend Service

5. Build Pipeline

Build Flow

Developer Push

      │

      ▼

GitHub Repository

      │

      ▼

Vercel Build

      │

      ▼

Production Deployment

Branch Strategy

Main main

Production branch.

Development develop

Testing branch.

Feature feature/*

Contoh:

feature/diagnosis feature/admin-dashboard feature/rules-management

6. CI/CD Workflow

Trigger

Deployment otomatis berjalan saat:

Push ke main

Pipeline

Step 1

Install dependencies npm install

Step 2

Linting npm run lint

Step 3

Type Checking npm run type-check

Step 4

Build Application npm run build

Step 5

Deploy vercel deploy

Migration Folder migrations/ (atau prisma/migrations jika menggunakan Prisma)

Contoh:

001_initial_schema.sql

002_seed_phases.sql

003_seed_gejala.sql

004_seed_penyakit.sql

005_seed_rules.sql

Deployment Flow

Migration

     ▼

PostgreSQL Database

     ▼

Application Deployment

8. File Storage Strategy

Provider:

Local Storage / Cloud Object Storage (e.g. AWS S3)

Storage Bucket

Disease Images disease-images

Menyimpan gambar penyakit.

Provider

Custom Auth Session / JWT

Login Flow

Admin Login

      │

      ▼

Next.js API Auth / DB Verify

      │

      ▼

JWT Session

      │

      ▼

Dashboard Access

Protected Routes

/admin

/admin/gejala

/admin/penyakit

/admin/rules

/admin/history

10. Authorization Model

Role:

admin

Administrator memiliki akses penuh terhadap:

- Gejala
- Penyakit
- Rules
- Histori Diagnosis
- Daftar User

11. Monitoring

Application Monitoring

Platform:

Vercel Analytics

Metrics:

- Page Views
- Traffic
- Response Time
- Errors

Database Monitoring

Platform:

Database Dashboard / pgAdmin / Neon Dashboard

Metrics:

- Query Performance
- Database Usage
- Storage Usage
- Authentication Activity

12. Logging Strategy

Application Logs

Mencatat:

Login Admin

Diagnosis

Rule Evaluation

System Error

Error Logs

Mencatat:

API Error

Database Error

Authentication Error

Inference Error

13. Backup Strategy

Database Backup

Provider:

pg_dump / Managed Database Backup

Frekuensi:

Daily

Retention Policy

30 Days

14. Disaster Recovery

Failure Scenario

Application Failure

Solusi:

Redeploy melalui Vercel

Database Failure

Solusi:

Restore dari pg_dump / PostgreSQL Backup

Storage Failure

Solusi:

Restore Bucket Backup

15. Performance Optimization

Frontend

Menggunakan:

Server Components untuk mengurangi JavaScript client-side.

Data Fetching

Menggunakan:

Server Actions dan

Route Handlers untuk mengurangi latency.

Image Optimization

Menggunakan:

next/image untuk:

- Lazy Loading
- Responsive Images
- Automatic Optimization

16. Scalability Plan

Current Scope

Target:

100–500 pengguna aktif per hari

Future Scale

Jika trafik meningkat:

Vercel Pro

Upgrade database tier / performance pool dapat digunakan tanpa perubahan arsitektur besar.

17. Security Checklist

Sebelum produksi:

- HTTPS aktif
- Environment Variable aman
- Database constraints & input validation active
- Route admin diproteksi
- Input Validation menggunakan Zod
- Sanitasi input pengguna
- Error Handling aktif
- Backup otomatis aktif

18. Production Readiness Checklist

Functional

- Diagnosis berjalan normal
- Forward Chaining berjalan normal
- Certainty Factor berjalan normal
- CRUD admin berjalan normal

Security

- Authentication aktif
- Authorization aktif
- HTTPS aktif

Reliability

- Backup aktif
- Monitoring aktif
- Logging aktif

19. Final Deployment Stack

Frontend:
- Next.js 16
- TypeScript
- Tailwind CSS v4
- shadcn/ui

Backend:
- Next.js Route Handlers
- Server Actions

Inference Engine:
- Forward Chaining
- Certainty Factor

Database:
- PostgreSQL (Direct Connection / pg Pool)

Authentication:
- Custom Auth (JWT / Session)

Storage:
- Local Storage / Cloud Object Storage

Deployment:
- Vercel

Monitoring:
- Vercel Analytics
- Database / Server Logs

Validation:
- Zod

20. Conclusion

Arsitektur deployment menggunakan Next.js Fullstack dan PostgreSQL memungkinkan sistem pakar berjalan dengan biaya operasional rendah, proses deployment sederhana, maintenance mudah, serta tetap mampu mendukung proses inferensi Forward Chaining dan Certainty Factor secara efisien pada lingkungan produksi.
