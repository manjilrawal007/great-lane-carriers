"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { FormField } from "./FormField";
import { FormSuccess } from "./FormSuccess";
import { FormError } from "./FormError";
import { portalNotifySchema, type PortalNotifyFormData } from "@/lib/validations/portal-notify";
import { submitToFormApi } from "@/lib/forms/submit";

export function PortalNotifyForm() {
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PortalNotifyFormData>({
    resolver: zodResolver(portalNotifySchema),
    defaultValues: { honeypot: "" },
  });

  async function onSubmit(data: PortalNotifyFormData) {
    setServerError("");
    const result = await submitToFormApi("/api/portal-notify", data);

    if (!result.ok) {
      setServerError(result.error);
      return;
    }

    setSuccess(true);
  }

  if (success) {
    return (
      <FormSuccess
        title="You're on the list!"
        message="We'll notify you when the driver portal launches."
      />
    );
  }

  return (
    <Card>
      <h3 className="text-lg font-semibold text-navy-900">Get Notified at Launch</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4" noValidate>
        {serverError && <FormError message={serverError} />}
        <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("honeypot")} />

        <FormField label="Email" htmlFor="pn-email" error={errors.email?.message} required>
          <Input id="pn-email" type="email" error={!!errors.email} {...register("email")} />
        </FormField>

        <FormField label="Phone" htmlFor="pn-phone">
          <Input id="pn-phone" type="tel" {...register("phone")} />
        </FormField>

        <FormField label="Driver ID" htmlFor="pn-driver-id" hint="Optional — if you're already on our team">
          <Input id="pn-driver-id" {...register("driverId")} />
        </FormField>

        <Button type="submit" variant="accent" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Submitting..." : "Notify Me"}
        </Button>
      </form>
    </Card>
  );
}
