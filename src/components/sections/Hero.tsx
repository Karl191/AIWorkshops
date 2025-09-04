'use client'

import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Zap } from "lucide-react";
// import heroImage from "@/assets/ai-workshop-hero.jpg";
import heroImage from "@/assets/hero.png";
import Image from "next/image"

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWorkshops = () => {
    const element = document.getElementById('workshops');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-subtle pt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 pt-12 lg:pt-0">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient">AI-workshops {" "}</span>
                för företag och organisationer
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl">
Vi hjälper företag att omsätta AI från teori till praktik. I våra AI workshops får ert team träning i hur AI kan stärka marknadsföring, försäljning, produktutveckling och administration – med fokus på resultat som märks i verksamheten.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-accent-muted rounded-lg">
                  <Zap className="h-5 w-5 text-accent" />
                </div>
                <span className="font-medium">Snabbare processer</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-accent-muted rounded-lg">
                  <Brain className="h-5 w-5 text-accent" />
                </div>
                <span className="font-medium">Smartare beslut</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl"
                onClick={scrollToContact}
              >
                Boka kostnadsfri konsultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={scrollToWorkshops}
              >
                Läs mer om våra workshops
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Över 200+ företag har redan transformerat sina processer
              </p>
              <div className="flex flex-wrap gap-8 text-sm text-muted-foreground">
                <span>✓ Branschoberoende lösningar</span>
                <span>✓ Praktiska resultat från dag 1</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="">
              <Image
                src={heroImage}
                alt="Professionella AI-workshops för företag"
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground p-4 rounded-xl shadow-lg">
              <div className="text-sm font-semibold">Högre</div>
              <div className="text-xs">Effektivitet</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
              <div className="text-sm font-semibold">Mindre</div>
              <div className="text-xs">Tid per uppgift</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;