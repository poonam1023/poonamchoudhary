"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import styles from "./BookSystem.module.css";

const navItems = [
  { label: "Cover", href: "home" },
  { label: "Author", href: "author" },
  { label: "Philosophy", href: "philosophy" },
  { label: "Books", href: "books" },
  { label: "Readers", href: "readers" },
  { label: "Journal", href: "journal" },
  { label: "Letter", href: "letter" },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function BookNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 96);

      const currentSection = navItems.find((item) => {
        const section = document.getElementById(item.href);
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });

      if (currentSection) setActiveSection(currentSection.href);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={styles.bookNav}
      aria-label="Chapter navigation"
      initial={false}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -10 }}
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
      transition={{ duration: 0.36, ease: "easeOut" }}
    >
      <span className={styles.navMark} aria-hidden="true" />
      {navItems.map((item) => (
        <button
          key={item.href}
          type="button"
          className={`${styles.navLink} ${
            activeSection === item.href ? styles.navLinkActive : ""
          }`}
          onClick={() => scrollToSection(item.href)}
          aria-current={activeSection === item.href ? "page" : undefined}
        >
          {item.label}
        </button>
      ))}
    </motion.nav>
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
