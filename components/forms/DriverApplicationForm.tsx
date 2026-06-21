"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Checkbox } from "@/components/ui/Checkbox";
import { Card } from "@/components/ui/Card";
import { FormField } from "./FormField";
import { FormSuccess } from "./FormSuccess";
import { FormError } from "./FormError";
import { FormPrivacyNotice } from "./FormPrivacyLink";
import { US_STATES } from "@/lib/constants";
import { hasPhone, hasRecruitingEmail } from "@/lib/company";
import {
  company,
  driverApplicantConsentLabel,
  driverApplicationPrivacyNotice,
  driverApplicationSubmitNotice,
} from "@/content/site-content";
import { applySchema, type ApplyFormData } from "@/lib/validations/apply";
import { submitToFormApi } from "@/lib/forms/submit";

const endorsementOptions = ["Hazmat", "Tanker", "Doubles/Triples"];

export function DriverApplicationForm() {
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ApplyFormData>({
    resolver: zodResolver(applySchema),
    defaultValues: { endorsements: [], honeypot: "" },
  });

  async function onSubmit(data: ApplyFormData) {
    setServerError("");
    const result = await submitToFormApi("/api/apply", data);

    if (!result.ok) {
      setServerError(result.error);
      return;
    }

    setSuccess(true);
  }

  if (success) {
    return (
      <FormSuccess
        title="Application Submitted"
        message="Our recruiting team will review your application and contact you as soon as possible."
      />
    );
  }

  return (
    <Card id="apply">
      <h3 className="text-xl font-semibold text-navy-900">Driver Application</h3>
      <p className="mt-2 text-sm text-charcoal-700">
        Join a carrier that values safety, respect, and reliable equipment.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6" noValidate>
        {serverError && <FormError message={serverError} />}

        <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("honeypot")} />

        <div className="grid gap-6 sm:grid-cols-2">
          <FormField label="First Name" htmlFor="firstName" error={errors.firstName?.message} required>
            <Input id="firstName" error={!!errors.firstName} {...register("firstName")} />
          </FormField>
          <FormField label="Last Name" htmlFor="lastName" error={errors.lastName?.message} required>
            <Input id="lastName" error={!!errors.lastName} {...register("lastName")} />
          </FormField>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <FormField label="Phone" htmlFor="phone" error={errors.phone?.message} required>
            <Input id="phone" type="tel" error={!!errors.phone} {...register("phone")} />
          </FormField>
          <FormField label="Email" htmlFor="email" error={errors.email?.message} required>
            <Input id="email" type="email" error={!!errors.email} {...register("email")} />
          </FormField>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <FormField label="CDL Class" htmlFor="cdlClass" error={errors.cdlClass?.message} required>
            <Select id="cdlClass" error={!!errors.cdlClass} {...register("cdlClass")}>
              <option value="">Select...</option>
              <option value="A">Class A</option>
              <option value="B">Class B</option>
            </Select>
          </FormField>
          <FormField label="CDL State" htmlFor="cdlState" error={errors.cdlState?.message} required>
            <Select id="cdlState" error={!!errors.cdlState} {...register("cdlState")}>
              <option value="">Select...</option>
              {US_STATES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </Select>
          </FormField>
          <FormField label="CDL Expiration" htmlFor="cdlExpiration" error={errors.cdlExpiration?.message} required>
            <Input id="cdlExpiration" type="date" error={!!errors.cdlExpiration} {...register("cdlExpiration")} />
          </FormField>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <FormField label="Years of Experience" htmlFor="yearsExperience" error={errors.yearsExperience?.message} required>
            <Select id="yearsExperience" error={!!errors.yearsExperience} {...register("yearsExperience")}>
              <option value="">Select...</option>
              <option value="0-1">0–1 years</option>
              <option value="1-3">1–3 years</option>
              <option value="3-5">3–5 years</option>
              <option value="5+">5+ years</option>
            </Select>
          </FormField>
          <FormField label="Current Status" htmlFor="currentStatus" error={errors.currentStatus?.message} required>
            <Select id="currentStatus" error={!!errors.currentStatus} {...register("currentStatus")}>
              <option value="">Select...</option>
              <option value="Employed">Employed</option>
              <option value="Available">Available</option>
              <option value="Owner-op inquiry">Owner-op inquiry</option>
            </Select>
          </FormField>
        </div>

        <FormField label="Endorsements" htmlFor="endorsements-hazmat">
          <Controller
            name="endorsements"
            control={control}
            render={({ field }) => (
              <div className="space-y-2">
                {endorsementOptions.map((endorsement) => {
                  const selected = field.value ?? [];
                  const checked = selected.includes(endorsement);

                  return (
                    <Checkbox
                      key={endorsement}
                      id={`endorsement-${endorsement}`}
                      label={endorsement}
                      checked={checked}
                      onChange={(event) => {
                        const isChecked = event.target.checked;
                        const next = isChecked
                          ? [...selected, endorsement]
                          : selected.filter((item) => item !== endorsement);
                        field.onChange(next);
                      }}
                    />
                  );
                })}
              </div>
            )}
          />
        </FormField>

        <FormField label="Preferred Lanes" htmlFor="preferredLanes">
          <Input id="preferredLanes" placeholder="e.g. KY to Southeast" {...register("preferredLanes")} />
        </FormField>

        <FormField label="Additional Notes" htmlFor="message">
          <Textarea id="message" rows={4} {...register("message")} />
        </FormField>

        <div className="rounded-lg border border-silver-300 bg-silver-100 p-4">
          <p className="text-sm text-charcoal-700">{driverApplicationPrivacyNotice}</p>
        </div>

        <Checkbox
          label="I consent to MVR and background check as part of the application process."
          error={!!errors.mvrConsent}
          {...register("mvrConsent")}
        />
        {errors.mvrConsent && (
          <p className="text-xs text-red-600">{errors.mvrConsent.message}</p>
        )}

        <Checkbox
          label={driverApplicantConsentLabel}
          error={!!errors.privacyConsent}
          {...register("privacyConsent")}
        />
        {errors.privacyConsent && (
          <p className="text-xs text-red-600">{errors.privacyConsent.message}</p>
        )}

        {hasRecruitingEmail() ? (
          <p className="text-xs text-charcoal-700">
            You may also email your resume to{" "}
            <a href={`mailto:${company.recruitingEmail}`} className="text-accent-600 hover:text-accent-500">
              {company.recruitingEmail}
            </a>
          </p>
        ) : hasPhone() ? (
          <p className="text-xs text-charcoal-700">
            Questions about your application? Call us at{" "}
            <a href={company.phoneHref!} className="text-accent-600 hover:text-accent-500">
              {company.phone}
            </a>
            .
          </p>
        ) : null}

        <FormPrivacyNotice
          message={driverApplicationSubmitNotice}
          className="rounded-lg border border-silver-300 bg-silver-100 p-4 text-sm"
          linkLabel="Learn more in our Privacy & applicant data notice"
        />

        <Button type="submit" variant="accent" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </Card>
  );
}
