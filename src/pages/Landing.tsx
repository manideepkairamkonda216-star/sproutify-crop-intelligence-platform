import { Link } from "react-router-dom";
import { Leaf, CloudSun, Brain, Shield, ArrowRight, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  {
    icon: Leaf,
    title: "Crop Disease Detection",
    description: "Upload an image of your crop and get instant AI-powered disease identification with confidence scores.",
  },
  {
    icon: CloudSun,
    title: "Weather Insights",
    description: "Real-time weather data to help you plan farming activities and protect your crops from adverse conditions.",
  },
  {
    icon: Brain,
    title: "AI Recommendations",
    description: "Get personalized treatment suggestions and best practices powered by advanced machine learning models.",
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Early warning system that helps you prevent crop diseases before they spread across your fields.",
  },
];

export default function Landing() {
  return (
    <div className="page-gradient">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-card border-0 border-b border-border/30">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Sprout className="h-7 w-7 text-primary" />
            <span className="font-display text-xl font-bold gradient-text">Sproutify</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/crops" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Crops</Link>
            <Link to="/login">
              <Button size="sm" className="gradient-bg text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 opacity-20">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 animate-fade-in">
            <Sprout className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">AI-Powered Crop Intelligence</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="gradient-text">Sproutify</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Detect, Predict, and Optimize Crop Health
          </p>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/login">
              <Button size="lg" className="gradient-bg text-primary-foreground font-semibold text-lg px-8 py-6 hover:opacity-90 transition-all hover:scale-105">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Intelligent <span className="gradient-text">Crop Management</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Everything you need to monitor, protect, and optimize your crop yields in one platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="glass-card p-6 hover-lift animate-slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                  <f.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sprout className="h-5 w-5 text-primary" />
            <span className="font-display font-semibold gradient-text">Sproutify</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 Sproutify. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/crops" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Crops</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
