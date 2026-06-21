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
import { contactSchema, type ContactFormData } from "@/lib/validations/contact";
import { submitToFormApi } from "@/lib/forms/submit";
import { contactFormPrivacyNotice } from "@/content/site-content";

export function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { honeypot: "" },
  });

  async function onSubmit(data: ContactFormData) {
    setServerError("");
    const result = await submitToFormApi("/api/contact", data);

    if (!result.ok) {
      setServerError(result.error);
      return;
    }

    setSuccess(true);
  }

  if (success) {
    return <FormSuccess title="Message Sent" message="We'll respond to your inquiry as soon as possible." />;
  }

  return (
    <Card id="contact-form">
      <h3 className="text-xl font-semibold text-navy-900">Contact Us</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6" noValidate>
        {serverError && <FormError message={serverError} />}
        <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("honeypot")} />

        <div className="grid gap-6 sm:grid-cols-2">
          <FormField label="Name" htmlFor="c-name" error={errors.name?.message} required>
            <Input id="c-name" error={!!errors.name} {...register("name")} />
          </FormField>
          <FormField label="Email" htmlFor="c-email" error={errors.email?.message} required>
            <Input id="c-email" type="email" error={!!errors.email} {...register("email")} />
          </FormField>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <FormField label="Phone" htmlFor="c-phone">
            <Input id="c-phone" type="tel" {...register("phone")} />
          </FormField>
          <FormField label="Department" htmlFor="c-dept" error={errors.department?.message} required>
            <Select id="c-dept" error={!!errors.department} {...register("department")}>
              <option value="">Select...</option>
              <option value="Dispatch">Dispatch</option>
              <option value="Recruiting">Recruiting</option>
              <option value="Accounting">Accounting</option>
              <option value="Safety">Safety</option>
            </Select>
          </FormField>
        </div>

        <FormField label="Subject" htmlFor="c-subject" error={errors.subject?.message} required>
          <Input id="c-subject" error={!!errors.subject} {...register("subject")} />
        </FormField>

        <FormField label="Message" htmlFor="c-message" error={errors.message?.message} required>
          <Textarea id="c-message" rows={5} error={!!errors.message} {...register("message")} />
        </FormField>

        <FormPrivacyNotice message={contactFormPrivacyNotice} className="text-sm" />

        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Card>
  );
}
