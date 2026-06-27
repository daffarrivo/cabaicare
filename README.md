# CabaiCare - Chili Plant Disease Diagnosis Expert System

A web-based expert system for diagnosing chili plant diseases using **Forward Chaining** and **Certainty Factor (CF)**.

## Tech Stack

Next.js 16 · TypeScript · Tailwind CSS v4 · shadcn/ui · PostgreSQL · Prisma · JWT

## How to Run

```bash
# 1. Install
npm install
cp .env.example .env   # fill DATABASE_URL + JWT_SECRET

# 2. Database
npx prisma generate
npx prisma migrate dev --name init
npx prisma db seed

# 3. Run
npm run dev
# open http://localhost:3000
# login: admin@cabaicare.com / admin123
```

## Documentation

Detailed docs in `docs/` (PRD, SRS, SAD, API Spec, KB Design, UI/UX, DevOps).
