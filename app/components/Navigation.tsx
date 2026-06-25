"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, BookOpen } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Books", href: "#books" },
  { label: "Speaking", href: "#speaking" },
  { label: "Journal", href: "#journal" },
  { label: "Connect", href: "#connect" },
];

export default function Navigation() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Update active section based on scroll
      const sections = navItems.map((item) => item.href.slice(1));
      const currentSection = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsDrawerOpen(false);
    const section = href.slice(1);
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Desktop Nav ─────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled
            ? "bg-[#F7F1E8]/95 backdrop-blur-sm border-b border-[#D5CABC]/60 shadow-[0_1px_12px_rgba(43,43,43,0.06)]"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between">
            {/* Logo / Brand */}
            <Link
              href="#home"
              onClick={() => handleNavClick("#home")}
              aria-label="Poonam Choudhary - Home"
              className="flex items-center gap-2.5 py-4 group"
            >
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "rgba(168, 178, 154, 0.2)", border: "1.5px solid #A8B29A" }}
              >
                <BookOpen size={14} className="text-[#6E5A4E]" />
              </span>
              <span className="font-display text-[1.05rem] font-medium text-[#2B2B2B] tracking-tight group-hover:text-[#6E5A4E] transition-colors">
                Poonam Choudhary
              </span>
            </Link>

            {/* Desktop Bookmark Tabs */}
            <nav
              aria-label="Primary navigation"
              className="hidden md:flex items-end gap-1 self-stretch"
            >
              {navItems.map((item) => (
                <button
                  key={item.href}
                  id={`nav-${item.href.slice(1)}`}
                  onClick={() => handleNavClick(item.href)}
                  className={`bookmark-tab ${
                    activeSection === item.href.slice(1) ? "active" : ""
                  }`}
                  aria-current={activeSection === item.href.slice(1) ? "page" : undefined}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Drawer Trigger */}
            <button
              id="mobile-menu-trigger"
              className="md:hidden flex items-center gap-2 text-[#6E5A4E] hover:text-[#2B2B2B] transition-colors py-4"
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isDrawerOpen}
              aria-controls="mobile-drawer"
            >
              <span className="text-xs tracking-widest uppercase font-body font-medium mr-1 hidden sm:block">
                Menu
              </span>
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ─────────────────────── */}
      {/* Overlay */}
      <div
        className={`drawer-overlay ${isDrawerOpen ? "visible" : ""}`}
        onClick={() => setIsDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <nav
        id="mobile-drawer"
        className={`mobile-drawer ${isDrawerOpen ? "open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!isDrawerOpen}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex flex-col">
            <span className="font-display text-xl font-medium text-[#2B2B2B]">
              Poonam Choudhary
            </span>
            <span className="text-xs text-[#9E8A7E] tracking-widest uppercase font-body mt-0.5">
              Author & Speaker
            </span>
          </div>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full text-[#6E5A4E] hover:text-[#2B2B2B] hover:bg-[#E8DCCB] transition-all"
            aria-label="Close navigation menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Botanical divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#C4CCB8] to-transparent mb-8" />

        {/* Navigation Links */}
        <div className="flex flex-col gap-1">
          {navItems.map((item, index) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`flex items-center justify-between w-full px-4 py-3.5 rounded-md text-left transition-all duration-200 group ${
                activeSection === item.href.slice(1)
                  ? "bg-[#E8DCCB] text-[#2B2B2B]"
                  : "text-[#6E5A4E] hover:bg-[#F0E8D6] hover:text-[#2B2B2B]"
              }`}
              style={{ transitionDelay: `${index * 30}ms` }}
            >
              <span className="font-display text-lg font-medium">{item.label}</span>
              {activeSection === item.href.slice(1) && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#A8B29A]" />
              )}
            </button>
          ))}
        </div>

        {/* Drawer Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[#E8DCCB]">
          <p className="text-xs text-[#9E8A7E] font-body text-center leading-relaxed">
            "Parenting is the journey<br />of becoming."
          </p>
          <p className="text-xs text-[#C4CCB8] font-script text-center mt-1">
            — Poonam Choudhary
          </p>
        </div>
      </nav>
    </>
  );
}
