import { person } from "@/data/portfolio";

export function AvailabilityBadge({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-emerald-accent/30 bg-emerald-accent/10 text-emerald-300 ${
        compact ? "px-2.5 py-1 text-[11px]" : "px-3 py-1.5 text-xs"
      }`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-emerald-accent opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-accent" />
      </span>
      {person.availability.label}
    </span>
  );
}
