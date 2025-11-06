import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center">
              <span className="text-accent font-bold text-xl">O</span>
            </div>
            <h1 className="text-2xl font-bold text-primary-foreground">
              Orthwein <span className="italic font-serif">Ventures</span>
            </h1>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {isHome ? (
              <>
                <a href="#about" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  ABOUT
                </a>
                <a href="#focus" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  INVESTMENT FOCUS
                </a>
                <Link to="/portfolio" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  PORTFOLIO
                </Link>
                <a href="#contact" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  CONTACT
                </a>
              </>
            ) : (
              <>
                <Link to="/#about" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  ABOUT
                </Link>
                <Link to="/#focus" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  INVESTMENT FOCUS
                </Link>
                <Link to="/portfolio" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  PORTFOLIO
                </Link>
                <Link to="/#contact" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  CONTACT
                </Link>
              </>
            )}
          </div>
          <Link to="/#contact">
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              PARTNER WITH US
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
