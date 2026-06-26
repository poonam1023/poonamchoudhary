"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PaperBackground from "./PaperBackground";
import AmbientLight from "./AmbientLight";
import DustParticles from "./DustParticles";
import VintageIllustration from "./VintageIllustration";
import BookTitle from "./BookTitle";
import BookSubtitle from "./BookSubtitle";
import AuthorName from "./AuthorName";
import OpenBookButton from "./OpenBookButton";
import PageCurl from "./PageCurl";
import ChapterOne from "./ChapterOne";
import CoverSection from "./CoverSection";

export default function BookOpeningAnimation() {
  const [isHovered, setIsHovered] = useState(false);
  const [bookState, setBookState] = useState<"closed" | "pressing" | "flipping" | "open">("closed");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpenBook = async () => {
    if (bookState !== "closed") return;
    
    // 1. Press effect: paper compresses slightly
    setBookState("pressing");
    await new Promise((resolve) => setTimeout(resolve, 350));
    
    // 2. Start flipping the page
    setBookState("flipping");
    await new Promise((resolve) => setTimeout(resolve, 850));
    
    // 3. Page is fully open, show Chapter One
    setBookState("open");
  };

  const handleCloseBook = () => {
    setBookState("closed");
  };

  // 3D book open states
  const isOpened = bookState === "open" || bookState === "flipping";
  const isFlipped = bookState === "open" || bookState === "flipping";

  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-[#1A1412] overflow-hidden">
      {/* Cinematic Page Load: Screen starts almost black, fades out */}
      <motion.div
        className="absolute inset-0 bg-[#0c0807] z-50 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.8, ease: "easeInOut", delay: 0.2 }}
      />

      {/* Ambient lighting fades in (top-left) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.0, ease: "easeOut", delay: 1.0 }}
        className="absolute inset-0 pointer-events-none z-10"
      >
        <AmbientLight />
      </motion.div>

      {/* Dust particles & curved paper fibers fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.0, ease: "easeOut", delay: 1.4 }}
        className="absolute inset-0 pointer-events-none z-10"
      >
        <DustParticles />
      </motion.div>

      {/* Book Spread Container */}
      <motion.div
        className="relative flex items-center justify-center perspective-1500"
        style={{
          width: isMobile ? "90vw" : "920px",
          height: isMobile ? "80vh" : "620px",
        }}
        animate={{
          // Shift left by 230px (half a page) when closed to center the cover on screen
          x: isMobile ? 0 : isOpened ? 0 : -230,
          scale: bookState === "pressing" ? 0.98 : 1,
        }}
        transition={{
          duration: bookState === "pressing" ? 0.3 : 0.9,
          ease: [0.25, 1, 0.5, 1],
        }}
      >
        {/* ========================================================
            RIGHT PAGE / UNDERLAY: Chapter One
           ======================================================== */}
        <div 
          className={`absolute right-0 top-0 h-full bg-[#F7F1E8] transition-opacity duration-500 rounded-r-md ${
            isMobile 
              ? "left-0 w-full" 
              : "w-1/2"
          } ${isOpened ? "opacity-100 z-20" : "opacity-0 z-0"}`}
          style={{
            boxShadow: "0 25px 60px rgba(26, 20, 18, 0.45), 0 5px 20px rgba(26, 20, 18, 0.15)",
          }}
        >
          {/* Subtle inside cover spine crease */}
          {!isMobile && <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-r from-black/10 to-transparent z-30" />}
          
          {bookState === "open" && (
            <ChapterOne onClose={handleCloseBook} />
          )}
        </div>

        {/* ========================================================
            FLIP CARD: Cover Page (Front) & Inside Left Page (Back)
           ======================================================== */}
        <motion.div
          className="absolute right-0 top-0 h-full preserve-3d origin-left z-30"
          style={{
            width: isMobile ? "100%" : "50%",
          }}
          animate={{
            rotateY: isFlipped ? -180 : 0,
            opacity: isMobile && bookState === "open" ? 0 : 1,
          }}
          transition={{
            duration: 0.9,
            ease: [0.25, 1, 0.5, 1],
          }}
        >
          {/* A. FRONT FACE: The Book Cover */}
          <div 
            className="absolute inset-0 w-full h-full backface-hidden rounded-md flex flex-col justify-between overflow-hidden border border-[#6E5A4E]/10"
            style={{
              transform: "rotateY(0deg)",
              pointerEvents: isOpened ? "none" : "auto",
              boxShadow: "0 30px 70px rgba(26, 20, 18, 0.5), 0 10px 25px rgba(26, 20, 18, 0.2)",
            }}
          >
            <PaperBackground />

            {/* Book Spine Crease Shading */}
            <div className="book-spine-crease" />

            {/* Bevel highlight to simulate cardboard thickness */}
            <div className="book-board-edge" />

            {/* Layout Wrapper with responsive horizontal margins */}
            <CoverSection>
              {/* 1. Vintage Illustration (fades in) */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1], delay: 1.8 }}
                className="flex justify-center w-full"
              >
                <VintageIllustration />
              </motion.div>

              {/* 2. Typographical layout with exact spacing rhythm */}
              <div className="flex flex-col items-center justify-center w-full text-center">
                {/* Title (48px below illustration) */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1], delay: 2.2 }}
                  className="mt-12"
                >
                  <BookTitle />
                </motion.div>

                {/* Subtitle (24px below title) */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1], delay: 2.6 }}
                  className="mt-6"
                >
                  <BookSubtitle />
                </motion.div>

                {/* Author Name Section
                    Rhythm: Subtitle -> 28px -> BY -> 16px -> POONAM
                */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1], delay: 3.0 }}
                  className="mt-7"
                >
                  <AuthorName />
                </motion.div>

                {/* Button Invitation (40px below author) */}
                <motion.div 
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1], delay: 3.4 }}
                  className="mt-10"
                >
                  <OpenBookButton
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    onClick={handleOpenBook}
                  />
                </motion.div>
              </div>
            </CoverSection>

            {/* Page curl at bottom right */}
            <PageCurl isHovered={isHovered} isOpening={bookState === "pressing" || bookState === "flipping"} />
          </div>

          {/* B. BACK FACE: Inside Left Cover / Colophon (Hidden on mobile) */}
          {!isMobile && (
            <div 
              className="absolute inset-0 w-full h-full backface-hidden rounded-md border border-[#6E5A4E]/10"
              style={{
                transform: "rotateY(180deg)",
                boxShadow: "0 30px 70px rgba(26, 20, 18, 0.5), 0 10px 25px rgba(26, 20, 18, 0.2)",
              }}
            >
              <PaperBackground />

              {/* Inside Left Cover Spine Crease (mirrored) */}
              <div className="absolute right-0 top-0 bottom-0 w-[4px] bg-gradient-to-l from-black/10 to-transparent z-30" />
              <div className="book-board-edge" />
              
              {/* Inside Left Cover Spread Contents */}
              <div className="w-full h-full flex flex-col justify-between p-8 md:p-12 text-center text-ink/65 relative">
                <div className="my-auto space-y-8 max-w-[280px] mx-auto z-10 font-sans">
                  <div className="font-display italic text-2xl text-ink/85">
                    Project Poonam
                  </div>
                  
                  <div className="w-12 h-[1px] bg-ink/15 mx-auto" />

                  <div className="space-y-3 text-[10px] tracking-[0.2em] leading-relaxed uppercase">
                    <p>First Edition</p>
                    <p>Designed & Coded in the Ether</p>
                    <p>Published Anno MMXXVI</p>
                  </div>

                  <div className="w-12 h-[1px] bg-ink/15 mx-auto" />

                  <p className="font-display italic text-xs text-ink/45 leading-relaxed">
                    "To build is to write a story in steel and sand, or in pixels and light."
                  </p>
                </div>

                <div className="text-[9px] text-ink/35 tracking-[0.2em] uppercase z-10">
                  P. C. — 2026
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
