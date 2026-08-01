import { Code2, ArrowRight } from "lucide-react";

import { Badge } from "../ui/badge";

import { Button } from "@/components/animate-ui/components/buttons/button";
import { DashedLine } from "@/components/dashed-line";

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
              <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/projects" className="flex items-center gap-2">
              View Work
              <ArrowRight className="size-4" />
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
