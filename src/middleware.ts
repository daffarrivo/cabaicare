import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Only protect /api/admin/* routes
  if (!pathname.startsWith("/api/admin/")) {
    return NextResponse.next();
  }

  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return NextResponse.json(
      { success: false, message: "Token tidak ditemukan" },
      { status: 401 }
    );
  }

  const token = authHeader.slice(7);
  try {
    const user = await verifyToken(token);

    // Admin-only check
    if (user.role !== "admin") {
      return NextResponse.json(
        { success: false, message: "Akses ditolak. Hanya admin yang dapat mengakses." },
        { status: 403 }
      );
    }

    // Clone headers with user info for downstream route handlers
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-user-id", user.id);
    requestHeaders.set("x-user-email", user.email);
    requestHeaders.set("x-user-role", user.role);

    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Token tidak valid atau kadaluarsa" },
      { status: 401 }
    );
  }
}

export const config = {
  matcher: "/api/admin/:path*",
};
