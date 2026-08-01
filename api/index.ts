/**
 * Vercel serverless entrypoint.
 *
 * Vercel invokes this per-request instead of running a long-lived process, so
 * we export the Express app directly rather than calling listen(). The static
 * client is served from the CDN (see vercel.json rewrites), which is why this
 * uses createApiApp() and not the Vite/static wiring in server/_core/index.ts.
 */
import { createApiApp } from "../server/_core/app";

export default createApiApp();
