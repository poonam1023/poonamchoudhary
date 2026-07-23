import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionAuthor } from "@/lib/auth";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const authorSession = await getSessionAuthor();

    const post = await prisma.blogPost.findUnique({
      where: { slug },
    });

    if (!post) {
      return NextResponse.json({ error: "Article not found." }, { status: 404 });
    }

    // Public visitors cannot view Draft or Archived posts
    if (!authorSession && post.status !== "PUBLISHED") {
      return NextResponse.json({ error: "Article not found." }, { status: 404 });
    }

    // Increment view count atomically for public reads
    if (!authorSession) {
      await prisma.blogPost.update({
        where: { id: post.id },
        data: { views: { increment: 1 } },
      });
    }

    return NextResponse.json({ post });
  } catch (error) {
    console.error("Error fetching article by slug:", error);
    return NextResponse.json({ error: "Failed to load article." }, { status: 500 });
  }
}
