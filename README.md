# CabaiCare — Sistem Pakar Diagnosis Penyakit Tanaman Cabai

Aplikasi web untuk mendiagnosis penyakit tanaman cabai menggunakan metode **Forward Chaining** + **Certainty Factor**.

## Tech Stack

Next.js 16 · TypeScript · Tailwind CSS v4 · shadcn/ui · PostgreSQL · Prisma · JWT

## Cara Jalanin

```bash
# 1. Install
npm install
cp .env.example .env   # isi DATABASE_URL + JWT_SECRET

# 2. Database
npx prisma generate
npx prisma migrate dev --name init
npx prisma db seed

# 3. Run
npm run dev
# buka http://localhost:3000
# login: admin@cabaicare.com / admin123
```

## Dokumentasi

Detail lengkap ada di folder `docs/` (PRD, SRS, SAD, API Spec, KB Design, UI/UX, DevOps).
