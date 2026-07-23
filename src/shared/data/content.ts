import type { Pillar, Testimonial, Article } from "../types";


// ─── Hero ──────────────────────────────────────────────────────────────────

export const heroContent = {
  tagline: "Parenting isn't perfect.",
  headline: "But presence changes everything.",
  headlineItalic: "everything.",
  subline:
    "Practical guidance & heartfelt insights for raising confident, kind and emotionally strong children.",
  primaryCta: "Explore My Book",
  secondaryCta: "See My Blog",
  quote: "There is no perfect parent, only a present one.",
  quoteAuthor: "— Poonam Choudhary",
  stats: "50,000+ Families Impacted",
  rating: "4.9 / 5.0",
};

// ─── Mission ───────────────────────────────────────────────────────────────

export const missionContent = {
  label: "MY MISSION",
  headline: "Helping parents raise",
  headlineHighlight: "confident, kind",
  headlineContinue: "and emotionally strong children.",
  cta: "More About Me →",
};

export const missionPillars: Pillar[] = [
  {
    num: "01",
    title: "Stronger Connections",
    description:
      "Build deeper bonds with your child based on trust and understanding.",
    icon: "heart",
  },
  {
    num: "02",
    title: "Emotional Growth",
    description:
      "Help your child grow emotionally strong and resilient in today's world.",
    icon: "sprout",
  },
  {
    num: "03",
    title: "Mindful Parenting",
    description:
      "Simple, mindful approaches to handle everyday parenting challenges.",
    icon: "leaf",
  },
];

// ─── About Author ──────────────────────────────────────────────────────────

export const aboutContent = {
  label: "ABOUT THE AUTHOR",
  headline: "Poonam Choudhary",
  role: "Author · Speaker · Parenting Guide",
  bio: "I am a parenting educator, author and speaker who has guided thousands of families toward more conscious, compassionate relationships. Through my books, workshops and online community, I help parents move from survival mode to genuine connection.",
  bio2:
    "My work is rooted in the belief that every child deserves a parent who sees them fully — and every parent deserves support in becoming that person.",
  philosophy: "Presence before perfection. Connection before correction.",
};

// ─── Featured Book ─────────────────────────────────────────────────────────

export const bookContent = {
  label: "MY BOOK",
  title: "The Little Guide to Parenting",
  subtitle: "Conscious · Intentional · Growth",
  description:
    "A practical and heartfelt guide for parents who want to raise confident, happy and emotionally strong children.",
  primaryCta: "Buy Now",
  secondaryCta: "Learn More →",
  highlights: [
    "Practical Advice — Real-life parenting solutions that actually work.",
    "Easy to Follow — Simple strategies for everyday parenting challenges.",
    "Heartfelt & Relatable — Written with empathy, warmth and real experiences.",
  ],
};

// ─── Book Highlights / Five Pillars ───────────────────────────────────────

export const philosophyContent = {
  label: "PHILOSOPHY",
  headline: "The Philosophy of Conscious Parenting",
  quote:
    "Parenting is not about shaping a child into who we think they should be. It is about creating the conditions for them to become who they already are.",
};

export const fivePillars: Pillar[] = [
  {
    num: "I",
    title: "Presence before perfection",
    description: "Presence is the gift, not perfection.",
    icon: "sun",
  },
  {
    num: "II",
    title: "Connection before correction",
    description: "Guidance through warm relationship.",
    icon: "heart",
  },
  {
    num: "III",
    title: "Empathy creates resilience",
    description: "Understanding builds inner strength.",
    icon: "leaf",
  },
  {
    num: "IV",
    title: "Boundaries with love",
    description: "Clear, kind limits build trust.",
    icon: "circle",
  },
  {
    num: "V",
    title: "Growth is lifelong",
    description: "Both parent and child grow together.",
    icon: "sprout",
  },
];

// ─── Testimonials ──────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Poonam's words feel like a warm hug for every parent. Her book is a must-read for anyone who wants to parent with more love and less guilt.",
    author: "Neha Sharma",
    role: "Mom of Two",
    stars: 5,
  },
  {
    id: "2",
    quote:
      "A beautiful blend of visual storytelling and heartfelt parenting wisdom. I return to these pages again and again.",
    author: "Maya R.",
    role: "Parent & Educator",
    stars: 5,
  },
  {
    id: "3",
    quote:
      "This book changed how I see my relationship with my daughter. Every parent should read it.",
    author: "David L.",
    role: "Father of One",
    stars: 5,
  },
  {
    id: "4",
    quote:
      "Thoughtful, elegant, and deeply moving. The principles are simple yet transformative.",
    author: "Priya K.",
    role: "Mom & Therapist",
    stars: 5,
  },
];

// ─── Articles ──────────────────────────────────────────────────────────────

export const articles: Article[] = [
  {
    id: "1",
    category: "PARENTING",
    title: "How to Build Unshakeable Confidence in Your Child",
    excerpt:
      "Small daily rituals that nurture your child's inner belief in themselves.",
    readTime: "4 min read",
  },
  {
    id: "2",
    category: "MINDSET",
    title: "5 Gentle Ways to Handle Your Child's Big Emotions",
    excerpt:
      "When feelings overflow, these grounded responses create safety and trust.",
    readTime: "5 min read",
  },
  {
    id: "3",
    category: "FAMILY",
    title: "Creating Meaningful Family Moments Every Day",
    excerpt:
      "You don't need weekends or trips — connection happens in small ordinary moments.",
    readTime: "3 min read",
  },
  {
    id: "4",
    category: "LIFE",
    title: "Mindful Parenting: Slow Down to Connect",
    excerpt:
      "The pause between reaction and response is where real parenting lives.",
    readTime: "6 min read",
  },
];

// ─── Newsletter ────────────────────────────────────────────────────────────

export const newsletterContent = {
  label: "STAY CONNECTED",
  headline: "Let's build a beautiful journey of parenting together.",
  subline: "Join my newsletter for tips, stories and updates.",
  placeholder: "Enter your email",
  cta: "Subscribe",
};

// ─── Footer ────────────────────────────────────────────────────────────────

export const footerContent = {
  name: "Poonam Choudhary",
  role: "Author · Speaker · Parenting Guide",
  location: "New Delhi, India",
  email: "Purechimes@gmail.com",
  social: "@poonam.choudhary",
  copyright: `© ${new Date().getFullYear()} Poonam Choudhary. All rights reserved.`,
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about" },
    { label: "My Book", href: "#book" },
    { label: "Articles", href: "#articles" },
    { label: "Contact", href: "#contact" },
  ],
};
