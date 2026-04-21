"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const FormSchema = z.object({
  firstName: z.string().trim().min(1, "Required").max(100),
  lastName: z.string().trim().min(1, "Required").max(100),
  phone: z.string().trim().min(7, "Phone number looks too short").max(40),
  email: z.string().trim().email("Enter a valid email").max(200),
  reason: z.string().trim().min(10, "Tell us a bit more — at least 10 characters").max(2000),
  website: z.string().optional(),
});

type FormValues = z.infer<typeof FormSchema>;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: { firstName: "", lastName: "", phone: "", email: "", reason: "", website: "" },
  });

  // Lock body scroll + close on Escape while modal is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  // Reset when closed so reopening is fresh
  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setStatus("idle");
        setServerError(null);
        reset();
      }, 250);
      return () => clearTimeout(t);
    }
  }, [open, reset]);

  const onSubmit = async (values: FormValues) => {
    setStatus("submitting");
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        setServerError(body?.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setServerError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "oklch(18% 0.01 60 / 0.55)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "48px 20px",
        overflowY: "auto",
        animation: "fadeInSoft 200ms ease both",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 560,
          background: "var(--bg)",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--line-2)",
          boxShadow: "var(--shadow-lg)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "28px 32px 18px",
            borderBottom: "1px solid var(--line-2)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div>
            <div
              className="mono"
              style={{
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--accent-ink)",
                marginBottom: 8,
              }}
            >
              Book a discovery call
            </div>
            <h2
              id="contact-modal-title"
              style={{
                margin: 0,
                fontSize: 24,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                fontWeight: 700,
              }}
            >
              Tell us what you&apos;re building.
            </h2>
            <p style={{ margin: "8px 0 0", fontSize: 14, color: "var(--ink-2)", lineHeight: 1.5 }}>
              30 minutes with a principal engineer. We&apos;ll get back to you within one business day.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            style={{
              flexShrink: 0,
              width: 36,
              height: 36,
              borderRadius: 999,
              background: "var(--bg-3)",
              color: "var(--ink)",
              display: "grid",
              placeItems: "center",
              transition: "all 160ms",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--ink)";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--bg-3)";
              e.currentTarget.style.color = "var(--ink)";
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        {status === "success" ? (
          <SuccessState onClose={onClose} />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ padding: "24px 32px 28px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
              }}
              className="cm-row"
            >
              <Field label="First name" error={errors.firstName?.message}>
                <input
                  type="text"
                  autoComplete="given-name"
                  autoFocus
                  {...register("firstName")}
                  style={inputStyle(Boolean(errors.firstName))}
                />
              </Field>
              <Field label="Last name" error={errors.lastName?.message}>
                <input type="text" autoComplete="family-name" {...register("lastName")} style={inputStyle(Boolean(errors.lastName))} />
              </Field>
            </div>

            <div style={{ marginTop: 14 }}>
              <Field label="Phone number" error={errors.phone?.message}>
                <input type="tel" autoComplete="tel" placeholder="+1 555 000 0000" {...register("phone")} style={inputStyle(Boolean(errors.phone))} />
              </Field>
            </div>

            <div style={{ marginTop: 14 }}>
              <Field label="Email address" error={errors.email?.message}>
                <input type="email" autoComplete="email" placeholder="you@company.com" {...register("email")} style={inputStyle(Boolean(errors.email))} />
              </Field>
            </div>

            <div style={{ marginTop: 14 }}>
              <Field label="What's the project?" error={errors.reason?.message}>
                <textarea
                  rows={4}
                  placeholder="A short description — what you're building, what's broken, what you're trying to ship."
                  {...register("reason")}
                  style={{ ...inputStyle(Boolean(errors.reason)), resize: "vertical", minHeight: 110, fontFamily: "inherit" }}
                />
              </Field>
            </div>

            {/* Honeypot — hidden field real users don't see */}
            <div aria-hidden style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
              <label>
                Website
                <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
              </label>
            </div>

            {serverError && (
              <div
                role="alert"
                style={{
                  marginTop: 16,
                  padding: "10px 14px",
                  borderRadius: 10,
                  background: "oklch(96% 0.03 25)",
                  border: "1px solid oklch(80% 0.12 25)",
                  color: "oklch(38% 0.15 25)",
                  fontSize: 13,
                }}
              >
                {serverError}
              </div>
            )}

            <div
              style={{
                marginTop: 22,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 14,
                flexWrap: "wrap",
              }}
            >
              <div style={{ fontSize: 12, color: "var(--ink-3)", maxWidth: 280, lineHeight: 1.4 }}>
                By submitting, you agree to our{" "}
                <a href="/privacy" style={{ textDecoration: "underline", color: "var(--ink-2)" }}>privacy policy</a>.
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "13px 22px",
                  borderRadius: 999,
                  fontWeight: 600,
                  fontSize: 14,
                  background: status === "submitting" ? "var(--ink-3)" : "var(--accent)",
                  color: "white",
                  transition: "all 180ms",
                  cursor: status === "submitting" ? "wait" : "pointer",
                  boxShadow: "0 10px 24px -8px oklch(68% 0.195 42 / 0.5)",
                }}
              >
                {status === "submitting" ? "Sending…" : "Send request"}
                {status !== "submitting" && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                )}
              </button>
            </div>
          </form>
        )}

        <style>{`
          @media (max-width: 520px){
            .cm-row { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{ fontSize: 12, fontWeight: 600, color: "var(--ink-2)", letterSpacing: "0.02em" }}>{label}</span>
      {children}
      {error && <span style={{ fontSize: 12, color: "oklch(55% 0.18 25)" }}>{error}</span>}
    </label>
  );
}

function inputStyle(hasError: boolean) {
  return {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 10,
    border: `1px solid ${hasError ? "oklch(72% 0.16 25)" : "var(--line)"}`,
    background: "white",
    color: "var(--ink)",
    fontSize: 14,
    fontFamily: "inherit",
    transition: "border-color 160ms, box-shadow 160ms",
    outline: "none",
  } as const;
}

function SuccessState({ onClose }: { onClose: () => void }) {
  return (
    <div style={{ padding: "36px 32px 40px", textAlign: "center" }}>
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 999,
          background: "oklch(92% 0.1 140)",
          color: "oklch(42% 0.16 140)",
          display: "grid",
          placeItems: "center",
          margin: "0 auto 16px",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
      <h3 style={{ margin: "0 0 8px", fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>
        Request received.
      </h3>
      <p style={{ margin: 0, fontSize: 15, color: "var(--ink-2)", lineHeight: 1.55, maxWidth: 400, marginInline: "auto" }}>
        Thanks for reaching out. We&apos;ll get back to you within one business day at the email you provided.
      </p>
      <button
        type="button"
        onClick={onClose}
        style={{
          marginTop: 24,
          padding: "12px 24px",
          borderRadius: 999,
          background: "var(--ink)",
          color: "white",
          fontWeight: 600,
          fontSize: 14,
        }}
      >
        Close
      </button>
    </div>
  );
}
