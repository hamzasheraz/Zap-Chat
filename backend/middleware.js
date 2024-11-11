// import { NextResponse } from "next/server";
// import { cookies } from 'next/headers'; // New approach in Next.js 13 for cookies

// // Middleware function to handle token-based redirects
// export function middleware(request) {
// const path = new URL(request.url).pathname;

//   const isPublicPath = path === "/login" || path === "/signup";

//   // Access cookies using 'next/headers' API
//   const token = cookies().get("token") || ""; 

//   // If the path is public but the user has a token, redirect to profile
//   if (isPublicPath && token) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   // If the path is private and no token exists, redirect to login
//   if (!isPublicPath && !token) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   return NextResponse.next(); // Continue with the request if no conditions match
// }

// // Config to match the middleware on specific paths
// export const config = {
//   matcher: ["/","/settings", "/login", "/signup"],
// };
