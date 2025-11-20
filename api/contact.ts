import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSubmissionSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactSubmission = z.infer<typeof contactSubmissionSchema>;

const submissions: ContactSubmission[] = [];

async function saveContactSubmission(submission: ContactSubmission) {
  submissions.push(submission);
  console.log("[contact] submission received", submission);
}

const transporter = (() => {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port) {
    console.warn(
      "[email] SMTP_HOST/SMTP_PORT not configured. Emails will not be sent.",
    );
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    auth: user && pass ? { user, pass } : undefined,
  });
})();

const DEFAULT_INFO_EMAIL = "info@rubitechnologies.in";

async function sendContactEmail(submission: ContactSubmission) {
  if (!transporter) {
    return;
  }

  const infoEmail =
    process.env.SMTP_FROM || process.env.SMTP_USER || DEFAULT_INFO_EMAIL;
  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: infoEmail,
      subject: `New inquiry from ${submission.name}`,
      text: formatPlainText(submission),
      html: formatHtml(submission),
    });
  } catch (error) {
    console.error("[email] Failed to send contact email", error);
  }
}

function formatPlainText(submission: ContactSubmission) {
  return [
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Company: ${submission.company || "—"}`,
    `Phone: ${submission.phone || "—"}`,
    `Service: ${submission.service || "—"}`,
    "",
    "Message:",
    submission.message,
  ].join("\n");
}

function formatHtml(submission: ContactSubmission) {
  return `
    <h2>New Contact Submission</h2>
    <p><strong>Name:</strong> ${submission.name}</p>
    <p><strong>Email:</strong> ${submission.email}</p>
    <p><strong>Company:</strong> ${submission.company || "—"}</p>
    <p><strong>Phone:</strong> ${submission.phone || "—"}</p>
    <p><strong>Service:</strong> ${submission.service || "—"}</p>
    <p><strong>Message:</strong></p>
    <p>${submission.message.replace(/\n/g, "<br/>")}</p>
  `;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ 
      success: false, 
      message: "Method not allowed" 
    });
  }

  try {
    const validatedData = contactSubmissionSchema.parse(req.body);
    await saveContactSubmission(validatedData);
    await sendContactEmail(validatedData);

    return res.json({
      success: true,
      message: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
  } catch (error: any) {
    console.error("Contact form error:", error);
    return res.status(400).json({ 
      success: false, 
      message: "Please check your form and try again.",
      errors: error.errors || error.issues || []
    });
  }
}

