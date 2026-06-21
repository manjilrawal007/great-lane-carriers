import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ProcessStep } from "@/types/content";

interface ProcessStepsProps {
  title: string;
  description?: string;
  steps: ProcessStep[];
}

export function ProcessSteps({ title, description, steps }: ProcessStepsProps) {
  return (
    <section className="section-padding">
      <div className="container-site">
        <SectionHeading
          title={title}
          description={description}
          align="center"
          className="mb-12"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.step} className="relative text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-xl font-bold text-accent-500">
                {step.step}
              </div>
              <h3 className="mt-4 font-semibold text-navy-900">{step.title}</h3>
              <p className="mt-2 text-sm text-charcoal-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
