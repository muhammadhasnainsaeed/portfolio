import React from "react";

import { Background } from "@/components/background";
import { FAQ } from "@/components/blocks/faq";
import { DashedLine } from "@/components/dashed-line";

const Page = () => {
  return (
    <Background>
      <FAQ className="py-28 text-center lg:pt-44 lg:pb-32" headerTag="h1" />
      <DashedLine className="container mx-auto" />
    </Background>
  );
};

export default Page;
