import Link from "next/link";

import { ArrowRight, LaptopMinimalCheck } from "lucide-react";

import ProjectCard from "./project-card";
import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";

import { selectedProject } from "@/data/projects";

function SelectedProject() {
  return (
    <section id="projects" className="container max-w-5xl pb-28 lg:pb-32">
      <div className="mb-8 flex items-end justify-between lg:mb-20">
        <div>
          <Badge
            variant={"default"}
            className="text-muted-foreground col-span-2 mb-2 text-xs font-semibold tracking-widest uppercase"
          >
            <LaptopMinimalCheck /> Featured work
          </Badge>
          <h2 className="mb-5 text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
            Things I've Built
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-snug">
            A collection of software projects and digital experiences focused on
            solving real problems through thoughtful engineering.
          </p>
        </div>
        <Link
          href="/projects"
          className={buttonVariants({
            size: "default",
            variant: "outline",
          })}
        >
          All projects <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {selectedProject.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default SelectedProject;
