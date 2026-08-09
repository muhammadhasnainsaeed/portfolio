import { Metadata } from "next";

import { Background } from "@/components/background";
import AboutExp from "@/components/blocks/about-exp";
import { AboutHero } from "@/components/blocks/about-hero";
import AboutSkills from "@/components/blocks/about-skills";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover the professional journey, software engineering philosophy, and technical expertise of Muhammad Hasnain Saeed, a dedicated Full-Stack Developer.",
  keywords: [
    "Muhammad Hasnain Saeed",
    "About Hasnain Saeed",
    "Software Engineer Profile",
    "Full-Stack Developer Biography",
    "Web Development Philosophy",
    "Engineering Experience",
    "Expertise in Modern Web Technologies",
  ],
};

export default function AboutPage() {
  return (
    <Background className="via-muted to-muted/80">
      <div className="py-28 lg:py-32 lg:pt-44">
        <AboutHero />
        <AboutSkills />
        <AboutExp />
      </div>
    </Background>
  );
}
