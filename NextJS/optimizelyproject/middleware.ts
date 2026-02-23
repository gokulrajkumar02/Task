import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

    // const login = localStorage.getItem("login");
    const login = true
    if (!login && request.nextUrl.pathname !== "/") {
        return NextResponse.redirect(new URL("/", request.url));
    }
    else if (login && request.nextUrl.pathname === "/") {
        return NextResponse.redirect(new URL("/Home", request.url));
    }

    return NextResponse.next();
}
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};  