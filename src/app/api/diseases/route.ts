import { NextRequest } from "next/server";
import { getDiseases } from "@/lib/services/disease.service";
import { paginated } from "@/lib/api-response";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") ?? "1");
  const limit = parseInt(searchParams.get("limit") ?? "50");

  const { data, meta } = await getDiseases({ page, limit });
  return paginated(data, meta);
}
