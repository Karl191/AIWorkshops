const ROI = () => {
  return (
    <section id="benefits" className="py-24 bg-gradient-subtle">
{/* ROI Section */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Konkreta <span className="text-accent">fördelar</span> för ert företag
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Våra kunder rapporterar både effektivisering och ökad tillväxt efter att ha implementerat AI-verktyg.
          </p>
        </div>
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Genomsnittlig ROI: 400% inom 12 månader
              </h3>
              <p className="text-primary-foreground/90 mb-6 text-lg">
                Våra kunder ser i genomsnitt en avkastning på 400% på sin investering 
                i AI-workshops inom det första året. Majoriteten börjar se resultat 
                redan efter 30 dagar.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-accent">30 dagar</div>
                  <div className="text-primary-foreground/80">Första resultaten</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">6 månader</div>
                  <div className="text-primary-foreground/80">Full implementation</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-primary-foreground/10 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-primary-foreground/90">Månad 1-3</span>
                  <span className="font-semibold">+150% effektivitet</span>
                </div>
                <div className="w-full bg-primary-foreground/20 rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              
              <div className="bg-primary-foreground/10 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-primary-foreground/90">Månad 4-6</span>
                  <span className="font-semibold">+250% effektivitet</span>
                </div>
                <div className="w-full bg-primary-foreground/20 rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div className="bg-primary-foreground/10 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-primary-foreground/90">Månad 7-12</span>
                  <span className="font-semibold">+400% effektivitet</span>
                </div>
                <div className="w-full bg-primary-foreground/20 rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </section>
  );
};

export default ROI;