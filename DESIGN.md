# DESIGN DOCUMENT
## Sistem Pakar Diagnosis Hama dan Penyakit Cabai

Version: 1.0

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

Cabai Merah

#DC2626

---

## Secondary Color

Hijau Daun

#16A34A

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

Model:

Step Form

---

## STEP 1

Pilih Fase Pertumbuhan

Card Selection

[ Persemaian ]
[ Vegetatif ]
[ Generatif ]

Hanya boleh memilih satu.

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

Tingkat Keyakinan

Untuk setiap gejala terpilih:

---

Daun Menguning

○ Tidak Tahu (0)
○ Sedikit Yakin (0.2)
○ Cukup Yakin (0.4)
○ Yakin (0.6)
○ Sangat Yakin (0.8)
○ Pasti (1.0)

---

Gunakan slider atau radio button.

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

# 4.5 History Page

Riwayat diagnosis.

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

# 4.6 Admin Dashboard

Role:

Admin

---

Menu:

Dashboard

Penyakit

Gejala

Rule

Nilai CF

Riwayat Diagnosa

User

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
[ Riwayat ]
[ Profil ]

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
16px

Shadow:
Medium

---

## Inputs

Height:
48px

Radius:
12px

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