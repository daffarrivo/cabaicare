import { prisma } from "@/lib/db/prisma";

export async function getDiseases(params?: {
  page?: number;
  limit?: number;
}) {
  const page = params?.page ?? 1;
  const limit = params?.limit ?? 50;
  const skip = (page - 1) * limit;

  const [data, total] = await Promise.all([
    prisma.disease.findMany({
      skip,
      take: limit,
      orderBy: { code: "asc" },
    }),
    prisma.disease.count(),
  ]);

  return { data, meta: { page, limit, total } };
}

export async function getDiseaseById(id: string) {
  return prisma.disease.findUnique({
    where: { id },
    include: {
      diseaseSymptoms: {
        include: {
          symptom: { select: { id: true, code: true, name: true } },
          phase: { select: { id: true, code: true, name: true } },
        },
      },
    },
  });
}

export async function createDisease(data: {
  code: string;
  name: string;
  description: string;
  cause: string;
  solution: string;
  prevention: string;
  imageUrl?: string;
}) {
  return prisma.disease.create({
    data: {
      id: data.code.toLowerCase(),
      code: data.code,
      name: data.name,
      description: data.description,
      cause: data.cause,
      solution: data.solution,
      prevention: data.prevention,
      imageUrl: data.imageUrl,
    },
  });
}

export async function updateDisease(
  id: string,
  data: Partial<{
    code: string;
    name: string;
    description: string;
    cause: string;
    solution: string;
    prevention: string;
    imageUrl: string;
  }>
) {
  const disease = await prisma.disease.findUnique({ where: { id } });
  if (!disease) return null;

  return prisma.disease.update({
    where: { id },
    data: {
      ...(data.code && { code: data.code }),
      ...(data.name && { name: data.name }),
      ...(data.description && { description: data.description }),
      ...(data.cause && { cause: data.cause }),
      ...(data.solution && { solution: data.solution }),
      ...(data.prevention && { prevention: data.prevention }),
      ...(data.imageUrl !== undefined && { imageUrl: data.imageUrl }),
    },
  });
}

export async function deleteDisease(id: string) {
  const disease = await prisma.disease.findUnique({ where: { id } });
  if (!disease) return null;

  const ruleCount = await prisma.diseaseSymptom.count({
    where: { diseaseId: id },
  });
  if (ruleCount > 0) {
    throw new Error(
      "Penyakit tidak dapat dihapus karena masih digunakan dalam aturan diagnosis"
    );
  }

  const consultationCount = await prisma.consultation.count({
    where: {
      resultJson: { path: ["disease", "id"], equals: id },
    },
  });
  if (consultationCount > 0) {
    throw new Error(
      "Penyakit tidak dapat dihapus karena masih digunakan dalam riwayat konsultasi"
    );
  }

  await prisma.disease.delete({ where: { id } });
  return true;
}
