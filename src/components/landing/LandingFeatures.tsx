import { Link } from "react-router-dom";
import { Leaf, CloudSun, Brain, Shield, MapPin, Landmark, Droplets, TrendingUp, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Leaf,
    title: "Crop Disease Detection",
    description: "Upload crop images for instant AI-powered disease identification with confidence scores and treatment recommendations.",
    to: "/dashboard/detect",
  },
  {
    icon: TrendingUp,
    title: "Yield Prediction",
    description: "AI-driven yield forecasting based on soil, weather, and crop health data to plan harvest and sales.",
    to: "/dashboard/yield",
  },
  {
    icon: CloudSun,
    title: "Weather Advisory",
    description: "Real-time weather data with location-based agricultural advisories to plan farming activities effectively.",
    to: "/dashboard/weather",
  },
  {
    icon: Droplets,
    title: "Water Management",
    description: "Smart irrigation guidance, water requirement data for different crops, and efficient watering recommendations.",
    to: "/dashboard/water",
  },
  {
    icon: Brain,
    title: "AI Assistant",
    description: "Personalized treatment suggestions, fertilizer advice, and best practices powered by advanced machine learning.",
    to: "/dashboard/chat",
  },
  {
    icon: Landmark,
    title: "Government Schemes",
    description: "Access to relevant government subsidies, PM-Kisan, crop insurance, and agricultural support programs.",
    to: "/dashboard/government",
  },
  {
    icon: MapPin,
    title: "AgriMap Intelligence",
    description: "Interactive India map with state-wise agricultural data, soil analysis, and region-specific crop recommendations.",
    to: "/dashboard/map",
  },
  {
    icon: ShoppingBag,
    title: "Marketplace",
    description: "Browse and discover quality agricultural products, seeds, fertilizers, and tools from verified suppliers.",
    to: "/dashboard/products",
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Early warning system with spread risk analysis to prevent crop diseases before they devastate your fields.",
    to: "/dashboard/detect",
  },
];

export default function LandingFeatures() {
  return (
    <section id="services" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Our Services</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Comprehensive Agricultural Intelligence
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            A complete suite of tools designed to help Indian farmers make informed decisions and improve crop yields.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="group bg-card border border-border rounded-lg p-5 hover-lift">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-3">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1.5">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{f.description}</p>
              <Link to={f.to} className="inline-flex items-center text-xs font-semibold text-primary hover:underline">
                Explore <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
