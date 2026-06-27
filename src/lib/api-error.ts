export class ApiError extends Error {
  constructor(
    message: string,
    public status: number
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export class ValidationError extends ApiError {
  constructor(
    message: string,
    public errors: { field: string; message: string }[] = []
  ) {
    super(message, 422);
    this.name = "ValidationError";
  }
}

export class NotFoundError extends ApiError {
  constructor(message = "Data tidak ditemukan") {
    super(message, 404);
    this.name = "NotFoundError";
  }
}

export class UnauthorizedError extends ApiError {
  constructor(message = "Token tidak valid atau kadaluarsa") {
    super(message, 401);
    this.name = "UnauthorizedError";
  }
}

export class ForbiddenError extends ApiError {
  constructor(message = "Akses ditolak") {
    super(message, 403);
    this.name = "ForbiddenError";
  }
}

export class ConflictError extends ApiError {
  constructor(message: string) {
    super(message, 409);
    this.name = "ConflictError";
  }
}

export function handleApiError(err: unknown) {
  if (err instanceof ApiError) {
    if (err instanceof ValidationError) {
      return Response.json(
        { success: false, message: err.message, errors: err.errors },
        { status: err.status }
      );
    }
    return Response.json(
      { success: false, message: err.message },
      { status: err.status }
    );
  }

  console.error("Unexpected error:", err);
  return Response.json(
    { success: false, message: "Terjadi kesalahan pada server" },
    { status: 500 }
  );
}
