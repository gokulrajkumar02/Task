import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";


const restrictedRoutes : Record<string, string[]> = {
    admin : ["/Variations"],
    user : ["/Variable"]
}
export async function middleware(request: NextRequest) {
    function reDirect(url : string) {
        return NextResponse.redirect(new URL(url, request.url));
    }
    
    const { pathname } = request.nextUrl; 
    // const login = localStorage.getItem("login");
    const cookieStore = await cookies();
    const login = cookieStore.get("user") ?.value;
    const storedUser  = login ? JSON.parse(login) : null;
    if(!login && pathname !== "/") {
        return reDirect("/");
    }
    if(login && pathname === "/") {
        return reDirect("/Home");
    }

    if(restrictedRoutes[storedUser ?.role]?.includes(pathname)) {
        return reDirect("/notFound");
    }
    console.log(pathname);
    console.log("Type of request: ", request.method);

} 
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};  