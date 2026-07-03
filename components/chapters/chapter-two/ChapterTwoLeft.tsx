"use client";

import React from "react";
import {
  EditorialLabel,
  DecorativeDivider,
  WatercolorSplash,
  WaxSeal,
  HandwrittenNote,
  BotanicalIllustration,
} from "@/components/decorations";

export default function ChapterTwoLeft() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: "transparent" }}>
      <WatercolorSplash variant="sage" opacity={0.10} position={{ top: "14%", left: "6%" }} width={240} height={200} />
      <WatercolorSplash variant="cream" opacity={0.14} position={{ bottom: "16%", right: "10%" }} width={180} height={150} />

      <BotanicalIllustration variant="olive" scale={0.7} opacity={0.12} position={{ top: "4%", left: "2%" }} rotation={-25} />

      {/* CHAPTER HEADER */}
      <div className="absolute flex flex-col items-center pointer-events-none select-none" style={{ top: "9%", left: "10%", right: "10%", zIndex: 10 }}>
        <EditorialLabel text="CHAPTER II / My Philosophy" />
        <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(17px, 2.9vh, 25px)", fontWeight: 700, color: "#2A1E16", letterSpacing: "0.02em", textAlign: "center", marginTop: "10px" }}>
          The Philosophy of Conscious Parenting
        </h3>
        <DecorativeDivider variant="fleuron" opacity={0.22} className="my-2.5 w-16" />
      </div>

      {/* PULLING QUOTE */}
      <div className="absolute pointer-events-none select-none" style={{ top: "31%", left: "12%", right: "12%", zIndex: 10 }}>
        <div style={{ width: "28px", height: "0.5px", background: "rgba(110,90,78,0.18)", marginBottom: "10px" }} />
        <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "clamp(10px, 1.5vh, 11.5px)", lineHeight: 1.72, color: "#5A4A38", paddingLeft: "14px", borderLeft: "1.5px solid rgba(168,178,154,0.35)" }}>
          &ldquo;Parenting is not about shaping a child into who we think they should be. It is about creating the conditions for them to become who they already are.&rdquo;
        </p>
      </div>

      {/* ESSAY BODY */}
      <div className="absolute select-text" style={{ top: "50%", left: "12%", right: "12%", zIndex: 10 }}>
        <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(9.5px, 1.5vh, 11.5px)", lineHeight: 1.85, color: "#4A3728", textAlign: "justify", hyphens: "auto" }}>
          <span className="drop-cap-letter">C</span>
          onscious parenting begins with a simple but profound shift: seeing the child as a whole person, not a project to be managed. It asks us to set aside our own unmet needs, our fears, and our timelines, and instead meet our children where they are. This philosophy does not offer a checklist. It offers a way of being. Presence before agenda. Curiosity before judgment. Connection before correction. When we parent from this place, we stop trying to control outcomes and start nurturing potential. The goal is not a perfect child. The goal is a real relationship.
        </p>
      </div>

      <WaxSeal variant="terracotta" scale={0.7} rotation={8} position={{ bottom: "11%", left: "8%" }} style={{ zIndex: 15 }} />

      <HandwrittenNote text="The pause between reaction and response is where freedom lives." rotation={-3.2} width={145} position={{ bottom: "8%", right: "10%" }} />

      <div className="absolute pointer-events-none select-none" style={{ bottom: "3%", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "8px", letterSpacing: "0.3em", color: "#6E5A4E", opacity: 0.22 }}>ii</span>
      </div>
    </div>
  );
}
