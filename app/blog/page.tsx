import { prisma } from "@/lib/prisma";
import Link from "next/link";
import type { Metadata } from "next";
import PublicBlogClient from "@/components/blog/PublicBlogClient";

export const metadata: Metadata = {
  title: "Blog — Poonam Choudhary | Parenting, Mindset & Family",
  description:
    "Heartfelt essays, practical guidance, and quiet reflections on raising confident, kind, and emotionally grounded children.",
  openGraph: {
    title: "Blog — Poonam Choudhary",
    description: "Parenting insights and heartfelt essays for conscious families.",
    type: "website",
  },
};

export const revalidate = 0; // Always fetch fresh from DB

export default async function BlogIndexPage() {
  const posts = await prisma.blogPost.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { publishedAt: "desc" },
  });

  const featured = posts.find((p) => p.featured) || posts[0] || null;
  const categories = ["ALL", ...Array.from(new Set(posts.map((p) => p.category)))];

  return (
    <div
      className="min-h-screen w-full selection:bg-[#A8B29A]/30"
      style={{
        backgroundColor: "#FAF7F2",
        color: "#3A2C1E",
        fontFamily: "var(--font-sans), sans-serif",
      }}
    >
      {/* Navigation */}
      <header
        className="sticky top-0 z-50 backdrop-blur-md border-b border-[#6E5A4E]/10"
        style={{ backgroundColor: "rgba(250,247,242,0.92)" }}
      >
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#6E5A4E] hover:text-[#3A2C1E] transition-colors"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">←</span>
            Return to Book
          </Link>
          <span
            style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.15rem", fontWeight: 700, color: "#3A2C1E" }}
          >
            Poonam Choudhary
          </span>
          <Link
            href="/#book"
            className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-lg hover:bg-[#98A58B] transition-colors text-[#FAF7F2]"
            style={{ backgroundColor: "#A8B29A" }}
          >
            My Book
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-14 pb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#6E5A4E]/15 mb-5">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#6E5A4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
            <line x1="16" y1="8" x2="2" y2="22" />
            <line x1="17.5" y1="15" x2="9" y2="15" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6E5A4E]">
            AUTHOR&apos;S JOURNAL
          </span>
        </div>
        <h1
          className="font-bold tracking-tight mb-5"
          style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2rem, 6vw, 3.5rem)", lineHeight: 1.1 }}
        >
          Words on Presence,<br />Parenting &amp; Connection
        </h1>
        <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-cormorant), serif", color: "#6E5A4E" }}>
          Heartfelt essays, practical guidance, and quiet reflections for raising confident, kind children.
        </p>
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="w-12 h-[1px] bg-[#C4A882]/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#C4A882]/60" />
          <div className="w-12 h-[1px] bg-[#C4A882]/40" />
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="max-w-6xl mx-auto px-6 mb-10">
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div
              className="relative rounded-3xl overflow-hidden border border-[#6E5A4E]/10 transition-shadow duration-300 group-hover:shadow-2xl"
              style={{ backgroundColor: "#F4EFE6" }}
            >
              <div className="flex flex-col md:flex-row">
                {featured.coverImage && (
                  <div className="md:w-1/2 aspect-video md:aspect-auto overflow-hidden">
                    <img
                      src={featured.coverImage}
                      alt={featured.featuredImageAlt || featured.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                )}
                <div className="flex flex-col justify-center p-8 md:p-12 md:w-1/2">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md"
                      style={{ backgroundColor: "rgba(168,178,154,0.25)", color: "#4A5A3E" }}
                    >
                      ★ Featured
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md bg-[#C4A882]/15 text-[#6E4A2E]">
                      {featured.category}
                    </span>
                  </div>
                  <h2
                    className="font-bold mb-3 group-hover:text-[#6E5A4E] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(1.4rem, 3vw, 2rem)", lineHeight: 1.2 }}
                  >
                    {featured.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-[#5A4A38] mb-6 line-clamp-3" style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.05rem" }}>
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-[#6E5A4E]">
                    <span>{featured.readingTime}</span>
                    <span className="w-1 h-1 rounded-full bg-[#6E5A4E]/30" />
                    <span>{featured.author}</span>
                    {featured.publishedAt && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-[#6E5A4E]/30" />
                        <span>{new Date(featured.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Blog grid with search & filter */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <PublicBlogClient posts={posts} categories={categories} featuredId={featured?.id} />
      </section>

      {/* Newsletter */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="p-10 md:p-14 rounded-3xl border border-[#6E5A4E]/12 text-center" style={{ backgroundColor: "#F4EFE6" }}>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6E5A4E] block mb-2">STAY CONNECTED</span>
          <h3 className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-cormorant), serif" }}>
            Let&apos;s build a beautiful journey of parenting together.
          </h3>
          <p className="text-base mb-8 text-[#6E5A4E] max-w-lg mx-auto" style={{ fontFamily: "var(--font-cormorant), serif" }}>
            Join my newsletter for tips, stories and updates.
          </p>
          <form action="#" className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-xl border border-[#6E5A4E]/20 text-sm focus:outline-none focus:border-[#A8B29A]" style={{ backgroundColor: "#FAF7F2", color: "#3A2C1E" }} />
            <button type="submit" className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#98A58B] whitespace-nowrap transition-colors text-[#FAF7F2]" style={{ backgroundColor: "#A8B29A" }}>
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#6E5A4E]/10 text-center text-[#6E5A4E]">
        <p className="text-xs">
          © {new Date().getFullYear()} Poonam Choudhary · Author · Speaker · Parenting Guide
        </p>
      </footer>
    </div>
  );
}
