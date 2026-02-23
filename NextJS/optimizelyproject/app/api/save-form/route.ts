import { NextResponse } from "next/server";

export async function POST(req: Request) {

  const formData = await req.json();

  const res = NextResponse.json({ saved: true });

  res.cookies.set("user", JSON.stringify(formData), {
    httpOnly: true,
    path: "/",  
    maxAge: 60* 60, 
  });

  return res;
}