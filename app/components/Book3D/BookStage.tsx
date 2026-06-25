"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import dynamic from "next/dynamic";

gsap.registerPlugin(ScrollTrigger);

// Lazy-load the heavy 3D canvas — only on client
const BookScene = dynamic(() => import("./BookScene"), { ssr: false });

interface BookStageProps {
  onScrollComplete?: () => void;
}

export default function BookStage({ onScrollComplete }: BookStageProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const scrollProgress = useRef(0);

  const [phase, setPhase] = useState<"intro" | "zoom" | "open" | "transit">("intro");

  useGSAP(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: stageRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: false,
        onUpdate: (self) => {
          scrollProgress.current = self.progress;

          if (self.progress < 0.35) setPhase("intro");
          else if (self.progress < 0.72) setPhase("zoom");
          else if (self.progress < 0.95) setPhase("open");
          else {
            setPhase("transit");
            onScrollComplete?.();
          }
        },
      });

      // Fade cover text out as scroll begins
      gsap.to(textRef.current, {
        opacity: 0,
        y: -30,
        scrollTrigger: {
          trigger: stageRef.current,
          start: "top top",
          end: "20% top",
          scrub: 1,
        },
      });

      // Fade the whole sticky panel out as book opens and user exits
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: stageRef.current,
            start: "85% top",
            end: "95% top",
            scrub: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, { scope: stageRef });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouse.current = {
      x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
      y: -(((e.clientY - rect.top) / rect.height) * 2 - 1),
    };
  };

  return (
    // Tall section: 300vh gives the scroll space for all 3 phases
    <section
      ref={stageRef}
      id="home"
      style={{ height: "300vh", position: "relative" }}
    >
      {/* Sticky viewport — holds the 3D canvas */}
      <div
        ref={stickyRef}
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          background: "linear-gradient(135deg, #f7eddd 0%, #eadcc4 54%, #d6bc95 100%)",
        }}
        onMouseMove={handleMouseMove}
      >
        {/* 3D Canvas — full bleed */}
        <BookScene mouse={mouse} scrollProgress={scrollProgress} />

        {/* Cover text overlay */}
        <div
          ref={textRef}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "0 clamp(2.5rem, 8vw, 8rem)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "clamp(0.6rem, 0.75vw, 0.72rem)",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#879570",
              marginBottom: "1rem",
            }}
          >
            Parenting is not perfect.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(3rem, 7vw, 7rem)",
              fontWeight: 400,
              lineHeight: 0.9,
              color: "#2b251d",
              maxWidth: "9ch",
              margin: 0,
            }}
          >
            But presence
            <br />
            changes
            <br />
            <em style={{ color: "#8b6038" }}>everything.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "clamp(0.82rem, 1vw, 0.95rem)",
              lineHeight: 1.75,
              color: "#6c5c48",
              maxWidth: "32ch",
              marginTop: "1.5rem",
            }}
          >
            Poonam Choudhary · Author · Speaker · Parenting Guide
          </motion.p>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            style={{
              position: "absolute",
              bottom: "3rem",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
              pointerEvents: "none",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.58rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(90,75,60,0.5)",
              }}
            >
              Scroll to open
            </span>
            <ScrollArrow />
          </motion.div>
        </div>

        {/* White flash overlay for transition out */}
        <div
          ref={overlayRef}
          style={{
            position: "absolute",
            inset: 0,
            background: "#f7eddd",
            opacity: 0,
            zIndex: 5,
            pointerEvents: "none",
          }}
        />
      </div>
    </section>
  );
}

function ScrollArrow() {
  return (
    <motion.svg
      width="20"
      height="28"
      viewBox="0 0 20 28"
      fill="none"
      style={{ color: "rgba(90,75,60,0.45)" }}
      animate={{ y: [0, 5, 0] }}
      transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
    >
      <rect x="9" y="1" width="2" height="18" rx="1" fill="currentColor" />
      <path d="M2 19L10 27L18 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </motion.svg>
  );
}
