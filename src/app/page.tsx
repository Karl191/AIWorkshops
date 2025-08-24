import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Workshops from "@/components/sections/Workshops";
// import Benefits from "@/components/sections/Benefits";
import ROI from "@/components/sections/ROI";
// import Cases from "@//components/sections/Cases";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Workshops />
        <ROI />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
