import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { BUSINESS } from "@/lib/constants";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiter
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 3;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function fieldRow(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:12px 0; border-bottom:1px solid #f3f4f6;">
        <p style="margin:0 0 2px; font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#c5a355; font-weight:700;">${label}</p>
        <p style="margin:0; font-size:15px; color:#1f2937;">${escapeHtml(value)}</p>
      </td>
    </tr>`;
}

function buildEmailHtml(data: {
  name: string;
  phone: string;
  email: string;
  profession: string;
  message?: string;
}): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0; padding:0; background:#f9fafb; font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb; padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 1px 3px rgba(0,0,0,0.1);">
        <tr>
          <td style="background:linear-gradient(135deg,#1a5c2a,#2d8a42); padding:28px 32px; text-align:center;">
            <h1 style="margin:0; color:#ffffff; font-size:22px; font-weight:700;">New Tour Request</h1>
            <p style="margin:8px 0 0; color:rgba(255,255,255,0.8); font-size:14px;">Someone wants to see the suites!</p>
          </td>
        </tr>
        <tr>
          <td style="padding:32px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${fieldRow("Name", data.name)}
              ${fieldRow("Phone", data.phone)}
              ${fieldRow("Email", data.email)}
              ${fieldRow("Profession", data.profession)}
              ${data.message ? fieldRow("Message", data.message) : ""}
            </table>
          </td>
        </tr>
        <tr>
          <td style="background:#f9fafb; padding:20px 32px; text-align:center; border-top:1px solid #e5e7eb;">
            <p style="margin:0; color:#9ca3af; font-size:12px;">Sent from smyrnasalonsuites.com contact form</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(request: NextRequest) {
  // Rate limiting
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (entry && entry.resetAt > now) {
    if (entry.count >= RATE_LIMIT_MAX) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }
    entry.count++;
  } else {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
  }

  // Parse and validate
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, phone, email, profession, message } = body;

  if (!name || !phone || !email || !profession) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  // Send email
  try {
    const { error } = await resend.emails.send({
      from: `${BUSINESS.name} <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
      to: [BUSINESS.email],
      replyTo: email,
      subject: `New Tour Request from ${name}`,
      html: buildEmailHtml({ name, phone, email, profession, message }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send message.", details: error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message.", details: String(err) }, { status: 500 });
  }
}
