import Image from "next/image";
import Link from "next/link";

import { Badge } from "../ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { buttonVariants } from "@/components/ui/button";

interface Project {
  title: string;
  action: string;
  image: string;
  link: string;
  description: string;
  tags: string[];
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={project.link} className="group block">
      <Card className="relative w-full max-w-md overflow-hidden pt-0">
        <Image
          src={project.image || "/placeholder.webp"}
          alt={project.title}
          width={812}
          height={508}
          quality={80}
          loading="eager"
          fetchPriority="high"
          sizes="(max-width: 812px) 100vw, 812px"
          className="relative z-20 aspect-video object-cover object-top-left"
        />
        <CardHeader>
          <CardAction>
            <Badge variant="ghost">{project.action}</Badge>
          </CardAction>
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{project.description}</CardDescription>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Badge variant={"outline"} className="bg-muted rounded" key={t}>
                {t}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <div
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
              className: "-mx-2.5 text-xs font-medium group-hover:underline",
            })}
          >
            View project →
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default ProjectCard;
