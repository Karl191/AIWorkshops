import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Building2, Users, TrendingUp } from "lucide-react";

const cases = [
  {
    company: "TechConsult AB",
    industry: "IT-konsultbolag",
    size: "50 anställda",
    challenge: "Manuell rapportering och projekthantering tog 30% av konsulternas tid",
    solution: "AI för Administration & Analys workshop + anpassade automatiseringsverktyg",
    results: [
      "75% minskning av administrativ tid",
      "300% snabbare projektrapporter",
      "2.5M SEK ökad fakturerbar tid per år"
    ],
    quote: "AI-workshopen transformerade vårt sätt att arbeta. Vi har gått från att spendera dagar på rapporter till att generera dem på minuter.",
    person: "Anna Lindberg, VD"
  },
  {
    company: "Nordic Sales Group",
    industry: "B2B-försäljning",
    size: "120 anställda",
    challenge: "Låg konvertering och svårighet att identifiera kvalificerade leads",
    solution: "AI för Marknadsföring & Försäljning + prediktiv lead scoring",
    results: [
      "40% högre konverteringsgrad",
      "60% mer kvalificerade leads",
      "18M SEK ökad försäljning första året"
    ],
    quote: "Våra säljare fokuserar nu på de leads som verkligen har potential. Resultatet talar för sig självt.",
    person: "Marcus Eriksson, Försäljningschef"
  },
  {
    company: "HealthCare Support",
    industry: "Vårdservice",
    size: "80 anställda",
    challenge: "Överbelastad kundsupport och långa väntetider för patienter",
    solution: "AI för Kundsupport workshop + intelligenta chatbots",
    results: [
      "85% snabbare första respons",
      "70% minskning av supportärenden",
      "95% kundnöjdhet (upp från 78%)"
    ],
    quote: "Vi kan nu hjälpa våra patienter 24/7 medan vårt team fokuserar på komplexa ärenden som kräver mänsklig touch.",
    person: "Dr. Elisabeth Holm, Verksamhetschef"
  }
];

const Cases = () => {
  return (
    <section id="cases" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Framgångs<span className="text-accent">historier</span> från våra kunder
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Se hur företag inom olika branscher har transformerat sina verksamheter 
            och uppnått konkreta resultat med våra AI-workshops.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <Card 
              key={index} 
              className="relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-card"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="space-y-1">
                    <CardTitle className="text-xl">{caseStudy.company}</CardTitle>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline" className="text-xs">
                        {caseStudy.industry}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {caseStudy.size}
                      </Badge>
                    </div>
                  </div>
                  <Building2 className="h-8 w-8 text-accent" />
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-foreground">Utmaning:</h4>
                    <p className="text-sm text-muted-foreground">{caseStudy.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-foreground">Lösning:</h4>
                    <p className="text-sm text-muted-foreground">{caseStudy.solution}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-sm mb-3 text-foreground flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-accent" />
                    Resultat:
                  </h4>
                  <ul className="space-y-2">
                    {caseStudy.results.map((result, resultIndex) => (
                      <li 
                        key={resultIndex} 
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-start gap-3">
                    <Quote className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <blockquote className="text-sm text-muted-foreground italic mb-2">
                        "{caseStudy.quote}"
                      </blockquote>
                      <cite className="text-xs font-medium text-foreground">
                        {caseStudy.person}
                      </cite>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Overview */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">200+</div>
            <div className="text-muted-foreground">Genomförda workshops</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">95%</div>
            <div className="text-muted-foreground">Kundnöjdhet</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">400%</div>
            <div className="text-muted-foreground">Genomsnittlig ROI</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;