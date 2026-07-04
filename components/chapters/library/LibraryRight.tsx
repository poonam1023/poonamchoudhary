"use client";

import React from "react";
import {
  EditorialLabel,
  DecorativeDivider,
  InkSplash,
  PaperNote,
  WaxSeal,
  BotanicalIllustration,
} from "@/components/decorations";

const REVIEWS = [
  { stars: 5, text: "A beautiful blend of visual storytelling and heartfelt parenting wisdom. I return to these pages again and again.", author: "— Maya R." },
  { stars: 5, text: "This book changed how I see my relationship with my daughter. Every parent should read it.", author: "— David L." },
  { stars: 4, text: "Thoughtful, elegant, and deeply moving. The principles are simple yet transformative.", author: "— Priya K." },
];

const TOC_ITEMS = [
  { num: "I",   title: "Presence before perfection", page: 12 },
  { num: "II",  title: "Connection before correction", page: 28 },
  { num: "III", title: "Empathy creates resilience", page: 44 },
  { num: "IV",  title: "Boundaries with love", page: 58 },
  { num: "V",   title: "Growth is lifelong", page: 72 },
];

export default function LibraryRight() {
  return (
    <div className="absolute inset-0 overflow-hidden select-none" style={{ background: "transparent" }}>
      {/* LARGE BACKDROP ART — matching the Left page's spine-bleed */}
      <BotanicalIllustration
        variant="olive"
        scale={1.35}
        opacity={0.45}
        position={{ top: "16%", left: "-8%" }}
        rotation={-15}
        style={{ zIndex: 1 }}
      />

      {/* HEADER (Zone 1: top 9%) */}
      <div className="absolute flex flex-col items-center pointer-events-none select-none" style={{ top: "9%", left: "10%", right: "10%", zIndex: 10 }}>
        <EditorialLabel text="Open Book Preview" />
        <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(18px, 2.8vh, 25px)", fontWeight: 700, color: "#2A1E16", letterSpacing: "0.02em", textAlign: "center", marginTop: "8px" }}>
          What Readers Are Saying
        </h3>
        <DecorativeDivider variant="fleuron" opacity={0.22} className="my-2.5 w-14" />
      </div>

      {/* ZONE 2 — HERO TESTIMONIAL (top 22% to 35%, full width, centered) */}
      <div className="absolute flex flex-col items-center text-center select-text justify-center" style={{ top: "22%", left: "6%", right: "6%", zIndex: 10, height: "13%" }}>
        <div className="flex gap-1 mb-1.5">
          {Array.from({ length: 5 }).map((_, s) => (
            <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#C4A882" stroke="none">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>
        <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "clamp(17px, 2.4vh, 22px)", lineHeight: 1.5, color: "#4A3728" }}>
          &ldquo;A beautiful blend of visual storytelling and heartfelt parenting wisdom. I return to these pages again and again.&rdquo;
        </p>
        <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "0.15em", color: "#6E5A4E", opacity: 0.7, marginTop: "4px", textTransform: "uppercase" }}>
          — Maya R.
        </span>
      </div>

      {/* ZONE 3 — SPLIT SUB-COLUMNS (top 38% to 76%) */}
      
      {/* Sub-column 3A — Table of Contents (left 6% to 55%) */}
      <div className="absolute select-text flex flex-col" style={{ top: "38%", left: "6%", width: "49%", bottom: "24%", zIndex: 10, border: "0.5px solid rgba(168,178,154,0.2)", background: "rgba(250,247,242,0.6)", padding: "12px 16px", borderRadius: "1px", boxShadow: "inset 0 0 12px rgba(58,44,30,0.02)" }}>
        <div style={{ borderBottom: "0.5px solid rgba(110,90,78,0.18)", paddingBottom: "6px", marginBottom: "8px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }} className="flex justify-between items-end">
          <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", color: "#9EA88A", textTransform: "uppercase" }}>Inside the Volume</span>
          <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "9px", color: "#6E5A4E", opacity: 0.55 }}>Key Chapters</span>
        </div>
        <div className="flex flex-col gap-1.5 justify-center flex-1">
          {TOC_ITEMS.map((item, i) => (
            <div key={i} className="flex justify-between items-center py-0.5" style={{ borderBottom: i < TOC_ITEMS.length - 1 ? "0.5px solid rgba(110,90,78,0.06)" : "none" }}>
              <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(13px, 1.8vh, 14.5px)", color: "#4A3728" }}>
                <span style={{ color: "#9EA88A", fontWeight: 600, marginRight: "8px" }}>{item.num}.</span>
                {item.title}
              </span>
              <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "9.5px", color: "#6E5A4E", opacity: 0.45, fontVariantNumeric: "tabular-nums" }}>p. {item.page}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sub-column 3B — Secondary Review Cards Stack (left 60% to 94%) */}
      <div className="absolute flex flex-col gap-4 justify-center" style={{ top: "38%", left: "60%", width: "34%", bottom: "24%", zIndex: 10 }}>
        {/* David L. Card (Sage Paper) */}
        <PaperNote
          paperColor="sage"
          rotation={-2}
          pin={false}
          tape={true}
          width="100%"
          inline={true}
          style={{ zIndex: 12, margin: 0, padding: "10px 12px" }}
        >
          <div className="flex flex-col text-left gap-1">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, s) => (
                <svg key={s} width="8" height="8" viewBox="0 0 24 24" fill="#C4A882" stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "clamp(11.5px, 1.6vh, 13px)", lineHeight: 1.35, color: "#2C3527" }}>
              &ldquo;This book changed how I see my relationship with my daughter. Every parent should read it.&rdquo;
            </p>
            <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "7.5px", color: "#4A5A3F", opacity: 0.75 }}>— David L.</span>
          </div>
        </PaperNote>

        {/* Priya K. Card (Rose Paper) */}
        <PaperNote
          paperColor="rose"
          rotation={1.5}
          pin={true}
          tape={false}
          width="100%"
          inline={true}
          style={{ zIndex: 13, margin: 0, padding: "10px 12px" }}
        >
          <div className="flex flex-col text-left gap-1">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, s) => (
                <svg key={s} width="8" height="8" viewBox="0 0 24 24" fill={s < 4 ? "#C4A882" : "rgba(110,90,78,0.12)"} stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "clamp(11.5px, 1.6vh, 13px)", lineHeight: 1.35, color: "#36261F" }}>
              &ldquo;Thoughtful, elegant, and deeply moving. The principles are simple yet transformative.&rdquo;
            </p>
            <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "7.5px", color: "#6A554A", opacity: 0.75 }}>— Priya K.</span>
          </div>
        </PaperNote>
      </div>

      {/* ZONE 4 — BOTTOM ROW (top 79% to 96%) */}
      <div className="absolute flex justify-between items-center" style={{ top: "79%", left: "6%", right: "6%", bottom: "4%", zIndex: 20 }}>
        {/* First Edition Note */}
        <PaperNote
          text="First edition. Printed on archival cotton paper."
          paperColor="cream"
          rotation={-1.2}
          width={220}
          fontSize="13px"
          inline={true}
          style={{ margin: 0, padding: "8px 12px" }}
        />

        {/* Read Sample and Purchase Buttons group */}
        <div className="flex items-center gap-4">
          {/* Read Sample Ribbon */}
          <div style={{ background: "rgba(196,168,130,0.18)", border: "0.5px solid rgba(196,168,130,0.28)", padding: "5px 12px", borderRadius: "1px", transform: "rotate(-2deg)" }}>
            <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.18em", color: "#6E5A4E", textTransform: "uppercase", opacity: 0.85 }}>
              Read Sample
            </span>
          </div>

          {/* Tactile Purchase CTA Card */}
          <div
            style={{
              background: "#FAF7F2",
              border: "1px solid rgba(196,168,130,0.35)",
              boxShadow: "0 4px 10px rgba(58,44,30,0.08), inset 0 1px 0 #fff",
              padding: "10px 16px",
              borderRadius: "1px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              width: "150px",
            }}
            className="group hover:translate-y-[-1px] transition-transform duration-300"
          >
            {/* Terracotta Wax Seal */}
            <WaxSeal
              variant="terracotta"
              scale={0.7}
              position={{}}
              rotation={-10}
              style={{
                position: "relative",
                marginBottom: "4px",
                pointerEvents: "none",
              }}
            />
            <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", color: "#4A3828", textTransform: "uppercase" }}>
              Buy the Book
            </span>
            <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "8px", fontStyle: "italic", color: "#6E5A4E", marginTop: "1px", opacity: 0.7 }}>
              — Own This Edition —
            </span>
          </div>
        </div>
      </div>

      {/* Fountain pen decoration */}
      <div className="absolute pointer-events-none select-none" style={{ bottom: "10%", left: "5%", zIndex: 8, opacity: 0.08, transform: "rotate(-25deg)" }}>
        <svg width="50" height="100" viewBox="0 0 30 80" fill="none">
          <path d="M15 78 L15 20 M15 20 L5 10 M15 20 L25 10" stroke="#3A2C1E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 18 L15 22 L18 18" fill="#3A2C1E" opacity="0.6" />
          <circle cx="15" cy="78" r="1.5" fill="#3A2C1E" />
        </svg>
      </div>

      <InkSplash variant="droplet" scale={0.5} opacity={0.10} position={{ top: "24%", right: "20%" }} style={{ zIndex: 6 }} />

      {/* PAGE FOOTER */}
      <div className="absolute pointer-events-none select-none" style={{ bottom: "3%", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "8px", letterSpacing: "0.3em", color: "#6E5A4E", opacity: 0.22 }}>3</span>
      </div>
    </div>
  );
}
