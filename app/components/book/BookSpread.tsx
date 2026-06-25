"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { useRef, useEffect, useState } from "react";
import styles from "./BookSystem.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

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
  const bookRef = useRef<HTMLDivElement>(null);
  const isCover = variant === "cover";

  // GSAP ScrollTrigger for the reveal — replaces Framer Motion useScroll
  useGSAP(
    () => {
      if (!ref.current) return;

      // Clip-path reveal on the whole spread
      gsap.fromTo(
        bookRef.current,
        { opacity: 0, y: 28, scale: 0.975 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Stagger left and right page content in
      gsap.fromTo(
        ref.current.querySelectorAll("[data-reveal]"),
        { opacity: 0, y: 20, clipPath: "inset(0 0 100% 0)" },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0 0 0% 0)",
          stagger: 0.06,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: ref }
  );

  return (
    <section
      id={id}
      ref={ref}
      className={styles.spread}
      aria-label={ariaLabel ?? `Book spread — ${id}`}
    >
      <div className={styles.spreadInner}>
        <div
          ref={bookRef}
          className={`${styles.book} ${isCover ? styles.bookCover : ""}`}
          style={{ perspective: 1500, willChange: "transform, opacity" }}
        >
          <div className={styles.hardcover} aria-hidden="true" />
          <div className={styles.paperStackLeft} aria-hidden="true" />
          <div className={styles.paperStackRight} aria-hidden="true" />
          <div className={styles.bookFold} aria-hidden="true" />

          {/* Left page */}
          <div style={{ position: "relative", height: "100%", width: "100%", display: "flex", flexDirection: "column" }}>
            {left}
          </div>

          {/* Right page */}
          <div style={{ position: "relative", height: "100%", width: "100%", display: "flex", flexDirection: "column" }}>
            {right}
          </div>
        </div>

        {transitionNote && (
          <p className={styles.transitionNote} aria-hidden="true">
            {transitionNote}
          </p>
        )}
      </div>
    </section>
  );
}
