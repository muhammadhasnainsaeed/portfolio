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
    title: "Discovery & Strategy",
    description:
      "Deep dive into your vision, requirements, and constraints. We define scope, tech stack, architecture, and success metrics.",
    icon: Code,
    duration: "1-2 weeks",
    deliverables: [
      "Technical Specification",
      "Architecture Diagram",
      "Tech Stack Recommendation",
      "Project Roadmap",
    ],
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description:
      "Transform requirements into tangible designs — from system architecture diagrams to interactive UI prototypes.",
    icon: Users,
    duration: "1-3 weeks",
    deliverables: [
      "System Design Docs",
      "Database Schema",
      "API Contracts",
      "UI/UX Prototypes",
    ],
  },
  {
    number: "03",
    title: "Development & Implementation",
    description:
      "Building the product with clean, tested, documented code. Regular demos, code reviews, and iterative feedback loops.",
    icon: Rocket,
    duration: "4-12+ weeks",
    deliverables: [
      "Production-Ready Codebase",
      "Automated Test Suite",
      "CI/CD Pipeline",
      "Documentation",
    ],
  },
  {
    number: "04",
    title: "Launch & Iterate",
    description:
      "Smooth deployment, monitoring setup, and post-launch support. We measure, learn, and ship improvements fast.",
    icon: CheckCircle,
    duration: "Ongoing",
    deliverables: [
      "Production Deployment",
      "Monitoring & Alerting",
      "Performance Baselines",
      "Retrospective",
    ],
  },
];

const engagementModels = [
  {
    title: "Full-Stack Product Development",
    description:
      "End-to-end ownership from idea to launched product. I act as your technical co-founder or lead engineer.",
    bestFor: "Startups, MVPs, New Products",
    features: [
      "Architecture & Tech Decisions",
      "Full Implementation",
      "DevOps & Deployment",
      "Ongoing Maintenance",
    ],
    cta: "Start a Project",
    icon: Code,
  },
  {
    title: "Technical Consulting & Architecture",
    description:
      "Strategic guidance for your existing team — architecture reviews, tech stack decisions, performance audits.",
    bestFor: "Scaling Teams, Legacy Modernization",
    features: [
      "System Architecture Review",
      "Performance Optimization",
      "Tech Debt Strategy",
      "Team Mentoring",
    ],
    cta: "Book a Consultation",
    icon: Shield,
  },
  {
    title: "Staff Augmentation & Team Lead",
    description:
      "Embed with your team as a senior engineer or tech lead. Immediate impact, zero ramp-up time.",
    bestFor: "Capacity Gaps, Critical Projects",
    features: [
      "Senior Engineering Capacity",
      "Code Reviews & Mentoring",
      "Architecture Decisions",
      "Delivery Acceleration",
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
              <div className="bg-primary text-primary-foreground ring-background absolute top-1 -left-3 flex size-8 items-center justify-center rounded-full font-mono text-sm font-bold ring-4 lg:-left-6">
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

      <div className="relative mt-16">
        <DashedLine className="text-muted-foreground" />
        <span className="bg-muted text-muted-foreground absolute left-1/2 -translate-x-1/2 px-3 font-mono text-xs font-medium tracking-wide">
          ENGAGEMENT MODELS
        </span>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {engagementModels.map((model) => (
          <Card key={model.title} className="group relative overflow-hidden">
            <div className="from-primary/50 via-primary to-primary/50 absolute top-0 right-0 left-0 h-1 bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-100" />
            <CardHeader>
              <div className="mb-2 flex items-center gap-3">
                <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground flex h-10 w-10 items-center justify-center rounded-xl transition-all">
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
