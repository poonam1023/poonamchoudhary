import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus } from "lucide-react";
import BlogsTable from "@/components/author/BlogsTable";

export const dynamic = "force-dynamic";

export default async function BlogsPage() {
  let posts: Array<{
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    category: string;
    status: string;
    views: number;
    updatedAt: Date;
  }> = [];

  try {
    posts = await prisma.blogPost.findMany({
      orderBy: { updatedAt: "desc" },
    });
  } catch (err) {
    console.warn("Prerender/build warning: Failed to fetch blog posts", err);
  }

  return (
    <div className="p-6 lg:p-8 space-y-6" style={{ color: "#3A2C1E" }}>
      {/* Header */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cormorant), serif" }}>
            Blog Posts
          </h1>
          <p className="text-sm text-[#6E5A4E] mt-0.5">{posts.length} total articles</p>
        </div>
        <Link
          href="/author/blogs/new"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest text-[#FAF7F2] hover:bg-[#98A58B] transition-colors"
          style={{ backgroundColor: "#A8B29A" }}
        >
          <Plus className="w-4 h-4" />
          New Article
        </Link>
      </div>

      <BlogsTable initialPosts={posts} />
    </div>
  );
}
