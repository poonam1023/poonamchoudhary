"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import PaperBackground from "./PaperBackground";
import AmbientLight from "./AmbientLight";
import DustParticles from "./DustParticles";
import VintageIllustration from "./VintageIllustration";
import PageCurl from "./PageCurl";
import OpenBookButton from "./OpenBookButton";
import ChapterOne from "./ChapterOne";

export default function BookOpeningAnimation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  return (
    <div className="relative min-h-screen bg-paper">
      <PaperBackground />
      <AmbientLight />
      <DustParticles />

      <div className="perspective-container relative min-h-screen">
        {/* Chapter page — rendered underneath the cover */}
        <motion.div
          className="relative min-h-screen"
          animate={
            isOpen
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: isOpen ? 0.6 : 0 }}
        >
          <ChapterOne onClose={handleClose} />
        </motion.div>

        {/* Cover page — on top, rotates on left edge */}
        <motion.div
          className="backface-hidden transform-origin-left preserve-3d absolute inset-0 z-10"
          animate={{ rotateY: isOpen ? -180 : 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 py-20">
            <div className="mx-auto w-full max-w-lg text-center">
              <VintageIllustration />

              <h1 className="mb-3 font-display text-5xl font-light tracking-tight text-ink sm:text-6xl">
                Poonam
              </h1>

              <p className="mb-2 font-display text-lg italic text-ink-brown/70">
                A Novel
              </p>

              <div className="mx-auto mb-6 w-16 border-t border-gold-muted/40" />

              <p className="mb-10 font-sans text-sm uppercase tracking-[0.3em] text-ink-brown/60">
                Poonam Choudhary
              </p>

              <OpenBookButton
                onHover={setIsHovered}
                onClick={handleOpen}
              />
            </div>
          </div>

          <PageCurl isHovered={isHovered} />
        </motion.div>
      </div>
    </div>
  );
}
