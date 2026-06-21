import { z } from "zod";

const honeypot = z.string().max(0, "Invalid submission");

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  department: z.enum(["Dispatch", "Recruiting", "Accounting", "Safety"], {
    message: "Department is required",
  }),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot,
});

export type ContactFormData = z.infer<typeof contactSchema>;
