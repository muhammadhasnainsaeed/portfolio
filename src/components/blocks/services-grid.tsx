import { Check, ArrowRight } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Badge } from "../ui/badge";
import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/animate-ui/components/buttons/button";
import { services } from "@/data/services-hero";

export function ServicesGrid() {
  return (
    <section id="services" className="container max-w-5xl mt-12 pb-28 lg:pb-32">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        {services.map((service, index) => (
          <Card
            key={service.title}
            className="group relative overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <CardHeader className="pb-2">
              <div className="flex items-start gap-3">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="size-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-lg leading-snug">{service.title}</CardTitle>
                  <CardDescription className="mt-1 text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pt-2">
              <DashedLine />
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="size-4 shrink-0 text-primary mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <DashedLine />
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs">
                  {service.highlight}
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  className="group-hover:gap-2 transition-all text-xs font-medium opacity-0 group-hover:opacity-100"
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
