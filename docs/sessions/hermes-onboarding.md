# HERMES Onboarding — Setup Checklist

Everything required to bring HERMES online as a real member of the JARVIS ecosystem. Spencer-owned steps (DB seed + Slack app) happen once; after that HERMES is fully wired.

**Created:** 2026-04-21 by JARVIS
**Owner:** Spencer
**Status:** In progress

---

## 1. Done (already in place)

- ✅ `C:\GIT\sctech-inc.com\CLAUDE.md` — HERMES identity, mission, hard rules, comms protocol.
- ✅ `C:\GIT\sctech-inc.com\docs\company-profile.md` — Single source of truth for website copy.
- ✅ `C:\GIT\JARVIS\shared\references\ecosystem-registry.md` — HERMES entry added under "External-Facing Personas" (channel ID / Slack IDs still `TBD`).
- ✅ `C:\GIT\JARVIS\CLAUDE.md` — Routing table updated: "tell HERMES" / "tell the website" / "tell SCTech" → `hermes`.

---

## 2. Spencer to do — DB seed (required for MCP comms)

Supabase project: `qdbpamfsqgbwpzyvviiv` · schema `jarvis`.

### a. Register the persona

```sql
INSERT INTO jarvis.personas (name, email_alias, role, active)
VALUES ('hermes', 'connect@sctech-inc.com', 'Brand & website agent for SCTech Inc.', true);
```

*(Adjust columns to match the actual `jarvis.personas` schema — this matches the pattern used for the 30-persona registry.)*

### b. Register the channel

```sql
INSERT INTO jarvis.channels (name, description, active)
VALUES ('hermes', 'HERMES — SCTech Inc. website agent', true)
RETURNING id;
```

Copy the returned UUID.

### c. Paste the UUID in two places

- `C:\GIT\sctech-inc.com\CLAUDE.md` — replace `Channel ID: TBD` under the JARVIS Comms section.
- `C:\GIT\JARVIS\shared\references\ecosystem-registry.md` — replace `Channel ID: TBD` under the HERMES entry.

---

## 3. Spencer to do — Slack app (required for Spencer-in-the-loop DMs)

In the JARVIS HQ workspace (`T0ATADV0V9R`):

1. **Create a new Slack app** named `HERMES`.
2. **Bot scopes:** same as other persona apps (`chat:write`, `im:write`, `users:read`, etc. — mirror the Rebel API app config).
3. **Install to workspace**, copy the bot token.
4. **Invite the bot** to `#jarvis-comms` (`C0ATLD4FY68`) so comms log entries post correctly.
5. **Open a 1:1 DM** from Spencer's account to the HERMES bot so future DMs have a thread.
6. **Record the IDs** — update `jarvis.channels` for `hermes` with:
   - `slack_bot_id`
   - `slack_bot_user_id`
   - `slack_bot_token`
7. **Update `ecosystem-registry.md`** with the Slack Bot ID and Bot User ID.

---

## 4. Verification (after 2 and 3 are done)

From inside `C:\GIT\sctech-inc.com` in a fresh Claude Code session:

1. `rebel_list_channels()` — HERMES should appear with `0 unread`.
2. `rebel_send_message({ persona: "hermes", destination: "watchtower", subject: "HERMES online", content: "Website agent is live.", message_type: "status" })` — Spencer should get a Slack DM from the HERMES bot AND see a post in `#jarvis-comms`.
3. From JARVIS, run `rebel_send_message({ persona: "jarvis", to: "hermes", subject: "Test handoff", content: "Confirm inbox works.", message_type: "fyi" })` — HERMES's inbox should show it on next read.

If any of those fail: the DB seed or Slack wiring is incomplete. Do not silent-fallback to raw SQL inserts — they skip the Slack push and create a comms blackout.

---

## 5. First real mission for HERMES

Once live, HERMES picks up with:

1. Read `CLAUDE.md` and `docs/company-profile.md` in full.
2. Read `docs/standards/prd.md` and `docs/.ai-assets/capabilities.md` + `case-studies.md`.
3. Ask Spencer for the **Claude design reference file** (`SCTECH+INC.html`) — Spencer needs to drop it into `docs/.ai-assets/` so HERMES can open it locally.
4. Propose a site scaffold (Next.js + TypeScript + Tailwind + shadcn/ui, per the PRD) and get Spencer's sign-off before writing code.
5. Build.
