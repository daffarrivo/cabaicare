import { NextRequest } from "next/server";
import { registerUser } from "@/lib/services/auth.service";
import { success, error, conflict } from "@/lib/api-response";
import { loginSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const parsed = loginSchema.safeParse(body);
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

    const registerSchema = loginSchema.extend({
      name: loginSchema.shape.email.min(1, "Nama wajib diisi"),
    });

    const regParsed = registerSchema.safeParse(body);
    if (!regParsed.success) {
      return error(
        "Nama wajib diisi",
        400,
        regParsed.error.errors.map((e) => ({
          field: e.path.join("."),
          message: e.message,
        }))
      );
    }

    const result = await registerUser({
      name: body.name,
      email: parsed.data.email,
      password: parsed.data.password,
    });

    return success(result, "Registrasi berhasil", 201);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Terjadi kesalahan";
    if (message === "Email sudah terdaftar") {
      return conflict(message);
    }
    return error(message, 500);
  }
}
