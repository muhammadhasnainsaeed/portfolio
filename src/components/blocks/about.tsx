import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { DashedLine } from "../dashed-line";
import { ToolCase } from "lucide-react";

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

const experience = [
  {
    period: "2024 — Present",
    role: "Senior Full Stack Engineer",
    company: "Independent / Consulting",
    summary:
      "Partner with founders and product teams to design and ship AI-powered SaaS from zero to launch.",
    highlights: [
      "Shipped a real-time AI voice translation desktop app (Electron + OpenAI) with sub-second latency.",
      "Led architecture for a multi-tenant LMS serving thousands of learners and instructors.",
      "Introduced type-safe end-to-end patterns (TypeScript, tRPC-style RPC, Zod) across client engagements.",
    ],
  },
  {
    period: "2022 — 2024",
    role: "Full Stack Engineer",
    company: "Product Studio",
    summary:
      "Built customer-facing products and internal platforms for early-stage startups across EdTech and creator economy.",
    highlights: [
      "Designed and shipped Trainerflix — subscription LMS with Stripe billing and instructor dashboards.",
      "Built TipTube creator platform: video pipeline, memberships and community in one product.",
      "Reduced p95 API latency by 60% through query optimization, caching and edge deployments.",
    ],
  },
  {
    period: "2021 — 2022",
    role: "Software Engineer",
    company: "Early career",
    summary:
      "Frontend-heavy roles across React and React Native. Grew into full-stack ownership of features and services.",
    highlights: [
      "Delivered React Native mobile apps used by regional customers in production.",
      "Owned migration of a legacy jQuery admin to a typed React + Tailwind SPA.",
      "Introduced CI/CD, automated tests and code review culture on small teams.",
    ],
  },
];

const About = () => {
  return (
    <>
      <section className="mt-12 pb-28 lg:pb-32">
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
            {skillsData.map((skill, i) => (
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
      <section className="mt-12">
        <div className="container max-w-5xl">
          <Badge
            variant={"default"}
            className="text-muted-foreground mb-2 text-xs font-semibold tracking-widest uppercase"
          >
            <ToolCase /> Experience
          </Badge>
          <h3 className="text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
            A journey across full-stack, AI and product engineering.
          </h3>
          <p className="text-muted-foreground mt-4 max-w-3xl space-y-6 text-lg text-balance">
            Four years of shipping — from first React components to owning
            production systems for SaaS, EdTech and AI-powered products.
          </p>
        </div>
        <div className="container mt-12 max-w-5xl">
          <ol className="relative">
            <DashedLine
              orientation="vertical"
              className="absolute inset-y-0 left-0 h-full"
            />
            {experience.map((role) => (
              <li key={role.period} className="mb-16 ml-8 last:mb-0">
                <span className="bg-muted-foreground ring-muted absolute -left-2.5 mt-2 flex size-5 items-center justify-center rounded-full ring-4" />
                <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                  {role.period}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {role.role}
                </h2>
                <p className="text-muted-foreground mt-1 text-sm font-medium">
                  {role.company}
                </p>
                <p className="text-secondary-foreground mt-4 max-w-2xl text-lg leading-relaxed text-pretty">
                  {role.summary}
                </p>
                <ul className="text-muted-foreground mt-6 space-y-3">
                  {role.highlights.map((h) => (
                    <li className="flex gap-3 text-pretty">
                      <span className="bg-secondary-foreground mt-2 size-1.5 shrink-0 rounded-full" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
};

export default About;

interface ImageSectionProps {
  images: { src: string; alt: string }[];
  className?: string;
}

export function ImageSection({ images, className }: ImageSectionProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-[2/1.5] overflow-hidden rounded-2xl"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

interface TextSectionProps {
  title?: string;
  paragraphs: string[];
  ctaButton?: {
    href: string;
    text: string;
  };
}

export function TextSection({
  title,
  paragraphs,
  ctaButton,
}: TextSectionProps) {
  return (
    <section className="flex-1 space-y-4 text-lg md:space-y-6">
      {title && <h2 className="text-foreground text-4xl">{title}</h2>}
      <div className="text-muted-foreground max-w-xl space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {ctaButton && (
        <div className="mt-8">
          <Link href={ctaButton.href}>
            <Button size="lg">{ctaButton.text}</Button>
          </Link>
        </div>
      )}
    </section>
  );
}
