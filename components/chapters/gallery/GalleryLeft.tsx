"use client";

import React from "react";
import {
  EditorialLabel,
  DecorativeDivider,
  WatercolorSplash,
  PaperNote,
  PressedFlower,
  WaxSeal,
} from "@/components/decorations";

export default function GalleryLeft() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: "transparent" }}>
      {/* Notebook ruled-line background */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.04]" style={{
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 22px, rgba(110,90,78,0.12) 22px, rgba(110,90,78,0.12) 23px)",
      }} />

      <WatercolorSplash variant="rose" opacity={0.10} position={{ top: "10%", left: "8%" }} width={220} height={180} />
      <WatercolorSplash variant="lavender" opacity={0.12} position={{ bottom: "12%", right: "12%" }} width={170} height={140} />

      <div className="absolute flex flex-col items-center pointer-events-none select-none" style={{ top: "8%", left: "10%", right: "10%", zIndex: 10 }}>
        <EditorialLabel text="Stories from Everyday Life" />
        <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(16px, 2.7vh, 23px)", fontWeight: 700, color: "#2A1E16", letterSpacing: "0.02em", textAlign: "center", marginTop: "10px" }}>
          Author&rsquo;s Personal Journal
        </h3>
        <DecorativeDivider variant="fleuron" opacity={0.22} className="my-2 w-14" />
      </div>

      {/* CURRENT READING SECTION */}
      <div className="absolute select-text" style={{ top: "31%", left: "10%", right: "10%", zIndex: 10 }}>
        <div style={{ borderBottom: "0.5px solid rgba(110,90,78,0.15)", paddingBottom: "6px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9EA88A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
          <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "6.5px", fontWeight: 700, letterSpacing: "0.2em", color: "#9EA88A", textTransform: "uppercase" }}>
            Current Reading
          </span>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ width: "50px", height: "68px", background: "#E8DCCB", borderRadius: "1px", flexShrink: 0, boxShadow: "1px 2px 6px rgba(58,44,30,0.06)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
            <svg width="30" height="45" viewBox="0 0 30 45" fill="none">
              <rect x="1" y="1" width="28" height="43" rx="1" stroke="rgba(110,90,78,0.15)" strokeWidth="0.5" />
              <line x1="6" y1="12" x2="24" y2="12" stroke="rgba(110,90,78,0.12)" strokeWidth="0.5" />
              <line x1="6" y1="18" x2="20" y2="18" stroke="rgba(110,90,78,0.08)" strokeWidth="0.5" />
              <line x1="6" y1="24" x2="22" y2="24" stroke="rgba(110,90,78,0.08)" strokeWidth="0.5" />
              <line x1="6" y1="30" x2="18" y2="30" stroke="rgba(110,90,78,0.08)" strokeWidth="0.5" />
            </svg>
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 600, fontSize: "11px", color: "#3A2C1E", marginBottom: "1px" }}>The Prophet</p>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "9.5px", color: "#6E5A4E", opacity: 0.75, marginBottom: "4px" }}>Kahlil Gibran</p>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "9px", lineHeight: 1.6, color: "#4A3728", borderLeft: "1.5px solid rgba(168,178,154,0.3)", paddingLeft: "8px" }}>
              &ldquo;Your children are not your children. They are the sons and daughters of Life&rsquo;s longing for itself.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* JOURNAL ENTRY SNIPPET */}
      <div className="absolute select-text" style={{ bottom: "24%", left: "10%", right: "10%", zIndex: 10 }}>
        <div style={{ borderBottom: "0.5px solid rgba(110,90,78,0.15)", paddingBottom: "6px", marginBottom: "8px" }}>
          <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "6.5px", fontWeight: 700, letterSpacing: "0.2em", color: "#9EA88A", textTransform: "uppercase" }}>
            Recent Entry
          </span>
        </div>
        <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(9px, 1.35vh, 10.5px)", lineHeight: 1.75, color: "#4A3728" }}>
          <span style={{ fontWeight: 600, color: "#9EA88A" }}>March 15.</span> She asked me today why the sky changes color at sunset. I could have explained wavelengths and atmospheric scattering. Instead I said, &ldquo;The sky is telling you a story before you sleep.&rdquo; Her eyes widened. That is what parenting is. Choosing wonder over data, in the moments that matter.
        </p>
      </div>

      <PressedFlower variant="wildflower" scale={0.7} opacity={0.50} position={{ bottom: "6%", right: "6%" }} style={{ zIndex: 12 }} />

      <WaxSeal variant="terracotta" scale={0.6} rotation={-6} position={{ top: "24%", right: "5%" }} style={{ zIndex: 15 }} />

      <PaperNote text="Journal entries are private. These glimpses are shared with love." paperColor="cream" rotation={-2.5} width={120} position={{ bottom: "10%", left: "6%" }} tape={true} style={{ zIndex: 20 }} />

      <div className="absolute pointer-events-none select-none" style={{ bottom: "3%", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "8px", letterSpacing: "0.3em", color: "#6E5A4E", opacity: 0.22 }}>iv</span>
      </div>
    </div>
  );
}
