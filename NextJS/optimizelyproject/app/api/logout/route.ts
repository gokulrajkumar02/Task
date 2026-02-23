import { NextResponse } from "next/server";

export async function GET() {

  const res = NextResponse.json({ logout: true });

  // delete cookie
  res.cookies.delete("user");

  return res;
}