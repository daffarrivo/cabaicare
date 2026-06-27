import { verifyToken } from "@/lib/services/auth.service";
import { NextRequest, NextResponse } from "next/server";

export async function getAuthUser(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return null;
  }

  const token = authHeader.slice(7);
  try {
    return await verifyToken(token);
  } catch {
    return null;
  }
}

export async function requireAuth(request: NextRequest) {
  const user = await getAuthUser(request);
  if (!user) {
    return NextResponse.json(
      { success: false, message: "Token tidak valid atau kadaluarsa" },
      { status: 401 }
    );
  }
  return user;
}

export async function requireAdmin(request: NextRequest) {
  const user = await requireAuth(request);
  if (user instanceof NextResponse) return user;

  if (user.role !== "admin") {
    return NextResponse.json(
      { success: false, message: "Akses ditolak. Hanya admin yang dapat mengakses." },
      { status: 403 }
    );
  }
  return user;
}
