import { Mail, Phone, MapPin, Linkedin, Twitter, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              AI<span className="text-accent">Workshops</span>
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Praktisk implementation av AI-verktyg för moderna företag. 
              Vi hjälper er att transformera processer och öka konkurrenskraften 
              genom beprövade AI-lösningar.
            </p>
            <div className="flex space-x-4">
              {/* <a 
                href="https://linkedin.com/company/aiworkshops" 
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a> */}
              <a 
                href="https://twitter.com/aiworkshopsse" 
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              {/* <a 
                href="https://aiworkshops.se/blog" 
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent transition-colors"
                aria-label="Blogg"
              >
                <Globe className="h-5 w-5" />
              </a> */}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary-foreground">Våra Workshops</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#workshops" className="hover:text-accent transition-colors">
                  AI för Marknadsföring & Försäljning
                </a>
              </li>
              <li>
                <a href="#workshops" className="hover:text-accent transition-colors">
                  AI för Produktutveckling
                </a>
              </li>
              <li>
                <a href="#workshops" className="hover:text-accent transition-colors">
                  AI för Kundsupport
                </a>
              </li>
              <li>
                <a href="#workshops" className="hover:text-accent transition-colors">
                  AI för Administration & Analys
                </a>
              </li>
              <li>
                <a href="#workshops" className="hover:text-accent transition-colors">
                  AI-strategi för Ledningsgrupper
                </a>
              </li>
              <li>
                <a href="#workshops" className="hover:text-accent transition-colors">
                  Anpassade Workshops
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary-foreground">Snabblänkar</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#benefits" className="hover:text-accent transition-colors">
                  Fördelar & ROI
                </a>
              </li>
              {/* <li>
                <a href="#cases" className="hover:text-accent transition-colors">
                  Kundcase & Resultat
                </a>
              </li> */}
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Kostnadsfri konsultation
                </a>
              </li>
              {/* <li>
                <a href="/blog" className="hover:text-accent transition-colors">
                  AI-nyheter & Insikter
                </a>
              </li>
              <li>
                <a href="/om-oss" className="hover:text-accent transition-colors">
                  Om oss & Team
                </a>
              </li>
              <li>
                <a href="/karriar" className="hover:text-accent transition-colors">
                  Karriär
                </a>
              </li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary-foreground">Kontakt</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:hello@aiworkshops.se" className="hover:text-accent transition-colors">
                  info@aiworkshops.se
                </a>
              </div>
              {/* <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+4681234567" className="hover:text-accent transition-colors">
                  08-123 456 789
                </a>
              </div> */}
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <div>
                  Jönköping<br />
                  Sverige
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-primary-foreground/20">
              <p className="text-xs text-primary-foreground/60">
                Vardagar: 09:00 - 17:00<br />
                Helger: Stängt
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/60">
              © {currentYear} AI Workshops. Alla rättigheter förbehållna.
            </div>
            
            {/* <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/60">
              <a href="/integritetspolicy" className="hover:text-accent transition-colors">
                Integritetspolicy
              </a>
              <a href="/användarvillkor" className="hover:text-accent transition-colors">
                Användarvillkor
              </a>
              <a href="/cookies" className="hover:text-accent transition-colors">
                Cookies
              </a>
              <a href="/gdpr" className="hover:text-accent transition-colors">
                GDPR
              </a>
            </div> */}
          </div>
          
          {/* <div className="mt-4 pt-4 border-t border-primary-foreground/10">
            <p className="text-xs text-primary-foreground/40 text-center">
              Organisationsnummer: 556XXX-XXXX | Momsregistrerat | 
              Auktoriserad utbildningsanordnare enligt Skolverket
            </p>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;