"use client";

import React from "react";
import {
  EditorialLabel,
  DecorativeDivider,
  PaperNote,
  InkSplash,
  BotanicalIllustration,
} from "@/components/decorations";

export default function ChapterTwoRight() {
  return (
    <div className="absolute inset-0 overflow-hidden select-none" style={{ background: "transparent" }}>
      {/* LARGE BACKGROUND WASHS & WATERCOLOR FRAMING */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          bottom: "-5%",
          right: "-10%",
          width: "70%",
          height: "60%",
          background: "radial-gradient(circle at 60% 60%, rgba(168,178,154,0.18) 0%, rgba(226,216,198,0.06) 50%, transparent 80%)",
          filter: "blur(20px)",
          zIndex: 0,
        }}
      />

      {/* DOMINANT BOTANICAL ILLUSTRATION (Sole Visual Hero) */}
      <BotanicalIllustration
        variant="branch"
        scale={2.3}
        opacity={0.38}
        position={{ top: "12%", left: "8%" }}
        rotation={22}
        style={{ zIndex: 3 }}
      />

      <BotanicalIllustration
        variant="olive"
        scale={1.1}
        opacity={0.12}
        position={{ bottom: "8%", left: "-5%" }}
        rotation={45}
        style={{ zIndex: 2 }}
      />

      {/* FLOATING REMINDER CARD (About-style supporting card) */}
      <PaperNote
        paperColor="cream"
        rotation={-2}
        pin={false}
        tape={true}
        width={230}
        position={{ bottom: "10%", right: "8%" }}
        style={{ zIndex: 20 }}
      >
        <div className="flex flex-col text-left">
          <span
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: 0.5,
              color: "#C4A882",
              display: "block",
              marginBottom: "8px",
            }}
          >
            &ldquo;
          </span>
          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontStyle: "italic",
              fontSize: "14px",
              lineHeight: 1.55,
              color: "#4A3728",
            }}
          >
            These principles are not rules. They are reminders. Print them, pin them, return to them.
          </p>
          <div className="flex items-center justify-between mt-3" style={{ borderTop: "0.5px solid rgba(110,90,78,0.12)", paddingTop: "6px" }}>
            <span
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "8px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                color: "#6E5A4E",
                textTransform: "uppercase",
              }}
            >
              — Note to Self
            </span>
          </div>
        </div>
      </PaperNote>

      {/* SUBTLE BACKGROUND TEXTURE DETAILS */}
      <InkSplash
        variant="droplet"
        scale={0.6}
        opacity={0.12}
        position={{ top: "22%", right: "18%" }}
        style={{ zIndex: 8 }}
      />

      {/* PAGE FOOTER */}
      <div className="absolute pointer-events-none select-none" style={{ bottom: "3%", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "8px", letterSpacing: "0.3em", color: "#6E5A4E", opacity: 0.22 }}>2</span>
      </div>
    </div>
  );
}
