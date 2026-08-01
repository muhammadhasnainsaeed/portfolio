import { ToolCase } from "lucide-react";

import { DashedLine } from "../dashed-line";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

import { skills } from "@/data/about";


function AboutSkills() {
  return (
    <section id="skills" className="mt-12 pb-28 lg:pb-32">
      <div className="container max-w-5xl">
        <div className="mx-auto text-center">
          <Badge
            variant={"default"}
            className="mb-2 text-xs font-semibold tracking-widest uppercase"
          >
            <ToolCase /> Skills
          </Badge>
          <h2 className="text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-3xl space-y-6 text-lg text-balance">
            Tools I use to turn ideas into scalable, reliable, and impactful
            digital experiences.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2">
          {skills.map((skill) => (
            <Card key={skill.category}>
              <CardContent className="space-y-4 px-6 py-4">
                <p className="text-lg font-medium text-balance uppercase">
                  {skill.category}
                </p>
                <DashedLine></DashedLine>
                <div className="flex flex-wrap gap-3">
                  {skill.list.map((l) => (
                    <Badge
                      key={l}
                      variant={"outline"}
                      className="bg-muted rounded-md text-[10px] font-semibold tracking-widest uppercase"
                    >
                      {l}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSkills;
