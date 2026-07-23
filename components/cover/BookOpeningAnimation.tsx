"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import LinenCoverBackground from "./LinenCoverBackground";
import EndpaperPattern from "./EndpaperPattern";
import BookTitle from "./BookTitle";
import BookSubtitle from "./BookSubtitle";
import AuthorName from "./AuthorName";
import ChapterOne from "./ChapterOne";
import ChapterOneRight from "@/components/chapters/chapter-one/ChapterOneRight";
import RightPage from "@/components/book/RightPage";
import CoverSection from "./CoverSection";
import WritingDeskBackground from "./WritingDeskBackground";

import { NavigationProvider, useNavigation } from "@/hooks/useNavigation";

function BookOpeningAnimationInner() {
  const [isHovered, setIsHovered] = useState(false);

  const {
    state,
    isMobile,
    closeBook,
    coverProgress,
  } = useNavigation();

  const frontCoverRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const spreadRef = useRef<HTMLDivElement>(null);

  // GSAP 1:1 Scroll Scrubbing with Visual Center Compensation:
  // Closed (0%): translateX = -25% so the closed book volume (right 50%) is PERFECTLY CENTERED on screen.
  // Fully Open (100%): translateX = 0% so the full 2-page spread (100%) is PERFECTLY CENTERED on screen.
  useEffect(() => {
    if (!frontCoverRef.current) return;

    const p = Math.max(0, Math.min(1, coverProgress));

    // Power2.inOut easing simulates physical hardcover weight:
    // initial resistance (breaking away from pages), free middle rotation, gentle settling flat at -180°
    const easedP = gsap.parseEase("power2.inOut")(p);
    const targetRotateY = easedP * -180;

    // Rotate frontCover around left spine edge
    gsap.to(frontCoverRef.current, {
      rotateY: targetRotateY,
      duration: 0.12,
      ease: "none",
      overwrite: "auto",
    });

    // Compensating X-translation to maintain the visual center of the book at screen middle:
    // Closed (easedP = 0) -> xPercent = -25% (centers the closed book volume)
    // Open (easedP = 1)   -> xPercent = 0%   (centers the open 2-page spread)
    if (spreadRef.current) {
      const targetXPercent = -25 * (1 - easedP);
      gsap.to(spreadRef.current, {
        xPercent: targetXPercent,
        duration: 0.12,
        ease: "none",
        overwrite: "auto",
      });
    }

    // Dynamic drop shadow under the lifting cover
    if (shadowRef.current) {
      const peak = Math.sin(easedP * Math.PI);
      const blur = 24 + peak * 44;
      const opacity = 0.28 + peak * 0.28;
      gsap.to(shadowRef.current, {
        boxShadow: `-${(peak * 20).toFixed(1)}px ${(18 + peak * 24).toFixed(1)}px ${blur.toFixed(1)}px rgba(10,5,3,${opacity.toFixed(2)})`,
        duration: 0.12,
        ease: "none",
        overwrite: "auto",
      });
    }
  }, [coverProgress]);

  const isReadingActive = state === "open" || state === "transitioning" || coverProgress >= 0.99;

  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-[#150E0B]">
      {/* Layer 1: Writing Desk Background (Stationary) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <WritingDeskBackground />
      </div>

      {/* Layer 2: Ambient Window light beam (Stationary) */}
      <div className="absolute inset-0 z-5 pointer-events-none select-none opacity-10">
        <div
          className="absolute w-[70%] h-[120%]"
          style={{
            top: "-10%",
            left: "15%",
            background:
              "linear-gradient(135deg, rgba(255,248,230,0.14) 0%, rgba(255,240,215,0.06) 50%, transparent 80%)",
            clipPath: "polygon(10% 0%, 90% 0%, 70% 100%, 20% 100%)",
          }}
        />
      </div>

      {/* Layer 3: 3D Book Container */}
      <div
        className="relative z-20 flex items-center justify-center"
        style={
          isMobile
            ? { width: "90vw", height: "80vh" }
            : {
                width: "min(92vw, 1550px)",
                height: "86vh",
                perspective: "2000px",
              }
        }
      >
        {/* Book Spread Board (Visual Center Compensated by -25% * (1 - coverProgress)) */}
        <div
          ref={spreadRef}
          className="relative w-full h-full preserve-3d"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* ── LEFT HALF BASE BOARD (Fades in as cover opens to reveal left spread) ── */}
          <div
            className="absolute left-0 top-0 h-full w-1/2 rounded-none pointer-events-none overflow-hidden transition-opacity duration-200"
            style={{
              background:
                "linear-gradient(160deg, #5E3D2B 0%, #4B2E20 35%, #2D1A12 100%)",
              boxShadow: "0 30px 70px rgba(10,5,3,0.30)",
              borderRight: "1px solid rgba(45,26,18,0.35)",
              opacity: Math.min(1, coverProgress * 4), // Hidden when closed, reveals gracefully as cover opens
            }}
          >
            {/* Linen weave texture */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, transparent, transparent 1.5px, rgba(45,26,18,0.18) 1.5px, rgba(45,26,18,0.18) 2px),
                  repeating-linear-gradient(90deg, transparent, transparent 1.5px, rgba(45,26,18,0.14) 1.5px, rgba(45,26,18,0.14) 2px)
                `,
                backgroundSize: "2px 2px",
              }}
            />
          </div>

          {/* ── RIGHT HALF PAGES (STATIONARY on right half — overflow-visible so LeftPage renders unclipped) ── */}
          <div
            className="absolute left-1/2 top-0 h-full w-1/2 bg-[#F7F1E8] rounded-none z-10 overflow-visible"
            style={{
              boxShadow:
                "0 40px 100px rgba(16, 9, 5, 0.42), 0 16px 36px rgba(16, 9, 5, 0.24)",
            }}
          >
            {!isMobile && (
              <div
                className="absolute left-0 pointer-events-none z-30"
                style={{
                  top: "6%",
                  bottom: "6%",
                  width: "16px",
                  background:
                    "linear-gradient(to right, rgba(58,44,30,0.06) 0%, transparent 100%)",
                  filter: "blur(3px)",
                  mixBlendMode: "multiply",
                }}
              />
            )}
            <div className="book-board-edge" />

            {/* When cover is 100% open (isReadingActive), render ChapterOne spread (renders both Left and Right pages).
                When closed or opening, render RightPage so left page doesn't show prematurely while closed. */}
            {isReadingActive ? (
              <ChapterOne onClose={closeBook} />
            ) : (
              <div className="w-full h-full relative z-10">
                <RightPage>
                  <ChapterOneRight />
                </RightPage>
              </div>
            )}
          </div>

          {/* ── FIXED CENTER SPINE (Stationary at exact center 50%) ── */}
          <div
            className="absolute left-1/2 top-0 bottom-0 z-30 pointer-events-none -translate-x-1/2"
            style={{
              width: "10px",
              background:
                "linear-gradient(to right, rgba(30,16,10,0.85) 0%, rgba(75,46,32,0.4) 50%, rgba(30,16,10,0.85) 100%)",
              boxShadow: "0 0 8px rgba(0,0,0,0.4)",
            }}
          />

          {/* ── FRONT HARDCOVER BOARD (ONLY THIS ROTATES AROUND THE SPINE AT 50%!) ── */}
          {/* zIndex drops to 5 when reading is active so ChapterOne's LeftPage (zIndex: 10) displays content! */}
          <div
            ref={frontCoverRef}
            className="absolute left-1/2 top-0 h-full w-1/2 preserve-3d"
            style={{
              transformOrigin: "left center", // Spine edge at 50%!
              transformStyle: "preserve-3d",
              willChange: "transform",
              zIndex: isReadingActive ? 5 : 40,
              pointerEvents: isReadingActive ? "none" : "auto",
            }}
          >
            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                FRONT FACE: Heirloom Hardcover Cover (Walnut Brown)
                Faces user when rotateY = 0deg (Closed book on right half)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <div
              ref={shadowRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="absolute inset-0 w-full h-full backface-hidden flex flex-col justify-between overflow-hidden"
              style={{
                transform: "rotateY(0deg)",
                boxShadow:
                  "0 36px 84px rgba(14,8,4,0.38), 0 14px 32px rgba(14,8,4,0.20)",
                borderLeft: "1px solid rgba(45,26,18,0.30)",
                borderRight: "1px solid rgba(45,26,18,0.30)",
              }}
            >
              {/* LINEN BACKGROUND */}
              <LinenCoverBackground isHovered={isHovered} />

              {/* Spine wrap decoration on cover left edge */}
              {!isMobile && (
                <div
                  className="absolute left-0 top-0 bottom-0 w-[40px] flex flex-col items-center justify-between py-10 z-20 pointer-events-none select-none"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(30,16,10,0.65) 0%, rgba(75,46,32,0.22) 30%, rgba(75,46,32,0.08) 100%)",
                    borderRight: "1px solid rgba(30,16,10,0.40)",
                    boxShadow:
                      "inset -2px 0 6px rgba(20,12,7,0.30), 1px 0 2px rgba(255,255,255,0.04)",
                  }}
                >
                  {/* Spine linen weave */}
                  <div
                    className="absolute inset-0 opacity-50"
                    style={{
                      backgroundImage: `
                        repeating-linear-gradient(0deg, transparent, transparent 1.5px, rgba(45,26,18,0.22) 1.5px, rgba(45,26,18,0.22) 2px),
                        repeating-linear-gradient(90deg, transparent, transparent 1.5px, rgba(45,26,18,0.18) 1.5px, rgba(45,26,18,0.18) 2px)
                      `,
                      backgroundSize: "2px 2px",
                    }}
                  />

                  {/* Spine title */}
                  <div
                    className="relative z-10"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                      fontSize: "6.5px",
                      letterSpacing: "0.24em",
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      color: "rgba(200,165,106,0.72)",
                      textTransform: "uppercase",
                      lineHeight: 1.5,
                    }}
                  >
                    Raising Ourselves Before We Raise Our Children
                  </div>

                  {/* Spine leaf ornament */}
                  <div className="relative z-10" style={{ opacity: 0.55 }}>
                    <svg width="18" height="22" viewBox="0 0 20 26" fill="none">
                      <path
                        d="M10 24 C10 18 8 12 10 6 C11 2 10 0 10 0"
                        stroke="#C8A56A"
                        strokeWidth="0.7"
                        strokeLinecap="round"
                      />
                      <ellipse
                        cx="6"
                        cy="16"
                        rx="5"
                        ry="2.5"
                        transform="rotate(-25 6 16)"
                        fill="rgba(200,165,106,0.25)"
                        stroke="#C8A56A"
                        strokeWidth="0.4"
                      />
                      <ellipse
                        cx="14"
                        cy="13"
                        rx="5"
                        ry="2.5"
                        transform="rotate(25 14 13)"
                        fill="rgba(200,165,106,0.20)"
                        stroke="#C8A56A"
                        strokeWidth="0.4"
                      />
                      <circle cx="10" cy="0.5" r="1" fill="#C8A56A" />
                    </svg>
                  </div>

                  {/* Author at bottom of spine */}
                  <div
                    className="relative z-10"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                      fontSize: "7.5px",
                      letterSpacing: "0.18em",
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      color: "rgba(200,165,106,0.75)",
                    }}
                  >
                    Poonam Choudhary
                  </div>
                </div>
              )}

              {/* EDITORIAL COVER TYPOGRAPHY CONTENT */}
              <CoverSection>
                <div
                  className="w-full h-full flex flex-col items-center justify-between"
                  style={{
                    paddingLeft: isMobile
                      ? "clamp(20px,4vw,44px)"
                      : "calc(40px + clamp(20px,4vw,52px))",
                    paddingRight: "clamp(20px,4vw,52px)",
                    paddingTop: "clamp(48px,9vh,80px)",
                    paddingBottom: "clamp(48px,9vh,80px)",
                  }}
                >
                  {/* TOP: Subtitle */}
                  <div className="text-center">
                    <BookSubtitle />
                  </div>

                  {/* CENTER: Title */}
                  <div className="flex flex-col items-center gap-6 my-auto">
                    <div className="flex flex-col items-center">
                      <BookTitle />
                    </div>

                    {/* Gold Foil Sprig Motif */}
                    <div style={{ color: "#C8A56A" }}>
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M16 28 C16 20 13 14 16 6 C17.5 2 16 0 16 0"
                          stroke="#C8A56A"
                          strokeWidth="1"
                          strokeLinecap="round"
                          style={{
                            filter:
                              "drop-shadow(0.5px 0.5px 0px rgba(255,235,190,0.5))",
                          }}
                        />
                        <path
                          d="M16 24 C10 22 7 18 6 14 C12 15 15 19 16 24Z"
                          fill="#C8A56A"
                          stroke="#B39257"
                          strokeWidth="0.3"
                        />
                        <path
                          d="M16 24 C22 22 25 18 26 14 C20 15 17 19 16 24Z"
                          fill="#C8A56A"
                          stroke="#B39257"
                          strokeWidth="0.3"
                        />
                        <path
                          d="M16 17 C11 15 9 12 8 8 C13 9 15 13 16 17Z"
                          fill="#C8A56A"
                          stroke="#B39257"
                          strokeWidth="0.3"
                        />
                        <path
                          d="M16 17 C21 15 23 12 24 8 C19 9 17 13 16 17Z"
                          fill="#C8A56A"
                          stroke="#B39257"
                          strokeWidth="0.3"
                        />
                        <circle cx="16" cy="1" r="1.5" fill="#C8A56A" />
                      </svg>
                    </div>
                  </div>

                  {/* BOTTOM: Author Name & Scroll Prompt */}
                  <div className="flex flex-col items-center gap-4">
                    <AuthorName />
                    {!isReadingActive && (
                      <div className="flex items-center gap-2 opacity-70 animate-pulse text-[#C8A56A]">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 5v14M19 12l-7 7-7-7" />
                        </svg>
                        <span
                          style={{
                            fontFamily: "var(--font-cormorant), serif",
                            fontSize: "11px",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                          }}
                        >
                          Scroll to Open
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </CoverSection>
            </div>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                BACK FACE: Inside Front Cover — Endpaper
                Faces user when rotateY = -180deg (Flat open on left half)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            {!isMobile && (
              <div
                className="absolute inset-0 w-full h-full backface-hidden rounded-none"
                style={{
                  transform: "rotateY(180deg)",
                  boxShadow:
                    "0 36px 84px rgba(58, 44, 30, 0.18), 0 14px 32px rgba(58, 44, 30, 0.09)",
                }}
              >
                <EndpaperPattern />
                <div className="absolute right-0 top-0 bottom-0 w-[4px] bg-gradient-to-l from-[#3A2C1E]/8 to-transparent z-30" />
                <div className="book-board-edge" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookOpeningAnimation() {
  return (
    <NavigationProvider>
      <BookOpeningAnimationInner />
    </NavigationProvider>
  );
}
