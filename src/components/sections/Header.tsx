'use client'

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-primary">
            AI<span className="text-accent">Workshops</span>
            <span className="sr-only">Home</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Hem
            </button>
            <button
              onClick={() => scrollToSection('workshops')}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Workshops
            </button>
            {/*<button*/}
            {/*  onClick={() => scrollToSection('benefits')}*/}
            {/*  className="text-sm font-medium text-foreground hover:text-accent transition-colors"*/}
            {/*>*/}
            {/*  Fördelar*/}
            {/*</button>*/}
            {/*<button*/}
            {/*  onClick={() => scrollToSection('cases')}*/}
            {/*  className="text-sm font-medium text-foreground hover:text-accent transition-colors"*/}
            {/*>*/}
            {/*  Case*/}
            {/*</button>*/}
            <Button
              onClick={() => scrollToSection('contact')}
              variant="cta"
              size="sm"
            >
              Kontakt
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                Hem
              </button>
              <button
                onClick={() => scrollToSection('workshops')}
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                Workshops
              </button>
              <button
                onClick={() => scrollToSection('benefits')}
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                Fördelar
              </button>
              <button
                onClick={() => scrollToSection('cases')}
                className="text-left text-foreground hover:text-accent transition-colors"
              >
                Case
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="cta"
                size="sm"
                className="w-fit"
              >
                Kontakt
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;