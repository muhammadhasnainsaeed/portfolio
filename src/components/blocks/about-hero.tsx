import React from "react";

import Image from "next/image";

import { CircleUserRound } from "lucide-react";

import { Badge } from "../ui/badge";

import { DashedLine } from "@/components/dashed-line";

const stats = [
  {
    value: "4+",
    label: "Years of experience",
  },
  {
    value: "10+",
    label: "Projects shipped",
  },
  {
    value: "3",
    label: "Open-source tools",
  },
];

export function AboutHero() {
  return (
    <section className="container mx-auto flex max-w-5xl flex-col gap-8 pb-28 md:flex-row lg:pb-32">
      <div className="flex-1">
        <Badge className="mb-2 text-xs font-semibold tracking-widest uppercase">
          <CircleUserRound />
          About me
        </Badge>
        <h2 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl">
          The Developer Behind the Code
        </h2>
        <p className="text-muted-foreground mt-5 hidden max-w-lg text-lg text-balance md:block">
          I'm a software engineer who leads frontend development on production
          SaaS and EdTech platforms, and builds full-stack products end-to-end
          on my own from API design to deployment.
          <br />
          <br />
          My approach combines technical expertise with curiosity and continuous
          learning. Whether I'm building a product from scratch or improving an
          existing system, I focus on writing quality code and creating
          experiences that actually make an impact.
        </p>
        <DashedLine orientation="horizontal" className="my-8 flex-1 md:my-12" />
        <div className="mt-6 flex flex-1 items-stretch justify-between md:gap-4">
          {stats.map((stat, i) => (
            <React.Fragment key={stat.label}>
              <div className="flex flex-col gap-1">
                <div className="font-display text-4xl tracking-wide md:text-5xl">
                  {stat.value}
                </div>
                <div className="text-muted-foreground max-sm:text-xs">
                  {stat.label}
                </div>
              </div>

              {i !== stats.length - 1 && (
                <DashedLine
                  orientation="vertical"
                  className="mx-4 h-[inherit]"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="w-full md:w-80">
        <div className="overflow-hidden rounded-lg border">
          <Image
            src={"/about/hasnainsaeed.webp"}
            width={320}
            height={500}
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 320px) 100vw, 320px"
            alt="Hasnain saeed"
            className="aspect-square w-full object-cover"
          />
        </div>
        <div className="bg-muted mt-2 rounded-lg border p-4">
          <p className="text-muted-foreground mb-2 text-xs font-semibold tracking-widest uppercase">
            Currently reading
          </p>
          <p className="text-foreground text-sm font-medium">
            Designing Data-Intensive Applications
          </p>
          <p className="text-muted-foreground text-xs">— Martin Kleppmann</p>
        </div>
      </div>
    </section>
  );
}
