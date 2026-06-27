import { NextRequest } from "next/server";
import {
  getRuleById,
  updateRule,
  deleteRule,
} from "@/lib/services/rule.service";
import { success, error, notFound } from "@/lib/api-response";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const rule = await getRuleById(id);
  if (!rule) return notFound("Aturan tidak ditemukan");
  return success(rule);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const cfExpert = body.cf_expert ?? body.mb ?? body.cf;

    if (cfExpert === undefined || cfExpert < 0 || cfExpert > 1) {
      return error("CF expert harus antara 0 dan 1", 400);
    }

    const rule = await updateRule(id, { cf_expert: cfExpert });
    if (!rule) return notFound("Aturan tidak ditemukan");

    return success(rule, "Aturan berhasil diperbarui");
  } catch (err) {
    const message = err instanceof Error ? err.message : "Terjadi kesalahan";
    return error(message, 500);
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const deleted = await deleteRule(id);
    if (!deleted) return notFound("Aturan tidak ditemukan");

    return success(null, "Aturan berhasil dihapus");
  } catch (err) {
    const message = err instanceof Error ? err.message : "Terjadi kesalahan";
    return error(message, 500);
  }
}
