import { Metadata } from "next";

import { Background } from "@/components/background";
import { ServicesCTA } from "@/components/blocks/services-cta";
import { ServicesGrid } from "@/components/blocks/services-grid";
import { ServicesHero } from "@/components/blocks/services-hero";
import { ServicesProcess } from "@/components/blocks/services-process";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Discover the professional software development and consulting services offered by Muhammad Hasnain Saeed.",
  keywords: [
    "Software development services",
    "Technical consulting",
    "Hire Hasnain Saeed",
    "Full-stack development solutions",
  ],
};

export default function ServicesPage() {
  return (
    <Background className="via-muted to-muted/80">
      <div className="py-28 lg:py-32 lg:pt-44">
        <ServicesHero />
        <ServicesGrid />
        <ServicesProcess />
        <ServicesCTA />
      </div>
    </Background>
  );
}
