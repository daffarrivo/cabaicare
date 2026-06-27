import { NextRequest } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { success } from "@/lib/api-response";

export async function GET(_request: NextRequest) {
  const [
    totalUsers,
    totalDiseases,
    totalSymptoms,
    totalRules,
    totalDiagnoses,
    recentDiagnoses,
  ] = await Promise.all([
    prisma.user.count(),
    prisma.disease.count(),
    prisma.symptom.count(),
    prisma.diseaseSymptom.count(),
    prisma.consultation.count(),
    prisma.consultation.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      include: {
        user: { select: { name: true } },
      },
    }),
  ]);

  return success({
    total_users: totalUsers,
    total_diseases: totalDiseases,
    total_symptoms: totalSymptoms,
    total_rules: totalRules,
    total_diagnoses: totalDiagnoses,
    recent_diagnoses: recentDiagnoses.map((c) => {
      const result = c.resultJson as Record<string, unknown>;
      const disease = result.disease as Record<string, string> | undefined;
      return {
        id: c.id,
        user_name: c.user?.name ?? "Tamu",
        disease_name: disease?.name ?? "Tidak diketahui",
        confidence: result.confidence ?? 0,
        created_at: c.createdAt.toISOString(),
      };
    }),
  });
}
