import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { FaqItem } from "@/types/content";

interface FaqSectionProps {
  title?: string;
  description?: string;
  faqs: FaqItem[];
}

export function FaqSection({
  title = "Frequently Asked Questions",
  description,
  faqs,
}: FaqSectionProps) {
  return (
    <section className="section-padding bg-silver-100">
      <div className="container-site">
        <SectionHeading
          title={title}
          description={description}
          align="center"
          className="mb-12"
        />
        <div className="mx-auto max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
