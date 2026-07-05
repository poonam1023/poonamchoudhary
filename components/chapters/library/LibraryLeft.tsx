"use client";

import React from "react";
import Image from "next/image";
import {
  EditorialLabel,
  DecorativeDivider,
  BotanicalIllustration,
  PaperNote,
  WaxSeal,
} from "@/components/decorations";

const TOC_ITEMS = [
  { num: "I",   title: "Presence before perfection" },
  { num: "II",  title: "Connection before correction" },
  { num: "III", title: "Empathy creates resilience" },
  { num: "IV",  title: "Boundaries with love" },
  { num: "V",   title: "Growth is lifelong" },
];

export default function LibraryLeft() {
  return (
    <div className="absolute inset-0 overflow-hidden select-none" style={{ background: "transparent" }}>
      {/* LARGE BACKDROP ART */}
      <BotanicalIllustration
        variant="olive"
        scale={1.35}
        opacity={0.4}
        position={{ top: "16%", left: "-8%" }}
        rotation={-15}
        style={{ zIndex: 1 }}
      />

      {/* HEADER */}
      <div className="absolute flex flex-col items-center pointer-events-none select-none" style={{ top: "5%", left: "10%", right: "10%", zIndex: 10 }}>
        <EditorialLabel text="THE FLAGSHIP EDITION" />
        <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(22px, 3.4vh, 30px)", fontWeight: 700, color: "#2A1E16", letterSpacing: "0.02em", textAlign: "center", marginTop: "8px" }}>
          Conscious Parenting
        </h3>
        <DecorativeDivider variant="fleuron" opacity={0.22} className="my-2.5 w-14" />
      </div>

      {/* DUAL-COLUMN LAYOUT */}
      <div className="absolute flex gap-8" style={{ top: "16%", left: "6%", right: "6%", bottom: "10%", zIndex: 10 }}>
        
        {/* COLUMN A — METADATA & CTAs (Left 48%) */}
        <div className="flex-1 flex flex-col justify-between text-left select-text gap-4">
          {/* 1. Synopsis */}
          <div>
            <div style={{ borderBottom: "0.5px solid rgba(110,90,78,0.15)", paddingBottom: "4px", marginBottom: "6px" }}>
              <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "9.5px", fontWeight: 700, letterSpacing: "0.15em", color: "#9EA88A", textTransform: "uppercase" }}>
                About the Book
              </span>
            </div>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "14.5px", lineHeight: 1.55, color: "#4A3728" }}>
              A beautifully illustrated flagship guide for parents seeking to raise children with intention, empathy, and joy. Blending timeless wisdom with modern insights, this volume offers a path toward deeper parent-child connection.
            </p>
          </div>

          {/* 2. Specs */}
          <div>
            <div style={{ borderBottom: "0.5px solid rgba(110,90,78,0.15)", paddingBottom: "4px", marginBottom: "6px" }}>
              <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "9.5px", fontWeight: 700, letterSpacing: "0.15em", color: "#9EA88A", textTransform: "uppercase" }}>
                Edition Specs
              </span>
            </div>
            <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "13.5px", color: "#5A4A38", lineHeight: 1.5 }}>
              <p>Hardcover &middot; Cloth spine &middot; Quarter-bound</p>
              <p>Cotton-cream pages &middot; 228 leaves &middot; Gilded top</p>
            </div>
          </div>

          {/* 3. Key Themes */}
          <div>
            <div style={{ borderBottom: "0.5px solid rgba(110,90,78,0.15)", paddingBottom: "4px", marginBottom: "6px" }}>
              <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "9.5px", fontWeight: 700, letterSpacing: "0.15em", color: "#9EA88A", textTransform: "uppercase" }}>
                Key Themes
              </span>
            </div>
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {["Mindful Living", "Empathy", "Connection", "Growth"].map((t) => (
                <span key={t} style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "9px", fontWeight: 500, color: "#6E5A4E", background: "rgba(168,178,154,0.14)", padding: "3px 8px", borderRadius: "10px", letterSpacing: "0.02em" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* 4. Action CTA Buttons Group */}
          <div className="flex items-center gap-4 mt-2">
            {/* Read Sample Ribbon */}
            <div style={{ background: "rgba(196,168,130,0.18)", border: "0.5px solid rgba(196,168,130,0.28)", padding: "5px 12px", borderRadius: "1px", transform: "rotate(-2deg)", cursor: "pointer" }}>
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
                padding: "8px 14px",
                borderRadius: "1px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                width: "140px",
              }}
              className="group hover:translate-y-[-1px] transition-transform duration-300 pointer-events-auto"
            >
              <WaxSeal
                variant="terracotta"
                scale={0.6}
                position={{}}
                rotation={-10}
                style={{
                  position: "relative",
                  marginBottom: "3px",
                  pointerEvents: "none",
                }}
              />
              <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "9.5px", fontWeight: 700, letterSpacing: "0.15em", color: "#4A3828", textTransform: "uppercase" }}>
                Buy the Book
              </span>
              <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "7.5px", fontStyle: "italic", color: "#6E5A4E", marginTop: "0.5px", opacity: 0.7 }}>
                — Own This Edition —
              </span>
            </div>
          </div>
        </div>

        {/* COLUMN B — TOC & REVIEWS (Right 48%) */}
        <div className="flex-1 flex flex-col justify-between text-left select-text gap-4">
          {/* Table of Contents */}
          <div style={{ border: "0.5px solid rgba(168,178,154,0.2)", background: "rgba(250,247,242,0.6)", padding: "10px 14px", borderRadius: "1px", boxShadow: "inset 0 0 10px rgba(58,44,30,0.02)" }}>
            <div style={{ borderBottom: "0.5px solid rgba(110,90,78,0.18)", paddingBottom: "4px", marginBottom: "6px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "9.5px", fontWeight: 700, letterSpacing: "0.22em", color: "#9EA88A", textTransform: "uppercase" }}>Inside the Volume</span>
              <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "8.5px", color: "#6E5A4E", opacity: 0.55 }}>Chapters</span>
            </div>
            <div className="flex flex-col gap-1">
              {TOC_ITEMS.map((item, i) => (
                <div key={i} className="flex justify-between items-center py-0.5" style={{ borderBottom: i < TOC_ITEMS.length - 1 ? "0.5px solid rgba(110,90,78,0.06)" : "none" }}>
                  <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "13.5px", color: "#4A3728" }}>
                    <span style={{ color: "#9EA88A", fontWeight: 600, marginRight: "6px" }}>{item.num}.</span>
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Primary Review Card (Maya R.) */}
          <PaperNote
            paperColor="sage"
            rotation={-1.5}
            pin={false}
            tape={true}
            width="100%"
            inline={true}
            style={{ margin: 0, padding: "10px 12px" }}
          >
            <div className="flex flex-col text-left gap-1">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} width="9" height="9" viewBox="0 0 24 24" fill="#C4A882" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "13.5px", lineHeight: 1.4, color: "#2C3527" }}>
                &ldquo;A beautiful blend of visual storytelling and heartfelt parenting wisdom. I return to these pages again and again.&rdquo;
              </p>
              <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "8px", fontWeight: 700, color: "#4A5A3F", letterSpacing: "0.08em" }}>— Maya R.</span>
            </div>
          </PaperNote>

          {/* Secondary Review (Priya K. - shorter fragment) */}
          <PaperNote
            paperColor="rose"
            rotation={1.2}
            pin={true}
            tape={false}
            width="100%"
            inline={true}
            style={{ margin: 0, padding: "8px 12px" }}
          >
            <div className="flex flex-col text-left gap-1">
              <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "13px", lineHeight: 1.35, color: "#36261F" }}>
                &ldquo;Thoughtful, elegant, and deeply moving. The principles are simple yet transformative.&rdquo;
              </p>
              <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "8px", color: "#6A554A", opacity: 0.8 }}>— Priya K.</span>
            </div>
          </PaperNote>
        </div>

      </div>

      {/* PAGE FOOTER */}
      <div className="absolute pointer-events-none select-none" style={{ bottom: "3%", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "8px", letterSpacing: "0.3em", color: "#6E5A4E", opacity: 0.22 }}>iii</span>
      </div>
    </div>
  );
}
