"use client";

import React from "react";
import {
  EditorialLabel,
  DecorativeDivider,
  WatercolorSplash,
  PaperNote,
  InkSplash,
  BotanicalIllustration,
} from "@/components/decorations";

const PRINCIPLES = [
  { numeral: "I",   title: "Presence before perfection", body: "Perfection is an illusion that steals the moment. Presence is the gift that fills it. Children remember who showed up, not who performed flawlessly." },
  { numeral: "II",  title: "Connection before correction", body: "A child who feels connected is a child who can learn. Discipline without relationship is just control. Lead with warmth, then guide." },
  { numeral: "III", title: "Empathy creates resilience", body: "When a child feels understood, they develop the inner strength to face the world. Empathy is not softness. It is the bedrock of courage." },
  { numeral: "IV",  title: "Boundaries with love", body: "Clear, kind limits teach safety and respect. A boundary set with love is not a wall. It is a doorway the child can trust." },
  { numeral: "V",   title: "Growth is lifelong", body: "We are not raising children. We are raising adults. And we, too, are still growing. The journey of conscious parenting never ends, and it transforms us as much as it transforms them." },
];

export default function ChapterTwoRight() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: "transparent" }}>
      <WatercolorSplash variant="rose" opacity={0.10} position={{ top: "8%", right: "5%" }} width={260} height={210} />
      <WatercolorSplash variant="cream" opacity={0.12} position={{ bottom: "10%", left: "8%" }} width={200} height={160} />

      <BotanicalIllustration variant="branch" scale={0.6} opacity={0.09} position={{ bottom: "2%", right: "2%" }} rotation={15} />

      <div className="absolute flex flex-col items-center pointer-events-none select-none" style={{ top: "8%", left: "10%", right: "10%", zIndex: 10 }}>
        <EditorialLabel text="The Principles I Live By" />
        <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(16px, 2.7vh, 23px)", fontWeight: 700, color: "#2A1E16", letterSpacing: "0.02em", textAlign: "center", marginTop: "10px" }}>
          Five Pillars of Mindful Parenting
        </h3>
        <DecorativeDivider variant="fleuron" opacity={0.22} className="my-2 w-16" />
      </div>

      {/* PRINCIPLES LIST */}
      <div className="absolute" style={{ top: "32%", left: "10%", right: "10%", zIndex: 10 }}>
        <div style={{ width: "24px", height: "0.5px", background: "rgba(110,90,78,0.18)", marginBottom: "10px" }} />
        {PRINCIPLES.map((p, i) => (
          <div key={i} className="flex gap-3 mb-3 last:mb-0">
            <div style={{ flexShrink: 0, width: "28px", textAlign: "center", paddingTop: "1px" }}>
              <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "16px", fontWeight: 700, color: "#9EA88A", opacity: 0.7, lineHeight: 1 }}>{p.numeral}</span>
            </div>
            <div>
              <h4 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(11px, 1.6vh, 12.5px)", fontWeight: 600, color: "#3A2C1E", marginBottom: "2px" }}>
                {p.title}
              </h4>
              <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(9px, 1.35vh, 10.5px)", lineHeight: 1.6, color: "#5A4A38", opacity: 0.85 }}>
                {p.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      <PaperNote text="These principles are not rules. They are reminders. Print them, pin them, return to them." paperColor="sage" rotation={1.8} width={130} position={{ bottom: "9%", right: "8%" }} tape={true} style={{ zIndex: 20 }} />

      <InkSplash variant="droplet" scale={0.6} opacity={0.12} position={{ top: "22%", right: "18%" }} style={{ zIndex: 8 }} />

      <div className="absolute pointer-events-none select-none" style={{ bottom: "3%", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "8px", letterSpacing: "0.3em", color: "#6E5A4E", opacity: 0.22 }}>2</span>
      </div>
    </div>
  );
}
