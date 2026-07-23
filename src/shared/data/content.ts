import type { Pillar, Testimonial, Article } from "../types";

// ─── Chapter 01: Hero / Introduction ──────────────────────────────────────

export const heroContent = {
  chapterNum: "01",
  chapterLabel: "INTRODUCTION",
  tagline: "CONSCIOUS PARENTING GUIDE",
  headline: "Guiding parents.",
  headlineItalic: "Inspiring change.",
  subline:
    "Practical guidance and heartfelt insights for raising confident, kind and emotionally strong children.",
  primaryCta: "Explore The Book",
  secondaryCta: "Read Articles",
  quote: "There is no perfect parent, only a present one.",
  quoteAuthor: "— Poonam Choudhary",
  authorTitle: "AUTHOR · SPEAKER · PARENTING GUIDE",
};

// ─── Chapter 02: Mission ───────────────────────────────────────────────────

export const missionContent = {
  chapterNum: "02",
  chapterLabel: "MISSION",
  headline: "Helping parents raise",
  headlineHighlight: "confident, kind",
  headlineContinue: "and emotionally strong children.",
  statement:
    "Parenting is not about shaping a child into who we think they should be. It is about creating the safe space and deep connection for them to become who they truly are.",
  cta: "More About The Journey →",
};

export const missionPillars: Pillar[] = [
  {
    num: "01",
    title: "Stronger Connections",
    description:
      "Build deeper bonds with your child based on trust, presence, and genuine understanding.",
    icon: "heart",
  },
  {
    num: "02",
    title: "Emotional Growth",
    description:
      "Help your child navigate big feelings and grow emotionally resilient in today's fast world.",
    icon: "sprout",
  },
  {
    num: "03",
    title: "Mindful Parenting",
    description:
      "Simple, grounded approaches to handle daily parenting challenges with calm and grace.",
    icon: "leaf",
  },
];

// ─── Chapter 03: About Author ──────────────────────────────────────────────

export const aboutContent = {
  chapterNum: "03",
  chapterLabel: "MEET THE AUTHOR",
  headline: "Poonam Choudhary",
  role: "AUTHOR · SPEAKER · PARENTING GUIDE",
  bioParagraph1:
    "Poonam Choudhary is a dedicated parenting guide, author, and speaker passionate about helping families transition from daily survival mode into deep, conscious connection.",
  bioQuote:
    "Presence before perfection. Connection before correction.",
  bioParagraph2:
    "Rooted in empathy and practical wisdom, her work encourages parents to slow down, listen deeply, and cultivate an environment where children feel truly seen, heard, and valued.",
  bioHighlight:
    "Her writing bridges emotional intelligence with everyday parenting scenarios, giving parents actionable tools that build trust and lifelong resilience.",
  philosophy: "Presence before perfection. Connection before correction.",
  authorBadge: ["AUTHOR", "SPEAKER", "PARENTING GUIDE"],
};

// ─── Chapter 04: The Book ──────────────────────────────────────────────────

export const bookContent = {
  chapterNum: "04",
  chapterLabel: "THE BOOK",
  title: "The Little Guide to Parenting",
  subtitle: "Conscious · Intentional · Growth",
  description:
    "A practical and heartfelt guide for parents who want to cultivate authentic connection and raise emotionally confident children in a modern world.",
  primaryCta: "BUY BOOK",
  secondaryCta: "READ SAMPLE",
  tertiaryCta: "LEARN MORE",
  featurePills: [
    "✓ Practical Advice",
    "✓ Emotional Intelligence",
    "✓ Everyday Parenting",
    "✓ Real Stories",
  ],
  highlights: [
    "Practical Advice — Real-life parenting solutions that actually work.",
    "Easy to Follow — Simple strategies for everyday parenting challenges.",
    "Heartfelt & Relatable — Written with empathy, warmth and real experiences.",
  ],
};

// ─── Chapter 05: Book Philosophy ──────────────────────────────────────────

export const philosophyContent = {
  chapterNum: "05",
  chapterLabel: "INSIDE THE PHILOSOPHY",
  headline: "The Five Pillars of Conscious Parenting",
  quote:
    "Parenting is not about shaping a child into who we think they should be. It is about creating the conditions for them to become who they already are.",
};

export const fivePillars: Pillar[] = [
  {
    num: "I",
    title: "Presence before perfection",
    description:
      "Children do not need flawless parents. They need present, available, and emotionally grounded parents who show up in ordinary everyday moments.",
    icon: "sun",
  },
  {
    num: "II",
    title: "Connection before correction",
    description:
      "Behavioral guidance only works when built on a strong emotional bond. Connect with your child's heart before addressing their actions.",
    icon: "heart",
  },
  {
    num: "III",
    title: "Empathy creates resilience",
    description:
      "Validating a child's emotions does not spoil them; it gives them the psychological safety needed to handle life's challenges with confidence.",
    icon: "leaf",
  },
  {
    num: "IV",
    title: "Boundaries with love",
    description:
      "Clear, calm limits are an act of love. Boundaries provide safety and structure without shame, anger, or harsh punishment.",
    icon: "circle",
  },
  {
    num: "V",
    title: "Growth is lifelong",
    description:
      "Parenting is a continuous journey of self-discovery. As we guide our children, we also grow into calmer, more conscious individuals.",
    icon: "sprout",
  },
];

// ─── Chapter 06: Reader Stories / Author Letter ───────────────────────────

export const authorLetterContent = {
  chapterNum: "06",
  chapterLabel: "WHY I WROTE THIS BOOK",
  title: "A Personal Letter from Poonam",
  salutation: "Dear Reader & Fellow Parent,",
  letterBody: [
    "When I began writing 'The Little Guide to Parenting', I didn't set out to create an overwhelming manual filled with rigid rules. I wanted to write the book I wished I had in my earliest, most uncertain parenting moments.",
    "So much of modern parenting advice feels loud, conflicting, and guilt-inducing. My hope with this book is to offer you a quiet sanctuary — a space to slow down, breathe, and remember that you already hold the wisdom needed to connect with your child.",
    "This book is written with deep warmth and honesty. It is an invitation to choose presence over perfection, and to walk alongside your child with patience, curiosity, and love.",
  ],
  signoff: "With warmth & gratitude,",
  authorName: "Poonam Choudhary",
  excerptsTitle: "SELECTED EXCERPTS FROM THE BOOK",
  excerpts: [
    {
      page: "Page 24",
      quote: "When your child is having a hard moment, remember: they are not giving you a hard time. They are having a hard time.",
    },
    {
      page: "Page 68",
      quote: "Listen to the small things your child tells you when they are young. To them, those small things were never small.",
    },
    {
      page: "Page 112",
      quote: "The quietest moments of genuine presence are often the ones that echo loudest in a child's memory.",
    },
  ],
};

/** CMS / Future-Ready: Real reviews collected after launch will be populated here */
export const realTestimonials: Testimonial[] = [];

// ─── Chapter 07: Articles ──────────────────────────────────────────────────

export const articlesContent = {
  chapterNum: "07",
  chapterLabel: "ARTICLES & ESSAYS",
  headline: "Reflections on Conscious Living & Parenting",
  subline: "Explore thoughtful writings, practical guides, and essays on raising grounded children.",
};

export const articles: Article[] = [
  {
    id: "1",
    category: "PARENTING",
    title: "How to Build Unshakeable Confidence in Your Child",
    excerpt:
      "Small daily rituals and intentional listening that nurture your child's inner belief in themselves.",
    readTime: "4 min read",
  },
  {
    id: "2",
    category: "MINDSET",
    title: "5 Gentle Ways to Handle Your Child's Big Emotions",
    excerpt:
      "When feelings overflow, these grounded responses create emotional safety and deep trust.",
    readTime: "5 min read",
  },
  {
    id: "3",
    category: "FAMILY",
    title: "Creating Meaningful Family Moments Every Day",
    excerpt:
      "You don't need grand trips — deep connection happens in small, quiet, ordinary moments.",
    readTime: "3 min read",
  },
  {
    id: "4",
    category: "LIFE",
    title: "Mindful Parenting: Slow Down to Connect",
    excerpt:
      "The pause between reaction and response is where transformational parenting lives.",
    readTime: "6 min read",
  },
];

// ─── Chapter 08: Contact ───────────────────────────────────────────────────

export const contactContent = {
  chapterNum: "08",
  chapterLabel: "CONTACT & INQUIRIES",
  headline: "Let's Start a Conversation",
  subline:
    "Whether you have a question about the book, speaking engagements, or simply wish to share your thoughts, I would love to hear from you.",
  formIntro: "Write a letter to Poonam:",
  placeholderName: "Your Name",
  placeholderEmail: "Your Email Address",
  placeholderMessage: "Dear Poonam, I wanted to reach out regarding...",
  submitCta: "SEND MESSAGE",
};

// ─── Footer ────────────────────────────────────────────────────────────────

export const footerContent = {
  name: "Poonam Choudhary",
  role: "Author · Speaker · Parenting Guide",
  location: "New Delhi, India",
  email: "Purechimes@gmail.com",
  social: "@poonam.choudhary",
  copyright: `© ${new Date().getFullYear()} Poonam Choudhary. All rights reserved.`,
  chapters: [
    { label: "01 · Introduction", href: "#home" },
    { label: "02 · Mission", href: "#mission" },
    { label: "03 · Meet the Author", href: "#about" },
    { label: "04 · The Book", href: "#book" },
    { label: "05 · Inside Philosophy", href: "#highlights" },
    { label: "06 · Why I Wrote This", href: "#testimonials" },
    { label: "07 · Articles", href: "#articles" },
    { label: "08 · Contact", href: "#contact" },
  ],
};

