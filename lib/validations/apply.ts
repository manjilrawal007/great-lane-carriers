import { z } from "zod";

const honeypot = z.string().max(0, "Invalid submission");

export const applySchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  cdlClass: z.enum(["A", "B"], { message: "CDL class is required" }),
  cdlState: z.string().min(2, "CDL state is required"),
  cdlExpiration: z.string().min(1, "CDL expiration is required"),
  yearsExperience: z.enum(["0-1", "1-3", "3-5", "5+"], {
    message: "Experience is required",
  }),
  endorsements: z.array(z.string()).optional(),
  preferredLanes: z.string().optional(),
  currentStatus: z.enum(["Employed", "Available", "Owner-op inquiry"], {
    message: "Current status is required",
  }),
  mvrConsent: z
    .boolean()
    .refine((val) => val === true, { message: "MVR consent is required" }),
  privacyConsent: z
    .boolean()
    .refine((val) => val === true, { message: "Applicant consent is required" }),
  message: z.string().optional(),
  honeypot,
});

export type ApplyFormData = z.infer<typeof applySchema>;
