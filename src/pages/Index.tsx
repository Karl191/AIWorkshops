import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Workshops from "@/components/sections/Workshops";
import Benefits from "@/components/sections/Benefits";
import Cases from "@/components/sections/Cases";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Workshops />
        <Benefits />
        <Cases />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;