"use client";

import React from "react";
import {
  EditorialLabel,
  DecorativeDivider,
  WatercolorSplash,
  InkSplash,
  PaperNote,
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
    <div className="absolute inset-0 overflow-hidden" style={{ background: "transparent" }}>
      <WatercolorSplash variant="sage" opacity={0.12} position={{ top: "10%", right: "5%" }} width={240} height={190} />
      <WatercolorSplash variant="cream" opacity={0.10} position={{ bottom: "12%", left: "8%" }} width={180} height={150} />

      <div className="absolute flex flex-col items-center pointer-events-none select-none" style={{ top: "8%", left: "10%", right: "10%", zIndex: 10 }}>
        <EditorialLabel text="Open Book Preview" />
        <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(16px, 2.7vh, 23px)", fontWeight: 700, color: "#2A1E16", letterSpacing: "0.02em", textAlign: "center", marginTop: "10px" }}>
          What Readers Are Saying
        </h3>
        <DecorativeDivider variant="fleuron" opacity={0.22} className="my-2 w-14" />
      </div>

      {/* REVIEWS */}
      <div className="absolute select-text" style={{ top: "32%", left: "8%", right: "8%", zIndex: 10 }}>
        <div style={{ width: "24px", height: "0.5px", background: "rgba(110,90,78,0.18)", marginBottom: "10px" }} />
        {REVIEWS.map((r, i) => (
          <div key={i} className="mb-3 last:mb-0" style={{ padding: "8px 10px", background: "rgba(250,247,242,0.45)", borderLeft: "2px solid rgba(168,178,154,0.25)", borderRadius: "1px" }}>
            <div className="flex gap-0.5 mb-1">
              {Array.from({ length: 5 }).map((_, s) => (
                <svg key={s} width="7" height="7" viewBox="0 0 24 24" fill={s < r.stars ? "#C4A882" : "rgba(110,90,78,0.08)"} stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "clamp(9px, 1.35vh, 10.5px)", lineHeight: 1.6, color: "#4A3728" }}>
              &ldquo;{r.text}&rdquo;
            </p>
            <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "7px", color: "#6E5A4E", opacity: 0.65, display: "block", marginTop: "3px" }}>{r.author}</span>
          </div>
        ))}
      </div>

      {/* TABLE OF CONTENTS PREVIEW */}
      <div className="absolute select-text" style={{ bottom: "22%", left: "8%", width: "52%", zIndex: 10 }}>
        <div style={{ borderBottom: "0.5px solid rgba(110,90,78,0.18)", paddingBottom: "5px", marginBottom: "6px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "6px", fontWeight: 700, letterSpacing: "0.22em", color: "#9EA88A", textTransform: "uppercase" }}>Contents</span>
          <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "5.5px", color: "#6E5A4E", opacity: 0.45 }}>Selected entries</span>
        </div>
        {TOC_ITEMS.map((item, i) => (
          <div key={i} className="flex justify-between items-center py-0.5" style={{ borderBottom: i < TOC_ITEMS.length - 1 ? "0.5px solid rgba(110,90,78,0.06)" : "none" }}>
            <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "9px", color: "#4A3728" }}>
              <span style={{ color: "#9EA88A", fontWeight: 600, marginRight: "6px" }}>{item.num}.</span>
              {item.title}
            </span>
            <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "6.5px", color: "#6E5A4E", opacity: 0.4, fontVariantNumeric: "tabular-nums" }}>{item.page}</span>
          </div>
        ))}
      </div>

      {/* BUY NOW BUTTON — archive tag */}
      <div className="absolute" style={{ bottom: "10%", right: "8%", zIndex: 20 }}>
        <div style={{ background: "rgba(168,178,154,0.12)", border: "0.5px solid rgba(168,178,154,0.25)", padding: "6px 16px 7px", borderRadius: "2px", boxShadow: "0 1px 4px rgba(58,44,30,0.03)", cursor: "pointer" }}>
          <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "7.5px", fontWeight: 700, letterSpacing: "0.14em", color: "#4A3828", textTransform: "uppercase" }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#4A3828" strokeWidth="1.8" strokeLinecap="round" style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }}>
              <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
            </svg>
            Buy the Book
          </span>
        </div>
      </div>

      {/* READ SAMPLE RIBBON */}
      <div className="absolute pointer-events-none select-none" style={{ bottom: "16%", right: "10%", zIndex: 15, transform: "rotate(-2deg)" }}>
        <div style={{ background: "rgba(196,168,130,0.20)", border: "0.5px solid rgba(196,168,130,0.30)", padding: "3px 10px 4px", borderRadius: "1px" }}>
          <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "5.5px", fontWeight: 600, letterSpacing: "0.18em", color: "#6E5A4E", textTransform: "uppercase", opacity: 0.7 }}>
            Read Sample
          </span>
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

      <PaperNote text="First edition. Printed on archival cotton paper." paperColor="cream" rotation={-1.2} width={110} position={{ bottom: "4%", left: "14%" }} tape={true} style={{ zIndex: 20 }} />

      <div className="absolute pointer-events-none select-none" style={{ bottom: "3%", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "8px", letterSpacing: "0.3em", color: "#6E5A4E", opacity: 0.22 }}>3</span>
      </div>
    </div>
  );
}
