import { Background } from "@/components/background";
import AboutExp from "@/components/blocks/about-exp";
import { AboutHero } from "@/components/blocks/about-hero";
import AboutSkills from "@/components/blocks/about-skills";

export default function AboutPage() {
  return (
    <Background>
      <div className="py-28 lg:py-32 lg:pt-44">
        <AboutHero />
        <AboutSkills />
        <AboutExp />
      </div>
    </Background>
  );
}
