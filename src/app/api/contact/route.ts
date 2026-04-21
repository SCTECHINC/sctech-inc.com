import { NextResponse } from "next/server";
import { z } from "zod";
import { sendContactRequestEmail } from "@/lib/email";

export const runtime = "nodejs";

const ContactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  phone: z.string().trim().min(7, "Phone number looks too short").max(40),
  email: z.string().trim().email("Enter a valid email").max(200),
  reason: z.string().trim().min(10, "Tell us a bit more — at least 10 characters").max(2000),
  // Honeypot — real users leave this blank. Bots fill every field.
  website: z.string().optional(),
});

export async function POST(req: Request) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = ContactSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { website, ...data } = parsed.data;
  if (website && website.length > 0) {
    // Honeypot tripped — silently accept so bots don't retry
    return NextResponse.json({ ok: true });
  }

  try {
    await sendContactRequestEmail(data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[api/contact] send failed:", err);
    return NextResponse.json({ error: "Unable to send right now. Please try again or email directly." }, { status: 500 });
  }
}
