import { Award, GraduationCap, Award as AwardIcon, BookOpen, Sparkles, Shield } from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { education, certifications } from "@/data/credentials";

export default function CredentialsPage() {
  return (
    <div className="container max-w-5xl py-28 lg:py-32 lg:pt-44">
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
              A strong foundation in computer science principles, algorithms, and software engineering
              principles built through rigorous academic training.
            </span>
            <span className="block">
              Four years of rigorous coursework, hands-on projects, and collaborative research laid the
              groundwork for building scalable, maintainable software systems.
            </span>
          </p>
        </div>

        <div className="relative">
          <DashedLine orientation="vertical" className="absolute inset-y-0 left-0 h-full lg:left-4" />
          <ol className="relative space-y-10 lg:space-y-12">
            {education.map((edu, index) => (
              <li key={edu.period} className="relative lg:pl-16">
                <span className="bg-muted-foreground ring-muted absolute -left-2.5 lg:-left-5 mt-2 flex size-5 items-center justify-center rounded-full ring-4 lg:size-6" />
                <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
                  {edu.period}
                </p>
                <Card className="mt-4 overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl lg:text-2xl">{edu.degree}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <GraduationCap className="size-4 shrink-0 text-muted-foreground/60" />
                      <span className="font-medium text-foreground">{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <AwardIcon className="size-4 shrink-0 text-muted-foreground/60" />
                      <span className="font-medium">{edu.details}</span>
                    </div>
                    <div className="pt-2 border-t flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-muted text-xs">
                        Computer Science
                      </Badge>
                      <Badge variant="outline" className="bg-muted text-xs">
                        Software Engineering
                      </Badge>
                      <Badge variant="outline" className="bg-muted text-xs">
                        Algorithms & Data Structures
                      </Badge>
                      <Badge variant="outline" className="bg-muted text-xs">
                        Database Systems
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
            <AwardIcon className="mr-1.5 size-3" />
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
          {certifications.map((cert, index) => (
            <Card
              key={cert.name}
              className="relative overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                    <AwardIcon className="size-5" />
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
                  {cert.skills.slice(0, 4).map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-muted/50 hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all text-[10px] font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                  {cert.skills.length > 4 && (
                    <Badge variant="outline" className="bg-muted/50 text-[10px] font-medium">
                      +{cert.skills.length - 4} more
                    </Badge>
                  )}
                </div>

                <div className="pt-2 border-t flex items-center justify-between">
                  <Badge variant="ghost" className="text-xs gap-1">
                    <Shield className="size-3" />
                    Verified
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs font-medium gap-1 h-auto px-2 py-1 group-hover:text-primary"
                    asChild
                  >
                    <a
                      href={`https://coursera.org/verify/${cert.credentialId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      Verify
                      <span className="size-3" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 lg:mt-16 text-center">
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Learning never stops. Always exploring new technologies, frameworks, and methodologies
            to build better products.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="outline" size="lg" asChild>
              <a href="https://coursera.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                View All Certifications
                <span className="size-4" />
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="/contact" className="flex items-center gap-2">
                Let's Collaborate
                <span className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats / Summary Section */}
      <section className="relative">
        <div className="relative flex items-center justify-center">
          <DashedLine className="w-full" />
          <span className="bg-muted text-muted-foreground absolute px-4 font-mono text-xs font-medium tracking-widest">
            SUMMARY
          </span>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="text-center p-6 lg:p-8 bg-muted/30 rounded-2xl border">
            <div className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {education.length}+
            </div>
            <div className="text-muted-foreground mt-2 text-sm font-medium uppercase tracking-wider">
              Degrees Earned
            </div>
          </div>
          <div className="text-center p-6 lg:p-8 bg-muted/30 rounded-2xl border">
            <div className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {certifications.length}+
            </div>
            <div className="text-muted-foreground mt-2 text-sm font-medium uppercase tracking-wider">
              Certifications Earned
            </div>
          </div>
          <div className="text-center p-6 lg:p-8 bg-muted/30 rounded-2xl border">
            <div className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {certifications.reduce((acc, c) => acc + c.skills.length, 0)}+
            </div>
            <div className="text-muted-foreground mt-2 text-sm font-medium uppercase tracking-wider">
              Skills Verified
            </div>
          </div>
          <div className="text-center p-6 lg:p-8 bg-muted/30 rounded-2xl border">
            <div className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {new Set(certifications.flatMap((c) => c.issuer.split("·")[0].trim())).size}+
            </div>
            <div className="text-muted-foreground mt-2 text-sm font-medium uppercase tracking-wider">
              Learning Platforms
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
