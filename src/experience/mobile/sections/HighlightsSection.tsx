"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "@/src/shared/hooks/useInView";
import { fivePillars, philosophyContent } from "@/src/shared/data/content";
import { EASE_OUT } from "@/src/shared/utils/animations";
import SectionLabel from "../components/SectionLabel";
import BotanicalAccent from "../components/BotanicalAccent";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};


export default function HighlightsSection() {
  const [openPillar, setOpenPillar] = useState<string | null>(null);
  const [ref, inView] = useInView(0.1);

  return (
    <section
      id="highlights"
      aria-labelledby="highlights-heading"
      ref={ref}
      style={{
        padding: "64px 24px 72px",
        background: "#FAF8F4",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Botanical bg accent */}
      <BotanicalAccent
        variant="leaf"
        opacity={0.06}
        color="#A8B29A"
        style={{
          position: "absolute",
          top: "5%",
          right: "-4%",
          width: "80px",
          height: "100px",
          pointerEvents: "none",
        }}
      />

      {/* Section label */}
      <motion.div
        custom={0}
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <SectionLabel text="BOOK HIGHLIGHTS" className="mb-5" />
      </motion.div>

      {/* Heading */}
      <motion.h2
        id="highlights-heading"
        custom={1}
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "clamp(26px, 6.5vw, 34px)",
          fontWeight: 600,
          lineHeight: 1.25,
          color: "#3A2C1E",
          marginBottom: "8px",
        }}
      >
        {philosophyContent.headline}
      </motion.h2>

      {/* Pull-quote */}
      <motion.blockquote
        custom={2}
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          margin: "0 0 36px",
          padding: "20px 20px 20px 24px",
          borderLeft: "2px solid rgba(196,168,130,0.5)",
          background: "linear-gradient(135deg, rgba(196,168,130,0.07) 0%, rgba(168,178,154,0.04) 100%)",
          borderRadius: "0 16px 16px 0",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontSize: "16px",
            lineHeight: 1.65,
            color: "#5A4A38",
            margin: 0,
          }}
        >
          &ldquo;{philosophyContent.quote}&rdquo;
        </p>
      </motion.blockquote>

      {/* Five Pillars — accordion */}
      <motion.div
        custom={3}
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{ display: "flex", flexDirection: "column", gap: "0" }}
      >
        {fivePillars.map((pillar, i) => {
          const isOpen = openPillar === pillar.num;
          return (
            <div key={pillar.num}>
              <button
                aria-expanded={isOpen}
                aria-controls={`pillar-body-${pillar.num}`}
                id={`pillar-btn-${pillar.num}`}
                onClick={() => setOpenPillar(isOpen ? null : pillar.num)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "18px 4px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  borderBottom: `1px solid rgba(110,90,78,${isOpen ? "0.12" : "0.07"})`,
                  textAlign: "left",
                }}
              >
                {/* Roman numeral */}
                <span
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#A8B29A",
                    minWidth: "22px",
                  }}
                >
                  {pillar.num}
                </span>
                {/* Title */}
                <span
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "18px",
                    fontWeight: 600,
                    color: isOpen ? "#3A2C1E" : "#4A3728",
                    flex: 1,
                    lineHeight: 1.25,
                  }}
                >
                  {pillar.title}
                </span>
                {/* Chevron */}
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ color: "#A8B29A", flexShrink: 0 }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </motion.span>
              </button>

              {/* Accordion body */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`pillar-body-${pillar.num}`}
                    role="region"
                    aria-labelledby={`pillar-btn-${pillar.num}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "13.5px",
                        lineHeight: 1.65,
                        color: "#6E5A4E",
                        padding: "12px 4px 20px 36px",
                        margin: 0,
                      }}
                    >
                      {pillar.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
