"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Star } from "lucide-react";
import BookChapter from "./BookChapter";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const testimonials = [
  {
    id: "t-1",
    quote:
      "Poonam's book changed the way I speak to my daughter. Not with tips and tactics — with a fundamental shift in how I see her. That's rare.",
    author: "Meera Krishnan",
    role: "Mother of two, Bengaluru",
    rating: 5,
  },
  {
    id: "t-2",
    quote:
      "I walked into her workshop expecting a lecture and walked out having a conversation I didn't know I needed to have with myself.",
    author: "Rajat Sharma",
    role: "Father & School Counsellor, Delhi",
    rating: 5,
  },
  {
    id: "t-3",
    quote:
      "Reading 'The Present Parent' felt like sitting with a wise friend who truly understood what modern parenting feels like. Honest, warm, real.",
    author: "Ananya Iyer",
    role: "Pediatrician & Mother, Mumbai",
    rating: 5,
  },
  {
    id: "t-4",
    quote:
      "Our school invited Poonam for a parent workshop and the feedback was unlike anything we've seen. Families were still talking about it months later.",
    author: "Priya Nair",
    role: "Principal, The Heritage School",
    rating: 5,
  },
  {
    id: "t-5",
    quote:
      "She doesn't tell you how to be a better parent. She reminds you of who you already are — and that makes all the difference.",
    author: "Sunita Joshi",
    role: "Author & Workshop Attendee",
    rating: 5,
  },
  {
    id: "t-6",
    quote:
      "I bought 'Raising with Heart' as a gift for a friend and then kept it for myself. Every chapter felt personally written for me.",
    author: "Kiran Desai",
    role: "Father, Pune",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <BookChapter
      id="readers"
      number="04"
      label="Chapter Four — Reader Margins"
      title="Notes left by families"
      subtitle="The work becomes real in the margins: in remembered conversations, repaired evenings, and parents who feel less alone."
      tone="paper"
    >
      <div ref={ref} className="relative">
      {/* Decorative line pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #6E5A4E, #6E5A4E 1px, transparent 1px, transparent 60px)",
        }}
      />

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.id}
              id={t.id}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.05 * i + 0.05}
              variants={fadeUp}
              className="testimonial-card group hover:-translate-y-1 transition-transform duration-300"
              aria-label={`Testimonial from ${t.author}`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={13}
                    fill="#C9A96E"
                    stroke="none"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-display text-[1.05rem] font-light italic leading-[1.75] text-[#2B2B2B] mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <footer className="flex items-center gap-3 pt-5 border-t border-[rgba(196,204,184,0.4)]">
                {/* Avatar placeholder */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(168,178,154,0.2)", border: "1.5px solid rgba(168,178,154,0.4)" }}
                  aria-hidden="true"
                >
                  <span className="font-display text-[0.9rem] font-medium text-[#6E5A4E]">
                    {t.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-body text-[0.88rem] font-semibold text-[#2B2B2B]">
                    {t.author}
                  </p>
                  <p className="font-body text-[0.78rem] text-[#9E8A7E]">{t.role}</p>
                </div>
              </footer>
            </motion.article>
          ))}
        </div>

        {/* Press logos row */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.5}
          variants={fadeUp}
          className="mt-20"
        >
          <p className="font-body text-[0.72rem] text-[#9E8A7E] tracking-[0.2em] uppercase text-center mb-8">
            Featured In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14 opacity-40">
            {[
              "The Hindu",
              "Times of India",
              "Hindustan Times",
              "India Today",
              "Femina",
              "Scroll.in",
            ].map((pub) => (
              <span
                key={pub}
                className="font-display text-[1.05rem] font-medium text-[#6E5A4E] tracking-tight whitespace-nowrap"
              >
                {pub}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
      <p className="chapter-transition-note">
        From reader stories, the book opens into ongoing essays and resources.
      </p>
    </BookChapter>
  );
}
