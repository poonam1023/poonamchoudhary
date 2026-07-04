"use client";

import React from "react";
import Image from "next/image";
import {
  EditorialLabel,
  DecorativeDivider,
  WatercolorSplash,
  PressedFlower,
  InkSplash,
} from "@/components/decorations";

export default function GalleryRight() {
  return (
    <div className="absolute inset-0 overflow-hidden select-none" style={{ background: "transparent" }}>
      {/* WARM BACKGROUND WASH */}
      <WatercolorSplash
        variant="sage"
        opacity={0.35}
        position={{ bottom: "15%", left: "10%" }}
        width={260}
        height={210}
        style={{ zIndex: 1 }}
      />

      {/* HEADER */}
      <div className="absolute flex flex-col items-center pointer-events-none select-none" style={{ top: "6%", left: "10%", right: "10%", zIndex: 10 }}>
        <EditorialLabel text="Scrapbook" />
        <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(18px, 2.8vh, 25px)", fontWeight: 700, color: "#2A1E16", letterSpacing: "0.02em", textAlign: "center", marginTop: "8px" }}>
          Moments from the Journey
        </h3>
        <DecorativeDivider variant="fleuron" opacity={0.22} className="my-1.5 w-12" />
      </div>

      {/* TIMELINE ENTRIES */}
      
      {/* Entry 1: Feb 28 */}
      <div
        className="absolute select-text"
        style={{
          top: "22%",
          left: "6%",
          width: "250px",
          padding: "10px 12px",
          background: "rgba(250,247,242,0.45)",
          borderLeft: "2px solid rgba(168,178,154,0.3)",
          transform: "rotate(-1deg)",
          zIndex: 10,
        }}
      >
        {/* Coffee stain SVG overlay on first entry */}
        <div className="absolute pointer-events-none select-none" style={{ right: "-2px", bottom: "-2px", width: "28px", height: "28px", opacity: 0.12, mixBlendMode: "multiply" }}>
          <svg viewBox="0 0 30 30" fill="none">
            <circle cx="15" cy="15" r="10" stroke="#6E5A4E" strokeWidth="1.5" opacity="0.5" />
            <circle cx="15" cy="15" r="8" stroke="#6E5A4E" strokeWidth="0.8" opacity="0.3" />
          </svg>
        </div>
        <div className="flex items-center gap-1.5 mb-1.5">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9EA88A" strokeWidth="1.5" strokeLinecap="round" style={{ opacity: 0.6 }}>
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.08em", color: "#6E5A4E", opacity: 0.7 }}>Feb 28</span>
        </div>
        <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: "clamp(13.5px, 1.8vh, 15px)", lineHeight: 1.6, color: "#4A3728" }}>
          &ldquo;Today we planted seeds in tiny pots on the windowsill. She named each one. I hope she always names her dreams before she plants them.&rdquo;
        </p>
      </div>

      {/* Entry 2: Mar 4 */}
      <div
        className="absolute select-text"
        style={{
          top: "43%",
          right: "5%",
          width: "240px",
          padding: "10px 12px",
          background: "rgba(247,241,232,0.65)",
          borderLeft: "2px solid rgba(196,168,130,0.3)",
          transform: "rotate(1.5deg)",
          zIndex: 10,
        }}
      >
        <div className="flex items-center gap-1.5 mb-1.5">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9EA88A" strokeWidth="1.5" strokeLinecap="round" style={{ opacity: 0.6 }}>
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.08em", color: "#6E5A4E", opacity: 0.7 }}>Mar 4</span>
        </div>
        <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: "clamp(13.5px, 1.8vh, 15px)", lineHeight: 1.6, color: "#4A3728" }}>
          &ldquo;He fell and scraped his knee. Before I could say anything, he looked up and said, &lsquo;It&rsquo;s OK, Mama. Falling is how we learn.&rsquo; Out of the mouth of my teacher.&rdquo;
        </p>
      </div>

      {/* Entry 3: Mar 11 */}
      <div
        className="absolute select-text"
        style={{
          top: "66%",
          right: "6%",
          width: "250px",
          padding: "10px 12px",
          background: "rgba(250,247,242,0.45)",
          borderLeft: "2px solid rgba(110,90,78,0.18)",
          transform: "rotate(-1deg)",
          zIndex: 10,
        }}
      >
        <div className="flex items-center gap-1.5 mb-1.5">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9EA88A" strokeWidth="1.5" strokeLinecap="round" style={{ opacity: 0.6 }}>
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.08em", color: "#6E5A4E", opacity: 0.7 }}>Mar 11</span>
        </div>
        <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: "clamp(13.5px, 1.8vh, 15px)", lineHeight: 1.6, color: "#4A3728" }}>
          &ldquo;The rain came suddenly. We danced in it. No agenda, no schedule. Just wet hair and laughter. These are the pages I want to remember.&rdquo;
        </p>
      </div>

      {/* KEEPSAKE SCRAPBOOK PHOTOS */}
      
      {/* PHOTO 1 (top-right area) */}
      <div className="absolute pointer-events-none select-none z-15" style={{ top: "22%", right: "6%", transform: "rotate(3.5deg)" }}>
        <div style={{ width: "145px", height: "170px", background: "#F5F0E8", padding: "8px 8px 24px 8px", boxShadow: "0 10px 24px rgba(58,44,30,0.14), 0 3px 6px rgba(58,44,30,0.08)", borderRadius: "1px" }}>
          <div className="relative" style={{ width: "100%", height: "100%", overflow: "hidden" }}>
            <Image
              src="/journal-photo.png"
              alt="Keepsake snapshot"
              fill
              className="object-cover"
              style={{
                filter: "contrast(0.95) brightness(1.02) sepia(0.12)",
              }}
            />
          </div>
          {/* Handwritten caption */}
          <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "9px", color: "#6E5A4E", display: "block", textAlign: "center", marginTop: "6px", opacity: 0.8 }}>
            Window seeds &middot; Feb
          </span>
        </div>
      </div>

      {/* PHOTO 2 (bottom-left area) */}
      <div className="absolute pointer-events-none select-none z-15" style={{ top: "50%", left: "5%", transform: "rotate(-3deg)" }}>
        <div style={{ width: "155px", height: "180px", background: "#F5F0E8", padding: "8px 8px 26px 8px", boxShadow: "0 12px 28px rgba(58,44,30,0.14), 0 4px 8px rgba(58,44,30,0.08)", borderRadius: "1px" }}>
          <div className="relative" style={{ width: "100%", height: "100%", overflow: "hidden" }}>
            <Image
              src="/journal-photo.png"
              alt="Cozy memory"
              fill
              className="object-cover"
              style={{
                filter: "contrast(0.9) brightness(1.04) sepia(0.08) hue-rotate(-10deg)",
              }}
            />
          </div>
          {/* Handwritten caption */}
          <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "9px", color: "#6E5A4E", display: "block", textAlign: "center", marginTop: "6px", opacity: 0.8 }}>
            Dancing in rain &middot; Mar
          </span>
        </div>
      </div>

      {/* TACTILE SCRAPBOOK DECORATIONS */}
      <PressedFlower variant="fern-leaf" scale={0.65} opacity={0.45} position={{ bottom: "6%", left: "4%" }} style={{ zIndex: 11 }} />

      <InkSplash variant="splash" scale={0.5} opacity={0.08} position={{ top: "22%", right: "12%" }} style={{ zIndex: 6 }} />

      {/* Dried leaf accent */}
      <div className="absolute pointer-events-none select-none" style={{ bottom: "26%", left: "2%", zIndex: 8, opacity: 0.06, transform: "rotate(40deg)" }}>
        <svg width="30" height="50" viewBox="0 0 30 50" fill="none">
          <path d="M15 48 Q5 30 10 12 Q15 2 20 12 Q25 30 15 48 Z" stroke="#6E5A4E" strokeWidth="0.6" />
          <path d="M15 48 L15 12" stroke="#6E5A4E" strokeWidth="0.4" opacity="0.5" />
        </svg>
      </div>

      {/* PAGE FOOTER */}
      <div className="absolute pointer-events-none select-none" style={{ bottom: "3%", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "8px", letterSpacing: "0.3em", color: "#6E5A4E", opacity: 0.22 }}>4</span>
      </div>
    </div>
  );
}
