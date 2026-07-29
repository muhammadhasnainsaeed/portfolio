// app/credentials/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DashedLine } from "@/components/dashed-line";

export default function CredentialsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Education */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <Card>
          <CardHeader>
            <CardTitle>Bachelor of Science in Computer Science</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Federal University · 2019 — 2023</p>
            <p className="text-sm mt-1">GPA: 3.4</p>
          </CardContent>
        </Card>
      </section>

      <DashedLine orientation="horizontal" className="my-10" />

      {/* Certifications */}
      {/*<section>
        <h2 className="text-2xl font-bold mb-6">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <Card key={cert.name}>
              <CardHeader>
                <CardTitle className="text-base">{cert.name}</CardTitle>
                <Badge variant="secondary" className="w-fit">{cert.issuer}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{cert.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>*/}
    </div>
  );
}
