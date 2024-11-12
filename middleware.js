import { NextResponse } from "next/server";
import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';

export async function middleware(request) {
  const path = new URL(request.url).pathname;

  const isPublicPath = path === "/login" || path === "/signup";
  const token = (await cookies()).get("token") || "";

  if (token) {
    try {
      if (token.value.split('.').length === 3) {
        await jwtVerify(token.value, new TextEncoder().encode(process.env.TOKEN_SECRET));
      } else {
        throw new Error("Token is malformed");
      }
    } catch (err) {
      const cookieStore = cookies();
      await cookieStore.set("token", "", { expires: new Date(0) });
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
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
