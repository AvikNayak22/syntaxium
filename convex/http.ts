import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { api } from "./_generated/api";
import { WebhookEvent } from "@clerk/nextjs/server";
import { Webhook } from "svix";

// Create a new HTTP router instance
const http = httpRouter();

// Handle POST requests to /clerk-webhook endpoint
http.route({
  path: "/clerk-webhook",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    // Get the webhook secret from environment variables
    const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
    if (!webhookSecret) {
      throw new Error("CLERK_WEBHOOK_SECRET is not set");
    }

    // Extract Svix headers required for webhook verification
    const svix_id = request.headers.get("svix-id");
    const svix_signature = request.headers.get("svix-signature");
    const svix_timestamp = request.headers.get("svix-timestamp");

    // Check if any required headers are missing
    if (!svix_id || !svix_signature || !svix_timestamp) {
      return new Response("Error: Missing Svix headers", { status: 400 });
    }

    // Get the request body and convert it to a string
    const payload = await request.json();
    const body = JSON.stringify(payload);

    // Create a new Webhook instance for verification
    const wh = new Webhook(webhookSecret);
    let evt: WebhookEvent;

    // Verify the webhook signature
    try {
      evt = wh.verify(body, {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      }) as WebhookEvent;
    } catch (err) {
      console.error("Error: Could not verify webhook:", err);
      return new Response("Error: Verification error", {
        status: 400,
      });
    }

    // Handle user creation event
    const eventType = evt.type;
    if (eventType === "user.created") {
      // Extract user data from the webhook event
      const { id, email_addresses, first_name, last_name } = evt.data;

      // Get the first email address and construct the full name
      const email = email_addresses[0].email_address;
      const name = `${first_name || ""} ${last_name || ""}`.trim();

      try {
        // Save the new user to the database using Convex mutation
        await ctx.runMutation(api.users.syncUser, {
          userId: id,
          email,
          name,
        });
      } catch (error) {
        console.log("Error: Could not save user to db", error);
        return new Response("Error: Could not save user to db", {
          status: 500,
        });
      }
    }

    // Return success response if everything went well
    return new Response("Webhook received", { status: 200 });
  }),
});

export default http;
