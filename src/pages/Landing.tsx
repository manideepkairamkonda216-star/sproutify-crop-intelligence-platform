import GovHeader from "@/components/landing/GovHeader";
import LandingNavbar from "@/components/landing/LandingNavbar";
import LandingHero from "@/components/landing/LandingHero";
import LandingFeatures from "@/components/landing/LandingFeatures";
import LandingHowItWorks from "@/components/landing/LandingHowItWorks";
import LandingTestimonials from "@/components/landing/LandingTestimonials";
import LandingCTA from "@/components/landing/LandingCTA";
import LandingFooter from "@/components/landing/LandingFooter";

export default function Landing() {
  return (
    <div className="bg-background min-h-screen">
      <div className="gov-stripe" />
      <GovHeader />
      <LandingNavbar />

      {/* Mobile stats bar (visible below lg) */}
      <section className="lg:hidden py-8 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "15,000+", label: "Farmers Assisted" },
              { value: "92%", label: "Detection Accuracy" },
              { value: "₹2.4Cr", label: "Crop Loss Prevented" },
              { value: "50+", label: "Crops Supported" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-xl font-bold">{s.value}</p>
                <p className="text-xs text-primary-foreground/80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LandingHero />
      <LandingFeatures />
      <LandingHowItWorks />
      <LandingTestimonials />
      <LandingCTA />
      <LandingFooter />
    </div>
  );
}
