import { ToolCase } from "lucide-react";

import { DashedLine } from "../dashed-line";
import { Badge } from "../ui/badge";

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

function AboutExp() {
  return (
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
                  <li key={h} className="flex gap-3 text-pretty">
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
  );
}

export default AboutExp;
