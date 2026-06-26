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
    
    // 1. Press effect: paper slightly compresses (scale down 3D)
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

  // Determine standard 3D transform values based on state
  const isOpened = bookState === "open" || bookState === "flipping";
  const isFlipped = bookState === "open" || bookState === "flipping";

  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-[#2C221A] overflow-hidden">
      {/* ========================================================
          PAGE LOAD SEQUENCE: Screen starts almost black, fades out
         ======================================================== */}
      <motion.div
        className="absolute inset-0 bg-[#0e0a08] z-50 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.8, ease: "easeInOut", delay: 0.2 }}
      />

      {/* Ambient lighting fades in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut", delay: 1.0 }}
        className="absolute inset-0 pointer-events-none z-10"
      >
        <AmbientLight />
      </motion.div>

      {/* Dust particles fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut", delay: 1.4 }}
        className="absolute inset-0 pointer-events-none z-10"
      >
        <DustParticles />
      </motion.div>

      {/* Book Spread Container */}
      <motion.div
        className="relative flex items-center justify-center perspective-1500"
        style={{
          width: isMobile ? "90vw" : "840px",
          height: isMobile ? "80vh" : "580px",
        }}
        animate={{
          // Shift left by 210px when closed on desktop to center the cover
          x: isMobile ? 0 : isOpened ? 0 : 210,
          scale: bookState === "pressing" ? 0.97 : 1,
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
          className={`absolute right-0 top-0 h-full bg-[#F8F3E8] shadow-[0_15px_40px_rgba(0,0,0,0.35)] transition-opacity duration-500 rounded-r-md ${
            isMobile 
              ? "left-0 w-full" 
              : "w-1/2"
          } ${isOpened ? "opacity-100 z-20" : "opacity-0 z-0"}`}
        >
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
            className="absolute inset-0 w-full h-full backface-hidden rounded-md shadow-[0_15px_35px_rgba(0,0,0,0.25)] flex flex-col justify-between p-8 md:p-12 overflow-hidden"
            style={{
              transform: "rotateY(0deg)",
              pointerEvents: isOpened ? "none" : "auto",
            }}
          >
            <PaperBackground />

            {/* Vintage line art illustration fades in */}
            <motion.div 
              className="mt-6 md:mt-8"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1], delay: 1.8 }}
            >
              <VintageIllustration />
            </motion.div>

            {/* Title, Subtitle, Author fade in sequentially */}
            <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8 my-auto">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1], delay: 2.2 }}
              >
                <BookTitle />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1], delay: 2.6 }}
              >
                <BookSubtitle />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1], delay: 3.0 }}
              >
                <AuthorName />
              </motion.div>
            </div>

            {/* Invitation CTA Button fades in last */}
            <motion.div 
              className="flex items-center justify-center mb-6"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1], delay: 3.4 }}
            >
              <OpenBookButton
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onClick={handleOpenBook}
              />
            </motion.div>

            {/* Page curl at bottom right */}
            <PageCurl isHovered={isHovered} isOpening={bookState === "pressing" || bookState === "flipping"} />
          </div>

          {/* B. BACK FACE: Inside Left Cover / Colophon (Hidden on mobile) */}
          {!isMobile && (
            <div 
              className="absolute inset-0 w-full h-full backface-hidden rounded-md shadow-[0_15px_35px_rgba(0,0,0,0.25)]"
              style={{
                transform: "rotateY(180deg)",
              }}
            >
              <PaperBackground />
              
              {/* Inside Left Cover Spread Contents */}
              <div className="w-full h-full flex flex-col justify-between p-8 md:p-12 text-center text-ink/60 relative">
                <div className="my-auto space-y-8 max-w-[280px] mx-auto z-10 font-sans">
                  <div className="font-display italic text-2xl text-ink/80">
                    Project Poonam
                  </div>
                  
                  <div className="w-12 h-[1px] bg-ink/20 mx-auto" />

                  <div className="space-y-3 text-[10px] tracking-[0.2em] leading-relaxed uppercase">
                    <p>First Edition</p>
                    <p>Designed & Coded in the Ether</p>
                    <p>Published Anno MMXXVI</p>
                  </div>

                  <div className="w-12 h-[1px] bg-ink/20 mx-auto" />

                  <p className="font-display italic text-xs text-ink/50 leading-relaxed">
                    "To build is to write a story in steel and sand, or in pixels and light."
                  </p>
                </div>

                <div className="text-[9px] text-ink/40 tracking-[0.2em] uppercase z-10">
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
