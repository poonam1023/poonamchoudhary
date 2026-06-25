"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { Feather, Heart, Mic2 } from "lucide-react";
import BotanicalCorner from "./BotanicalCorner";
import BookChapter from "./BookChapter";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const pillars = [
  {
    icon: Feather,
    title: "Author",
    description:
      "Three acclaimed books that have touched the hearts of families across the world, translating complex parenting wisdom into everyday moments.",
  },
  {
    icon: Mic2,
    title: "Speaker",
    description:
      "Over 200 keynotes and workshops at schools, institutions, and summits — bringing warmth and practical insight to every room she enters.",
  },
  {
    icon: Heart,
    title: "Guide",
    description:
      "A deeply personal journey from mother to guide, helping parents reconnect with the why behind their choices and their children.",
  },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <BookChapter
      id="author"
      number="01"
      label="Chapter One — Meet the Author"
      title="The author behind the work"
      subtitle="Before the books, talks, and guidance, there is a person listening closely to what families are trying to say."
      tone="paper"
    >
      <div ref={ref} className="relative">
      <BotanicalCorner position="tr" opacity={0.07} size={180} />
      <BotanicalCorner position="bl" opacity={0.06} size={160} />

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">

          {/* Left — portrait + decorative element */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Offset decorative box */}
            <div
              className="absolute top-6 left-6 w-full h-full rounded-2xl"
              style={{ background: "rgba(168, 178, 154, 0.15)", border: "1px solid rgba(168,178,154,0.3)" }}
            />
            <div className="relative img-zoom rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 8px 40px rgba(43,43,43,0.12)" }}>
              <Image
                src="/author-portrait.png"
                alt="Poonam Choudhary — Author and Parenting Speaker"
                width={580}
                height={700}
                className="object-cover w-full"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Floating quote */}
            <div
              className="absolute -bottom-8 -right-6 bg-[#F7F1E8] rounded-xl p-6 paper-shadow"
              style={{ maxWidth: "240px" }}
            >
              <p className="font-display text-[1.1rem] italic font-light text-[#2B2B2B] leading-[1.6] mb-3">
                &ldquo;Every child is a letter to a time we will not see.&rdquo;
              </p>
              <span className="font-script text-[#A8B29A] text-[0.95rem]">— Poonam Choudhary</span>
            </div>
          </motion.div>

          {/* Right — text content */}
          <div className="pt-4 lg:pt-8 flex flex-col gap-7">
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.15}
              variants={fadeUp}
            >
              <p className="font-body text-[1.05rem] text-[#6E5A4E] leading-[1.9]">
                Poonam Choudhary grew up surrounded by stories — not just the ones
                in books, but the ones whispered between mothers at kitchen tables,
                shared between fathers on evening walks, and lived quietly in the
                spaces between words.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.25}
              variants={fadeUp}
            >
              <p className="font-body text-[1.05rem] text-[#6E5A4E] leading-[1.9]">
                That early understanding — that <em>parenting is a practice, not a performance</em> — became the seed of everything she does. Today, through her books, workshops, and speaking engagements, she helps families across India and beyond find their way back to what matters most: connection.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.35}
              variants={fadeUp}
            >
              <p className="font-body text-[1.05rem] text-[#6E5A4E] leading-[1.9]">
                Her work draws from developmental psychology, mindfulness, and lived
                experience as a mother of two. But above all, it draws from her deep
                belief that the most important conversations we have as parents are
                the ones we have with ourselves.
              </p>
            </motion.div>

            {/* Credentials */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.45}
              variants={fadeUp}
              className="mt-4 grid grid-cols-2 gap-4"
            >
              {[
                "M.A. in Child Psychology",
                "Certified Mindfulness Educator",
                "TEDx Speaker",
                "National Book Award Nominee",
              ].map((cred) => (
                <div
                  key={cred}
                  className="flex items-start gap-2.5 p-3.5 rounded-lg"
                  style={{ background: "rgba(168,178,154,0.12)", border: "1px solid rgba(168,178,154,0.25)" }}
                >
                  <span className="w-1.5 h-1.5 mt-1.5 rounded-full flex-shrink-0 bg-[#A8B29A]" />
                  <span className="font-body text-[0.82rem] text-[#6E5A4E] leading-snug">{cred}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Pillars row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={0.1 * i + 0.5}
                variants={fadeUp}
                className="flex flex-col gap-4 p-8 rounded-xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(135deg, rgba(240,232,214,0.6) 0%, rgba(232,220,203,0.4) 100%)",
                  border: "1px solid rgba(196,204,184,0.5)",
                  boxShadow: "0 2px 12px rgba(43,43,43,0.04)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(168,178,154,0.2)", border: "1px solid rgba(168,178,154,0.4)" }}
                >
                  <Icon size={18} className="text-[#6E5A4E]" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-[1.4rem] font-medium text-[#2B2B2B]">
                  {pillar.title}
                </h3>
                <p className="font-body text-[0.9rem] text-[#6E5A4E] leading-[1.8]">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </BookChapter>
  );
}
