import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Refund Policy · SCTECH INC",
  description: "Terms of service and refund/cancellation policy for SCTECH INC consulting engagements.",
};

export default function TermsPage() {
  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "80px 28px 120px" }}>
      <Link
        href="/"
        style={{
          display: "inline-block",
          fontSize: 13,
          color: "var(--ink-3)",
          marginBottom: 24,
          letterSpacing: "0.02em",
        }}
      >
        ← Back to home
      </Link>
      <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", letterSpacing: "-0.03em", lineHeight: 1.05, margin: "0 0 12px" }}>
        Terms &amp; Refund Policy
      </h1>
      <div className="mono" style={{ fontSize: 12, color: "var(--ink-3)", letterSpacing: "0.08em", marginBottom: 40 }}>
        Last updated: April 21, 2026
      </div>

      <Section title="1. About SCTECH INC.">
        <p>
          SCTECH INC. (&ldquo;SCTECH,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;) is a technology consulting company
          based in Conroe, Texas. We provide professional services: software architecture, design, development,
          integration, legacy modernization, and ongoing technical operations. We do not sell physical goods through
          this website.
        </p>
      </Section>

      <Section title="2. Engagements">
        <p>
          All consulting work is governed by a written statement of work (&ldquo;SOW&rdquo;) or master services agreement
          executed between SCTECH and the client. The SOW is the controlling document for scope, deliverables,
          acceptance criteria, timelines, and fees.
        </p>
        <p>
          Information on this website — including descriptions of services, capabilities, case studies, and stated
          results — is for general informational purposes and is not itself a binding offer.
        </p>
      </Section>

      <Section title="3. Fees and payment">
        <p>
          Fees are set out in the applicable SOW and are typically invoiced monthly in arrears for time-and-materials
          engagements, or on a milestone basis for fixed-price engagements. Retainers are typically billed in advance.
          Invoices are due on the terms stated in the SOW (commonly net 15 or net 30 business days). Past-due amounts
          may accrue interest at the lesser of 1.5% per month or the maximum permitted by law.
        </p>
      </Section>

      <Section title="4. Cancellation and refunds">
        <p>
          Because we provide professional services rather than goods, refunds are handled as follows:
        </p>
        <ul>
          <li>
            <strong>Time-and-materials engagements.</strong> You may cancel at any time with written notice. You remain
            responsible for fees and approved expenses incurred up to the effective cancellation date. Work already
            performed is non-refundable.
          </li>
          <li>
            <strong>Fixed-price engagements.</strong> If you cancel before a milestone is delivered and accepted, we
            will prorate fees for work substantively performed and in progress up to the cancellation date, and refund
            any unearned prepaid amount for that milestone. Milestones already delivered and accepted are
            non-refundable.
          </li>
          <li>
            <strong>Retainers.</strong> You may cancel a retainer at the end of the then-current retainer period by
            giving at least 30 days&rsquo; written notice. Retainer fees for the current period are non-refundable.
          </li>
          <li>
            <strong>Discovery engagements.</strong> The two-week paid discovery is billed as a fixed fee and is
            non-refundable once work has commenced, because the deliverable (a written assessment) is produced
            progressively across the discovery period.
          </li>
        </ul>
        <p>
          If you believe a billing error has occurred, contact <EmailLink /> within 30 days of the invoice and we will
          investigate and correct any error in good faith.
        </p>
      </Section>

      <Section title="5. Intellectual property">
        <p>
          Subject to full payment of fees, we assign to the client all right, title, and interest in the custom work
          product specifically created for that client&rsquo;s engagement. SCTECH retains ownership of its general know-how,
          methodologies, reusable utilities, and pre-existing materials, and of any open-source components incorporated
          subject to their own licenses.
        </p>
      </Section>

      <Section title="6. Confidentiality">
        <p>
          SCTECH handles client information as confidential and will not disclose it except as required to perform the
          services or as required by law. Client-specific NDAs executed between the parties control over any more
          general language in these terms.
        </p>
      </Section>

      <Section title="7. Warranties and disclaimers">
        <p>
          SCTECH will perform services in a professional and workmanlike manner. Except as expressly set out in a
          written SOW, all services are provided &ldquo;as is&rdquo; and all other warranties — express, implied, or
          statutory — are disclaimed to the maximum extent permitted by law.
        </p>
      </Section>

      <Section title="8. Limitation of liability">
        <p>
          To the maximum extent permitted by law, SCTECH&rsquo;s total aggregate liability for any claim arising out of or
          related to an engagement is limited to the fees paid by the client to SCTECH under the applicable SOW in the
          six (6) months preceding the event giving rise to the claim. Neither party is liable for indirect, special,
          incidental, consequential, or punitive damages.
        </p>
      </Section>

      <Section title="9. Governing law">
        <p>
          These terms are governed by the laws of the State of Texas, excluding conflict-of-laws principles. Any dispute
          will be resolved in the state or federal courts located in Montgomery County, Texas, and the parties consent
          to jurisdiction and venue there.
        </p>
      </Section>

      <Section title="10. Changes">
        <p>
          SCTECH may update these terms from time to time. The &ldquo;Last updated&rdquo; date above reflects the most
          recent revision. Material changes will be announced on this page.
        </p>
      </Section>

      <Section title="11. Contact">
        <p>
          Questions about these terms, billing, or a specific engagement: <EmailLink />.
        </p>
      </Section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginTop: 36 }}>
      <h2 style={{ fontSize: 22, letterSpacing: "-0.01em", margin: "0 0 12px", fontWeight: 700 }}>{title}</h2>
      <div style={{ fontSize: 16, color: "var(--ink-2)", lineHeight: 1.65 }}>{children}</div>
    </section>
  );
}

function EmailLink() {
  return (
    <a href="mailto:connect@sctech-inc.com" style={{ color: "var(--accent-ink)", textDecoration: "underline" }}>
      connect@sctech-inc.com
    </a>
  );
}
