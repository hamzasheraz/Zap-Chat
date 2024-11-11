import { NextResponse } from "next/server";
import { cookies } from 'next/headers';

export async function middleware(request) {
  const path = new URL(request.url).pathname;

  const isPublicPath = path === "/login" || path === "/signup";

  const token = (await cookies()).get("token") || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/settings", "/login", "/signup"],
};
