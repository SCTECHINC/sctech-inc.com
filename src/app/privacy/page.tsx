import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy · SCTECH INC",
  description: "How SCTECH INC handles personal information collected through sctech-inc.com.",
};

export default function PrivacyPage() {
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
        Privacy Policy
      </h1>
      <div className="mono" style={{ fontSize: 12, color: "var(--ink-3)", letterSpacing: "0.08em", marginBottom: 40 }}>
        Last updated: April 21, 2026
      </div>

      <Section title="1. Who we are">
        <p>
          SCTECH INC. (&ldquo;SCTECH,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;) operates the website{" "}
          <strong>sctech-inc.com</strong>. We are a technology consulting company based in Conroe, Texas. If you have
          questions about this policy, contact <EmailLink />.
        </p>
      </Section>

      <Section title="2. Information we collect">
        <p>We collect the minimum information needed to operate the site and respond to inquiries:</p>
        <ul>
          <li>
            <strong>Contact information you provide</strong> — when you email us or submit a contact form, we collect
            the name, email address, company, and message content you send.
          </li>
          <li>
            <strong>Technical data</strong> — server and CDN logs, IP address, browser user-agent, and referrer, for
            the purposes of operating the site and preventing abuse.
          </li>
          <li>
            <strong>Analytics</strong> — aggregate page-view and traffic data if and only if an analytics provider is
            configured on the site.
          </li>
        </ul>
        <p>We do not collect payment card data on this site.</p>
      </Section>

      <Section title="3. How we use information">
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your inquiries and deliver requested services.</li>
          <li>Operate and secure the website and prevent abuse.</li>
          <li>Comply with legal obligations.</li>
        </ul>
        <p>We do not sell personal information. We do not use your information for advertising.</p>
      </Section>

      <Section title="4. Service providers">
        <p>
          We share information only with service providers who help us operate the site (e.g., hosting, email delivery,
          error monitoring). These providers are contractually required to handle data consistently with this policy.
        </p>
      </Section>

      <Section title="5. Retention">
        <p>
          We retain contact inquiries for as long as needed to respond to the inquiry and maintain a record of the
          engagement. You may request deletion of your information at any time by emailing <EmailLink />.
        </p>
      </Section>

      <Section title="6. Your rights">
        <p>
          Depending on where you live, you may have rights to access, correct, delete, or restrict the processing of
          your personal information, and to opt out of certain uses. To exercise any of these rights, contact{" "}
          <EmailLink />. We will respond within the time required by applicable law.
        </p>
      </Section>

      <Section title="7. Cookies">
        <p>
          The site uses strictly necessary cookies to operate. If analytics or preference cookies are added, this
          policy will be updated and a cookie banner will be shown where required.
        </p>
      </Section>

      <Section title="8. Security">
        <p>
          We use commercially reasonable administrative, physical, and technical safeguards to protect information. No
          system is perfectly secure; please do not send information you consider sensitive via a web form.
        </p>
      </Section>

      <Section title="9. Changes to this policy">
        <p>
          We may update this policy from time to time. The &ldquo;Last updated&rdquo; date above reflects the most recent
          revision. Material changes will be announced on this page.
        </p>
      </Section>

      <Section title="10. Contact">
        <p>
          Privacy questions, requests, or concerns: <EmailLink />.
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
