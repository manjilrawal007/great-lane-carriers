import { NextResponse } from "next/server";

/**
 * Portal auth stub — future protected routes:
 * /portal/dashboard, /portal/documents, /portal/pay, etc.
 * When auth is added, redirect unauthenticated users to /portal login.
 */
export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/portal/dashboard/:path*",
    "/portal/documents/:path*",
    "/portal/pay/:path*",
  ],
};
