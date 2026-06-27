# DESIGN DOCUMENT
## Sistem Pakar Diagnosis Hama dan Penyakit Cabai

Version: 1.1 (Updated)

Tech Stack: Next.js 16 + TypeScript + Tailwind CSS v4 + shadcn/ui

---

# 1. DESIGN GOALS

Tujuan desain aplikasi:

- Mudah digunakan oleh petani maupun pengguna umum.
- Mobile-first dan responsive.
- Fokus pada proses diagnosis bertahap.
- Menampilkan hasil diagnosis yang mudah dipahami.
- Menonjolkan fase pertumbuhan sebagai inovasi utama sistem.

Prinsip UI:

- Simple
- Guided
- Informative
- Agricultural Theme
- Mobile First

---

# 2. VISUAL IDENTITY

## Primary Color

Hijau Daun (Emerald)

#16A34A

---

## Secondary Color

Cabai Merah

#DC2626

---

## Accent Color

Kuning

#FACC15

---

## Background

#F8FAFC

---

## Surface

#FFFFFF

---

## Text

Primary:
#0F172A

Secondary:
#475569

---

# 3. APPLICATION FLOW

Landing Page
↓
Pilih Fase Pertumbuhan
↓
Pilih Gejala
↓
Input Tingkat Keyakinan
↓
Proses Diagnosa
↓
Hasil Diagnosa
↓
Rekomendasi Penanganan

---

# 4. PAGE STRUCTURE

## 4.1 Landing Page

Tujuan:
Memberikan informasi sistem.

Section:

### Hero

Judul:

"Sistem Pakar Diagnosis Hama dan Penyakit Cabai"

Subjudul:

"Diagnosis cepat berbasis Forward Chaining dan Certainty Factor"

CTA:

[Mulai Diagnosa]

---

### Feature Section

Card 1

🌱 Berdasarkan Fase Pertumbuhan

Card 2

🧠 Forward Chaining

Card 3

📊 Certainty Factor

Card 4

💡 Rekomendasi Penanganan

---

### How It Works

1. Pilih fase pertumbuhan
2. Pilih gejala
3. Tentukan tingkat keyakinan
4. Lihat hasil diagnosis

---

# 4.2 Diagnosis Wizard

Route: /diagnosis

Model: Step Form (4 Steps)

---

## STEP 1

Pilih Fase Pertumbuhan

Card Selection (grid 3 kolom)

[ Pembibitan (F01) ]
[ Vegetatif (F02) ]
[ Generatif (F03) ]

Hanya boleh memilih satu. Checkmark animasi muncul pada card terpilih.

Button:

Lanjut

---

## STEP 2

Pilih Gejala

Gejala yang muncul hanya sesuai fase.

Contoh:

☐ Daun menguning

☐ Buah busuk basah

☐ Batang membusuk

☐ Tulang daun kuning

☐ Daun layu

Search bar tersedia.

Button:

Kembali
Lanjut

---

## STEP 3

Tingkat Keyakinan (CF User)

Untuk setiap gejala terpilih, menggunakan segmented control:

---

Daun Menguning

○ Tidak Yakin (0.2)
○ Kurang Yakin (0.4)
○ Cukup Yakin (0.6)
○ Yakin (0.8)
○ Sangat Yakin (1.0)

---

Menggunakan inline segmented control (5 pilihan).

Button:

Proses Diagnosa

---

# 4.3 Loading Diagnosis

Animation:

Scanning Plant...

Menghitung Certainty Factor...

Mencocokkan Rule...

Durasi:

1 - 2 detik

---

# 4.4 Result Page

Bagian paling penting.

---

## Diagnosis Utama

Card Besar

Nama Penyakit

Contoh:

Antraknosa

Confidence:

84%

Progress Ring

---

## Tingkat Keyakinan

Warna:

80-100%
Hijau

60-79%
Kuning

0-59%
Merah

---

## Kandidat Diagnosis Lain

Card List

1. Antraknosa
84%

2. Busuk Buah Choanephora
71%

3. Layu Fusarium
43%

---

## Gejala Yang Cocok

Checklist

✓ Buah busuk basah

✓ Daun menguning

✓ Cabang mengering

---

## Rule Yang Terpicu

Contoh:

Fase Generatif

+
Buah Busuk Basah

↓

Antraknosa

---

## Penjelasan Penyakit

Deskripsi singkat penyakit.

---

## Rekomendasi Penanganan

### Pengendalian

- Sanitasi tanaman
- Pemangkasan
- Fungisida yang disarankan

### Pencegahan

- Rotasi tanaman
- Monitoring rutin

---

## Action Button

[ Diagnosa Ulang ]

[ Download PDF ]

---

# 4.5 Disease Catalog Page

Route: /diseases

Referensi penyakit cabai lengkap.

Komponen:

Search bar + Filter kategori (Semua/Jamur/Bakteri/Virus/Nematoda/Lingkungan)
Grid card 3 kolom (kode, nama, deskripsi, badge bahaya)
Dialog detail (deskripsi, penyebab, gejala, solusi, pencegahan)

---

# 4.6 History Page (Admin Only)

Route: /admin/history

Riwayat diagnosis (hanya akses admin).

Table:

Tanggal
Fase
Diagnosis
CF

---

Filter:

- Persemaian
- Vegetatif
- Generatif

---

# 4.7 Admin Dashboard

Role:

Admin

---

Menu (Sidebar):

Dashboard (/admin/dashboard)

Gejala (/admin/symptoms)

Penyakit (/admin/diseases)

Rule (/admin/rules)

Riwayat Diagnosa (/admin/history)

User (/admin/users)

---

Dashboard Widgets:

Jumlah Penyakit

Jumlah Gejala

Jumlah Rule

Jumlah Diagnosa

---

# 5. MOBILE DESIGN

Bottom Navigation

[ Home ]
[ Diagnosa ]
[ Penyakit ]

---

Wizard menjadi full-screen.

Card menjadi single column.

Touch target minimal:

44px

---

# 6. COMPONENTS

## Buttons

Primary

Merah Cabai

Secondary

Putih Border

Danger

Merah Gelap

---

## Cards

Border Radius:
16px – 24px (rounded-2xl / rounded-3xl)

Shadow:
Soft (shadow-sm, shadow-xs)

Backdrop: blur-sm pada card overlay

---

## Inputs

Height:
40px

Radius:
12px (rounded-xl)

---

## Progress Ring

Menampilkan:

Persentase CF

Contoh:

84%

---

## Disease Card

Icon
Nama Penyakit
Persentase
Button Detail

---

# 7. UX IMPROVEMENTS

## Progressive Disclosure

Jangan tampilkan semua gejala sekaligus.

Tampilkan berdasarkan fase.

---

## Smart Validation

Minimal 1 gejala dipilih.

---

## Confidence Tooltip

Berikan contoh:

"Pilih Sangat Yakin jika gejala terlihat jelas pada tanaman."

---

## Explainable AI

Setelah diagnosis tampilkan:

Mengapa sistem menghasilkan diagnosis tersebut.

Rule yang aktif.

Gejala yang cocok.

Nilai CF.

---

# 8. FUTURE FEATURES

Upload Foto Cabai

AI Image Classification

Export PDF

Multi Language

Offline Mode

PWA Support

Weather Integration

Disease Statistics

Farmer Community