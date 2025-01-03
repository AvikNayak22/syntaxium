import { ConvexError, v } from "convex/values";
import { mutation } from "./_generated/server";

export const saveExecution = mutation({
  args: {
    language: v.string(),
    code: v.string(),
    output: v.optional(v.string()),
    error: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new ConvexError("Not authenticated");
    }

    await ctx.db.insert("codeExecutions", {
      ...args,
      userId: identity.subject,
    });
  },
});
