# CabaiCare — Sistem Pakar Diagnosis Penyakit Tanaman Cabai

Aplikasi web sistem pakar untuk mendiagnosis penyakit tanaman cabai menggunakan metode **Forward Chaining** dan **Certainty Factor (CF)**. Dibangun dengan Next.js 16, PostgreSQL, Prisma ORM, dan Tailwind CSS.

---

## Tech Stack

| Layer | Teknologi |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Database | PostgreSQL |
| ORM | Prisma |
| Auth | JWT (jose) + bcryptjs |
| Validation | Zod + React Hook Form |
| Icons | Lucide React |
| Deployment | Vercel |

---

## Struktur Folder

```
├── prisma/
│   ├── schema.prisma            # Database schema (7 models)
│   ├── seed.ts                  # Database seeder
│   ├── seed-data.ts             # Auto-generated seed data (from KnowledgeBase.xlsx)
│   └── migrations/              # Database migrations
├── scripts/
│   └── convert_kb.py            # Excel → seed-data converter
├── src/
│   ├── app/
│   │   ├── api/                 # REST API (17 route handlers)
│   │   │   ├── auth/            # login, register, me
│   │   │   ├── symptoms/        # public symptom list/detail
│   │   │   ├── diseases/        # public disease list/detail
│   │   │   ├── diagnosis/       # diagnosis submit + detail
│   │   │   └── admin/           # symptoms, diseases, rules, history, dashboard, users
│   │   ├── (pages)/             # Frontend pages
│   │   │   ├── page.tsx         # Landing Page
│   │   │   ├── diagnosis/       # Diagnosis Wizard (4-step)
│   │   │   ├── diseases/        # Disease Catalog
│   │   │   └── admin/           # Admin Panel
│   │   ├── layout.tsx           # Root Layout
│   │   └── globals.css          # Tailwind v4 Theme
│   ├── components/
│   │   ├── ui/                  # shadcn/ui (27 components)
│   │   ├── diagnosis/           # Stepper, symptom-card, result-card
│   │   ├── dashboard/           # Sidebar, data-table, stat-card
│   │   └── layout/              # Navbar, footer, mobile-nav
│   ├── lib/
│   │   ├── db/prisma.ts         # Prisma client singleton
│   │   ├── services/            # Business logic layer
│   │   │   ├── auth.service.ts
│   │   │   ├── symptom.service.ts
│   │   │   ├── disease.service.ts
│   │   │   ├── rule.service.ts
│   │   │   └── diagnosis.service.ts
│   │   ├── middleware/auth.ts   # JWT verification helpers
│   │   ├── inference-engine.ts  # Forward Chaining + Certainty Factor
│   │   ├── validations/         # Zod schemas
│   │   ├── api-response.ts      # Unified API response helpers
│   │   ├── api-error.ts         # Typed error classes
│   │   └── mock-data.ts         # Legacy mock data (still used by frontend UI)
│   ├── hooks/
│   │   ├── use-diagnosis.ts     # Diagnosis state machine
│   │   └── use-mobile.ts        # Mobile breakpoint detection
│   ├── types/index.ts           # TypeScript interfaces
│   └── middleware.ts            # Edge middleware (protects /api/admin/*)
└── docs/                        # Documentation (PRD, SRS, SAD, API Spec, KB, UI/UX, DevOps)
```

---

## Routes

### Public

| Route | Deskripsi |
|-------|-----------|
| `/` | Landing Page |
| `/diagnosis` | Diagnosis Wizard (Pilih Fase → Gejala → CF User → Hasil) |
| `/diseases` | Katalog Penyakit Cabai |

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

---

## API Endpoints

### Auth

| Method | Endpoint | Auth | Deskripsi |
|--------|----------|------|-----------|
| POST | `/api/auth/register` | No | Registrasi user baru |
| POST | `/api/auth/login` | No | Login, return JWT |
| GET | `/api/auth/me` | JWT | Profil user saat ini |

### Public

| Method | Endpoint | Auth | Deskripsi |
|--------|----------|------|-----------|
| GET | `/api/symptoms` | No | List gejala (filter: `?phase_id=`) |
| GET | `/api/symptoms/:id` | No | Detail gejala + penyakit terkait |
| GET | `/api/diseases` | No | List penyakit |
| GET | `/api/diseases/:id` | No | Detail penyakit + gejala terkait |
| POST | `/api/diagnosis` | Optional | Submit diagnosis (FC + CF) |
| GET | `/api/diagnosis/:id` | JWT | Detail konsultasi milik sendiri |

### Admin (JWT + role admin)

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| POST | `/api/admin/symptoms` | Tambah gejala |
| PUT | `/api/admin/symptoms/:id` | Edit gejala |
| DELETE | `/api/admin/symptoms/:id` | Hapus gejala |
| POST | `/api/admin/diseases` | Tambah penyakit |
| PUT | `/api/admin/diseases/:id` | Edit penyakit |
| DELETE | `/api/admin/diseases/:id` | Hapus penyakit |
| GET | `/api/admin/rules` | List aturan inferensi |
| POST | `/api/admin/rules` | Tambah aturan |
| PUT | `/api/admin/rules/:id` | Edit CF expert |
| DELETE | `/api/admin/rules/:id` | Hapus aturan |
| GET | `/api/admin/history` | Semua riwayat konsultasi |
| DELETE | `/api/admin/history/:id` | Hapus konsultasi |
| GET | `/api/admin/dashboard` | Statistik (users, diseases, diagnoses) |
| GET | `/api/admin/users` | Daftar user |

### Response Format

```json
// Success
{ "success": true, "message": "...", "data": { ... } }

// Error
{ "success": false, "message": "..." }
```

---

## Getting Started

### Prasyarat

- Node.js 18+
- PostgreSQL (lokal atau Supabase)

### 1. Install & Konfigurasi

```bash
# Clone repository
git clone https://github.com/daffarrivo/cabaicare.git
cd cabaicare

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
```

### 2. Setup Database

Edit `.env` dengan koneksi PostgreSQL:

```
DATABASE_URL="postgresql://user:password@localhost:5432/cabaicare"
JWT_SECRET="your-secret-key-change-in-production"
```

### 3. Migrasi & Seed

```bash
# Generate Prisma client
npx prisma generate

# Buat tabel
npx prisma migrate dev --name init

# Isi data awal (3 fase, 35 gejala, 11 penyakit, 74 aturan, 3 user)
npx prisma db seed
```

### 4. Jalankan

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

### Login

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@cabaicare.com | admin123 |
| User | budi@example.com | password123 |
| User | siti@example.com | password123 |

---

## Knowledge Base

Data knowledge base bersumber dari **KnowledgeBase.xlsx** (validasi pakar). Untuk mengupdate:

```bash
python scripts/convert_kb.py
```

File `prisma/seed-data.ts` akan diregenerate dari Excel, lalu:

```bash
npx prisma db seed
```

---

## Metode Diagnosis

1. **Forward Chaining** — Penalaran berbasis aturan (rule-based) untuk mencocokkan gejala dengan kandidat penyakit berdasarkan fase pertumbuhan.
2. **Certainty Factor** — Menghitung tingkat keyakinan diagnosis:
   - `CF(H,E) = CF_Pakar × CF_User` (keyakinan per gejala)
   - `CF_combine = CF_old + CF_new × (1 − CF_old)` (kombinasi multi-gejala)

---

## Dokumentasi

| Dokumen | Deskripsi |
|---------|-----------|
| `docs/01_PRD_FINAL_Sistem_Pakar_Cabai.md` | Product Requirements Document |
| `docs/02_Software Requirement Specification.md` | Software Requirement Specification |
| `docs/03_Sistem Pakar Diagnosa Penyakit Tanaman Cabai.md` | Software Architecture Document |
| `docs/04_API Specification.md` | API Specification |
| `docs/05_Knowledge Base & Inference Engine Design.md` | KB & Inference Engine Design |
| `docs/06_UI-UX Specification.md` | UI/UX Specification |
| `docs/07_Deployment & DevOps.md` | Deployment & DevOps Guide |
| `DESIGN.md` | Visual Design Specifications |
