"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "@/src/shared/hooks/useInView";
import { missionContent, missionPillars } from "@/src/shared/data/content";
import { EASE_OUT } from "@/src/shared/utils/animations";
import SectionLabel from "../components/SectionLabel";
import BotanicalAccent from "../components/BotanicalAccent";

const icons: Record<string, React.ReactNode> = {
  heart: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  ),
  sprout: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 20h10M12 20v-8M5 8c0-4 4-6 7-6s7 2 7 6c-3 0-7-1-7-4-0 3-4 4-7 4z" />
    </svg>
  ),
  leaf: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  ),
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

export default function MissionSection() {
  const [ref, inView] = useInView(0.15);

  return (
    <section
      id="mission"
      aria-labelledby="mission-heading"
      ref={ref}
      style={{
        padding: "72px 24px 60px",
        background: "linear-gradient(180deg, #F4EFE6 0%, #FAF8F4 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Botanical background accent */}
      <BotanicalAccent
        variant="branch"
        opacity={0.07}
        color="#A8B29A"
        style={{
          position: "absolute",
          top: "8%",
          right: "-5%",
          width: "110px",
          height: "110px",
          pointerEvents: "none",
        }}
      />
      <BotanicalAccent
        variant="sprig"
        opacity={0.06}
        color="#C4A882"
        style={{
          position: "absolute",
          bottom: "5%",
          left: "-5%",
          width: "80px",
          height: "80px",
          pointerEvents: "none",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Section label */}
        <motion.div variants={itemVariants}>
          <SectionLabel text={missionContent.label} className="mb-5" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          id="mission-heading"
          variants={itemVariants}
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(28px, 7vw, 36px)",
            fontWeight: 600,
            lineHeight: 1.22,
            color: "#3A2C1E",
            marginBottom: "40px",
            letterSpacing: "-0.01em",
          }}
        >
          {missionContent.headline}{" "}
          <em style={{ fontStyle: "italic", color: "#C4A882" }}>confident, kind</em>{" "}
          and emotionally strong children.
        </motion.h2>

        {/* Pillar cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginBottom: "36px",
          }}
        >
          {missionPillars.map((pillar) => (
            <motion.div
              key={pillar.num}
              variants={itemVariants}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                background: "rgba(250,248,244,0.9)",
                borderRadius: "16px",
                border: "1px solid rgba(110,90,78,0.07)",
                boxShadow: "0 2px 10px rgba(58,44,30,0.05)",
                padding: "20px",
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: "rgba(168,178,154,0.14)",
                  border: "1px solid rgba(168,178,154,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#A8B29A",
                  flexShrink: 0,
                }}
              >
                {icons[pillar.icon] || icons.leaf}
              </div>
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#3A2C1E",
                    marginBottom: "4px",
                    lineHeight: 1.2,
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "12.5px",
                    lineHeight: 1.6,
                    color: "#6E5A4E",
                    margin: 0,
                  }}
                >
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA link */}
        <motion.div variants={itemVariants}>
          <a
            href="#about"
            id="mission-more-about"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              color: "#A8B29A",
              letterSpacing: "0.06em",
              textDecoration: "none",
              textTransform: "uppercase",
              padding: "14px 24px",
              borderRadius: "12px",
              background: "rgba(168,178,154,0.1)",
              border: "1px solid rgba(168,178,154,0.22)",
            }}
          >
            {missionContent.cta}
          </a>
        </motion.div>
      </motion.div>

      {/* Botanical divider */}
      <BotanicalAccent
        variant="divider"
        opacity={0.12}
        color="#A8B29A"
        style={{
          display: "block",
          width: "120px",
          height: "20px",
          margin: "40px auto 0",
        }}
      />
    </section>
  );
}
