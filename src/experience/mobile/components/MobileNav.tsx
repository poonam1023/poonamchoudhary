"use client";

import React from "react";
import { motion } from "framer-motion";

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface MobileNavProps {
  activeSection: string;
}

const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const PersonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);
const BookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);
const ArticlesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);
const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const NAV_ITEMS: NavItem[] = [
  { id: "home",     label: "Home",     href: "#home",     icon: <HomeIcon /> },
  { id: "about",    label: "About Me", href: "#about",    icon: <PersonIcon /> },
  { id: "book",     label: "My Book",  href: "#book",     icon: <BookIcon /> },
  { id: "articles", label: "Articles", href: "#articles", icon: <ArticlesIcon /> },
  { id: "contact",  label: "Contact",  href: "#contact",  icon: <MailIcon /> },
];

/**
 * Fixed bottom navigation tab bar for the mobile reading experience.
 * 48px minimum touch targets, smooth active indicator, elegant label.
 */
export default function MobileNav({ activeSection }: MobileNavProps) {
  return (
    <nav
      id="mobile-nav"
      aria-label="Main navigation"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(250, 248, 244, 0.94)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderTop: "1px solid rgba(110,90,78,0.08)",
        boxShadow: "0 -4px 24px rgba(58,44,30,0.06)",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          margin: 0,
          padding: "0 4px",
          listStyle: "none",
        }}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <li key={item.id} style={{ flex: 1 }}>
              <a
                href={item.href}
                id={`nav-${item.id}`}
                aria-current={isActive ? "page" : undefined}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "3px",
                  minHeight: "56px",
                  padding: "8px 4px",
                  textDecoration: "none",
                  color: isActive ? "#A8B29A" : "rgba(110,90,78,0.45)",
                  transition: "color 0.2s ease",
                  position: "relative",
                }}
              >
                {/* Active indicator dot */}
                {isActive && (
                  <motion.div
                    layoutId="nav-active-dot"
                    style={{
                      position: "absolute",
                      top: "6px",
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "#A8B29A",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {/* Icon */}
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </span>
                {/* Label */}
                <span
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "9px",
                    fontWeight: isActive ? 600 : 400,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    lineHeight: 1,
                  }}
                >
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
