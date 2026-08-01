/**
 * Express app factory — transport-agnostic.
 *
 * Holds every API route (tRPC, OAuth, upload, storage proxy) but never binds a
 * port and never serves the client bundle. That lets the same app run as a
 * long-lived Node server (server/_core/index.ts, which adds Vite/static and
 * listens) or as a Vercel serverless function (api/index.ts), where the static
 * client is served by the CDN instead.
 */
import "dotenv/config";
import express, { type Express, type Request } from "express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import multer from "multer";
import { registerOAuthRoutes } from "./oauth";
import { registerStorageProxy } from "./storageProxy";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { storagePut } from "../storage";
import { insertFile } from "../db";
import { sdk } from "./sdk";

export function createApiApp(): Express {
  const app = express();

  // Configure body parser with larger size limit for file uploads
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  registerStorageProxy(app);
  registerOAuthRoutes(app);

  // ─── File Upload Endpoint ────────────────────────────────────────────────────
  const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 50 * 1024 * 1024 }, // 50 MB max
  });

  app.post("/api/upload", upload.single("file"), async (req: Request, res) => {
    try {
      // Auth check — require a valid session
      const user = await sdk.authenticateRequest(req).catch(() => null);
      if (!user || user.role !== "admin") {
        res.status(403).json({ error: "Admin access required" });
        return;
      }

      const file = (req as any).file as Express.Multer.File | undefined;
      if (!file) {
        res.status(400).json({ error: "No file provided" });
        return;
      }

      const { originalname, mimetype, buffer, size } = file;
      const label = (req.body?.label as string) || "";
      const category = (req.body?.category as string) || "general";

      // Upload to S3
      const safeFilename = originalname.replace(/[^a-zA-Z0-9._-]/g, "_");
      const { key, url } = await storagePut(
        `uploads/${safeFilename}`,
        buffer,
        mimetype,
      );

      // Persist metadata in DB
      await insertFile({
        filename: originalname,
        mimeType: mimetype,
        size,
        storageKey: key,
        url,
        label: label || null,
        category,
        uploadedBy: user.id,
      });

      res.json({ success: true, key, url, filename: originalname });
    } catch (err) {
      console.error("[Upload] Error:", err);
      res.status(500).json({ error: "Upload failed" });
    }
  });

  // tRPC API
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );

  return app;
}
