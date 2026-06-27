import { NextRequest } from "next/server";
import { createSymptom, getSymptoms } from "@/lib/services/symptom.service";
import { symptomSchema } from "@/lib/validations";
import { created, error, paginated } from "@/lib/api-response";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") ?? "1");
  const limit = parseInt(searchParams.get("limit") ?? "50");

  const { data, meta } = await getSymptoms({ page, limit });
  return paginated(data, meta);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = symptomSchema.safeParse(body);
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

    const symptom = await createSymptom(parsed.data);
    return created(symptom, "Gejala berhasil dibuat");
  } catch (err) {
    const message = err instanceof Error ? err.message : "Terjadi kesalahan";
    return error(message, 500);
  }
}
