import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET || "poonam_choudhary_blog_cms_jwt_secret_key_2026_super_secure!"
);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect /author routes, excluding /author/login
  if (pathname.startsWith("/author") && pathname !== "/author/login") {
    const token = request.cookies.get("author_session")?.value;

    if (!token) {
      const loginUrl = new URL("/author/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }

    try {
      await jwtVerify(token, SECRET_KEY);
      return NextResponse.next();
    } catch {
      const loginUrl = new URL("/author/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      const response = NextResponse.redirect(loginUrl);
      response.cookies.delete("author_session");
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/author/:path*"],
};
