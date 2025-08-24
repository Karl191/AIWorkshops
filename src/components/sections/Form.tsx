"use client";

import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "@/components/ui/sonner";

export default function QuoteRequestForm() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // TODO: send `data` to your API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast("Tack för din förfrågan!", {
    description: "Vi kontaktar dig så snart som möjligt för att diskutera era behov.",
    });

    setSubmitting(false);
    (e.target as HTMLFormElement).reset(); // reset form
  }

  return (
    <section className="shadow-xl border-0 mx-auto max-w-4xl rounded-2xl bg-white p-6 ring-1 ring-black/5 md:p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
        Begär offert
      </h2>
      <p className="mt-1 text-sm text-zinc-600">
        Fyll i formuläret så kontaktar vi dig för att diskutera era behov och
        utforma ett skräddarsytt förslag.
      </p>

      <form onSubmit={onSubmit} className="mt-6 space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium text-zinc-800">
              Företag <span className="text-orange-600">*</span>
            </label>
            <input
              id="company"
              name="company"
              required
              placeholder="Era företagsnamn"
              className="block w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 text-sm shadow-sm outline-none ring-0 placeholder:text-zinc-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="contact" className="text-sm font-medium text-zinc-800">
              Kontaktperson <span className="text-orange-600">*</span>
            </label>
            <input
              id="contact"
              name="contact"
              required
              placeholder="Förnamn Efternamn"
              className="block w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 text-sm shadow-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-zinc-800">
              E-post <span className="text-orange-600">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="er.email@foretag.se"
              className="block w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 text-sm shadow-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-zinc-800">
              Telefon
            </label>
            <input
              id="phone"
              name="phone"
              placeholder="070-123 45 67"
              className="block w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 text-sm shadow-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="workshop" className="text-sm font-medium text-zinc-800">
              Intresserad workshop
            </label>
            <div className="relative">
              <select
                id="workshop"
                name="workshop"
                defaultValue=""
                className="block w-full appearance-none rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 pr-10 text-sm shadow-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
              >
                <option value="" disabled>
                  Välj workshop
                </option>
                <option value="marketing">AI i marknadsföring</option>
                <option value="sales">AI i försäljning</option>
                <option value="product">AI i produktutveckling</option>
                <option value="admin">AI i administration</option>
              </select>
              <ChevronDown />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="size" className="text-sm font-medium text-zinc-800">
              Antal anställda
            </label>
            <div className="relative">
              <select
                id="size"
                name="size"
                defaultValue=""
                className="block w-full appearance-none rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 pr-10 text-sm shadow-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
              >
                <option value="" disabled>
                  Företagsstorlek
                </option>
                <option value="1-10">1–10</option>
                <option value="11-50">11–50</option>
                <option value="51-200">51–200</option>
                <option value="200+">200+</option>
              </select>
              <ChevronDown />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-zinc-800">
            Beskriv era behov och utmaningar
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Berätta kort om vilka processer ni vill förbättra, aktuella utmaningar och vad ni hoppas uppnå med AI…"
            className="block w-full resize-y rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 text-sm shadow-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
          />
        </div>

        <div className="">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-accent text-accent-foreground hover:bg-accent-light shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold h-11 rounded-md px-8 w-full"
          >
            {submitting ? "Skickar…" : "Skicka förfrågan"}
            <Send className="ml-2 h-4 w-4" />
          </button>
          <p className="mt-3 text-xs leading-5 text-zinc-500 text-center">
            Genom att skicka detta formulär godkänner ni att vi kontaktar er angående
            era förfrågan. Vi respekterar er integritet och delar aldrig era uppgifter
            med tredje part.
          </p>
        </div>
      </form>
    </section>
  );
}

function ChevronDown() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
    </svg>
  );
}