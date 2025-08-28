import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const cookieNamePrefix = "user-auth-cookie";
  const authCookie = request.cookies
    .getAll()
    .find((c) => c.name.startsWith(cookieNamePrefix));
  const pathname = request.nextUrl.pathname;

  // if (!authCookie) {
  //   if (pathname !== "/signup" && pathname !== "/signin") {
  //     return NextResponse.redirect(new URL("/signin", request.url));
  //   }
  // }
  if (authCookie) {
    if (pathname === "/signin" || pathname === "/signup") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|css|js|webp)).*)",
  ],
};
