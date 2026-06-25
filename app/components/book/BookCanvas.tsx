"use client";

import type { ReactNode } from "react";
import { useEffect, useState, useRef } from "react";
import styles from "./BookSystem.module.css";

const navItems = [
  { label: "Home", num: "00", href: "home" },
  { label: "Author", num: "01", href: "author" },
  { label: "Philosophy", num: "02", href: "philosophy" },
  { label: "Bookshelf", num: "03", href: "books" },
  { label: "Letters", num: "04", href: "readers" },
  { label: "Journal", num: "05", href: "journal" },
  { label: "Connect", num: "06", href: "letter" },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function BookNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const current = navItems.find((item) => {
        const el = document.getElementById(item.href);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5;
      });
      if (current) setActiveSection(current.href);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={styles.bookNav} aria-label="Chapter navigation">
      {navItems.map((item) => (
        <button
          key={item.href}
          type="button"
          className={`${styles.navItem} ${activeSection === item.href ? styles.navItemActive : ""}`}
          onClick={() => scrollToSection(item.href)}
          aria-current={activeSection === item.href ? "page" : undefined}
        >
          <span className={styles.navLabel}>{item.label}</span>
          <span className={styles.navNum}>{item.num}</span>
        </button>
      ))}
    </nav>
  );
}

export default function BookCanvas({ children }: { children: ReactNode }) {
  return (
    <div className={styles.canvas}>
      <div className={styles.canvasBackground} aria-hidden="true" />
      <BookNav />
      <div className={styles.canvasContent}>{children}</div>
    </div>
  );
}

export { scrollToSection, navItems };
