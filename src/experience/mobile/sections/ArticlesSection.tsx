"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "@/src/shared/hooks/useInView";
import { articles } from "@/src/shared/data/content";
import { EASE_OUT } from "@/src/shared/utils/animations";
import SectionLabel from "../components/SectionLabel";

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const categoryColors: Record<string, { bg: string; text: string }> = {
  PARENTING: { bg: "rgba(168,178,154,0.14)", text: "#6A7A5A" },
  MINDSET:   { bg: "rgba(196,168,130,0.14)", text: "#7A6240" },
  FAMILY:    { bg: "rgba(201,124,93,0.10)",  text: "#8A4E34" },
  LIFE:      { bg: "rgba(168,178,154,0.10)", text: "#5A6A4A" },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};


export default function ArticlesSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      id="articles"
      aria-labelledby="articles-heading"
      ref={ref}
      style={{
        padding: "64px 24px 72px",
        background: "#FAF8F4",
        position: "relative",
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "32px",
        }}
      >
        <div>
          <motion.div
            custom={0}
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <SectionLabel text="INSIGHTS & ARTICLES" className="mb-4" />
          </motion.div>
          <motion.h2
            id="articles-heading"
            custom={1}
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(26px, 6.5vw, 34px)",
              fontWeight: 600,
              lineHeight: 1.2,
              color: "#3A2C1E",
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            Thoughts on
            <br />
            Parenting &amp; Life
          </motion.h2>
        </div>
        <motion.a
          custom={2}
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          href="#"
          id="articles-view-all"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "10px",
            fontWeight: 600,
            color: "#A8B29A",
            letterSpacing: "0.1em",
            textDecoration: "none",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            paddingBottom: "4px",
          }}
        >
          View All →
        </motion.a>
      </div>

      {/* Article cards — 2-column grid on wider mobile, single col on narrow */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "14px",
        }}
      >
        {articles.map((article, i) => {
          const cat = categoryColors[article.category] || categoryColors.PARENTING;
          return (
            <motion.article
              key={article.id}
              custom={i + 3}
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              aria-labelledby={`article-title-${article.id}`}
              style={{
                background: "linear-gradient(145deg, #FDFAF6 0%, #F7F2EA 100%)",
                borderRadius: "18px",
                border: "1px solid rgba(110,90,78,0.07)",
                boxShadow: "0 2px 10px rgba(58,44,30,0.05), 0 6px 20px rgba(58,44,30,0.04)",
                padding: "18px 16px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {/* Category badge */}
              <span
                style={{
                  display: "inline-flex",
                  alignSelf: "flex-start",
                  padding: "3px 8px",
                  borderRadius: "6px",
                  background: cat.bg,
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "8px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: cat.text,
                  textTransform: "uppercase",
                }}
              >
                {article.category}
              </span>

              {/* Title */}
              <h3
                id={`article-title-${article.id}`}
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  lineHeight: 1.3,
                  color: "#3A2C1E",
                  margin: 0,
                  flex: 1,
                }}
              >
                {article.title}
              </h3>

              {/* Read time + arrow */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "9.5px",
                    color: "#6E5A4E",
                    opacity: 0.7,
                  }}
                >
                  {article.readTime}
                </span>
                <a
                  href="#"
                  aria-label={`Read ${article.title}`}
                  style={{
                    color: "#A8B29A",
                    textDecoration: "none",
                    display: "flex",
                  }}
                >
                  <ArrowIcon />
                </a>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
