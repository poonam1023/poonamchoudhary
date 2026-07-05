import React from "react";

/**
 * BookTitle — Hero author name treatment.
 *
 * Antique gold foil stamping effect pressed into deep walnut brown cloth.
 * Stamped/embossed text-shadow stack with realistic grazing reflections.
 */
function BookTitle() {
  return (
    <div className="relative w-full select-none z-20 flex flex-col items-center">
      <h1
        className="font-display uppercase text-center leading-[1.2] font-semibold"
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "clamp(1.8rem, 3.6vw, 3.1rem)",
          color: "#C8A56A",
          letterSpacing: "0.22em",
          // Three-dimensional gold foil stamping text shadows:
          // 1. Dark upper shadow representing the debossed cavity depth
          // 2. Warm gold metallic highlight representing grazing light on embossed lip
          // 3. Medium dark shadow representing depth drop inside the weave
          textShadow: `
            -0.5px -0.5px 0.5px rgba(45, 28, 19, 0.95),  /* Inner deep cut top-left */
            0.5px 0.5px 0.5px rgba(255, 235, 190, 0.75), /* Bright metallic rim highlight */
            0.5px 1px 1px rgba(35, 20, 12, 0.85),       /* Bottom cavity shadow */
            0px 2px 4px rgba(10, 5, 3, 0.35)             /* Ambient shadow drop */
          `,
        }}
      >
        POONAM
        <br />
        CHOUDHARY
      </h1>
    </div>
  );
}

export default React.memo(BookTitle);
