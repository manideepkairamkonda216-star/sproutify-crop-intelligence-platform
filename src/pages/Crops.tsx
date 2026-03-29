import DashboardNavbar from "@/components/DashboardNavbar";
import { Wheat } from "lucide-react";

const crops = [
  { name: "Rice", desc: "Staple grain crop grown in flooded paddy fields. Susceptible to blast and bacterial blight." },
  { name: "Wheat", desc: "Widely cultivated cereal grain. Watch for rust, smut, and powdery mildew." },
  { name: "Tomato", desc: "Popular fruit crop prone to early blight, late blight, and bacterial spot." },
  { name: "Corn", desc: "Major cereal grain used for food and feed. Common diseases include gray leaf spot." },
  { name: "Potato", desc: "Root vegetable susceptible to late blight, black scurf, and common scab." },
  { name: "Cotton", desc: "Fiber crop vulnerable to boll rot, verticillium wilt, and leaf curl virus." },
  { name: "Soybean", desc: "Legume crop prone to soybean rust, frogeye leaf spot, and stem canker." },
  { name: "Sugarcane", desc: "Tropical crop affected by red rot, smut, and ratoon stunting disease." },
];

export default function Crops() {
  return (
    <>
      <DashboardNavbar title="Crop Library" />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {crops.map((crop, i) => (
              <div key={crop.name} className="glass-card p-5 hover-lift animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mb-3">
                  <Wheat className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold mb-1">{crop.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{crop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
