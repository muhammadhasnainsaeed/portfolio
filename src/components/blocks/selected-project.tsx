import Link from "next/link";

import { ArrowRight, LaptopMinimalCheck } from "lucide-react";

import ProjectCard from "./project-card";
import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";

const projects = [
  {
    title: "Velocity — CI/CD Platform",
    year: "2024",
    image: "",
    description:
      "A developer-first continuous integration platform with real-time pipeline visualization, automated rollbacks, and Slack notifications.",
    tags: ["Next.js", "Go", "Kubernetes", "PostgreSQL"],
  },
  {
    title: "Beacon — Observability Tool",
    year: "2023",
    image: "/about/1.webp",
    description:
      "Full-stack observability dashboard for distributed services. Real-time log streaming, error tracing, and latency heatmaps.",
    tags: ["React", "ClickHouse", "Grafana", "gRPC"],
  },
  {
    title: "Folio — Open Source CMS",
    year: "2023",
    image: "/about/1.webp",
    description:
      "Headless CMS built for developer speed — type-safe schemas, REST + GraphQL APIs, and a Notion-like editing experience.",
    tags: ["TypeScript", "Prisma", "GraphQL", "React"],
  },
];

function SelectedProject() {
  return (
    <section id="projects" className="container max-w-5xl pb-28 lg:pb-32">
      <div className="mb-8 flex items-end justify-between lg:mb-20">
        <div>
          <Badge variant={"default"} className="col-span-2 mb-4 tracking-wide">
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
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default SelectedProject;
