import Image from "next/image";

import { Check, ArrowRight } from "lucide-react";

import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

import { Button } from "@/components/animate-ui/components/buttons/button";
import { DashedLine } from "@/components/dashed-line";
import { services } from "@/data/services";

export function ServicesGrid() {
  return (
    <section id="services" className="container max-w-5xl mt-12 pb-28 lg:pb-32">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        {services.map((service) => (
          <Card
            key={service.title}
            className="group relative overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <CardHeader className="pb-2">
              <div className="flex items-start gap-4">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="size-7 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="bg-muted text-xs">
                      {service.highlight}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl leading-snug">{service.title}</CardTitle>
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
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="size-4 shrink-0 text-primary mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <DashedLine />
              <div className="flex items-center justify-between pt-2">
                <div className="flex -space-x-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/50 border-2 border-background">
                    <Image
                      src={service.illustration}
                      alt={service.title}
                      width={24}
                      height={24}
                      className="object-contain opacity-70 dark:invert"
                    />
                  </div>
                </div>
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
