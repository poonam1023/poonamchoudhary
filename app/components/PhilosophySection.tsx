"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Heart, Leaf, MessageCircle, RotateCcw } from "lucide-react";
import BookChapter from "./BookChapter";

const principles = [
  {
    icon: Heart,
    title: "Presence before perfection",
    text: "Children do not need parents who never fail. They need adults who return, repair, and remain emotionally available.",
  },
  {
    icon: MessageCircle,
    title: "Connection before correction",
    text: "The most useful guidance begins with understanding what a child is trying to say beneath the behaviour.",
  },
  {
    icon: RotateCcw,
    title: "Repair before shame",
    text: "Every difficult moment can become a way back to trust when parents learn to pause, name, and reconnect.",
  },
];

export default function PhilosophySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <BookChapter
      id="philosophy"
      number="02"
      label="Chapter Two — Parenting Philosophy"
      title="The quiet work of raising humans"
      subtitle="Poonam's approach is not a method to perform. It is a way of seeing children, parents, and everyday moments with more honesty."
      tone="warm"
    >
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative rounded-sm p-8 lg:p-10"
          style={{
            background: "rgba(247,241,232,0.72)",
            border: "1px solid rgba(196,204,184,0.46)",
            boxShadow: "0 1rem 2rem rgba(43,43,43,0.05)",
          }}
        >
          <Leaf
            size={92}
            strokeWidth={1}
            className="absolute right-6 top-6 text-[#A8B29A]/20"
            aria-hidden="true"
          />
          <p className="font-display text-[2rem] lg:text-[2.6rem] leading-[1.12] text-[#2B2B2B]">
            Parenting is not a performance. It is a relationship practiced in ordinary moments.
          </p>
          <p className="mt-8 font-body text-[0.95rem] leading-[1.9] text-[#6E5A4E]">
            This chapter slows the reader down. It moves from admiration of the author into recognition:
            the feeling that this work understands the invisible pressure parents carry.
          </p>
        </motion.aside>

        <div className="grid grid-cols-1 gap-5">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.article
                key={principle.title}
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                className="grid grid-cols-[auto_1fr] gap-5 border-b border-[#D5CABC]/70 pb-6"
              >
                <span
                  className="mt-1 grid h-10 w-10 place-items-center rounded-full"
                  style={{
                    background: "rgba(168,178,154,0.13)",
                    border: "1px solid rgba(168,178,154,0.28)",
                  }}
                >
                  <Icon size={17} strokeWidth={1.4} className="text-[#6E5A4E]" />
                </span>
                <div>
                  <h3 className="font-display text-[1.6rem] leading-tight text-[#2B2B2B]">
                    {principle.title}
                  </h3>
                  <p className="mt-2 font-body text-[0.95rem] leading-[1.85] text-[#6E5A4E]">
                    {principle.text}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
      <p className="chapter-transition-note">
        Once the philosophy feels familiar, the reader is ready to hold the work in their hands.
      </p>
    </BookChapter>
  );
}
