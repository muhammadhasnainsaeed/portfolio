import { FolderKanban } from "lucide-react";
import { Metadata } from "next";

import { Background } from "@/components/background";
import ProjectCard from "@/components/blocks/project-card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore a collection of software projects by Muhammad Hasnain Saeed, showcasing full-stack development, clean design, and innovative problem-solving.",
  keywords: [
    "Hasnain Saeed projects",
    "Software Engineer portfolio",
    "Full-stack development projects",
    "Web applications showcase",
    "Open source projects",
  ],
};

const page = () => {
  return (
    <Background className="via-muted to-muted/80">
      <section className="py-28 lg:py-32 lg:pt-44">
        <div className="container max-w-5xl">
          <div className="mb-8 flex items-end justify-between lg:mb-20">
            <div>
              <Badge
                variant={"default"}
                className="col-span-2 mb-2 text-xs font-semibold tracking-widest uppercase"
              >
                <FolderKanban /> All Projects
              </Badge>
              <h2 className="text-foreground mb-5 max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl">
                A Collection of My Work
              </h2>
              <p className="text-muted-foreground text-1xl mt-5 md:text-2xl">
                Explore the projects I've built over the years — from
                production-ready applications to experimental ideas, each
                crafted with a focus on thoughtful engineering, clean design,
                and solving real-world problems.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </Background>
  );
};

export default page;
