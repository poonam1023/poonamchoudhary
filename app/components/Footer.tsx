"use client";

import { BookOpen, Instagram, Twitter, Youtube, Facebook } from "lucide-react";
import BotanicalCorner from "./BotanicalCorner";

const footerLinks = {
  Explore: [
    { label: "About Poonam", href: "#about" },
    { label: "Books", href: "#books" },
    { label: "Speaking", href: "#speaking" },
    { label: "Journal", href: "#journal" },
    { label: "Connect", href: "#connect" },
  ],
  Resources: [
    { label: "Free Parenting Guide", href: "#" },
    { label: "Reading Group Kit", href: "#" },
    { label: "Workshop Resources", href: "#" },
    { label: "Press Kit", href: "#" },
  ],
};

const socialLinks = [
  { id: "footer-instagram", icon: Instagram, label: "Instagram", href: "#" },
  { id: "footer-twitter", icon: Twitter, label: "Twitter", href: "#" },
  { id: "footer-youtube", icon: Youtube, label: "YouTube", href: "#" },
  { id: "footer-facebook", icon: Facebook, label: "Facebook", href: "#" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const section = href.slice(1);
    if (!section) return;
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      role="contentinfo"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #E8DCCB 0%, #DDD0BC 100%)",
        borderTop: "1px solid rgba(196,204,184,0.5)",
      }}
    >
      <BotanicalCorner position="tl" opacity={0.08} size={200} />
      <BotanicalCorner position="tr" opacity={0.07} size={180} />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <span
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "rgba(168,178,154,0.25)", border: "1.5px solid #A8B29A" }}
              >
                <BookOpen size={15} className="text-[#6E5A4E]" />
              </span>
              <span className="font-display text-[1.15rem] font-medium text-[#2B2B2B]">
                Poonam Choudhary
              </span>
            </div>

            <p className="font-body text-[0.9rem] text-[#6E5A4E] leading-[1.85] max-w-[340px]">
              A parenting author and speaker dedicated to helping families
              build deeper connections — one conversation, one chapter, one
              quiet moment at a time.
            </p>

            {/* Tagline quote */}
            <blockquote className="mt-2">
              <p className="font-display text-[1.05rem] italic font-light text-[#9E8A7E] leading-[1.6]">
                "Parenting is not about raising perfect children.
                It's about raising children who feel perfectly loved."
              </p>
              <footer className="font-script text-[#A8B29A] text-[0.95rem] mt-2">
                — Poonam Choudhary
              </footer>
            </blockquote>

            {/* Social */}
            <div className="flex gap-3 mt-2">
              {socialLinks.map(({ id, icon: Icon, label, href }) => (
                <a
                  key={id}
                  id={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} — Poonam Choudhary`}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "rgba(168,178,154,0.15)",
                    border: "1px solid rgba(168,178,154,0.3)",
                  }}
                >
                  <Icon size={15} className="text-[#6E5A4E]" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="font-body text-[0.72rem] font-semibold tracking-[0.16em] uppercase text-[#A8B29A] mb-5">
                {group}
              </h3>
              <ul className="flex flex-col gap-2.5" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      id={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={() => handleNavClick(link.href)}
                      className="font-body text-[0.88rem] text-[#6E5A4E] hover:text-[#2B2B2B] transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Botanical divider */}
        <div className="divider-botanical mb-10">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M10 2C10 2 6 7 10 10C14 7 10 2 10 2Z" fill="#A8B29A" opacity="0.6" />
            <path d="M10 10C10 10 4 12 5 17C8 15 10 10 10 10Z" fill="#A8B29A" opacity="0.5" />
            <path d="M10 10C10 10 16 12 15 17C12 15 10 10 10 10Z" fill="#A8B29A" opacity="0.5" />
          </svg>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="font-body text-[0.78rem] text-[#9E8A7E]">
            © {new Date().getFullYear()} Poonam Choudhary. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Sitemap"].map((item) => (
              <button
                key={item}
                id={`footer-legal-${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="font-body text-[0.78rem] text-[#9E8A7E] hover:text-[#6E5A4E] transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
