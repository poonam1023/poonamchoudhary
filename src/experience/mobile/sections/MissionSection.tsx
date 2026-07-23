"use client";

import React from "react";
import { motion } from "framer-motion";
import ChapterHeader from "../components/ChapterHeader";
import { missionContent, missionPillars } from "@/src/shared/data/content";

/** Icon component with distinct colored circular background */
function PillarIcon({ icon, accentColor }: { icon: string; accentColor: string }) {
  return (
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center shadow-sm shrink-0"
      style={{ backgroundColor: accentColor, color: "#FAF8F4" }}
    >
      {icon === "heart" && (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )}
      {icon === "sprout" && (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V6m0 0l-3 3m3-3l3 3M5 12c3 0 5-2 5-5m9 5c-3 0-5-2-5-5" />
        </svg>
      )}
      {icon === "leaf" && (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )}
    </div>
  );
}

const ACCENT_COLORS = [
  "#A8B29A", // Sage
  "#C97C5D", // Terracotta
  "#C4A882", // Gold
];

const CARD_OFFSETS = [
  { x: 10, rotate: 1.2 },   // Card 1 offset right
  { x: -10, rotate: -1.5 }, // Card 2 offset left
  { x: 0, rotate: 0.6 },    // Card 3 centered
];

/**
 * MissionSection — Chapter 02: Mission
 *
 * Architecture:
 *  - Chapter header (CHAPTER 02 — MISSION)
 *  - Large mission statement
 *  - Stacked paper cards (desk layout, staggered rotation/offset)
 *  - Distinct colored circular background icons (Sage, Terracotta, Gold)
 *  - Soft sequential upward entrance
 */
export default function MissionSection() {
  return (
    <section
      id="mission"
      aria-labelledby="mission-heading"
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden px-5 py-16 select-none"
      style={{
        background: "#F4EFE6", // Cream background for Chapter 02
      }}
    >
      {/* Background paper texture accents */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-0 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168,178,154,0.14) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 w-full mb-6">
        <ChapterHeader
          chapterNum={missionContent.chapterNum}
          title={missionContent.chapterLabel}
        />
      </div>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className="relative z-10 max-w-sm mx-auto text-center mb-10"
      >
        <h3
          id="mission-heading"
          className="text-2xl xs:text-3xl font-serif text-[#3A2C1E] leading-snug tracking-tight mb-4"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          {missionContent.headline}{" "}
          <span className="italic text-[#C97C5D] font-normal">
            {missionContent.headlineHighlight}
          </span>{" "}
          {missionContent.headlineContinue}
        </h3>
        <p className="text-xs xs:text-sm font-sans text-[#6E5A4E] leading-relaxed">
          {missionContent.statement}
        </p>
      </motion.div>

      {/* Stacked Paper Cards (Desk arrangement) */}
      <div className="relative z-10 max-w-sm mx-auto w-full flex flex-col gap-5 my-2">
        {missionPillars.map((pillar, idx) => {
          const accent = ACCENT_COLORS[idx % ACCENT_COLORS.length];
          const styleOffset = CARD_OFFSETS[idx % CARD_OFFSETS.length];

          return (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: styleOffset.rotate }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                delay: idx * 0.15,
                duration: 0.7,
                ease: [0.25, 1, 0.5, 1],
              }}
              style={{
                translateX: `${styleOffset.x}px`,
                background: "linear-gradient(135deg, #FAF8F4 0%, #FAF7F2 100%)",
                boxShadow:
                  "0 12px 30px -6px rgba(58,44,30,0.09), 0 2px 6px rgba(58,44,30,0.04)",
              }}
              className="relative p-5 rounded-2xl border border-[#6E5A4E]/10 transition-transform duration-300 active:scale-[0.99]"
            >
              {/* Paper Corner Fold Line Detail */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-6 h-6 border-b border-l border-[#6E5A4E]/12 bg-[#EDE5D8]/40 rounded-bl-lg pointer-events-none"
              />

              <div className="flex items-start gap-4">
                <PillarIcon icon={pillar.icon} accentColor={accent} />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono tracking-widest text-[#A8B29A] font-semibold">
                      PILLAR {pillar.num}
                    </span>
                  </div>
                  <h4
                    className="text-lg font-serif text-[#3A2C1E] font-medium leading-snug mb-1.5"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {pillar.title}
                  </h4>
                  <p className="text-xs font-sans text-[#6E5A4E] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Section Footer */}
      <div className="relative z-10 flex items-center justify-between text-[9px] uppercase tracking-widest text-[#6E5A4E]/40 font-sans pt-10 border-t border-[#6E5A4E]/10 mt-8">
        <span>OUR CORE PURPOSE</span>
        <span>CHAPTER 02</span>
      </div>
    </section>
  );
}
