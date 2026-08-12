import { ToolCase } from "lucide-react";

import { DashedLine } from "../dashed-line";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

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

        <div className="mt-8 columns-1 gap-2 md:mt-12 md:columns-3 landscape:columns-2 md:landscape:columns-3">
          {skills.map((skill) => (
            <div key={skill.category} className="mb-2 inline-block w-full">
              <Card className="gap-0 p-4 px-0">
                <CardHeader className="px-4">
                  <CardTitle className="uppercase">{skill.category}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 py-0!">
                  <DashedLine className="my-3" />
                  <CardDescription>
                    {skill.list.map((l) => (
                      <Badge
                        key={l}
                        variant={"outline"}
                        className="bg-muted m-1 rounded-md text-[10px] font-semibold tracking-widest uppercase"
                      >
                        {l}
                      </Badge>
                    ))}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSkills;
