"use server";
import { Resend } from "resend";

import { actionClient } from "./safe-action";

import ContactEmail from "@/emails/ContactEmail";
import { formSchema } from "@/lib/form-schema";

const recipientEmail =
  process.env.CONTACT_RECEIVER_EMAIL ?? "ihasnain4@gmail.com";
const senderEmail = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
const apiKey = process.env.RESEND_API_KEY;

export const serverAction = actionClient
  .inputSchema(formSchema)
  .action(async ({ parsedInput }) => {
    if (!apiKey) {
      throw new Error("Server configuration error: Missing API Key.");
    }

    try {
      const { name, email, phone, subject, message } = parsedInput;
      const resend = new Resend(apiKey);

      const { error } = await resend.emails.send({
        from: `Portfolio Contact <${senderEmail}>`,
        to: recipientEmail,
        replyTo: email,
        subject: `Portfolio Contact: ${subject}`,
        react: ContactEmail({ name, email, phone, subject, message }),
      });

      if (error) {
        throw new Error(error.message);
      }

      return {
        success: true,
        message: "Message sent successfully!",
      };
    } catch {
      throw new Error(
        "Server was unable to send email. Check API configurations.",
      );
    }
  });
