import nodemailer from "nodemailer";
import type { ContactSubmission } from "@shared/schema";

const INFO_EMAIL = "info@rubitechnologies.in";

const transporter = (() => {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port) {
    console.warn("[email] SMTP_HOST/SMTP_PORT not configured. Emails will not be sent.");
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    auth: user && pass ? { user, pass } : undefined,
  });
})();

export async function sendContactEmail(submission: ContactSubmission) {
  if (!transporter) {
    return;
  }

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER || INFO_EMAIL,
      to: INFO_EMAIL,
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

