# Deployment

## Purpose

Commercial advisory site and consulting platform for ZenCloud Advisory.

## Production

- Production URL: https://www.zencloud.com.au/
- Deployment platform: Cloudflare Pages / custom domain target
- Source branch: main
- Build command: npm run build
- Output directory: dist
- Ecosystem role: ZenCloud advisory front door

## Notes

This repo is an active main-dev project for replacing the primary ZenCloud site. Deployment and DNS changes require explicit verification before execution.

## Health Check

- Confirm Cloudflare Pages project and production branch before replacing the current live site.
- Confirm environment variables are not committed.
- Confirm generated build output is not committed unless intentionally required.
