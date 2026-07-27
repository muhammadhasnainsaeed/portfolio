import { Background } from "@/components/background";
import { FAQ } from "@/components/blocks/faq";
import { Features } from "@/components/blocks/features";
import { Hero } from "@/components/blocks/hero";
import { Logos } from "@/components/blocks/logos";
import { ResourceAllocation } from "@/components/blocks/resource-allocation";
import SelectedProject from "@/components/blocks/selected-project";

export default function Home() {
  return (
    <>
      <Background className="via-muted to-muted/80">
        <Hero />
        <Logos />
        <SelectedProject />
        <Features />
        <ResourceAllocation />
      </Background>
      {/*<Testimonials />*/}
      <Background variant="bottom">
        {/*<Pricing />*/}
        <FAQ />
      </Background>
    </>
  );
}
