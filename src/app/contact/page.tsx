import React from "react";

import { Metadata } from "next";

import { Background } from "@/components/background";
import Contact from "@/components/blocks/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Muhammad Hasnain Saeed for collaborations, inquiries, or networking opportunities.",
  keywords: [
    "Contact Muhammad Hasnain Saeed",
    "Software Engineer inquiry",
    "Hire Full-Stack Developer",
    "Collaborate with Hasnain Saeed",
  ],
};

const Page = () => {
  return (
    <Background>
      <Contact />
    </Background>
  );
};

export default Page;
