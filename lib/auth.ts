import { SignJWT, jwtVerify } from "jose";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { prisma } from "./prisma";

const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET || "poonam_choudhary_blog_cms_jwt_secret_key_2026_super_secure!"
);

export const COOKIE_NAME = "author_session";

export function getAuthorizedAuthors(): string[] {
  const envList =
    process.env.AUTHORIZED_AUTHORS ||
    "author@example.com,poonam@consciousparenting.com,anotherauthor@example.com";
  return envList.split(",").map((e) => e.trim().toLowerCase());
}

export function isAuthorizedEmail(email: string): boolean {
  const normalized = email.trim().toLowerCase();
  return getAuthorizedAuthors().includes(normalized);
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function createSessionToken(payload: { id: string; email: string; name: string }) {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(SECRET_KEY);
}

export async function verifySessionToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, SECRET_KEY);
    return payload as { id: string; email: string; name: string };
  } catch {
    return null;
  }
}

export async function getSessionAuthor() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifySessionToken(token);
}

export async function ensureDefaultAuthor() {
  const defaultEmails = getAuthorizedAuthors();
  for (const email of defaultEmails) {
    const existing = await prisma.author.findUnique({ where: { email } });
    if (!existing) {
      const passwordHash = await hashPassword("password123");
      await prisma.author.create({
        data: {
          email,
          name: email.split("@")[0].replace(".", " "),
          passwordHash,
        },
      });
    }
  }
}
