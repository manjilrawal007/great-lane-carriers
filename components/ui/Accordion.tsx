"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("divide-y divide-silver-300 rounded-xl border border-silver-300", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className="bg-white first:rounded-t-xl last:rounded-b-xl">
            <button
              type="button"
              className="focus-ring flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-navy-900">{item.question}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-accent-500 transition-transform",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-charcoal-700">{item.answer}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
