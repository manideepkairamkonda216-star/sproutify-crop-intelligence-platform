import DashboardNavbar from "@/components/DashboardNavbar";
import { Target, Cpu, TrendingUp } from "lucide-react";

const sections = [
  {
    icon: Target,
    title: "Our Mission",
    text: "Agrocare empowers farmers and agronomists with AI-driven tools to detect crop diseases early, reduce losses, and improve yields worldwide.",
  },
  {
    icon: Cpu,
    title: "Technology",
    text: "We leverage deep learning computer vision models trained on millions of crop images to provide accurate, real-time disease detection and diagnosis.",
  },
  {
    icon: TrendingUp,
    title: "Benefits",
    text: "Reduce crop losses by up to 40%, save time on manual inspections, get instant treatment recommendations, and make data-driven farming decisions.",
  },
];

export default function About() {
  return (
    <>
      <DashboardNavbar title="About Agrocare" />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="font-display text-3xl font-bold mb-3">
              About <span className="gradient-text">Agrocare</span>
            </h2>
            <p className="text-muted-foreground">
              An AI-powered crop intelligence platform built for modern agriculture.
            </p>
          </div>

          {sections.map((s, i) => (
            <div key={s.title} className="glass-card p-6 hover-lift animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
