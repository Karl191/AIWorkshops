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
import Form from "@/components/sections/Form";

const Contact = ({ 
  isStartPage = false
}) => {
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
    <section id="contact" className={`${isStartPage ? "bg-gradient-subtle py-24" : "py-16"} sm:py-24`}>
      <div className={`${isStartPage ? "container mx-auto px-4 lg:px-8" : ""}`}>
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
          <Form onSubmit={handleSubmit} className="space-y-6" />
        </div>
      </div>
    </section>
  );
};

export default Contact;