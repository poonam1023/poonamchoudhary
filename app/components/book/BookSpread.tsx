"use client";

import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import styles from "./BookSystem.module.css";

interface BookSpreadProps {
  id: string;
  variant?: "cover" | "inner" | "final";
  left: ReactNode;
  right: ReactNode;
  transitionNote?: string;
  ariaLabel?: string;
}

export default function BookSpread({
  id,
  variant = "inner",
  left,
  right,
  transitionNote,
  ariaLabel,
}: BookSpreadProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bookY = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [18, 0, 0, -12]);
  const bookRotate = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0, -0.25]);
  const bookShadow = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "0 2.8rem 5rem rgba(55, 32, 16, 0.22)",
      "0 3.2rem 5.8rem rgba(55, 32, 16, 0.27)",
      "0 2.4rem 4.5rem rgba(55, 32, 16, 0.2)",
    ]
  );

  const isCover = variant === "cover";

  return (
    <section
      id={id}
      ref={ref}
      className={styles.spread}
      aria-label={ariaLabel ?? `Book spread — ${id}`}
    >
      <div className={styles.spreadInner}>
        <motion.article
          className={`${styles.book} ${isCover ? styles.bookCover : ""}`}
          style={{
            y: isCover ? 0 : bookY,
            rotate: isCover ? 0 : bookRotate,
            boxShadow: isCover ? undefined : bookShadow,
          }}
          initial={isCover ? { opacity: 0, y: 24, scale: 0.985 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className={styles.hardcover} aria-hidden="true" />
          <div className={styles.paperStackLeft} aria-hidden="true" />
          <div className={styles.paperStackRight} aria-hidden="true" />
          <div className={styles.bookFold} aria-hidden="true" />
          {left}
          {right}
        </motion.article>

        {transitionNote && (
          <p className={styles.transitionNote} aria-hidden="true">
            {transitionNote}
          </p>
        )}
      </div>
    </section>
  );
}
