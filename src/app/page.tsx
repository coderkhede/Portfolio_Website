import { Hero } from "@/components/Hero";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Certificates } from "@/components/Certificates";
import { TechStack } from "@/components/TechStack";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Certificates />
      </div>
      <TechStack />
    </>
  );
}
