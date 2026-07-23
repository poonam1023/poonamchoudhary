"use client";

import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { EditorialLabel } from "@/components/decorations";

/* ═══════════════════════════════════════════════════
   SUB-COMPONENTS FOR CALM EDITORIAL DESK OBJECTS
   (Reduced by >50%, strictly limited to requested objects)
═══════════════════════════════════════════════════ */

/** 1. Embossed Stamp: New Delhi, India */
function EmbossedLocationStamp({ style }: { style?: React.CSSProperties }) {
  return (
    <div
      className="pointer-events-none select-none absolute flex flex-col items-center justify-center text-center"
      style={{
        border: "1.2px dashed rgba(110, 70, 50, 0.32)",
        borderRadius: "50%",
        width: 78,
        height: 78,
        padding: 4,
        transform: "rotate(-8deg)",
        color: "rgba(110, 70, 50, 0.42)",
        fontFamily: "var(--font-cormorant), serif",
        boxShadow: "inset 0 0 0 1.5px rgba(110, 70, 50, 0.06)",
        ...style,
      }}
    >
      <div style={{ fontSize: "6.5px", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700 }}>
        ★ POSTAL SERVICE ★
      </div>
      <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", margin: "1px 0" }}>
        NEW DELHI
      </div>
      <div style={{ fontSize: "7px", letterSpacing: "0.15em", textTransform: "uppercase" }}>
        INDIA · 110001
      </div>
    </div>
  );
}

/** 2. Tiny Handwritten Note: "I usually reply within 2–3 days." */
function ResponseTimeNote({ style }: { style?: React.CSSProperties }) {
  return (
    <motion.div
      className="absolute z-20 p-2.5 select-none pointer-events-auto"
      style={{
        background: "linear-gradient(145deg, #FBF4DC 0%, #F5E6B8 100%)",
        border: "1px solid rgba(180, 150, 90, 0.32)",
        boxShadow: "2px 4px 12px rgba(50, 35, 20, 0.08)",
        width: 125,
        transform: "rotate(3deg)",
        ...style,
      }}
      whileHover={{ rotate: 1, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 240, damping: 16 }}
    >
      {/* Translucent tape at top */}
      <div
        className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-3.5"
        style={{
          background: "rgba(240, 230, 200, 0.55)",
          border: "1px solid rgba(200, 180, 140, 0.25)",
          backdropFilter: "blur(1px)",
        }}
      />
      <p
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontStyle: "italic",
          fontSize: "11px",
          color: "#4A3728",
          lineHeight: 1.35,
          margin: 0,
        }}
      >
        "I usually reply within 2–3 days."
      </p>
    </motion.div>
  );
}

/** 3. Envelope labeled "From a Reader" */
function ReaderEnvelope({ style }: { style?: React.CSSProperties }) {
  return (
    <motion.div
      className="absolute z-15 select-none pointer-events-auto"
      style={{
        width: 105,
        height: 70,
        background: "linear-gradient(160deg, #EFE8DA 0%, #E2D7C3 100%)",
        border: "1px solid rgba(130, 100, 70, 0.25)",
        boxShadow: "2px 6px 14px rgba(40, 30, 20, 0.10)",
        borderRadius: 2,
        ...style,
      }}
      whileHover={{ y: -3, rotate: 1 }}
    >
      {/* Flap lines */}
      <svg viewBox="0 0 105 70" fill="none" className="absolute inset-0 w-full h-full pointer-events-none">
        <path d="M0 0 L52.5 35 L105 0" stroke="rgba(110, 80, 50, 0.22)" strokeWidth="0.8" />
      </svg>

      {/* Mini Wax Seal on flap */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-4.5 h-4.5 rounded-full bg-[#9E4632] flex items-center justify-center shadow-sm">
        <span style={{ color: "#F7F1E8", fontSize: "6.5px", fontWeight: 700, fontFamily: "serif" }}>♥</span>
      </div>

      {/* Label */}
      <div className="absolute bottom-2 left-2 right-2 text-center">
        <span
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontSize: "9px",
            color: "#5A4A38",
            letterSpacing: "0.04em",
          }}
        >
          From a Reader
        </span>
      </div>
    </motion.div>
  );
}

/** 4. Fountain Pen resting beside journal */
function FountainPenOnDesk({ style }: { style?: React.CSSProperties }) {
  return (
    <motion.div
      className="absolute z-30 pointer-events-auto cursor-pointer"
      style={{ width: 130, height: 24, ...style }}
      whileHover={{ rotate: -2, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 220, damping: 15 }}
    >
      <svg viewBox="0 0 130 24" fill="none" className="w-full h-full drop-shadow-md">
        <rect x="12" y="5" width="90" height="13" rx="6.5" fill="#1C1510" />
        <rect x="20" y="5" width="5" height="13" fill="#C4A882" />
        <rect x="80" y="5" width="4" height="13" fill="#C4A882" />
        <path d="M102 11.5 L124 6 L128 11.5 L124 17 Z" fill="#D4B68D" />
        <line x1="102" y1="11.5" x2="126" y2="11.5" stroke="#8C6E54" strokeWidth="0.8" />
        <rect x="4" y="6" width="9" height="11" rx="3.5" fill="#120D09" />
        <path d="M6 4 L6 19" stroke="#C4A882" strokeWidth="1.2" strokeLinecap="round" />
        <rect x="28" y="7" width="40" height="2.5" rx="1.2" fill="#FFFFFF" opacity="0.2" />
      </svg>
    </motion.div>
  );
}

/** 5. Silk Bookmark Ribbon */
function SilkBookmarkRibbon({ style }: { style?: React.CSSProperties }) {
  return (
    <motion.div
      className="absolute z-25 pointer-events-none select-none"
      style={{ width: 12, height: 100, ...style }}
      animate={{ rotate: [-1, 1, -1] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 12 100" fill="none" className="w-full h-full drop-shadow-sm">
        <path d="M2 0 L10 0 L10 88 L6 80 L2 88 Z" fill="#9E4632" />
        <path d="M4 0 L8 0 L8 86 L6 80 L4 86 Z" fill="#B5543D" opacity="0.7" />
      </svg>
    </motion.div>
  );
}

/** 6. Wax Seal Monogram */
function MonogramWaxSeal({ style }: { style?: React.CSSProperties }) {
  return (
    <motion.div
      className="absolute z-25 select-none pointer-events-auto cursor-pointer"
      style={{ width: 38, height: 38, ...style }}
      whileHover={{ scale: 1.08, rotate: 6 }}
    >
      <div
        className="w-full h-full rounded-full flex items-center justify-center relative shadow-sm"
        style={{
          background: "radial-gradient(circle at 35% 35%, #B5543D 0%, #8C3422 70%, #682012 100%)",
          border: "1px solid rgba(255, 200, 180, 0.2)",
        }}
      >
        <div className="w-7 h-7 rounded-full border border-dashed border-[#F7F1E8]/30 flex items-center justify-center">
          <span
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "12px",
              fontWeight: 700,
              color: "#FAF7F2",
              textShadow: "0 1px 2px rgba(0,0,0,0.4)",
            }}
          >
            P
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN CONNECT LEFT COMPONENT
   (Dramatic simplification — uncluttered, calm, spacious)
═══════════════════════════════════════════════════ */
export default function ConnectLeft() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMousePos({ x, y });
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden select-none"
      style={{
        background: "linear-gradient(155deg, #FFFDF8 0%, #FAF6EE 45%, #F4ECE0 100%)",
      }}
      onMouseMove={handleMouseMove}
    >
      {/* ── Background Subtle Ruled Lines (Calm Negative Space) ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 34px, rgba(110, 90, 78, 0.02) 34px, rgba(110, 90, 78, 0.02) 35px)",
          zIndex: 1,
        }}
      />

      {/* ── Discreet Chapter Label ── */}
      <div className="absolute top-6 left-8 z-20 opacity-80">
        <EditorialLabel text="CHAPTER V / INVITATION" />
      </div>

      {/* ── 1. Embossed Location Stamp: New Delhi, India ── */}
      <EmbossedLocationStamp style={{ top: "8%", right: "8%" }} />

      {/* ── 2. Tiny Handwritten Response Time Note ── */}
      <ResponseTimeNote style={{ bottom: "8%", left: "6%" }} />

      {/* ── 3. Folded Envelope Labeled "From a Reader" ── */}
      <ReaderEnvelope style={{ bottom: "7%", right: "8%", transform: "rotate(-5deg)" }} />

      {/* ── 4. Wax Seal Monogram ── */}
      <MonogramWaxSeal style={{ top: "16%", left: "7%" }} />

      {/* ═══════════════════════════════════════════════════
          HERO CENTERPIECE: OPEN HANDWRITTEN JOURNAL
      ═══════════════════════════════════════════════════ */}
      <motion.div
        className="absolute z-10 pointer-events-auto"
        style={{
          top: "15%",
          left: "12%",
          right: "12%",
          bottom: "16%",
        }}
        animate={{
          x: mousePos.x * -4,
          y: mousePos.y * -4,
          rotate: -1,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        {/* Journal Card */}
        <motion.div
          className="relative w-full h-full rounded-sm p-6 sm:p-8 flex flex-col justify-between"
          style={{
            background: "linear-gradient(170deg, #FEFCF6 0%, #FAF5EA 50%, #F5EDE0 100%)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.8), inset -1px 0 0 rgba(110,90,70,0.08), 4px 12px 32px rgba(45, 32, 20, 0.12)",
            border: "1px solid rgba(140, 110, 80, 0.20)",
          }}
          whileHover={{ y: -3, boxShadow: "4px 16px 36px rgba(45, 32, 20, 0.15)" }}
          transition={{ duration: 0.4 }}
        >
          {/* Deckled Edge Top Effect */}
          <div
            className="absolute -top-1 left-0 right-0 h-2 pointer-events-none opacity-50"
            style={{
              background: "linear-gradient(90deg, #FAF5EA 0%, #F5EDE0 50%, #FEFCF6 100%)",
              clipPath:
                "polygon(0% 100%, 5% 20%, 10% 80%, 15% 10%, 20% 90%, 25% 30%, 30% 70%, 35% 0%, 40% 80%, 45% 20%, 50% 100%, 55% 10%, 60% 80%, 65% 20%, 70% 90%, 75% 10%, 80% 80%, 85% 30%, 90% 70%, 95% 20%, 100% 100%)",
            }}
          />

          {/* Spine Crease Line */}
          <div
            className="absolute top-0 bottom-0 left-6 pointer-events-none"
            style={{
              width: 1.5,
              background: "linear-gradient(180deg, rgba(140,110,80,0.18) 0%, rgba(140,110,80,0.04) 100%)",
            }}
          />

          {/* 5. Silk Bookmark Ribbon attached to journal */}
          <SilkBookmarkRibbon style={{ top: -10, left: 30 }} />

          {/* 6. Pressed Flower Tucked in Journal Page */}
          <div className="absolute top-4 right-6 pointer-events-none opacity-75 transform rotate-12">
            <svg width="40" height="65" viewBox="0 0 40 65" fill="none">
              <path d="M20 60 C20 40 18 25 20 8" stroke="#9EA88A" strokeWidth="1.1" strokeLinecap="round" />
              <ellipse cx="13" cy="18" rx="4.5" ry="7" transform="rotate(-25 13 18)" fill="#C8B8D8" opacity="0.75" />
              <ellipse cx="27" cy="20" rx="4.5" ry="7" transform="rotate(25 27 20)" fill="#C8B8D8" opacity="0.7" />
              <ellipse cx="16" cy="32" rx="3.5" ry="6" transform="rotate(-15 16 32)" fill="#C8B8D8" opacity="0.6" />
            </svg>
          </div>

          {/* Fountain Pen resting beside journal top edge */}
          <FountainPenOnDesk style={{ top: "-6%", right: "16%", transform: "rotate(-14deg)" }} />

          {/* ── Handwritten Note Content ── */}
          <div className="relative z-10 pl-4 sm:pl-6 pr-2 pt-1 flex-1 flex flex-col justify-between select-text">
            {/* Header */}
            <div className="flex items-center justify-between mb-3 border-b border-[#6E5A4E]/10 pb-2">
              <span
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontStyle: "italic",
                  fontSize: "13px",
                  color: "#6E5A4E",
                  opacity: 0.7,
                }}
              >
                From the desk of Poonam Choudhary
              </span>
            </div>

            {/* Salutation */}
            <h4
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(18px, 2.5vh, 23px)",
                fontWeight: 700,
                color: "#2A1E16",
                marginBottom: "12px",
                fontStyle: "italic",
              }}
            >
              Dear Reader,
            </h4>

            {/* Note Body */}
            <div className="space-y-3">
              <p
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "clamp(13.5px, 1.85vh, 16px)",
                  lineHeight: 1.75,
                  color: "#3A2C1E",
                }}
              >
                If these pages have made you pause, reflect, or see your parenting journey with fresh empathy, then this book has{" "}
                <span className="relative inline-block">
                  <span className="font-semibold">fulfilled its quiet purpose</span>.
                </span>
              </p>

              <p
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "clamp(13px, 1.75vh, 15px)",
                  lineHeight: 1.7,
                  color: "#4A3728",
                }}
              >
                I would truly love to hear your thoughts, your story, or simply a letter from your heart.
              </p>

              <p
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontStyle: "italic",
                  fontSize: "clamp(13.5px, 1.85vh, 16px)",
                  lineHeight: 1.7,
                  color: "#2A1E16",
                  fontWeight: 600,
                }}
              >
                Every letter carries a story, and every story deserves to be heard.
              </p>
            </div>

            {/* Sign off & Handwritten Email Integration */}
            <div className="mt-4 pt-3 flex items-end justify-between border-t border-[#6E5A4E]/10">
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontStyle: "italic",
                    fontSize: "12.5px",
                    color: "#6E5A4E",
                    marginBottom: "2px",
                  }}
                >
                  With gratitude,
                </p>
                <span
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "clamp(18px, 2.4vh, 22px)",
                    fontWeight: 700,
                    color: "#2A1E16",
                    letterSpacing: "0.02em",
                  }}
                >
                  Poonam
                </span>
              </div>

              {/* Handwritten Email Direct Integration */}
              <div className="text-right pb-1">
                <span
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "9px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#6E5A4E",
                    opacity: 0.65,
                    display: "block",
                  }}
                >
                  Direct Mail:
                </span>
                <a
                  href="mailto:Purechimes@gmail.com"
                  className="hover:underline underline-offset-2 decoration-[#A8B29A]"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#3A2C1E",
                    textDecoration: "none",
                  }}
                >
                  Purechimes@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Page Footer ── */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-25">
        <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "9px", letterSpacing: "0.3em", color: "#6E5A4E" }}>
          CHAPTER V
        </span>
      </div>
    </div>
  );
}
