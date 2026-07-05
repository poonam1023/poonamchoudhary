import React from "react";

/**
 * EndpaperPattern — Inside front cover endpaper.
 *
 * Displayed briefly during the page-flip opening animation on the back
 * face of the cover card. Creates the "magical opening" transition moment.
 *
 * Design: warm cream base with a delicate repeating botanical tile
 * in muted sage and antique gold. Inspired by hand-marbled endpapers
 * from 19th-century European luxury editions.
 */
function EndpaperPattern() {
  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none"
      style={{ background: "#FAF7EE" }}
    >
      {/* ── WARM BASE TINT ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 110% 100% at 60% 40%, #FEFCF5 0%, #FAF7EE 50%, #F5F0E3 100%)",
        }}
      />

      {/* ── REPEATING BOTANICAL TILE — SVG pattern ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="endpaperTile"
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            {/* Small olive sprig */}
            <path
              d="M40 72 C40 58 37 44 40 30 C42 20 40 12 40 6"
              stroke="rgba(142,155,132,0.22)"
              strokeWidth="0.7"
              strokeLinecap="round"
              fill="none"
            />
            <ellipse cx="34" cy="55" rx="7" ry="4" transform="rotate(-25 34 55)" fill="rgba(142,155,132,0.10)" stroke="rgba(142,155,132,0.14)" strokeWidth="0.4"/>
            <ellipse cx="46" cy="50" rx="7" ry="4" transform="rotate(25 46 50)" fill="rgba(142,155,132,0.09)" stroke="rgba(142,155,132,0.13)" strokeWidth="0.4"/>
            <ellipse cx="34" cy="38" rx="6" ry="3.5" transform="rotate(-20 34 38)" fill="rgba(142,155,132,0.08)" stroke="rgba(142,155,132,0.12)" strokeWidth="0.3"/>
            <ellipse cx="46" cy="34" rx="6" ry="3.5" transform="rotate(20 46 34)" fill="rgba(142,155,132,0.08)" stroke="rgba(142,155,132,0.12)" strokeWidth="0.3"/>
            {/* Tiny gold dot */}
            <circle cx="40" cy="6" r="1.5" fill="rgba(200,165,106,0.18)"/>
            <circle cx="33" cy="54" r="1.2" fill="rgba(200,165,106,0.12)"/>
            <circle cx="47" cy="49" r="1.2" fill="rgba(200,165,106,0.10)"/>
            {/* Corner vine accent */}
            <path d="M0 40 Q10 35 20 40 Q10 45 0 40Z" fill="rgba(142,155,132,0.06)"/>
            <path d="M80 40 Q70 35 60 40 Q70 45 80 40Z" fill="rgba(142,155,132,0.06)"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#endpaperTile)" />
      </svg>

      {/* ── CORNER BOTANICAL ACCENTS (larger, positioned) ── */}
      {/* Top-left */}
      <div className="absolute top-0 left-0" style={{ width: "20%", height: "28%", opacity: 0.6 }}>
        <svg viewBox="0 0 80 110" fill="none" style={{ width: "100%", height: "100%" }}>
          <path d="M10 100 C12 75 14 50 18 28 C20 14 16 5 18 0" stroke="rgba(142,155,132,0.3)" strokeWidth="0.8" strokeLinecap="round"/>
          <ellipse cx="10" cy="75" rx="9" ry="5" transform="rotate(-30 10 75)" fill="rgba(142,155,132,0.12)" stroke="rgba(142,155,132,0.18)" strokeWidth="0.5"/>
          <ellipse cx="26" cy="68" rx="9" ry="5" transform="rotate(30 26 68)" fill="rgba(142,155,132,0.10)" stroke="rgba(142,155,132,0.16)" strokeWidth="0.5"/>
          <ellipse cx="9" cy="50" rx="8" ry="4.5" transform="rotate(-25 9 50)" fill="rgba(142,155,132,0.09)"/>
          <ellipse cx="26" cy="44" rx="8" ry="4.5" transform="rotate(25 26 44)" fill="rgba(142,155,132,0.08)"/>
        </svg>
      </div>

      {/* Bottom-right */}
      <div className="absolute bottom-0 right-0" style={{ width: "20%", height: "28%", opacity: 0.6, transform: "rotate(180deg)" }}>
        <svg viewBox="0 0 80 110" fill="none" style={{ width: "100%", height: "100%" }}>
          <path d="M10 100 C12 75 14 50 18 28 C20 14 16 5 18 0" stroke="rgba(142,155,132,0.3)" strokeWidth="0.8" strokeLinecap="round"/>
          <ellipse cx="10" cy="75" rx="9" ry="5" transform="rotate(-30 10 75)" fill="rgba(142,155,132,0.12)" stroke="rgba(142,155,132,0.18)" strokeWidth="0.5"/>
          <ellipse cx="26" cy="68" rx="9" ry="5" transform="rotate(30 26 68)" fill="rgba(142,155,132,0.10)" stroke="rgba(142,155,132,0.16)" strokeWidth="0.5"/>
        </svg>
      </div>

      {/* ── SUBTLE VIGNETTE ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 50%, rgba(90,80,65,0.08) 85%, rgba(80,70,55,0.14) 100%)",
        }}
      />

      {/* ── CENTRED PUBLISHER MARK ── */}
      <div
        className="absolute"
        style={{
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
        }}
      >
        <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
          {/* Small laurel circle */}
          <circle cx="20" cy="20" r="16" stroke="rgba(142,155,132,0.30)" strokeWidth="0.8" fill="none"/>
          <circle cx="20" cy="20" r="12" stroke="rgba(142,155,132,0.20)" strokeWidth="0.5" fill="none"/>
          {/* PC monogram */}
          <text x="20" y="24" textAnchor="middle" fontFamily="Georgia, serif" fontSize="10" fill="rgba(142,155,132,0.35)" fontStyle="italic">PC</text>
        </svg>
        <span style={{ fontFamily: "Georgia, serif", fontSize: "7px", letterSpacing: "0.22em", color: "rgba(110,90,70,0.28)", fontStyle: "italic" }}>
          First Edition
        </span>
      </div>
    </div>
  );
}

export default React.memo(EndpaperPattern);
