"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "@/src/shared/hooks/useInView";
import { bookContent } from "@/src/shared/data/content";
import { EASE_OUT } from "@/src/shared/utils/animations";
import SectionLabel from "../components/SectionLabel";

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE_OUT } },
};


export default function BookSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      id="book"
      aria-labelledby="book-heading"
      ref={ref}
      style={{
        padding: "64px 24px 72px",
        background: "linear-gradient(180deg, #EDE5D8 0%, #F4EFE6 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Warm radial accent */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "0",
          right: "-20%",
          width: "60%",
          height: "50%",
          background: "radial-gradient(circle, rgba(196,168,130,0.15) 0%, transparent 70%)",
          filter: "blur(30px)",
          pointerEvents: "none",
        }}
      />

      {/* Section label */}
      <motion.div
        custom={0}
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <SectionLabel text={bookContent.label} className="mb-6" />
      </motion.div>

      {/* Title */}
      <motion.h2
        id="book-heading"
        custom={1}
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "clamp(30px, 7.5vw, 40px)",
          fontWeight: 700,
          lineHeight: 1.15,
          color: "#3A2C1E",
          letterSpacing: "-0.01em",
          marginBottom: "28px",
        }}
      >
        {bookContent.title}
      </motion.h2>

      {/* Book cover — 3D tilted presentation */}
      <motion.div
        custom={2}
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "36px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "58%",
            aspectRatio: "3/4",
            transform: "perspective(600px) rotateY(-8deg) rotateX(2deg)",
            boxShadow:
              "8px 12px 32px rgba(58,44,30,0.22), 2px 4px 8px rgba(58,44,30,0.12), -2px 0 6px rgba(250,248,244,0.5)",
            borderRadius: "4px",
          }}
        >
          <img
            src="/book-cover.png?v=3"
            alt="The Little Guide to Parenting by Poonam Choudhary"
            className="object-cover"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "4px",
            }}
          />
          {/* Page stack edge */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "2px",
              bottom: "2px",
              right: "-6px",
              width: "6px",
              background:
                "repeating-linear-gradient(to bottom, #FAF8F4 0px, #FAF8F4 1.5px, #EDE5D8 1.5px, #EDE5D8 2.5px)",
              borderRadius: "0 2px 2px 0",
            }}
          />
        </div>
      </motion.div>

      {/* Description */}
      <motion.p
        custom={3}
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "17px",
          lineHeight: 1.68,
          color: "#4A3728",
          marginBottom: "28px",
        }}
      >
        {bookContent.description}
      </motion.p>

      {/* Highlights */}
      <motion.ul
        custom={4}
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          listStyle: "none",
          margin: "0 0 32px",
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {bookContent.highlights.map((highlight, i) => (
          <li
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
            }}
          >
            <span
              style={{
                color: "#A8B29A",
                flexShrink: 0,
                marginTop: "2px",
              }}
            >
              <CheckIcon />
            </span>
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "13px",
                lineHeight: 1.6,
                color: "#4A3728",
              }}
            >
              {highlight}
            </span>
          </li>
        ))}
      </motion.ul>

      {/* CTAs */}
      <motion.div
        custom={5}
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{ display: "flex", gap: "12px" }}
      >
        <a
          href="#"
          id="book-buy-now"
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "52px",
            borderRadius: "14px",
            background: "#A8B29A",
            color: "#FAF8F4",
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
            boxShadow: "0 4px 14px rgba(168,178,154,0.35)",
          }}
        >
          {bookContent.primaryCta}
        </a>
        <a
          href="#"
          id="book-learn-more"
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "52px",
            borderRadius: "14px",
            background: "transparent",
            color: "#4A3728",
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.06em",
            textDecoration: "none",
            border: "1px solid rgba(110,90,78,0.18)",
          }}
        >
          {bookContent.secondaryCta}
        </a>
      </motion.div>
    </section>
  );
}
