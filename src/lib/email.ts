import Mailjet from "node-mailjet";

const RECIPIENT_EMAIL = "spencer@sctech-inc.com";
const RECIPIENT_NAME = "Spencer Caldwell";

function getMailjet() {
  const apiKey = process.env.MAILJET_API_KEY;
  const secretKey = process.env.MAILJET_SECRET_KEY;
  if (!apiKey || !secretKey) {
    throw new Error("Mailjet credentials are not configured (MAILJET_API_KEY / MAILJET_SECRET_KEY).");
  }
  return new Mailjet({ apiKey, apiSecret: secretKey });
}

export interface ContactRequest {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  reason: string;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContactRequestEmail(data: ContactRequest) {
  const fullName = `${data.firstName} ${data.lastName}`.trim();
  const subject = `New discovery call request — ${fullName}`;

  const reasonHtml = escapeHtml(data.reason).replace(/\n/g, "<br>");

  const html = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f6f0;">
    <div style="background: linear-gradient(135deg, #2a1914 0%, #1a1a1a 100%); padding: 28px 30px; border-radius: 14px 14px 0 0;">
      <div style="color: rgba(255,255,255,.6); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;">sctech-inc.com</div>
      <h1 style="color: #fff; margin: 0; font-size: 22px; letter-spacing: -0.01em;">New discovery call request</h1>
    </div>
    <div style="background: #fff; padding: 28px 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 14px 14px;">
      <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
        <tr>
          <td style="padding: 10px 0; color: #6b7280; width: 140px; vertical-align: top;">Name</td>
          <td style="padding: 10px 0; color: #1a1a1a; font-weight: 600;">${escapeHtml(fullName)}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #6b7280; vertical-align: top; border-top: 1px solid #f3f4f6;">Email</td>
          <td style="padding: 10px 0; border-top: 1px solid #f3f4f6;"><a href="mailto:${escapeHtml(data.email)}" style="color: #c2410c; text-decoration: none;">${escapeHtml(data.email)}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #6b7280; vertical-align: top; border-top: 1px solid #f3f4f6;">Phone</td>
          <td style="padding: 10px 0; border-top: 1px solid #f3f4f6;"><a href="tel:${escapeHtml(data.phone)}" style="color: #1a1a1a; text-decoration: none;">${escapeHtml(data.phone)}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #6b7280; vertical-align: top; border-top: 1px solid #f3f4f6;">Reason</td>
          <td style="padding: 10px 0; color: #1a1a1a; line-height: 1.6; border-top: 1px solid #f3f4f6;">${reasonHtml}</td>
        </tr>
      </table>
      <div style="margin-top: 26px; padding-top: 18px; border-top: 1px solid #f3f4f6; color: #9ca3af; font-size: 12px;">
        Submitted via the contact form on <strong>sctech-inc.com</strong>. Replying to this email will reach ${escapeHtml(fullName)} directly.
      </div>
    </div>
  </body>
</html>`;

  const text = `New discovery call request — sctech-inc.com

Name:   ${fullName}
Email:  ${data.email}
Phone:  ${data.phone}

Reason:
${data.reason}

---
Submitted via the contact form on sctech-inc.com.
Replying to this email will reach ${fullName} directly.`;

  const response = await getMailjet()
    .post("send", { version: "v3.1" })
    .request({
      Messages: [
        {
          From: {
            Email: process.env.MAILJET_FROM_EMAIL || "noreply@sctech-inc.com",
            Name: process.env.MAILJET_FROM_NAME || "SCTECH Website",
          },
          To: [{ Email: RECIPIENT_EMAIL, Name: RECIPIENT_NAME }],
          ReplyTo: {
            Email: data.email,
            Name: fullName,
          },
          Subject: subject,
          TextPart: text,
          HTMLPart: html,
        },
      ],
    });

  return response.body;
}
