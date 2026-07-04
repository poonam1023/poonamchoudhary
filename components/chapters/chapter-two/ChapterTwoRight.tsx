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
      {/* LARGE BACKGROUND ILLUSTRATION — grows from spine/left edge, matching Left page */}
      <BotanicalIllustration
        variant="branch"
        scale={1.6}
        opacity={0.45}
        position={{ top: "15%", left: "-25%" }}
        rotation={35}
        style={{ zIndex: 1 }}
      />

      {/* CHAPTER HEADER */}
      <div className="absolute flex flex-col items-center pointer-events-none select-none" style={{ top: "6%", left: "10%", right: "10%", zIndex: 10 }}>
        <EditorialLabel text="The Principles I Live By" />
        <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(18px, 2.8vh, 25px)", fontWeight: 700, color: "#2A1E16", letterSpacing: "0.02em", textAlign: "center", marginTop: "8px" }}>
          Five Pillars of Mindful Parenting
        </h3>
        <DecorativeDivider variant="fleuron" opacity={0.22} className="my-2 w-16" />
      </div>

      {/* COLLAGE CARDS — FIVE PILLARS */}
      
      {/* PILLAR 1: Presence */}
      <PaperNote
        paperColor="cream"
        rotation={-3}
        pin={true}
        tape={false}
        width={210}
        position={{ top: "22%", left: "5%" }}
        style={{ zIndex: 11 }}
      >
        <div className="flex flex-col text-left gap-1">
          <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(18px, 2.6vh, 22px)", fontWeight: 700, color: "#8A9A78", lineHeight: 1 }}>I</span>
          <h4 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(15px, 2.2vh, 17px)", fontWeight: 700, color: "#3A2C1E", lineHeight: 1.1 }}>
            Presence before perfection
          </h4>
          <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(13px, 1.8vh, 14.5px)", lineHeight: 1.45, color: "#5A4A38", marginTop: "2px" }}>
            Perfection is an illusion. Presence is the gift. Children remember who showed up, not who performed flawlessly.
          </p>
        </div>
      </PaperNote>

      {/* PILLAR 2: Connection */}
      <PaperNote
        paperColor="sage"
        rotation={2.5}
        pin={false}
        tape={true}
        width={220}
        position={{ top: "24%", right: "5%" }}
        style={{ zIndex: 12 }}
      >
        <div className="flex flex-col text-left gap-1">
          <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(18px, 2.6vh, 22px)", fontWeight: 700, color: "#4A5A3F", lineHeight: 1 }}>II</span>
          <h4 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(15px, 2.2vh, 17px)", fontWeight: 700, color: "#2C3527", lineHeight: 1.1 }}>
            Connection before correction
          </h4>
          <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(13px, 1.8vh, 14.5px)", lineHeight: 1.45, color: "#3E4C38", marginTop: "2px" }}>
            A child who feels connected can learn. Discipline without relationship is control. Lead with warmth, then guide.
          </p>
        </div>
      </PaperNote>

      {/* PILLAR 3: Empathy */}
      <PaperNote
        paperColor="rose"
        rotation={2}
        pin={false}
        tape={true}
        width={200}
        position={{ top: "45%", left: "7%" }}
        style={{ zIndex: 13 }}
      >
        <div className="flex flex-col text-left gap-1">
          <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(18px, 2.6vh, 22px)", fontWeight: 700, color: "#A87C6F", lineHeight: 1 }}>III</span>
          <h4 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(15px, 2.2vh, 17px)", fontWeight: 700, color: "#36261F", lineHeight: 1.1 }}>
            Empathy creates resilience
          </h4>
          <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(13px, 1.8vh, 14.5px)", lineHeight: 1.45, color: "#4A362E", marginTop: "2px" }}>
            When children feel understood, they develop inner strength. Empathy is the bedrock of courage.
          </p>
        </div>
      </PaperNote>

      {/* PILLAR 4: Boundaries */}
      <PaperNote
        paperColor="tan"
        rotation={-2.2}
        pin={true}
        tape={false}
        width={210}
        position={{ top: "47%", right: "8%" }}
        style={{ zIndex: 14 }}
      >
        <div className="flex flex-col text-left gap-1">
          <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(18px, 2.6vh, 22px)", fontWeight: 700, color: "#A88A68", lineHeight: 1 }}>IV</span>
          <h4 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(15px, 2.2vh, 17px)", fontWeight: 700, color: "#3A2C1E", lineHeight: 1.1 }}>
            Boundaries with love
          </h4>
          <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(13px, 1.8vh, 14.5px)", lineHeight: 1.45, color: "#5A4A38", marginTop: "2px" }}>
            Clear, kind limits teach safety. A boundary set with love is a doorway the child can trust.
          </p>
        </div>
      </PaperNote>

      {/* PILLAR 5: Growth */}
      <PaperNote
        paperColor="cream"
        rotation={3.5}
        pin={false}
        tape={true}
        width={250}
        position={{ top: "68%", left: "12%" }}
        style={{ zIndex: 15 }}
      >
        <div className="flex flex-col text-left gap-1">
          <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(18px, 2.6vh, 22px)", fontWeight: 700, color: "#8A9A78", lineHeight: 1 }}>V</span>
          <h4 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(15px, 2.2vh, 17px)", fontWeight: 700, color: "#3A2C1E", lineHeight: 1.1 }}>
            Growth is lifelong
          </h4>
          <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(13px, 1.8vh, 14.5px)", lineHeight: 1.45, color: "#5A4A38", marginTop: "2px" }}>
            We are not raising children. We are raising adults. And we, too, are growing. The journey of conscious parenting transforms us both.
          </p>
        </div>
      </PaperNote>

      {/* CLOSING REMINDER PAPER NOTE */}
      <PaperNote
        text="These principles are not rules. They are reminders. Print them, pin them, return to them."
        paperColor="sage"
        rotation={-1}
        width={220}
        fontSize="clamp(13.5px, 1.8vh, 15px)"
        position={{ bottom: "8%", right: "6%" }}
        tape={true}
        style={{ zIndex: 20 }}
      />

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
