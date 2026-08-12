import {
  ArrowRight,
  CheckCircle,
  Clock,
  Code,
  Rocket,
  Users,
  Shield,
} from "lucide-react";

import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import { Button } from "@/components/animate-ui/components/buttons/button";
import { DashedLine } from "@/components/dashed-line";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "Understanding your requirements, goals, and constraints. I define scope, recommend the right tech stack, and outline a clear project plan.",
    icon: Code,
    duration: "3-5 days",
    deliverables: [
      "Project Scope Document",
      "Tech Stack Recommendation",
      "Timeline & Milestones",
    ],
  },
  {
    number: "02",
    title: "Design & Setup",
    description:
      "Turning requirements into a concrete plan — database schema, API structure, and UI direction before development starts.",
    icon: Users,
    duration: "3-7 days",
    deliverables: ["Database Schema", "API Structure", "UI/UX Wireframes"],
  },
  {
    number: "03",
    title: "Development",
    description:
      "Building the product with clean, tested code. Regular progress updates and feedback loops throughout.",
    icon: Rocket,
    duration: "2-8+ weeks",
    deliverables: [
      "Working Codebase",
      "Core Test Coverage",
      "Regular Progress Demos",
    ],
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "Deployment and a support window after launch to fix issues and make adjustments based on real usage.",
    icon: CheckCircle,
    duration: "Ongoing",
    deliverables: [
      "Production Deployment",
      "Post-Launch Bug Fixes",
      "Handover Documentation",
    ],
  },
];

const engagementModels = [
  {
    title: "Full-Stack Project Development",
    description:
      "End-to-end development from idea to launched product — I handle the frontend, backend, and deployment for your project.",
    bestFor: "Startups, MVPs, New Products",
    features: [
      "Tech Stack & Architecture Decisions",
      "Full Implementation",
      "Deployment & Handover",
      "Post-Launch Support",
    ],
    cta: "Start a Project",
    icon: Code,
  },
  {
    title: "Frontend Development & Integration",
    description:
      "Focused frontend work for your product — building UI, integrating APIs, and working alongside your existing backend team.",
    bestFor: "Existing Teams, Ongoing Products",
    features: [
      "Frontend Architecture",
      "API Integration",
      "Performance Optimization",
      "Collaborative Workflow",
    ],
    cta: "Get in Touch",
    icon: Shield,
  },
  {
    title: "Additional Development Capacity",
    description:
      "Join your team as an extra engineer for a project or sprint — contributing code, fixing bugs, and helping you ship faster.",
    bestFor: "Capacity Gaps, Deadline Crunches",
    features: [
      "Frontend & Full-Stack Development",
      "Code Contributions",
      "Bug Fixes & Improvements",
      "Flexible Engagement",
    ],
    cta: "Hire Me",
    icon: Users,
  },
];

export function ServicesProcess() {
  return (
    <section id="process" className="container max-w-5xl pb-28 lg:pb-32">
      <div className="mx-auto max-w-3xl text-center">
        <Badge
          variant="default"
          className="mb-4 text-xs font-semibold tracking-widest uppercase"
        >
          <Clock className="mr-1 size-3" />
          Process
        </Badge>
        <h2 className="text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
          How We Build <span className="text-primary">Together</span>
        </h2>
        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl space-y-4 text-lg text-balance">
          A transparent, collaborative process designed to de-risk delivery and
          maximize quality. No black boxes — you're involved at every step.
        </p>
      </div>

      <div className="mt-16">
        <ol className="relative">
          <DashedLine
            orientation="vertical"
            className="absolute inset-y-0 left-0 h-full lg:left-4"
          />
          {processSteps.map((step) => (
            <li
              key={step.number}
              className="relative mb-16 ml-8 last:mb-0 lg:ml-16"
            >
              <div className="bg-primary text-primary-foreground ring-background absolute top-1 -left-12 flex size-8 items-center justify-center rounded-full font-mono text-sm font-bold ring-4 lg:-left-16">
                {step.number}
              </div>
              <p className="text-muted-foreground mb-2 text-xs font-medium tracking-widest uppercase">
                Phase {step.number} · {step.duration}
              </p>
              <h3 className="mb-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                {step.title}
              </h3>
              <p className="text-muted-foreground mb-4 max-w-2xl leading-relaxed">
                {step.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {step.deliverables.map((deliverable) => (
                  <Badge
                    key={deliverable}
                    variant="outline"
                    className="bg-muted/50 text-xs"
                  >
                    {deliverable}
                  </Badge>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="relative my-10 flex items-center justify-center lg:my-24">
        <DashedLine className="text-muted-foreground" />
        <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
          ENGAGEMENT MODELS
        </span>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {engagementModels.map((model) => (
          <Card key={model.title} className="group relative overflow-hidden">
            <CardHeader>
              <div className="mb-2 flex items-center gap-3">
                <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all">
                  <model.icon className="size-5" />
                </div>
                <CardTitle className="text-lg">{model.title}</CardTitle>
              </div>
              <p className="text-muted-foreground text-sm">
                {model.description}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Badge variant="secondary" className="text-xs font-medium">
                Best for: {model.bestFor}
              </Badge>
              <ul className="space-y-2">
                {model.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-muted-foreground flex items-center gap-2 text-sm"
                  >
                    <CheckCircle className="text-primary size-4 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="group-hover:border-primary group-hover:text-primary mt-2 w-full transition-all"
                asChild
              >
                <a
                  href="/contact"
                  className="flex items-center justify-center gap-2"
                >
                  {model.cta}
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
