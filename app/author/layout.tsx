"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  ImageIcon,
  Settings,
  LogOut,
  PenSquare,
  Menu,
  X,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const navItems = [
  { href: "/author/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/author/blogs", label: "Blog Posts", icon: BookOpen },
  { href: "/author/media", label: "Media Library", icon: ImageIcon },
  { href: "/author/settings", label: "Settings", icon: Settings },
];

export default function AuthorLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [author, setAuthor] = useState<{ name: string; email: string } | null>(null);

  // Login page gets no sidebar
  if (pathname === "/author/login") return <>{children}</>;



  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((data) => data.author && setAuthor(data.author))
      .catch(() => {});
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/author/login");
  };

  const Sidebar = () => (
    <div
      className="flex flex-col h-full"
      style={{ backgroundColor: "#2D2015", color: "#FAF7F2" }}
    >
      {/* Logo */}
      <div className="p-6 border-b border-[#FAF7F2]/10">
        <Link href="/author/dashboard" className="block">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded bg-[#A8B29A] flex items-center justify-center">
              <PenSquare className="w-3.5 h-3.5 text-[#2D2015]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#A8B29A]">
              CMS
            </span>
          </div>
          <span
            className="block text-lg font-bold leading-tight"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Poonam Choudhary
          </span>
          <span className="text-xs text-[#FAF7F2]/40">Author Dashboard</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const active = pathname === item.href || pathname.startsWith(item.href + "/");
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-150 group"
              style={{
                backgroundColor: active ? "#A8B29A20" : "transparent",
                color: active ? "#A8B29A" : "#FAF7F2AA",
              }}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="font-medium">{item.label}</span>
              {active && <ChevronRight className="w-3 h-3 ml-auto" />}
            </Link>
          );
        })}
      </nav>

      {/* Author Info + Logout */}
      <div className="p-4 border-t border-[#FAF7F2]/10">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-2 px-3 py-2 mb-3 rounded-lg text-xs text-[#A8B29A] hover:bg-[#FAF7F2]/10 transition-colors"
        >
          <Sparkles className="w-3.5 h-3.5" />
          View Public Blog
        </Link>
        {author && (
          <div className="px-3 py-2 mb-2 rounded-lg bg-[#FAF7F2]/5">
            <p className="text-xs font-semibold text-[#FAF7F2]/80 truncate">{author.name}</p>
            <p className="text-xs text-[#FAF7F2]/40 truncate">{author.email}</p>
          </div>
        )}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-3 py-2 w-full rounded-lg text-sm text-[#FAF7F2]/50 hover:text-red-400 hover:bg-red-500/10 transition-all duration-150"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen overflow-hidden" style={{ backgroundColor: "#F4F0EB" }}>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex w-64 shrink-0 flex-col border-r border-[#FAF7F2]/5" style={{ backgroundColor: "#2D2015" }}>
        <Sidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="w-64 shadow-2xl" style={{ backgroundColor: "#2D2015" }}>
            <Sidebar />
          </div>
          <div
            className="flex-1 bg-black/50 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile Header */}
        <div
          className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-[#6E5A4E]/15"
          style={{ backgroundColor: "#FAF7F2" }}
        >
          <button onClick={() => setSidebarOpen(true)} className="p-2 rounded-lg hover:bg-[#6E5A4E]/10">
            <Menu className="w-5 h-5 text-[#3A2C1E]" />
          </button>
          <span
            className="font-bold"
            style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.1rem" }}
          >
            Author Dashboard
          </span>
          <div className="w-9" />
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
