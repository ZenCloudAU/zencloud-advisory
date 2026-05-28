# Legacy URL Redirect Map

## Purpose

This document records legacy ZenCloud URLs that must remain safe after `zencloud.com.au` moves from the current hosted site to GitHub + Cloudflare.

The rule is simple: do not break public links that have already been shared on LinkedIn, Medium, Substack, or other channels.

## Current Redirects

| Legacy ZenCloud URL | Destination | Status |
|---|---|---|
| `/vafresearch/a-comparative-analysis-of-it-governance-frameworks` | `https://zencloudau.github.io/velocity-architecture/research/it-governance-frameworks-australian-public-sector-2025-2026/` | Static redirect page added in `public/` |

## Implemented Static Redirect Pages

```text
public/vafresearch/a-comparative-analysis-of-it-governance-frameworks/index.html
```

This page uses an HTML refresh and canonical link to route readers to the rendered Velocity Architecture research page.

## Future Cloudflare Redirect Rule

After the ZenCloud site is fully hosted through Cloudflare Pages, add a Cloudflare Redirect Rule for the same path.

Recommended temporary rule during migration:

```text
Source:
https://www.zencloud.com.au/vafresearch/a-comparative-analysis-of-it-governance-frameworks

Target:
https://zencloudau.github.io/velocity-architecture/research/it-governance-frameworks-australian-public-sector-2025-2026/

Status:
302 Temporary Redirect
```

After confirmed stable, convert to:

```text
301 Permanent Redirect
```

## Content Ownership

The IT governance working paper belongs in `ZenCloudAU/velocity-architecture` as framework/research material, not in the ZenCloud advisory site.

ZenCloud remains the commercial advisory front door. Velocity Architecture remains the framework and research authority.
