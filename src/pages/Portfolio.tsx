import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";

const portfolioCompanies = [
  {
    name: "NexTech AI",
    logo: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=400&h=400&fit=crop",
    sector: "AI & Machine Learning",
    description: "Enterprise AI platform enabling businesses to automate complex workflows through natural language processing and computer vision.",
    founded: "2022",
    status: "Series A",
    metrics: ["200% YoY Growth", "$5M ARR", "50+ Enterprise Clients"],
  },
  {
    name: "HealthStream",
    logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=400&fit=crop",
    sector: "HealthTech",
    description: "Digital health platform connecting patients with specialists through AI-powered diagnostics and telemedicine infrastructure.",
    founded: "2021",
    status: "Seed",
    metrics: ["100K+ Users", "30+ Hospital Partners", "4.8★ Rating"],
  },
  {
    name: "FinFlow",
    logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=400&fit=crop",
    sector: "FinTech",
    description: "Next-generation payment infrastructure for B2B transactions with real-time settlement and embedded compliance.",
    founded: "2023",
    status: "Seed",
    metrics: ["$50M+ Processed", "150+ Business Clients", "Zero Fraud"],
  },
  {
    name: "DataVault Pro",
    logo: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop",
    sector: "Enterprise Software",
    description: "Cloud-native data security platform providing zero-trust architecture for enterprise data management and compliance.",
    founded: "2020",
    status: "Series B",
    metrics: ["$12M ARR", "Fortune 500 Clients", "SOC 2 Certified"],
  },
  {
    name: "EduConnect",
    logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=400&fit=crop",
    sector: "EdTech",
    description: "Interactive learning platform leveraging AI to personalize education experiences for K-12 and higher education institutions.",
    founded: "2022",
    status: "Series A",
    metrics: ["500K+ Students", "200+ Schools", "95% Retention"],
  },
  {
    name: "GreenLogistics",
    logo: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=400&h=400&fit=crop",
    sector: "CleanTech",
    description: "Sustainable supply chain optimization platform reducing carbon emissions through AI-powered route planning and analytics.",
    founded: "2021",
    status: "Series A",
    metrics: ["30% CO2 Reduction", "100+ Corporate Clients", "$8M ARR"],
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-accent font-semibold mb-4 tracking-wider">OUR INVESTMENTS</p>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Portfolio Companies
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Partnering with exceptional founders building transformative companies across technology sectors
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-foreground mb-2">12+</p>
              <p className="text-muted-foreground">Active Investments</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-foreground mb-2">$120M+</p>
              <p className="text-muted-foreground">Capital Deployed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-foreground mb-2">3</p>
              <p className="text-muted-foreground">Successful Exits</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-foreground mb-2">180%</p>
              <p className="text-muted-foreground">Avg. Portfolio Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioCompanies.map((company, index) => (
              <Card
                key={index}
                className="overflow-hidden border-border hover:shadow-2xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video w-full overflow-hidden bg-secondary/20">
                  <img
                    src={company.logo}
                    alt={`${company.name} company logo`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{company.name}</h3>
                      <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                        {company.sector}
                      </Badge>
                    </div>
                    <Badge variant="outline" className="border-border">
                      {company.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{company.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span className="font-semibold text-foreground">Founded:</span>
                    <span>{company.founded}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {company.metrics.map((metric, i) => (
                      <Badge key={i} variant="secondary" className="bg-secondary/50">
                        {metric}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story Highlight */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold mb-4 tracking-wider">SUCCESS STORY</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Exit: CloudCore Systems
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                alt="CloudCore Systems team celebrating successful acquisition"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 mb-4">
                Enterprise Software
              </Badge>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Acquired by TechGiant Corp for $250M
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                CloudCore Systems, one of our seed investments from 2019, was successfully acquired in 2024. The company revolutionized cloud infrastructure management for enterprises, growing from 5 to 200+ employees and serving Fortune 500 clients worldwide.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <p className="text-muted-foreground">8x return for investors</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <p className="text-muted-foreground">4-year journey from seed to exit</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <p className="text-muted-foreground">$30M ARR at acquisition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Join Our Portfolio
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
            We're actively seeking exceptional founders with transformative visions. Let's build the future together.
          </p>
          <a href="/#contact">
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 rounded-md font-medium transition-colors">
              SUBMIT YOUR PITCH
            </button>
          </a>
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

export default Portfolio;
