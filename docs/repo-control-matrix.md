# ZenCloudAU Repository Control Matrix

## Purpose

This matrix tracks the intended role, public route, source route, and control requirements for the ZenCloudAU ecosystem.

It should be reviewed whenever a repo is created, redesigned, published, or linked publicly.

## Master Template Authority

Master template authority belongs only to:

| Parent asset | Authority |
|---|---|
| `zencloud-advisory` | Commercial advisory, buyer route, offers, executive positioning |
| `studiosix` | Production studio, productisation, build sprint pattern, media and delivery layer |
| `velocity-architecture` | Framework, architecture method, decision governance and practitioner standards |

All other repos are downstream assets. Trading, crypto, stocks, games, dashboards, labs, and personal systems must not be used as master templates for ecosystem design, README structure, deployment, governance, or GTM.

## Control Matrix

| Repository | Role | Public Route | Source Route | Required Controls | Current Priority |
|---|---|---|---|---|---|
| `zencloud-advisory` | Commercial advisory front door and master commercial template authority | `https://www.zencloud.com.au/` after cutover | `https://github.com/ZenCloudAU/zencloud-advisory` | README, deployment plan, redirect map, coherence standard, Cloudflare preview, DNS cutover checklist | P1 |
| `velocity-architecture` | Framework, research authority, and master framework/governance template authority | `https://velocityarchitectureframework.com/` | `https://github.com/ZenCloudAU/velocity-architecture` | README Start Here, site map, research reader, rendered article pages, deployment docs, ecosystem routing | P1 complete / monitor |
| `vaf-sa` | Solution architecture practitioner method | `https://zencloudau.github.io/vaf-sa/` | `https://github.com/ZenCloudAU/vaf-sa` | README Start Here, site map, deployment docs, usage terms, ecosystem map | P1 complete / monitor |
| `velocity-academy` | Learning, courses, certification, books, lexicon | `https://velocityarchitecture.com.au/` | `https://github.com/ZenCloudAU/velocity-academy` | README Start Here, course route map, footer ecosystem links, deployment docs, series publishing rules | P1 |
| `studiosix` | Product studio, media studio, labs, production layer, and master production template authority | `https://studiosix.com.au/` | `https://github.com/ZenCloudAU/studiosix` | README Start Here, deployment docs, ecosystem footer, clear StudioSix role | P1 |
| `ea-artefact-generator` | Architecture artefact generation workspace | `https://ea.velocityarchitecture.com.au/` | `https://github.com/ZenCloudAU/ea-artefact-generator` | README Start Here, deployment docs, safety notes, usage terms, ecosystem footer | P1 |
| `pmi-portal` | Delivery governance / PMO workspace | TBD / internal or preview | `https://github.com/ZenCloudAU/pmi-portal` | README Start Here, deployment docs, internal/public status, ecosystem map, data handling notes | P2 |
| `vsf-match` | Capability and career readiness engine | `https://zencloudau.github.io/vsf-match/` | `https://github.com/ZenCloudAU/vsf-match` | README Start Here, deployment docs, scope note, ecosystem footer | P2 |
| `trading-dashboard` | Personal / educational trading lab only; downstream proof asset, not a master template | `https://zencloudau.github.io/trading-dashboard/` | `https://github.com/ZenCloudAU/trading-dashboard` | Strong not-financial-advice disclaimer, README Start Here, deployment docs, ecosystem boundary note, explicit non-template status | P1 risk-control |
| `vaf-python-zero-to-hero` | Python learning course | GitHub Pages route | `https://github.com/ZenCloudAU/vaf-python-zero-to-hero` | README Start Here, course route map, Academy link, deployment docs | P2 |
| `vaf-typescript-zero-to-hero` | TypeScript learning course | GitHub Pages route | `https://github.com/ZenCloudAU/vaf-typescript-zero-to-hero` | README Start Here, course route map, Academy link, deployment docs | P2 |
| `learn-with-claude` | AI-assisted coding learning path | GitHub Pages route | `https://github.com/ZenCloudAU/learn-with-claude` | README Start Here, deployment docs, course route map, ecosystem footer | P2 |
| `agentic-cert` | Agentic AI certification study hub | GitHub Pages route | `https://github.com/ZenCloudAU/agentic-cert` | README Start Here, study-scope disclaimer, Academy link, deployment docs | P3 |
| `AzureSACertification` | Azure solution architect certification study hub | GitHub Pages route | `https://github.com/ZenCloudAU/AzureSACertification` | README Start Here, study-scope disclaimer, Academy link, deployment docs | P3 |
| `SAPEACertification` | SAP EA certification study hub | GitHub Pages route | `https://github.com/ZenCloudAU/SAPEACertification` | README Start Here, study-scope disclaimer, Academy link, deployment docs | P3 |
| `CISSPCertification` | CISSP certification study hub | GitHub Pages route | `https://github.com/ZenCloudAU/CISSPCertification` | README Start Here, study-scope disclaimer, Academy link, deployment docs | P3 |

## Priority Definitions

```text
P1 = public-facing / commercial / high-risk / actively linked
P2 = important ecosystem support / public but lower commercial risk
P3 = supporting learning or certification content
Monitor = currently controlled; check after major edits
```

## Control Status Meaning

```text
Complete = minimum controls present
Partial = some controls present, not all
Missing = no clear control layer
Monitor = acceptable now, re-check after edits
```

## Immediate Focus

The next control pass should focus on:

1. `zencloud-advisory` Cloudflare preview and cutover controls.
2. `studiosix` because it is commercial-facing and defines the production/build pattern.
3. `velocity-architecture` because it is the framework/governance authority.
4. `velocity-academy` because it is the Academy/public learning domain.
5. `ea-artefact-generator` because it is a live tool domain.
6. `trading-dashboard` only as a bounded risk-control review, not as a template source.

## Rule

No public repo should be allowed to drift into an isolated island. Each must define:

```text
What it is
Who it is for
Where the reader should start
Where the public site is
Where the source is
How it links to the ecosystem
What it is not
Whether it is a parent template, downstream product, academy asset, tool, lab, or archive
```
