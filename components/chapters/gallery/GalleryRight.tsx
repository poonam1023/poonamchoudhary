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

      {/* ── KEEPSAKE SCRAPBOOK PHOTO (Sole Visual Hero) ── */}
      <div className="absolute pointer-events-none select-none z-15" style={{ top: "18%", left: "26%", transform: "rotate(2deg)" }}>
        <div style={{ width: "260px", height: "300px", background: "#FAF7EE", padding: "12px 12px 36px 12px", boxShadow: "0 16px 36px rgba(58,44,30,0.16), 0 5px 12px rgba(58,44,30,0.10)", borderRadius: "1px", border: "0.5px solid rgba(110,90,78,0.10)" }}>
          <div className="relative" style={{ width: "100%", height: "100%", overflow: "hidden" }}>
            <Image
              src="/journal-photo.png"
              alt="Keepsake snapshot"
              fill
              className="object-cover"
              style={{
                filter: "contrast(0.95) brightness(1.02) sepia(0.12)",
              }}
              priority
            />
          </div>
          {/* Handwritten caption */}
          <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "12px", color: "#6E5A4E", display: "block", textAlign: "center", marginTop: "10px", opacity: 0.85 }}>
            Seeds of intention &middot; Spring Garden
          </span>
        </div>
      </div>

      {/* TACTILE SCRAPBOOK DECORATIONS */}
      <PressedFlower variant="fern-leaf" scale={0.75} opacity={0.5} position={{ bottom: "6%", left: "6%" }} style={{ zIndex: 11 }} />

      <InkSplash variant="splash" scale={0.5} opacity={0.08} position={{ top: "22%", right: "12%" }} style={{ zIndex: 6 }} />

      {/* Dried leaf accent */}
      <div className="absolute pointer-events-none select-none" style={{ bottom: "26%", left: "5%", zIndex: 8, opacity: 0.08, transform: "rotate(40deg)" }}>
        <svg width="40" height="60" viewBox="0 0 30 50" fill="none">
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
