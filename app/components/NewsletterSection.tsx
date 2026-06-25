"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";
import BotanicalCorner from "./BotanicalCorner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function NewsletterSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section
      id="newsletter"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{ background: "#E8DCCB" }}
      aria-labelledby="newsletter-heading"
    >
      <BotanicalCorner position="tl" opacity={0.1} size={220} />
      <BotanicalCorner position="br" opacity={0.1} size={220} />

      {/* Warm gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,169,110,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          variants={fadeUp}
          className="mb-4"
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "rgba(168,178,154,0.2)", border: "1.5px solid rgba(168,178,154,0.5)" }}
          >
            <Mail size={20} className="text-[#6E5A4E]" strokeWidth={1.5} />
          </div>
          <span className="section-label">Letters from Poonam</span>
          <div className="section-rule w-full max-w-xs mx-auto" />
        </motion.div>

        <motion.h2
          id="newsletter-heading"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.1}
          variants={fadeUp}
          className="font-display text-[2.4rem] sm:text-[3rem] lg:text-[3.5rem] font-light leading-tight text-[#2B2B2B] text-balance mb-5"
        >
          Words Delivered{" "}
          <em className="italic font-light text-[#6E5A4E]">to Your Inbox</em>
        </motion.h2>

        <motion.p
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.2}
          variants={fadeUp}
          className="font-body text-[1rem] text-[#6E5A4E] leading-[1.85] mb-10 max-w-[480px] mx-auto"
        >
          A personal letter from Poonam, twice a month. Thoughtful reflections
          on parenting, family, and the beautiful mess of raising children.
          No noise. No promotions. Just honest words.
        </motion.p>

        {/* Form */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.3}
          variants={fadeUp}
        >
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-[480px] mx-auto"
              aria-label="Newsletter subscription form"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Your email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="newsletter-input flex-1"
                aria-required="true"
              />
              <button
                id="btn-newsletter-subscribe"
                type="submit"
                disabled={loading}
                className="btn-primary whitespace-nowrap justify-center"
                aria-label="Subscribe to Poonam's newsletter"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="block w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                    />
                    Sending...
                  </span>
                ) : (
                  <>
                    Subscribe
                    <Send size={14} />
                  </>
                )}
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-3 py-4"
              role="status"
              aria-live="polite"
            >
              <CheckCircle size={32} className="text-[#A8B29A]" strokeWidth={1.5} />
              <p className="font-display text-[1.4rem] font-light text-[#2B2B2B]">
                You&apos;re on the list.
              </p>
              <p className="font-body text-[0.9rem] text-[#6E5A4E]">
                Expect a warm welcome letter soon.
              </p>
            </motion.div>
          )}

          {!submitted && (
            <p className="font-body text-[0.75rem] text-[#9E8A7E] mt-4">
              No spam. Unsubscribe any time. Your privacy is sacred.
            </p>
          )}
        </motion.div>

        {/* Divider quote */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.4}
          variants={fadeUp}
          className="mt-14 pt-10 border-t border-[rgba(196,204,184,0.5)]"
        >
          <p className="font-display text-[1.3rem] sm:text-[1.5rem] font-light italic text-[#6E5A4E] leading-[1.6]">
            "The most beautiful thing a parent can give a child is
            a childhood worth remembering."
          </p>
          <span className="font-script text-[#A8B29A] text-[1.05rem] mt-2 block">
            — Poonam Choudhary
          </span>
        </motion.div>
      </div>
    </section>
  );
}
