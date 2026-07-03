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

const ENTRIES = [
  { date: "Feb 28", text: "Today we planted seeds in tiny pots on the windowsill. She named each one. I hope she always names her dreams before she plants them." },
  { date: "Mar 4", text: "He fell and scraped his knee. Before I could say anything, he looked up and said, 'It's OK, Mama. Falling is how we learn.' Out of the mouth of my teacher." },
  { date: "Mar 11", text: "The rain came suddenly. We danced in it. No agenda, no schedule. Just wet hair and laughter. These are the pages I want to remember." },
];

export default function GalleryRight() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: "transparent" }}>
      <WatercolorSplash variant="cream" opacity={0.16} position={{ top: "8%", right: "8%" }} width={240} height={190} />
      <WatercolorSplash variant="sage" opacity={0.10} position={{ bottom: "10%", left: "6%" }} width={190} height={150} />

      {/* HEADER */}
      <div className="absolute flex flex-col items-center pointer-events-none select-none" style={{ top: "7%", left: "10%", right: "10%", zIndex: 10 }}>
        <EditorialLabel text="Scrapbook" />
        <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(16px, 2.7vh, 23px)", fontWeight: 700, color: "#2A1E16", letterSpacing: "0.02em", textAlign: "center", marginTop: "8px" }}>
          Moments from the Journey
        </h3>
        <DecorativeDivider variant="fleuron" opacity={0.22} className="my-1.5 w-12" />
      </div>

      {/* SCRAPBOOK ENTRIES */}
      <div className="absolute" style={{ top: "30%", left: "8%", right: "8%", zIndex: 10 }}>
        <div style={{ width: "24px", height: "0.5px", background: "rgba(110,90,78,0.18)", marginBottom: "10px" }} />
        {ENTRIES.map((e, i) => (
          <div
            key={i}
            className="mb-2.5 last:mb-0"
            style={{
              padding: "8px 10px 8px 12px",
              background: i === 1 ? "rgba(247,241,232,0.6)" : "rgba(250,247,242,0.4)",
              borderLeft: `2px solid ${i === 0 ? "rgba(168,178,154,0.25)" : i === 1 ? "rgba(196,168,130,0.20)" : "rgba(110,90,78,0.12)"}`,
              borderRadius: "1px",
              transform: i === 1 ? "rotate(-0.8deg)" : i === 2 ? "rotate(0.6deg)" : "none",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Coffee stain on first entry */}
            {i === 0 && (
              <div className="absolute pointer-events-none select-none" style={{ right: "-4px", bottom: "-4px", width: "28px", height: "28px", opacity: 0.10, mixBlendMode: "multiply" }}>
                <svg viewBox="0 0 30 30" fill="none">
                  <circle cx="15" cy="15" r="10" stroke="#6E5A4E" strokeWidth="1.5" opacity="0.5" />
                  <circle cx="15" cy="15" r="8" stroke="#6E5A4E" strokeWidth="0.8" opacity="0.3" />
                </svg>
              </div>
            )}
            <div className="flex items-center gap-1.5 mb-1">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#9EA88A" strokeWidth="1.5" strokeLinecap="round" style={{ opacity: 0.5, flexShrink: 0 }}>
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "6.5px", fontWeight: 600, letterSpacing: "0.08em", color: "#6E5A4E", opacity: 0.6 }}>{e.date}</span>
            </div>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 500, fontSize: "clamp(9.5px, 1.4vh, 11px)", lineHeight: 1.7, color: "#4A3728" }}>
              &ldquo;{e.text}&rdquo;
            </p>
          </div>
        ))}
      </div>

      {/* POLAROID-STYLE PHOTO PLACEHOLDER */}
      <div className="absolute pointer-events-none select-none" style={{ bottom: "12%", right: "7%", zIndex: 12, transform: "rotate(3deg)" }}>
        <div style={{ width: "60px", height: "72px", background: "#F5F0E8", padding: "4px 4px 14px 4px", boxShadow: "1px 3px 8px rgba(58,44,30,0.06), 0 1px 2px rgba(58,44,30,0.03)", borderRadius: "1px" }}>
          <div className="relative" style={{ width: "100%", height: "100%", overflow: "hidden" }}>
            <Image
              src="/journal-photo.png"
              alt="Cozy childhood memory"
              fill
              className="object-cover"
              style={{
                filter: "contrast(0.95) brightness(1.02) sepia(0.1)",
              }}
            />
          </div>
        </div>
      </div>

      <PressedFlower variant="fern-leaf" scale={0.65} opacity={0.45} position={{ bottom: "6%", left: "4%" }} style={{ zIndex: 11 }} />

      <InkSplash variant="splash" scale={0.5} opacity={0.08} position={{ top: "22%", right: "12%" }} style={{ zIndex: 6 }} />

      {/* Dried leaf accent */}
      <div className="absolute pointer-events-none select-none" style={{ bottom: "26%", left: "2%", zIndex: 8, opacity: 0.06, transform: "rotate(40deg)" }}>
        <svg width="30" height="50" viewBox="0 0 30 50" fill="none">
          <path d="M15 48 Q5 30 10 12 Q15 2 20 12 Q25 30 15 48 Z" stroke="#6E5A4E" strokeWidth="0.6" />
          <path d="M15 48 L15 12" stroke="#6E5A4E" strokeWidth="0.4" opacity="0.5" />
        </svg>
      </div>

      <div className="absolute pointer-events-none select-none" style={{ bottom: "3%", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "8px", letterSpacing: "0.3em", color: "#6E5A4E", opacity: 0.22 }}>4</span>
      </div>
    </div>
  );
}
