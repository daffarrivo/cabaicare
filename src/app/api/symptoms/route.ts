import { NextRequest } from "next/server";
import { getSymptoms } from "@/lib/services/symptom.service";
import { paginated } from "@/lib/api-response";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const phaseId = searchParams.get("phase_id") ?? undefined;
  const page = parseInt(searchParams.get("page") ?? "1");
  const limit = parseInt(searchParams.get("limit") ?? "50");

  const { data, meta } = await getSymptoms({ phaseId, page, limit });
  return paginated(data, meta);
}
