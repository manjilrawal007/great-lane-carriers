import { User } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { TeamMember } from "@/types/content";

interface TeamSectionProps {
  title?: string;
  description?: string;
  members: TeamMember[];
}

function MemberAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="relative mx-auto mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-navy-900 to-navy-800 text-white shadow-sm"
      aria-hidden="true"
    >
      <span className="text-lg font-semibold text-accent-500">{initials}</span>
      <User className="absolute bottom-2 right-2 h-4 w-4 text-white/30" />
    </div>
  );
}

export function TeamSection({
  title = "Leadership",
  description = "Experienced professionals committed to safety, service, and growth.",
  members,
}: TeamSectionProps) {
  if (members.length === 0) {
    return null;
  }

  return (
    <section className="section-padding bg-silver-100">
      <div className="container-site">
        <SectionHeading title={title} description={description} className="mb-12" />
        <div className="grid gap-6 md:grid-cols-3">
          {members.map((member) => (
            <Card key={member.name} className="text-center">
              <MemberAvatar name={member.name} />
              <h3 className="font-semibold text-navy-900">{member.name}</h3>
              <p className="text-sm font-medium text-accent-500">{member.title}</p>
              <p className="mt-3 text-sm text-charcoal-700">{member.bio}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
