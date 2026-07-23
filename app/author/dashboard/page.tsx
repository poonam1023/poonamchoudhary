import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { BookOpen, Eye, FileText, Star, PenSquare, Plus, TrendingUp } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  let total = 0;
  let published = 0;
  let drafts = 0;
  let totalViews: { _sum: { views: number | null } } = { _sum: { views: 0 } };
  let recent: Array<{
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    category: string;
    status: string;
    views: number;
    updatedAt: Date;
  }> = [];
  let featured: { id: string; title: string; excerpt: string } | null = null;

  try {
    const res = await Promise.all([
      prisma.blogPost.count(),
      prisma.blogPost.count({ where: { status: "PUBLISHED" } }),
      prisma.blogPost.count({ where: { status: "DRAFT" } }),
      prisma.blogPost.aggregate({ _sum: { views: true } }),
      prisma.blogPost.findMany({ orderBy: { updatedAt: "desc" }, take: 5 }),
      prisma.blogPost.findFirst({ where: { featured: true, status: "PUBLISHED" } }),
    ]);
    total = res[0];
    published = res[1];
    drafts = res[2];
    totalViews = res[3];
    recent = res[4];
    featured = res[5];
  } catch (err) {
    console.warn("Prerender/build warning: Failed to load author dashboard stats", err);
  }

  const views = totalViews._sum?.views ?? 0;

  const stats = [
    { label: "Total Posts", value: total, icon: FileText, color: "#A8B29A" },
    { label: "Published", value: published, icon: BookOpen, color: "#7BAB7B" },
    { label: "Drafts", value: drafts, icon: PenSquare, color: "#C4A882" },
    { label: "Total Views", value: views.toLocaleString(), icon: Eye, color: "#9B8B7A" },
  ];

  const statusColors: Record<string, string> = {
    PUBLISHED: "bg-green-100 text-green-800",
    DRAFT: "bg-amber-100 text-amber-800",
    SCHEDULED: "bg-blue-100 text-blue-800",
    ARCHIVED: "bg-gray-100 text-gray-600",
  };

  return (
    <div className="p-6 lg:p-8 space-y-8" style={{ color: "#3A2C1E" }}>
      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1
            className="text-3xl font-bold mb-1"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Author Dashboard
          </h1>
          <p className="text-sm text-[#6E5A4E]">Welcome back. Here&apos;s your content overview.</p>
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

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="p-5 rounded-2xl border border-[#6E5A4E]/10"
              style={{ backgroundColor: "#FAF8F4" }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                style={{ backgroundColor: stat.color + "25" }}
              >
                <Icon className="w-4 h-4" style={{ color: stat.color }} />
              </div>
              <div
                className="text-2xl font-bold mb-0.5"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-[#6E5A4E] font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Posts */}
        <div
          className="lg:col-span-2 rounded-2xl border border-[#6E5A4E]/10 overflow-hidden"
          style={{ backgroundColor: "#FAF8F4" }}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#6E5A4E]/10">
            <h2 className="font-bold text-sm uppercase tracking-wider text-[#3A2C1E]">
              Recent Posts
            </h2>
            <Link href="/author/blogs" className="text-xs text-[#A8B29A] hover:underline">
              View all →
            </Link>
          </div>
          <div className="divide-y divide-[#6E5A4E]/8">
            {recent.length === 0 ? (
              <div className="p-6 text-center text-sm text-[#6E5A4E]">
                No posts yet.{" "}
                <Link href="/author/blogs/new" className="text-[#A8B29A] underline">
                  Create your first article
                </Link>
              </div>
            ) : (
              recent.map((post) => (
                <div key={post.id} className="px-6 py-4 flex items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm truncate" title={post.title}>
                      {post.title}
                    </p>
                    <div className="flex items-center gap-3 mt-1">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${statusColors[post.status] || "bg-gray-100 text-gray-600"}`}
                      >
                        {post.status}
                      </span>
                      <span className="text-xs text-[#6E5A4E]">{post.category}</span>
                      <span className="text-xs text-[#6E5A4E] flex items-center gap-1">
                        <Eye className="w-3 h-3" /> {post.views}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/author/blogs/${post.id}/edit`}
                    className="shrink-0 text-xs px-3 py-1.5 rounded-lg border border-[#6E5A4E]/15 hover:bg-[#6E5A4E]/10 transition-colors"
                  >
                    Edit
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Quick Actions + Featured */}
        <div className="space-y-4">
          <div
            className="rounded-2xl border border-[#6E5A4E]/10 p-5"
            style={{ backgroundColor: "#FAF8F4" }}
          >
            <h2 className="font-bold text-sm uppercase tracking-wider text-[#3A2C1E] mb-4">
              Quick Actions
            </h2>
            <div className="space-y-2">
              <Link
                href="/author/blogs/new"
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-dashed border-[#A8B29A]/50 hover:bg-[#A8B29A]/10 transition-colors text-sm font-medium text-[#4A3728]"
              >
                <Plus className="w-4 h-4 text-[#A8B29A]" />
                Write New Article
              </Link>
              <Link
                href="/author/media"
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-dashed border-[#C4A882]/50 hover:bg-[#C4A882]/10 transition-colors text-sm font-medium text-[#4A3728]"
              >
                <Star className="w-4 h-4 text-[#C4A882]" />
                Manage Media
              </Link>
              <Link
                href="/blog"
                target="_blank"
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-dashed border-[#9B8B7A]/40 hover:bg-[#9B8B7A]/10 transition-colors text-sm font-medium text-[#4A3728]"
              >
                <TrendingUp className="w-4 h-4 text-[#9B8B7A]" />
                View Public Blog
              </Link>
            </div>
          </div>

          {featured && (
            <div
              className="rounded-2xl border border-[#6E5A4E]/10 p-5"
              style={{ backgroundColor: "#FAF8F4" }}
            >
              <h2 className="font-bold text-xs uppercase tracking-wider text-[#A8B29A] mb-3 flex items-center gap-1.5">
                <Star className="w-3 h-3" /> Featured Article
              </h2>
              <p className="text-sm font-semibold text-[#3A2C1E] mb-1 line-clamp-2">{featured.title}</p>
              <p className="text-xs text-[#6E5A4E] mb-3 line-clamp-2">{featured.excerpt}</p>
              <Link
                href={`/author/blogs/${featured.id}/edit`}
                className="text-xs font-bold text-[#A8B29A] hover:underline"
              >
                Edit →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
