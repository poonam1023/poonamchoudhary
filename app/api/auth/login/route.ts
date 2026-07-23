import { NextResponse } from "next/server";
import { isAuthorizedEmail, hashPassword, verifyPassword, createSessionToken, COOKIE_NAME } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
    }

    const cleanEmail = String(email).trim().toLowerCase();

    // Check Whitelist first
    if (!isAuthorizedEmail(cleanEmail)) {
      // Do not reveal whether account exists or detailed reason per security prompt
      return NextResponse.json({ error: "Unauthorized account." }, { status: 401 });
    }

    let author = await prisma.author.findUnique({
      where: { email: cleanEmail },
    });

    if (!author) {
      // Create initial authorized author with hashed password if logging in first time
      const passwordHash = await hashPassword(password);
      author = await prisma.author.create({
        data: {
          email: cleanEmail,
          name: cleanEmail.split("@")[0].replace(".", " "),
          passwordHash,
        },
      });
    } else {
      const isValid = await verifyPassword(password, author.passwordHash);
      if (!isValid) {
        return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
      }
    }

    const token = await createSessionToken({
      id: author.id,
      email: author.email,
      name: author.name,
    });

    const response = NextResponse.json({
      success: true,
      author: { id: author.id, email: author.email, name: author.name },
    });

    response.cookies.set({
      name: COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
