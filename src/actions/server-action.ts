"use server";
import { Resend } from "resend";

import { actionClient } from "./safe-action";

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
        headers: {
          "X-Priority": "1",
          "X-MSMail-Priority": "High",
          Importance: "high",
        },
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone || "N/A"}`,
          "",
          message,
        ].join("\n"),
        html: `
          <div>
            <h2>Message from Portfolio</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "N/A"}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br />")}</p>
          </div>
        `,
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
