import * as z from "zod";

export interface ActionResponse<T = unknown> {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof T]?: string[];
  };
  inputs?: T;
}
export const formSchema = z.object({
  name: z.string().min(1, "This field is required"),

  email: z
    .string()
    .min(1, "This field is required")
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .regex(
      /^\+[1-9]\d{7,14}$/,
      "Please enter a valid phone number with country code",
    )
    .optional()
    .or(z.literal("")),

  subject: z.string().min(1, "This field is required"),

  message: z.string().min(1, "This field is required"),
});
