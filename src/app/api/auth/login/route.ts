import { NextRequest } from "next/server";
import { loginUser } from "@/lib/services/auth.service";
import { success, error, unauthorized } from "@/lib/api-response";
import { loginSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const parsed = loginSchema.safeParse(body);
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

    const result = await loginUser({
      email: parsed.data.email,
      password: parsed.data.password,
    });

    return success(result, "Login berhasil");
  } catch (err) {
    const message = err instanceof Error ? err.message : "Terjadi kesalahan";
    if (message === "Email atau password salah") {
      return unauthorized(message);
    }
    return error(message, 500);
  }
}
