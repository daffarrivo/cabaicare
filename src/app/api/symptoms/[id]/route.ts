import { NextRequest } from "next/server";
import { getSymptomById } from "@/lib/services/symptom.service";
import { success, notFound } from "@/lib/api-response";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const symptom = await getSymptomById(id);
  if (!symptom) {
    return notFound("Gejala tidak ditemukan");
  }

  const diseaseSymptoms = symptom.diseaseSymptoms.map((ds) => ({
    disease_id: ds.disease.id,
    disease_code: ds.disease.code,
    disease_name: ds.disease.name,
    phase_id: ds.phase.id,
    phase_code: ds.phase.code,
    phase_name: ds.phase.name,
    cf_expert: Number(ds.cfExpert),
  }));

  return success({ ...symptom, related_diseases: diseaseSymptoms });
}
