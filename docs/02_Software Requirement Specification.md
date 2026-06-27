SOFTWARE REQUIREMENT SPECIFICATION (SRS)

Sistem Pakar Diagnosa Penyakit Tanaman Cabai Menggunakan

Metode Forward Chaining dan Certainty Factor

Document ID: DOC-02

Version: 1.1 Updated

Status: Approved

Frontend: Next.js 16 + TypeScript + Tailwind CSS v4 + Shadcn/UI

Backend: Next.js API Routes

Database: PostgreSQL

Deployment: Vercel

Responsive Design: Mobile, Tablet, Desktop

1. Pendahuluan
1.1 Tujuan Sistem

Sistem Pakar Diagnosa Penyakit Tanaman Cabai dibangun untuk membantu petani melakukan identifikasi penyakit berdasarkan gejala yang muncul pada tanaman cabai menggunakan metode:

- Forward Chaining
- Certainty Factor (CF)

Sistem menghasilkan diagnosa penyakit beserta tingkat keyakinan dan rekomendasi penanganan.

1.2 Ruang Lingkup

User (Guest)

- Diagnosa penyakit tanpa login
- Melihat hasil diagnosa
- Menyimpan riwayat diagnosa (lokal)

Admin

- Login
- Kelola gejala
- Kelola penyakit
- Kelola rule FC
- Kelola nilai CF
- Melihat statistik sistem
- Melihat daftar user

2. Deskripsi Umum Sistem

2.1 Aktor

User/Petani (Guest)

Hak akses:

- Diagnosa
- Riwayat (lokal)

Admin

Hak akses:

- CRUD Gejala
- CRUD Penyakit
- CRUD Rule FC
- CRUD Certainty Factor
- Dashboard Statistik
- Lihat Daftar User

3. Functional Requirements

FR-01 Login Admin

Input:

- Email
- Password

Output:

- Dashboard Admin

FR-02 Diagnosa Penyakit

Input:

- Gejala yang dipilih user

Output:

- Kandidat penyakit

FR-03 Forward Chaining Engine

Contoh Rule:

IF G01 AND G02 AND G03 THEN P01

Output:

- Daftar penyakit kandidat

FR-04 Certainty Factor Engine

Rumus Dasar (Teoritis):

CF(H,E) = MB − MD

Rumus Implementasi (Praktis):

CF(H,E) = CF_User × CF_Pakar

Kombinasi:

CFcombine = CF1 + CF2 × (1 − CF1)

Output:

- Persentase keyakinan

FR-05 Hasil Diagnosa

Menampilkan:

- Nama penyakit
- Persentase keyakinan
- Deskripsi
- Penyebab
- Solusi
- Pencegahan

FR-06 Simpan Riwayat Diagnosa

Data:

- Gejala
- Penyakit
- Nilai CF
- Tanggal

Catatan: Riwayat disimpan secara lokal (localStorage) karena pengguna tidak wajib login.

FR-07 Riwayat Diagnosa

Filter:

- Terbaru
- Terlama

4. Functional Requirements Admin

FR-08 CRUD Gejala

Admin dapat:

- Tambah
- Edit
- Hapus
- Cari

FR-09 CRUD Penyakit

Admin dapat:

Field:

- Tambah
- Edit
- Hapus
- Kode
- Nama
- Deskripsi
- Solusi
- Pencegahan

FR-10 CRUD Knowledge Base Forward Chaining

Knowledge Base wajib dinamis.

TIDAK BOLEH hardcode.

Admin dapat:

- Tambah rule
- Edit rule
- Hapus rule

Perubahan langsung digunakan sistem tanpa deploy ulang.

FR-11 CRUD Certainty Factor

Admin dapat mengubah:

- MB
- MD
- CF Pakar

Perubahan langsung digunakan engine.

FR-12 Dashboard Statistik

Menampilkan:

- Total Diagnosa
- Penyakit Terbanyak
- Grafik Diagnosa
- Daftar User

FR-13 Lihat Daftar User

Admin dapat:
- Melihat daftar user terdaftar

5. Non Functional Requirements

NFR-01 Performance

- Response < 3 detik
- Diagnosa < 5 detik

NFR-02 Security

Menggunakan:

- Custom Auth Session / JWT
- SQL Injection Protection (Prepared Statements / ORM)
- Password Hashing (bcrypt/argon2)

NFR-03 Scalability

Mampu menangani:

- 1.000+ user
- 10.000+ riwayat diagnosa

NFR-04 Responsive Design

Support:

Mobile

- Android
- iPhone

Tablet

- iPad
- Android Tablet

Desktop

- Laptop
- PC

Breakpoint:

- Mobile < 768px
- Tablet 768–1023px
- Desktop ≥ 1024px

UI tidak boleh rusak pada seluruh ukuran layar.

6. Database Requirements users

- id
- name
- email
- role

gejala

- id
- kode_gejala
- nama_gejala

phases

- id
- kode_fase
- nama_fase
- deskripsi

penyakit

- id
- kode_penyakit
- nama_penyakit
- deskripsi
- solusi
- pencegahan

rules

- id
- penyakit_id

rule_details

- id
- rule_id
- gejala_id

certainty_factor

- id
- penyakit_id
- gejala_id
- mb
- md
- cf

diagnosa

- id
- user_id
- hasil
- tanggal

7. Business Rules

BR-01 Admin wajib login

BR-02 User dapat melakukan diagnosa tanpa login

BR-03 Knowledge Base hanya dapat diubah admin

BR-04 Rule FC disimpan di database

BR-05 Nilai CF disimpan di database

BR-06 Perubahan knowledge base langsung digunakan engine

BR-07 Tidak ada hardcode rule pada source code

BR-08 Sistem menampilkan maksimal 5 penyakit dengan CF tertinggi

8. Acceptance Criteria

- User dapat melakukan diagnosa
- Admin dapat mengubah knowledge base
- Rule FC tersimpan di database
- CF tersimpan di database
- Tidak perlu deploy ulang saat rule berubah
- Riwayat tersimpan
- Responsive di semua perangkat
- Deploy di Vercel
- Database menggunakan PostgreSQL

Technology Stack

Frontend:

- Next.js 16
- TypeScript
- Tailwind CSS v4
- Shadcn/UI

Backend:

- Next.js API Routes / pg Pool

Database:

- PostgreSQL

Hosting:

- Vercel

Inference Method:

- Forward Chaining
- Certainty Factor

END OF DOCUMENT
