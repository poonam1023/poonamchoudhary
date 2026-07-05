import React from "react";

/**
 * AuthorName — Professional identity strip at the bottom of the cover.
 *
 * Stamped gold foil, small caps, generous letter-spacing.
 * Underneath is a debossed line pressed into the cloth.
 */
function AuthorName() {
  return (
    <div className="flex flex-col items-center select-none gap-4">
      {/* Identity Line */}
      <p
        className="uppercase text-center font-normal"
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "clamp(0.42rem, 0.75vw, 0.6rem)",
          letterSpacing: "0.28em",
          color: "rgba(200, 165, 106, 0.82)",
          // Soft debossed gold stamp
          textShadow: `
            -0.3px -0.3px 0.3px rgba(45, 28, 19, 0.85),
            0.3px 0.3px 0.3px rgba(255, 235, 190, 0.50)
          `,
        }}
      >
        Author&ensp;•&ensp;Speaker&ensp;•&ensp;Parenting Guide
      </p>

      {/* Debossed horizontal divider rule (pressed look) */}
      <div
        className="relative"
        style={{
          width: "50px",
          height: "1px",
          background: "rgba(45, 26, 18, 0.85)", // Deep shadow crevice
          borderBottom: "1px solid rgba(106, 70, 48, 0.22)", // Highlights bottom edge
          boxShadow: "0.5px 0.5px 0px rgba(255, 255, 255, 0.04)",
        }}
      />
    </div>
  );
}

export default React.memo(AuthorName);
