# ZenCloudAU Ecosystem Coherence Standard

## Purpose

This document is the master control standard for the ZenCloudAU public repository and site ecosystem.

Its purpose is to prevent:

- thematic drift,
- visual and aesthetic drift,
- duplicated or conflicting positioning,
- broken cross-site links,
- unclear source-of-truth ownership,
- public sites becoming isolated islands,
- GitHub repositories becoming raw, unreadable dumps.

ZenCloud Advisory owns this control standard because it is the commercial front door and governance point for the ecosystem.

## Operating Line

```text
ZenCloud advises.
StudioSix produces.
Velocity decides.
```

This line should appear in ecosystem documents, footer material, and route maps where appropriate.

## Ecosystem Roles

| Asset | Role | Primary Audience | Content Boundary |
|---|---|---|---|
| ZenCloud Advisory | Commercial advisory front door | Clients, executives, buyers | Advisory services, contact, ecosystem routing, selected insights |
| StudioSix | Product studio, media studio, labs, production layer | Clients, product users, partners | AI delivery, productisation, labs, production workflows |
| Velocity Architecture Framework | Framework and research authority | Enterprise architects, architecture leaders | Decision-first EA method, research, governance, artefacts |
| Velocity Architecture Academy | Learning and certification layer | Practitioners, learners, teams | Courses, books, lexicon, certification, practitioner pathways |
| VAF-SA | Solution architecture practitioner method | Solution architects, delivery architects | Field method, modules, toolkit, cloud reference, worked examples |
| EA Artefact Generator | Artefact generation workspace | Architects and delivery teams | Structured architecture output generation |
| PMO Portal | Delivery governance workspace | PMO, delivery leaders, governance teams | Intake, mobilisation, governance, artefact lifecycle, delivery transparency |
| VSF Match | Capability and career readiness engine | Practitioners and career users | CV-to-role scoring, gaps, learning path routing |
| Trading Dashboard | Personal / educational trading system | Personal use, learning, demonstration | Not financial advice, not ZenCloud advisory service |
| Course repositories | Learning products | Learners and practitioners | Course content, labs, exercises, examples |
| Certification repositories | Study hubs | Certification learners | Study notes, quizzes, certification preparation |

## Canonical Public URLs

| Asset | Canonical URL |
|---|---|
| ZenCloud Advisory | `https://www.zencloud.com.au/` |
| StudioSix | `https://studiosix.com.au/` |
| Velocity Architecture Framework | `https://velocityarchitectureframework.com/` |
| VAF Agentic Architect | `https://velocityarchitectureframework.com/` |
| Velocity Architecture Academy | `https://velocityarchitecture.com.au/` |
| VAF-SA | `https://zencloudau.github.io/vaf-sa/` |
| EA Artefact Generator | `https://ea.velocityarchitecture.com.au/` |
| ZenCloudAU GitHub | `https://github.com/ZenCloudAU` |

If a production domain and a GitHub Pages URL both exist, the production domain should be used for public business links and the GitHub Pages URL should be used as the source-backed reader layer unless a repo-specific decision says otherwise.

## Required Repository Controls

Every public repository should have:

```text
README.md
DEPLOYMENT.md or deployment section in README
USAGE-TERMS.md, LICENSE, or licensing/usage statement
site-map.html or equivalent reader-facing route map when the repo has a public site
docs/ecosystem-map.md or a link to this central standard
clear Live Demo / Public Site link
clear Source of Truth wording
```

## Required README Pattern

Every public README should include a `Start Here` section near the top.

Minimum pattern:

```markdown
## Start Here

If you landed in this repository from ZenCloud, StudioSix, Velocity Architecture, LinkedIn, Medium, Substack, or search, use the reader-facing public site first.

| Need | Use this |
|---|---|
| Understand the project | [Public site](...) |
| Navigate the site | [Site map](...) |
| Read docs/content | [Reader/docs page](...) |
| Use the tool/product | [App/tool](...) |
| Understand ecosystem placement | [Ecosystem map](...) |
| Browse source files | Continue in this GitHub repository |
```

Every README should state:

```text
GitHub is the source of truth. The public site is the reader-facing publication layer.
```

When the repo is commercial-facing rather than practitioner-facing, use:

```text
GitHub is the source of truth. Cloudflare/GitHub Pages is the public delivery layer.
```

## Required Footer Pattern

Every public site should include relevant links to the ecosystem.

Minimum footer set for framework/practitioner repos:

```text
ZenCloud Advisory
StudioSix
Velocity Architecture
Velocity Academy
VAF-SA
EA Artefact Generator
GitHub
```

For tool repos, add product-specific links and support/contact routes.

For learning repos, add Academy and GitHub links.

For personal/educational demos, add clear scope disclaimers.

## Visual Theme Controls

Default shared palette:

```text
Page background: #F8FAFC
Surface: #FFFFFF
Alt surface: #F1F5F9
Primary text: #0F172A
Secondary text: #334155 / #475569
Muted text: #64748B / #94A3B8
Border: #E2E8F0
Accent orange: #E8630A
Accent orange dark: #C24F06
Navy: #1E3A5F
Deep navy: #162D4A
```

Shared design principles:

- Same family, different emphasis.
- Light enterprise palette by default.
- Orange is the ecosystem action/accent colour.
- Navy is the authority/enterprise colour.
- Avoid isolated black/dark themes unless product-specific and intentional.
- Avoid random colour systems that break recognition.
- Avoid redesigning a working repo just to match another site; use footer, typography, tokens, and route maps first.

## Typography Guidance

Static sites may use:

```text
Display: Bebas Neue or Playfair Display
Body: DM Sans
Mono/system labels: DM Mono
```

React/Vite sites may use local CSS variables or Tailwind tokens, but should preserve the same colour family and restrained enterprise feel.

## Symbiotic Linking Rule

Every site should include three route types:

```text
Parent link
Sibling links
Source link
```

Examples:

### VAF-SA

```text
Parent: Velocity Architecture Framework
Siblings: EA Artefact Generator, PMO Portal, Velocity Academy
Commercial: ZenCloud Advisory / StudioSix
Source: GitHub repo
```

### Velocity Architecture

```text
Parent/commercial: ZenCloud Advisory
Children: VAF-SA, Academy, tools, research
Source: GitHub repo
```

### ZenCloud Advisory

```text
Parent: none — commercial front door
Children/routes: Velocity, StudioSix, Academy, tools, insights
Source: GitHub repo, not prominent for clients
```

## Content Ownership Rules

| Content Type | Canonical Home |
|---|---|
| Commercial advisory services | ZenCloud Advisory |
| Product studio / labs / production workflows | StudioSix |
| Framework, research, decision-first method | Velocity Architecture |
| Courses, certification, learning pathways, books | Velocity Academy |
| Solution architecture field practice | VAF-SA |
| Architecture artefact generation | EA Artefact Generator |
| Delivery governance / PMO mobilisation | PMO Portal |
| Essays, thought pieces, public writing stream | Medium / Substack, routed through Insights |
| Legacy ZenCloud research links | Redirected or routed, not broken |

Do not duplicate long-form content across sites unless there is a clear canonical owner and the duplicates are summaries or route pages.

## Legacy URL Rule

Public links that have already been shared must not be broken.

Every repo or site migration should maintain a redirect map:

```text
docs/legacy-url-redirect-map.md
```

Redirect status:

- Use `302` during migration and testing.
- Use `301` only once the target is stable and canonical.

## Deployment Control Rule

Each public repo must document:

```text
production URL
hosting platform
source branch
build command, if any
output directory, if any
verification checklist
rollback method
what not to commit
```

Static sites should explicitly state `Build step: none` where true.

Cloudflare Pages sites should state:

```text
Build command
Output directory
Production branch
Custom domain status
DNS/cutover status
```

## Scope and Disclaimer Rule

Any repo that could be mistaken for regulated advice must include a scope note.

Examples:

- Trading Dashboard: personal/educational only, not financial advice.
- Security/certification repos: study guidance, not certification authority material.
- Architecture frameworks: practitioner guidance, not legal/compliance advice.
- Cloud/security tools: require organisational governance review before production use.

## Change Control

Before changing a public site, check:

```text
1. Does this change preserve the repo role?
2. Does it preserve the visual family?
3. Does it preserve parent/sibling/source links?
4. Does it avoid duplicating canonical content?
5. Does it preserve public URLs or redirect them?
6. Does it update README/DEPLOYMENT if public behaviour changed?
7. Does it avoid committing local settings, secrets, or machine files?
```

## Drift Indicators

A repo needs remediation if:

- the README lacks a Start Here section,
- the public site has no route back to the ecosystem,
- the theme has drifted into unrelated colours or tone,
- the footer does not link to adjacent assets,
- GitHub raw Markdown is the only reader experience for public content,
- legacy public URLs have no redirect plan,
- the repo role cannot be explained in one sentence,
- deployment settings are not documented.

## Governance Owner

The control standard is owned in:

```text
ZenCloudAU/zencloud-advisory
```

Other repos should link to this document or replicate its key controls where useful.
