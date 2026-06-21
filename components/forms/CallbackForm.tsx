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
import { callbackSchema, type CallbackFormData } from "@/lib/validations/callback";
import { submitToFormApi } from "@/lib/forms/submit";
import { contactFormPrivacyNotice } from "@/content/site-content";
import { cn } from "@/lib/utils";

interface CallbackFormProps {
  compact?: boolean;
  compactTitle?: string;
  id?: string;
  defaultReason?: CallbackFormData["reason"];
}

export function CallbackForm({
  compact = false,
  compactTitle = "Request a Callback",
  id = "callback",
  defaultReason,
}: CallbackFormProps) {
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CallbackFormData>({
    resolver: zodResolver(callbackSchema),
    defaultValues: {
      honeypot: "",
      reason: defaultReason,
    },
  });

  async function onSubmit(data: CallbackFormData) {
    setServerError("");
    const result = await submitToFormApi("/api/callback", data);

    if (!result.ok) {
      setServerError(result.error);
      return;
    }

    setSuccess(true);
  }

  if (success) {
    return <FormSuccess title="Callback Requested" message="We'll call you back at your preferred time." />;
  }

  return (
    <Card id={id} className={cn(compact && "p-6")}>
      {compact ? (
        <>
          <h3 className="text-lg font-semibold text-navy-900">{compactTitle}</h3>
          <p className="mt-2 text-sm text-charcoal-700">
            Leave your details and our team will call you back.
          </p>
        </>
      ) : (
        <>
          <h3 className="text-xl font-semibold text-navy-900">Request a Callback</h3>
          <p className="mt-2 text-sm text-charcoal-700">
            Tell us how to reach you and we&apos;ll call back promptly.
          </p>
        </>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-4", "mt-6")} noValidate>
        {serverError && <FormError message={serverError} />}
        <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("honeypot")} />

        <FormField label="Name" htmlFor="cb-name" error={errors.name?.message} required>
          <Input id="cb-name" error={!!errors.name} {...register("name")} />
        </FormField>

        {!compact && (
          <FormField label="Company" htmlFor="cb-company">
            <Input id="cb-company" {...register("company")} />
          </FormField>
        )}

        <FormField label="Phone" htmlFor="cb-phone" error={errors.phone?.message} required>
          <Input id="cb-phone" type="tel" error={!!errors.phone} {...register("phone")} />
        </FormField>

        <FormField label="Email" htmlFor="cb-email" error={errors.email?.message}>
          <Input id="cb-email" type="email" error={!!errors.email} {...register("email")} />
        </FormField>

        {!defaultReason && (
          <FormField label="Reason" htmlFor="cb-reason" error={errors.reason?.message} required>
            <Select id="cb-reason" error={!!errors.reason} {...register("reason")}>
              <option value="">Select...</option>
              <option value="Ship freight">Ship freight</option>
              <option value="Drive for us">Drive for us</option>
              <option value="General">General</option>
              <option value="Compliance docs">Compliance docs</option>
            </Select>
          </FormField>
        )}

        {defaultReason && <input type="hidden" {...register("reason")} />}

        {!compact && (
          <>
            <FormField label="Preferred Time" htmlFor="cb-time">
              <Select id="cb-time" {...register("preferredTime")}>
                <option value="">Anytime</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
                <option value="Anytime">Anytime</option>
              </Select>
            </FormField>
            <FormField label="Message" htmlFor="cb-message">
              <Textarea id="cb-message" rows={3} {...register("message")} />
            </FormField>
          </>
        )}

        <FormPrivacyNotice message={contactFormPrivacyNotice} className="text-sm" />

        <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Sending..." : "Request Callback"}
        </Button>
      </form>
    </Card>
  );
}
