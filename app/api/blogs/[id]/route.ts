import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionAuthor } from "@/lib/auth";

function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function calculateReadingTime(text: string): string {
  const words = text.replace(/<[^>]*>/g, "").split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / 200) || 1;
  return `${minutes} min read`;
}

// GET /api/blogs/[id]
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const post = await prisma.blogPost.findUnique({ where: { id } });
    if (!post) {
      return NextResponse.json({ error: "Post not found." }, { status: 404 });
    }
    return NextResponse.json({ post });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch post." }, { status: 500 });
  }
}

// PUT /api/blogs/[id] — Update post (Author only)
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const authorSession = await getSessionAuthor();
    if (!authorSession) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const existing = await prisma.blogPost.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: "Post not found." }, { status: 404 });
    }

    const body = await request.json();
    const {
      title,
      slug: customSlug,
      excerpt,
      content,
      coverImage,
      galleryImages,
      category,
      tags,
      featured,
      status,
      seoTitle,
      seoDescription,
      featuredImageAlt,
    } = body;

    let finalSlug = existing.slug;
    if (customSlug && customSlug !== existing.slug) {
      const baseSlug = generateSlug(customSlug);
      let duplicate = await prisma.blogPost.findUnique({ where: { slug: baseSlug } });
      if (duplicate && duplicate.id !== id) {
        finalSlug = `${baseSlug}-${Date.now()}`;
      } else {
        finalSlug = baseSlug;
      }
    }

    const newContent = content !== undefined ? content : existing.content;
    const readingTime = calculateReadingTime(newContent);
    const postStatus = status !== undefined ? status : existing.status;

    let publishedAt = existing.publishedAt;
    if (postStatus === "PUBLISHED" && !existing.publishedAt) {
      publishedAt = new Date();
    }

    const updatedPost = await prisma.blogPost.update({
      where: { id },
      data: {
        title: title !== undefined ? title : existing.title,
        slug: finalSlug,
        excerpt: excerpt !== undefined ? excerpt : existing.excerpt,
        content: newContent,
        coverImage: coverImage !== undefined ? coverImage : existing.coverImage,
        galleryImages: galleryImages ? JSON.stringify(galleryImages) : existing.galleryImages,
        category: category !== undefined ? category : existing.category,
        tags: tags ? JSON.stringify(tags) : existing.tags,
        featured: featured !== undefined ? Boolean(featured) : existing.featured,
        status: postStatus,
        readingTime,
        publishedAt,
        seoTitle: seoTitle !== undefined ? seoTitle : existing.seoTitle,
        seoDescription: seoDescription !== undefined ? seoDescription : existing.seoDescription,
        featuredImageAlt: featuredImageAlt !== undefined ? featuredImageAlt : existing.featuredImageAlt,
      },
    });

    return NextResponse.json({ success: true, post: updatedPost });
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json({ error: "Failed to update blog post." }, { status: 500 });
  }
}

// DELETE /api/blogs/[id] — Delete post (Author only)
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
    await prisma.blogPost.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json({ error: "Failed to delete blog post." }, { status: 500 });
  }
}
