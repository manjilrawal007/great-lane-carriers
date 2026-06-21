import { z } from "zod";

const honeypot = z.string().max(0, "Invalid submission");

export const portalNotifySchema = z.object({
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  driverId: z.string().optional(),
  honeypot,
});

export type PortalNotifyFormData = z.infer<typeof portalNotifySchema>;
