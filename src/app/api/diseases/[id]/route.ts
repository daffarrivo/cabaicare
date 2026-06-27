import { NextRequest } from "next/server";
import { getDiseaseById } from "@/lib/services/disease.service";
import { success, notFound } from "@/lib/api-response";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const disease = await getDiseaseById(id);
  if (!disease) return notFound("Penyakit tidak ditemukan");

  const relatedSymptoms = disease.diseaseSymptoms.map((ds) => ({
    symptom_id: ds.symptom.id,
    symptom_code: ds.symptom.code,
    symptom_name: ds.symptom.name,
    phase_id: ds.phase.id,
    phase_code: ds.phase.code,
    phase_name: ds.phase.name,
    cf_expert: Number(ds.cfExpert),
  }));

  const { diseaseSymptoms: _, ...diseaseData } = disease;
  return success({ ...diseaseData, related_symptoms: relatedSymptoms });
}
