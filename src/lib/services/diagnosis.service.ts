import { prisma } from "@/lib/db/prisma";
import {
  forwardChaining,
  calculateCF,
  type DiseaseSymptomMapping,
} from "@/lib/inference-engine";
import { Disease, Symptom } from "@/types";
import { getAuthUser } from "@/lib/middleware/auth";
import { NextRequest } from "next/server";

export interface DiagnosisInput {
  phase_id: string;
  symptoms: { symptom_id: string; user_cf: number }[];
}

export async function runDiagnosis(
  input: DiagnosisInput,
  request?: NextRequest
) {
  // 1. Get all disease-symptom mappings for the selected phase
  const mappings = await prisma.diseaseSymptom.findMany({
    where: { phaseId: input.phase_id },
  });

  const allMappings: DiseaseSymptomMapping[] = mappings.map((m) => ({
    disease_id: m.diseaseId,
    symptom_id: m.symptomId,
    phase_id: m.phaseId,
    cf_expert: Number(m.cfExpert),
  }));

  // 2. Forward Chaining — find candidate diseases
  const candidates = forwardChaining(
    input.phase_id,
    input.symptoms,
    allMappings
  );

  if (candidates.length === 0) return null;

  // 3. Get all disease and symptom details needed
  const candidateDiseaseIds = candidates.map((c) => c.disease_id);
  const candidateSymptomIds = new Set<string>();
  candidates.forEach((c) =>
    c.matched_symptom_ids.forEach((id) => candidateSymptomIds.add(id))
  );

  const [diseaseRows, symptomRows] = await Promise.all([
    prisma.disease.findMany({
      where: { id: { in: candidateDiseaseIds } },
    }),
    prisma.symptom.findMany({
      where: { id: { in: Array.from(candidateSymptomIds) } },
    }),
  ]);

  const diseases: Record<string, Disease> = {};
  for (const d of diseaseRows) {
    diseases[d.id] = {
      id: d.id,
      code: d.code,
      name: d.name,
      description: d.description,
      cause: d.cause,
      solution: d.solution,
      prevention: d.prevention,
      image_url: d.imageUrl ?? undefined,
    };
  }

  const symptoms: Record<string, Symptom> = {};
  for (const s of symptomRows) {
    symptoms[s.id] = {
      id: s.id,
      code: s.code,
      name: s.name,
      description: s.description ?? "",
    };
  }

  // 4. Calculate CF for each candidate
  const results: {
    disease: Disease;
    confidence: number;
    matchedSymptoms: Symptom[];
  }[] = [];

  for (const candidate of candidates) {
    const disease = diseases[candidate.disease_id];
    if (!disease) continue;

    const relevantSymptoms = input.symptoms.filter((s) =>
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

  const result = {
    disease: top.disease,
    confidence: top.confidence,
    matched_symptoms: top.matchedSymptoms,
    alternative_diagnoses: alternatives,
  };

  // 5. Save consultation
  let userId: string | null = null;
  if (request) {
    const user = await getAuthUser(request);
    if (user) userId = user.id;
  }

  const consultation = await prisma.consultation.create({
    data: {
      userId,
      phaseId: input.phase_id,
      inputSymptoms: input.symptoms as any,
      resultJson: result as any,
    },
  });

  return {
    id: consultation.id,
    ...result,
    created_at: consultation.createdAt.toISOString(),
  };
}
