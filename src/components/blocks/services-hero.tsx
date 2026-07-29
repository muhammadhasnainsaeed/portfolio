import { Code2, Database, Server, Globe, Zap, Shield, Brain, Cloud } from "lucide-react";

import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/animate-ui/components/buttons/button";

const services = [
  {
    title: "Full-Stack Web Development",
    description: "Building scalable, performant web applications from concept to deployment using modern tech stacks.",
    icon: Code2,
    features: ["React / Next.js / Vue / Nuxt", "Node.js / Python / Laravel", "TypeScript / PostgreSQL / MongoDB", "REST APIs / GraphQL / tRPC"],
    highlight: "End-to-end product delivery",
  },
  {
    title: "Backend Architecture & APIs",
    description: "Designing robust server-side systems, databases, and APIs that scale with your business needs.",
    icon: Server,
    features: ["Microservices & Monoliths", "Database Design & Optimization", "Authentication & Authorization", "Message Queues & Event Systems"],
    highlight: "Production-ready infrastructure",
  },
  {
    title: "Cloud & DevOps Engineering",
    description: "Automating infrastructure, CI/CD pipelines, and cloud deployments for reliable, scalable operations.",
    icon: Cloud,
    features: ["AWS / GCP / Azure", "Docker & Kubernetes", "CI/CD with GitHub Actions", "Infrastructure as Code (Terraform)"],
    highlight: "Zero-downtime deployments",
  },
  {
    title: "AI & Machine Learning Integration",
    description: "Integrating AI capabilities into products — from LLMs and computer vision to custom ML pipelines.",
    icon: Brain,
    features: ["OpenAI / Anthropic / Open Source LLMs", "RAG & Vector Databases", "Model Fine-tuning & Deployment", "Real-time AI Features"],
    highlight: "Production AI at scale",
  },
  {
    title: "E-Commerce & Payment Systems",
    description: "Building secure, conversion-optimized e-commerce platforms with complex subscription and billing logic.",
    icon: Shield,
    features: ["Stripe / Paddle / Lemon Squeezy", "Subscription Management", "Multi-currency & Tax Compliance", "Checkout Optimization"],
    highlight: "Revenue-focused architecture",
  },
  {
    title: "Real-time & Collaborative Apps",
    description: "Creating live, multi-user experiences with WebSockets, WebRTC, and modern real-time infrastructure.",
    icon: Zap,
    features: ["WebSockets / Server-Sent Events", "Live Collaboration (CRDTs)", "Real-time Notifications", "Presence & Typing Indicators"],
    highlight: "Sub-second latency",
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile applications with native performance using React Native and Expo.",
    icon: Globe,
    features: ["React Native / Expo", "iOS & Android Deployment", "Native Module Integration", "Offline-First Architecture"],
    highlight: "Single codebase, native feel",
  },
  {
    title: "Technical Consulting & Architecture",
    description: "Strategic technical guidance for startups and teams — architecture reviews, tech stack decisions, and team mentorship.",
    icon: Database,
    features: ["System Architecture Reviews", "Tech Stack Selection", "Performance Audits", "Team Mentoring & Code Reviews"],
    highlight: "Strategic technical leadership",
  },
];

export function ServicesHero() {
  return (
    <section className="container max-w-5xl">
      <div className="mx-auto text-center max-w-3xl">
        <Badge variant="default" className="mb-4 text-xs font-semibold tracking-widest uppercase">
          <Code2 className="mr-1 size-3" />
          Services
        </Badge>
        <h1 className="text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
          Engineering Solutions That{" "}
          <span className="text-primary">Scale</span>
        </h1>
        <p className="text-muted-foreground mt-6 max-w-2xl mx-auto space-y-4 text-lg text-balance">
          From MVP to enterprise scale — I build full-stack applications, design system architectures,
          and integrate cutting-edge AI. Whether you need a founding engineer, a technical co-founder,
          or a senior consultant, I bring 4+ years of shipping production software.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            <a href="/contact" className="flex items-center gap-2">
              Start a Project
              <span className="size-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/projects" className="flex items-center gap-2">
              View Work
              <span className="size-4" />
            </a>
          </Button>
        </div>
      </div>

      <div className="relative mt-16">
        <DashedLine className="text-muted-foreground" />
        <span className="bg-muted text-muted-foreground absolute left-1/2 -translate-x-1/2 px-3 font-mono text-xs font-medium tracking-wide">
          WHAT I DO
        </span>
      </div>
    </section>
  );
}
