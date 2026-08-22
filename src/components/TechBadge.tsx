export function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium tracking-wide text-zinc-300 transition hover:border-violet-accent/50 hover:text-frost">
      {label}
    </span>
  );
}
