import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { deleteFile, getFileById, insertFile, listFiles } from "../db";
import { storagePut } from "../storage";
import { adminProcedure, router } from "../_core/trpc";

export const filesRouter = router({
  /** List all uploaded files (admin only) */
  list: adminProcedure
    .input(z.object({ limit: z.number().min(1).max(500).default(100) }).optional())
    .query(async ({ input }) => {
      return listFiles(input?.limit ?? 100);
    }),

  /** Delete a file record (admin only) — removes DB row; S3 object becomes unreachable */
  delete: adminProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const file = await getFileById(input.id);
      if (!file) throw new TRPCError({ code: "NOT_FOUND", message: "File not found" });
      await deleteFile(input.id);
      return { success: true, deletedId: input.id };
    }),

  /** Get a single file by ID (admin only) */
  getById: adminProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const file = await getFileById(input.id);
      if (!file) throw new TRPCError({ code: "NOT_FOUND", message: "File not found" });
      return file;
    }),

  /** Update a file's label/category (admin only) */
  update: adminProcedure
    .input(z.object({
      id: z.number(),
      label: z.string().max(255).optional(),
      category: z.string().max(64).optional(),
    }))
    .mutation(async ({ input }) => {
      const file = await getFileById(input.id);
      if (!file) throw new TRPCError({ code: "NOT_FOUND", message: "File not found" });
      // We do a lightweight update via raw SQL since drizzle update is straightforward
      const db = await import("../db").then(m => m.getDb());
      if (!db) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "DB unavailable" });
      const { uploadedFiles } = await import("../../drizzle/schema");
      const { eq } = await import("drizzle-orm");
      await db.update(uploadedFiles).set({
        ...(input.label !== undefined ? { label: input.label } : {}),
        ...(input.category !== undefined ? { category: input.category } : {}),
      }).where(eq(uploadedFiles.id, input.id));
      return { success: true };
    }),
});
