import { Background } from "@/components/background";
import ProjectCard from "@/components/blocks/project-card";
import { Badge } from "@/components/ui/badge";
import { FolderKanban, LaptopMinimalCheck } from "lucide-react";
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
const page = () => {
  return (
    <Background>
      <section className="py-28 lg:py-32 lg:pt-44">
        <div className="container max-w-5xl">
          <div className="mb-8 flex items-end justify-between lg:mb-20">
            <div>
              <Badge
                variant={"default"}
                className="col-span-2 mb-4 tracking-wide"
              >
                <FolderKanban /> All Projects
              </Badge>
              <h2 className="mb-5 text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
                A Collection of My Work
              </h2>
              <p className="text-muted-foreground max-w-2xl leading-snug">
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
