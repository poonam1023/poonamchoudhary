import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/components/blog/ShareButtons";

export const revalidate = 0;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({ where: { slug } });
  if (!post || post.status !== "PUBLISHED") return { title: "Article Not Found" };

  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt;
  const imageUrl = post.coverImage;
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://poonamchoudhary.com"}/blog/${slug}`;

  return {
    title: `${title} | Poonam Choudhary`,
    description,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "article",
      publishedTime: post.publishedAt?.toISOString(),
      authors: [post.author],
      images: imageUrl ? [{ url: imageUrl, alt: post.featuredImageAlt || title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
    alternates: { canonical: canonicalUrl },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({ where: { slug } });

  if (!post || post.status !== "PUBLISHED") notFound();

  // Increment views
  await prisma.blogPost.update({ where: { id: post.id }, data: { views: { increment: 1 } } });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: post.author },
    datePublished: post.publishedAt?.toISOString(),
    dateModified: post.updatedAt.toISOString(),
    image: post.coverImage || undefined,
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://poonamchoudhary.com"}/blog/${slug}`,
  };

  const tags = JSON.parse(post.tags || "[]") as string[];

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#FAF7F2", color: "#3A2C1E", fontFamily: "var(--font-sans), sans-serif" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Nav */}
      <header
        className="sticky top-0 z-50 backdrop-blur-md border-b border-[#6E5A4E]/10"
        style={{ backgroundColor: "rgba(250,247,242,0.92)" }}
      >
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/blog" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#6E5A4E] hover:text-[#3A2C1E] transition-colors">
            <span className="transition-transform group-hover:-translate-x-0.5">←</span>
            All Articles
          </Link>
          <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.1rem", fontWeight: 700 }}>
            Poonam Choudhary
          </span>
          <Link href="/#book" className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-lg text-[#FAF7F2] hover:bg-[#98A58B] transition-colors" style={{ backgroundColor: "#A8B29A" }}>
            My Book
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        {/* Category + Meta */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md" style={{ backgroundColor: "rgba(168,178,154,0.2)", color: "#4A5A3E" }}>
            {post.category}
          </span>
          <span className="text-xs text-[#6E5A4E]">{post.readingTime}</span>
          {post.publishedAt && (
            <>
              <span className="w-1 h-1 rounded-full bg-[#6E5A4E]/30" />
              <span className="text-xs text-[#6E5A4E]">
                {new Date(post.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
              </span>
            </>
          )}
        </div>

        {/* Title */}
        <h1
          className="font-bold mb-4 leading-tight"
          style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2rem, 5vw, 3rem)" }}
        >
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-lg text-[#5A4A38] mb-8 leading-relaxed" style={{ fontFamily: "var(--font-cormorant), serif" }}>
          {post.excerpt}
        </p>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={post.coverImage}
              alt={post.featuredImageAlt || post.title}
              className="w-full aspect-video object-cover"
            />
          </div>
        )}

        {/* Author bar */}
        <div className="flex items-center gap-3 mb-10 pb-8 border-b border-[#6E5A4E]/10">
          <div className="w-10 h-10 rounded-full bg-[#A8B29A] flex items-center justify-center text-sm font-bold text-[#FAF7F2]">
            {post.author.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-semibold text-[#3A2C1E]">{post.author}</p>
            <p className="text-xs text-[#6E5A4E]">Author · Parenting Expert</p>
          </div>
          <div className="ml-auto flex items-center gap-1.5 text-xs text-[#6E5A4E]">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            {post.views + 1} views
          </div>
        </div>

        {/* Content */}
        <div
          className="prose prose-stone max-w-none article-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-10 pt-8 border-t border-[#6E5A4E]/10">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full border border-[#6E5A4E]/15 text-[#6E5A4E]">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Share */}
        <div className="mt-10 pt-8 border-t border-[#6E5A4E]/10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#6E5A4E] mb-4">Share this article</p>
          <ShareButtons title={post.title} slug={post.slug} />
        </div>

        {/* Back CTA */}
        <div className="mt-12 pt-8 border-t border-[#6E5A4E]/10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest text-[#FAF7F2] hover:bg-[#98A58B] transition-colors"
            style={{ backgroundColor: "#A8B29A" }}
          >
            ← Read More Articles
          </Link>
        </div>
      </article>
    </div>
  );
}
