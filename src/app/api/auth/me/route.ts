import { NextRequest } from "next/server";
import { getAuthUser } from "@/lib/middleware/auth";
import { success, unauthorized } from "@/lib/api-response";

export async function GET(request: NextRequest) {
  const user = await getAuthUser(request);
  if (!user) {
    return unauthorized("Token tidak ditemukan atau tidak valid");
  }

  return success(user);
}
