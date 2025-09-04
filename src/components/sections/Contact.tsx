"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Clock, CheckCircle } from "lucide-react";
import Form from "@/components/sections/Form";

type Props = { isStartPage?: boolean };

export default function Contact({ isStartPage = false }: Props) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget; // keep a stable ref
    setIsSubmitting(true);

    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast({ title: "Tack för din förfrågan!", description: "Vi hör av oss inom kort." });
        form.reset(); // safe now
      } else {
        const err = await res.text();
        console.error(err);
        toast({ title: "Något gick fel", description: "Försök igen eller maila oss direkt." });
      }
    } catch (err) {
      console.error(err);
      toast({ title: "Nätverksfel", description: "Kontrollera din uppkoppling och försök igen." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`${isStartPage ? "bg-gradient-subtle py-24" : "py-16"} sm:py-24`}>
      <div className={`${isStartPage ? "container mx-auto px-4 lg:px-8" : ""}`}>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Redo att <span className="text-accent">transformera</span> ert företag?
              </h2>
              <p className="text-lg text-muted-foreground">
                Kontakta oss för en kostnadsfri konsultation där vi analyserar era behov och rekommenderar rätt AI-strategi.
              </p>
            </div>

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
            </div>
          </div>

          <Form onSubmit={handleSubmit} submitting={isSubmitting} />
        </div>
      </div>
    </section>
  );
}
