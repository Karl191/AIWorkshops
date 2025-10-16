'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Users, 
  Settings, 
  MessageCircle, 
  PieChart, 
  Lightbulb 
} from "lucide-react";

const workshops = [
  {
    title: "AI för Marknadsföring & Försäljning",
    description: "Automatisera era marknadsföringsprocesser och förbättra kundinteraktioner med AI-verktyg.",
    icon: TrendingUp,
    duration: "1 dag",
    topics: [
      "Automatiserad innehållsgenerering",
      "Prediktiv kundanalys",
      "Personaliserade kampanjer",
      "Lead scoring och segmentering"
    ],
    level: "Grundläggande"
  },
  {
    title: "AI för Produktutveckling",
    description: "Accelerera innovation och produktoptimering genom smart dataanalys och AI-insights.",
    icon: Lightbulb,
    duration: "1 dag",
    topics: [
      "Marknadsvalidering med AI",
      "Användarfeedback-analys",
      "Konkurrensbevaking",
      "Produktroadmap-optimering"
    ],
    level: "Medel"
  },
  {
    title: "AI för Kundsupport",
    description: "Förbättra kundnöjdheten och effektivisera support med intelligenta lösningar.",
    icon: MessageCircle,
    duration: "1 dag",
    topics: [
      "Chatbots och virtuella assistenter",
      "Automatisk ärendehantering",
      "Sentimentanalys",
      "Kunskapsdatabaser med AI"
    ],
    level: "Grundläggande"
  },
  {
    title: "AI för Administration & Analys",
    description: "Automatisera rutinuppgifter och få djupare insikter från era data.",
    icon: PieChart,
    duration: "1 dag",
    topics: [
      "Automatiserad rapportering",
      "Dokumenthantering",
      "Prediktiv analys",
      "Processoptimering"
    ],
    level: "Medel"
  },
  {
    title: "AI-strategi för Ledningsgrupper",
    description: "Utveckla en övergripande AI-strategi och förstå affärspotentialen.",
    icon: Users,
    duration: "1 dag",
    topics: [
      "AI-mognadsbedömning",
      "ROI-kalkylering",
      "Implementeringsstrategi",
      "Change management"
    ],
    level: "Strategisk"
  },
  {
    title: "Anpassad Workshop",
    description: "Skräddarsydda lösningar för era specifika behov och branschutmaningar.",
    icon: Settings,
    duration: "Flexibel",
    topics: [
      "Behovsanalys",
      "Branschspecifika verktyg",
      "Integrationer",
      "Långsiktig support"
    ],
    level: "Alla nivåer"
  }
];

const Workshops = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="workshops" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Våra <span className="text-accent">AI-Workshops</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Vårt löfte: Praktiska, hands-on workshops som ger era team konkreta färdigheter 
            att implementera AI-verktyg i vardagliga arbetsprocesser.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => {
            const Icon = workshop.icon;
            return (
              <Card 
                key={index} 
                className="relative group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-card hover:bg-card-hover"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-accent-muted rounded-lg group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <Icon className="h-6 w-6 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">
                        {workshop.duration}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {workshop.level}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl mt-4">{workshop.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {workshop.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-3 text-foreground">
                      Vad vi går igenom:
                    </h4>
                    <ul className="space-y-2">
                      {workshop.topics.map((topic, topicIndex) => (
                        <li 
                          key={topicIndex} 
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:border-accent group-hover:text-accent transition-colors"
                    onClick={scrollToContact}
                  >
                    Boka denna workshop
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-semibold mb-4">
              Inte säker på vilken workshop som passar bäst?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Vi erbjuder kostnadsfria konsultationer för att identifiera era specifika behov 
              och rekommendera den mest lämpliga workshopen för ert team.
            </p>
            <Button variant="cta" size="lg" onClick={scrollToContact}>
              Boka kostnadsfri konsultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;