import { NextRequest } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { success, notFound } from "@/lib/api-response";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const consultation = await prisma.consultation.findUnique({
    where: { id },
    include: {
      user: { select: { id: true, name: true, email: true } },
    },
  });

  if (!consultation) return notFound("Konsultasi tidak ditemukan");

  return success({
    id: consultation.id,
    user: consultation.user,
    phase_id: consultation.phaseId,
    input_symptoms: consultation.inputSymptoms,
    result: consultation.resultJson,
    created_at: consultation.createdAt.toISOString(),
  });
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const consultation = await prisma.consultation.findUnique({
    where: { id },
  });
  if (!consultation) return notFound("Konsultasi tidak ditemukan");

  await prisma.consultation.delete({ where: { id } });
  return success(null, "Konsultasi berhasil dihapus");
}
