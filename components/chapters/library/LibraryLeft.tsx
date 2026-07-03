"use client";

import React from "react";
import Image from "next/image";
import {
  EditorialLabel,
  DecorativeDivider,
  WatercolorSplash,
  BotanicalIllustration,
} from "@/components/decorations";

export default function LibraryLeft() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: "transparent" }}>
      <WatercolorSplash variant="cream" opacity={0.16} position={{ top: "10%", left: "5%" }} width={220} height={180} />
      <WatercolorSplash variant="sage" opacity={0.08} position={{ bottom: "14%", right: "8%" }} width={160} height={130} />

      <BotanicalIllustration variant="branch" scale={0.65} opacity={0.10} position={{ top: "3%", left: "2%" }} rotation={-20} />

      {/* HEADER */}
      <div className="absolute flex flex-col items-center pointer-events-none select-none" style={{ top: "8%", left: "10%", right: "10%", zIndex: 10 }}>
        <EditorialLabel text="Collector's Library Catalogue" />
        <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(16px, 2.7vh, 23px)", fontWeight: 700, color: "#2A1E16", letterSpacing: "0.02em", textAlign: "center", marginTop: "10px" }}>
          Conscious Parenting
        </h3>
        <DecorativeDivider variant="fleuron" opacity={0.22} className="my-2 w-14" />
      </div>

      {/* BOOK COVER MOCKUP */}
      <div className="absolute" style={{ top: "32%", left: "10%", width: "38%", zIndex: 10 }}>
        <div style={{ position: "relative", aspectRatio: "3/4", boxShadow: "3px 6px 20px rgba(58,44,30,0.12), 1px 2px 4px rgba(58,44,30,0.06)", borderRadius: "2px", overflow: "hidden" }}>
          <Image src="/book-cover.png" alt="Conscious Parenting book cover" fill className="object-cover" priority />
          <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 1px 1px rgba(255,255,255,0.15), inset 0 -1px 2px rgba(58,44,30,0.10)" }} />
        </div>
      </div>

      {/* SYNOPSIS / DETAILS */}
      <div className="absolute select-text" style={{ top: "32%", right: "8%", width: "44%", zIndex: 10 }}>
        <div style={{ borderBottom: "0.5px solid rgba(110,90,78,0.15)", paddingBottom: "8px", marginBottom: "8px" }}>
          <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "6.5px", fontWeight: 700, letterSpacing: "0.2em", color: "#9EA88A", textTransform: "uppercase" }}>
            About the Book
          </span>
        </div>
        <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(9px, 1.35vh, 10.5px)", lineHeight: 1.7, color: "#4A3728", marginBottom: "12px" }}>
          A beautifully illustrated guide for parents seeking to raise children with intention, empathy, and joy. Blending timeless wisdom with modern parenting insights, this book offers a path toward deeper connection with your child.
        </p>

        <div style={{ borderBottom: "0.5px solid rgba(110,90,78,0.15)", paddingBottom: "8px", marginBottom: "8px" }}>
          <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "6.5px", fontWeight: 700, letterSpacing: "0.2em", color: "#9EA88A", textTransform: "uppercase" }}>
            Binding Details
          </span>
        </div>
        <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(8.5px, 1.3vh, 10px)", color: "#5A4A38", lineHeight: 1.7 }}>
          <p>Hardcover &middot; Cloth-bound spine</p>
          <p>Cotton-cream pages &middot; 228 leaves</p>
          <p>Quarter-bound &middot; Gilded top edge</p>
        </div>

        <div style={{ borderBottom: "0.5px solid rgba(110,90,78,0.15)", paddingBottom: "8px", marginTop: "12px", marginBottom: "8px" }}>
          <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "6.5px", fontWeight: 700, letterSpacing: "0.2em", color: "#9EA88A", textTransform: "uppercase" }}>
            Key Themes
          </span>
        </div>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {["Mindful Living", "Conscious Parenting", "Empathy", "Connection", "Growth"].map((t) => (
            <span key={t} style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "6.5px", fontWeight: 500, color: "#6E5A4E", background: "rgba(168,178,154,0.10)", padding: "2px 8px", borderRadius: "10px", letterSpacing: "0.04em" }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute pointer-events-none select-none" style={{ bottom: "3%", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "8px", letterSpacing: "0.3em", color: "#6E5A4E", opacity: 0.22 }}>iii</span>
      </div>
    </div>
  );
}
