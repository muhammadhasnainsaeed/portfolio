import Image from "next/image";
import Link from "next/link";

import {
  Award,
  Sparkles,
  Globe,
  ExternalLink,
  Star,
  Verified,
} from "lucide-react";
import { Metadata } from "next";

import { Background } from "@/components/background";
import { DashedLine } from "@/components/dashed-line";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { certifications } from "@/data/credentials";

export const metadata: Metadata = {
  title: "Credentials",
  description:
    "Explore the educational background and verified professional certifications of Muhammad Hasnain Saeed, showcasing expertise in software engineering and cloud technologies.",
  keywords: [
    "Hasnain Saeed credentials",
    "Software Engineering Education",
    "Professional IT Certifications",
    "Verified Developer Skills",
    "Computer Science background",
  ],
};

type CertificateCardType = {
  name: string;
  issuer: string;
  logo: string;
  date: string;
  credentialId: string;
  skills: string[];
  link: string;
};

const DegreeCard = () => {
  return (
    <Card className="gap-1 rounded">
      <CardContent className="text-primary text-xs font-bold tracking-widest uppercase">
        2019 — 2023
      </CardContent>
      <CardHeader>
        <CardAction>
          <Verified className="stroke-accent dark:stroke-accent-secondary dark:fill-foreground size-8 fill-blue-600 stroke-2" />
        </CardAction>
        <CardTitle className="text-xl font-bold">
          Bachelor of Science in Computer Science
        </CardTitle>
        <CardDescription>
          Federal Urdu University of Arts, Science & Technology, Karachi
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/*<div className="mt-2 border-t pt-2">*/}
        <p className="mx-0.5 text-xs leading-relaxed">GPA: 3.4</p>
        {/*</div>*/}
      </CardContent>

      {/*<DashedLine className="text-muted-foreground my-2" />*/}
      <CardFooter className="flex flex-wrap gap-2 border-t border-dashed pt-3!">
        <Badge className="rounded text-[10px]" variant="outline">
          Data Structures & Algorithms
        </Badge>
        <Badge className="rounded text-[10px]" variant="outline">
          Software Engineering
        </Badge>
        <Badge className="rounded text-[10px]" variant="outline">
          Database Systems
        </Badge>
        <Badge className="rounded text-[10px]" variant="outline">
          Computer Networks
        </Badge>
        <Badge className="rounded text-[10px]" variant="outline">
          Operating Systems
        </Badge>
        <Badge className="rounded text-[10px]" variant="outline">
          Machine Learning
        </Badge>
      </CardFooter>
    </Card>
  );
};

const CertificateCard = ({ cert }: { cert: CertificateCardType }) => {
  return (
    <Card
      key={cert.name}
      className="hover:shadow-primary-foreground bg-primary/2 group relative overflow-hidden transition-all duration-300 hover:shadow-xl"
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <span className="text-primary text-xs font-bold tracking-widest uppercase">
              {cert.issuer.split("·")[1]?.trim() || cert.issuer}
            </span>
            <CardTitle className="mt-2">{cert.name}</CardTitle>
          </div>
          <Image
            src={cert.logo}
            width={36}
            height={36}
            className="h-9 w-9 group-hover:scale-105"
            alt={cert.issuer}
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          <Sparkles className="text-muted-foreground/50 size-3.5 shrink-0" />
          <span className="text-foreground font-medium">{cert.date}</span>
          <span className="text-muted-foreground/50">•</span>
          <span className="truncate font-mono text-xs">
            {cert.credentialId}
          </span>
        </div>

        <div className="flex flex-wrap gap-1">
          {cert.skills.slice(0, 5).map((skill) => (
            <Badge key={skill} variant="outline">
              {skill}
            </Badge>
          ))}
          {cert.skills.length > 5 && (
            <Badge
              variant="outline"
              className="bg-muted/50 text-muted-foreground"
            >
              +{cert.skills.length - 5} more
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="h-full items-end">
        <div className="flex w-full items-center justify-between border-t pt-2">
          <div className="text-muted-foreground flex items-center gap-1 text-xs">
            <Verified className="stroke-accent fill-muted-foreground size-5 stroke-2" />
            <span>Verified credential</span>
          </div>
          <CardAction>
            <a
              href={cert.link}
              target="_blank"
              aria-label="certificate link"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "default",
                size: "icon-sm",
              })}
            >
              <Globe className="size-3.5" />
            </a>
          </CardAction>
        </div>
      </CardFooter>
    </Card>
  );
};

export default function CredentialsPage() {
  return (
    <Background className="via-muted to-muted/80">
      <div className="container max-w-5xl py-32 lg:pt-44">
        {/* Page Header */}
        <div className="mb-16 flex flex-col justify-center gap-8 md:flex-row md:gap-14 lg:mb-24 lg:gap-20">
          <div className="flex-1">
            <Badge
              variant="default"
              className="mb-2 text-xs font-semibold tracking-widest uppercase"
            >
              <Award className="mr-1.5 size-3" />
              Credentials
            </Badge>
            <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl">
              What I'm Learning Now
            </h1>
            <p className="text-muted-foreground text-1xl mt-5 max-w-xl md:text-2xl">
              <span className="block">
                Core computer science fundamentals, strengthened by
                certifications from Meta, IBM, and other industry platforms.
              </span>
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
              <Link
                href="/projects"
                className={buttonVariants({
                  variant: "default",
                  size: "default",
                  className: "flex! items-center gap-2",
                })}
              >
                Let's Collaborate
                <ExternalLink className="size-4" />
              </Link>
              <a
                href="https://github.com/muhammadhasnainsaeed"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  variant: "secondary",
                  size: "default",
                  className: "flex! items-center gap-2",
                })}
              >
                <Star className="size-4" />
                View GitHub
              </a>
            </div>
          </div>
          <div className="lg:min-w-80">
            <Image
              src="/credentials/cert-badge.svg"
              width={320}
              height={320}
              alt="Certication badge"
            />
          </div>
        </div>

        {/* Education Section */}
        <section id="education" className="mb-28 lg:mb-32">
          <div className="mx-auto mt-10 grid items-center gap-3 md:mt-24 md:grid-cols-2 md:gap-0">
            <div>
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Academic foundation
              </h2>
              <p className="text-muted-foreground mt-5 max-w-md leading-snug">
                Four years of computer science education covering algorithms,
                data structures, software engineering principles, and database
                systems. The foundation I've continued building on through
                independent projects and industry certifications.
              </p>
            </div>
            {/* Education Certificate Template */}
            <div className="flex-1">
              <DegreeCard />
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="relative my-10 flex items-center justify-center lg:my-24">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            CERTIFICATIONS
          </span>
        </div>

        {/* Certifications Section */}
        <section id="certifications" className="mb-16 lg:mb-24">
          <h2 className="text-center text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
            From continuous learning to proven, verified skills.
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
            {certifications.map((cert) => (
              <CertificateCard cert={cert} key={cert.credentialId} />
            ))}
          </div>
        </section>
      </div>
    </Background>
  );
}
