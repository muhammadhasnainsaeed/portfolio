import { ToolCase } from "lucide-react";

import { DashedLine } from "../dashed-line";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

const skillsData = [
  {
    category: "frontend",
    list: [
      "html",
      "css",
      "javascript",
      "typescript",
      "react",
      "nextjs",
      "vue",
      "nuxtjs",
      "redux",
      "zustand",
      "tailwindcss",
      "bootstrap",
      "sass",
      "shadcn",
    ],
  },
  {
    category: "backend",
    list: [
      "nodejs",
      "expressjs",
      "nestjs",
      "python",
      "django",
      "fastapi",
      "php",
      "laravel",
      "java",
      "springboot",
    ],
  },
  {
    category: "database",
    list: ["postgresql", "mysql", "mongodb", "redis", "firebase", "supabase"],
  },
  {
    category: "api",
    list: ["restapi", "graphql", "trpc", "websockets"],
  },
  {
    category: "devops",
    list: [
      "git",
      "github",
      "gitlab",
      "docker",
      "kubernetes",
      "nginx",
      "linux",
      "githubactions",
      "cicd",
    ],
  },
  {
    category: "cloud",
    list: ["aws", "vercel", "netlify", "azure", "googlecloud"],
  },
  {
    category: "testing",
    list: ["jest", "vitest", "cypress", "playwright", "testinglibrary"],
  },
  {
    category: "tools",
    list: ["vscode", "postman", "figma", "npm", "yarn", "pnpm"],
  },
];
function AboutSkills() {
  return (
    <section id="skills" className="mt-12 pb-28 lg:pb-32">
      <div className="container max-w-5xl">
        <div className="mx-auto text-center">
          <Badge

            variant={"default"}
            className="text-muted-foreground mb-2 text-xs font-semibold tracking-widest uppercase"
          >
            <ToolCase /> Skills
          </Badge>
          <h2 className="text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-3xl space-y-6 text-lg text-balance">
            Tools I use to turn ideas into scalable, reliable, and impactful
            digital experiences.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2">
          {skillsData.map((skill) => (
            <Card key={skill.category}>
              <CardContent className="space-y-4 px-6 py-4">
                <p className="text-lg font-medium text-balance uppercase">
                  {skill.category}
                </p>
                <DashedLine></DashedLine>
                <div className="flex flex-wrap gap-3">
                  {skill.list.map((l) => (
                    <Badge
                      key={l}
                      variant={"secondary"}
                      className="text-muted-foreground rounded-md text-[10px] font-semibold tracking-widest uppercase"
                    >
                      {l}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSkills;
