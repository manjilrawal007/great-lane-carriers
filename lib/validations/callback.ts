import { z } from "zod";

const honeypot = z.string().max(0, "Invalid submission");

export const callbackSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().optional(),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.union([z.string().email("Valid email is required"), z.literal("")]).optional(),
  reason: z.enum(
    ["Ship freight", "Drive for us", "General", "Compliance docs"],
    { message: "Reason is required" },
  ),
  preferredTime: z
    .enum(["Morning", "Afternoon", "Evening", "Anytime"])
    .optional(),
  message: z.string().optional(),
  honeypot,
});

export type CallbackFormData = z.infer<typeof callbackSchema>;
