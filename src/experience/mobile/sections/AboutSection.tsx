"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "@/src/shared/hooks/useInView";
import { aboutContent } from "@/src/shared/data/content";
import { EASE_OUT } from "@/src/shared/utils/animations";
import SectionLabel from "../components/SectionLabel";
import BotanicalAccent from "../components/BotanicalAccent";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE_OUT } },
};


export default function AboutSection() {
  const [ref, inView] = useInView(0.12);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      ref={ref}
      style={{
        padding: "64px 0 72px",
        background: "#FAF8F4",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Warm wash */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: "-10%",
          right: "-10%",
          height: "50%",
          background:
            "linear-gradient(180deg, rgba(196,168,130,0.07) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ padding: "0 24px" }}>
        {/* Section label */}
        <motion.div
          custom={0}
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionLabel text={aboutContent.label} className="mb-6" />
        </motion.div>

        {/* Portrait image — editorial full-width */}
        <motion.div
          custom={1}
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4/3",
            borderRadius: "24px",
            overflow: "hidden",
            marginBottom: "32px",
            boxShadow: "0 12px 40px rgba(58,44,30,0.13)",
          }}
        >
          {/* Botanical overlay */}
          <BotanicalAccent
            variant="branch"
            opacity={0.09}
            color="#A8B29A"
            style={{
              position: "absolute",
              bottom: "8%",
              right: "-4%",
              width: "90px",
              height: "90px",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
          <Image
            src="/author-portrait.png"
            alt="Poonam Choudhary — Author and Parenting Guide"
            fill
            sizes="(max-width: 1023px) 100vw"
            className="object-cover"
            style={{ objectPosition: "center 20%" }}
          />
          {/* Warm overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, transparent 50%, rgba(58,44,30,0.18) 100%)",
            }}
          />
          {/* Role badge */}
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              left: "16px",
              zIndex: 3,
              background: "rgba(250,248,244,0.88)",
              backdropFilter: "blur(8px)",
              borderRadius: "10px",
              padding: "8px 14px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "0.18em",
                color: "#A8B29A",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              {aboutContent.role}
            </p>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          id="about-heading"
          custom={2}
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(32px, 8vw, 42px)",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#3A2C1E",
            letterSpacing: "-0.01em",
            marginBottom: "6px",
          }}
        >
          {aboutContent.headline}
        </motion.h2>

        {/* Thin divider */}
        <motion.div
          custom={3}
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <div style={{ width: "32px", height: "0.5px", background: "#C4A882", opacity: 0.5 }} />
          <svg width="14" height="8" viewBox="0 0 32 18" fill="none" stroke="#C4A882" strokeWidth="1.2" opacity="0.6">
            <path d="M2 9 C9 1 15 1 22 9 C25 12 28 13 31 10" strokeLinecap="round" />
          </svg>
          <div style={{ width: "32px", height: "0.5px", background: "#C4A882", opacity: 0.5 }} />
        </motion.div>

        {/* Bio paragraphs */}
        <motion.p
          custom={4}
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "17px",
            lineHeight: 1.72,
            color: "#4A3728",
            marginBottom: "16px",
          }}
        >
          {aboutContent.bio}
        </motion.p>
        <motion.p
          custom={5}
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "16px",
            lineHeight: 1.7,
            color: "#5A4A38",
            marginBottom: "28px",
          }}
        >
          {aboutContent.bio2}
        </motion.p>

        {/* Philosophy pull-quote */}
        <motion.blockquote
          custom={6}
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            margin: 0,
            padding: "20px 20px 20px 24px",
            borderLeft: "2px solid rgba(168,178,154,0.45)",
            background: "rgba(168,178,154,0.06)",
            borderRadius: "0 12px 12px 0",
            marginBottom: "28px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontStyle: "italic",
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#4A3728",
              margin: 0,
            }}
          >
            &ldquo;{aboutContent.philosophy}&rdquo;
          </p>
        </motion.blockquote>

        {/* Signature */}
        <motion.div
          custom={7}
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div style={{ position: "relative", width: "120px", height: "45px" }}>
            <Image
              src="/signature.png"
              alt="Poonam Choudhary signature"
              fill
              sizes="120px"
              className="object-contain"
              style={{ objectPosition: "left center", filter: "sepia(0.3) opacity(0.75)" }}
            />
          </div>
          <div>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "0.14em",
                color: "#A8B29A",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Bestselling Author
            </p>
            <p
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontStyle: "italic",
                fontSize: "12px",
                color: "#6E5A4E",
                margin: "2px 0 0",
              }}
            >
              of Conscious Parenting
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
