import { NextRequest } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { getAuthUser } from "@/lib/middleware/auth";
import { success, notFound, unauthorized } from "@/lib/api-response";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authUser = await getAuthUser(request);
  if (!authUser) return unauthorized();

  const { id } = await params;

  const consultation = await prisma.consultation.findUnique({
    where: { id },
  });

  if (!consultation) return notFound("Konsultasi tidak ditemukan");

  // User can only view own consultation; admin can view all
  if (authUser.role !== "admin" && consultation.userId !== authUser.id) {
    return notFound("Konsultasi tidak ditemukan");
  }

  return success({
    id: consultation.id,
    phase_id: consultation.phaseId,
    input_symptoms: consultation.inputSymptoms,
    result: consultation.resultJson,
    created_at: consultation.createdAt.toISOString(),
  });
}
