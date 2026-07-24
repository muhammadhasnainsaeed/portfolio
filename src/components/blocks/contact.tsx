import React from "react";

import Link from "next/link";

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Twitch,
  Twitter,
} from "lucide-react";

import { ContactForm } from "@/components/blocks/contact-form";
import { DashedLine } from "@/components/dashed-line";
import Image from "next/image";

const socialIcons = [
  {
    name: "facebook",
    link: "https://www.facebook.com/muhammadhassnainsaeed",
    icon: "/logos/contact/facebook-mono.svg",
  },
  {
    name: "instgram",
    link: "https://www.instagram.com/m_hasnain_saeed/",
    icon: "/logos/contact/instagram-mono.svg",
  },
  {
    name: "twitter",
    link: "https://x.com/m_hasnain_saeed",
    icon: "/logos/contact/x-mono.svg",
  },
  {
    name: "twitch",
    link: "https://www.twitch.tv/mhasnainsaeed",
    icon: "/logos/contact/twitch-mono.svg",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/muhammadhasnainsaeed/",
    icon: "/logos/contact/linkedin-mono.svg",
  },
  {
    name: "github",
    link: "https://github.com/muhammadhasnainsaeed",
    icon: "/logos/contact/github-mono.svg",
  },
  {
    name: "devdotto",
    link: "https://dev.to/muhammadhasnainsaeed",
    icon: "/logos/contact/devdotto-mono.svg",
  },
  {
    name: "fiverr",
    link: "https://www.fiverr.com/hasnainsaeed_22",
    icon: "/logos/contact/fiverr-mono.svg",
  },
  // {name: "upwork", link: "", icon: "/logos/contact/upwork-mono.svg"},
];
const contactInfo = [
  // {
  //   title: "Corporate office",
  //   content: (
  //     <p className="text-muted-foreground mt-3">
  //       1 Carlsberg Close
  //       <br />
  //       1260 Hillview, Australia
  //     </p>
  //   ),
  // },
  {
    title: "Email",
    content: (
      <div className="mt-3">
        <div>
          <Link
            href="mailto:ihasnain4@gmail.com"
            className="text-muted-foreground hover:text-foreground inline-flex gap-2"
          >
            <Mail className="size-5" />
            ihasnain4@gmail.com
          </Link>
        </div>
      </div>
    ),
  },
  {
    title: "Follow us",
    content: (
      <div className="mt-3 flex flex-wrap gap-6 lg:gap-10">
        {socialIcons.map((social) => (
          <Link
            key={social.name}
            href={social.link}
            className="opacity-65 hover:opacity-100"
          >
            <Image
              src={social.icon}
              alt={social.name}
              width={36}
              height={36}
              className="size-9 dark:invert"
            />
          </Link>
        ))}
      </div>
    ),
  },
];

export default function Contact() {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container max-w-2xl">
        <h1 className="text-center text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          Contact us
        </h1>
        <p className="text-muted-foreground mt-4 text-center leading-snug font-medium lg:mx-auto">
          Have a question or want to work with us? Send us a message and we'll
          get back to you soon.
        </p>

        <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
          {contactInfo.map((info, index) => (
            <div key={index}>
              <h2 className="font-medium">{info.title}</h2>
              {info.content}
            </div>
          ))}
        </div>

        <DashedLine className="my-12" />

        {/* Inquiry Form */}
        <div className="mx-auto">
          <h2 className="mb-4 text-lg font-semibold">Get in Touch</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
