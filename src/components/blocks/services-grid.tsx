import { Check, ArrowRight } from "lucide-react";

import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { Button } from "@/components/animate-ui/components/buttons/button";
import { DashedLine } from "@/components/dashed-line";
import { services } from "@/data/services";

export function ServicesGrid() {
  return (
    <section id="services" className="container mt-12 max-w-5xl pb-28 lg:pb-32">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
        {services.map((service) => (
          <Card
            key={service.title}
            className="group hover:border-primary/30 hover:shadow-primary/5 relative gap-0 overflow-hidden transition-all duration-300 hover:shadow-lg"
          >
            <CardHeader className="pb-2">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 group-hover:bg-primary/20 relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-colors">
                  <service.icon className="text-primary size-7" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <Badge variant="outline" className="bg-muted text-xs">
                      {service.highlight}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl leading-snug">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="mt-1 text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-2">
              <DashedLine />
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-muted-foreground flex items-start gap-2 text-sm"
                  >
                    <Check className="text-primary mt-0.5 size-4 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <DashedLine />
              <div className="flex items-center justify-end pt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs font-medium opacity-0 transition-all group-hover:gap-2 group-hover:opacity-100"
                  asChild
                >
                  <a href="/contact" className="flex items-center gap-1">
                    Inquire
                    <ArrowRight className="size-3" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
