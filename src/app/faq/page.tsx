import React from "react";

import { Metadata } from "next";

import { Background } from "@/components/background";
import { FAQ } from "@/components/blocks/faq";
import { DashedLine } from "@/components/dashed-line";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about Muhammad Hasnain Saeed's services, process, and working style.",
  keywords: [
    "FAQ Hasnain Saeed",
    "Software Engineer services",
    "Developer process",
    "Frequently asked questions software development",
  ],
};

const Page = () => {
  return (
    <Background>
      <FAQ className="py-28 text-center lg:pt-44 lg:pb-32" headerTag="h1" />
      <DashedLine className="container mx-auto" />
    </Background>
  );
};

export default Page;
