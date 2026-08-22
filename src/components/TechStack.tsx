import { techStack } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";
import { FadeIn } from "@/components/FadeIn";
import { Brain, Boxes, Cloud } from "lucide-react";

const icons = {
  "Machine Learning & AI": Brain,
  "Libraries & Frameworks": Boxes,
  "Data, Cloud & Software": Cloud,
} as const;

export function TechStack() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionHeader
        eyebrow="Capabilities"
        title="An ML-first stack. Software is how the models ship."
        description="Skills aligned to the resume: supervised learning, tuning, EDA, Scikit-Learn, and the Flask / Streamlit / AWS path that turns a notebook into a product."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {techStack.map((category, index) => {
          const Icon = icons[category.name];
          return (
            <FadeIn key={category.name} delay={index * 0.08}>
              <div
                className={`h-full rounded-2xl border bg-ink p-6 transition hover:border-violet-accent/40 ${
                  index === 0 ? "border-violet-accent/35" : "border-line"
                }`}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-accent/15 text-violet-accent">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{category.name}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300 transition hover:border-emerald-accent/40 hover:text-frost"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
