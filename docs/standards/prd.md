# SC Tech Inc — Website PRD

## Overview
Build a professional company website for SC Tech Inc (sctech-inc.com) that serves as the public face of the consulting business and satisfies Stripe account activation requirements.

## Background
SC Tech Inc is a boutique technology consulting firm owned and operated by Spencer Caldwell. The company delivers AI-native product engineering, full-stack SaaS builds, systems/workflow automation, legacy modernization, and fractional technical leadership. Spencer has 25+ years of experience spanning Fortune 500 enterprise work (Microsoft, NOV, Enron, ACS/Xerox) and modern AI-native SaaS (Rebel OS, JARVIS, GRIT Hub).

The immediate trigger for this website is Stripe account activation, which requires a publicly viewable business website. Beyond Stripe, this site will serve as the company's permanent online presence and a sales surface for the consulting practice.

## Goals
1. **Stripe Compliance** — Meet all Stripe website requirements for account activation
2. **Professional Presence** — Represent SC Tech as a credible, high-quality consulting firm
3. **Service Showcase** — Clearly communicate what SC Tech does and who it serves
4. **Contact Channel** — Provide clear ways for potential clients to reach out

## Stripe Requirements Checklist
- [ ] Description of services offered
- [ ] Customer service contact info (email, phone)
- [ ] Business address (Texas)
- [ ] Privacy policy page
- [ ] Refund/cancellation policy (consulting services — no physical goods)
- [ ] HTTPS (automatic via Vercel)
- [ ] Publicly viewable (no password protection)
- [ ] Business name matches Stripe account ("SC Tech")

## Target Audience
- Potential consulting clients (businesses needing custom software, technical leadership, or system modernization)
- Stripe compliance reviewers
- Partners and vendors

## Site Sections
1. **Hero / Home** — Company branding, tagline, value proposition
2. **Services / Capabilities** — Five pillars from `docs/.ai-assets/capabilities.md`: AI-Native Product Engineering, Full-Stack SaaS Builds, Systems & Workflow Automation, Legacy Modernization, Technical Leadership / Fractional CTO
3. **About** — Spencer's background, company philosophy (boutique, fast-acting, over-delivering)
4. **Case Studies** — Home Team Roofing (estimate pipeline, 70%+ turnaround reduction) and GRIT Hub (1,300+ craftsman workforce platform). Source: `docs/.ai-assets/case-studies.md`
5. **Testimonials** — Client recommendations (e.g., JV Industrial letter — 25% under budget, ahead of schedule)
6. **Contact** — Phone, email, business address, contact form (optional)
7. **Privacy Policy** — Data handling disclosure (required by Stripe)
8. **Terms of Service / Refund Policy** — Cancellation and refund terms for consulting engagements

## Tech Stack
- **Framework:** TBD — likely Next.js + TypeScript + Tailwind + shadcn/ui (matches existing project portfolio)
- **Hosting:** Vercel (free tier)
- **Deployment:** GitHub → Vercel auto-deploy
- **Domain:** sctech-inc.com

## Design Direction
- Professional, clean, modern
- Boutique consulting firm aesthetic — not generic corporate
- Fast-loading, responsive
- Design assets TBD (Spencer has local content to share)

## Success Criteria
- Stripe accepts the website for account activation
- Site loads fast, looks professional on desktop and mobile
- All required legal pages present
- Spencer approves the design and content

## Open Questions
- [x] What specific services should be listed? — **Resolved:** five pillars in `docs/.ai-assets/capabilities.md`
- [x] Initial case studies? — **Resolved:** Home Team Roofing + GRIT Hub in `docs/.ai-assets/case-studies.md`
- [ ] Business address for contact page?
- [ ] Logo / brand colors / design assets?
- [ ] Permission to use Cody Caillet testimonial?
- [ ] Any other testimonials or client references?
- [ ] Custom domain already pointing to Vercel, or needs DNS setup?
