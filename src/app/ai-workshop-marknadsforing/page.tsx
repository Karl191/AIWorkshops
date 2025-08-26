import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Megaphone,
  Users,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Quote,
  ChevronRight,
} from "lucide-react";
import Form from "@/components/sections/Form";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "AI workshop för marknadsföring | AI Workshops",
  description:
    "Lär ert team använda AI i marknadsföring. Vår AI workshop för marknadsföring visar hur AI kan effektivisera innehåll, kampanjer och analys.",
  alternates: { canonical: "https://aiworkshops.se/ai-workshop-marknadsforing" },
  openGraph: {
    title: "AI workshop för marknadsföring | AI Workshops",
    description:
      "Upptäck hur AI kan effektivisera er marknadsföring. Workshop för företag som vill ligga steget före.",
    url: "/ai-workshop-marknadsforing",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="mb-8 text-sm text-muted-foreground">
          <Link href="/" className="hover:underline">Hem</Link>
          <span className="mx-2">/</span>
          <span>AI workshop för marknadsföring</span>
        </div>

        <Card className="border-0 shadow-lg bg-card mb-12">
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <Badge variant="secondary" className="mb-3">Workshop</Badge>
                <CardTitle className="text-3xl lg:text-4xl">
                  AI workshop för <span className="text-accent">marknadsföring</span>
                </CardTitle>
                <p className="mt-3 text-lg text-muted-foreground max-w-3xl">
                  Lär ert team använda AI för att skapa innehåll snabbare, optimera kampanjer
                  och fatta beslut på data – med resultat som märks i er marknadsföring.
                </p>
              </div>
              <Megaphone className="h-10 w-10 text-accent hidden md:block" />
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="ml-auto flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                4.8/5 från deltagare
              </Badge>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8" id="innehall">
          <Card className="border-0 shadow-lg bg-card lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl">Vad ni lär er</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Skapa relevant innehåll 3–5x snabbare med AI-stöd",
                  "Planera och optimera kampanjer med hjälp av data",
                  "Segmentera målgrupper och förbättra annonsbriefs",
                  "Bygga prompts och kvalitetsgranska AI-output",
                  "Automatisera återkommande uppgifter (t.ex. UTM, sammanställningar)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 text-accent flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card">
            <CardHeader>
              <CardTitle className="text-xl">Passar för</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <div className="flex items-center gap-2 mb-3">
                <Users className="h-5 w-5 text-accent" />
                <span>Marknadsteam, content creators, social managers</span>
              </div>
              <p>
                För företag som vill skala innehållsproduktion, stärka varumärket
                och fatta snabbare beslut baserat på data – utan att tumma på kvalitet.
              </p>
              <div className="mt-6">
                <Badge variant="secondary">Nivå: Grund–Medel</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <Card className="border-0 shadow-lg bg-card">
            <CardHeader>
              <CardTitle className="text-xl">Upplägg & agenda</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <ol className="space-y-3">
                <li className="flex gap-2">
                  <span className="text-accent font-semibold">1.</span>
                  AI i marknadsföring: möjligheter och begränsningar
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-semibold">2.</span>
                  Prompts som ger kvalitet: ramverk och mallar
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-semibold">3.</span>
                  Produktion: annonser, inlägg, nyhetsbrev, landningssidor
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-semibold">4.</span>
                  Analys & insikter: målgrupper, budskap, A/B-idéer
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-semibold">5.</span>
                  Automatisering och nästa steg
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card">
            <CardHeader>
              <CardTitle className="text-xl">Verktyg vi kan använda</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-accent" />
                ChatGPT / Claude / Gemini (idé → copy → QA)
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-accent" />
                Google Analytics / Search Console (insikter)
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-accent" />
                Sheets/Make/Zapier (automatisering)
              </div>
              <p className="text-xs text-muted-foreground/80">
                Vi anpassar verktyg efter era policies och stack.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card">
            <CardHeader>
              <CardTitle className="text-xl">Förväntade resultat</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-accent" />
                2–4x snabbare innehållsproduktion
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-accent" />
                Bättre träffsäkerhet i budskap och målgrupper
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-accent" />
                Tydlig plan för fortsatt AI-arbete i teamet
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-0 shadow-lg bg-card mt-12">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Quote className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <p className="italic text-muted-foreground">
                  “Vi halverade produktionstiden för kampanjmaterial och ökade
                  konverteringen – workshopen gav oss struktur och fart.”
                </p>
                <p className="text-sm font-medium mt-2">Marknadschef, B2B SaaS</p>
              </div>
            </div>
          </CardContent>
        </Card>

            <Contact />

      </div>
    </main>
  );
}
