# Deploying to Vercel

## Layout

The app is an Express API plus a Vite-built React SPA. Vercel runs serverless
functions rather than a long-lived process, so the two halves are split:

| Piece | Where it runs |
| --- | --- |
| React SPA (`client/`) | Built to `dist/public`, served from the Vercel CDN |
| Express API (`server/`) | `api/index.ts`, one serverless function |

`server/_core/app.ts` holds every route and never binds a port. Two entrypoints
consume it:

- `server/_core/index.ts` — local/self-hosted. Adds Vite (dev) or static file
  serving (prod), then `listen()`s. Used by `pnpm dev` and `pnpm start`.
- `api/index.ts` — Vercel. Exports the app; Vercel invokes it per request.

## Setup

1. Import the repo in Vercel. `vercel.json` supplies the build settings, so
   leave the framework preset as **Other**.
2. Add environment variables (see `.env.example`). **None are required for the
   marketing site to render** — add them only for the features they unlock.
3. Deploy.

Build: `pnpm run vercel-build` (`vite build`) → `dist/public`.
The API function is compiled from `api/index.ts` by Vercel's Node runtime.

## Routing

`vercel.json` rewrites, in order:

1. `/api/*` → the serverless function (tRPC, OAuth, upload)
2. `/manus-storage/*` → the function, as a fallback for remote-backed assets
3. everything else → `/index.html` for client-side routing

Vercel checks the filesystem before applying rewrites, so real files in
`dist/public` (including `manus-storage/*` and `assets/*`) are served straight
from the CDN and never reach the function.

## Verify after the first deploy

- `/` and a deep link such as `/areas/bella-vista-ar` both render (deep links
  exercise the SPA fallback).
- `/manus-storage/tsb-logo_bc45fde1.png` returns the image — the header and
  footer logos depend on it.
- `POST /api/trpc/*` reaches the API rather than returning the SPA shell. This
  is the one item worth checking by hand: it depends on Vercel preserving the
  original request path when rewriting into the function.

## Notes

- The Manus preview/debug plugins are excluded from production builds; they
  inlined ~367 kB into `index.html`. Set `KEEP_MANUS_RUNTIME=1` to restore them.
- The client bundle is ~954 kB (~244 kB gzipped) in one chunk. It works, but
  route-level `React.lazy` would be the obvious next improvement.
- `DATABASE_URL` on serverless should point at a pooled MySQL endpoint; each
  function instance opens its own connection.
