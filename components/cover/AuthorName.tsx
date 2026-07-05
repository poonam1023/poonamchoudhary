import React from "react";

/**
 * AuthorName — Professional identity strip.
 *
 * Clothbound hardcover edition: single elegant text line,
 * no icons, no stacking hierarchy. Pure typographic restraint.
 * Gold foil, small caps feel, generous letter-spacing.
 */
function AuthorName() {
  return (
    <div className="flex flex-col items-center select-none gap-4">
      {/* Thin gold rule */}
      <div
        style={{
          width: "40px",
          height: "0.5px",
          background: "rgba(200, 165, 106, 0.45)",
        }}
      />

      {/* Single identity line */}
      <p
        className="font-sans uppercase text-center"
        style={{
          fontSize: "clamp(0.38rem, 0.72vw, 0.55rem)",
          letterSpacing: "0.30em",
          color: "rgba(200, 165, 106, 0.65)",
          // Tiny emboss
          textShadow:
            "0.3px 0.3px 0px rgba(240,215,160,0.40), " +
            "-0.3px -0.3px 0px rgba(60,45,15,0.30)",
        }}
      >
        Author&ensp;·&ensp;Speaker&ensp;·&ensp;Parenting Guide
      </p>

      {/* Thin gold rule */}
      <div
        style={{
          width: "40px",
          height: "0.5px",
          background: "rgba(200, 165, 106, 0.45)",
        }}
      />
    </div>
  );
}

export default React.memo(AuthorName);
