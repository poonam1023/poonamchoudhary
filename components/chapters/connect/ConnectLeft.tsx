"use client";

import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { EditorialLabel } from "@/components/decorations";

/* ═══════════════════════════════════════════════════
   SUB-COMPONENTS FOR FLAT-LAY DESK OBJECTS
═══════════════════════════════════════════════════ */

/** Coffee Ring Stain */
function CoffeeRingStain({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className="pointer-events-none select-none absolute"
      style={{ width: 100, height: 100, opacity: 0.14, ...style }}
    >
      <circle
        cx="60"
        cy="60"
        r="48"
        stroke="#4A3728"
        strokeWidth="2.5"
        strokeDasharray="12 4 20 6 8 3"
        strokeLinecap="round"
        fill="none"
      />
      <circle
        cx="60"
        cy="60"
        r="45"
        stroke="#6E5A4E"
        strokeWidth="1.2"
        strokeDasharray="6 8 15 4"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      <ellipse cx="62" cy="61" rx="43" ry="46" stroke="#4A3728" strokeWidth="0.8" fill="none" opacity="0.4" />
    </svg>
  );
}

/** Ink Splash / Drop Marks */
function InkSplashes({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      className="pointer-events-none select-none absolute"
      style={{ width: 70, height: 70, opacity: 0.2, ...style }}
    >
      <ellipse cx="25" cy="30" rx="5" ry="3.5" fill="#2A1E16" transform="rotate(-15 25 30)" />
      <ellipse cx="38" cy="42" rx="2.5" ry="2" fill="#2A1E16" />
      <ellipse cx="18" cy="48" rx="1.8" ry="1.2" fill="#2A1E16" />
      <ellipse cx="50" cy="22" rx="3" ry="1.8" fill="#2A1E16" transform="rotate(25 50 22)" />
      <circle cx="58" cy="34" r="1" fill="#2A1E16" />
      <circle cx="12" cy="22" r="1.2" fill="#2A1E16" />
    </svg>
  );
}

/** Rubber Stamp Impression (New Delhi, India) */
function RubberStampImpression({ style }: { style?: React.CSSProperties }) {
  return (
    <div
      className="pointer-events-none select-none absolute flex flex-col items-center justify-center text-center"
      style={{
        border: "1.5px dashed rgba(110, 70, 50, 0.38)",
        borderRadius: "50%",
        width: 86,
        height: 86,
        padding: 4,
        transform: "rotate(-12deg)",
        color: "rgba(110, 70, 50, 0.48)",
        fontFamily: "var(--font-cormorant), serif",
        boxShadow: "inset 0 0 0 2px rgba(110, 70, 50, 0.08)",
        ...style,
      }}
    >
      <div style={{ fontSize: "7px", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700 }}>
        ★ POSTAL SERVICE ★
      </div>
      <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", margin: "2px 0" }}>
        NEW DELHI
      </div>
      <div style={{ fontSize: "7.5px", letterSpacing: "0.15em", textTransform: "uppercase" }}>
        INDIA · 110001
      </div>
      <div style={{ fontSize: "6.5px", fontStyle: "italic", marginTop: 1, opacity: 0.8 }}>
        ARCHIVAL MAIL
      </div>
    </div>
  );
}

/** Vintage Luggage Tag (Email Discovery) */
function VintageLuggageTag({ style }: { style?: React.CSSProperties }) {
  return (
    <motion.div
      className="absolute z-20 flex items-center"
      style={{ ...style }}
      whileHover={{ scale: 1.03, rotate: -2 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      {/* String */}
      <svg viewBox="0 0 40 25" fill="none" className="w-8 h-5 -mr-1 pointer-events-none">
        <path d="M2 12 C 12 2, 28 22, 38 12" stroke="#8C6E54" strokeWidth="1.2" fill="none" strokeDasharray="3 1" />
      </svg>

      {/* Tag Card */}
      <div
        className="relative px-3.5 py-2.5 rounded-sm flex items-center gap-2"
        style={{
          background: "linear-gradient(135deg, #F3EBDD 0%, #E8DCB8 100%)",
          border: "1px solid rgba(140, 110, 70, 0.35)",
          boxShadow: "2px 4px 12px rgba(58, 44, 30, 0.12)",
        }}
      >
        {/* Brass eyelet */}
        <div
          className="w-2.5 h-2.5 rounded-full flex items-center justify-center"
          style={{ background: "#C4A882", border: "1px solid #8C6E54" }}
        >
          <div className="w-1 h-1 rounded-full bg-[#FAF7F2]" />
        </div>

        <div className="flex flex-col">
          <span
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "8px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#6E5A4E",
              opacity: 0.75,
              fontWeight: 600,
            }}
          >
            AUTHOR DIRECT MAIL
          </span>
          <a
            href="mailto:Purechimes@gmail.com"
            className="group flex items-center gap-1 mt-0.5"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "12px",
              fontWeight: 700,
              color: "#3A2C1E",
              textDecoration: "none",
            }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#6E5A4E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span className="group-hover:underline underline-offset-2 decoration-[#A8B29A]">
              Purechimes@gmail.com
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/** Sticky Note (Response time note) */
function StickyNote({ style }: { style?: React.CSSProperties }) {
  return (
    <motion.div
      className="absolute z-20 p-3 select-none pointer-events-auto"
      style={{
        background: "linear-gradient(145deg, #FBF4DC 0%, #F5E6B8 100%)",
        border: "1px solid rgba(180, 150, 90, 0.35)",
        boxShadow: "2px 5px 14px rgba(50, 35, 20, 0.10)",
        width: 135,
        transform: "rotate(4deg)",
        ...style,
      }}
      whileHover={{ rotate: 1, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 240, damping: 16 }}
    >
      {/* Translucent tape at top */}
      <div
        className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-10 h-4"
        style={{
          background: "rgba(240, 230, 200, 0.55)",
          border: "1px solid rgba(200, 180, 140, 0.3)",
          backdropFilter: "blur(1px)",
          transform: "rotate(-2deg)",
        }}
      />
      <p
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontStyle: "italic",
          fontSize: "11px",
          color: "#4A3728",
          lineHeight: 1.4,
          margin: 0,
        }}
      >
        "I usually reply within 2–3 days."
      </p>
      <div className="flex justify-between items-center mt-1.5 opacity-60">
        <span style={{ fontSize: "8px", fontFamily: "sans-serif" }}>✦</span>
        <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "9px", fontStyle: "italic" }}>
          Poonam
        </span>
      </div>
    </motion.div>
  );
}

/** Folded Reader Envelope */
function ReaderEnvelope({ style }: { style?: React.CSSProperties }) {
  return (
    <motion.div
      className="absolute z-15 select-none pointer-events-auto"
      style={{
        width: 110,
        height: 75,
        background: "linear-gradient(160deg, #EFE8DA 0%, #E2D7C3 100%)",
        border: "1px solid rgba(130, 100, 70, 0.28)",
        boxShadow: "2px 6px 16px rgba(40, 30, 20, 0.12)",
        borderRadius: 2,
        ...style,
      }}
      whileHover={{ y: -3, rotate: 2 }}
    >
      {/* Flap lines */}
      <svg viewBox="0 0 110 75" fill="none" className="absolute inset-0 w-full h-full pointer-events-none">
        <path d="M0 0 L55 38 L110 0" stroke="rgba(110, 80, 50, 0.25)" strokeWidth="1" />
        <path d="M0 75 L42 42" stroke="rgba(110, 80, 50, 0.15)" strokeWidth="0.8" />
        <path d="M110 75 L68 42" stroke="rgba(110, 80, 50, 0.15)" strokeWidth="0.8" />
      </svg>

      {/* Mini Wax Seal on flap */}
      <div className="absolute top-7 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#9E4632] flex items-center justify-center shadow-sm">
        <span style={{ color: "#F7F1E8", fontSize: "7px", fontWeight: 700, fontFamily: "serif" }}>♥</span>
      </div>

      {/* Label */}
      <div className="absolute bottom-2 left-2 right-2 text-center">
        <span
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontSize: "9.5px",
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

/** Glass Ink Bottle */
function GlassInkBottle({ mouseX, mouseY, style }: { mouseX: number; mouseY: number; style?: React.CSSProperties }) {
  const highlightX = 12 + mouseX * 0.04;
  const highlightY = 14 + mouseY * 0.03;

  return (
    <motion.div
      className="absolute z-20 pointer-events-auto"
      style={{ width: 44, height: 58, ...style }}
      whileHover={{ scale: 1.05 }}
    >
      <svg viewBox="0 0 44 58" fill="none" className="w-full h-full drop-shadow-md">
        {/* Bottle Body */}
        <path d="M8 22 C8 16 14 14 22 14 C30 14 36 16 36 22 L36 50 C36 54 32 56 22 56 C12 56 8 54 8 50 Z" fill="#201610" opacity="0.9" />
        {/* Dark Ink Fill inside */}
        <path d="M10 28 L34 28 L34 49 C34 52 30 54 22 54 C14 54 10 52 10 49 Z" fill="#0E0906" />
        {/* Cork Cap */}
        <rect x="15" y="4" width="14" height="10" rx="2" fill="#8C6A48" stroke="#6E4E30" strokeWidth="1" />
        <rect x="13" y="12" width="18" height="4" rx="1" fill="#755638" />
        {/* Label */}
        <rect x="12" y="32" width="20" height="14" rx="1" fill="#FAF5E8" opacity="0.85" stroke="rgba(110,90,78,0.3)" strokeWidth="0.5" />
        <text x="22" y="41" textAnchor="middle" fontFamily="serif" fontSize="6.5" fill="#3A2C1E" fontStyle="italic">
          INK
        </text>
        {/* Dynamic Specular Highlight */}
        <ellipse cx={highlightX} cy={highlightY} rx="3" ry="7" fill="#FFFFFF" opacity="0.3" transform="rotate(-15 12 14)" />
      </svg>
    </motion.div>
  );
}

/** Fountain Pen Resting on Journal */
function FountainPenOnDesk({ style }: { style?: React.CSSProperties }) {
  return (
    <motion.div
      className="absolute z-30 pointer-events-auto cursor-pointer"
      style={{ width: 140, height: 26, ...style }}
      whileHover={{ rotate: -3, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 220, damping: 15 }}
    >
      <svg viewBox="0 0 140 26" fill="none" className="w-full h-full drop-shadow-lg">
        {/* Pen Barrel */}
        <rect x="14" y="6" width="96" height="14" rx="7" fill="#1C1510" />
        {/* Gold accents */}
        <rect x="22" y="6" width="6" height="14" fill="#C4A882" />
        <rect x="84" y="6" width="4" height="14" fill="#C4A882" />
        {/* Pen Nib */}
        <path d="M110 13 L134 7 L138 13 L134 19 Z" fill="#D4B68D" />
        <line x1="110" y1="13" x2="136" y2="13" stroke="#8C6E54" strokeWidth="0.8" />
        {/* Cap End */}
        <rect x="4" y="7" width="10" height="12" rx="4" fill="#120D09" />
        <path d="M6 5 L6 21" stroke="#C4A882" strokeWidth="1.5" strokeLinecap="round" />
        {/* Specular Shine */}
        <rect x="30" y="8" width="45" height="3" rx="1.5" fill="#FFFFFF" opacity="0.2" />
      </svg>
    </motion.div>
  );
}

/** Vintage Postage Stamps */
function VintagePostageStamps({ style }: { style?: React.CSSProperties }) {
  return (
    <div className="absolute z-15 flex gap-1 pointer-events-none select-none" style={{ ...style }}>
      <div
        className="w-8 h-10 p-1 flex flex-col items-center justify-between"
        style={{
          background: "#E5DEC9",
          border: "1px dashed rgba(120, 90, 60, 0.4)",
          transform: "rotate(-6deg)",
          boxShadow: "1px 2px 6px rgba(0,0,0,0.08)",
        }}
      >
        <div className="w-full h-5 bg-[#C8B896] rounded-xs flex items-center justify-center text-[7px] text-[#4A3728]">
          🌸
        </div>
        <span style={{ fontSize: "5.5px", fontFamily: "serif", color: "#6E5A4E", fontWeight: 700 }}>
          INDIA 5p
        </span>
      </div>
      <div
        className="w-8 h-10 p-1 flex flex-col items-center justify-between"
        style={{
          background: "#DFD5C0",
          border: "1px dashed rgba(120, 90, 60, 0.4)",
          transform: "rotate(8deg)",
          boxShadow: "1px 2px 6px rgba(0,0,0,0.08)",
        }}
      >
        <div className="w-full h-5 bg-[#A8B29A] opacity-75 rounded-xs flex items-center justify-center text-[7px] text-[#2A1E16]">
          📜
        </div>
        <span style={{ fontSize: "5.5px", fontFamily: "serif", color: "#4A3728", fontWeight: 700 }}>
          1994
        </span>
      </div>
    </div>
  );
}

/** Silk Bookmark Ribbon */
function SilkBookmarkRibbon({ style }: { style?: React.CSSProperties }) {
  return (
    <motion.div
      className="absolute z-25 pointer-events-none select-none"
      style={{ width: 14, height: 110, ...style }}
      animate={{ rotate: [-1, 1.5, -1] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 14 110" fill="none" className="w-full h-full drop-shadow-sm">
        <path d="M2 0 L12 0 L12 96 L7 86 L2 96 Z" fill="#9E4632" />
        <path d="M4 0 L10 0 L10 94 L7 86 L4 94 Z" fill="#B5543D" opacity="0.7" />
        <line x1="7" y1="0" x2="7" y2="86" stroke="rgba(255,220,200,0.2)" strokeWidth="0.8" />
      </svg>
    </motion.div>
  );
}

/** Brass Paper Clip */
function BrassPaperClip({ style }: { style?: React.CSSProperties }) {
  return (
    <div className="absolute z-25 pointer-events-none select-none" style={{ ...style }}>
      <svg width="14" height="38" viewBox="0 0 14 38" fill="none">
        <path
          d="M4 34 C1 34 1 24 1 16 L1 8 C1 4 4 1 7 1 C10 1 13 4 13 8 L13 26 C13 30 11 32 7 32 C3 32 3 28 3 24 L3 12"
          stroke="#C4A882"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

/** Wax Seal Monogram */
function MonogramWaxSeal({ style }: { style?: React.CSSProperties }) {
  return (
    <motion.div
      className="absolute z-25 select-none pointer-events-auto cursor-pointer"
      style={{ width: 42, height: 42, ...style }}
      whileHover={{ scale: 1.08, rotate: 6 }}
    >
      <div
        className="w-full h-full rounded-full flex items-center justify-center relative shadow-md"
        style={{
          background: "radial-gradient(circle at 35% 35%, #B5543D 0%, #8C3422 70%, #682012 100%)",
          border: "1px solid rgba(255, 200, 180, 0.2)",
        }}
      >
        <div className="w-8 h-8 rounded-full border border-dashed border-[#F7F1E8]/30 flex items-center justify-center">
          <span
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "14px",
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
      {/* ── Background Subtle Paper Grain / Lines ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 32px, rgba(110, 90, 78, 0.025) 32px, rgba(110, 90, 78, 0.025) 33px)",
          zIndex: 1,
        }}
      />

      {/* ── Subtle Environmental Stains & Watercolors ── */}
      <CoffeeRingStain style={{ top: "6%", right: "8%" }} />
      <InkSplashes style={{ top: "18%", left: "6%" }} />
      <InkSplashes style={{ bottom: "12%", right: "12%" }} />

      {/* ── Discrete Chapter Label ── */}
      <div className="absolute top-5 left-8 z-20 opacity-85">
        <EditorialLabel text="CHAPTER V / WRITE TO ME" />
      </div>

      {/* ── Rubber Stamp Impression (New Delhi, India) ── */}
      <RubberStampImpression style={{ bottom: "16%", left: "6%" }} />

      {/* ── Vintage Luggage Tag (Email discovery) ── */}
      <VintageLuggageTag style={{ top: "12%", right: "10%" }} />

      {/* ── Reader Folded Envelope ── */}
      <ReaderEnvelope style={{ bottom: "8%", right: "14%", transform: "rotate(-8deg)" }} />

      {/* ── Sticky Note (Response time note) ── */}
      <StickyNote style={{ bottom: "24%", left: "4%" }} />

      {/* ── Glass Ink Bottle ── */}
      <GlassInkBottle mouseX={mousePos.x * 20} mouseY={mousePos.y * 20} style={{ top: "28%", left: "8%" }} />

      {/* ── Vintage Postage Stamps ── */}
      <VintagePostageStamps style={{ top: "45%", right: "8%" }} />

      {/* ── Brass Paper Clip ── */}
      <BrassPaperClip style={{ top: "34%", right: "26%" }} />

      {/* ── Monogram Wax Seal ── */}
      <MonogramWaxSeal style={{ bottom: "10%", left: "32%" }} />

      {/* ═══════════════════════════════════════════════════
          MAIN CENTERPIECE: OPEN HANDWRITTEN JOURNAL
      ═══════════════════════════════════════════════════ */}
      <motion.div
        className="absolute z-10 pointer-events-auto"
        style={{
          top: "16%",
          left: "14%",
          right: "14%",
          bottom: "14%",
        }}
        animate={{
          x: mousePos.x * -6,
          y: mousePos.y * -6,
          rotate: -1.5,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        {/* Journal Container Card */}
        <motion.div
          className="relative w-full h-full rounded-sm p-6 sm:p-8 flex flex-col justify-between"
          style={{
            background: "linear-gradient(170deg, #FEFCF6 0%, #FAF5EA 50%, #F5EDE0 100%)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.8), inset -1px 0 0 rgba(110,90,70,0.1), 4px 12px 32px rgba(45, 32, 20, 0.14)",
            border: "1px solid rgba(140, 110, 80, 0.22)",
          }}
          whileHover={{ y: -4, boxShadow: "4px 16px 40px rgba(45, 32, 20, 0.18)" }}
          transition={{ duration: 0.4 }}
        >
          {/* Deckled Edge Top Effect */}
          <div
            className="absolute -top-1 left-0 right-0 h-2 pointer-events-none opacity-60"
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
              background: "linear-gradient(180deg, rgba(140,110,80,0.2) 0%, rgba(140,110,80,0.05) 100%)",
            }}
          />

          {/* Silk Bookmark Ribbon attached to journal */}
          <SilkBookmarkRibbon style={{ top: -10, left: 32 }} />

          {/* Pressed Flower Tucked in Journal Page */}
          <div className="absolute top-4 right-6 pointer-events-none opacity-80 transform rotate-12">
            <svg width="45" height="75" viewBox="0 0 45 75" fill="none">
              <path d="M22 70 C22 50 20 30 22 10" stroke="#9EA88A" strokeWidth="1.2" strokeLinecap="round" />
              <ellipse cx="14" cy="22" rx="5" ry="8" transform="rotate(-25 14 22)" fill="#C8B8D8" opacity="0.75" />
              <ellipse cx="30" cy="25" rx="5" ry="8" transform="rotate(25 30 25)" fill="#C8B8D8" opacity="0.7" />
              <ellipse cx="18" cy="38" rx="4" ry="7" transform="rotate(-15 18 38)" fill="#C8B8D8" opacity="0.6" />
              <ellipse cx="26" cy="40" rx="4" ry="7" transform="rotate(15 26 40)" fill="#C8B8D8" opacity="0.5" />
            </svg>
          </div>

          {/* Fountain Pen resting casually across journal */}
          <FountainPenOnDesk style={{ top: "4%", right: "12%", transform: "rotate(-18deg)" }} />

          {/* ── Handwritten Note Content ── */}
          <div className="relative z-10 pl-4 sm:pl-6 pr-2 pt-2 flex-1 flex flex-col justify-between select-text">
            {/* Header / Date */}
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
              <span
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "11px",
                  color: "#6E5A4E",
                  opacity: 0.5,
                  letterSpacing: "0.05em",
                }}
              >
                NEW DELHI
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
                If these pages have made you pause, smile, reflect, or see your journey differently, then this book has
                already{" "}
                <span className="relative inline-block">
                  <span className="font-semibold">fulfilled its purpose</span>.
                  {/* Pencil underline */}
                  <svg viewBox="0 0 120 8" fill="none" className="absolute -bottom-1 left-0 w-full h-2 pointer-events-none opacity-60">
                    <path d="M2 5 C30 2, 80 6, 118 3" stroke="#4A3728" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
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
                I would truly love to hear your thoughts, your story, or simply a hello.
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

            {/* Sign off */}
            <div className="mt-4 pt-2 flex items-end justify-between border-t border-[#6E5A4E]/10">
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontStyle: "italic",
                    fontSize: "13px",
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

              {/* Little Margin Botanical Sketch */}
              <div className="opacity-40 pointer-events-none pr-4 pb-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4A3728" strokeWidth="1">
                  <path d="M12 22 C12 16, 8 10, 4 6" />
                  <path d="M12 22 C12 14, 16 8, 20 4" />
                  <path d="M12 16 C16 12, 20 12, 22 10" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Page Footer Number ── */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-25">
        <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "9px", letterSpacing: "0.3em", color: "#6E5A4E" }}>
          CHAPTER V
        </span>
      </div>
    </div>
  );
}
