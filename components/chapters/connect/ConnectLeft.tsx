"use client";

import React from "react";
import {
  EditorialLabel,
  DecorativeDivider,
  WatercolorSplash,
  PressedFlower,
  WaxSeal,
} from "@/components/decorations";

export default function ConnectLeft() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: "transparent" }}>
      <WatercolorSplash variant="cream" opacity={0.16} position={{ top: "12%", left: "6%" }} width={230} height={190} />
      <WatercolorSplash variant="sage" opacity={0.08} position={{ bottom: "14%", right: "10%" }} width={170} height={140} />

      <div className="absolute flex flex-col items-center pointer-events-none select-none" style={{ top: "8%", left: "10%", right: "10%", zIndex: 10 }}>
        <EditorialLabel text="CHAPTER V / Connect" />
        <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(17px, 2.9vh, 25px)", fontWeight: 700, color: "#2A1E16", letterSpacing: "0.02em", textAlign: "center", marginTop: "10px" }}>
          I Would Love to Hear From You
        </h3>
        <DecorativeDivider variant="fleuron" opacity={0.22} className="my-2.5 w-14" />
      </div>

      {/* LETTER INVITATION */}
      <div className="absolute select-text" style={{ top: "34%", left: "12%", right: "12%", zIndex: 10 }}>
        <div style={{ width: "28px", height: "0.5px", background: "rgba(110,90,78,0.18)", marginBottom: "12px" }} />
        <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "clamp(10px, 1.5vh, 11.5px)", lineHeight: 1.75, color: "#5A4A38", marginBottom: "16px" }}>
          Every story begins with a conversation. Whether you are a parent seeking guidance, a fellow writer, or simply someone who believes in the power of conscious living — I invite you to reach out.
        </p>
        <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(9.5px, 1.45vh, 11px)", lineHeight: 1.7, color: "#4A3728", marginBottom: "18px" }}>
          Your words matter. Your questions are welcome. And your story deserves to be heard.
        </p>
      </div>

      {/* CONTACT DETAILS */}
      <div className="absolute select-text" style={{ bottom: "24%", left: "12%", right: "12%", zIndex: 10 }}>
        <div style={{ borderTop: "0.5px solid rgba(110,90,78,0.12)", paddingTop: "12px" }}>
          <div className="flex items-center gap-2 mb-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(110,90,78,0.35)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "10px", color: "#5A4A38", opacity: 0.8 }}>New Delhi, India</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(110,90,78,0.35)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "10px", color: "#5A4A38", opacity: 0.8 }}>poonam@consciousparenting.com</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(110,90,78,0.35)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "10px", color: "#5A4A38", opacity: 0.8 }}>@poonam.choudhary</span>
          </div>
        </div>
      </div>

      <PressedFlower variant="wildflower" scale={0.7} opacity={0.45} position={{ bottom: "6%", right: "6%" }} style={{ zIndex: 12 }} />
      <WaxSeal variant="terracotta" scale={0.65} rotation={5} position={{ bottom: "10%", left: "8%" }} style={{ zIndex: 15 }} />

      <div className="absolute pointer-events-none select-none" style={{ bottom: "3%", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "8px", letterSpacing: "0.3em", color: "#6E5A4E", opacity: 0.22 }}>v</span>
      </div>
    </div>
  );
}
