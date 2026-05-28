# ZenCloud Cutover Runbook

## Purpose

Controlled cutover of `zencloud.com.au` from the current hosted site to the new `zencloud-advisory` GitHub + Cloudflare Pages deployment.

This runbook assumes:

- GoDaddy remains the registrar.
- Cloudflare becomes DNS and routing control.
- Cloudflare Pages hosts the new ZenCloud Advisory site.
- GitHub remains source of truth.
- Microsoft 365 remains email.
- Squarespace/current host remains rollback option until final verification passes.

## Do Not Break

Do not modify or delete Microsoft 365 email records.

Keep these record families DNS-only:

```text
MX
TXT SPF
TXT DMARC if present
DKIM CNAME records if present
autodiscover CNAME
enterpriseenrollment CNAME
enterpriseregistration CNAME
lyncdiscover CNAME
sip CNAME
_sip SRV
_sipfederationtls SRV
```

## Current Repo Readiness

Repo:

```text
ZenCloudAU/zencloud-advisory
```

Build command:

```text
npm run build
```

Cloudflare Pages output directory:

```text
dist
```

Production branch:

```text
main
```

Root directory:

```text
blank
```

## Required Pre-Cutover Gate

Do not change production web DNS until all of these are true:

- Cloudflare nameservers are active for `zencloud.com.au`.
- Cloudflare Pages project exists for `ZenCloudAU/zencloud-advisory`.
- Cloudflare Pages build passes.
- Temporary `.pages.dev` preview loads.
- Navigation works.
- Footer links work.
- Contact CTA works.
- Legacy research redirect path works in preview.
- Microsoft 365 records are present and DNS-only.
- Rollback path is known.

## Cloudflare Pages Project Settings

Create or verify:

```text
Workers & Pages
→ Create application
→ Pages
→ Connect to Git
→ ZenCloudAU/zencloud-advisory
```

Settings:

```text
Production branch: main
Build command: npm run build
Build output directory: dist
Root directory: blank
Automatic deployments: enabled
Environment variables: none required for launch
```

Expected preview domain:

```text
https://zencloud-advisory.pages.dev/
```

## Preview Verification URLs

Before custom domain cutover, verify:

```text
https://zencloud-advisory.pages.dev/
https://zencloud-advisory.pages.dev/vafresearch/a-comparative-analysis-of-it-governance-frameworks/
```

The second URL should redirect or route readers to:

```text
https://zencloudau.github.io/velocity-architecture/research/it-governance-frameworks-australian-public-sector-2025-2026/
```

## Custom Domain Cutover

After preview passes, add custom domains in Cloudflare Pages:

```text
zencloud.com.au
www.zencloud.com.au
```

Cloudflare should create the required Pages routing records.

If manual DNS is required, replace the old Squarespace web records only after preview passes.

Remove or replace old web records:

```text
A zencloud.com.au → 198.49.23.145
A zencloud.com.au → 198.49.23.144
A zencloud.com.au → 198.185.159.145
A zencloud.com.au → 198.185.159.144
CNAME www → ext-sq.squarespace.com
```

Do not remove email records.

## Recommended Redirect Rule

After the new site is live, add a Cloudflare Redirect Rule for the legacy research URL.

During migration:

```text
Source:
https://www.zencloud.com.au/vafresearch/a-comparative-analysis-of-it-governance-frameworks

Target:
https://zencloudau.github.io/velocity-architecture/research/it-governance-frameworks-australian-public-sector-2025-2026/

Status:
302 Temporary Redirect
```

After stable:

```text
301 Permanent Redirect
```

## Post-Cutover Verification

Verify:

```text
https://www.zencloud.com.au/
https://zencloud.com.au/
https://www.zencloud.com.au/vafresearch/a-comparative-analysis-of-it-governance-frameworks
```

Check:

- Home loads.
- HTTPS works.
- `www` works.
- Apex works.
- Navigation anchors work.
- Contact email link works.
- Old research URL does not 404.
- Microsoft 365 email remains operational.

## Rollback

If the new site fails after DNS cutover:

1. Remove the Cloudflare Pages custom-domain route or disable the Pages custom domain.
2. Restore the old Squarespace web records:

```text
A zencloud.com.au → 198.49.23.145
A zencloud.com.au → 198.49.23.144
A zencloud.com.au → 198.185.159.145
A zencloud.com.au → 198.185.159.144
CNAME www → ext-sq.squarespace.com
```

3. Keep Microsoft 365 records unchanged.
4. Re-test `https://www.zencloud.com.au/`.

## Final Rule

Do not retire or cancel the current hosted site until the Cloudflare Pages version has been live, verified, and stable.
