import { NextResponse } from "next/server";
import { getSessionAuthor } from "@/lib/auth";

export async function GET() {
  const author = await getSessionAuthor();
  if (!author) {
    return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
  }
  return NextResponse.json({ author });
}
