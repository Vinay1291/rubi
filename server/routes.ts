import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSubmissionSchema } from "@shared/schema";
import { sendContactEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSubmissionSchema.parse(req.body);
      await storage.saveContactSubmission(validatedData);
      await sendContactEmail(validatedData);

      res.json({
        success: true,
        message: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });
    } catch (error: any) {
      res.status(400).json({ 
        success: false, 
        message: "Please check your form and try again.",
        errors: error.errors || []
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
