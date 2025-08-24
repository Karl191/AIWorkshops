"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    contactPerson: '',
    email: '',
    phone: '',
    workshop: '',
    employees: '',
    description: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Tack för din förfrågan!",
      description: "Vi kommer att kontakta dig inom 24 timmar för att diskutera era behov.",
    });

    setFormData({
      company: '',
      contactPerson: '',
      email: '',
      phone: '',
      workshop: '',
      employees: '',
      description: ''
    });
    
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Redo att <span className="text-accent">transformera</span> ert företag?
              </h2>
              <p className="text-lg text-muted-foreground">
                Kontakta oss för en kostnadsfri konsultation där vi analyserar era 
                behov och rekommenderar den mest lämpliga AI-strategin för ert företag.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent-muted rounded-lg">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold">E-post</div>
                  <div className="text-muted-foreground">info@aiworkshops.se</div>
                </div>
              </div>

              {/* <div className="flex items-center gap-4">
                <div className="p-3 bg-accent-muted rounded-lg">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold">Telefon</div>
                  <div className="text-muted-foreground">08-123 456 789</div>
                </div>
              </div> */}

              {/* <div className="flex items-center gap-4">
                <div className="p-3 bg-accent-muted rounded-lg">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold">Besöksadress</div>
                  <div className="text-muted-foreground">
                    Stureplan 4<br />
                    114 35 Stockholm
                  </div>
                </div>
              </div> */}

              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent-muted rounded-lg">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold">Öppettider</div>
                  <div className="text-muted-foreground">
                    Måndag - Fredag: 09:00 - 17:00<br />
                    Helger: Stängt
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                Våra garantier
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  Kostnadsfri första konsultation (värde: 5 000 SEK)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  Svar inom 24 timmar på alla förfrågningar
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  Nöjd-kund-garanti eller pengarna tillbaka
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  3 månaders gratis support efter workshop
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle>Begär offert</CardTitle>
              <CardDescription>
                Fyll i formuläret så kontaktar vi dig för att diskutera era behov och utforma ett skräddarsytt förslag.
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Företag *</Label>
                    <Input
                      id="company"
                      placeholder="Era företagsnamn"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contactPerson">Kontaktperson *</Label>
                    <Input
                      id="contactPerson"
                      placeholder="Förnamn Efternamn"
                      value={formData.contactPerson}
                      onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-post *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="er.email@foretag.se"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="070-123 45 67"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="workshop">Intresserad workshop</Label>
                    <Select value={formData.workshop} onValueChange={(value) => handleInputChange('workshop', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Välj workshop" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="marketing">AI för Marknadsföring & Försäljning</SelectItem>
                        <SelectItem value="product">AI för Produktutveckling</SelectItem>
                        <SelectItem value="support">AI för Kundsupport</SelectItem>
                        <SelectItem value="admin">AI för Administration & Analys</SelectItem>
                        <SelectItem value="strategy">AI-strategi för Ledningsgrupper</SelectItem>
                        <SelectItem value="custom">Anpassad Workshop</SelectItem>
                        <SelectItem value="consultation">Kostnadsfri konsultation först</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="employees">Antal anställda</Label>
                    <Select value={formData.employees} onValueChange={(value) => handleInputChange('employees', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Företagsstorlek" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 anställda</SelectItem>
                        <SelectItem value="11-50">11-50 anställda</SelectItem>
                        <SelectItem value="51-200">51-200 anställda</SelectItem>
                        <SelectItem value="201-500">201-500 anställda</SelectItem>
                        <SelectItem value="500+">500+ anställda</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Beskriv era behov och utmaningar</Label>
                  <Textarea
                    id="description"
                    placeholder="Berätta kort om vilka processer ni vill förbättra, aktuella utmaningar och vad ni hoppas uppnå med AI..."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Skickar..."
                  ) : (
                    <>
                      Skicka förfrågan
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Genom att skicka detta formulär godkänner ni att vi kontaktar er angående era förfrågan. 
                  Vi respekterar er integritet och delar aldrig era uppgifter med tredje part.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;