import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "About Me",
    questions: [
      {
        question: "What kind of software do you build?",
        answer:
          "I build modern web applications, scalable backend systems, and digital products focused on performance and user experience.",
      },
      {
        question: "What technologies do you work with?",
        answer:
          "I work with modern JavaScript and TypeScript technologies across frontend, backend, databases, and cloud platforms.",
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
        question: "Do you work with existing teams and codebases?",
        answer:
          "Yes. I can collaborate with existing teams, adapt to established workflows, and contribute to ongoing products and codebases.",
      },
    ],
  },
  {
    title: "Working Together",
    questions: [
      {
        question: "Are you available for freelance projects?",
        answer:
          "I'm open to select freelance and collaborative opportunities that align with my skills and interests.",
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
                <h3 className="text-muted-foreground border-b py-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
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
