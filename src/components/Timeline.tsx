import { timeline } from "@/data/portfolio";
import { FadeIn } from "@/components/FadeIn";

export function Timeline() {
  return (
    <ol className="relative space-y-8 border-l border-line pl-8">
      {timeline.map((item, index) => (
        <FadeIn key={`${item.organization}-${item.role}`} delay={index * 0.06}>
          <li className="relative">
            <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-obsidian bg-violet-accent shadow-[0_0_12px_rgba(139,92,246,0.8)]" />
            <p className="text-[11px] uppercase tracking-[0.22em] text-mist">
              {item.dates} · {item.location}
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold text-frost">
              {item.role}
            </h3>
            <p className="mt-1 text-sm text-violet-300">{item.organization}</p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-mist">
              {item.impact.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        </FadeIn>
      ))}
    </ol>
  );
}
