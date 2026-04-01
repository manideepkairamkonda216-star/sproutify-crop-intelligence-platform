import { Link } from "react-router-dom";
import { Leaf, CloudSun, Brain, Shield, ArrowRight, Upload, Scan, Pill, TrendingUp, CheckCircle, Star, ChevronRight, Users, Sun, Moon, MapPin, Phone, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

const features = [
  {
    icon: Leaf,
    title: "Crop Disease Detection",
    description: "Upload crop images for instant AI-powered disease identification with confidence scores and treatment recommendations.",
  },
  {
    icon: CloudSun,
    title: "Weather Advisory",
    description: "Real-time weather data with location-based agricultural advisories to plan farming activities effectively.",
  },
  {
    icon: Brain,
    title: "AI Recommendations",
    description: "Personalized treatment suggestions, fertilizer advice, and best practices powered by advanced machine learning.",
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Early warning system with spread risk analysis to prevent crop diseases before they devastate your fields.",
  },
  {
    icon: MapPin,
    title: "AgriMap Intelligence",
    description: "Interactive India map with state-wise agricultural data, soil analysis, and region-specific crop recommendations.",
  },
  {
    icon: Landmark,
    title: "Government Schemes",
    description: "Access to relevant government subsidies, PM-Kisan, crop insurance, and agricultural support programs.",
  },
];

const howItWorks = [
  { step: "01", icon: Upload, title: "Upload Crop Image", desc: "Take a photo of your crop leaf or affected area and upload it to the platform." },
  { step: "02", icon: Scan, title: "AI Analysis", desc: "Our AI engine identifies the disease, severity level, causes, and spread risk within seconds." },
  { step: "03", icon: Pill, title: "Get Treatment Plan", desc: "Receive detailed treatment recommendations, preventive measures, and government scheme suggestions." },
  { step: "04", icon: TrendingUp, title: "Track & Optimize", desc: "Monitor crop health over time and get yield predictions to maximize your harvest." },
];

const stats = [
  { value: "15,000+", label: "Farmers Assisted" },
  { value: "92%", label: "Detection Accuracy" },
  { value: "₹2.4Cr", label: "Crop Loss Prevented" },
  { value: "50+", label: "Crops Supported" },
];

const testimonials = [
  {
    name: "Rajesh Patel",
    role: "Rice Farmer, Gujarat",
    text: "Agrocare detected bacterial leaf blight in my rice field two weeks before I would have noticed it. Saved nearly 30% of my yield that season.",
    rating: 5,
  },
  {
    name: "Maria Santos",
    role: "Tomato Grower, Maharashtra",
    text: "The AI chatbot helped me understand which fertilizer to use and even found a government subsidy I didn't know about.",
    rating: 5,
  },
  {
    name: "Arun Kumar",
    role: "Wheat Farmer, Punjab",
    text: "Weather-based crop recommendations changed how I plan my planting cycle. My yield increased by 20% in the first year.",
    rating: 5,
  },
];

export default function Landing() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-background min-h-screen">
      {/* Government-style tricolor stripe */}
      <div className="gov-stripe" />

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <span className="font-display text-lg font-bold text-primary">Agrocare</span>
              <p className="text-[10px] text-muted-foreground leading-none">AI Crop Intelligence Platform</p>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/dashboard" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Home</Link>
            <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Services</a>
            <Link to="/dashboard/detect" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Crop Analysis</Link>
            <Link to="/dashboard/map" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">AgriMap</Link>
            <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</Link>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" onClick={toggleTheme}>
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Link to="/login">
              <Button size="sm" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-accent/30">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjk5MjIiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] bg-repeat" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Leaf className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Government of India Initiative</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in leading-tight" style={{ animationDelay: "0.1s" }}>
              Empowering Farmers with{" "}
              <span className="text-primary">AI-Based Crop Intelligence</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
              Detect crop diseases, get weather-based advisories, access government schemes, and optimize your yield — all from a single platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link to="/dashboard/detect">
                <Button size="lg" className="bg-primary text-primary-foreground font-semibold text-base px-8 hover:bg-primary/90">
                  Analyze Your Crop <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="text-base px-8 border-primary/30 text-primary hover:bg-primary/5">
                  Create Free Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="font-display text-3xl md:text-4xl font-bold mb-1">{s.value}</p>
                <p className="text-sm text-primary-foreground/80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services/Features */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-saffron uppercase tracking-wider mb-2">Our Services</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Agricultural Intelligence
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A complete suite of tools designed to help Indian farmers make informed decisions and improve crop yields.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={f.title} className="glass-card p-6 hover-lift animate-slide-up" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-saffron uppercase tracking-wider mb-2">Simple Process</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Agrocare Works
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From uploading a photo to receiving actionable insights — it takes less than 30 seconds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, i) => (
              <div key={item.step} className="relative">
                <div className="glass-card p-6 h-full">
                  <span className="font-display text-4xl font-bold text-primary/15 mb-3 block">{item.step}</span>
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center mb-4">
                    <item.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
                {i < howItWorks.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/30 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-saffron uppercase tracking-wider mb-2">Testimonials</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Farmers Across India
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="glass-card p-6 hover-lift">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 text-saffron fill-saffron" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Protect Your Crops?
          </h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
            Join thousands of farmers who are already using Agrocare to detect diseases early, access government support, and maximize their yield.
          </p>
          <Link to="/login">
            <Button size="lg" className="bg-secondary text-secondary-foreground font-semibold text-base px-10 hover:bg-secondary/90">
              Start Using Agrocare <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-5 w-5" />
                <span className="font-display font-bold text-lg">Agrocare</span>
              </div>
              <p className="text-sm opacity-70 leading-relaxed">AI-powered crop intelligence platform helping farmers detect diseases, predict yields, and access government support.</p>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-3 text-sm">Platform</h4>
              <div className="space-y-2">
                <Link to="/dashboard/detect" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Crop Detection</Link>
                <Link to="/dashboard/weather" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Weather Insights</Link>
                <Link to="/dashboard/chat" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">AI Assistant</Link>
              </div>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-3 text-sm">Resources</h4>
              <div className="space-y-2">
                <Link to="/crops" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">Crop Library</Link>
                <Link to="/about" className="block text-sm opacity-70 hover:opacity-100 transition-opacity">About Us</Link>
              </div>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-3 text-sm">Helpline</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm opacity-70">
                  <Phone className="h-3 w-3" /> 1800-180-1551
                </div>
                <p className="text-sm opacity-70">help@agrocare.gov.in</p>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm opacity-60">© 2026 Agrocare — Ministry of Agriculture & Farmers' Welfare, Government of India</p>
            <div className="flex gap-6">
              <Link to="/about" className="text-sm opacity-60 hover:opacity-100 transition-opacity">About</Link>
              <Link to="/crops" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Crops</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
