import { ToolCase } from "lucide-react";

import { DashedLine } from "../dashed-line";
import { Badge } from "../ui/badge";

import { experience } from "@/data/about";

function AboutExp() {
  return (
    <section id="experience" className="mt-12">
      <div className="container max-w-5xl">
        <Badge
          variant={"default"}
          className="mb-2 text-xs font-semibold tracking-widest uppercase"
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
      <div className="relative container mt-12 max-w-5xl">
        <DashedLine
          orientation="vertical"
          className="absolute inset-y-0 left-8.5 h-full"
        />
        <ul>
          {experience.map((role) => (
            <li key={role.period} className="mb-16 ml-9 last:mb-0">
              <span className="bg-muted-foreground ring-muted absolute left-6 mt-2 flex size-5 items-center justify-center rounded-full ring-4" />
              <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                {role.period}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                {role.role}
              </h2>
              <p className="text-muted-foreground mt-1 text-sm font-medium">
                {role.company}
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-pretty">
                {role.summary}
              </p>
              <ul className="text-muted-foreground mt-6 space-y-3">
                {role.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-pretty">
                    <span className="bg-muted-foreground mt-2 size-1.5 shrink-0 rounded-full" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AboutExp;
