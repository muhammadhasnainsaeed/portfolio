import { Background } from "@/components/background";
import { ServicesGrid } from "@/components/blocks/services-grid";
import { ServicesHero } from "@/components/blocks/services-hero";
import { ServicesProcess } from "@/components/blocks/services-process";

export default function ServicesPage() {
  return (
    <Background>
      <div className="py-28 lg:py-32 lg:pt-44">
        <ServicesHero />
        <ServicesGrid />
        <ServicesProcess />
      </div>
    </Background>
  );
}
