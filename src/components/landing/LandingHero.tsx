import { Link } from "react-router-dom";
import { Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingHero() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-accent/30">
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjk5MjIiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] bg-repeat" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full mb-5">
              <Leaf className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-semibold text-primary tracking-wide uppercase">Government of India Initiative</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">
              Empowering Farmers with{" "}
              <span className="text-primary">AI-Based Crop Intelligence</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-7 leading-relaxed">
              Detect crop diseases, get weather-based advisories, access government schemes, and optimize your yield — all from a single platform designed for Indian farmers.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/dashboard/detect">
                <Button size="lg" className="bg-primary text-primary-foreground font-semibold px-7 hover:bg-primary/90">
                  Analyze Your Crop <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="px-7 border-primary/30 text-primary hover:bg-primary/5">
                  Create Free Account
                </Button>
              </Link>
            </div>
          </div>

          {/* Right side — stats summary card */}
          <div className="hidden lg:block">
            <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
              <h3 className="text-lg font-bold text-foreground mb-6">Platform Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "15,000+", label: "Farmers Assisted" },
                  { value: "92%", label: "Detection Accuracy" },
                  { value: "₹2.4Cr", label: "Crop Loss Prevented" },
                  { value: "50+", label: "Crops Supported" },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-muted/50 rounded-md">
                    <p className="text-2xl font-bold text-primary">{s.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
