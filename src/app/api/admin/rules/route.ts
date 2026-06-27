import { NextRequest } from "next/server";
import { getRules, createRule } from "@/lib/services/rule.service";
import { ruleSchema } from "@/lib/validations";
import { created, error, conflict, paginated } from "@/lib/api-response";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") ?? "1");
  const limit = parseInt(searchParams.get("limit") ?? "100");

  const { data, meta } = await getRules({ page, limit });
  return paginated(data, meta);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = ruleSchema.safeParse(body);
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

    if (parsed.data.cf_expert < 0 || parsed.data.cf_expert > 1) {
      return error("CF expert harus antara 0 dan 1", 400);
    }

    const rule = await createRule({
      disease_id: parsed.data.disease_id,
      symptom_id: parsed.data.symptom_ids[0],
      phase_id: parsed.data.phase_id,
      cf_expert: parsed.data.mb ?? 1,
    });
    return created(rule, "Aturan berhasil dibuat");
  } catch (err) {
    const message = err instanceof Error ? err.message : "Terjadi kesalahan";
    if (message.includes("sudah ada")) return conflict(message);
    return error(message, 500);
  }
}
