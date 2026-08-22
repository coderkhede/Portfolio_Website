import { getFeaturedProjects } from "@/data/portfolio";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { FadeIn } from "@/components/FadeIn";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section id="work" className="mx-auto max-w-5xl scroll-mt-28 px-4 py-20 sm:px-6">
      <SectionHeader
        eyebrow="Selected work"
        title="Applied ML first. Products second."
        description="AISE estimates skill and builds a learning path. The FWI predictor is a full train-and-serve pipeline. The Data Science lab is the algorithm ground truth. Software internships live in the archive."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((project, index) => (
          <FadeIn
            key={project.slug}
            delay={index * 0.08}
            className={index === 0 ? "md:col-span-2" : ""}
          >
            <ProjectCard project={project} index={index} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
