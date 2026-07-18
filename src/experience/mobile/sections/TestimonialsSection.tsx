"use client";

import React, { useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { useInView } from "@/src/shared/hooks/useInView";
import { testimonials } from "@/src/shared/data/content";
import { EASE_OUT } from "@/src/shared/utils/animations";
import SectionLabel from "../components/SectionLabel";

const Stars = ({ count = 5 }: { count?: number }) => (
  <div style={{ display: "flex", gap: "3px" }}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#C4A882" stroke="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};


export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView(0.1);

  // Handle scroll to update active dot
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / (el.clientWidth * 0.82 + 16));
    setActiveIdx(Math.max(0, Math.min(idx, testimonials.length - 1)));
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      ref={ref}
      style={{
        padding: "64px 0 72px",
        background: "linear-gradient(180deg, #EDE5D8 0%, #F4EFE6 100%)",
        overflow: "hidden",
      }}
    >
      <div style={{ padding: "0 24px", marginBottom: "36px" }}>
        <motion.div
          custom={0}
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionLabel text="TESTIMONIALS" className="mb-5" />
        </motion.div>

        <motion.h2
          id="testimonials-heading"
          custom={1}
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(28px, 7vw, 36px)",
            fontWeight: 600,
            lineHeight: 1.2,
            color: "#3A2C1E",
            letterSpacing: "-0.01em",
          }}
        >
          Words from families I&rsquo;ve walked alongside.
        </motion.h2>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        role="list"
        aria-label="Testimonials"
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
          gap: "16px",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingBottom: "4px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            role="listitem"
            custom={i + 2}
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{
              flexShrink: 0,
              width: "82vw",
              maxWidth: "320px",
              scrollSnapAlign: "start",
              background: "linear-gradient(145deg, #FDFAF6 0%, #F7F2EA 100%)",
              borderRadius: "24px",
              border: "1px solid rgba(110,90,78,0.07)",
              boxShadow: "0 4px 16px rgba(58,44,30,0.07), 0 12px 32px rgba(58,44,30,0.04)",
              padding: "28px 24px 24px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            {/* Open quote */}
            <span
              aria-hidden="true"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "48px",
                lineHeight: 0.6,
                color: "#C4A882",
                opacity: 0.6,
                display: "block",
              }}
            >
              &ldquo;
            </span>

            {/* Stars */}
            <Stars count={t.stars} />

            {/* Quote text */}
            <p
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontStyle: "italic",
                fontSize: "17px",
                lineHeight: 1.65,
                color: "#4A3728",
                margin: 0,
                flex: 1,
              }}
            >
              {t.quote}
            </p>

            {/* Divider */}
            <div style={{ height: "1px", background: "rgba(110,90,78,0.08)" }} />

            {/* Author */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              {/* Avatar monogram */}
              <div
                aria-hidden="true"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: "rgba(168,178,154,0.18)",
                  border: "1px solid rgba(168,178,154,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#A8B29A",
                  }}
                >
                  {t.author[0]}
                </span>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#3A2C1E",
                    margin: 0,
                  }}
                >
                  {t.author}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "10px",
                    color: "#6E5A4E",
                    margin: "2px 0 0",
                  }}
                >
                  {t.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination dots */}
      <div
        role="tablist"
        aria-label="Testimonial navigation"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginTop: "24px",
          padding: "0 24px",
        }}
      >
        {testimonials.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === activeIdx}
            aria-label={`Testimonial ${i + 1}`}
            onClick={() => {
              setActiveIdx(i);
              const el = scrollRef.current;
              if (el) {
                el.scrollTo({
                  left: i * (el.clientWidth * 0.82 + 16),
                  behavior: "smooth",
                });
              }
            }}
            style={{
              width: i === activeIdx ? "20px" : "6px",
              height: "6px",
              borderRadius: "3px",
              background: i === activeIdx ? "#A8B29A" : "rgba(110,90,78,0.2)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "width 0.3s ease, background 0.2s ease",
            }}
          />
        ))}
      </div>
    </section>
  );
}
