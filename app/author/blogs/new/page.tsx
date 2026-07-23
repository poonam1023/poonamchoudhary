import BlogForm from "@/components/author/BlogForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewBlogPage() {
  return (
    <div className="flex flex-col h-full" style={{ color: "#3A2C1E" }}>
      {/* Breadcrumb */}
      <div className="px-6 py-3 flex items-center gap-2 text-sm border-b border-[#6E5A4E]/10 bg-[#FAF7F2]">
        <Link href="/author/blogs" className="flex items-center gap-1.5 text-[#6E5A4E] hover:text-[#3A2C1E] transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Blog Posts
        </Link>
        <span className="text-[#6E5A4E]/40">/</span>
        <span className="font-medium">New Article</span>
      </div>
      <BlogForm />
    </div>
  );
}
