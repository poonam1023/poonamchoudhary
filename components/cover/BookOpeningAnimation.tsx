"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [coverLoaded, setCoverLoaded] = useState(true);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    setCoverLoaded(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-paper">
      <PaperBackground />
      <AmbientLight />
      <DustParticles />

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="cover"
            className="perspective-container relative min-h-screen"
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="preserve-3d transform-origin-left relative min-h-screen"
              animate={
                coverLoaded
                  ? { rotateY: 0 }
                  : { rotateY: 0 }
              }
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="backface-hidden relative flex min-h-screen flex-col items-center justify-center px-6 py-20"
                animate={
                  isOpen
                    ? {
                        rotateY: -180,
                        scale: 0.98,
                      }
                    : {
                        rotateY: 0,
                        scale: 1,
                      }
                }
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
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

                <PageCurl isHovered={isHovered} />
              </motion.div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="chapter"
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <ChapterOne onClose={handleClose} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
