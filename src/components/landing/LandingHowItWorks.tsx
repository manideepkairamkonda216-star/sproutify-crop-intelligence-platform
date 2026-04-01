import { Upload, Scan, Pill, TrendingUp, ChevronRight } from "lucide-react";

const steps = [
  { step: "01", icon: Upload, title: "Upload Crop Image", desc: "Take a photo of your crop leaf or affected area and upload it to the platform." },
  { step: "02", icon: Scan, title: "AI Analysis", desc: "Our AI engine identifies the disease, severity level, causes, and spread risk within seconds." },
  { step: "03", icon: Pill, title: "Get Treatment Plan", desc: "Receive detailed treatment recommendations, preventive measures, and government scheme suggestions." },
  { step: "04", icon: TrendingUp, title: "Track & Optimize", desc: "Monitor crop health over time and get yield predictions to maximize your harvest." },
];

export default function LandingHowItWorks() {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Simple Process</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">How Agrocare Works</h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            From uploading a photo to receiving actionable insights — it takes less than 30 seconds.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((item, i) => (
            <div key={item.step} className="relative">
              <div className="bg-card border border-border rounded-lg p-5 h-full">
                <span className="text-3xl font-bold text-primary/10 block mb-2">{item.step}</span>
                <div className="w-9 h-9 rounded-md bg-primary flex items-center justify-center mb-3">
                  <item.icon className="h-4 w-4 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1.5">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <ChevronRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/30 z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
