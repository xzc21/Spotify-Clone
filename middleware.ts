import { NextResponse } from "next/server";

const signedinPages = ["/", "/playlist", "/library"];

export default function middleware(req) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.get("MUSIFY_ACCESS_TOKEN");
    if (!token) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }
  }
}
