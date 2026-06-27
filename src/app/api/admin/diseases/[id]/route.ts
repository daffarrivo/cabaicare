import { NextRequest } from "next/server";
import { updateDisease, deleteDisease } from "@/lib/services/disease.service";
import { diseaseSchema } from "@/lib/validations";
import { success, error, notFound, conflict } from "@/lib/api-response";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const parsed = diseaseSchema.partial().safeParse(body);
    if (!parsed.success) {
      return error(
        "Validasi gagal",
        400,
        parsed.error.issues.map((e) => ({
          field: e.path.join("."),
          message: e.message,
        }))
      );
    }

    const disease = await updateDisease(id, {
      ...parsed.data,
      imageUrl: body.image_url,
    });
    if (!disease) return notFound("Penyakit tidak ditemukan");

    return success(disease, "Penyakit berhasil diperbarui");
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
    await deleteDisease(id);
    return success(null, "Penyakit berhasil dihapus");
  } catch (err) {
    const message = err instanceof Error ? err.message : "Terjadi kesalahan";
    if (message.includes("tidak dapat dihapus")) return conflict(message);
    if (message.includes("tidak ditemukan")) return notFound(message);
    return error(message, 500);
  }
}
