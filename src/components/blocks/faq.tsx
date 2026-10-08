import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/animate-ui/components/radix/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "About Me",
    questions: [
      {
        question: "What do you specialize in?",
        answer:
          "I specialize in modern frontend and full-stack JavaScript/TypeScript applications using React, Next.js, Vue, Nuxt.js and Node.js.",
      },
    ],
  },
  {
    title: "How I Work",
    questions: [
      {
        question: "How do you approach a new project?",
        answer:
          "I start by understanding the problem, then plan the solution, choose the right stack, build, and refine before shipping.",
      },
      {
        question: "Do you work with existing products?",
        answer:
          "Yes. I can join existing teams and codebases, work within established architectures and contribute across frontend, APIs and product features.",
      },
    ],
  },
  {
    title: "Working Together",
    questions: [
      {
        question: "Are you available for freelance or remote opportunities?",
        answer:
          "Yes, I help startups and product teams build modern web applications, SaaS products and AI-powered experiences using React, Next.js, Vue, Nuxt.js and Node.js.",
      },
      {
        question: "How can we work together?",
        answer:
          "Have a project, idea, or opportunity in mind? Get in touch and let's talk about how I can help.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got Questions?
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got Questions?
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
              A few things you might want to know about me and my work,{" "}
              <Link href="/contact" className="underline underline-offset-4">
                get in touch
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                {headerTag === "h1" ? (
                  <h2 className="text-muted-foreground border-b py-4">
                    {category.title}
                  </h2>
                ) : (
                  <h3 className="text-muted-foreground border-b py-4">
                    {category.title}
                  </h3>
                )}
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent
                        keepRendered
                        className="text-muted-foreground"
                      >
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
