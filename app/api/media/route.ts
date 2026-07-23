import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionAuthor } from "@/lib/auth";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

// GET /api/media — List media library items
export async function GET() {
  try {
    const media = await prisma.mediaItem.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ media });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch media library." }, { status: 500 });
  }
}

// POST /api/media — Upload image file (Author only)
export async function POST(request: Request) {
  try {
    const authorSession = await getSessionAuthor();
    if (!authorSession) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/svg+xml"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Only JPEG, PNG, WEBP, and SVG images are allowed." },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    await mkdir(uploadsDir, { recursive: true });

    const ext = path.extname(file.name) || ".png";
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext}`;
    const filePath = path.join(uploadsDir, filename);

    await writeFile(filePath, buffer);

    const url = `/uploads/${filename}`;

    const mediaItem = await prisma.mediaItem.create({
      data: {
        name: file.name,
        url,
        size: file.size,
        type: file.type,
      },
    });

    return NextResponse.json({ success: true, media: mediaItem, url });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json({ error: "Failed to upload file." }, { status: 500 });
  }
}
