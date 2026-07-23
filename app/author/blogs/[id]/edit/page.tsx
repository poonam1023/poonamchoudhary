import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import BlogForm from "@/components/author/BlogForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function EditBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await prisma.blogPost.findUnique({ where: { id } });
  if (!post) notFound();

  const initialData = {
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    coverImage: post.coverImage,
    featuredImageAlt: post.featuredImageAlt || "",
    category: post.category,
    tags: JSON.parse(post.tags || "[]"),
    featured: post.featured,
    status: post.status,
    seoTitle: post.seoTitle || "",
    seoDescription: post.seoDescription || "",
  };

  return (
    <div className="flex flex-col h-full" style={{ color: "#3A2C1E" }}>
      {/* Breadcrumb */}
      <div className="px-6 py-3 flex items-center gap-2 text-sm border-b border-[#6E5A4E]/10 bg-[#FAF7F2]">
        <Link href="/author/blogs" className="flex items-center gap-1.5 text-[#6E5A4E] hover:text-[#3A2C1E] transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Blog Posts
        </Link>
        <span className="text-[#6E5A4E]/40">/</span>
        <span className="font-medium truncate max-w-xs">{post.title}</span>
      </div>
      <BlogForm postId={id} initialData={initialData} />
    </div>
  );
}
