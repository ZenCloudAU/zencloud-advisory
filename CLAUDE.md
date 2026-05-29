# ZenCloud Advisory — Claude Code Build Instructions
# Repo: https://github.com/ZenCloudAU/zencloud-advisory
# Drop this file at the repo root as CLAUDE.md before running Claude Code

---

## WHAT YOU ARE DOING

You are building the ZenCloud Advisory public website from scratch inside this repository.
The repo was just created on GitHub with only a README. It is empty.
You will scaffold the full React 19 + TypeScript + Vite project, build every component,
wire up deployment, and verify the build passes locally — in stages, in order.
Do not skip stages. Do not ask questions. Execute.

---

## STAGE 1 — SCAFFOLD THE PROJECT

Run these commands exactly. Do not modify flags.

```bash
npm create vite@latest . -- --template react-ts --yes
npm install
```

Then install gh-pages:
```bash
npm install --save-dev gh-pages
```

Then update package.json — add "homepage" and "deploy" script:
- "homepage": "https://www.zencloud.com.au"
- add to scripts: "deploy": "npm run build && gh-pages -d dist"

Replace vite.config.ts entirely with:
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
})
```

Create public/CNAME containing exactly:
```
www.zencloud.com.au
```

Verify stage 1: run `npm run build` — must exit 0 before proceeding.

---

## STAGE 2 — INDEX.HTML

Replace the generated index.html entirely with:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="ZenCloud Advisory is the enterprise architecture and cloud advisory practice behind the Velocity Architecture ecosystem. All clients engage here first." />
  <meta name="theme-color" content="#f8fafc" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet">
  <meta property="og:title" content="ZenCloud Advisory — Enterprise Architecture & Cloud Advisory" />
  <meta property="og:description" content="Architecture advisory, cloud governance, and senior leadership — the client entry point for the Velocity Architecture ecosystem." />
  <meta property="og:url" content="https://www.zencloud.com.au" />
  <meta property="og:type" content="website" />
  <title>ZenCloud Advisory — Enterprise Architecture & Cloud Advisory</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>
```

---

## STAGE 3 — GLOBAL CSS TOKENS

Delete src/App.css and src/index.css entirely.
Create src/App.css with this content and nothing else:

```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg-page:           #f8fafc;
  --bg-surface:        #ffffff;
  --bg-amber:          #fffbeb;
  --bg-amber-tag:      #fef3c7;
  --bg-blue-tag:       #dbeafe;

  --text-primary:      #0f172a;
  --text-secondary:    #475569;
  --text-muted:        #64748b;
  --text-ghost:        #94a3b8;
  --text-footer:       #334155;

  --accent-amber:      #b45309;
  --accent-amber-dark: #92400e;
  --accent-amber-body: #78350f;
  --accent-gold:       #fbbf24;
  --accent-blue:       #1e40af;

  --border:            #e2e8f0;
  --border-amber:      #fde68a;
  --border-anchor:     #b45309;

  --footer-bg:         #0f172a;

  --font-display: 'Playfair Display', serif;
  --font-body:    'DM Sans', sans-serif;
  --font-mono:    'DM Mono', monospace;
}

body {
  font-family: var(--font-body);
  background: var(--bg-page);
  color: var(--text-primary);
  font-size: 14px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

a { color: inherit; text-decoration: none; }
button { cursor: pointer; font-family: var(--font-body); }
ul { list-style: none; }
```

Update src/main.tsx to import './App.css' (replace any existing CSS import).

---

## STAGE 4 — APP.TSX SHELL

Replace src/App.tsx with a shell that imports and renders all components in order:

```tsx
import Nav from './components/Nav'
import Hero from './components/Hero'
import ClientJourneyBand from './components/ClientJourneyBand'
import RoleClarity from './components/RoleClarity'
import AdvisoryServices from './components/AdvisoryServices'
import EcosystemMap from './components/EcosystemMap'
import VafStrip from './components/VafStrip'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ClientJourneyBand />
        <RoleClarity />
        <AdvisoryServices />
        <EcosystemMap />
        <VafStrip />
      </main>
      <Footer />
    </>
  )
}
```

Create the directory src/components/.
Create placeholder stub files for every component listed above — each exports a default function returning an empty fragment. This lets the build pass before each component is built.

Verify stage 4: `npm run build` must exit 0.

---

## STAGE 5 — NAV COMPONENT

Build src/components/Nav.tsx.

Behaviour:
- Fixed to top — position sticky, top 0, z-index 100
- Height 56px, background #fff, border-bottom 1px solid var(--border)
- Flex row, space-between, align-items center, padding 0 36px

Logo: text "ZenCloud Advisory"
- Font: var(--font-display), 17px, weight 400
- "Zen" and " Advisory" in var(--text-primary)
- "Cloud" in italic var(--accent-amber)

Nav links — inline flex, gap 28px:
- Advisory (href="#advisory")
- Ecosystem (href="#ecosystem")
- VAF™ ↗ (href="https://velocityarchitectureframework.com" target="_blank" rel="noopener noreferrer")
- StudioSix ↗ (href="https://studiosix.com.au" target="_blank" rel="noopener noreferrer")
- Contact (href="#contact")
- Font: var(--font-body) 12px, color var(--text-muted)
- Hover: color var(--text-primary), transition 150ms

CTA button "Engage":
- onClick: window.location.href = 'mailto:info@zencloud.com.au'
- background var(--footer-bg), color var(--bg-page)
- Font 12px weight 500, padding 8px 18px, border-radius 3px, border none

No hamburger menu. No mobile nav. Desktop only for now.

---

## STAGE 6 — HERO COMPONENT

Build src/components/Hero.tsx.

Container: background var(--bg-surface), border-bottom 1px solid var(--border), padding 68px 36px 60px

Inner wrapper: max-width 660px

Eyebrow:
- Font: var(--font-mono) 10px weight 300, letter-spacing 2.5px, text-transform uppercase
- Color: var(--accent-amber)
- Text: "ZENCLOUD ADVISORY · BRISBANE, QLD · PRINCIPAL ARCHITECT"
- margin-bottom 18px

H1:
- Font: var(--font-display) 48px weight 900, letter-spacing -2px, line-height 1.06
- Color: var(--text-primary)
- margin-bottom 22px
- Line 1: "Architecture advisory." (normal weight)
- Line 2: <em> tag, font-style italic, font-weight 400, color var(--text-secondary): "The decision layer."

Body paragraph:
- Font: var(--font-body) 15px weight 300, line-height 1.8, color var(--text-secondary)
- max-width 560px, margin-bottom 36px
- Text: "ZenCloud Advisory is the client entry point and parent practice for the Velocity Architecture ecosystem. We provide enterprise architecture strategy, cloud governance, security posture, and senior advisory leadership — then route clients into StudioSix for architecture-led delivery and governed execution."

Actions row: flex, gap 12px, align-items center

Button 1 "Engage — info@zencloud.com.au":
- onClick: window.location.href = 'mailto:info@zencloud.com.au'
- background var(--footer-bg), color var(--bg-page)
- Font 12px weight 500, padding 11px 22px, border-radius 3px, border none

Button 2 "Explore the ecosystem →":
- onClick: document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' })
- Font: var(--font-mono) 12px, color var(--accent-amber)
- Background none, border none, text-decoration underline, text-underline-offset 3px

---

## STAGE 7 — CLIENT JOURNEY BAND

Build src/components/ClientJourneyBand.tsx.

Container:
- background var(--bg-amber)
- border-top 1px solid var(--border-amber)
- border-bottom 1px solid var(--border-amber)
- padding 14px 36px
- display flex, align-items center, gap 14px

Label span:
- Font: var(--font-mono) 10px weight 400, letter-spacing 2px, text-transform uppercase
- Color: var(--accent-amber-dark)
- Text: "CLIENT JOURNEY"

Arrow span:
- Color: var(--accent-gold), font-size 16px
- Text: "→"

Body span:
- Font: var(--font-body) 13px weight 300, line-height 1.5
- Color: var(--accent-amber-body)
- Text: "All clients engage ZenCloud Advisory first. Advisory frames the mandate. StudioSix delivers the governed execution. VAF provides the method."

---

## STAGE 8 — ROLE CLARITY COMPONENT

Build src/components/RoleClarity.tsx.
Add id="advisory" to the section element.

Section: background var(--bg-surface), border-bottom 1px solid var(--border), padding 52px 36px

Section label: var(--font-mono) 10px weight 300, letter-spacing 2.5px, UPPERCASE, color var(--text-ghost), margin-bottom 8px
Text: "ROLE CLARITY"

H2: var(--font-display) 26px weight 700, letter-spacing -0.5px, color var(--text-primary), margin-bottom 8px
Text: "One ecosystem. Three roles."

Sub: var(--font-body) 13px weight 300, color var(--text-muted), max-width 480px, margin-bottom 36px
Text: "ZenCloud advises. StudioSix produces. Velocity decides. Every client engagement starts here."

Grid: CSS grid, grid-template-columns repeat(3, 1fr), gap 1px, background var(--border), border-radius 4px, overflow hidden

Each cell: background var(--bg-surface), padding 26px
Hover: background var(--bg-page), transition background-color 150ms

Cell data:

Cell 1:
  tag: "ENTRY POINT"
  name: "ZenCloud Advisory"
  body: "Strategic framing, cloud governance, security posture, architecture leadership, and programme oversight. The advisory practice that all clients engage first."
  link text: "You are here" — no href, color var(--accent-amber), font var(--font-mono) 10px, margin-top 14px, display block

Cell 2:
  tag: "DELIVERY STUDIO"
  name: "StudioSix"
  body: "Architecture-led delivery — intake through handover. Governed artefacts, traceable decisions, client transparency, and controlled execution. Routed from ZenCloud Advisory."
  link text: "studiosix.com.au ↗" — href="https://studiosix.com.au" target="_blank" rel="noopener noreferrer"

Cell 3:
  tag: "METHOD"
  name: "Velocity Architecture Framework™"
  body: "The shared open-source EA method. Six viewpoints, 18 artefacts, AI-powered agent. Free to use. The decision-first operating model for both practices."
  link text: "velocityarchitectureframework.com ↗" — href="https://velocityarchitectureframework.com" target="_blank" rel="noopener noreferrer"

Cell tag style: var(--font-mono) 10px weight 300, letter-spacing 2px, UPPERCASE, color var(--text-ghost), margin-bottom 10px
Cell name style: var(--font-body) 14px weight 500, color var(--text-primary), margin-bottom 10px
Cell body style: var(--font-body) 12px weight 300, color var(--text-muted), line-height 1.7
Cell link style: var(--font-mono) 10px, color var(--accent-amber), text-decoration underline, text-underline-offset 2px, margin-top 14px, display block

---

## STAGE 9 — ADVISORY SERVICES COMPONENT

Build src/components/AdvisoryServices.tsx.
Add id="advisory-services" to the section element.

Section: background var(--bg-page), border-bottom 1px solid var(--border), padding 52px 36px

Section label: "ADVISORY SERVICES", color var(--text-ghost)
H2: "What ZenCloud Advisory provides"
Sub: "Strategic and leadership services only. Delivery and artefact production are StudioSix's domain."

Grid: grid-template-columns repeat(2, 1fr), gap 1px, background var(--border), border-radius 4px, overflow hidden

Card data:

Card 1:
  num: "01 — STRATEGY"
  title: "Cloud & Architecture Strategy"
  body: "Cloud direction, platform selection, governance model, and delivery approach — aligned to business goals. Framework-level, not vendor-level. Pre-engagement framing before StudioSix mobilises."

Card 2:
  num: "02 — LEADERSHIP"
  title: "CTO / Principal Architecture Advisory"
  body: "Senior-level guidance for boards, executives, and programme leads. Bridges business intent and technical execution. Independent of any delivery vendor or platform. Engagement model: retained or milestone-based."

Card 3:
  num: "03 — SECURITY"
  title: "Identity & Security Posture"
  body: "Cloud security strategy, IAM governance, and risk posture framing. Architecture-layer advisory — not implementation. Aligned to APRA CPS 234, IRAP, and zero-trust patterns where applicable."

Card 4:
  num: "04 — OVERSIGHT"
  title: "Programme Oversight & Recovery"
  body: "Independent oversight where architecture decisions, governance artefacts, or executive reporting have broken down. Restores delivery control without displacing existing teams. Advisory posture only."

Card style: background var(--bg-surface), padding 24px 26px
Hover: background var(--bg-page), transition 150ms
Num style: var(--font-mono) 10px weight 300, letter-spacing 1px, color var(--accent-amber), margin-bottom 10px
Title style: var(--font-body) 13px weight 500, color var(--text-primary), margin-bottom 8px
Body style: var(--font-body) 12px weight 300, color var(--text-muted), line-height 1.7

---

## STAGE 10 — ECOSYSTEM MAP COMPONENT

Build src/components/EcosystemMap.tsx.
Add id="ecosystem" to the section element.

Section: background var(--bg-surface), border-bottom 1px solid var(--border), padding 52px 36px

Section label: "ECOSYSTEM", color var(--accent-amber)
H2: "The Velocity Architecture ecosystem"
Sub: "Eight connected nodes. One advisory parent. Clients enter through ZenCloud and route to the right layer."

Grid: grid-template-columns repeat(3, 1fr), gap 12px

Node data (8 nodes):

Node 1 — ANCHOR:
  role: "ADVISORY · ENTRY POINT"
  name: "ZenCloud Advisory"
  desc: "Client entry. Strategy, leadership, security, oversight. Routes to StudioSix for delivery."
  link: null (current page)
  linkText: "zencloud.com.au"
  anchor: true

Node 2:
  role: "DELIVERY STUDIO"
  name: "StudioSix"
  desc: "Architecture-led AI delivery. Intake → artefacts → execution → handover."
  link: "https://studiosix.com.au"
  linkText: "studiosix.com.au ↗"

Node 3:
  role: "FRAMEWORK · OPEN SOURCE"
  name: "Velocity Architecture Framework™"
  desc: "Six viewpoints, 18 artefacts. Decision-first EA. Free to use."
  link: "https://velocityarchitectureframework.com"
  linkText: "velocityarchitectureframework.com ↗"

Node 4:
  role: "AI TOOLING"
  name: "VAF Agentic Architect"
  desc: "AI agent generating board-ready architecture packs across all six viewpoints. Brief in, governed artefacts out."
  link: "https://velocityarchitectureframework.com"
  linkText: "velocityarchitectureframework.com ↗"

Node 5:
  role: "PRACTITIONER METHOD"
  name: "VAF·SA"
  desc: "Solution architecture practitioner framework. Six modules, two pillars, decision-first scoping through delivery."
  link: "https://zencloudau.github.io/vaf-sa"
  linkText: "zencloudau.github.io/vaf-sa ↗"

Node 6:
  role: "EA TOOLING · TOGAF 10"
  name: "EA Artefact Generator"
  desc: "TOGAF 10 ADM aligned. 29 artefact types. Production-quality EA outputs across every ADM phase."
  link: "https://ea.velocityarchitecture.com.au"
  linkText: "ea.velocityarchitecture.com.au ↗"

Node 7:
  role: "LEARNING · CERTIFICATION"
  name: "Velocity Architecture Academy"
  desc: "Courses, certification pathways, books, lexicon, and practitioner resources for architecture leaders and delivery teams."
  link: "https://velocityarchitecture.com.au"
  linkText: "velocityarchitecture.com.au ↗"

Node 8:
  role: "DELIVERY GOVERNANCE"
  name: "PMO Portal"
  desc: "Delivery mobilisation, controlled artefact lifecycle, and client transparency workspace. Part of the StudioSix delivery layer."
  link: null
  linkText: "StudioSix engagement"

Card style (non-anchor): background var(--bg-page), border 1px solid var(--border), border-radius 4px, padding 20px
Card style (anchor): border 1.5px solid var(--border-anchor)
Hover all cards: background var(--bg-surface), transition 150ms
Role style: var(--font-mono) 9px weight 300, letter-spacing 2px, UPPERCASE, color var(--text-ghost), margin-bottom 8px
Anchor role color: var(--accent-amber)
Name style: var(--font-body) 13px weight 500, color var(--text-primary), margin-bottom 6px
Desc style: var(--font-body) 12px weight 300, color var(--text-muted), line-height 1.65
Link style: var(--font-mono) 10px, color var(--accent-amber), text-decoration underline, text-underline-offset 2px, margin-top 10px, display block
Null link: same style, pointer-events none, opacity 0.5

All links with href: target="_blank" rel="noopener noreferrer"

---

## STAGE 11 — VAF STRIP COMPONENT

Build src/components/VafStrip.tsx.

Section: background var(--bg-surface), border-bottom 1px solid var(--border), padding 52px 36px

Section label: "VAF™ · OPEN SOURCE", color var(--accent-amber)
H2: "The method that runs the ecosystem"
Sub: "Free to use. Aligned to ISO/IEC/IEEE 42010:2022. Powers ZenCloud Advisory and StudioSix delivery."
margin-bottom 32px

Strip container: display flex, gap 1px, background var(--border), border-radius 4px, overflow hidden

Cell data:
  { tag: "VP1", body: "Direction & governance", blue: false }
  { tag: "VP2", body: "Solution strategy", blue: false }
  { tag: "VP3", body: "Solution design", blue: false }
  { tag: "VP4", body: "Delivery velocity", blue: false }
  { tag: "VP5", body: "Operating rhythm", blue: false }
  { tag: "V2",  body: "Agentic Architect live · Azure · TypeScript", blue: true }

Cell style: background var(--bg-surface), flex 1, padding 16px 18px

Tag row: display flex, align-items center, gap 6px
  Dot: width 5px, height 5px, border-radius 50%
    default: background var(--accent-amber)
    blue: background var(--accent-blue)
  Label: var(--font-mono) 10px, letter-spacing 0.5px
    default color: var(--accent-amber)
    blue color: var(--accent-blue)

Body: var(--font-body) 12px weight 300, color var(--text-muted), margin-top 6px

---

## STAGE 12 — FOOTER COMPONENT

Build src/components/Footer.tsx.
Add id="contact" to the footer element.

Element: footer, background var(--footer-bg), padding 28px 36px
Layout: flex, justify-content space-between, align-items center

Left — logo:
  "ZenCloud Advisory"
  Font: var(--font-display) 15px weight 400
  "Zen": color #f8fafc
  "Cloud": font-style italic, color var(--accent-gold)
  " Advisory": color #f8fafc

Centre:
  "SPRING HILL · BRISBANE · QLD"
  Font: var(--font-mono) 10px weight 300, letter-spacing 1.5px, UPPERCASE
  Color: var(--text-footer)

Right:
  "info@zencloud.com.au"
  Font: var(--font-body) 12px
  Color: #475569
  href: "mailto:info@zencloud.com.au"

---

## STAGE 13 — GITHUB ACTIONS

Create .github/workflows/deploy.yml:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          cname: www.zencloud.com.au
```

---

## STAGE 14 — FINAL VERIFICATION

Run in this exact sequence:

```bash
npm run lint
npm run build
```

Both must exit 0.

Then confirm:
- dist/ directory exists and contains index.html
- public/CNAME exists and contains: www.zencloud.com.au
- .github/workflows/deploy.yml exists
- No TypeScript errors in terminal output
- No ESLint errors in terminal output

If any check fails: fix it before stopping. Do not stop with a failing build.

---

## DESIGN CONSTRAINTS — ENFORCED THROUGHOUT ALL STAGES

Fonts: Playfair Display (display/headings) + DM Sans (body) + DM Mono (labels/tags) — nothing else.

Colours: only values from these tokens — no off-palette hex values:
  #f8fafc  #ffffff  #fffbeb  #fef3c7  #dbeafe
  #0f172a  #475569  #64748b  #94a3b8  #334155
  #b45309  #92400e  #78350f  #fbbf24  #1e40af
  #e2e8f0  #fde68a  #0f172a

No: box-shadow, drop-shadow, text-shadow, filter, backdrop-filter
No: gradients of any kind (linear-gradient, radial-gradient)
No: border-radius above 4px on cards, 3px on buttons
No: animations — hover transitions only (background-color, color at 150ms ease)
No: Inter, Roboto, system-ui, or any font not in the Google Fonts load

Content rules:
No Medium links. No Substack links. No social links in nav or footer.
No services outside: Cloud Strategy, CTO Advisory, Security Posture, Programme Oversight.
All external links: target="_blank" rel="noopener noreferrer"
