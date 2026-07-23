"use client";

import React from "react";
import Link from "next/link";
import { BotanicalIllustration } from "@/components/decorations";

function StationeryArtwork() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none" style={{ zIndex: 2 }}>
      <svg className="absolute" style={{ top: "17%", right: "13%", width: 86, height: 58, opacity: 0.12, transform: "rotate(4deg)" }} viewBox="0 0 120 80" fill="none">
        <path d="M8 8 C24 5 32 11 45 7 C62 3 72 9 89 6 C101 4 109 8 113 11 L108 72 C90 70 77 75 61 71 C44 67 30 73 12 70 Z" fill="#6E5A4E" opacity="0.08" />
        <path d="M22 24 H93 M21 39 H88 M25 54 H76" stroke="#6E5A4E" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M17 14 C15 28 15 45 18 65" stroke="#6E5A4E" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.7" />
      </svg>
      <svg className="absolute" style={{ top: "48%", right: "10%", width: 26, height: 88, opacity: 0.11, transform: "rotate(-5deg)" }} viewBox="0 0 36 120" fill="none">
        <path d="M7 2 H29 V114 L18 101 L7 114 Z" fill="#6E5A4E" opacity="0.18" />
        <path d="M13 16 H23 M13 27 H23 M13 38 H23" stroke="#6E5A4E" strokeWidth="1" strokeLinecap="round" />
      </svg>
      <svg className="absolute" style={{ bottom: "21%", right: "18%", width: 95, height: 60, opacity: 0.10, transform: "rotate(-2deg)" }} viewBox="0 0 130 82" fill="none">
        <path d="M18 64 C28 47 42 43 54 59 C63 43 78 43 87 60 C96 48 110 49 117 65" stroke="#6E5A4E" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="38" cy="31" r="9" stroke="#6E5A4E" strokeWidth="1.2" />
        <circle cx="70" cy="28" r="10" stroke="#6E5A4E" strokeWidth="1.2" />
        <circle cx="99" cy="36" r="7" stroke="#6E5A4E" strokeWidth="1.2" />
        <path d="M17 19 Q29 5 43 18 M86 18 Q99 4 116 19" stroke="#6E5A4E" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      </svg>
      <svg className="absolute" style={{ top: "58%", left: "10%", width: 152, height: 22, opacity: 0.18 }} viewBox="0 0 180 28" fill="none">
        <path d="M3 17 C36 8 61 23 95 14 C121 7 145 8 177 13" stroke="#C4A882" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M120 18 C132 25 146 24 156 19" stroke="#C4A882" strokeWidth="1" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function LowerLeftVase() {
  return (
    <div className="absolute pointer-events-none select-none" style={{ left: "1%", bottom: "-6%", width: 70, height: 90, zIndex: 3, opacity: 0.62, filter: "drop-shadow(7px 16px 18px rgba(58,44,30,0.10))" }}>
      <svg viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M58 138 C35 136 29 119 31 91 C32 73 45 67 45 52 L45 38 H73 L73 52 C73 67 87 73 88 91 C91 119 81 136 58 138 Z" fill="#F4EFE6" stroke="#9B856B" strokeWidth="0.8" />
        <path d="M42 88 C39 105 43 121 53 130" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.22" />
        <path d="M46 38 H72" stroke="#7B6654" strokeWidth="1" strokeLinecap="round" />
        <g stroke="#7D866F" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity="0.72">
          <path d="M58 38 C51 25 41 20 29 16" />
          <path d="M59 38 C67 24 79 18 91 13" />
          <path d="M57 38 C56 25 58 18 61 10" />
          <path d="M43 25 C35 24 29 27 24 31" />
          <path d="M73 24 C81 23 87 26 93 31" />
          <path d="M59 18 C53 16 49 15 44 16" />
        </g>
      </svg>
    </div>
  );
}


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
          top: "3%",
          left: "-8%",
          width: "58%",
          height: "42%",
          background: "linear-gradient(124deg, rgba(226,216,198,0.16), rgba(168,178,154,0.06) 54%, transparent 78%)",
          filter: "blur(18px)",
          zIndex: 0,
        }}
      />

      {/* ── Left margin branch framing ── */}
      <BotanicalIllustration
        variant="branch"
        scale={0.72}
        opacity={0.075}
        position={{ top: "18%", left: "-3%" }}
        rotation={-9}
        animation={false}
        className="pointer-events-none"
        style={{ zIndex: 1 }}
      />

      <StationeryArtwork />
      <LowerLeftVase />

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
        style={{ top: "22%", left: "10%", zIndex: 10 }}
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
          Parenting isn&apos;t perfect.
        </span>
      </div>

      {/* ── 3. MASSIVE EDITORIAL HEADLINE ── */}
      <div
        className="absolute select-none pointer-events-none flex flex-col"
        style={{ top: "27%", left: "10%", right: "8%", zIndex: 10 }}
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
        <div className="flex items-center gap-2 mt-5 select-none pointer-events-none opacity-35">
          <div style={{ width: "34px", height: "0.5px", background: "#6E5A4E" }} />
          <svg width="13" height="8" viewBox="0 0 32 18" fill="none" stroke="#6E5A4E" strokeWidth="1.2">
            <path d="M2 9 C9 1 15 1 22 9 C25 12 28 13 31 10" strokeLinecap="round" />
          </svg>
          <div style={{ width: "34px", height: "0.5px", background: "#6E5A4E" }} />
        </div>
      </div>

      {/* ── 4. SUPPORTING PARAGRAPH ── */}
      <div
        className="absolute"
        style={{
          top: "58%",
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
          top: "75%",
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

        {/* See My Blog CTA */}
        <Link
          href="/blog"
          aria-label="See My Blog"
          className="group flex items-center gap-2 py-2.5 transition-all duration-300 pointer-events-auto"
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
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#3A2C1E";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#4A3728";
          }}
        >
          {/* Feather Pen Icon Outline */}
          <div
            className="flex items-center justify-center rounded-full border border-[#4A3728]/25 transition-all duration-300 group-hover:border-[#4A3728]/50 group-hover:scale-105"
            style={{ width: "20px", height: "20px" }}
          >
            <svg
              width="9"
              height="9"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-[0.5px]"
            >
              <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
              <line x1="16" y1="8" x2="2" y2="22" />
              <line x1="17.5" y1="15" x2="9" y2="15" />
            </svg>
          </div>
          <span className="transition-transform duration-300 group-hover:translate-x-[2px]">
            See My Blog
          </span>
        </Link>
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
