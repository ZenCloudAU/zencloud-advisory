# Site Coherence QA Checklist

## Purpose

Use this checklist before publishing, redesigning, deploying, or linking any ZenCloudAU public repo or site.

The goal is to prevent theme drift, link drift, content duplication, and loss of ecosystem coherence.

## 1. Role Clarity

The site/repo must clearly answer:

- What is this?
- Who is it for?
- What problem does it solve?
- What is the canonical public URL?
- What is the source repository?
- What is it not?

Pass condition:

```text
A first-time visitor can understand the role in 10 seconds.
```

## 2. Reader Path

The README must include a `Start Here` section.

The public site must include a clear starting point, such as:

- Home
- Site Map
- Start Module
- Start Course
- Open Tool
- Read Research
- View Toolkit

Pass condition:

```text
A visitor who lands on GitHub can reach the rendered public page in one click.
```

## 3. Theme Coherence

Check the site against the ecosystem palette:

```text
#F8FAFC page background
#FFFFFF surface
#F1F5F9 alt surface
#0F172A primary text
#334155 / #475569 secondary text
#E2E8F0 borders
#E8630A accent orange
#1E3A5F navy
```

Pass condition:

```text
The site feels part of the ZenCloud / StudioSix / Velocity family even if it has its own emphasis.
```

## 4. Footer and Cross-Linking

The footer or route map must include relevant ecosystem links.

Minimum for most public sites:

```text
ZenCloud Advisory
StudioSix
Velocity Architecture
Velocity Academy
VAF-SA
EA Artefact Generator
GitHub
```

Add PMO Portal, VSF Match, Medium, Substack, or course links when relevant.

Pass condition:

```text
The site does not become an isolated island.
```

## 5. Parent / Sibling / Source Links

Each site must include:

```text
Parent link
Sibling links
Source link
```

Example:

```text
VAF-SA parent = Velocity Architecture
VAF-SA siblings = EA Artefact Generator, Academy, PMO Portal
VAF-SA source = GitHub repo
```

Pass condition:

```text
Visitors can move through the ecosystem without guessing.
```

## 6. Content Ownership

Check that content lives in the right place:

| Content | Correct Home |
|---|---|
| Advisory services | ZenCloud Advisory |
| Framework/research | Velocity Architecture |
| Learning/courses/books | Velocity Academy |
| Solution architecture field method | VAF-SA |
| Artefact generation | EA Artefact Generator |
| Delivery governance | PMO Portal |
| Product studio/labs | StudioSix |
| Essays/newsletter | Medium/Substack routed through Insights |

Pass condition:

```text
No site duplicates or competes with the canonical owner.
```

## 7. Legacy URLs

Before replacing or retiring a site/page, check:

- Has the URL been shared on LinkedIn, Medium, Substack, or elsewhere?
- Is there a redirect map?
- Is the new target rendered and stable?
- Should the redirect be 302 or 301?

Pass condition:

```text
No public link breaks without a deliberate redirect.
```

## 8. Deployment Documentation

Each repo must document:

- Production URL
- Hosting platform
- Source branch
- Build command, if any
- Output directory, if any
- Verification checklist
- Rollback path
- What not to commit

Pass condition:

```text
A second machine or future thread can safely update and verify the site.
```

## 9. Scope / Disclaimer

Add scope notes where required:

- Trading: educational only, not financial advice.
- Certification: study notes, not official certification authority content.
- Security: guidance only, requires organisational review.
- Architecture frameworks: practitioner guidance, not legal/compliance advice.
- Tools: avoid submitting confidential data unless deployment controls are approved.

Pass condition:

```text
The site cannot be easily misread as regulated advice or official certification material.
```

## 10. Local File Hygiene

Before commit or push, check:

```text
git status -sb
```

Do not commit:

- `.claude/` local settings,
- `.env`,
- secrets,
- local screenshots unless intentional,
- build junk unless required by the hosting model,
- client-identifying files,
- machine-specific paths.

Pass condition:

```text
Only intentional source/site/documentation files are committed.
```

## 11. Release Readiness

Before announcing or linking publicly:

- Public URL loads.
- Mobile layout is acceptable.
- Footer links work.
- GitHub README routes to public page.
- Site map or equivalent route map works.
- External links open correctly.
- Contact or next-step route is clear.
- Legal/usage/scope notes are present.

Pass condition:

```text
The site can be shared publicly without explanation.
```

## Decision

Use this final check:

```text
Does this strengthen the ecosystem, or does it create another island?
```

If it creates another island, stop and add route maps, footer links, or README controls before publishing.
