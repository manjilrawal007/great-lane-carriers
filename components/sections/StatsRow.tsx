import { StatBlock } from "@/components/ui/StatBlock";
import type { Stat } from "@/types/content";

interface StatsRowProps {
  stats: Stat[];
  dark?: boolean;
}

export function StatsRow({ stats, dark = false }: StatsRowProps) {
  return (
    <section className={dark ? "bg-navy-800 section-padding" : "bg-silver-100 section-padding"}>
      <div className="container-site">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <StatBlock key={stat.label} {...stat} dark={dark} />
          ))}
        </div>
      </div>
    </section>
  );
}
