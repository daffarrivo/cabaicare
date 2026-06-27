01_PRD_FINAL_Sistem_Pakar_Cabai

Version: 1.1 Updated

Status: Approved

Project Type: Expert System Web Application

Method: Forward Chaining + Certainty Factor (CF)

Frontend: Next.js 16 + TypeScript + Tailwind CSS v4 + shadcn/ui

Database: PostgreSQL

Deployment: Vercel

1. Project Overview

Project Name

Sistem Pakar Diagnosa Penyakit Tanaman Cabai Menggunakan Metode Forward Chaining dan Certainty Factor (CF)

Project Description

Aplikasi web yang membantu pengguna melakukan identifikasi penyakit tanaman cabai berdasarkan fase

pertumbuhan dan gejala yang dipilih. Sistem menggunakan Forward Chaining sebagai mesin inferensi

awal untuk mencocokkan rule dan melacak kandidat penyakit, kemudian Certainty Factor untuk

menghitung persentase keyakinan diagnosis.

Sistem dirancang agar pengetahuan pakar dapat dikelola secara dinamis melalui dashboard admin tanpa

perlu melakukan perubahan kode ataupun deploy ulang aplikasi.

2. Background

Tanaman cabai merupakan salah satu komoditas pertanian yang rentan terhadap berbagai penyakit.

Proses identifikasi penyakit sering kali membutuhkan bantuan pakar pertanian yang tidak selalu tersedia.

Sistem pakar berbasis web dapat membantu pengguna memperoleh diagnosis awal secara cepat dengan

memanfaatkan basis pengetahuan yang berasal dari pakar. Metode Forward Chaining digunakan untuk

penalaran berbasis aturan dalam menemukan kandidat penyakit, dan Certainty Factor untuk menghitung

tingkat keyakinan diagnosis.

1

3. Objectives

Business Objectives

•

Membantu proses identifikasi penyakit tanaman cabai.

•

Menyediakan solusi penanganan awal penyakit.

•

Mendigitalisasi pengetahuan pakar pertanian.

Academic Objectives

•

Implementasi metode Forward Chaining.

•

Implementasi metode Certainty Factor.

•

Implementasi konsep Sistem Pakar.

•

Mendukung kebutuhan penelitian akademik dan tugas akhir.

4. Target Users

User

Karakteristik:

•

Petani cabai

•

Mahasiswa

•

Penyuluh pertanian

•

Masyarakat umum

Kebutuhan:

•

Diagnosis cepat

•

Mudah digunakan

•

Tidak membutuhkan pengetahuan teknis

Admin / Pakar

Karakteristik:

•

Pakar pertanian

•

Peneliti

•

Pengelola sistem

Kebutuhan:

•

Mengelola knowledge base

2

•

Mengelola gejala

•

Mengelola penyakit

•

Mengelola rule

•

Mengubah nilai Certainty Factor

•

Melihat riwayat diagnosa

5. Product Scope

Included Scope

Landing Page

•

Hero Section

•

About System

•

Feature Overview

•

How It Works

•

About Certainty Factor

•

CTA Consultation

Diagnosis Module

•

Gejala Selection

•

Certainty Factor Calculation

•

Diagnosis Result

Result Module

•

Disease Name

•

Confidence Percentage

•

Selected Symptoms

•

Treatment Recommendation

Admin Module

•

Authentication

•

Dashboard

•

Symptom Management

•

Disease Management

•

Knowledge Base Management

•

Consultation History

3

Excluded Scope

Versi awal tidak mencakup:

•

AI Chatbot

•

Machine Learning

•

Computer Vision

•

Image Upload Diagnosis

•

Mobile Native Application

•

Multi Language Support

6. Core Features

FTR-01 Landing Page

Purpose

Memberikan informasi mengenai sistem kepada pengguna.

Components

•

Navbar

•

Hero Section

•

Features Section

•

How It Works

•

Footer

FTR-02 Consultation

Purpose

Pengguna memilih fase pertumbuhan dan gejala yang ditemukan pada tanaman.

Flow

1. Pilih fase pertumbuhan (Pembibitan / Vegetatif / Generatif)

2. Pilih gejala berdasarkan fase

3. Tentukan tingkat keyakinan (CF User) per gejala

Output

Daftar gejala yang dipilih pengguna dan kandidat penyakit hasil Forward Chaining.

4

FTR-03 Certainty Factor Engine

Purpose

Menghitung tingkat keyakinan diagnosis berdasarkan gejala yang dipilih.

Formula Dasar (Teoritis)

CF(H,E) = MB(H,E) − MD(H,E)

Formula Implementasi (Praktis)

CF(H,E) = CF_Pakar × CF_User

Combination Formula

CFcombine = CFold + CFnew × (1 − CFold)

FTR-04 Diagnosis Result

Output

•

Nama penyakit

•

Persentase keyakinan

•

Nilai CF

•

Gejala terkait

•

Solusi penanganan

FTR-05 Admin Dashboard

Output

•

Total gejala

•

Total penyakit

•

Total konsultasi

•

Statistik sistem

FTR-06 Symptom Management

Admin dapat:

•

Create symptom

•

Read symptom

•

Update symptom

•

Delete symptom

5

FTR-07 Disease Management

Admin dapat:

•

Create disease

•

Read disease

•

Update disease

•

Delete disease

FTR-08 Knowledge Base Management

Admin dapat:

•

Menambah rule

•

Mengubah rule

•

Menghapus rule

Admin dapat:

•

Menambah relasi gejala-penyakit

•

Mengubah relasi gejala-penyakit

•

Menghapus relasi gejala-penyakit

FTR-09 Certainty Factor Management

Admin dapat:

•

Menambah nilai CF

•

Mengubah nilai CF

•

Menghapus nilai CF

Perubahan harus langsung aktif tanpa deploy ulang aplikasi.

FTR-10 Consultation History

Admin dapat melihat:

•

Waktu konsultasi

•

Gejala dipilih

•

Hasil penyakit

•

Persentase keyakinan

6

7. Functional Requirements

User Requirements

REQ-USR-01

Pengguna dapat mengakses landing page.

REQ-USR-02

Pengguna dapat memulai konsultasi.

REQ-USR-03

Pengguna dapat memilih gejala.

REQ-USR-04

Sistem menghitung nilai Certainty Factor.

REQ-USR-05

Sistem menampilkan hasil diagnosis.

REQ-USR-06

Sistem menampilkan solusi penanganan.

Admin Requirements

REQ-ADM-01

Admin dapat login.

REQ-ADM-02

Admin dapat mengelola gejala.

REQ-ADM-03

Admin dapat mengelola penyakit.

7

REQ-ADM-04

Admin dapat mengelola knowledge base.

REQ-ADM-05

Admin dapat melihat riwayat konsultasi.

REQ-ADM-06

Admin dapat mengelola relasi gejala dan penyakit.

REQ-ADM-07

Admin dapat mengubah nilai Certainty Factor.

REQ-ADM-08

Perubahan knowledge base langsung digunakan sistem tanpa deploy ulang.

8. Knowledge Base Requirements

REQ-KB-01

Knowledge base harus disimpan pada database.

REQ-KB-02

Knowledge base tidak boleh hardcoded pada source code aplikasi.

REQ-KB-03

Mesin inferensi harus mengambil data knowledge base secara dinamis dari database.

REQ-KB-04

Admin dapat menambah gejala baru.

REQ-KB-05

Admin dapat menambah penyakit baru.

8

REQ-KB-06

Admin dapat menambah rule baru.

REQ-KB-07

Admin dapat mengubah nilai CF tanpa deploy ulang.

REQ-KB-08

Knowledge base harus dapat diperbarui secara real-time melalui dashboard admin.

9. Non Functional Requirements

Performance

•

Initial page load < 3 detik

•

Diagnosis result < 5 detik

Security

•

Custom Authentication (JWT/Session)

•

Protected Admin Routes

•

Role Based Access

Availability

•

Target uptime 99%

Browser Compatibility

•

Google Chrome

•

Mozilla Firefox

•

Microsoft Edge

•

Safari

9

10. UI / UX Requirements

Design Direction

Modern Agricultural Technology Web Application

Karakteristik:

•

Clean

•

Professional

•

Premium

•

Modern

•

Human-designed look

•

Tidak terlihat AI-generated

Visual Style

•

Consistent spacing

•

Modern card design

•

Rounded corners

•

Soft shadows

•

Professional typography

•

Smooth animations

•

Clean color hierarchy

Responsive Design

Mobile

320px – 767px

Tablet

768px – 1023px

Desktop

1024px+

Semua halaman wajib responsive dan tidak mengalami layout break pada perangkat mobile.

10

Accessibility

•

Good color contrast

•
•

Readable typography
Accessible button sizes

11. Technology Stack

Frontend

•

Next.js 15

•

TypeScript

•

Tailwind CSS v4

•

shadcn/ui

Backend & Database

Database: PostgreSQL

•

Authentication: Custom JWT / Database Session

•

Storage: Local / Cloud Object Storage

Deployment

Frontend

Vercel

Backend

Next.js API Routes / pg Pool

11

12. Database Design (High Level)

users

symptoms

phases

Field

id

email

role

Type

UUID

String

String

created_at

Timestamp

Field

id

code

name

Type

UUID

String

String

description

Text

created_at

Timestamp

updated_at

Timestamp

Field

id

code

name

Type

UUID

String

String

description

Text

created_at

Timestamp

diseases

Field

id

code

name

Type

UUID

String

String

description

Text

solution

Text

created_at

Timestamp

updated_at

Timestamp

12

disease_symptoms

consultations

Field

id

Type

UUID

disease_id

UUID

symptom_id

UUID

phase_id

UUID

cf_expert

Decimal

created_at

Timestamp

updated_at

Timestamp

Field

id

Type

UUID

selected_symptoms

JSON

diagnosed_disease

UUID

cf_result

Decimal

consultation_date

Timestamp

13. Success Metrics

MVP Success Criteria

•

Diagnosis berjalan dengan benar

•

Perhitungan CF sesuai metode

•

Knowledge base dinamis

•

Admin dapat mengubah CF

•

Admin dapat mengubah rule

•

Responsive pada mobile

•

Data tersimpan di PostgreSQL

•

Deployment berhasil di Vercel

13

14. Development Roadmap

Phase 1 — Frontend Prototype

•

Landing Page

•

Consultation Page

•

Diagnosis Result Page

•

Responsive UI

Phase 2 — Core System

•

PostgreSQL Integration

•

Authentication

•

Forward Chaining Engine

•

Certainty Factor Engine

•

Database Integration

Phase 3 — Admin System

•

Admin Login

•

Dashboard

•

Symptom CRUD

•

Disease CRUD

•

Knowledge Base CRUD

•

Certainty Factor CRUD

Phase 4 — Production Ready

•

Testing

•

Performance Optimization

•

Security Review

•

Deployment

•

Documentation

Final Decisions

Item

Method

Decision

Certainty Factor

14

Item

Frontend

UI Library

Styling

Database

Deployment

Responsive

Decision

Next.js 16

shadcn/ui

Tailwind CSS

PostgreSQL

Vercel

Yes

Knowledge Base

Dynamic

Hardcoded Rules

Admin Manage CF

No

Yes

Admin Manage Knowledge Base

Yes

Mobile Friendly

Yes

Document Status: FINAL APPROVED

Version: 1.0

Prepared For: Sistem Pakar Diagnosa Penyakit Tanaman Cabai

15

