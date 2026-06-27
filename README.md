# CabaiCare — Sistem Pakar Diagnosis Penyakit Tanaman Cabai

Aplikasi web sistem pakar untuk mendiagnosis penyakit tanaman cabai menggunakan metode **Forward Chaining** dan **Certainty Factor (CF)**.

## Tech Stack

| Layer | Teknologi |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Database | PostgreSQL |
| Auth | Custom Auth / JWT / NextAuth |
| Validation | Zod + React Hook Form |
| Icons | Lucide React |
| Deployment | Vercel |

## Struktur Folder

```
src/
├── app/
│   ├── page.tsx                # Landing Page
│   ├── layout.tsx              # Root Layout
│   ├── globals.css             # Tailwind v4 Theme & Utilities
│   ├── diagnosis/
│   │   └── page.tsx            # Diagnosis Wizard (Step 1-4 + Result)
│   ├── diseases/
│   │   └── page.tsx            # Referensi Penyakit Cabai (Catalog)
│   └── admin/
│       ├── layout.tsx          # Admin Layout (Sidebar)
│       ├── login/              # Admin Login
│       ├── dashboard/          # Dashboard Statistik
│       ├── symptoms/           # CRUD Gejala
│       ├── diseases/           # CRUD Penyakit
│       ├── rules/              # CRUD Rules Forward Chaining
│       ├── history/            # Riwayat Konsultasi
│       └── users/              # Daftar User
├── components/
│   ├── ui/                     # shadcn/ui Components
│   ├── diagnosis/              # Diagnosis Components (stepper, symptom-card, result-card)
│   ├── dashboard/              # Admin Components (sidebar, data-table, statistic-card)
│   └── layout/                 # Layout Components (navbar, footer, mobile-nav)
├── lib/
│   ├── inference-engine.ts     # Forward Chaining + Certainty Factor Engine
│   ├── mock-data.ts            # Data Lokal (sebelum integrasi PostgreSQL)
│   ├── db/                     # Database Connection Config (Prisma/pg Pool)
│   ├── utils.ts                # Utility Functions
│   └── validations/            # Zod Schemas
├── hooks/
│   ├── use-diagnosis.ts        # Diagnosis Logic Hook
│   └── use-mobile.ts           # Mobile Detection Hook
└── types/
    └── index.ts                # TypeScript Interfaces
```

## Routes

### Public

| Route | Deskripsi |
|-------|-----------|
| `/` | Landing Page |
| `/diagnosis` | Wizard Diagnosis (Pilih Fase → Pilih Gejala → CF User → Hasil) |
| `/diseases` | Referensi / Katalog Penyakit Cabai |

### Admin (Protected)

| Route | Deskripsi |
|-------|-----------|
| `/admin/login` | Login Admin |
| `/admin/dashboard` | Dashboard Statistik |
| `/admin/symptoms` | Kelola Gejala |
| `/admin/diseases` | Kelola Penyakit |
| `/admin/rules` | Kelola Rules Forward Chaining |
| `/admin/history` | Riwayat Konsultasi |
| `/admin/users` | Daftar User |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Buka [http://localhost:3000](http://localhost:3000) untuk melihat aplikasi.

## Metode Diagnosis

1. **Forward Chaining** — Penalaran berbasis aturan (rule-based) untuk mencocokkan gejala dengan kandidat penyakit berdasarkan fase pertumbuhan.
2. **Certainty Factor** — Menghitung tingkat keyakinan diagnosis menggunakan:
   - `CF(H,E) = MB(H,E) − MD(H,E)` (formula teoritis)
   - `CF(H,E) = CF_Pakar × CF_User` (formula implementasi praktis)
   - `CF_combine = CF_old + CF_new × (1 − CF_old)` (kombinasi multi-gejala)

## Dokumentasi

Dokumentasi lengkap tersedia di folder `docs/`:

| No | Dokumen | Deskripsi |
|----|---------|-----------|
| 01 | PRD | Product Requirements Document |
| 02 | SRS | Software Requirement Specification |
| 03 | SAD | Software Architecture Document |
| 04 | API | API Specification |
| 05 | KB | Knowledge Base & Inference Engine Design |
| 06 | UI/UX | UI/UX Specification |
| 07 | DevOps | Deployment & DevOps |

Desain visual didokumentasikan di `DESIGN.md`.
