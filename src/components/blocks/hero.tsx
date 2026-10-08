import Link from "next/link";

import {
  ArrowRight,
  Code2,
  Network,
  PanelsTopLeft,
  Projector,
  Sparkles,
  Zap,
} from "lucide-react";

import { Badge } from "../ui/badge";

import { Button } from "@/components/animate-ui/components/buttons/button";
import { DashedLine } from "@/components/dashed-line";

const features = [
  {
    title: "4+ Years Experience",
    description: "Building production web applications.",
    icon: Code2,
  },
  {
    title: "Frontend + Full-Stack",
    description: "React, Next.js, Vue, Nuxt & Node.js.",
    icon: PanelsTopLeft,
  },
  {
    title: "SaaS & Payments",
    description: "Stripe, authentication & subscriptions.",
    icon: Network,
  },
  {
    title: "AI & Real-Time Apps",
    description: "AI integrations, streaming & desktop apps.",
    icon: Sparkles,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <Badge className="border-secondary-foreground border-dashed max-sm:text-[11px] sm:mb-4">
            <Zap />
            Senior Frontend & Full-Stack Typescript Engineer
          </Badge>
          <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl xl:whitespace-nowrap">
            I'm Hasnain Saeed.
          </h1>

          <p className="text-muted-foreground mt-5 text-lg md:text-xl">
            I build production-ready web applications with React, Next.js, Vue,
            Nuxt.js and Node.js — from high-performance interfaces to the APIs
            and systems behind them.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild>
              <Link href="/projects">
                View Projects
                <Projector />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
              asChild
            >
              <Link
                href="/contact"
                className="max-w-56 truncate text-start md:max-w-none"
              >
                Let's Connect
                <ArrowRight className="stroke-3" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-col justify-center space-y-5 max-lg:pt-10 lg:min-w-96 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-text text-foreground font-semibold">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
