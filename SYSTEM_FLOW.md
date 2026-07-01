# Alur Sistem Pakar CabaiCare: Forward Chaining & Certainty Factor

Dokumen ini menjelaskan bagaimana alur kerja (flow) sistem pakar CabaiCare bekerja, dari saat pengguna memasukkan gejala hingga sistem mengeluarkan hasil diagnosis. Sistem ini menggunakan dua metode kecerdasan buatan (AI) utama, yaitu **Forward Chaining (FC)** dan **Certainty Factor (CF)**.

## 1. Alur Masukan Pengguna (User Input)
1. Pengguna memilih fase pertumbuhan tanaman cabai (contoh: Semai, Vegetatif, Generatif).
2. Sistem menampilkan daftar gejala yang relevan dengan fase tersebut.
3. Pengguna memilih gejala yang diamati pada tanaman cabainya. Untuk setiap gejala, pengguna juga memasukkan **tingkat keyakinan (User CF)**. Misalnya: 
   - "Yakin" (CF = 0.8)
   - "Sangat Yakin" (CF = 1.0)
   - "Mungkin" (CF = 0.4)

## 2. Fase Forward Chaining (Penyaringan Penyakit)
*Logic terletak pada fungsi `forwardChaining()` di `src/lib/inference-engine.ts`.*

**Forward Chaining** adalah metode penalaran runut maju. Sistem memulai dengan sekumpulan fakta (gejala yang dipilih pengguna) lalu menarik kesimpulan (kandidat penyakit) dari fakta-fakta tersebut berdasarkan aturan pengetahuan (Knowledge Base).

**Langkah-langkah FC dalam sistem:**
- Sistem mengambil fakta awal (daftar gejala dan nilai keyakinan dari pengguna).
- Sistem memfilter basis pengetahuan (tabel `DiseaseSymptomMapping`) berdasarkan `symptom_id` dari pengguna dan `phase_id` yang sedang aktif.
- **Reasoning:** Tujuan Forward Chaining di sini adalah untuk **mempersempit ruang lingkup pencarian**. Alih-alih menghitung kecocokan untuk *seluruh* penyakit yang ada di database, sistem hanya akan mengumpulkan "kandidat penyakit" (`CandidateDisease`) yang memiliki **setidaknya satu gejala yang cocok** dengan apa yang dialami pengguna.
- Output dari proses ini adalah daftar kandidat penyakit beserta gejala-gejala spesifik apa saja yang "match" atau cocok untuk penyakit tersebut.

## 3. Fase Certainty Factor (Perhitungan Tingkat Keyakinan)
*Logic terletak pada fungsi `calculateCF()` di `src/lib/inference-engine.ts`.*

Setelah Forward Chaining menentukan kandidat penyakit, sistem menggunakan **Certainty Factor** untuk menghitung **seberapa yakin** sistem terhadap kandidat penyakit tersebut.

**Langkah-langkah CF dalam sistem:**
1. **Perhitungan CF Premis Tunggal (CF Gejala)**
   Untuk setiap gejala yang cocok dengan suatu kandidat penyakit, sistem mengalikan nilai keyakinan pakar (`cf_expert`) dengan nilai keyakinan pengguna (`user_cf`).
   > `CF(gejala) = CF_Pakar * CF_Pengguna`
   - *CF Pakar:* Nilai bobot dari ahli/pakar pertanian tentang seberapa kuat gejala ini mengindikasikan penyakit tersebut.
   - *CF Pengguna:* Tingkat kepastian petani/pengguna saat memilih gejala tersebut di aplikasi.

2. **Perhitungan CF Kombinasi (Gabungan Gejala)**
   Penyakit biasanya memiliki lebih dari satu gejala. Untuk menggabungkan beberapa nilai CF gejala menjadi satu CF akhir untuk sebuah penyakit, sistem menggunakan rumus CF Kombinasi:
   - Jika ini gejala pertama: `CF_Combine_lama = CF(gejala_1)`
   - Untuk gejala kedua dan seterusnya: 
     > `CF_Combine_baru = CF_Combine_lama + CF(gejala_baru) * (1 - CF_Combine_lama)`
   
   **Reasoning:** Rumus asimtotik ini memastikan bahwa semakin banyak gejala yang terkonfirmasi (dengan keyakinan tinggi), maka nilai akhir (CF Kombinasi) akan **semakin mendekati 1 (100%)** tanpa pernah melampaui 1. Ini sangat merepresentasikan cara kerja logika medis: semakin banyak bukti (gejala) yang ditemukan, semakin yakin dokter (atau sistem pakar) terhadap diagnosisnya.

## 4. Fase Eksekusi & Hasil Akhir (Diagnosis)
*Logic terletak pada fungsi `runDiagnosis()` di `src/lib/inference-engine.ts`.*

1. Sistem menjalankan **Forward Chaining** untuk mendapatkan kandidat penyakit.
2. Jika tidak ada kandidat, sistem mengembalikan hasil kosong.
3. Untuk setiap kandidat penyakit, sistem menjalankan **Certainty Factor** untuk menghitung persentase keyakinan.
4. Sistem mengambil data detail penyakit dan gejala dari database/objek statis (seperti nama, deskripsi, dan solusi).
5. Semua kandidat diurutkan secara menurun (Descending) berdasarkan nilai CF (confidence) tertinggi.
6. Kandidat dengan CF tertinggi (peringkat pertama) dikembalikan sebagai **Diagnosis Utama**.
7. Sebanyak-banyaknya 5 kandidat penyakit lain dengan nilai CF di bawahnya dikembalikan sebagai **Diagnosis Alternatif**.

---

### Kesimpulan Alur Logika (Flowchart Singkat)
`Gejala + Tingkat Keyakinan (Input)` 
  ➡️ `Forward Chaining (Pilih Kandidat Penyakit)` 
      ➡️ `Certainty Factor (Hitung Persentase Tiap Kandidat)` 
          ➡️ `Sortir (Urutkan dari Terbesar)` 
              ➡️ `Hasil Diagnosis Utama & Alternatif`
