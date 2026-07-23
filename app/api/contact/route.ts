import { NextResponse } from "next/server";

const TO_EMAIL = "Purechimes@gmail.com";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Try Nodemailer if SMTP is configured
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const nodemailer = (await import("nodemailer")).default;
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: false,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });

      await transporter.sendMail({
        from: `"${name}" <${process.env.SMTP_USER}>`,
        to: TO_EMAIL,
        replyTo: email,
        subject: `Letter from ${name} — via Poonam Choudhary Website`,
        text: `Dear Poonam,\n\nMy name is ${name}.\nMy email is ${email}.\n\nI wanted to write because:\n\n${message}\n\nWith gratitude,\n${name}`,
        html: `
          <div style="font-family: Georgia, serif; color: #3A2C1E; max-width: 600px; margin: 0 auto; padding: 32px; background: #FAF7F2; border: 1px solid rgba(110,90,78,0.15);">
            <p style="color: #6E5A4E; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 24px;">NEW LETTER RECEIVED</p>
            <h2 style="font-size: 22px; margin-bottom: 16px; font-weight: 700;">Dear Poonam,</h2>
            <p style="font-size: 15px; line-height: 1.8; margin-bottom: 16px;">
              My name is <strong>${name}</strong>.<br>
              My email is <a href="mailto:${email}" style="color: #A8B29A;">${email}</a>.
            </p>
            <p style="font-size: 14px; color: #5A4A38; font-style: italic; margin-bottom: 8px;">I wanted to write because…</p>
            <div style="border-left: 2px solid #A8B29A; padding-left: 16px; margin: 16px 0;">
              <p style="font-size: 15px; line-height: 1.9; color: #3A2C1E; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="margin-top: 24px; font-style: italic; color: #6E5A4E;">With gratitude,<br><strong>${name}</strong></p>
            <hr style="border: none; border-top: 1px solid rgba(110,90,78,0.12); margin: 24px 0;" />
            <p style="font-size: 11px; color: rgba(110,90,78,0.5);">Sent via poonamchoudhary.com contact form → ${TO_EMAIL}</p>
          </div>
        `,
      });
    } else {
      // Log to console as fallback (will still succeed to allow animation)
      console.log(`[CONTACT FORM] From: ${name} <${email}>\nMessage: ${message}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[CONTACT API]", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
