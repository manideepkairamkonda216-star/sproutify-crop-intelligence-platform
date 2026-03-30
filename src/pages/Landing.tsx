import { Link } from "react-router-dom";
import { Leaf, CloudSun, Brain, Shield, ArrowRight, Sprout, Upload, Scan, Pill, BarChart3, MapPin, Phone, Users, TrendingUp, CheckCircle, Star, ChevronRight, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

const features = [
  {
    icon: Leaf,
    title: "Crop Disease Detection",
    description: "Upload an image of your crop and get instant AI-powered disease identification with confidence scores and severity analysis.",
  },
  {
    icon: CloudSun,
    title: "Weather Insights",
    description: "Real-time weather data with location-based crop recommendations to help you plan farming activities effectively.",
  },
  {
    icon: Brain,
    title: "AI Recommendations",
    description: "Get personalized treatment suggestions, fertilizer advice, and best practices powered by advanced machine learning.",
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Early warning system with spread risk analysis that helps prevent crop diseases before they devastate your fields.",
  },
];

const howItWorks = [
  { step: "01", icon: Upload, title: "Upload Crop Image", desc: "Take a photo of your crop leaf or affected area and upload it to the platform." },
  { step: "02", icon: Scan, title: "AI Analyzes Disease", desc: "Our AI engine identifies the disease, severity level, causes, and spread risk within seconds." },
  { step: "03", icon: Pill, title: "Get Treatment Plan", desc: "Receive detailed treatment recommendations, preventive measures, and government scheme suggestions." },
  { step: "04", icon: TrendingUp, title: "Track & Optimize", desc: "Monitor your crop health over time and get yield predictions to maximize your harvest." },
];

const stats = [
  { value: "40%", label: "of global crop yield is lost to plant diseases and pests annually" },
  { value: "$220B", label: "estimated annual economic loss due to crop diseases worldwide" },
  { value: "80%", label: "of crop losses can be prevented with early disease detection" },
  { value: "3x", label: "faster diagnosis with AI compared to traditional lab methods" },
];

const advantages = [
  { title: "Instant Results", desc: "Get disease identification in seconds, not days. No lab visits or expert consultations needed." },
  { title: "Cost Effective", desc: "Reduce crop loss by up to 60% with early detection, saving thousands per season." },
  { title: "24/7 Available", desc: "Access expert-level crop diagnosis anytime, anywhere — even in remote rural areas." },
  { title: "Government Linked", desc: "Automatically suggests relevant government schemes, subsidies, and support programs." },
  { title: "Multi-Crop Support", desc: "Covers rice, wheat, tomato, potato, corn, and dozens more crops with expanding coverage." },
  { title: "Data-Driven Farming", desc: "Yield predictions and soil analysis help you make informed planting and harvesting decisions." },
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
    text: "The AI chatbot helped me understand which fertilizer to use and even found a government subsidy I didn't know about. Incredible tool.",
    rating: 5,
  },
  {
    name: "Arun Kumar",
    role: "Wheat Farmer, Punjab",
    text: "Weather-based crop recommendations changed how I plan my planting cycle. My yield increased by 20% in the first year of using Agrocare.",
    rating: 5,
  },
];

const impactStats = [
  { value: "15,000+", label: "Farmers Assisted" },
  { value: "92%", label: "Detection Accuracy" },
  { value: "₹2.4Cr", label: "Crop Loss Prevented" },
  { value: "50+", label: "Crops Supported" },
];

export default function Landing() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="page-gradient">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-card border-0 border-b border-border/30">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Sprout className="h-7 w-7 text-primary" />
            <span className="font-display text-xl font-bold gradient-text">Agrocare</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
            <a href="#why-agrocare" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Why Agrocare</a>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" onClick={toggleTheme}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
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
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 animate-fade-in-slow" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 animate-fade-in">
            <Sprout className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">AI-Powered Crop Intelligence Platform</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="gradient-text">Agrocare</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Detect, Predict, and Optimize Crop Health
          </p>
          <p className="text-sm md:text-base text-muted-foreground/70 max-w-xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.25s" }}>
            Empowering farmers with AI-driven disease detection, yield predictions, and government scheme access — all from a single photo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/login">
              <Button size="lg" className="gradient-bg text-primary-foreground font-semibold text-lg px-8 py-6 hover:opacity-90 transition-all hover:scale-105">
                Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="#how-it-works">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-border/50 hover:bg-muted/30">
                See How It Works
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 border-y border-border/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2">{s.value}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-3">Core Features</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Intelligent <span className="gradient-text">Crop Management</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Everything you need to monitor, protect, and optimize your crop yields in one platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={f.title} className="glass-card p-6 hover-lift animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
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

      {/* How It Works */}
      <section id="how-it-works" className="py-24 relative border-t border-border/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-3">Simple Process</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              How <span className="gradient-text">Agrocare</span> Works
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From uploading a photo to receiving actionable insights — it takes less than 30 seconds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, i) => (
              <div key={item.step} className="relative">
                <div className="glass-card p-6 hover-lift h-full">
                  <span className="font-display text-4xl font-bold text-primary/20 mb-4 block">{item.step}</span>
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mb-4">
                    <item.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
                {i < howItWorks.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-primary/30 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Agrocare */}
      <section id="why-agrocare" className="py-24 relative border-t border-border/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-3">Why Choose Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Why <span className="gradient-text">Agrocare</span> Over Traditional Methods
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Traditional crop diagnosis takes days, costs money, and requires expert access. Agrocare changes everything.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((a) => (
              <div key={a.title} className="glass-card p-6 hover-lift">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-display font-semibold mb-1">{a.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact on Farmers */}
      <section className="py-24 relative border-t border-border/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-3">Real Impact</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Transforming <span className="gradient-text">Farmer Livelihoods</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Agrocare isn't just technology — it's a lifeline for farmers facing unpredictable weather, evolving diseases, and limited access to agricultural expertise. Our platform bridges the gap between cutting-edge AI research and the fields where food is grown.
              </p>
              <div className="space-y-4">
                {[
                  "Reduces dependency on costly agricultural consultants",
                  "Provides early warning before diseases spread to neighboring crops",
                  "Connects farmers with government subsidies they often miss",
                  "Enables data-driven decisions for planting, irrigation, and harvesting",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                    <p className="text-sm text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {impactStats.map((s, i) => (
                <div key={i} className="glass-card p-6 text-center hover-lift">
                  <p className="font-display text-2xl md:text-3xl font-bold gradient-text mb-1">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative border-t border-border/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-3">Testimonials</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Trusted by <span className="gradient-text">Farmers</span> Across India
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="glass-card p-6 hover-lift">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                    <Users className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative border-t border-border/20">
        <div className="container mx-auto px-6">
          <div className="glass-card p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 gradient-bg opacity-5" />
            <div className="relative z-10">
              <Sprout className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready to Protect Your <span className="gradient-text">Crops</span>?
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-8">
                Join thousands of farmers who are already using Agrocare to detect diseases early, access government support, and maximize their yield.
              </p>
              <Link to="/login">
                <Button size="lg" className="gradient-bg text-primary-foreground font-semibold text-lg px-10 py-6 hover:opacity-90 transition-all hover:scale-105">
                  Start Using Agrocare <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sprout className="h-5 w-5 text-primary" />
                <span className="font-display font-semibold gradient-text">Agrocare</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">AI-powered crop intelligence platform helping farmers detect diseases, predict yields, and access government support.</p>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-3 text-sm">Platform</h4>
              <div className="space-y-2">
                <Link to="/login" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Crop Detection</Link>
                <Link to="/login" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Weather Insights</Link>
                <Link to="/login" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">AI Assistant</Link>
              </div>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-3 text-sm">Resources</h4>
              <div className="space-y-2">
                <Link to="/crops" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Crop Library</Link>
                <Link to="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
              </div>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-3 text-sm">Support</h4>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">help@agrocare.in</p>
                <p className="text-sm text-muted-foreground">1800-180-1551</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© 2026 Agrocare. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
              <Link to="/crops" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Crops</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
