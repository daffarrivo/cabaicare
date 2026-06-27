DOC06 — UI/UX Specification

Sistem Pakar Diagnosis Penyakit Cabai Berbasis Web

Version: 1.1 Updated

Status: Final Design Specification

1. Tujuan Dokumen

Dokumen ini menjelaskan spesifikasi antarmuka pengguna (UI) dan pengalaman pengguna (UX) untuk

Sistem Pakar Diagnosis Penyakit Cabai berbasis web yang menggunakan metode Forward

Chaining dan Certainty Factor.

Dokumen menjadi acuan implementasi frontend menggunakan Next.js dan integrasi dengan backend

service yang telah dirancang pada DOC05.

2. Design Principles

2.1 Simplicity

Pengguna utama adalah:

•

Petani cabai

•

Penyuluh pertanian

•

Mahasiswa pertanian

•

Administrator sistem

Interface harus sederhana dan mudah dipahami oleh pengguna non-teknis.

2.2 Mobile First

Mayoritas pengguna mengakses sistem melalui smartphone.

Prioritas desain:

1.

Mobile

2.

Tablet

3.

Desktop

1

2.3 Fast Diagnosis

Pengguna harus dapat menyelesaikan proses diagnosis dengan langkah minimal.

Target:

•

Maksimal 3 menit per diagnosis

•

Maksimal 15–20 gejala dipilih

2.4 Accessibility

Interface harus:

•

Mudah dibaca

•

Kontras tinggi

•

Tombol berukuran cukup besar

•

Mudah digunakan di lapangan

3. User Roles

3.1 Guest User

Hak akses:

•

Melakukan diagnosis (tanpa login)

•

Melihat hasil diagnosis

•

Melihat informasi penyakit

3.2 Administrator

Hak akses:

•

Login sistem

•

Kelola gejala

•

Kelola penyakit

•

Kelola aturan

•

Kelola basis pengetahuan

•

Melihat histori diagnosis

•

Melihat daftar user

2

4. Application Sitemap

Home (/)

│
├── Diagnosis (/diagnosis)
│   ├── Pilih Fase Tanam
│   ├── Pilih Gejala
│   ├── Tingkat Keyakinan
│   └── Hasil Diagnosis

│
├── Referensi Penyakit (/diseases)

│
└── Admin
    ├── Login (/admin/login)
    ├── Dashboard (/admin/dashboard)
    ├── Gejala (/admin/symptoms)
    ├── Penyakit (/admin/diseases)
    ├── Rules (/admin/rules)
    ├── Riwayat Diagnosis (/admin/history)
    └── Daftar User (/admin/users)

5. Color System

Primary

#16A34A

Representasi:

•

Pertanian

•

Tanaman sehat

•

Alam

Secondary

#F59E0B

3

Representasi:

•

Peringatan

•

Diagnosa

Danger

#DC2626

Representasi:

•

Penyakit berat

Neutral

#F8FAFC

#64748B

#0F172A

6. Typography

Font Family:

Inter

Hierarchy:

H1 = 32px

H2 = 24px

H3 = 20px

Body = 16px

Caption = 14px

4

7. Public Pages

7.1 Home Page

Tujuan:

Menjelaskan fungsi sistem dan mengarahkan pengguna ke proses diagnosis.

Komponen:

•

Navbar

•

Hero Section

•

Penjelasan Sistem

•

Cara Penggunaan

•

Tombol Mulai Diagnosis

•

Footer

Layout

+----------------------------------+

| Logo            Menu             |

+----------------------------------+

Sistem Pakar Diagnosis Cabai

[ Mulai Diagnosis ]

Cara Kerja Sistem

Informasi Penyakit

Footer

7.2 Diagnosis Page

Tujuan:

Mengumpulkan gejala yang dialami tanaman.

5

Step 1

Pilih fase pertumbuhan:

○ Pembibitan
○ Vegetatif
○ Generatif

Step 2

Pilih gejala.

Contoh:

☑ Daun menguning
☑ Bercak coklat
☑ Buah membusuk
☑ Daun keriting

Step 3

Pilih tingkat keyakinan.

0.2 = Tidak Yakin

0.4 = Kurang Yakin

0.6 = Cukup Yakin

0.8 = Yakin

1.0 = Sangat Yakin

Menggunakan inline segmented control (5 pilihan).

7.3 Result Page

Menampilkan hasil inferensi.

Komponen:

6

Diagnosis Utama

Antraknosa

Tingkat Kepastian:

87%

Penyebab

Deskripsi penyakit.

Gejala Cocok

Daftar gejala yang dipilih pengguna.

Solusi Penanganan

Rekomendasi tindakan.

Alternatif Diagnosis

Busuk Buah : 65%

Layu Fusarium : 42%

8. Admin Pages

8.1 Login

Field:

Email

Password

Button:

7

Masuk

Autentikasi menggunakan Custom JWT / Session Auth.

8.2 Dashboard

Menampilkan:

•

Total gejala

•

Total penyakit

•

Total rules

•

Total diagnosis

•

Total user

8.3 Gejala Management

Fitur:

•

Tambah gejala

•

Edit gejala

•

Hapus gejala

•

Cari gejala

8.4 Penyakit Management

Fitur:

•

CRUD penyakit

•

Upload gambar penyakit

•

Solusi penanganan

8.5 Rules Management

Fitur:

•

Membuat aturan Forward Chaining

•

Menentukan nilai MB

•

Menentukan nilai MD

Contoh:

IF G001 AND G003

THEN P002

MB = 0.9

MD = 0.1

8.6 Diagnosis History

Data:

•

Tanggal

•

Fase tanam

•

Hasil diagnosis

•

Nilai CF

9. Responsive Design

Mobile

320px–767px

Layout:

•

Single column

Tablet

768px–1023px

9

Layout:

•

Two columns

Desktop

1024px+

Layout:

•

Multi-column dashboard

10. UI Components

Shared Components

Navbar

Digunakan seluruh halaman.

Sidebar

Digunakan admin dashboard.

Card

Menampilkan:

•

Penyakit

•

Statistik

Data Table

Menampilkan data master.

10

Modal

Digunakan untuk:

•

Tambah data

•

Edit data

•

Konfirmasi hapus

Toast Notification

Status:

Success

Error

Warning

Info

11. Frontend Technology

Framework:

Next.js 16

Language:

TypeScript

Styling:

Tailwind CSS v4

Component Library:

shadcn/ui

Form Validation:

11

Zod

React Hook Form

Authentication:

Custom JWT / Session Auth

Storage:

Local Storage / Cloud Object Storage

Backend Communication:

Next.js Route Handlers

Server Actions

Database Client (pg Pool / ORM)

12. Success Criteria

Aplikasi dianggap memenuhi spesifikasi UI/UX apabila:

•

Pengguna dapat menyelesaikan diagnosis dalam kurang dari 3 menit.

•

Seluruh fitur dapat digunakan pada perangkat mobile.

•

Hasil diagnosis mudah dipahami.

•

Administrator dapat mengelola basis pengetahuan tanpa bantuan developer.

•

Sistem konsisten dengan metode Forward Chaining dan Certainty Factor yang dirancang pada

DOC05.

12

