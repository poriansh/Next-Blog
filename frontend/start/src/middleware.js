import {NextResponse} from "next/server";
import middlewareAuth from "./utils/middlewareAuth";

export async function middleware(req) {
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith("/profile")) {
    const user = await middlewareAuth(req);
    if (!user) return NextResponse.redirect(new URL(`/auth`, req.nextUrl));
  }
  if (pathname.startsWith("/auth")) {
    const user = await middlewareAuth(req);
    if (user) return NextResponse.redirect(new URL(`/`, req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*","/auth"],
};
