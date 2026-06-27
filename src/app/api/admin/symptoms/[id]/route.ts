import { NextRequest } from "next/server";
import { updateSymptom, deleteSymptom } from "@/lib/services/symptom.service";
import { symptomSchema } from "@/lib/validations";
import { success, error, notFound, conflict } from "@/lib/api-response";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const parsed = symptomSchema.partial().safeParse(body);
    if (!parsed.success) {
      return error(
        "Validasi gagal",
        400,
        parsed.error.errors.map((e) => ({
          field: e.path.join("."),
          message: e.message,
        }))
      );
    }

    const symptom = await updateSymptom(id, parsed.data);
    if (!symptom) return notFound("Gejala tidak ditemukan");

    return success(symptom, "Gejala berhasil diperbarui");
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
    await deleteSymptom(id);
    return success(null, "Gejala berhasil dihapus");
  } catch (err) {
    const message = err instanceof Error ? err.message : "Terjadi kesalahan";
    if (message.includes("tidak dapat dihapus")) return conflict(message);
    if (message.includes("tidak ditemukan")) return notFound(message);
    return error(message, 500);
  }
}
