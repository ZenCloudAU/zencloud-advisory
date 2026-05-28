# ZenCloud Content Migration Map

## Purpose

This document maps the current ZenCloud site content into the future GitHub + Cloudflare site structure.

The migration goal is not to move every page or essay into ZenCloud. The goal is to make ZenCloud the commercial advisory front door and route deeper content to the appropriate ecosystem destination.

## Migration Rule

```text
ZenCloud = advisory and commercial front door
Velocity = method authority
Velocity Academy = learning, courses, certification, books, lexicon
StudioSix = production studio and labs
Medium / Substack = essays, book drafts, newsletter, long-form publishing
GitHub Pages = tools, courses, public docs, demos
```

## Current Content to Future Location

| Current Content / Theme | Future Location | Action |
|---|---|---|
| Homepage advisory positioning | `/` Home | Rewrite and retain |
| What ZenCloud does | `/advisory` and `/services` | Retain, sharpen wording |
| Areas of Practice | `/services` | Rename to Advisory Services |
| Cloud Strategy | `/services/cloud-security` or `/services` | Reframe as Cloud Strategy & Platform Modernisation |
| Solution Design | `/services/solution-architecture` | Reframe as Solution Architecture & Design Authority |
| Identity & Security | `/services/cloud-security` | Reframe as Security, Identity & Governance |
| Technical Leadership & Advisory | `/services` | Retain as senior advisory capability |
| Program Management | `/services/program-governance` | Reframe as Program Recovery & Delivery Governance |
| Profile / founder bio | `/about` | Retain, compress, make commercial |
| VAFResearch | `/insights` | Replace label with Insights; route deeper research to Medium / Academy |
| Medium | `/insights` outbound | Keep as long-form essay channel |
| Substack | `/insights` outbound | Keep as newsletter / serial publishing channel |
| Velocity Architecture Framework | `/velocity` outbound | Explain and route to framework site |
| Velocity Academy | `/velocity` and `/insights` outbound | Route to academy site |
| StudioSix | `/velocity` or footer outbound | Explain production-studio role |
| EA Artefact Generator | `/tools` outbound | Route to ea.velocityarchitecture.com.au |
| PMO Portal | `/tools` | Include as governance workspace; publish URL when confirmed |
| VAF-SA | `/tools` outbound | Route to vaf-sa site |
| VSF Match | `/tools` outbound | Route to VSF Match |
| GitHub | footer / `/tools` | Route to ZenCloudAU GitHub organisation |

## Content That Should Not Be Migrated Directly

Do not directly migrate every essay, research article, or book fragment into the ZenCloud site.

Instead:

- Curate selected insights.
- Link to Medium for essays and book material.
- Link to Substack for newsletter content.
- Link to Velocity Academy for structured learning.
- Link to Velocity Architecture Framework for method authority.

## New Page Content Model

### Home

Purpose: explain ZenCloud in 10 seconds.

Required sections:

- Hero
- What ZenCloud does
- Decision-first architecture positioning
- Advisory services summary
- Velocity ecosystem summary
- Contact CTA

### Advisory

Purpose: describe the engagement model.

Required sections:

- Decision-first advisory model
- Enterprise and solution architecture alignment
- Governance and delivery traceability
- How engagements work

### Services

Purpose: package commercial capability.

Required service cards:

- Enterprise Architecture Advisory
- Solution Architecture & Design Authority
- Cloud Strategy & Platform Modernisation
- Security, Identity & Governance
- AI-Assisted Delivery Enablement
- Program Recovery & Delivery Governance

### Velocity

Purpose: explain ecosystem routing.

Required sections:

- ZenCloud advises
- StudioSix produces
- Velocity decides
- Academy teaches
- Tools operationalise

### Tools

Purpose: route users to ecosystem assets.

Required cards:

- EA Artefact Generator
- PMO Portal
- VAF-SA
- VSF Match
- Velocity Academy
- GitHub organisation

### Insights

Purpose: curate publishing without overloading the commercial site.

Required links:

- Medium
- Substack
- Velocity Academy
- Velocity Architecture Framework
- Selected research / book pathway when ready

### About

Purpose: establish trust.

Required sections:

- Phil Myint profile
- 30-year enterprise architecture and delivery experience
- Global delivery context
- Architecture, cloud, security, data migration, program recovery experience
- Ecosystem founder role

### Contact

Purpose: clear conversion.

Required elements:

- Contact CTA
- Email or contact method
- Advisory inquiry framing
- Links to ecosystem if not ready for direct engagement

## Wording Changes

Replace generic service labels with enterprise-ready language:

| Old / Current | New |
|---|---|
| Cloud Strategy | Cloud Strategy & Platform Modernisation |
| Solution Design | Solution Architecture & Design Authority |
| Cloud Infrastructure | Cloud Platform Architecture |
| Identity & Security | Security, Identity & Governance |
| Technical Leadership & Advisory | Enterprise Architecture Advisory |
| Program Management | Program Recovery & Delivery Governance |
| VAFResearch | Insights |

## Launch Rule

The new ZenCloud site should launch only when:

- All primary navigation links work.
- No placeholder content remains.
- The site explains the ecosystem clearly.
- Medium/Substack are routed through Insights.
- Services are commercially clear.
- Contact CTA is visible.
- Cloudflare preview is verified before DNS cutover.
