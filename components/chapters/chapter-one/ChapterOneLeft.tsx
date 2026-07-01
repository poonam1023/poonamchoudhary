"use client";

import React from "react";
import { BotanicalIllustration } from "@/components/decorations";


/**
 * ChapterOneLeft — The Storytelling Page
 *
 * Implements the left page of the book spread matching the reference image.
 * Features:
 *   - Brand identity (emblem logo + "Poonam Choudhary")
 *   - Top label "PARENTING ISN'T PERFECT."
 *   - Massive editorial headline "But presence changes everything."
 *   - Supporting paragraph
 *   - Solid olive button CTA & play link CTA
 *   - Left margin botanical branches
 *   - Spine crease scroll hint
 */
export default function ChapterOneLeft() {
  return (
    <div className="absolute inset-0 overflow-hidden select-text" style={{ background: "transparent" }}>
      
      {/* ── BACKGROUND WASHS ── */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          top: "-5%",
          left: "-10%",
          width: "70%",
          height: "60%",
          background: "radial-gradient(circle, rgba(168,178,154,0.08) 0%, transparent 70%)",
          filter: "blur(20px)",
          zIndex: 0,
        }}
      />

      {/* ── Left margin branch framing ── */}
      <BotanicalIllustration
        variant="fern"
        scale={1.2}
        opacity={0.15}
        position={{ top: "18%", left: "-4%" }}
        rotation={-15}
        animation={true}
        className="pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* ── 1. BRAND IDENTITY ── */}
      <div
        className="absolute flex items-center gap-3 select-none pointer-events-none"
        style={{ top: "8%", left: "10%", zIndex: 10 }}
      >
        {/* Circle Emblem with leaf */}
        <div
          className="rounded-full flex items-center justify-center border border-[#A8B29A]/20 bg-[#FAF7F2]"
          style={{ width: "38px", height: "38px", boxShadow: "inset 0 1px 2px rgba(58,44,30,0.03)" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A8B29A" strokeWidth="1.2">
            <path d="M12 2c5.5 0 10 4.5 10 10S17.5 22 12 2 2 6.5 2 12s4.5 10 10 10z" strokeDasharray="1 1" opacity="0.4" />
            <path d="M12 22C12 17 8 13 8 8c0-3 2-5 4-5s4 2 4 5c0 5-4 9-4 14z" />
            <path d="M12 8c-1.5 2-2 4-2 6" strokeDasharray="1 1" />
            <path d="M12 11c1.5 1.5 2 3.5 2 5.5" strokeDasharray="1 1" />
          </svg>
        </div>

        {/* Brand text */}
        <div className="flex flex-col">
          <h1
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "19px",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#3A2E26",
            }}
          >
            Poonam Choudhary
          </h1>
          <span
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "7px",
              fontWeight: 600,
              letterSpacing: "0.14em",
                  color: "#6E5A4E",
              textTransform: "uppercase",
              marginTop: "2px",
            }}
          >
            Author • Speaker • Parenting Guide
          </span>
        </div>
      </div>

      {/* ── 2. TOP SUB-LABEL ── */}
      <div
        className="absolute pointer-events-none select-none"
        style={{ top: "25%", left: "10%", zIndex: 10 }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "8.5px",
            fontWeight: 600,
            letterSpacing: "0.18em",
            color: "#6E5A4E",
            textTransform: "uppercase",
          }}
        >
          Parenting isn't perfect.
        </span>
      </div>

      {/* ── 3. MASSIVE EDITORIAL HEADLINE ── */}
      <div
        className="absolute select-none pointer-events-none flex flex-col"
        style={{ top: "29%", left: "10%", right: "8%", zIndex: 10 }}
      >
        <h2
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(34px, 5.8vh, 52px)",
            fontWeight: 500,
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            color: "#3A2C1E",
          }}
        >
          But presence
          <br />
          changes{" "}
          <span
            style={{
              fontFamily: "Georgia, serif", // Fallback for script/handwriting style
              fontStyle: "italic",
              fontWeight: 400,
              color: "#C4A882",
            }}
          >
            everything.
          </span>
        </h2>

        {/* Small Decorative leaf divider below headline */}
        <div className="flex items-center gap-2 mt-4 select-none pointer-events-none opacity-40">
          <div style={{ width: "30px", height: "0.5px", background: "#6E5A4E" }} />
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6E5A4E" strokeWidth="1.5">
            <circle cx="12" cy="12" r="9" />
          </svg>
          <div style={{ width: "30px", height: "0.5px", background: "#6E5A4E" }} />
        </div>
      </div>

      {/* ── 4. SUPPORTING PARAGRAPH ── */}
      <div
        className="absolute"
        style={{
          top: "60%",
          left: "10%",
          right: "12%",
          zIndex: 10,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(11.5px, 1.9vh, 14.5px)",
            lineHeight: 1.76,
            color: "#4A3728",
            textAlign: "left",
          }}
        >
          I help parents build stronger relationships with their children through understanding,
          empathy and everyday moments that matter.
        </p>
      </div>

      {/* ── 5. CALL TO ACTION BUTTONS ── */}
      <div
        className="absolute flex items-center gap-6"
        style={{
          top: "76%",
          left: "10%",
          zIndex: 20,
        }}
      >
        {/* Solid Olive Button */}
        <button
          className="flex items-center gap-2 px-5 py-2.5 rounded-sm transition-all duration-300 pointer-events-auto"
          style={{
            backgroundColor: "#A8B29A",
            color: "#FAF7F2",
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "8.5px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(58,44,30,0.10)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#98A58B";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#A8B29A";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
          Explore My Book
          <span className="ml-1">→</span>
        </button>

        {/* Outline Play Button */}
        <button
          className="flex items-center gap-2 py-2.5 transition-all duration-300 pointer-events-auto"
          style={{
            backgroundColor: "transparent",
            color: "#4A3728",
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "8.5px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            border: "none",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#3A2C1E";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#4A3728";
          }}
        >
          {/* Play Icon Outline */}
          <div
            className="flex items-center justify-center rounded-full border border-[#4A3728]/25"
            style={{ width: "20px", height: "20px" }}
          >
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "1px" }}>
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
          Watch My Story
        </button>
      </div>

      {/* ── 6. SPINE CREASE SCROLL HINT ── */}
      <div
        className="absolute flex flex-col items-center gap-1.5 select-none pointer-events-none opacity-45"
        style={{ bottom: "6%", right: "8%", zIndex: 10 }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "6.5px",
            fontWeight: 700,
            letterSpacing: "0.22em",
            color: "#6E5A4E",
            writingMode: "vertical-rl",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <svg width="8" height="12" viewBox="0 0 24 24" fill="none" stroke="#6E5A4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </div>

      {/* Page number */}
      <div
        className="absolute select-none pointer-events-none"
        style={{ bottom: "3%", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}
      >
        <span
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "8px",
            letterSpacing: "0.3em",
            color: "#6E5A4E",
            opacity: 0.22,
          }}
        >
          i
        </span>
      </div>
    </div>
  );
}
