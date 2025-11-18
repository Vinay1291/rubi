import type { VercelRequest, VercelResponse } from "@vercel/node";
import { contactSubmissionSchema } from "../shared/schema";
import { storage } from "../server/storage";
import { sendContactEmail } from "../server/email";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ 
      success: false, 
      message: "Method not allowed" 
    });
  }

  try {
    const validatedData = contactSubmissionSchema.parse(req.body);
    await storage.saveContactSubmission(validatedData);
    await sendContactEmail(validatedData);

    return res.json({
      success: true,
      message: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
  } catch (error: any) {
    return res.status(400).json({ 
      success: false, 
      message: "Please check your form and try again.",
      errors: error.errors || []
    });
  }
}

