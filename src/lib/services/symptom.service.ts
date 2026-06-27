import { prisma } from "@/lib/db/prisma";

export async function getSymptoms(params?: {
  phaseId?: string;
  page?: number;
  limit?: number;
}) {
  const page = params?.page ?? 1;
  const limit = params?.limit ?? 50;
  const skip = (page - 1) * limit;

  const where = params?.phaseId
    ? {
        diseaseSymptoms: {
          some: { phaseId: params.phaseId },
        },
      }
    : {};

  const [data, total] = await Promise.all([
    prisma.symptom.findMany({
      where,
      skip,
      take: limit,
      orderBy: { code: "asc" },
    }),
    prisma.symptom.count({ where }),
  ]);

  return { data, meta: { page, limit, total } };
}

export async function getSymptomById(id: string) {
  return prisma.symptom.findUnique({
    where: { id },
    include: {
      diseaseSymptoms: {
        include: {
          disease: { select: { id: true, code: true, name: true } },
          phase: { select: { id: true, code: true, name: true } },
        },
      },
    },
  });
}

export async function createSymptom(data: {
  code: string;
  name: string;
  description?: string;
}) {
  return prisma.symptom.create({
    data: {
      id: data.code.toLowerCase(),
      code: data.code,
      name: data.name,
      description: data.description ?? "",
    },
  });
}

export async function updateSymptom(
  id: string,
  data: { code?: string; name?: string; description?: string }
) {
  const symptom = await prisma.symptom.findUnique({ where: { id } });
  if (!symptom) return null;

  return prisma.symptom.update({
    where: { id },
    data: {
      ...(data.code && { code: data.code }),
      ...(data.name && { name: data.name }),
      ...(data.description !== undefined && { description: data.description }),
    },
  });
}

export async function deleteSymptom(id: string) {
  const symptom = await prisma.symptom.findUnique({ where: { id } });
  if (!symptom) return null;

  const refCount = await prisma.diseaseSymptom.count({
    where: { symptomId: id },
  });
  if (refCount > 0) {
    throw new Error(
      "Gejala tidak dapat dihapus karena masih digunakan dalam aturan diagnosis"
    );
  }

  await prisma.symptom.delete({ where: { id } });
  return true;
}
