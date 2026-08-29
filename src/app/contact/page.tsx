import type { Metadata } from "next";
import { person } from "@/data/portfolio";
import { AvailabilityBadge } from "@/components/AvailabilityBadge";
import { ContactForm } from "@/components/ContactForm";
import { CopyEmail } from "@/components/CopyEmail";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${person.name} for Machine Learning and AI Engineer roles.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-32 sm:px-6">
      <FadeIn>
        <AvailabilityBadge />
        <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Looking for an ML / AI Engineer seat.
        </h1>
        <p className="mt-4 max-w-xl text-mist">
          Entry-level Machine Learning or AI Engineer roles — predictive systems,
          evaluation, and applied LLM products. Email is the fastest path.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn>
          <div className="rounded-2xl border border-line bg-ink p-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-mist">
              Direct
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold">Write me</h2>
            <p className="mt-3 text-sm text-mist">
              Click to copy. Then paste into your mailer, or use the form.
            </p>
            <div className="mt-6">
              <CopyEmail />
            </div>
            <dl className="mt-8 space-y-3 text-sm">
              <div>
                <dt className="text-mist">Location</dt>
                <dd className="text-frost">{person.location}</dd>
              </div>
              <div>
                <dt className="text-mist">Phone</dt>
                <dd className="text-frost">{person.phone}</dd>
              </div>
              <div>
                <dt className="text-mist">GitHub</dt>
                <dd>
                  <a
                    href={person.social.github}
                    className="text-frost underline-offset-4 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/coderkhede
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-mist">LinkedIn</dt>
                <dd>
                  <a
                    href={person.social.linkedin}
                    className="text-frost underline-offset-4 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    prakhar-khedekar-coder
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-mist">Kaggle</dt>
                <dd>
                  <a
                    href={person.social.kaggle}
                    className="text-frost underline-offset-4 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    prakharkhedekar027
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="rounded-2xl border border-line bg-ink p-6">
            <ContactForm />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
