import {
  Award,
  GraduationCap,
  BookOpen,
  Shield,
  Sparkles,
  Globe,
  ExternalLink,
  Star,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { education, certifications } from "@/data/credentials";
import { Background } from "@/components/background";

export default function CredentialsPage() {
  return (
    <Background>
    <div className="container max-w-5xl py-28 lg:py-32 lg:pt-44">
      {/* Page Header */}
      <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-24">
        <Badge variant="default" className="mb-4 text-xs font-semibold tracking-widest uppercase">
          <Award className="mr-1.5 size-3" />
          Credentials
        </Badge>
        <h1 className="text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
          Education &{" "}
          <span className="text-primary">Certifications</span>
        </h1>
        <p className="text-muted-foreground mt-6 max-w-2xl mx-auto space-y-4 text-lg text-balance leading-relaxed">
          <span className="block">
            A foundation built on rigorous computer science fundamentals, strengthened by continuous
            learning from industry leaders.
          </span>
          <span className="block">
            From university coursework to verified certifications by Google, Meta, AWS, and top
            universities — every credential represents hands-on projects and proven skills.
          </span>
        </p>
      </div>

      {/* Education Section */}
      <section id="education" className="mb-16 lg:mb-24">
        <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
          <Badge variant="default" className="mb-4 text-xs font-semibold tracking-widest uppercase">
            <GraduationCap className="mr-1.5 size-3" />
            Education
          </Badge>
          <h2 className="text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
            Academic Foundation
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto space-y-4 text-lg text-balance leading-relaxed">
            <span className="block">
              Four years of intensive computer science education covering algorithms, data structures,
              software engineering principles, and systems programming.
            </span>
            <span className="block">
              Coursework included distributed systems, database design, machine learning fundamentals,
              and full-stack application development.
            </span>
          </p>
        </div>

        <div className="relative">
          <DashedLine orientation="vertical" className="absolute inset-y-0 left-0 h-full lg:left-4" />
          <ol className="relative space-y-10 lg:space-y-12">
            {education.map((edu) => (
              <li key={edu.period} className="relative lg:pl-16">
                <span className="bg-muted-foreground ring-muted absolute -left-2.5 lg:-left-5 mt-2 flex size-5 items-center justify-center rounded-full ring-4 lg:size-6">
                  <GraduationCap className="size-3 text-muted-foreground/60" />
                </span>
                <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                  {edu.period}
                </p>
                <Card className="mt-4 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary/50 via-primary to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <GraduationCap className="size-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl lg:text-2xl">{edu.degree}</CardTitle>
                        <p className="text-muted-foreground text-sm font-medium">{edu.institution}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Award className="size-4 shrink-0 text-muted-foreground/60" />
                      <span className="font-medium text-foreground">{edu.details}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <BookOpen className="size-4 shrink-0 text-muted-foreground/60" />
                      <span className="font-medium">Core Focus Areas</span>
                    </div>
                    <div className="pt-2 border-t flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-muted text-xs">
                        Data Structures & Algorithms
                      </Badge>
                      <Badge variant="outline" className="bg-muted text-xs">
                        Software Engineering
                      </Badge>
                      <Badge variant="outline" className="bg-muted text-xs">
                        Database Systems
                      </Badge>
                      <Badge variant="outline" className="bg-muted text-xs">
                        Computer Networks
                      </Badge>
                      <Badge variant="outline" className="bg-muted text-xs">
                        Operating Systems
                      </Badge>
                      <Badge variant="outline" className="bg-muted text-xs">
                        Machine Learning
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Divider */}
      <div className="relative flex items-center justify-center my-16 lg:my-24">
        <DashedLine className="w-full" />
        <span className="bg-muted text-muted-foreground absolute px-4 font-mono text-xs font-medium tracking-widest">
          CERTIFICATIONS
        </span>
      </div>

      {/* Certifications Section */}
      <section id="certifications" className="mb-16 lg:mb-24">
        <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
          <Badge variant="default" className="mb-4 text-xs font-semibold tracking-widest uppercase">
            <Award className="mr-1.5 size-3" />
            Certifications
          </Badge>
          <h2 className="text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
            Continuous Learning & Credentials
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto space-y-4 text-lg text-balance leading-relaxed">
            <span className="block">
              Continuous learning is at the core of my growth as an engineer. These certifications
              represent dedicated deep-dives into specialized domains — from machine learning and
              cloud architecture to modern frontend development.
            </span>
            <span className="block">
              Each credential represents weeks of focused study, hands-on projects, and verified
              assessments from industry leaders like Google, Meta, AWS, and top universities.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <Card
              key={cert.name}
              className="relative overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary/50 via-primary to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-medium text-primary/80 uppercase tracking-wider mb-2 block">
                      {cert.issuer.split("·")[1]?.trim() || cert.issuer}
                    </span>
                    <CardTitle className="text-lg lg:text-xl line-clamp-2 group-hover:text-primary transition-colors">
                      {cert.name}
                    </CardTitle>
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Award className="size-5" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Sparkles className="size-3.5 shrink-0 text-muted-foreground/50" />
                  <span className="font-medium text-foreground">{cert.date}</span>
                  <span className="text-muted-foreground/50">•</span>
                  <span className="font-mono text-xs">{cert.credentialId}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.slice(0, 5).map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-muted/50 text-xs hover:bg-primary/10 hover:border-primary/20 hover:text-primary transition-all">
                      {skill}
                    </Badge>
                  ))}
                  {cert.skills.length > 5 && (
                    <Badge variant="outline" className="bg-muted/50 text-xs text-muted-foreground">
                      +{cert.skills.length - 5} more
                    </Badge>
                  )}
                </div>

                <div className="pt-2 border-t flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="size-3.5 text-green-500" />
                    <span>Verified Credential</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group-hover:gap-2 transition-all text-xs font-medium opacity-0 group-hover:opacity-100"
                    asChild
                  >
                    <a href={`https://coursera.org/verify/${cert.credentialId}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      Verify
                      <Globe className="size-3" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-2xl bg-muted/50 border">
            <div className="font-display text-4xl tracking-wide md:text-5xl text-primary font-bold">
              {certifications.length}+
            </div>
            <div className="text-muted-foreground text-sm mt-1">Certifications Earned</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-muted/50 border">
            <div className="font-display text-4xl tracking-wide md:text-5xl text-primary font-bold">
              {new Set(certifications.flatMap(c => c.skills)).size}+
            </div>
            <div className="text-muted-foreground text-sm mt-1">Unique Skills Verified</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-muted/50 border">
            <div className="font-display text-4xl tracking-wide md:text-5xl text-primary font-bold">
              {new Set(certifications.map(c => c.issuer.split("·")[0]?.trim())).size}+
            </div>
            <div className="text-muted-foreground text-sm mt-1">Top-Tier Providers</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-muted/50 border">
            <div className="font-display text-4xl tracking-wide md:text-5xl text-primary font-bold">
              2022-2024
            </div>
            <div className="text-muted-foreground text-sm mt-1">Continuous Learning</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden rounded-3xl border bg-linear-to-br from-primary/10 via-background to-primary/5 p-8 lg:p-12 text-center">
        <div className="relative z-10 max-w-2xl mx-auto">
          <Badge variant="default" className="mb-4 text-xs font-semibold tracking-widest uppercase">
            <Award className="mr-1.5 size-3" />
            Always Learning
          </Badge>
          <h3 className="text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl">
            Currently Exploring
          </h3>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto space-y-4 text-lg text-balance leading-relaxed">
            <span className="block">
              Actively pursuing advanced certifications in distributed systems, Kubernetes
              administration, and LLM application development.
            </span>
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <a href="/contact" className="flex items-center gap-2">
                Let's Collaborate
                <ExternalLink className="size-4" />
              </a>
            </Button>
            <Button variant="outline" asChild size="lg">
              <a href="https://github.com/muhammadhasnainsaeed" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Star className="size-4" />
                View GitHub
              </a>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-20" />
      </section>
      </div>
      </Background>
  );
}
