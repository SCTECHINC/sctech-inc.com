# SC Tech — Case Studies

Two clean, short case studies for the website. Both are owned by Spencer (no client approval required to publish the high-level story) and demonstrate complementary capability pillars.

---

## Case Study 1: Home Team Roofing — Estimate Pipeline Overhaul

**Capability pillars:** Systems & Workflow Automation · AI-Native Product Engineering
**Timeline:** Aug 2022 – Nov 2025

### The Problem
A residential + commercial roofing company was running sales, production, and back-office through a patchwork of JobNimbus, EagleView, Roofr, Beacon, QuickBooks, and spreadsheets. Quote turnaround was slow, measurement re-entry was error-prone, and nothing talked to anything else.

### What SC Tech Did
- Built custom API-driven integrations between JobNimbus, EagleView, Roofr, Beacon, Mailjet, Twilio, and QuickBooks.
- Designed an AI-assisted estimate template pipeline with a document-extractor service: **Job → EagleView → measurements → CRM**.
- Stood up a registry-driven workflow engine and Trigger.dev-based job pipeline as the automation backbone.

### Results
- **70%+ reduction in quote turnaround.**
- Near-zero measurement-entry errors.
- The workflow engine built here became the foundation for the Rebel OS platform (now running live storm-restoration operations).

### Stack
Next.js · TypeScript · Supabase · Trigger.dev · Twilio · Mailjet · JobNimbus/EagleView/Roofr integrations · OpenAI

---

## Case Study 2: Gallant Industrial — GRIT Hub Workforce Platform

**Capability pillars:** Full-Stack SaaS Builds · Legacy Modernization
**Timeline:** 2024 – Present · Active engagement

### The Problem
An industrial turnaround contractor was coordinating 1,300+ craftsmen through a 10-stage requisition and dispatch workflow — entirely in spreadsheets. Compliance gaps (TWIC, Fit Test, D&A, MVR, Background, site-specific safety) were causing site rejections. Manual requisition handling was slow and error-prone.

### What SC Tech Did
- Designed and built **GRIT Hub** — a mobile-first Next.js 15 / React 19 / Prisma platform covering the full 10-stage pipeline (job award → sourcing → compliance validation → arrival → metrics).
- Integrated Azure AD (MSAL) SSO, compliance validation for every credential type, Excel/PDF export, and DnD scheduling UI.
- Translated the legacy spreadsheet process into an end-to-end digital system with an auditable trail.

### Results
- Eliminated compliance gaps that had previously caused site rejections.
- Reduced manual requisition handling time across the dispatch pipeline.
- Gave operations leadership live visibility into workforce state they didn't have before.

### Stack
Next.js 15 · React 19 · Prisma · TypeScript · Azure AD (MSAL) · PostgreSQL · Tailwind · shadcn/ui
