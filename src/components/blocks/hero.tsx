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

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/animate-ui/components/buttons/button";

const features = [
  {
    title: "Modern Tech Stack",
    description:
      "Building with modern technologies to create fast, scalable, and reliable products.",
    icon: Code2,
  },
  {
    title: "Pixel-Perfect UI",
    description: "Create polished, responsive interfaces.",
    icon: PanelsTopLeft,
  },
  {
    title: "Scalable Architecture",
    description: "Build clean systems that scale.",
    icon: Network,
  },
  {
    title: "Seamless Experiences",
    description: "Craft smooth, intuitive user experiences.",
    icon: Sparkles,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <Badge className="border-secondary-foreground mb-4 border-dashed">
            <Zap />
            SOFTWARE ENGINEER • FULL-STACK DEVELOPER
          </Badge>
          <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl xl:whitespace-nowrap">
            Building products that scale.
          </h1>

          <p className="text-muted-foreground text-1xl mt-5 md:text-2xl">
            I design and build fast, reliable, and scalable web applications —
            turning ideas into polished products that are built to perform and
            grow.
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
        <div className="relative flex min-w-96 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
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

      {/*<div className="mt-12 max-lg:ml-6 max-lg:h-[550px] max-lg:overflow-hidden md:mt-20 lg:container lg:mt-24">
        <div className="relative h-[793px] w-full">
          <Image
            src="/hero.webp"
            alt="hero"
            fill
            className="rounded-2xl object-cover object-left-top shadow-lg max-lg:rounded-tr-none"
          />
        </div>
      </div>*/}
    </section>
  );
};
