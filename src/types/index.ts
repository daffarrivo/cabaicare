export interface Symptom {
  id: string;
  code: string;
  name: string;
  description: string;
  created_at?: string;
  updated_at?: string;
}

export interface GrowthPhase {
  id: string;
  code: string;
  name: string;
  description: string;
}

export interface Disease {
  id: string;
  code: string;
  name: string;
  description: string;
  cause: string;
  solution: string;
  prevention: string;
  image_url?: string;
  created_at?: string;
  updated_at?: string;
}

export interface DiseaseSymptom {
  id: string;
  disease_id: string;
  symptom_id: string;
  phase_id: string;
  cf_expert: number;
  created_at?: string;
  updated_at?: string;
}

export interface Rule {
  id: string;
  disease_id: string;
  phase_id: string;
  symptom_ids: string[];
  created_at?: string;
  updated_at?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
}

export interface DiagnosisInput {
  phase_id: string;
  symptoms: { symptom_id: string; user_cf: number }[];
}

export interface DiagnosisResult {
  id: string;
  disease: Disease;
  confidence: number;
  matched_symptoms: Symptom[];
  alternative_diagnoses: {
    disease: Disease;
    confidence: number;
  }[];
  created_at: string;
}

export interface Consultation {
  id: string;
  user_id?: string | null;
  selected_symptoms: { symptom_id: string; user_cf: number }[];
  diagnosed_disease: string;
  cf_result: number;
  consultation_date: string;
}

export interface DashboardStats {
  total_symptoms: number;
  total_diseases: number;
  total_rules: number;
  total_diagnoses: number;
  total_users: number;
}
