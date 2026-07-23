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

// GET /api/blogs — Fetch blog posts (Public gets published; Author can filter by status)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";
    const category = searchParams.get("category") || "";
    const status = searchParams.get("status") || "";
    const featuredOnly = searchParams.get("featured") === "true";
    const authorSession = await getSessionAuthor();

    const whereClause: any = {};

    // Unauthenticated visitors only see PUBLISHED posts
    if (!authorSession) {
      whereClause.status = "PUBLISHED";
    } else if (status) {
      whereClause.status = status;
    }

    if (featuredOnly) {
      whereClause.featured = true;
    }

    if (category && category !== "ALL") {
      whereClause.category = category;
    }

    if (search) {
      whereClause.OR = [
        { title: { contains: search } },
        { excerpt: { contains: search } },
        { content: { contains: search } },
      ];
    }

    const posts = await prisma.blogPost.findMany({
      where: whereClause,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ posts });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({ error: "Failed to fetch blog posts." }, { status: 500 });
  }
}

// POST /api/blogs — Create a new blog post (Author only)
export async function POST(request: Request) {
  try {
    const authorSession = await getSessionAuthor();
    if (!authorSession) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
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

    if (!title || !content) {
      return NextResponse.json({ error: "Title and content are required." }, { status: 400 });
    }

    let baseSlug = customSlug ? generateSlug(customSlug) : generateSlug(title);
    let finalSlug = baseSlug || `post-${Date.now()}`;

    // Ensure slug uniqueness
    let existing = await prisma.blogPost.findUnique({ where: { slug: finalSlug } });
    let counter = 1;
    while (existing) {
      finalSlug = `${baseSlug}-${counter}`;
      existing = await prisma.blogPost.findUnique({ where: { slug: finalSlug } });
      counter++;
    }

    const postStatus = status || "DRAFT";
    const readingTime = calculateReadingTime(content);

    const newPost = await prisma.blogPost.create({
      data: {
        title,
        slug: finalSlug,
        excerpt: excerpt || title,
        content,
        coverImage: coverImage || "",
        galleryImages: JSON.stringify(galleryImages || []),
        author: authorSession.name || "Poonam Choudhary",
        category: category || "PARENTING",
        tags: JSON.stringify(tags || []),
        featured: Boolean(featured),
        status: postStatus,
        readingTime,
        publishedAt: postStatus === "PUBLISHED" ? new Date() : null,
        seoTitle: seoTitle || title,
        seoDescription: seoDescription || excerpt || title,
        featuredImageAlt: featuredImageAlt || "",
      },
    });

    return NextResponse.json({ success: true, post: newPost }, { status: 201 });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json({ error: "Failed to create blog post." }, { status: 500 });
  }
}
