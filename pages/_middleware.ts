import { NextResponse } from "next/server";

const signedinPages = ["/", "playlist", "library"];

export default function middleware(req) {
  if (signedinPages.find((p) => p === req.nextUrl.pathme)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.redirect("/signin");
    }
  }
}
