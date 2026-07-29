import Image from "next/image";
import Link from "next/link";

import { Badge } from "../ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

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
    <Card className="relative mx-auto w-full max-w-sm overflow-hidden pt-0">
      <Image
        src={project.image || "/placeholder.webp"}
        alt={project.title}
        width={1024}
        height={576}
        className="relative z-20 aspect-video w-full object-cover"
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
        <Link
          href={project.link}
          className={buttonVariants({
            variant: "ghost",
            size: "sm",
            className: "-mx-2.5 text-xs font-medium underline",
          })}
        >
          View project →
        </Link>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
