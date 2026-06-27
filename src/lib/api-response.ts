import { NextResponse } from "next/server";

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
}

export function success<T>(data: T, message?: string, status = 200) {
  return NextResponse.json(
    { success: true, message, data },
    { status }
  );
}

export function created<T>(data: T, message = "Data berhasil dibuat") {
  return success(data, message, 201);
}

export function paginated<T>(
  data: T[],
  meta: PaginationMeta,
  message?: string
) {
  return NextResponse.json(
    { success: true, message, data, meta },
    { status: 200 }
  );
}

export function error(message: string, status = 400, errors?: { field: string; message: string }[]) {
  return NextResponse.json(
    { success: false, message, ...(errors ? { errors } : {}) },
    { status }
  );
}

export function notFound(message = "Data tidak ditemukan") {
  return error(message, 404);
}

export function unauthorized(message = "Token tidak valid atau kadaluarsa") {
  return error(message, 401);
}

export function forbidden(message = "Akses ditolak") {
  return error(message, 403);
}

export function conflict(message: string) {
  return error(message, 409);
}

export function validationError(
  message: string,
  errors: { field: string; message: string }[]
) {
  return error(message, 422, errors);
}

export function serverError(message = "Terjadi kesalahan pada server") {
  return error(message, 500);
}
