import { DiagnosisInput, DiagnosisResult, Disease, Symptom } from "@/types";
import { diseaseSymptoms, getDiseaseById, getSymptomById } from "./mock-data";

export interface CandidateDisease {
  disease_id: string;
  matched_symptom_ids: string[];
}

export function forwardChaining(input: DiagnosisInput): CandidateDisease[] {
  const candidates: Map<string, Set<string>> = new Map();

  for (const { symptom_id } of input.symptoms) {
    const relevant = diseaseSymptoms.filter(
      (ds) => ds.symptom_id === symptom_id && ds.phase_id === input.phase_id
    );

    for (const ds of relevant) {
      if (!candidates.has(ds.disease_id)) {
        candidates.set(ds.disease_id, new Set());
      }
      candidates.get(ds.disease_id)!.add(ds.symptom_id);
    }
  }

  return Array.from(candidates.entries()).map(([disease_id, symptom_ids]) => ({
    disease_id,
    matched_symptom_ids: Array.from(symptom_ids),
  }));
}

export function calculateCF(
  diseaseId: string,
  symptoms: { symptom_id: string; user_cf: number }[]
): number {
  let cfCombine = 0;

  for (const { symptom_id, user_cf } of symptoms) {
    const cfPakar = getCfExpert(diseaseId, symptom_id);
    if (cfPakar === 0) continue;

    const cfNew = cfPakar * user_cf;

    if (cfCombine === 0) {
      cfCombine = cfNew;
    } else {
      cfCombine = cfCombine + cfNew * (1 - cfCombine);
    }
  }

  return Math.round(cfCombine * 100) / 100;
}

export function getCfExpert(diseaseId: string, symptomId: string): number {
  const ds = diseaseSymptoms.find(
    (d) => d.disease_id === diseaseId && d.symptom_id === symptomId
  );
  return ds?.cf_expert ?? 0;
}

export function runDiagnosis(input: DiagnosisInput): DiagnosisResult | null {
  const candidates = forwardChaining(input);

  if (candidates.length === 0) return null;

  const results: { disease: Disease; confidence: number; matchedSymptoms: Symptom[] }[] = [];

  for (const candidate of candidates) {
    const disease = getDiseaseById(candidate.disease_id);
    if (!disease) continue;

    const relevantSymptoms = input.symptoms.filter((s) =>
      candidate.matched_symptom_ids.includes(s.symptom_id)
    );

    const confidence = calculateCF(candidate.disease_id, relevantSymptoms);
    const matchedSymptoms = candidate.matched_symptom_ids
      .map((id) => getSymptomById(id))
      .filter((s): s is Symptom => s !== undefined);

    results.push({ disease, confidence, matchedSymptoms });
  }

  results.sort((a, b) => b.confidence - a.confidence);

  const top = results[0];
  const alternatives = results.slice(1, 6).map((r) => ({
    disease: r.disease,
    confidence: r.confidence,
  }));

  return {
    id: `dx-${Date.now()}`,
    disease: top.disease,
    confidence: top.confidence,
    matched_symptoms: top.matchedSymptoms,
    alternative_diagnoses: alternatives,
    created_at: new Date().toISOString(),
  };
}

export function formatConfidence(cf: number): string {
  return `${Math.round(cf * 100)}%`;
}

export function getConfidenceLevel(cf: number): { label: string; color: string } {
  if (cf >= 0.8) return { label: "Sangat Tinggi", color: "text-green-600" };
  if (cf >= 0.6) return { label: "Tinggi", color: "text-green-500" };
  if (cf >= 0.4) return { label: "Sedang", color: "text-yellow-500" };
  if (cf >= 0.2) return { label: "Rendah", color: "text-orange-500" };
  return { label: "Sangat Rendah", color: "text-red-500" };
}
