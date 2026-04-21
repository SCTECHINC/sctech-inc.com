"use client";

import { useState, useEffect, useRef, type CSSProperties, type ReactNode, type SVGProps, Fragment } from "react";
import Image from "next/image";

/* ============ ICONS ============ */
type IconProps = SVGProps<SVGSVGElement>;

const Icon = {
  Arrow: (p: IconProps) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  ),
  ArrowUpRight: (p: IconProps) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  ),
  Plus: (p: IconProps) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  Minus: (p: IconProps) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14" />
    </svg>
  ),
  Check: (p: IconProps) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  ),
  Menu: (p: IconProps) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
  Close: (p: IconProps) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  ),
  Architecture: (p: IconProps) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  Code: (p: IconProps) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" />
    </svg>
  ),
  Cloud: (p: IconProps) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M7 18a5 5 0 110-10 6 6 0 0111.6 2A4 4 0 0118 18H7z" />
    </svg>
  ),
  Data: (p: IconProps) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  ),
  AI: (p: IconProps) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3v2M12 19v2M5 12H3M21 12h-2M6.3 6.3L5 5M19 19l-1.3-1.3M6.3 17.7L5 19M19 5l-1.3 1.3" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
  Shield: (p: IconProps) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3l8 3v6c0 4.5-3.4 8.4-8 9-4.6-.6-8-4.5-8-9V6l8-3z" />
    </svg>
  ),
};

/* ============ LOGO ============ */
function Logo({ invert, size = 34 }: { invert?: boolean; size?: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Image
        src="/sctech-logo.png"
        alt="SC Tech Inc"
        width={size}
        height={size}
        priority
        style={{
          height: size,
          width: "auto",
          display: "block",
          filter: invert ? "drop-shadow(0 2px 6px rgba(0,0,0,.35))" : "drop-shadow(0 2px 6px rgba(230,110,40,.22))",
        }}
      />
      <div style={{ display: "flex", alignItems: "baseline", gap: 5, color: invert ? "white" : "var(--ink)" }}>
        <span style={{ fontWeight: 800, letterSpacing: "-0.02em", fontSize: 19 }}>SCTECH</span>
        <span
          style={{
            fontSize: 11,
            color: invert ? "rgba(255,255,255,.6)" : "var(--ink-3)",
            letterSpacing: "0.14em",
            fontWeight: 700,
          }}
        >
          INC
        </span>
      </div>
    </div>
  );
}

/* ============ NAV ============ */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#cases" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        padding: "14px 0",
        background: scrolled ? "oklch(98.8% 0.008 70 / 0.85)" : "transparent",
        backdropFilter: scrolled ? "saturate(160%) blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "saturate(160%) blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--line-2)" : "1px solid transparent",
        transition: "all 250ms ease",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <a href="#top">
          <Logo />
        </a>
        <nav style={{ display: "flex", gap: 6, alignItems: "center" }} className="navlinks">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "var(--ink-2)",
                padding: "8px 14px",
                borderRadius: 8,
                transition: "all 160ms",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--bg-3)";
                e.currentTarget.style.color = "var(--ink)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--ink-2)";
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a
            href="#contact"
            className="nav-cta"
            style={{
              fontSize: 14,
              fontWeight: 600,
              padding: "10px 18px",
              borderRadius: 999,
              background: "var(--ink)",
              color: "var(--bg)",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              transition: "all 180ms",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--ink)";
              e.currentTarget.style.transform = "none";
            }}
          >
            Start a project <Icon.Arrow />
          </a>
          <button
            className="menu-btn"
            onClick={() => setOpen((v) => !v)}
            style={{
              display: "none",
              width: 40,
              height: 40,
              borderRadius: 10,
              border: "1px solid var(--line)",
              alignItems: "center",
              justifyContent: "center",
              background: "white",
            }}
          >
            {open ? <Icon.Close /> : <Icon.Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="mobile-menu" style={{ padding: "12px 20px 20px", borderTop: "1px solid var(--line-2)", background: "var(--bg)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ padding: "14px 10px", borderBottom: "1px solid var(--line-2)", fontWeight: 500 }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              style={{
                marginTop: 10,
                padding: "14px 18px",
                borderRadius: 999,
                background: "var(--ink)",
                color: "var(--bg)",
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              Start a project
            </a>
          </div>
        </div>
      )}
      <style>{`
        @media (max-width: 880px) {
          .navlinks { display: none !important; }
          .menu-btn { display: flex !important; }
          .nav-cta { display: none !important; }
        }
      `}</style>
    </header>
  );
}

/* ============ HERO ============ */
function ParticleHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let W = 0,
      H = 0;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const particles: { x: number; y: number; vx: number; vy: number; s: number; hot: boolean }[] = [];
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width = W * DPR;
      canvas.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const N = 90;
    for (let i = 0; i < N; i++) {
      const r = Math.random();
      particles.push({
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.5) * 0.0004,
        vy: (Math.random() - 0.5) * 0.0004,
        s: 0.6 + Math.random() * 1.8,
        hot: r > 0.82,
      });
    }
    const mouse = { x: 0.5, y: 0.5, active: false };
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) / rect.width;
      mouse.y = (e.clientY - rect.top) / rect.height;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
    };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (mouse.active) {
          const dx = mouse.x - p.x,
            dy = mouse.y - p.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 0.02) {
            p.x -= dx * 0.02;
            p.y -= dy * 0.02;
          }
        }
        if (p.x < 0) p.x = 1;
        if (p.x > 1) p.x = 0;
        if (p.y < 0) p.y = 1;
        if (p.y > 1) p.y = 0;
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i],
            b = particles[j];
          const dx = (a.x - b.x) * W,
            dy = (a.y - b.y) * H;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            const op = (1 - d / 120) * 0.18;
            ctx.strokeStyle = `oklch(68% 0.195 42 / ${op})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x * W, a.y * H);
            ctx.lineTo(b.x * W, b.y * H);
            ctx.stroke();
          }
        }
      }
      for (const p of particles) {
        ctx.beginPath();
        ctx.fillStyle = p.hot ? "oklch(68% 0.195 42 / 0.9)" : "oklch(28% 0.01 60 / 0.5)";
        ctx.arc(p.x * W, p.y * H, p.s, 0, Math.PI * 2);
        ctx.fill();
        if (p.hot) {
          ctx.beginPath();
          ctx.fillStyle = "oklch(68% 0.195 42 / 0.2)";
          ctx.arc(p.x * W, p.y * H, p.s * 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />;
}

function FloatingChip({ style, icon, label, accent }: { style?: CSSProperties; icon: ReactNode; label: string; accent?: boolean }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      style={{
        position: "absolute",
        ...style,
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 14px",
        borderRadius: 14,
        background: accent ? "var(--accent)" : "white",
        color: accent ? "white" : "var(--ink)",
        border: accent ? "none" : "1px solid var(--line-2)",
        boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-md)",
        fontSize: 13,
        fontWeight: 600,
        transform: hover ? "translateY(-3px)" : "translateY(0)",
        transition: "all 220ms cubic-bezier(.2,.7,.2,1)",
        animation: "float 6s ease-in-out infinite",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span
        style={{
          width: 28,
          height: 28,
          borderRadius: 8,
          background: accent ? "rgba(255,255,255,.18)" : "var(--bg-3)",
          display: "grid",
          placeItems: "center",
          color: accent ? "white" : "var(--accent)",
        }}
      >
        {icon}
      </span>
      {label}
    </div>
  );
}

function Hero() {
  return (
    <section id="top" style={{ position: "relative", padding: "40px 0 60px", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            right: -160,
            top: -80,
            width: 540,
            height: 540,
            borderRadius: "50%",
            background: "radial-gradient(circle at center, oklch(80% 0.18 50 / 0.22), transparent 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -120,
            bottom: -120,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "radial-gradient(circle at center, oklch(80% 0.1 250 / 0.1), transparent 60%)",
          }}
        />
      </div>

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px", position: "relative" }}>
        <div className="reveal" style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "6px 14px 6px 8px",
              border: "1px solid var(--line)",
              background: "white",
              borderRadius: 999,
              fontSize: 13,
              color: "var(--ink-2)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "3px 10px",
                borderRadius: 999,
                background: "var(--accent)",
                color: "white",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.06em",
              }}
            >
              NEW
            </span>
            <span>AI-native engineering, from architecture to launch</span>
            <Icon.ArrowUpRight />
          </div>
        </div>

        <h1
          className="reveal"
          style={{
            textAlign: "center",
            margin: "0 auto",
            maxWidth: 980,
            fontSize: "clamp(44px, 7vw, 104px)",
            lineHeight: 0.96,
            letterSpacing: "-0.035em",
            fontWeight: 700,
          }}
        >
          Ship software that{" "}
          <span style={{ color: "var(--accent)", position: "relative" }}>
            actually scales
            <svg
              aria-hidden
              viewBox="0 0 420 20"
              style={{ position: "absolute", left: 0, right: 0, bottom: -8, width: "100%", height: 16 }}
            >
              <path
                d="M5 12 Q 100 2, 210 10 T 415 8"
                stroke="var(--accent)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                opacity="0.55"
              />
            </svg>
          </span>
          <br />
          with a team that <span className="serif" style={{ color: "var(--ink)", fontStyle: "italic" }}>gets it.</span>
        </h1>

        <p
          className="reveal"
          style={{
            textAlign: "center",
            maxWidth: 680,
            margin: "28px auto 0",
            fontSize: 18,
            lineHeight: 1.55,
            color: "var(--ink-2)",
          }}
        >
          SC Tech Inc is a boutique technology consultancy. Senior-only team, 25+ years shipping production software —
          from Fortune 500 enterprise portals to AI-native SaaS platforms running live today.
        </p>

        <div
          className="reveal"
          style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 34, flexWrap: "wrap" }}
        >
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "16px 26px",
              borderRadius: 999,
              fontWeight: 600,
              fontSize: 15,
              background: "var(--accent)",
              color: "white",
              boxShadow: "0 10px 30px -6px oklch(68% 0.195 42 / 0.55)",
              transition: "transform 180ms, box-shadow 180ms",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 16px 40px -6px oklch(68% 0.195 42 / 0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 10px 30px -6px oklch(68% 0.195 42 / 0.55)";
            }}
          >
            Book a discovery call <Icon.Arrow />
          </a>
          <a
            href="#cases"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "16px 22px",
              borderRadius: 999,
              fontWeight: 600,
              fontSize: 15,
              background: "white",
              color: "var(--ink)",
              border: "1px solid var(--line)",
              transition: "all 180ms",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--ink)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--line)";
            }}
          >
            See our work
          </a>
        </div>

        <div
          className="reveal"
          style={{
            marginTop: 44,
            position: "relative",
            height: "clamp(260px, 32vw, 420px)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            background: "linear-gradient(180deg, oklch(97% 0.01 65) 0%, oklch(99% 0.005 65) 100%)",
            border: "1px solid var(--line-2)",
          }}
        >
          <ParticleHero />
          <FloatingChip style={{ top: "14%", left: "8%" }} icon={<Icon.Code />} label="Custom dev" />
          <FloatingChip style={{ top: "22%", right: "10%" }} icon={<Icon.Cloud />} label="Cloud ops" accent />
          <FloatingChip style={{ bottom: "18%", left: "16%" }} icon={<Icon.Data />} label="Data platforms" />
          <FloatingChip style={{ bottom: "14%", right: "14%" }} icon={<Icon.AI />} label="AI systems" />
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              width: 130,
              height: 130,
              borderRadius: 26,
              background: "white",
              boxShadow: "var(--shadow-lg)",
              display: "grid",
              placeItems: "center",
              border: "1px solid var(--line-2)",
            }}
          >
            <Image
              src="/sctech-logo.png"
              alt="SC Tech Inc"
              width={86}
              height={86}
              style={{ height: 86, width: "auto", filter: "drop-shadow(0 8px 16px rgba(230,110,40,.35))" }}
            />
          </div>
        </div>

        <div className="reveal" style={{ marginTop: 44, textAlign: "center" }}>
          <div
            className="mono"
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              color: "var(--ink-3)",
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Past engagements & partners include
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "24px 48px",
              opacity: 0.72,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            {["Microsoft", "UBS", "Credit Suisse", "NOV", "Xerox", "JV Industrial", "Gallant Industrial"].map((n) => (
              <div key={n} style={{ fontSize: 18, color: "var(--ink-2)" }}>
                {n}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ Section head helper ============ */
function SectionHead({
  eyebrow,
  title,
  sub,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      className="reveal"
      style={{
        textAlign: align,
        maxWidth: align === "center" ? 780 : 720,
        margin: align === "center" ? "0 auto" : undefined,
      }}
    >
      <div
        className="mono"
        style={{
          fontSize: 12,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--accent-ink)",
          marginBottom: 14,
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span style={{ width: 18, height: 1, background: "var(--accent)" }} />
        {eyebrow}
      </div>
      <h2
        style={{
          fontSize: "clamp(34px, 4.4vw, 56px)",
          letterSpacing: "-0.03em",
          lineHeight: 1.02,
          fontWeight: 700,
          margin: 0,
        }}
      >
        {title}
      </h2>
      {sub && (
        <p style={{ marginTop: 18, maxWidth: 580, fontSize: 17, lineHeight: 1.55, color: "var(--ink-2)" }}>{sub}</p>
      )}
    </div>
  );
}

/* ============ SERVICES ============ */
function Services() {
  const [active, setActive] = useState(0);
  const items = [
    {
      icon: <Icon.AI />,
      title: "AI-Native Product Engineering",
      blurb:
        "We build software where AI is a first-class component, not a bolt-on. Multi-agent orchestration, MCP servers, retrieval pipelines, voice agents — shipped into production.",
      points: ["Claude & OpenAI APIs · MCP servers", "Multi-agent orchestration & RAG", "Voice agents (Vapi), LangGraph, GoHighLevel"],
    },
    {
      icon: <Icon.Code />,
      title: "Full-Stack SaaS Builds",
      blurb:
        "End-to-end product development on a modern, production-proven stack. Web, API, mobile — typed top to bottom, tested, shipped.",
      points: ["Next.js 15/16 · React 19 · TypeScript", "Hono · Supabase · Prisma · Trigger.dev", "React Native · Expo · EAS (iOS + Android)"],
    },
    {
      icon: <Icon.Architecture />,
      title: "Architecture & Systems Design",
      blurb:
        "Registry-driven workflow engines, event-driven pipelines, domain models that survive contact with reality. Design before we build.",
      points: ["Reference architecture & trade-off docs", "Domain models & API contracts", "Migration & legacy-bridging strategy"],
    },
    {
      icon: <Icon.Data />,
      title: "Systems & Workflow Automation",
      blurb:
        "Replace spreadsheets, manual handoffs, and duct-taped CRMs with registry-driven automation. AI-assisted document extraction, multi-stage dispatch, compliance-gated approvals.",
      points: ["JobNimbus · EagleView · Roofr · Twilio · Mailjet", "Trigger.dev jobs · pg-boss · n8n · Pipedream", "Document extraction & AI templating"],
    },
    {
      icon: <Icon.Cloud />,
      title: "Legacy Modernization",
      blurb:
        "Bring older enterprise stacks forward without a rip-and-replace. SharePoint, .NET, Oracle PL/SQL, SQL Server — all transformed, all bridged.",
      points: ["SharePoint 2003–2013 → modern portals", ".NET Framework → TypeScript services", "Oracle PL/SQL → modern data platforms"],
    },
    {
      icon: <Icon.Shield />,
      title: "Technical Leadership",
      blurb:
        "Fractional CTO for founders and operators who need senior judgment in the room — not a 40-person agency. Architecture reviews, vendor calls, hiring, and exec translation.",
      points: ["Architecture & build-vs-buy calls", "Hiring, mentoring, engineering process", "P&L-aware technology strategy"],
    },
  ];
  return (
    <section id="services" style={{ padding: "120px 0", position: "relative" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
        <SectionHead
          eyebrow="What we do"
          title={
            <>
              A <span style={{ color: "var(--accent)" }}>small team</span> that covers the whole stack.
            </>
          }
          sub="Generalists on purpose. One team, one contract, end-to-end accountability — from the whiteboard sketch to the production incident at 3am."
        />
        <div
          className="services-grid"
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: "var(--line-2)",
            border: "1px solid var(--line-2)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
          }}
        >
          {items.map((it, i) => (
            <div
              key={it.title}
              onMouseEnter={() => setActive(i)}
              className="reveal"
              style={{
                background: active === i ? "white" : "var(--bg)",
                padding: "32px 30px",
                position: "relative",
                transition: "all 260ms ease",
                cursor: "default",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  display: "grid",
                  placeItems: "center",
                  background: active === i ? "var(--accent)" : "white",
                  color: active === i ? "white" : "var(--accent)",
                  border: "1px solid var(--line-2)",
                  transition: "all 260ms",
                }}
              >
                {it.icon}
              </div>
              <h3 style={{ margin: "18px 0 8px", fontSize: 20, letterSpacing: "-0.01em", fontWeight: 700 }}>
                {it.title}
              </h3>
              <p style={{ margin: 0, color: "var(--ink-2)", fontSize: 15, lineHeight: 1.55 }}>{it.blurb}</p>
              <ul
                style={{
                  margin: "18px 0 0",
                  padding: 0,
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                {it.points.map((p) => (
                  <li
                    key={p}
                    style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--ink-2)" }}
                  >
                    <span
                      style={{
                        width: 14,
                        height: 14,
                        borderRadius: 999,
                        background: "var(--bg-3)",
                        display: "grid",
                        placeItems: "center",
                        color: "var(--accent)",
                      }}
                    >
                      <Icon.Check style={{ width: 10, height: 10 }} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: 2,
                  background: "var(--accent)",
                  transform: `scaleX(${active === i ? 1 : 0})`,
                  transformOrigin: "left",
                  transition: "transform 300ms ease",
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px){
          .services-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 881px) and (max-width: 1100px){
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

/* ============ STATS ============ */
function Stats() {
  const items = [
    { num: "25+", label: "Years shipping production software" },
    { num: "70%+", label: "Reduction in estimate turnaround — Home Team Roofing" },
    { num: "1,300+", label: "Craftsmen on a live dispatch platform — Gallant Industrial" },
    { num: "25%", label: "Under budget, ahead of schedule — JV Industrial" },
  ];
  return (
    <section style={{ padding: "20px 0 80px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
        <div
          className="reveal stats-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            background: "var(--ink)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            color: "white",
          }}
        >
          {items.map((it, i) => (
            <div key={i} style={{ padding: "36px 32px", background: "var(--ink)", position: "relative" }}>
              <div style={{ fontSize: "clamp(32px, 3.4vw, 46px)", fontWeight: 700, letterSpacing: "-0.03em" }}>
                <span style={{ color: i === 0 ? "var(--accent)" : "white" }}>{it.num}</span>
              </div>
              <div
                style={{
                  marginTop: 8,
                  color: "rgba(255,255,255,.6)",
                  fontSize: 14,
                  lineHeight: 1.4,
                  maxWidth: 240,
                }}
              >
                {it.label}
              </div>
              {i < items.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    top: 24,
                    bottom: 24,
                    width: 1,
                    background: "rgba(255,255,255,.08)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px){
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

/* ============ PRODUCT DEMO ============ */
type DemoTabId = "overview" | "services" | "pipeline" | "cost";

function ProductDemo() {
  const [tab, setTab] = useState<DemoTabId>("overview");
  const tabs: { id: DemoTabId; label: string }[] = [
    { id: "overview", label: "Overview" },
    { id: "services", label: "Services health" },
    { id: "pipeline", label: "Deploy pipeline" },
    { id: "cost", label: "Cost & usage" },
  ];
  return (
    <section style={{ padding: "80px 0 120px", position: "relative" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
        <SectionHead
          eyebrow="What we ship"
          title={
            <>
              Operations-grade visibility, <span className="serif">from day one.</span>
            </>
          }
          sub="Every system we build ships with real observability — deploys, incidents, cost, usage — not as an afterthought. Representative UI below."
          align="center"
        />
        <div
          className="reveal"
          style={{
            marginTop: 54,
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            background: "var(--ink)",
            color: "white",
            boxShadow: "0 30px 60px -30px rgba(30,20,10,.4)",
            border: "1px solid oklch(25% 0.012 60)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "14px 18px",
              borderBottom: "1px solid oklch(25% 0.012 60)",
              background: "oklch(16% 0.01 60)",
            }}
          >
            <div style={{ display: "flex", gap: 6 }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
            </div>
            <div className="mono" style={{ margin: "0 auto", fontSize: 12, color: "rgba(255,255,255,.5)" }}>
              ops.sctech-inc.com / demo
            </div>
          </div>

          <div className="demo-grid" style={{ display: "grid", gridTemplateColumns: "220px 1fr" }}>
            <aside className="demo-side" style={{ padding: 18, borderRight: "1px solid oklch(25% 0.012 60)" }}>
              <div
                className="mono"
                style={{
                  fontSize: 10,
                  color: "rgba(255,255,255,.4)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  margin: "2px 10px 10px",
                }}
              >
                Workspaces
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {tabs.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTab(t.id)}
                    style={{
                      textAlign: "left",
                      padding: "10px 12px",
                      borderRadius: 8,
                      background: tab === t.id ? "oklch(68% 0.195 42 / 0.15)" : "transparent",
                      color: tab === t.id ? "var(--accent-2)" : "rgba(255,255,255,.7)",
                      fontWeight: tab === t.id ? 600 : 500,
                      fontSize: 14,
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      transition: "all 160ms",
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: tab === t.id ? "var(--accent)" : "rgba(255,255,255,.25)",
                      }}
                    />
                    {t.label}
                  </button>
                ))}
              </div>
              <div
                style={{
                  marginTop: 24,
                  padding: 14,
                  borderRadius: 12,
                  background: "oklch(22% 0.01 60)",
                  border: "1px solid oklch(28% 0.012 60)",
                }}
              >
                <div style={{ fontSize: 12, color: "rgba(255,255,255,.5)" }}>On-call</div>
                <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 8 }}>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #ff9c6b, #ff5e3a)",
                    }}
                  />
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>SC Tech</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,.5)" }}>CST · available</div>
                  </div>
                </div>
              </div>
            </aside>
            <div style={{ padding: 26, minHeight: 420 }}>
              {tab === "overview" && <TabOverview />}
              {tab === "services" && <TabServices />}
              {tab === "pipeline" && <TabPipeline />}
              {tab === "cost" && <TabCost />}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 760px){
          .demo-grid { grid-template-columns: 1fr !important; }
          .demo-side { border-right: none !important; border-bottom: 1px solid oklch(25% 0.012 60); display: flex !important; overflow-x: auto; gap: 6px; padding: 12px !important; }
          .demo-side > .mono { display: none; }
          .demo-side > div:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}

function DemoCard({ label, value, trend, trendColor }: { label: string; value: string; trend?: string; trendColor?: string }) {
  return (
    <div
      style={{
        padding: "18px 20px",
        borderRadius: 12,
        background: "oklch(22% 0.01 60)",
        border: "1px solid oklch(28% 0.012 60)",
      }}
    >
      <div style={{ fontSize: 12, color: "rgba(255,255,255,.5)" }}>{label}</div>
      <div style={{ marginTop: 6, display: "flex", alignItems: "baseline", gap: 8 }}>
        <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em" }}>{value}</div>
        {trend && (
          <div style={{ fontSize: 12, color: trendColor || "oklch(75% 0.15 140)", fontWeight: 600 }}>{trend}</div>
        )}
      </div>
    </div>
  );
}

function TabOverview() {
  const bars = [36, 52, 44, 68, 72, 61, 78, 84, 76, 92, 88, 94];
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 20 }}>
        <div>
          <div
            className="mono"
            style={{
              fontSize: 11,
              color: "rgba(255,255,255,.5)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Overview · last 30 days
          </div>
          <h3 style={{ margin: "8px 0 0", fontSize: 22, fontWeight: 700 }}>All systems operational</h3>
        </div>
        <div className="mono" style={{ fontSize: 12, color: "oklch(75% 0.15 140)" }}>
          ● healthy
        </div>
      </div>
      <div className="demo-cards" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
        <DemoCard label="Uptime" value="99.98%" trend="+0.02" />
        <DemoCard label="Median latency" value="142ms" trend="−18ms" />
        <DemoCard label="Incidents this week" value="0" trend="0 open" />
      </div>
      <div
        style={{
          marginTop: 20,
          padding: 18,
          borderRadius: 12,
          background: "oklch(22% 0.01 60)",
          border: "1px solid oklch(28% 0.012 60)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 14,
            fontSize: 13,
            color: "rgba(255,255,255,.6)",
          }}
        >
          <span>Requests per minute</span>
          <span className="mono" style={{ color: "var(--accent-2)" }}>
            peak 12.4k rpm
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 120 }}>
          {bars.map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: `${h}%`,
                borderRadius: 4,
                background: i >= bars.length - 3 ? "var(--accent)" : "oklch(40% 0.02 60)",
                transition: "all 400ms",
              }}
            />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 720px){ .demo-cards { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}

function TabServices() {
  const rows = [
    { name: "api-gateway", status: "healthy", p50: "38ms", p99: "210ms", err: "0.01%" },
    { name: "checkout-svc", status: "healthy", p50: "84ms", p99: "430ms", err: "0.04%" },
    { name: "inventory-svc", status: "degraded", p50: "140ms", p99: "1.2s", err: "0.42%" },
    { name: "search-svc", status: "healthy", p50: "56ms", p99: "320ms", err: "0.02%" },
    { name: "auth-svc", status: "healthy", p50: "22ms", p99: "95ms", err: "0.00%" },
    { name: "notifications", status: "healthy", p50: "48ms", p99: "260ms", err: "0.05%" },
  ];
  const color = (s: string) =>
    s === "healthy" ? "oklch(75% 0.15 140)" : s === "degraded" ? "oklch(78% 0.16 70)" : "oklch(70% 0.18 20)";
  return (
    <div>
      <div
        className="mono"
        style={{ fontSize: 11, color: "rgba(255,255,255,.5)", letterSpacing: "0.14em", textTransform: "uppercase" }}
      >
        Services health · us-east-1
      </div>
      <div style={{ marginTop: 12, border: "1px solid oklch(28% 0.012 60)", borderRadius: 12, overflow: "hidden" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 0.8fr 0.8fr 0.8fr 0.8fr",
            padding: "10px 14px",
            background: "oklch(22% 0.01 60)",
            fontSize: 12,
            color: "rgba(255,255,255,.5)",
          }}
        >
          <div>Service</div>
          <div>Status</div>
          <div>p50</div>
          <div>p99</div>
          <div>Error rate</div>
        </div>
        {rows.map((r) => (
          <div
            key={r.name}
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 0.8fr 0.8fr 0.8fr 0.8fr",
              padding: "12px 14px",
              fontSize: 13,
              borderTop: "1px solid oklch(25% 0.012 60)",
              fontFamily: "var(--font-jetbrains-mono), monospace",
            }}
          >
            <div style={{ color: "white" }}>{r.name}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, color: color(r.status) }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: color(r.status) }} />
              {r.status}
            </div>
            <div style={{ color: "rgba(255,255,255,.7)" }}>{r.p50}</div>
            <div style={{ color: "rgba(255,255,255,.7)" }}>{r.p99}</div>
            <div style={{ color: r.err === "0.42%" ? "oklch(78% 0.16 70)" : "rgba(255,255,255,.7)" }}>{r.err}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TabPipeline() {
  const steps = ["build", "test", "stage", "canary", "production"];
  const status = ["done", "done", "done", "in_progress", "pending"];
  return (
    <div>
      <div
        className="mono"
        style={{ fontSize: 11, color: "rgba(255,255,255,.5)", letterSpacing: "0.14em", textTransform: "uppercase" }}
      >
        Deploy · pipeline #482 · main@a3f19b
      </div>
      <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 4 }}>
        {steps.map((s, i) => (
          <Fragment key={s}>
            <div
              style={{
                flex: 1,
                padding: "14px 16px",
                borderRadius: 10,
                border: `1px solid ${status[i] === "in_progress" ? "var(--accent)" : "oklch(28% 0.012 60)"}`,
                background:
                  status[i] === "done"
                    ? "oklch(22% 0.01 60)"
                    : status[i] === "in_progress"
                      ? "oklch(68% 0.195 42 / 0.15)"
                      : "transparent",
                position: "relative",
              }}
            >
              <div
                className="mono"
                style={{
                  fontSize: 10,
                  color: "rgba(255,255,255,.4)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                }}
              >
                Step {i + 1}
              </div>
              <div
                style={{
                  marginTop: 4,
                  fontSize: 14,
                  fontWeight: 600,
                  color: status[i] === "in_progress" ? "var(--accent-2)" : "white",
                }}
              >
                {s}
              </div>
              {status[i] === "in_progress" && (
                <div
                  style={{
                    marginTop: 10,
                    height: 4,
                    borderRadius: 999,
                    background: "oklch(28% 0.012 60)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "68%",
                      background: "var(--accent)",
                      animation: "fill 2.2s ease-in-out infinite",
                    }}
                  />
                </div>
              )}
              {status[i] === "done" && (
                <div
                  style={{
                    marginTop: 6,
                    fontSize: 11,
                    color: "oklch(75% 0.15 140)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <Icon.Check style={{ width: 12, height: 12 }} /> ok
                </div>
              )}
            </div>
            {i < steps.length - 1 && <div style={{ width: 14, height: 1, background: "oklch(28% 0.012 60)" }} />}
          </Fragment>
        ))}
      </div>
      <div
        style={{
          marginTop: 20,
          padding: 16,
          borderRadius: 12,
          background: "oklch(14% 0.008 60)",
          border: "1px solid oklch(25% 0.012 60)",
        }}
      >
        <div className="mono" style={{ fontSize: 12, lineHeight: 1.7 }}>
          <span style={{ color: "rgba(255,255,255,.4)" }}>[14:22:01]</span>{" "}
          <span style={{ color: "oklch(75% 0.15 140)" }}>✓</span>{" "}
          <span style={{ color: "rgba(255,255,255,.75)" }}>build complete · 42s</span>
          <br />
          <span style={{ color: "rgba(255,255,255,.4)" }}>[14:22:43]</span>{" "}
          <span style={{ color: "oklch(75% 0.15 140)" }}>✓</span>{" "}
          <span style={{ color: "rgba(255,255,255,.75)" }}>1,248 tests passed · 0 failed</span>
          <br />
          <span style={{ color: "rgba(255,255,255,.4)" }}>[14:23:11]</span>{" "}
          <span style={{ color: "oklch(75% 0.15 140)" }}>✓</span>{" "}
          <span style={{ color: "rgba(255,255,255,.75)" }}>deployed to staging</span>
          <br />
          <span style={{ color: "rgba(255,255,255,.4)" }}>[14:24:02]</span>{" "}
          <span style={{ color: "var(--accent-2)" }}>●</span>{" "}
          <span style={{ color: "white" }}>canary: 10% traffic · p50 OK · error rate 0.03%</span>
        </div>
      </div>
    </div>
  );
}

function TabCost() {
  return (
    <div>
      <div
        className="mono"
        style={{ fontSize: 11, color: "rgba(255,255,255,.5)", letterSpacing: "0.14em", textTransform: "uppercase" }}
      >
        Cost · current billing cycle
      </div>
      <div className="cost-grid" style={{ marginTop: 14, display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 14 }}>
        <div
          style={{
            padding: 18,
            borderRadius: 12,
            background: "oklch(22% 0.01 60)",
            border: "1px solid oklch(28% 0.012 60)",
          }}
        >
          <div style={{ fontSize: 13, color: "rgba(255,255,255,.5)" }}>Total spend</div>
          <div style={{ fontSize: 42, fontWeight: 700, letterSpacing: "-0.03em", marginTop: 4 }}>
            $42,188{" "}
            <span style={{ fontSize: 14, color: "oklch(75% 0.15 140)", fontWeight: 600 }}>−12% vs last cycle</span>
          </div>
          <div style={{ marginTop: 18 }}>
            {[
              { name: "Compute (Vercel + Fly)", v: 62, amt: "$26,156" },
              { name: "Data (Supabase + S3)", v: 22, amt: "$9,281" },
              { name: "Network / CDN", v: 10, amt: "$4,220" },
              { name: "Observability (Sentry)", v: 6, amt: "$2,531" },
            ].map((r) => (
              <div key={r.name} style={{ marginBottom: 12 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 12,
                    marginBottom: 4,
                    color: "rgba(255,255,255,.7)",
                  }}
                >
                  <span>{r.name}</span>
                  <span className="mono">{r.amt}</span>
                </div>
                <div style={{ height: 6, borderRadius: 999, background: "oklch(28% 0.012 60)", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${r.v}%`, background: "var(--accent)" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            padding: 18,
            borderRadius: 12,
            background: "oklch(22% 0.01 60)",
            border: "1px solid oklch(28% 0.012 60)",
          }}
        >
          <div style={{ fontSize: 13, color: "rgba(255,255,255,.5)" }}>Savings this quarter</div>
          <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em", marginTop: 4, color: "var(--accent-2)" }}>
            $38,400
          </div>
          <div style={{ marginTop: 12, fontSize: 13, color: "rgba(255,255,255,.6)", lineHeight: 1.5 }}>
            Rightsizing + reserved instances + cache tuning across 4 services.
          </div>
          <div style={{ marginTop: 18, paddingTop: 14, borderTop: "1px solid oklch(28% 0.012 60)" }}>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,.7)", lineHeight: 1.55 }}>
              Projected annualized savings: <span style={{ color: "white", fontWeight: 600 }}>$153,600</span>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 720px){ .cost-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}

/* ============ FEATURES ============ */
function Features() {
  const items = [
    {
      t: "Senior-only teams",
      b: "No juniors parked on your project. Every engineer on your engagement has 20+ years of production software experience.",
    },
    {
      t: "Fixed-scope or T&M",
      b: "Pick the commercial shape that fits. Fixed price when scope is clear, time & materials when we're discovering together, retainer for ongoing ops.",
    },
    {
      t: "Transparent by default",
      b: "Your Slack, your repos, your backlog. Demos every Friday. You see the work as it happens — no 'reveals.'",
    },
    {
      t: "Hand-off or run it",
      b: "We write the docs and runbooks to transfer cleanly. Or keep us on retainer to operate and evolve what we built.",
    },
    {
      t: "IP is yours, day one",
      b: "Every line of code, every design file — yours from commit #1. No licensing, no escrow, no surprises.",
    },
    {
      t: "Compliance-aware by default",
      b: "SOX-compliant access frameworks, HIPAA-adjacent controls, Azure AD / MSAL SSO, audit trails. Built in, not bolted on.",
    },
  ];
  return (
    <section id="about" style={{ padding: "120px 0", background: "var(--bg-2)", position: "relative" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
        <div className="feat-wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div className="feat-head" style={{ position: "sticky", top: 100 }}>
            <SectionHead
              eyebrow="How we're different"
              title={
                <>
                  We work like a <span className="serif">product team,</span> not an agency.
                </>
              }
              sub="No account managers, no status decks. You talk directly to the people building your software. Decisions happen in hours, not weeks."
            />
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginTop: 28,
                padding: "14px 22px",
                borderRadius: 999,
                background: "var(--ink)",
                color: "white",
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              Get in touch <Icon.Arrow />
            </a>
          </div>
          <div className="feat-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {items.map((f, i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  padding: 22,
                  borderRadius: "var(--radius)",
                  background: "white",
                  border: "1px solid var(--line-2)",
                  transition: "all 220ms",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--line-2)";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <div className="mono" style={{ fontSize: 11, color: "var(--accent-ink)", marginBottom: 10 }}>
                  0{i + 1}
                </div>
                <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.01em", marginBottom: 6 }}>{f.t}</div>
                <div style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.55 }}>{f.b}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 980px){
          .feat-wrap { grid-template-columns: 1fr !important; gap: 40px !important; }
          .feat-head { position: static !important; }
        }
        @media (max-width: 600px){ .feat-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

/* ============ PROCESS ============ */
function Process() {
  const steps = [
    {
      n: "01",
      t: "Discovery",
      d: "Two weeks. We read the code, talk to your team, interview customers. You get a written assessment — honest, sometimes uncomfortable, always useful.",
    },
    {
      n: "02",
      t: "Architecture",
      d: "We design the system on paper before we build it. Diagrams, trade-offs, cost models, risk register. You sign off before a single file is written.",
    },
    {
      n: "03",
      t: "Build",
      d: "Two-week sprints. Demo every Friday. Production deploys from week one. You watch the system come alive — not a Gantt chart.",
    },
    {
      n: "04",
      t: "Launch",
      d: "Canary rollouts, load tests, runbooks. We're on-call with you for the first 30 days post-launch — because that's where real systems break.",
    },
    {
      n: "05",
      t: "Evolve",
      d: "Stay on retainer, or hand off clean. Either way, you get docs, diagrams, and a team that knows the system cold — just in case.",
    },
  ];
  return (
    <section id="process" style={{ padding: "120px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
        <SectionHead
          eyebrow="How we work"
          title={
            <>
              Five phases. <span className="serif">No surprises.</span>
            </>
          }
          sub="The process is the product. 25+ years of repeatable playbook — every step earns its place."
        />
        <div style={{ marginTop: 60, display: "flex", flexDirection: "column" }}>
          {steps.map((s) => (
            <div
              key={s.n}
              className="reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr 2fr",
                gap: 40,
                alignItems: "start",
                padding: "36px 0",
                borderTop: "1px solid var(--line-2)",
              }}
            >
              <div className="mono" style={{ fontSize: 13, color: "var(--accent-ink)", letterSpacing: "0.12em" }}>
                PHASE {s.n}
              </div>
              <h3
                style={{
                  margin: 0,
                  fontSize: "clamp(24px, 2.4vw, 34px)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                }}
              >
                {s.t}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 16,
                  color: "var(--ink-2)",
                  lineHeight: 1.6,
                  maxWidth: 620,
                }}
              >
                {s.d}
              </p>
            </div>
          ))}
          <div style={{ borderBottom: "1px solid var(--line-2)" }} />
        </div>
      </div>
    </section>
  );
}

/* ============ CASE STUDIES ============ */
function Cases() {
  const items = [
    {
      tag: "Roofing Ops · Multi-Platform",
      title: "Re-platformed quote-to-close for a multi-state roofing operation",
      res: [
        "70%+ reduction in estimate turnaround",
        "Near-zero measurement-entry errors",
        "Became the foundation for the Rebel OS platform",
      ],
      color: "oklch(85% 0.1 50)",
    },
    {
      tag: "Industrial · Workforce Platform",
      title: "Moved 1,300+ craftsmen off spreadsheets onto a live dispatch platform",
      res: [
        "10-stage dispatch workflow end-to-end",
        "Full compliance validation (TWIC, Fit Test, D&A, MVR)",
        "Zero compliance-driven site rejections",
      ],
      color: "oklch(82% 0.08 180)",
    },
    {
      tag: "Financial Services · Enterprise Training",
      title: "Shipped a global SharePoint training platform across UBS and Credit Suisse",
      res: [
        "Thousands of staff, multiple continents",
        "Delivered via ACS/Xerox BPO engagement",
        "Three-year continuous run, team of three",
      ],
      color: "oklch(86% 0.09 90)",
    },
  ];
  return (
    <section id="cases" style={{ padding: "120px 0", background: "var(--bg-2)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 20,
            marginBottom: 48,
          }}
        >
          <SectionHead
            eyebrow="Selected work"
            title={
              <>
                Systems that <span style={{ color: "var(--accent)" }}>shipped</span> — and{" "}
                <span className="serif">stayed shipped.</span>
              </>
            }
          />
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 14,
              fontWeight: 600,
              color: "var(--ink)",
            }}
          >
            Discuss an engagement <Icon.ArrowUpRight />
          </a>
        </div>
        <div className="case-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {items.map((c, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                background: "white",
                border: "1px solid var(--line-2)",
                transition: "all 260ms cubic-bezier(.2,.7,.2,1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "var(--shadow-lg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  height: 160,
                  position: "relative",
                  background: `linear-gradient(135deg, ${c.color} 0%, oklch(97% 0.01 65) 100%)`,
                  borderBottom: "1px solid var(--line-2)",
                  overflow: "hidden",
                }}
              >
                <CaseArt variant={i} />
              </div>
              <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
                <div className="mono" style={{ fontSize: 11, letterSpacing: "0.12em", color: "var(--accent-ink)" }}>
                  {c.tag}
                </div>
                <h3 style={{ margin: 0, fontSize: 20, lineHeight: 1.2, letterSpacing: "-0.01em", fontWeight: 700 }}>
                  {c.title}
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    marginTop: "auto",
                    paddingTop: 14,
                    borderTop: "1px solid var(--line-2)",
                  }}
                >
                  {c.res.map((r) => (
                    <div
                      key={r}
                      style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--ink-2)" }}
                    >
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--accent)" }} />
                      {r}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* JV Industrial reference callout — single summarized mention */}
        <div
          className="reveal"
          style={{
            marginTop: 28,
            padding: "22px 26px",
            borderRadius: "var(--radius)",
            background: "white",
            border: "1px solid var(--line-2)",
            display: "flex",
            gap: 18,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            className="mono"
            style={{
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--accent-ink)",
              whiteSpace: "nowrap",
            }}
          >
            Reference on file
          </div>
          <div style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.55, flex: 1, minWidth: 280 }}>
            Earlier consulting engagement with <strong style={{ color: "var(--ink)" }}>JV Industrial Companies</strong>{" "}
            delivered a global SharePoint 2010 rollout <strong style={{ color: "var(--ink)" }}>25% under budget and
            ahead of schedule</strong>. The client&apos;s Director of IT later provided a formal letter of reference —
            available on request.
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 980px){ .case-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function CaseArt({ variant }: { variant: number }) {
  if (variant === 0)
    return (
      <svg width="100%" height="100%" viewBox="0 0 400 160" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="dots0" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="oklch(68% 0.18 42 / 0.4)" />
          </pattern>
        </defs>
        <rect width="400" height="160" fill="url(#dots0)" />
        <circle cx="290" cy="80" r="55" fill="oklch(68% 0.195 42)" opacity="0.95" />
        <circle cx="270" cy="80" r="38" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 6" />
        <rect x="60" y="46" width="100" height="68" rx="10" fill="white" stroke="var(--ink)" strokeWidth="2" />
        <rect x="74" y="62" width="50" height="6" rx="3" fill="var(--ink)" />
        <rect x="74" y="76" width="72" height="4" rx="2" fill="oklch(78% 0.02 60)" />
        <rect x="74" y="86" width="58" height="4" rx="2" fill="oklch(78% 0.02 60)" />
        <rect x="74" y="96" width="42" height="4" rx="2" fill="oklch(78% 0.02 60)" />
      </svg>
    );
  if (variant === 1)
    return (
      <svg width="100%" height="100%" viewBox="0 0 400 160" preserveAspectRatio="xMidYMid slice">
        <rect x="40" y="30" width="320" height="100" rx="12" fill="white" stroke="var(--ink)" strokeWidth="2" />
        <rect x="40" y="30" width="320" height="22" rx="12" fill="var(--ink)" />
        <circle cx="54" cy="41" r="3" fill="oklch(68% 0.195 42)" />
        <circle cx="64" cy="41" r="3" fill="oklch(85% 0.14 90)" />
        <circle cx="74" cy="41" r="3" fill="oklch(78% 0.18 140)" />
        <path
          d="M60 100 L100 80 L140 92 L180 70 L220 86 L260 60 L300 70 L340 50"
          stroke="oklch(68% 0.195 42)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="340" cy="50" r="5" fill="oklch(68% 0.195 42)" />
      </svg>
    );
  return (
    <svg width="100%" height="100%" viewBox="0 0 400 160" preserveAspectRatio="xMidYMid slice">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <rect
          key={i}
          x={60 + (i % 3) * 90}
          y={30 + Math.floor(i / 3) * 32}
          width="70"
          height="22"
          rx="6"
          fill={i === 4 ? "oklch(68% 0.195 42)" : "white"}
          stroke="var(--ink)"
          strokeWidth="2"
        />
      ))}
      <path
        d="M130 41 L150 41 M220 41 L240 41 M130 73 L150 73 M220 73 L240 73 M130 105 L150 105 M220 105 L240 105"
        stroke="var(--ink)"
        strokeWidth="2"
        opacity="0.4"
      />
    </svg>
  );
}

/* ============ FAQ ============ */
function FAQ() {
  const [open, setOpen] = useState<number>(0);
  const qs = [
    {
      q: "How do engagements usually start?",
      a: "With a two-week paid discovery. We read the code, talk to your team, and write a plan. If we aren't the right fit after that, you walk away with a useful document and no further obligation.",
    },
    {
      q: "What's your team size and stack?",
      a: "A typical engagement is a principal plus 2–3 senior engineers and a designer. Core stack: TypeScript, Next.js 15/16, React 19, Hono, Supabase/Postgres, Prisma, Trigger.dev, React Native/Expo. Legacy stacks welcome — SharePoint, .NET, Oracle PL/SQL, and SQL Server are in-house strengths.",
    },
    {
      q: "Do you sign NDAs, MSAs, and DPAs?",
      a: "Yes to all. We work under your paper or ours. Turnaround is typically 3–5 business days.",
    },
    {
      q: "How do you price?",
      a: "Fixed price when scope is clearly bounded (migrations, integrations, discrete features). Time & materials for open-ended product work. Retainer for ongoing operations. No hidden fees, no markup on cloud spend.",
    },
    {
      q: "Will you work with our in-house team?",
      a: "Yes — that's our preferred mode. We embed, pair with your engineers, and leave them stronger. By the end, your team owns the system; we're just a phone call away.",
    },
    {
      q: "Where are you based?",
      a: "Conroe, TX — Greater Houston Area. Remote-capable; we've shipped software in sync with teams from Austin to Europe and South America.",
    },
  ];
  return (
    <section id="insights" style={{ padding: "80px 0 120px" }}>
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 28px" }}>
        <SectionHead eyebrow="Questions" title={<>The <span className="serif">usual</span> ones.</>} align="center" />
        <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 8 }}>
          {qs.map((item, i) => (
            <div
              key={i}
              style={{
                border: "1px solid var(--line-2)",
                borderRadius: "var(--radius)",
                background: open === i ? "white" : "var(--bg)",
                transition: "all 220ms",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "22px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                }}
              >
                <span style={{ fontWeight: 600, fontSize: 16, letterSpacing: "-0.01em" }}>{item.q}</span>
                <span
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 999,
                    display: "grid",
                    placeItems: "center",
                    background: open === i ? "var(--accent)" : "var(--bg-3)",
                    color: open === i ? "white" : "var(--ink)",
                    transition: "all 220ms",
                    flexShrink: 0,
                  }}
                >
                  {open === i ? <Icon.Minus /> : <Icon.Plus />}
                </span>
              </button>
              <div
                style={{
                  overflow: "hidden",
                  maxHeight: open === i ? 320 : 0,
                  transition: "max-height 320ms cubic-bezier(.2,.7,.2,1)",
                }}
              >
                <div style={{ padding: "0 24px 22px", fontSize: 15, color: "var(--ink-2)", lineHeight: 1.6, maxWidth: 820 }}>
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ CTA ============ */
function CTA() {
  return (
    <section id="contact" style={{ padding: "60px 0 100px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
        <div
          className="reveal"
          style={{
            position: "relative",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            background: "linear-gradient(135deg, var(--ink) 0%, oklch(22% 0.014 60) 100%)",
            color: "white",
            padding: "clamp(40px, 6vw, 80px)",
          }}
        >
          <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.45 }}>
            <div
              style={{
                position: "absolute",
                right: -80,
                top: -80,
                width: 420,
                height: 420,
                borderRadius: "50%",
                background: "radial-gradient(circle at center, oklch(68% 0.195 42 / 0.5), transparent 65%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: -100,
                bottom: -100,
                width: 360,
                height: 360,
                borderRadius: "50%",
                background: "radial-gradient(circle at center, oklch(75% 0.16 50 / 0.25), transparent 65%)",
              }}
            />
          </div>
          <div
            className="cta-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.3fr 1fr",
              gap: 60,
              alignItems: "center",
              position: "relative",
            }}
          >
            <div>
              <div
                className="mono"
                style={{ fontSize: 12, letterSpacing: "0.18em", color: "var(--accent-2)", marginBottom: 18 }}
              >
                LET&apos;S BUILD SOMETHING
              </div>
              <h2
                style={{
                  margin: 0,
                  fontSize: "clamp(36px, 5vw, 60px)",
                  letterSpacing: "-0.035em",
                  lineHeight: 1,
                  fontWeight: 700,
                }}
              >
                Got a system that <span className="serif" style={{ color: "var(--accent-2)" }}>needs to work?</span>
              </h2>
              <p
                style={{
                  marginTop: 22,
                  fontSize: 17,
                  lineHeight: 1.55,
                  color: "rgba(255,255,255,.7)",
                  maxWidth: 460,
                }}
              >
                Tell us what you&apos;re building. We&apos;ll tell you — honestly — whether we&apos;re the right team for
                it, and how we&apos;d approach it.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href="mailto:connect@sctech-inc.com"
                style={{
                  padding: "22px 26px",
                  borderRadius: "var(--radius)",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,.1)",
                  display: "block",
                }}
              >
                <div style={{ fontSize: 12, color: "rgba(255,255,255,.55)", marginBottom: 6 }}>Email us directly</div>
                <div style={{ fontSize: 20, fontWeight: 600 }}>connect@sctech-inc.com</div>
              </a>
              <a
                href="mailto:connect@sctech-inc.com?subject=Discovery%20call%20request"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "22px 26px",
                  borderRadius: "var(--radius)",
                  gap: 16,
                  background: "var(--accent)",
                  color: "white",
                  fontWeight: 600,
                  transition: "transform 180ms",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
              >
                <div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,.75)", fontWeight: 500 }}>Book a call</div>
                  <div style={{ fontSize: 18, marginTop: 2 }}>30 min with a principal engineer</div>
                </div>
                <Icon.Arrow />
              </a>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 860px){ .cta-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }
      `}</style>
    </section>
  );
}

/* ============ FOOTER ============ */
function Footer() {
  const cols = [
    {
      h: "Services",
      l: [
        { label: "AI-Native Engineering", href: "#services" },
        { label: "Full-Stack SaaS Builds", href: "#services" },
        { label: "Architecture & Systems", href: "#services" },
        { label: "Workflow Automation", href: "#services" },
        { label: "Legacy Modernization", href: "#services" },
        { label: "Technical Leadership", href: "#services" },
      ],
    },
    {
      h: "Company",
      l: [
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      h: "Work",
      l: [
        { label: "Case studies", href: "#cases" },
        { label: "Playbook", href: "#process" },
      ],
    },
    {
      h: "Legal",
      l: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
    },
  ];
  const socials = [
    { label: "LinkedIn", initials: "Li", href: "https://www.linkedin.com/company/sctech-inc" },
    { label: "GitHub", initials: "Gh", href: "https://github.com/SCTECHINC" },
  ];
  return (
    <footer style={{ background: "var(--ink)", color: "white", padding: "80px 0 40px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
        <div className="foot-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 40 }}>
          <div>
            <Logo invert />
            <p
              style={{
                marginTop: 18,
                color: "rgba(255,255,255,.55)",
                fontSize: 14,
                lineHeight: 1.55,
                maxWidth: 300,
              }}
            >
              A technology consultancy for teams who want systems that survive contact with reality. Based in Conroe,
              TX — Greater Houston Area.
            </p>
            <div style={{ marginTop: 22, display: "flex", gap: 8 }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "rgba(255,255,255,.06)",
                    border: "1px solid rgba(255,255,255,.1)",
                    display: "grid",
                    placeItems: "center",
                    fontSize: 12,
                    color: "rgba(255,255,255,.7)",
                    transition: "all 180ms",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--accent)";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.borderColor = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,.06)";
                    e.currentTarget.style.color = "rgba(255,255,255,.7)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,.1)";
                  }}
                >
                  {s.initials}
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <div
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,.4)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                {c.h}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {c.l.map((x) => (
                  <a
                    key={x.label}
                    href={x.href}
                    style={{ fontSize: 14, color: "rgba(255,255,255,.75)", transition: "color 160ms" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.75)")}
                  >
                    {x.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 60,
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,.08)",
            display: "flex",
            justifyContent: "space-between",
            gap: 20,
            flexWrap: "wrap",
            color: "rgba(255,255,255,.4)",
            fontSize: 13,
          }}
        >
          <div>© 2026 SC Tech Inc. All rights reserved.</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "oklch(75% 0.15 140)" }} />
            All systems operational
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 980px){ .foot-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; } }
        @media (max-width: 560px){ .foot-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}

/* ============ PAGE ============ */
export default function Page() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Stats />
      <ProductDemo />
      <Features />
      <Process />
      <Cases />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
