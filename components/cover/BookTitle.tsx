import React from "react";

/**
 * BookTitle — Hero author name treatment.
 *
 * Clothbound hardcover edition: warm antique gold foil emboss.
 * The author name remains the typographic hero of the cover.
 * Inspired by Penguin Clothbound Classics gold-stamped cloth covers.
 */
function BookTitle() {
  return (
    <div className="relative w-full select-none z-20 flex flex-col items-center">
      <h1
        className="font-display font-bold uppercase text-center leading-[1.22]"
        style={{
          fontSize: "clamp(1.9rem, 3.8vw, 3.3rem)",
          color: "#C8A56A",
          letterSpacing: "0.20em",
          // Gold foil emboss: bright highlight top-left, deep shadow bottom-right
          textShadow:
            "0.5px 0.5px 0px rgba(240,215,160,0.80), " +   // highlight
            "-0.5px -0.5px 0px rgba(80,60,20,0.50), " +    // deep shadow
            "0px 1px 0px rgba(90,65,20,0.40), " +           // lower shadow
            "1px 2px 4px rgba(30,20,8,0.30), " +            // ambient drop
            "0 0 28px rgba(200,165,106,0.10)",               // subtle gold glow
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
