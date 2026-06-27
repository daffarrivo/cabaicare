import { NextRequest } from "next/server";
import { createDisease, getDiseases } from "@/lib/services/disease.service";
import { diseaseSchema } from "@/lib/validations";
import { created, error, paginated } from "@/lib/api-response";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") ?? "1");
  const limit = parseInt(searchParams.get("limit") ?? "50");

  const { data, meta } = await getDiseases({ page, limit });
  return paginated(data, meta);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = diseaseSchema.safeParse(body);
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

    const disease = await createDisease({
      ...parsed.data,
      imageUrl: body.image_url,
    });
    return created(disease, "Penyakit berhasil dibuat");
  } catch (err) {
    const message = err instanceof Error ? err.message : "Terjadi kesalahan";
    return error(message, 500);
  }
}
