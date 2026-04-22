import { NextResponse } from "next/server";
import { getDistrictData } from "@/lib/api";

export async function GET() {
  try {
    const data = await getDistrictData();
    return NextResponse.json(data);
  } catch (error) {
    console.error("ERROR:", error);

    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
