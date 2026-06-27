DOC 05 — Knowledge Base & Inference Engine

Design (Version 1.1 Updated)

1. Overview

Dokumen ini menjelaskan desain basis pengetahuan (Knowledge Base) dan mesin inferensi (Inference

Engine) pada Sistem Pakar Diagnosis Penyakit Tanaman Cabai.

Sistem menggunakan kombinasi metode:

•

Forward Chaining sebagai mekanisme penalaran berbasis aturan (rule-based reasoning)

•

Certainty Factor (CF) sebagai metode pengukuran tingkat keyakinan hasil diagnosis

Pendekatan ini memungkinkan sistem memberikan hasil diagnosis berdasarkan gejala yang dipilih

pengguna serta tingkat keyakinan terhadap gejala tersebut.

2. Knowledge Base Design

Knowledge Base merupakan komponen utama yang menyimpan seluruh pengetahuan pakar dalam

bentuk:

•

Data fase pertumbuhan tanaman

•

Data penyakit

•

Data gejala

•

Nilai Certainty Factor pakar

•

Aturan inferensi

3. Growth Phase Knowledge

Sistem membagi pertumbuhan tanaman cabai menjadi tiga fase utama.

Kode

Nama Fase

Deskripsi

F01

F02

F03

Pembibitan

Sejak penyemaian hingga bibit siap tanam

Vegetatif

Pertumbuhan daun, batang, dan akar

Generatif

Pembungaan hingga pembentukan buah

Keberadaan fase digunakan sebagai filter awal untuk mempersempit ruang pencarian penyakit.

1

4. Disease Knowledge Structure

Sistem menyimpan 11 entitas penyakit.

Kode

Nama Penyakit

P01

Layu Fusarium

P02

Antraknosa / Patek

P03

Bercak Daun Serkospora

P04

Layu Bakteri

P05

Virus Kuning / Gemini

P06

Bengkak Akar

P07

Busuk Daun Fitoftora

P08

Penyakit Kerupuk

P09

Rebah Kecambah

P10

Embun Tepung

P11

Busuk Basah Buah

5. Symptom Knowledge Structure

Sistem menyimpan 35 gejala.

Contoh gejala:

Kode

Deskripsi

G01

Daun bagian bawah menguning

G08

Bercak cekung hitam pada buah

G11

Buah membusuk basah

G22

Daun menguning dari tulang daun

G31

Leher akar membusuk dan mengering

G35

Isi buah meluruh keluar

Setiap gejala memiliki bobot Certainty Factor yang diberikan oleh pakar.

2

6. Certainty Factor Knowledge

Setiap relasi penyakit dan gejala memiliki nilai keyakinan pakar.

Contoh:

Penyakit

Gejala

CF Pakar

P05

P05

P02

P02

P09

P09

G01

G22

G08

G11

G30

G31

0.60

0.60

0.60

0.75

0.80

0.90

Nilai ini menunjukkan tingkat kepercayaan pakar bahwa suatu gejala mendukung keberadaan penyakit

tertentu.

7. Rule Base Design

Basis aturan dibentuk menggunakan kaidah produksi IF-THEN.

Format umum:

IF Fase = Fx AND Gejala = Gy THEN Penyakit = Pz

Contoh:

Rule-001

IF Fase = F02 AND Gejala = G01

THEN Penyakit = P05

Rule-002

IF Fase = F02 AND Gejala = G22

THEN Penyakit = P05

3

Rule-003

IF Fase = F03 AND Gejala = G08

THEN Penyakit = P02

Rule-004

IF Fase = F03 AND Gejala = G11

THEN Penyakit = P02

Rule-005

IF Fase = F01 AND Gejala = G30

THEN Penyakit = P09

Rule-006

IF Fase = F01 AND Gejala = G31

THEN Penyakit = P09

8. Inference Engine Architecture

Mesin inferensi bertanggung jawab melakukan:

1.

Filtering gejala berdasarkan fase.

2.

Pencocokan aturan.

3.

Pembentukan kandidat penyakit.

4.

Perhitungan Certainty Factor.

5.

Pemilihan hasil diagnosis terbaik.

9. Forward Chaining Process

Forward Chaining menggunakan pendekatan data-driven.

Proses dimulai dari fakta yang diberikan pengguna.

4

Tahapan:

1.

Pengguna memilih fase pertumbuhan.

2.

Sistem menampilkan gejala yang relevan.

3.

Pengguna memilih gejala.

4.

Mesin inferensi mencari aturan yang terpenuhi.

5.

Kandidat penyakit dibentuk.

6.

Kandidat diteruskan ke proses Certainty Factor.

Diagram logika:

User Input ↓ Phase Filtering ↓ Rule Matching ↓ Disease Candidate ↓ CF Calculation ↓ Diagnosis Result

10. Certainty Factor Calculation Engine

Nilai keyakinan tiap gejala dihitung menggunakan:

CF(H,E) = CFpakar × CFuser

Keterangan:

•

CFpakar = nilai keyakinan pakar

•

CFuser = nilai keyakinan pengguna

Jika terdapat lebih dari satu gejala:

CFcombine = CF1 + CF2 × (1 − CF1)

Jika terdapat gejala berikutnya:

CFnew = CFcombine + CFnext × (1 − CFcombine)

Perhitungan dilakukan secara berulang hingga seluruh gejala selesai diproses.

11. Diagnosis Scenario Example

Kasus Virus Kuning (P05)

Input:

Fase = F02

5

Gejala:

•

G01 → CF User = 1.0

•

G22 → CF User = 1.0

Perhitungan:

CF1 = 0.60 × 1.00 = 0.60

CF2 = 0.60 × 1.00 = 0.60

CFcombine = 0.60 + 0.60 × (1 − 0.60)

CFcombine = 0.84

Hasil:

P05 – Virus Kuning / Gemini

Confidence = 84%

12. Database Mapping

Knowledge Base direpresentasikan dalam beberapa entitas utama:

•

phases

•

diseases

•

symptoms

•
•

disease_symptoms
rules

•

diagnoses

Relasi utama:

Disease 1 → N DiseaseSymptoms

Symptom 1 → N DiseaseSymptoms

Phase 1 → N Rules

Rules N → 1 Disease

6

13. Design Considerations

Beberapa pertimbangan desain:

•

Knowledge Base dapat diperbarui tanpa mengubah source code.

•

Nilai CF pakar dapat disesuaikan berdasarkan validasi pakar pertanian.

•

Aturan dapat ditambahkan untuk penyakit baru.

•

Filtering fase mengurangi false diagnosis.

•

Inference Engine dipisahkan dari layer presentasi sehingga mudah dikembangkan.

14. Conclusion

Knowledge Base dirancang sebagai representasi digital pengetahuan pakar mengenai penyakit tanaman

cabai. Mesin inferensi menggunakan Forward Chaining untuk menemukan kandidat penyakit dan Certainty

Factor untuk menghitung tingkat keyakinan diagnosis. Kombinasi kedua metode tersebut menghasilkan

proses diagnosis yang terstruktur, fleksibel, dan mudah dikembangkan pada versi sistem berikutnya.

7

