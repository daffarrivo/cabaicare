import { Disease, Symptom } from "@/types";

export interface DiseaseSymptomMapping {
  disease_id: string;
  symptom_id: string;
  phase_id: string;
  cf_expert: number;
}

export interface CandidateDisease {
  disease_id: string;
  matched_symptom_ids: string[];
}

export function forwardChaining(
  phaseId: string,
  userSymptoms: { symptom_id: string; user_cf: number }[],
  allMappings: DiseaseSymptomMapping[]
): CandidateDisease[] {
  const candidates: Map<string, Set<string>> = new Map();

  for (const { symptom_id } of userSymptoms) {
    const relevant = allMappings.filter(
      (m) => m.symptom_id === symptom_id && m.phase_id === phaseId
    );

    for (const mapping of relevant) {
      if (!candidates.has(mapping.disease_id)) {
        candidates.set(mapping.disease_id, new Set());
      }
      candidates.get(mapping.disease_id)!.add(mapping.symptom_id);
    }
  }

  return Array.from(candidates.entries()).map(([disease_id, symptom_ids]) => ({
    disease_id,
    matched_symptom_ids: Array.from(symptom_ids),
  }));
}

export function getCfExpert(
  diseaseId: string,
  symptomId: string,
  allMappings: DiseaseSymptomMapping[]
): number {
  const mapping = allMappings.find(
    (m) => m.disease_id === diseaseId && m.symptom_id === symptomId
  );
  return mapping?.cf_expert ?? 0;
}

export function calculateCF(
  diseaseId: string,
  symptoms: { symptom_id: string; user_cf: number }[],
  allMappings: DiseaseSymptomMapping[]
): number {
  let cfCombine = 0;

  for (const { symptom_id, user_cf } of symptoms) {
    const cfPakar = getCfExpert(diseaseId, symptom_id, allMappings);
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

export function runDiagnosis(
  phaseId: string,
  userSymptoms: { symptom_id: string; user_cf: number }[],
  allMappings: DiseaseSymptomMapping[],
  diseases: Record<string, Disease>,
  symptoms: Record<string, Symptom>
) {
  const candidates = forwardChaining(phaseId, userSymptoms, allMappings);
  if (candidates.length === 0) return null;

  const results: {
    disease: Disease;
    confidence: number;
    matchedSymptoms: Symptom[];
  }[] = [];

  for (const candidate of candidates) {
    const disease = diseases[candidate.disease_id];
    if (!disease) continue;

    const relevantSymptoms = userSymptoms.filter((s) =>
      candidate.matched_symptom_ids.includes(s.symptom_id)
    );

    const confidence = calculateCF(
      candidate.disease_id,
      relevantSymptoms,
      allMappings
    );

    const matchedSymptoms = candidate.matched_symptom_ids
      .map((id) => symptoms[id])
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
    disease: top.disease,
    confidence: top.confidence,
    matched_symptoms: top.matchedSymptoms,
    alternative_diagnoses: alternatives,
  };
}

export function formatConfidence(cf: number): string {
  return `${Math.round(cf * 100)}%`;
}

export function getConfidenceLevel(cf: number): {
  label: string;
  color: string;
} {
  if (cf >= 0.8) return { label: "Sangat Tinggi", color: "text-green-600" };
  if (cf >= 0.6) return { label: "Tinggi", color: "text-green-500" };
  if (cf >= 0.4) return { label: "Sedang", color: "text-yellow-500" };
  if (cf >= 0.2) return { label: "Rendah", color: "text-orange-500" };
  return { label: "Sangat Rendah", color: "text-red-500" };
}
