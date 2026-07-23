import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  const defaultEmails = [
    "author@example.com",
    "Purechimes@gmail.com",
  ];

  for (const email of defaultEmails) {
    const passwordHash = await bcrypt.hash("password123", 10);
    await prisma.author.upsert({
      where: { email },
      update: {},
      create: {
        email,
        name: email.split("@")[0].replace(".", " "),
        passwordHash,
      },
    });
  }

  const sampleArticles = [
    {
      title: "How to Build Unshakeable Confidence in Your Child",
      slug: "how-to-build-unshakeable-confidence-in-your-child",
      excerpt: "Small daily rituals that nurture your child's inner belief in themselves.",
      content: `<p>Confidence is not something children are simply born with — it is a muscle built through consistent, loving interactions every day.</p><h2>1. Praise Effort over Outcome</h2><p>When we praise process ("I noticed how hard you worked on that drawing") rather than outcome ("You are so smart"), children learn that failure is not a reflection of their worth, but an invitation to grow.</p><blockquote>"A child who feels accepted for who they are gains the courage to explore who they can become."</blockquote><h2>2. Create Small Safe Choices</h2><p>Allowing children age-appropriate autonomy builds self-trust. Let them choose between two shirts, or decide which task to start first.</p>`,
      category: "PARENTING",
      readingTime: "4 min read",
      featured: true,
      status: "PUBLISHED",
      publishedAt: new Date("2026-06-15"),
      coverImage: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "5 Gentle Ways to Handle Your Child's Big Emotions",
      slug: "5-gentle-ways-to-handle-your-childs-big-emotions",
      excerpt: "When feelings overflow, these grounded responses create safety and trust.",
      content: `<p>Emotional meltdowns can be exhausting for parents. But remember: a child having a hard time isn't trying to make your day hard — they are having a hard time.</p><h2>1. Be the Anchor in Their Storm</h2><p>Take a deep breath before responding. Your calm regulates their nervous system.</p><h2>2. Name the Feeling</h2><p>"You felt really frustrated when it fell down, didn't you?" Naming emotions builds emotional literacy.</p>`,
      category: "MINDSET",
      readingTime: "5 min read",
      featured: false,
      status: "PUBLISHED",
      publishedAt: new Date("2026-06-20"),
      coverImage: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Creating Meaningful Family Moments Every Day",
      slug: "creating-meaningful-family-moments-every-day",
      excerpt: "You don't need weekends or trips — connection happens in small ordinary moments.",
      content: `<p>We often wait for holidays or grand vacations to create memories. Yet what children cherish most are the quiet, ordinary rituals of daily life.</p><p>5-minute morning check-ins, bedtime storytelling, or cooking dinner together can become sacred anchors of love.</p>`,
      category: "FAMILY",
      readingTime: "3 min read",
      featured: false,
      status: "PUBLISHED",
      publishedAt: new Date("2026-07-01"),
      coverImage: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Mindful Parenting: Slow Down to Connect",
      slug: "mindful-parenting-slow-down-to-connect",
      excerpt: "The pause between reaction and response is where real parenting lives.",
      content: `<p>In our fast-paced world, presence is the greatest gift we can give our children.</p><p>When you are present, your child feels seen, heard, and valued beyond measure.</p>`,
      category: "LIFE",
      readingTime: "6 min read",
      featured: false,
      status: "PUBLISHED",
      publishedAt: new Date("2026-07-10"),
      coverImage: "https://images.unsplash.com/photo-1499209974431-9dac3cea0047?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  for (const article of sampleArticles) {
    await prisma.blogPost.upsert({
      where: { slug: article.slug },
      update: {},
      create: article,
    });
  }

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
