import { z } from "zod";

const honeypot = z.string().max(0, "Invalid submission");

export const quoteSchema = z.object({
  contactName: z.string().min(1, "Contact name is required"),
  company: z.string().min(1, "Company is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  originCity: z.string().min(1, "Origin city is required"),
  originState: z.string().min(2, "Origin state is required"),
  destinationCity: z.string().min(1, "Destination city is required"),
  destinationState: z.string().min(2, "Destination state is required"),
  pickupDate: z.string().optional(),
  equipmentType: z.enum(["Dry Van", "Reefer", "Flatbed", "Other"], {
    message: "Equipment type is required",
  }),
  weight: z.string().optional(),
  frequency: z.enum(["One-time", "Weekly", "Dedicated"]).optional(),
  notes: z.string().optional(),
  honeypot,
});

export type QuoteFormData = z.infer<typeof quoteSchema>;
