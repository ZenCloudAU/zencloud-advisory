# ZenCloud Target Site Map

## Purpose

This document defines the future GitHub + Cloudflare site structure for `zencloud.com.au`.

The site should function as the commercial advisory front door for the ZenCloud / StudioSix / Velocity Architecture ecosystem.

## Primary Navigation

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

## Footer Navigation

```text
Velocity Architecture Framework
Velocity Architecture Academy
StudioSix
EA Artefact Generator
VAF-SA
VSF Match
Medium
Substack
GitHub
```

## Sitemap

```text
/
/advisory
/services
/velocity
/tools
/insights
/about
/contact
```

## Extended Future Sitemap

```text
/services/enterprise-architecture
/services/solution-architecture
/services/cloud-security
/services/ai-delivery
/services/program-governance
```

The launch version can use the lean sitemap first and introduce service detail pages later.

## Page Definitions

### `/` Home

Purpose: explain ZenCloud clearly and route users into the ecosystem.

Required sections:

- Hero
- Advisory positioning
- Service summary
- Velocity ecosystem summary
- Tools summary
- Founder credibility
- Contact CTA

Recommended hero:

```text
Enterprise architecture and AI delivery advisory for complex organisations.
```

Recommended subcopy:

```text
ZenCloud helps leaders turn cloud, security, governance, and transformation decisions into traceable, executable outcomes.
```

### `/advisory`

Purpose: explain the ZenCloud advisory model.

Required sections:

- Decision-first architecture
- Engagement model
- Governance and traceability
- Executive and delivery alignment
- How ZenCloud works with clients

### `/services`

Purpose: package advisory services commercially.

Required service cards:

- Enterprise Architecture Advisory
- Solution Architecture & Design Authority
- Cloud Strategy & Platform Modernisation
- Security, Identity & Governance
- AI-Assisted Delivery Enablement
- Program Recovery & Delivery Governance

### `/velocity`

Purpose: explain the ecosystem.

Required sections:

- ZenCloud advises
- StudioSix produces
- Velocity decides
- Academy teaches
- Tools operationalise

Primary routes:

- Velocity Framework
- Velocity Academy
- StudioSix
- EA Artefact Generator
- PMO Portal
- VAF-SA
- VSF Match

### `/tools`

Purpose: route users to practical ecosystem assets.

Cards:

- EA Artefact Generator
- PMO Portal
- VAF-SA
- VSF Match
- Velocity Academy
- GitHub organisation

### `/insights`

Purpose: curate research and publishing without hosting every essay.

Cards:

- Medium essays
- Substack newsletter
- Velocity Academy
- Velocity Architecture Framework
- Book / research pathway when ready

### `/about`

Purpose: establish trust and credibility.

Required sections:

- ZenCloud overview
- Phil Myint profile
- Enterprise experience
- Global delivery context
- Ecosystem founder role
- Credentials / domains of expertise

### `/contact`

Purpose: conversion.

Required elements:

- Advisory inquiry CTA
- Email or contact link
- Short engagement framing
- Links to ecosystem channels

## UX Principles

1. Explain ZenCloud in 10 seconds.
2. Do not overload the homepage with every ecosystem asset.
3. Route deeper content outward.
4. Keep the commercial advisory message clear.
5. Keep Medium and Substack under Insights.
6. Make the Velocity ecosystem understandable without requiring prior context.
7. Avoid placeholder content.
8. Keep all CTAs practical and direct.

## Launch Acceptance Criteria

- Top navigation works.
- Footer navigation works.
- No placeholder text remains.
- Home explains ZenCloud clearly.
- Services are commercially clear.
- Velocity ecosystem is understandable.
- Insights routes to external publishing channels.
- Contact CTA is visible.
- Mobile layout works.
- Cloudflare preview is verified before DNS cutover.

## Cutover Rule

Do not point `zencloud.com.au` to the new GitHub / Cloudflare site until the preview deployment passes verification.
