import { ArrowRight, Brain } from "lucide-react";

import { Badge } from "../ui/badge";

import { Button } from "@/components/animate-ui/components/buttons/button";
import { DashedLine } from "@/components/dashed-line";

export function ServicesCTA() {
  return (
    <section className="container max-w-5xl pb-28 lg:pb-32">
      <div className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-primary/10 via-background to-primary/5 p-8 lg:p-12 text-center">
        <div className="relative z-10 max-w-2xl mx-auto">
          <Badge variant="default" className="mb-4 text-xs font-semibold tracking-widest uppercase">
            <Brain className="mr-1.5 size-3" />
            Let's Build Together
          </Badge>
          <h3 className="text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl">
            Ready to Ship Something Great?
          </h3>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto space-y-4 text-lg text-balance leading-relaxed">
            <span className="block">
              Whether you have a product idea, need technical leadership, or want to optimize your
              existing systems — I'm here to help you build it right.
            </span>
            <span className="block">
              Let's schedule a free 30-minute consultation to discuss your project.
            </span>
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <a href="/contact" className="flex items-center gap-2">
                Book a Call
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/muhammadhasnainsaeed"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ArrowRight className="size-4" />
                View My Work
              </a>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-20" />
      </div>
    </section>
  );
}
