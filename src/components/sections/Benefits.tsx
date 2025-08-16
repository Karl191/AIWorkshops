import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Clock, 
  DollarSign, 
  TrendingUp, 
  Shield, 
  Users, 
  Zap,
  Target,
  Award
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Dramatisk tidsbesparing",
    description: "Minska tiden för repetitiva uppgifter med upp till 80%. Frigör värdefull tid för strategiskt arbete.",
    stat: "80%",
    statLabel: "Mindre tid"
  },
  {
    icon: DollarSign,
    title: "Mätbar kostnadsreduktion",
    description: "Sänk operationella kostnader genom automatisering och effektivare processer.",
    stat: "45%",
    statLabel: "Kostnadsminskning"
  },
  {
    icon: TrendingUp,
    title: "Förbättrad prestanda",
    description: "Öka kvaliteten och konsistensen i era leveranser med AI-stödd kvalitetskontroll.",
    stat: "3x",
    statLabel: "Snabbare resultat"
  },
  {
    icon: Target,
    title: "Bättre beslutsunderlag",
    description: "Fatta mer informerade beslut baserat på djup dataanalys och prediktiva modeller.",
    stat: "95%",
    statLabel: "Träffsäkerhet"
  },
  {
    icon: Users,
    title: "Stärkt konkurrenskraft",
    description: "Håll er före konkurrenterna genom att vara early adopters av AI-teknologi.",
    stat: "2x",
    statLabel: "Marknadsförsprång"
  },
  {
    icon: Zap,
    title: "Accelererad innovation",
    description: "Snabbare produktutveckling och förbättrad time-to-market för nya initiativ.",
    stat: "60%",
    statLabel: "Snabbare lansering"
  },
  {
    icon: Shield,
    title: "Minskad risk för fel",
    description: "Automatisering minskar mänskliga fel och förbättrar kvalitetssäkringen.",
    stat: "90%",
    statLabel: "Färre fel"
  },
  {
    icon: Award,
    title: "Skalbar tillväxt",
    description: "Hantera ökad arbetsbelastning utan proportionell ökning av personalstyrkan.",
    stat: "200%",
    statLabel: "Ökad kapacitet"
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Konkreta <span className="text-accent">fördelar</span> för ert företag
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Våra AI-workshops levererar mätbara resultat som direkt påverkar er 
            lönsamhet och konkurrenskraft. Här är vad våra kunder uppnår:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md bg-card"
              >
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto p-4 bg-accent-muted rounded-xl group-hover:bg-accent group-hover:text-accent-foreground transition-colors mb-4">
                    <Icon className="h-8 w-8 text-accent group-hover:text-accent-foreground" />
                  </div>
                  
                  {/* Stat */}
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-accent mb-1">
                      {benefit.stat}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {benefit.statLabel}
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg mb-2">{benefit.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="text-center pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;