import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  model?: string;
  tier?: string;
  zip?: string;
  notes?: string;
  acknowledge?: string;
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, model, tier, zip, notes, acknowledge } = body;

  if (!name || !email || !model || !tier || !zip || !acknowledge) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ORDERS_TO_EMAIL;
  const from = process.env.ORDERS_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error("Resend env vars missing — see .env.example.");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const html = `
    <h2>New Veil Optics order request</h2>
    <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
      <tr><td><strong>Frame model</strong></td><td>${escapeHtml(model)}</td></tr>
      <tr><td><strong>Tier</strong></td><td>${escapeHtml(tier)}</td></tr>
      <tr><td><strong>ZIP / postal</strong></td><td>${escapeHtml(zip)}</td></tr>
      <tr><td valign="top"><strong>Notes</strong></td><td>${escapeHtml(notes || "—")}</td></tr>
    </table>
  `;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New order request — ${name} (${tier})`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send email. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Unexpected server error." },
      { status: 500 },
    );
  }
}
