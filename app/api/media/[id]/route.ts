import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionAuthor } from "@/lib/auth";
import { unlink } from "fs/promises";
import path from "path";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const authorSession = await getSessionAuthor();
    if (!authorSession) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const item = await prisma.mediaItem.findUnique({ where: { id } });
    if (!item) {
      return NextResponse.json({ error: "Media item not found." }, { status: 404 });
    }

    // Delete file from filesystem
    try {
      const filePath = path.join(process.cwd(), "public", item.url);
      await unlink(filePath);
    } catch {
      // File may already be deleted; continue
    }

    await prisma.mediaItem.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting media:", error);
    return NextResponse.json({ error: "Failed to delete media." }, { status: 500 });
  }
}
