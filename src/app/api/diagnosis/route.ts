import { NextRequest } from "next/server";
import { runDiagnosis } from "@/lib/services/diagnosis.service";
import { diagnosisSchema } from "@/lib/validations";
import { success, error } from "@/lib/api-response";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const parsed = diagnosisSchema.safeParse(body);
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

    const result = await runDiagnosis(
      {
        phase_id: parsed.data.phase_id,
        symptoms: parsed.data.symptoms,
      },
      request
    );

    if (!result) {
      return success(
        null,
        "Tidak ditemukan penyakit yang cocok dengan gejala yang dipilih. Silakan konsultasikan dengan ahli pertanian."
      );
    }

    return success(result, "Diagnosis berhasil");
  } catch (err) {
    const message = err instanceof Error ? err.message : "Terjadi kesalahan";
    return error(message, 500);
  }
}
