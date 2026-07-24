import { DashedLine } from "@/components/dashed-line";
import Image from "next/image";
import { Badge } from "../ui/badge";
import React from "react";
const stats = [
  {
    value: "4+",
    label: "Years of experience",
  },
  {
    value: "20+",
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
        <Badge className="text-muted-foreground mb-2 text-xs font-semibold tracking-widest uppercase">
          About me
        </Badge>
        <h2 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          The Developer Behind the Code
        </h2>
        <p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg text-balance md:block lg:mt-12">
          I'm a Software Engineer passionate about building modern, scalable,
          and user-focused digital experiences. I enjoy turning complex problems
          into clean, efficient, and maintainable solutions.
          <br />
          <br />
          My approach combines technical expertise with curiosity and continuous
          learning. Whether I'm building a product from scratch or improving an
          existing system, I focus on writing quality code and creating
          experiences that actually make an impact.
        </p>
        <DashedLine orientation="horizontal" className="my-8 flex-1 md:my-12" />
        <div className="mt-6 flex flex-1 items-stretch justify-between gap-4">
          {stats.map((stat, i) => (
            <React.Fragment key={stat.label}>
              <div className="flex flex-col gap-1">
                <div className="font-display text-4xl tracking-wide md:text-5xl">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>

              {i !== stats.length - 1 && (
                <div className="bg-border mx-4 w-px" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="w-full md:w-80">
        <div className="overflow-hidden rounded-lg border">
          <Image
            src={"about/avatar.jpg"}
            width={320}
            height={500}
            alt="Jordan Lee"
            className="aspect-square w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="bg-secondary mt-2 rounded-lg p-4">
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
