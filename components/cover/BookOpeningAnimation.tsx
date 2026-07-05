"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import PaperBackground from "./PaperBackground";
import BookTitle from "./BookTitle";
import BookSubtitle from "./BookSubtitle";
import AuthorName from "./AuthorName";
import OpenBookButton from "./OpenBookButton";
import PageCurl from "./PageCurl";
import ChapterOne from "./ChapterOne";
import CoverSection from "./CoverSection";
import WritingDeskBackground from "./WritingDeskBackground";

import QuoteCard from "@/components/decorations/QuoteCard";
import PressedFlower from "@/components/decorations/PressedFlower";
import LeftPage from "@/components/book/LeftPage";
import { NavigationProvider, useNavigation } from "@/hooks/useNavigation";

function BookOpeningAnimationInner() {
  const [isHovered, setIsHovered] = useState(false);
  const {
    state,
    openingPhase,
    isMobile,
    openBook,
    closeBook,
  } = useNavigation();
  const [mountPhase, setMountPhase] = useState<"black" | "windowLight" | "desk" | "book" | "details" | "cta">("black");

  const isAnimating = ["opening", "closing", "transitioning"].includes(state);
  const handleHoverStart = useCallback(() => setIsHovered(true), []);
  const handleHoverEnd = useCallback(() => setIsHovered(false), []);

  // Cinematic mount sequence
  useEffect(() => {
    const phases = [
      { name: "windowLight" as const, delay: 400 },
      { name: "desk" as const, delay: 1200 },
      { name: "book" as const, delay: 2200 },
      { name: "details" as const, delay: 3200 },
      { name: "cta" as const, delay: 4200 },
    ];
    phases.forEach(({ name, delay }) => {
      const timer = setTimeout(() => setMountPhase(name), delay);
      return () => clearTimeout(timer);
    });
    // Cleanup
    const cleanup = setTimeout(() => {
      // nothing extra needed
    }, 5000);
    return () => clearTimeout(cleanup);
  }, []);

  const isOpened = state === "open" || state === "transitioning" || (state === "opening" && openingPhase === "flipping");
  const isFlipped = state === "open" || state === "transitioning" || (state === "opening" && openingPhase === "flipping");
  const isPressing = state === "opening" && openingPhase === "pressing";

  return (
    <div
      className={`relative w-screen h-screen flex items-center justify-center overflow-hidden ${
        isAnimating ? "book-animating" : ""
      }`}
      style={{ background: "#1A1410" }}
    >
      {/* Layer 0: Initial black screen (fades to reveal) */}
      <motion.div
        className="absolute inset-0 bg-[#0A0806] z-50 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }}
      />

      {/* Layer 1: Writing Desk Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: mountPhase === "black" ? 0 : 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
      >
        <WritingDeskBackground />
      </motion.div>

      {/* Layer 2: Window light beam (trapezoid parallelogram, warm, static) */}
      <motion.div
        className="absolute inset-0 z-5 pointer-events-none select-none"
        initial={{ opacity: 0 }}
        animate={{
          opacity: ["black", "windowLight"].includes(mountPhase) ? 0 : 0.08,
        }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
      >
        <div
          className="absolute w-[70%] h-[120%]"
          style={{
            top: "-10%",
            left: "15%",
            background:
              "linear-gradient(135deg, rgba(255,248,230,0.12) 0%, rgba(255,240,215,0.06) 50%, transparent 80%)",
            clipPath: "polygon(10% 0%, 90% 0%, 70% 100%, 20% 100%)",
            transformOrigin: "center center",
          }}
        />
      </motion.div>

      {/* Layer 4: 3D Book Perspective Wrapper */}
      <motion.div
        className="relative z-20"
        style={
          isMobile
            ? { width: "90vw", height: "80vh" }
            : {
                width: "min(96vw, 1800px)",
                height: "90vh",
                perspective: "1500px",
                willChange: "transform",
              }
        }
      >
        {/* Book Spread Container */}
        <motion.div
          className="relative flex items-center justify-center w-full h-full"
          style={
            isMobile
              ? {}
              : {
                  willChange: isAnimating ? "transform" : "auto",
                }
          }
          animate={{
            x: isMobile ? 0 : isOpened ? 0 : "-25%",
            rotate: isOpened ? 0 : -0.7,
            scale: isPressing ? 0.985 : isMobile ? 1 : 1,
          }}
          transition={{
            duration: isPressing ? 0.35 : 0.9,
            ease: [0.25, 1, 0.5, 1],
          }}
        >


          {/* Back cover board */}
          {!isOpened && (
            <div
              className="absolute right-0 top-0 h-full bg-[#FAF7F2] border border-[#6E5A4E]/6 rounded-none pointer-events-none"
              style={{
                width: isMobile ? "100%" : "50%",
                transform: "translate3d(4px, 4px, -10px) rotate(-0.7deg)",
                boxShadow: "0 42px 96px rgba(58, 44, 30, 0.22)",
              }}
            />
          )}

          {/* Page stack edge */}
          {!isOpened && (
            <div
              className="absolute right-0 top-0 h-full bg-[#FAF7F2] border-y border-r border-[#6E5A4E]/6 rounded-none pointer-events-none overflow-hidden"
              style={{
                width: isMobile ? "100%" : "50%",
                transform: "translate3d(2px, 2px, -5px) rotate(-0.7deg)",
                backgroundImage:
                  "repeating-linear-gradient(to bottom, #FAF7F2, #FAF7F2 2px, #F7F1E8 2px, #F7F1E8 3px)",
              }}
            />
          )}

          {/* Right page / Chapter One */}
          <div
            className={`absolute right-0 top-0 h-full bg-[#F7F1E8] transition-opacity duration-500 rounded-none ${
              isMobile ? "left-0 w-full" : "w-1/2"
            } ${isOpened ? "opacity-100 z-20" : "opacity-0 z-0"}`}
            style={{
              boxShadow:
                "0 46px 115px rgba(16, 9, 5, 0.48), 0 18px 40px rgba(16, 9, 5, 0.28)",
            }}
          >
            {!isMobile && (
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-r from-[#3A2C1E]/8 to-transparent z-30" />
            )}
            <div className="book-board-edge" />
            {(state === "open" || state === "transitioning") && <ChapterOne onClose={closeBook} />}
          </div>

          {/* Flip card: Cover Page */}
          <motion.div
            className="absolute right-0 top-0 h-full preserve-3d origin-left"
            style={{
              width: isMobile ? "100%" : "50%",
              willChange: isAnimating ? "transform, opacity" : "auto",
            }}
            animate={{
              rotateY: isFlipped ? -180 : 0,
              opacity: isMobile && (state === "open" || state === "transitioning") ? 0 : 1,
              zIndex: (state === "open" || state === "transitioning") ? 10 : 30,
            }}
            transition={{
              duration: 0.9,
              ease: [0.25, 1, 0.5, 1],
            }}
          >
            {/* FRONT: Book Cover */}
            <div
              className="absolute inset-0 w-full h-full backface-hidden rounded-none flex flex-col justify-between overflow-hidden border border-[#6E5A4E]/10"
              style={{
                transform: "rotateY(0deg)",
                pointerEvents: isOpened ? "none" : "auto",
                boxShadow:
                  "0 36px 84px rgba(58, 44, 30, 0.18), 0 14px 32px rgba(58, 44, 30, 0.09)",
              }}
            >
              <PaperBackground />
              <div className="book-spine-crease" />
              <div className="book-board-edge" />

              {/* Spine graphics */}
              {!isMobile && (
                <div
                  className="absolute left-0 top-0 bottom-0 w-[44px] flex flex-col items-center justify-between py-10 z-20 pointer-events-none select-none"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(78, 60, 48, 0.12) 0%, rgba(110, 90, 78, 0.02) 20%, rgba(110, 90, 78, 0.01) 80%, rgba(58, 44, 30, 0.28) 100%),
                      repeating-linear-gradient(90deg, rgba(58, 44, 30, 0.025) 0px, rgba(58, 44, 30, 0.025) 1px, transparent 1px, transparent 4px),
                      repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.035) 0px, rgba(255, 255, 255, 0.035) 1px, transparent 1px, transparent 4px)
                    `,
                    backgroundSize: "auto, 4px 4px, 4px 4px",
                    boxShadow: "inset -2px 0 5px rgba(0, 0, 0, 0.15), 1px 0 3px rgba(255, 255, 255, 0.1)",
                  }}
                >
                  {/* Spine title — book philosophy */}
                  <div
                    className="font-sans text-[6px] tracking-[0.20em] text-ink/45 uppercase"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                      lineHeight: 1.5,
                    }}
                  >
                    Raising Ourselves Before We Raise Our Children
                  </div>
                  {/* Author at bottom of spine */}
                  <div
                    className="font-display text-[7px] tracking-[0.16em] text-ink/55"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    Poonam Choudhary
                  </div>
                </div>
              )}

              {/* Botanical element — elegant eucalyptus bleeding off top-right corner.
                   Feels like a real dried sprig pressed inside the book. */}
              <PressedFlower
                variant="eucalyptus"
                scale={2.1}
                opacity={0.42}
                position={{ top: "-18%", right: "-12%" }}
                rotation={18}
                style={{ zIndex: 2, width: "200px", height: "400px", filter: "drop-shadow(2px 5px 8px rgba(60,70,55,0.16))" }}
              />

              {/* ─────────────────────────────────────────────────────────
                   EDITORIAL COVER — Vertical Rhythm Layout
                   ─────────────────────────────────────────────────────── */}
              <CoverSection>
                <div className="w-full h-full flex flex-col justify-between pl-0 md:pl-[44px]" style={{ padding: "clamp(28px, 4vh, 52px) clamp(20px, 3vw, 44px)" }}>

                  {/* ── TOP: Philosophy line — quiet, wide-tracked ── */}
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.6, ease: [0.25, 1, 0.5, 1], delay: 2.0 }}
                    className="text-left"
                  >
                    <BookSubtitle />
                  </motion.div>

                  {/* ── CENTER: Author name — the hero ── */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1], delay: 2.4 }}
                    className="flex flex-col items-center"
                  >
                    <BookTitle />
                  </motion.div>

                  {/* ── IDENTITY STRIP: Professional icons ── */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1], delay: 2.9 }}
                    className="flex justify-center"
                  >
                    <AuthorName />
                  </motion.div>

                  {/* ── QUOTE CARD — torn paper, masking tape ── */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1], delay: 3.2 }}
                    className="flex flex-col items-center gap-5 z-20"
                  >
                    <QuoteCard
                      quote="We do not raise our children; we raise ourselves to meet them."
                      author="Poonam Choudhary"
                      width="clamp(180px, 28vw, 260px)"
                      rotation={-1.2}
                      scale={0.85}
                      className="mx-auto"
                    />

                    {/* ── CTA Button ── */}
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 3.6 }}
                    >
                      <OpenBookButton
                        onHoverStart={handleHoverStart}
                        onHoverEnd={handleHoverEnd}
                        onClick={openBook}
                      />
                    </motion.div>
                  </motion.div>

                </div>
              </CoverSection>

              <PageCurl
                isHovered={isHovered}
                isOpening={state === "opening"}
              />
            </div>

            {/* BACK: Inside Left Cover */}
            {!isMobile && (
              <div
                className="absolute inset-0 w-full h-full backface-hidden rounded-none border border-[#6E5A4E]/10"
                style={{
                  transform: "rotateY(180deg)",
                  boxShadow:
                    "0 36px 84px rgba(58, 44, 30, 0.18), 0 14px 32px rgba(58, 44, 30, 0.09)",
                }}
              >
                <LeftPage>
                  <></>
                </LeftPage>
                <div className="absolute right-0 top-0 bottom-0 w-[4px] bg-gradient-to-l from-[#3A2C1E]/8 to-transparent z-30" />
                <div className="book-board-edge" />
              </div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>

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
