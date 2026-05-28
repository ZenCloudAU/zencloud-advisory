# ZenCloud Advisory Production Readiness Plan

## Purpose

Prepare `zencloud-advisory` for production migration to `https://www.zencloud.com.au/` within roughly one week.

This plan is designed to avoid premature DNS cutover. GitHub remains the source of truth, Cloudflare Pages becomes the deployment layer, and Squarespace is retired only after preview parity and acceptance checks pass.

## Current Repo Assessment

The repo is a Vite / React / TypeScript app.

Current package signals:

- `homepage`: `https://www.zencloud.com.au`
- `build`: `tsc -b && vite build`
- `lint`: `eslint .`
- `preview`: `vite preview`
- `deploy`: `npm run build && gh-pages -d dist`

The app currently renders a single-page experience through `src/App.tsx` with these main components:

- Nav
- Hero
- ClientJourneyBand
- RoleClarity
- AdvisoryServices
- EcosystemMap
- VafStrip
- Footer

## Production Objective

Launch ZenCloud as the commercial advisory front door for the ZenCloud / StudioSix / Velocity Architecture ecosystem.

The site must clearly explain:

```text
ZenCloud advises.
StudioSix produces.
Velocity decides.
```

## Production Navigation Target

Primary launch navigation should support:

```text
Home
Advisory
Services
Velocity
Tools
Insights
About
Contact
```

The current nav is lean and should be expanded before production.

## One-Week Readiness Sequence

### Day 1 — Content and Structure Freeze

- Confirm launch sitemap.
- Confirm current single-page versus multi-page route strategy.
- Keep the visual direction unless an issue blocks readability.
- Freeze core positioning language.

### Day 2 — Navigation and Page Coverage

- Add or expose sections for Advisory, Services, Velocity, Tools, Insights, About, and Contact.
- Ensure all nav links resolve.
- Ensure external ecosystem links open correctly.

### Day 3 — Content Finalisation

- Replace any placeholder or legacy wording.
- Ensure ZenCloud is not positioned as a generic blog archive.
- Move essays, research, and book material to Insights as outbound routes to Medium, Substack, Academy, and Velocity Framework.

### Day 4 — Technical Hardening

- Run lint and build locally or through CI.
- Confirm no secrets, local settings, or generated junk are committed.
- Confirm metadata, page title, description, and favicon/public assets.
- Confirm mobile layout.

### Day 5 — Cloudflare Preview

- Connect or verify Cloudflare Pages project.
- Production branch should be `main`.
- Build command should be `npm run build`.
- Output directory should be `dist`.
- Verify preview URL before DNS changes.

### Day 6 — Acceptance Testing

- Check homepage clarity within 10 seconds.
- Check all nav and footer links.
- Check mobile layout.
- Check contact CTA.
- Check external links to Velocity, Academy, StudioSix, EA tools, Medium, Substack, GitHub.
- Check 404 behaviour.

### Day 7 — Cutover Preparation

- Prepare DNS change only after preview approval.
- Record rollback path.
- Keep Squarespace available until cutover is verified.
- Do not modify Microsoft 365 email records.

## Cloudflare Pages Target Settings

```text
Repository: ZenCloudAU/zencloud-advisory
Production branch: main
Build command: npm run build
Build output directory: dist
Root directory: blank
Automatic deployments: enabled
```

## DNS Cutover Rule

Do not point `zencloud.com.au` or `www.zencloud.com.au` to Cloudflare Pages until preview passes.

Email records must remain aligned to Microsoft 365.

## Launch Acceptance Criteria

- No placeholder text remains.
- Homepage explains ZenCloud in 10 seconds.
- Primary nav works.
- Footer nav works.
- Contact CTA works.
- Services are commercially clear.
- Velocity ecosystem is understandable.
- Insights routes to Medium, Substack, Academy, and framework content.
- About establishes credibility without becoming a raw CV.
- Mobile layout is usable.
- `npm run build` passes.
- Cloudflare preview works.
- DNS rollback path is known.

## Do Not Do Yet

- Do not change DNS.
- Do not retire Squarespace.
- Do not change Microsoft 365 email records.
- Do not migrate every essay into ZenCloud.
- Do not redesign unless required for production clarity.

## Next Execution Step

Build the launch-ready single-page structure from the existing components and planning documents, then verify via build and preview before any DNS cutover.
