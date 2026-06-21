"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Card } from "@/components/ui/Card";
import { FormField } from "./FormField";
import { FormSuccess } from "./FormSuccess";
import { FormError } from "./FormError";
import { FormPrivacyNotice } from "./FormPrivacyLink";
import { US_STATES } from "@/lib/constants";
import { quoteSchema, type QuoteFormData } from "@/lib/validations/quote";
import { submitToFormApi } from "@/lib/forms/submit";
import { contactFormPrivacyNotice } from "@/content/site-content";

export function FreightQuoteForm() {
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { honeypot: "" },
  });

  async function onSubmit(data: QuoteFormData) {
    setServerError("");
    const result = await submitToFormApi("/api/quote", data);

    if (!result.ok) {
      setServerError(result.error);
      return;
    }

    setSuccess(true);
  }

  if (success) {
    return (
      <FormSuccess
        title="Quote Request Received"
        message="Our dispatch team will respond with pricing and availability shortly."
      />
    );
  }

  return (
    <Card id="quote">
      <h3 className="text-xl font-semibold text-navy-900">Request a Freight Quote</h3>
      <p className="mt-2 text-sm text-charcoal-700">
        Share your lane details and we&apos;ll provide competitive pricing.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6" noValidate>
        {serverError && <FormError message={serverError} />}
        <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("honeypot")} />

        <div className="grid gap-6 sm:grid-cols-2">
          <FormField label="Contact Name" htmlFor="q-contact" error={errors.contactName?.message} required>
            <Input id="q-contact" error={!!errors.contactName} {...register("contactName")} />
          </FormField>
          <FormField label="Company" htmlFor="q-company" error={errors.company?.message} required>
            <Input id="q-company" error={!!errors.company} {...register("company")} />
          </FormField>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <FormField label="Email" htmlFor="q-email" error={errors.email?.message} required>
            <Input id="q-email" type="email" error={!!errors.email} {...register("email")} />
          </FormField>
          <FormField label="Phone" htmlFor="q-phone" error={errors.phone?.message} required>
            <Input id="q-phone" type="tel" error={!!errors.phone} {...register("phone")} />
          </FormField>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <FormField label="Origin City" htmlFor="q-origin-city" error={errors.originCity?.message} required>
            <Input id="q-origin-city" error={!!errors.originCity} {...register("originCity")} />
          </FormField>
          <FormField label="Origin State" htmlFor="q-origin-state" error={errors.originState?.message} required>
            <Select id="q-origin-state" error={!!errors.originState} {...register("originState")}>
              <option value="">Select...</option>
              {US_STATES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </Select>
          </FormField>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <FormField label="Destination City" htmlFor="q-dest-city" error={errors.destinationCity?.message} required>
            <Input id="q-dest-city" error={!!errors.destinationCity} {...register("destinationCity")} />
          </FormField>
          <FormField label="Destination State" htmlFor="q-dest-state" error={errors.destinationState?.message} required>
            <Select id="q-dest-state" error={!!errors.destinationState} {...register("destinationState")}>
              <option value="">Select...</option>
              {US_STATES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </Select>
          </FormField>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <FormField label="Pickup Date" htmlFor="q-pickup">
            <Input id="q-pickup" type="date" {...register("pickupDate")} />
          </FormField>
          <FormField label="Equipment Type" htmlFor="q-equipment" error={errors.equipmentType?.message} required>
            <Select id="q-equipment" error={!!errors.equipmentType} {...register("equipmentType")}>
              <option value="">Select...</option>
              <option value="Dry Van">Dry Van</option>
              <option value="Reefer">Reefer</option>
              <option value="Flatbed">Flatbed</option>
              <option value="Other">Other</option>
            </Select>
          </FormField>
          <FormField label="Weight (lbs)" htmlFor="q-weight">
            <Input id="q-weight" placeholder="e.g. 42000" {...register("weight")} />
          </FormField>
        </div>

        <FormField label="Frequency" htmlFor="q-frequency">
          <Select id="q-frequency" {...register("frequency")}>
            <option value="">Select...</option>
            <option value="One-time">One-time</option>
            <option value="Weekly">Weekly</option>
            <option value="Dedicated">Dedicated</option>
          </Select>
        </FormField>

        <FormField label="Notes" htmlFor="q-notes">
          <Textarea id="q-notes" rows={4} placeholder="Special requirements, appointment times, etc." {...register("notes")} />
        </FormField>

        <FormPrivacyNotice message={contactFormPrivacyNotice} className="text-sm" />

        <Button type="submit" variant="accent" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? "Submitting..." : "Request Quote"}
        </Button>
      </form>
    </Card>
  );
}
