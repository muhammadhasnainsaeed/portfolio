import { Background } from "@/components/background";
import { ServicesHero } from "@/components/blocks/services-hero";
import { ServicesGrid } from "@/components/blocks/services-grid";
import { ServicesProcess } from "@/components/blocks/services-process";
import { ServicesCTA } from "@/components/blocks/services-cta";

export default function ServicesPage() {
  return (
    <Background>
      <div className="py-28 lg:py-32 lg:pt-44">
        <ServicesHero />
        <ServicesGrid />
        <ServicesProcess />
        <ServicesCTA />
      </div>
    </Background>
  );
}
