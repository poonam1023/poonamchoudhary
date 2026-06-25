import type { ReactNode } from "react";
import styles from "./BookSystem.module.css";

interface BookPageProps {
  side: "left" | "right";
  chapterLabel?: string;
  chapterTitle?: string;
  pageNumber?: string;
  showHeader?: boolean;
  children: ReactNode;
}

export default function BookPage({
  side,
  chapterLabel,
  chapterTitle,
  pageNumber,
  showHeader = true,
  children,
}: BookPageProps) {
  return (
    <section
      className={`${styles.page} ${side === "left" ? styles.leftPage : styles.rightPage}`}
      aria-label={side === "left" ? "Left page" : "Right page"}
    >
      <span className={`${styles.paperTexture} ${styles.paperTextureSubtle}`} aria-hidden="true" />

      {showHeader && chapterLabel && (
        <header className={styles.pageHeader}>
          <span className={styles.runningKicker}>{chapterLabel}</span>
          {chapterTitle && <h2 className={styles.runningTitle}>{chapterTitle}</h2>}
        </header>
      )}

      <div className={styles.pageBody}>{children}</div>

      {pageNumber && (
        <footer className={styles.pageFooter}>
          <span
            className={`${styles.pageNumber} ${
              side === "left" ? styles.pageNumberLeft : styles.pageNumberRight
            }`}
            aria-hidden="true"
          >
            {pageNumber}
          </span>
        </footer>
      )}
    </section>
  );
}
