import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "linear-gradient(rgba(30, 25, 20, 0.7), rgba(30, 25, 20, 0.7)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')",
          }}
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
            Orthwein <span className="italic font-serif">Ventures</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Chicago-based venture capital investing in transformative technology and innovative companies
          </p>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-12 text-white px-6">
          <div className="text-center">
            <p className="text-sm opacity-80">LOCATION</p>
            <p className="text-lg font-semibold">Chicago, IL</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073" 
                alt="Chicago skyline representing Orthwein Ventures headquarters"
                className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <p className="text-accent font-semibold mb-4 tracking-wider">A Legacy of Innovation</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Welcome to Orthwein Ventures. A new chapter in our 150-year legacy.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Building on the foundation of Orthwein Energy, we're expanding beyond traditional energy sectors to invest in the technologies and companies shaping tomorrow.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Based in Chicago, Orthwein Ventures focuses on early to growth-stage investments in technology startups, innovative software companies, and transformative businesses across diverse sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <p className="text-5xl md:text-6xl font-bold text-accent mb-4">150+</p>
              <p className="text-primary-foreground/80 text-lg tracking-wider">YEARS OF LEGACY</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold text-accent mb-4">$50M+</p>
              <p className="text-primary-foreground/80 text-lg tracking-wider">COMMITTED CAPITAL</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-bold text-accent mb-4">5+</p>
              <p className="text-primary-foreground/80 text-lg tracking-wider">SECTORS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Focus */}
      <section id="focus" className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <p className="text-accent font-semibold mb-4 tracking-wider">The Orthwein Difference</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                We invest in founders building the future.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our investment thesis centers on identifying exceptional entrepreneurs and transformative technologies across multiple sectors.
              </p>
              <div className="space-y-4">
                <Card className="p-6 border-l-4 border-l-accent bg-secondary/50">
                  <h3 className="text-xl font-bold mb-2 text-foreground">Enterprise Software & SaaS</h3>
                  <p className="text-muted-foreground">B2B solutions, productivity tools, and infrastructure technology</p>
                </Card>
                <Card className="p-6 border-l-4 border-l-accent bg-secondary/50">
                  <h3 className="text-xl font-bold mb-2 text-foreground">FinTech & Financial Services</h3>
                  <p className="text-muted-foreground">Digital banking, payment platforms, and financial infrastructure</p>
                </Card>
                <Card className="p-6 border-l-4 border-l-accent bg-secondary/50">
                  <h3 className="text-xl font-bold mb-2 text-foreground">HealthTech & Life Sciences</h3>
                  <p className="text-muted-foreground">Digital health, biotech innovations, and healthcare technology</p>
                </Card>
                <Card className="p-6 border-l-4 border-l-accent bg-secondary/50">
                  <h3 className="text-xl font-bold mb-2 text-foreground">AI & Machine Learning</h3>
                  <p className="text-muted-foreground">Applied AI, automation, and intelligent systems</p>
                </Card>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070" 
                alt="Diverse team collaborating on innovative technology projects"
                className="w-full h-[700px] object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold mb-4 tracking-wider">Get in Touch</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Submit Your Pitch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Are you a founder with a transformative vision? We're here to partner with ambitious entrepreneurs building exceptional companies.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/95 border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold text-primary-foreground mb-4">
                Orthwein <span className="italic font-serif">Ventures</span>
              </h3>
              <p className="text-primary-foreground/70">
                A legacy of 150 years, investing in tomorrow's innovations.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-foreground mb-4">LOCATION</h4>
              <p className="text-primary-foreground/70">
                Chicago, Illinois<br />
                United States
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-foreground mb-4">CONTACT</h4>
              <p className="text-primary-foreground/70">
                ventures@orthwein.com
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-primary-foreground/60">
            <p>© 2024 Orthwein Ventures. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
