"use client";

import { scrollToSection } from "./book";
import styles from "./book/BookSystem.module.css";

export default function Footer() {
  return (
    <footer className={styles.backCover} role="contentinfo">
      <div className={styles.backCoverInner}>
        <h2 className={styles.backCoverTitle}>Poonam Choudhary</h2>
        <p className={styles.backCoverTagline}>
          Parenting is not about raising perfect children. It is about raising
          children who feel perfectly loved — one conversation, one chapter, one
          quiet moment at a time.
        </p>

        <nav
          aria-label="Footer chapter links"
          style={{
            marginTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem 1.5rem",
          }}
        >
          {[
            { label: "Cover", id: "home" },
            { label: "Author", id: "author" },
            { label: "Books", id: "books" },
            { label: "Journal", id: "journal" },
            { label: "Letter", id: "letter" },
          ].map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              style={{
                border: 0,
                background: "transparent",
                color: "rgba(255,250,240,0.65)",
                fontSize: "0.68rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className={styles.backCoverMeta}>
          <span>© {new Date().getFullYear()} Poonam Choudhary</span>
          <span>All rights reserved</span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
}
