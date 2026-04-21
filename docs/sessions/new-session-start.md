# SC Tech Inc Website - Startup Prompt

Copy and paste this to start a new session:

---

I'm building the SC Tech Inc company website (sctech-inc.com). This is a brand new project — no code yet.

**What is SC Tech?**
SC Tech Inc is my boutique technology consulting firm. I'm Spencer Caldwell, 25+ years as a lead developer, technical architect, and project manager. Career spans Microsoft, National Oilwell Varco, Enron, ACS/Xerox, JV Industrial, and Gulf Coast Solutions. Modern stack: Next.js, React Native, Supabase, TypeScript. Legacy expertise: SharePoint, .NET, C#, SQL Server.

**Why we're building this:**
I'm setting up SC Tech on Stripe and they require a publicly viewable business website that matches my business name. Beyond Stripe, this will be the permanent online presence for the consulting business.

**Read these docs first:**
- `docs/standards/prd.md` — Full PRD with Stripe requirements checklist
- `docs/sessions/website-build-feature/session-log-1.md` — Kickoff session with all context
- `docs/.ai-assets/spencer-resume.md` — Full 2026 resume (canonical source for About / bio content)
- `docs/.ai-assets/capabilities.md` — Five capability pillars for the Services section
- `docs/.ai-assets/case-studies.md` — Home Team Roofing + GRIT Hub case studies
- `docs/.ai-assets/recommendation-jv-industrial.md` — Client testimonial (Cody Caillet, JV Industrial)

**Stripe website requirements (must have):**
1. Description of services
2. Contact info (email, phone)
3. Business address (Texas)
4. Privacy policy
5. Refund/cancellation policy
6. HTTPS (auto via Vercel)
7. Publicly viewable, business name matches Stripe

**Hosting & workflow:**
- Hosted on Vercel (free tier)
- You make changes → I review/approve → you push → Vercel auto-deploys
- This is the same workflow we use on all my projects

**Decisions still needed:**
1. Tech stack — Next.js + Tailwind + shadcn/ui? (matches my other projects)
2. Services to feature on the site
3. Business address for contact page
4. Design assets (I have local content to share — logos, colors, etc.)
5. Permission to use Cody Caillet's testimonial on the site
6. DNS/domain setup for Vercel

**Project structure so far:**
```
sctech-inc.com/
└── docs/
    ├── standards/
    │   └── prd.md
    ├── sessions/
    │   ├── new-session-start.md
    │   └── website-build-feature/
    │       └── session-log-1.md
    └── .ai-assets/
        ├── spencer-resume.md
        └── recommendation-jv-industrial.md
```

Let's pick up where we left off — start by reading the docs above, then let's make decisions on the open items and start building.

---
