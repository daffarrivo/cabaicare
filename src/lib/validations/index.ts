import { z } from "zod";

export const diagnosisSchema = z.object({
  phase_id: z.string().min(1, "Pilih fase pertumbuhan terlebih dahulu"),
  symptoms: z
    .array(
      z.object({
        symptom_id: z.string().min(1),
        user_cf: z.number().min(0).max(1),
      })
    )
    .min(1, "Pilih minimal 1 gejala"),
});

export const loginSchema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(6, "Password minimal 6 karakter"),
});

export const symptomSchema = z.object({
  code: z.string().min(1, "Kode gejala wajib diisi"),
  name: z.string().min(1, "Nama gejala wajib diisi"),
  description: z.string().optional(),
});

export const diseaseSchema = z.object({
  code: z.string().min(1, "Kode penyakit wajib diisi"),
  name: z.string().min(1, "Nama penyakit wajib diisi"),
  description: z.string().min(1, "Deskripsi wajib diisi"),
  cause: z.string().min(1, "Penyebab wajib diisi"),
  solution: z.string().min(1, "Solusi wajib diisi"),
  prevention: z.string().min(1, "Pencegahan wajib diisi"),
});

export const ruleSchema = z.object({
  disease_id: z.string().min(1, "Pilih penyakit"),
  phase_id: z.string().min(1, "Pilih fase"),
  symptom_ids: z.array(z.string()).min(1, "Pilih minimal 1 gejala"),
  mb: z.number().min(0).max(1).optional(),
  md: z.number().min(0).max(1).optional(),
});

export type DiagnosisFormData = z.infer<typeof diagnosisSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
export type SymptomFormData = z.infer<typeof symptomSchema>;
export type DiseaseFormData = z.infer<typeof diseaseSchema>;
export type RuleFormData = z.infer<typeof ruleSchema>;
