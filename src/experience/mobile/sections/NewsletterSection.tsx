"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "@/src/shared/hooks/useInView";
import { newsletterContent } from "@/src/shared/data/content";
import { EASE_OUT } from "@/src/shared/utils/animations";
import BotanicalAccent from "../components/BotanicalAccent";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};


export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [ref, inView] = useInView(0.1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-heading"
      ref={ref}
      style={{
        padding: "64px 24px 72px",
        background: "linear-gradient(170deg, #EDE5D8 0%, #E8DDD0 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background botanical */}
      <BotanicalAccent
        variant="branch"
        opacity={0.08}
        color="#A8B29A"
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-4%",
          width: "120px",
          height: "120px",
          pointerEvents: "none",
        }}
      />
      <BotanicalAccent
        variant="sprig"
        opacity={0.07}
        color="#C4A882"
        style={{
          position: "absolute",
          top: "5%",
          left: "-5%",
          width: "90px",
          height: "90px",
          pointerEvents: "none",
        }}
      />

      {/* Envelope icon */}
      <motion.div
        custom={0}
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "16px",
          background: "rgba(168,178,154,0.18)",
          border: "1px solid rgba(168,178,154,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#A8B29A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </motion.div>

      {/* Label */}
      <motion.p
        custom={1}
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.2em",
          color: "#A8B29A",
          textTransform: "uppercase",
          marginBottom: "10px",
        }}
      >
        {newsletterContent.label}
      </motion.p>

      {/* Heading */}
      <motion.h2
        id="newsletter-heading"
        custom={2}
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "clamp(26px, 7vw, 34px)",
          fontWeight: 600,
          lineHeight: 1.25,
          color: "#3A2C1E",
          marginBottom: "10px",
          letterSpacing: "-0.01em",
        }}
      >
        {newsletterContent.headline}
      </motion.h2>

      {/* Subline */}
      <motion.p
        custom={3}
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "13px",
          lineHeight: 1.6,
          color: "#6E5A4E",
          marginBottom: "32px",
        }}
      >
        {newsletterContent.subline}
      </motion.p>

      {/* Form */}
      {!submitted ? (
        <motion.form
          custom={4}
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          onSubmit={handleSubmit}
          aria-label="Newsletter subscription form"
          style={{ display: "flex", flexDirection: "column", gap: "12px" }}
        >
          <input
            type="email"
            id="newsletter-email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={newsletterContent.placeholder}
            required
            aria-label="Email address"
            style={{
              width: "100%",
              minHeight: "52px",
              padding: "0 18px",
              borderRadius: "14px",
              border: "1px solid rgba(110,90,78,0.15)",
              background: "rgba(250,248,244,0.9)",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "14px",
              color: "#3A2C1E",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
          <button
            type="submit"
            id="newsletter-submit"
            style={{
              width: "100%",
              minHeight: "52px",
              borderRadius: "14px",
              background: "#A8B29A",
              color: "#FAF8F4",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(168,178,154,0.35)",
              transition: "background 0.2s ease",
            }}
          >
            {newsletterContent.cta}
          </button>
        </motion.form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            padding: "28px 24px",
            borderRadius: "18px",
            background: "rgba(168,178,154,0.12)",
            border: "1px solid rgba(168,178,154,0.25)",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "32px", marginBottom: "12px" }}>🌿</div>
          <p
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "20px",
              fontStyle: "italic",
              color: "#4A3728",
              margin: 0,
            }}
          >
            Thank you for joining our journey.
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "12px",
              color: "#6E5A4E",
              marginTop: "8px",
            }}
          >
            A warm welcome awaits in your inbox.
          </p>
        </motion.div>
      )}
    </section>
  );
}
