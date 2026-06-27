import { NextRequest } from "next/server";
import { prisma } from "@/lib/db/prisma";
import { paginated } from "@/lib/api-response";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") ?? "1");
  const limit = parseInt(searchParams.get("limit") ?? "20");
  const skip = (page - 1) * limit;
  const userId = searchParams.get("user_id") ?? undefined;

  const where = userId ? { userId } : {};

  const [data, total] = await Promise.all([
    prisma.consultation.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
      include: {
        user: { select: { id: true, name: true, email: true } },
      },
    }),
    prisma.consultation.count({ where }),
  ]);

  const formatted = data.map((c) => ({
    id: c.id,
    user: c.user,
    phase_id: c.phaseId,
    result_json: c.resultJson,
    created_at: c.createdAt.toISOString(),
  }));

  return paginated(formatted, { page, limit, total });
}
