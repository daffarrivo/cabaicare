import { prisma } from "@/lib/db/prisma";

export async function getRules(params?: {
  page?: number;
  limit?: number;
}) {
  const page = params?.page ?? 1;
  const limit = params?.limit ?? 100;
  const skip = (page - 1) * limit;

  const [data, total] = await Promise.all([
    prisma.diseaseSymptom.findMany({
      skip,
      take: limit,
      orderBy: { diseaseId: "asc" },
      include: {
        disease: { select: { name: true } },
        symptom: { select: { name: true } },
        phase: { select: { name: true } },
      },
    }),
    prisma.diseaseSymptom.count(),
  ]);

  const formatted = data.map((r) => ({
    id: r.id,
    disease_id: r.diseaseId,
    disease_name: r.disease.name,
    symptom_id: r.symptomId,
    symptom_name: r.symptom.name,
    phase_id: r.phaseId,
    phase_name: r.phase.name,
    cf_expert: Number(r.cfExpert),
    created_at: r.createdAt,
    updated_at: r.updatedAt,
  }));

  return { data: formatted, meta: { page, limit, total } };
}

export async function getRuleById(id: string) {
  const rule = await prisma.diseaseSymptom.findUnique({
    where: { id },
    include: {
      disease: { select: { name: true } },
      symptom: { select: { name: true } },
      phase: { select: { name: true } },
    },
  });

  if (!rule) return null;

  return {
    id: rule.id,
    disease_id: rule.diseaseId,
    disease_name: rule.disease.name,
    symptom_id: rule.symptomId,
    symptom_name: rule.symptom.name,
    phase_id: rule.phaseId,
    phase_name: rule.phase.name,
    cf_expert: Number(rule.cfExpert),
    created_at: rule.createdAt,
    updated_at: rule.updatedAt,
  };
}

export async function createRule(data: {
  disease_id: string;
  symptom_id: string;
  phase_id: string;
  cf_expert: number;
}) {
  // Check foreign keys
  const [disease, symptom, phase] = await Promise.all([
    prisma.disease.findUnique({ where: { id: data.disease_id } }),
    prisma.symptom.findUnique({ where: { id: data.symptom_id } }),
    prisma.growthPhase.findUnique({ where: { id: data.phase_id } }),
  ]);

  if (!disease || !symptom || !phase) {
    throw new Error("Penyakit, gejala, atau fase tidak ditemukan");
  }

  // Check uniqueness
  const existing = await prisma.diseaseSymptom.findUnique({
    where: {
      diseaseId_symptomId_phaseId: {
        diseaseId: data.disease_id,
        symptomId: data.symptom_id,
        phaseId: data.phase_id,
      },
    },
  });
  if (existing) {
    throw new Error(
      "Aturan sudah ada untuk kombinasi penyakit, gejala, dan fase ini"
    );
  }

  return prisma.diseaseSymptom.create({
    data: {
      diseaseId: data.disease_id,
      symptomId: data.symptom_id,
      phaseId: data.phase_id,
      cfExpert: data.cf_expert,
    },
  });
}

export async function updateRule(id: string, data: { cf_expert: number }) {
  const rule = await prisma.diseaseSymptom.findUnique({ where: { id } });
  if (!rule) return null;

  return prisma.diseaseSymptom.update({
    where: { id },
    data: { cfExpert: data.cf_expert },
  });
}

export async function deleteRule(id: string) {
  const rule = await prisma.diseaseSymptom.findUnique({ where: { id } });
  if (!rule) return null;

  await prisma.diseaseSymptom.delete({ where: { id } });
  return true;
}
