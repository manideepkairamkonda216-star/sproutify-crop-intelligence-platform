import { Link } from "react-router-dom";
import { Leaf, Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/dashboard" },
  { label: "Services", href: "#services" },
  { label: "Crop Analysis", to: "/dashboard/detect" },
  { label: "AgriMap", to: "/dashboard/map" },
  { label: "Schemes", to: "/dashboard/government" },
  { label: "Marketplace", to: "/dashboard/products" },
  { label: "About", to: "/about" },
];

export default function LandingNavbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
            <Leaf className="h-4.5 w-4.5 text-primary-foreground" />
          </div>
          <div>
            <span className="text-base font-bold text-primary leading-none">Agrocare</span>
            <p className="text-[9px] text-muted-foreground leading-none mt-0.5">AI Crop Intelligence Platform</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) =>
            link.to ? (
              <Link key={link.label} to={link.to} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </a>
            )
          )}
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground" onClick={toggleTheme}>
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Link to="/login">
            <Button size="sm" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90">
              Login / Register
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground" onClick={toggleTheme}>
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          {navLinks.map((link) =>
            link.to ? (
              <Link key={link.label} to={link.to} className="block text-sm font-medium text-muted-foreground hover:text-primary" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className="block text-sm font-medium text-muted-foreground hover:text-primary" onClick={() => setMobileOpen(false)}>
                {link.label}
              </a>
            )
          )}
          <Link to="/login" onClick={() => setMobileOpen(false)}>
            <Button size="sm" className="w-full bg-primary text-primary-foreground font-semibold mt-2">
              Login / Register
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
