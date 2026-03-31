import DashboardNavbar from "@/components/DashboardNavbar";
import { Droplets, Leaf, AlertTriangle, CheckCircle, Gauge, Thermometer, CloudRain } from "lucide-react";

const irrigationMethods = [
  { name: "Drip Irrigation", efficiency: "90-95%", waterSaved: "30-50%", best: "Vegetables, fruits, cotton", desc: "Water delivered directly to root zone through emitters. Best for water-scarce regions.", cost: "₹40,000-80,000/hectare", pros: ["Highest water efficiency", "Reduces weed growth", "Govt subsidy up to 55%"], cons: ["High initial cost", "Clogging risk in hard water", "Needs filtration system"] },
  { name: "Sprinkler Irrigation", efficiency: "75-85%", waterSaved: "20-35%", best: "Wheat, groundnut, pulses", desc: "Water sprayed through rotating nozzles simulating rainfall. Good for uneven terrain.", cost: "₹25,000-50,000/hectare", pros: ["Covers large areas", "Works on uneven land", "Subsidy available up to 50%"], cons: ["Wind affects uniformity", "Not for tall crops", "Higher energy cost"] },
  { name: "Flood/Surface Irrigation", efficiency: "40-60%", waterSaved: "Baseline", best: "Rice, sugarcane", desc: "Traditional method — water flows over field surface. Simple but wasteful.", cost: "₹5,000-15,000/hectare", pros: ["Low technology cost", "Simple to implement", "Traditional knowledge"], cons: ["Highest water waste", "Causes waterlogging", "Nutrient leaching"] },
  { name: "Furrow Irrigation", efficiency: "60-75%", waterSaved: "10-20%", best: "Row crops: maize, potato", desc: "Water flows through channels between crop rows. Better than flooding for row crops.", cost: "₹8,000-20,000/hectare", pros: ["Less waterlogging than flooding", "Suitable for row crops", "Lower labor than drip"], cons: ["Uneven distribution", "End-of-furrow runoff", "Not for sandy soils"] },
];

const cropWaterRequirements = [
  { crop: "Rice (Paddy)", water: "1200-1500 mm", critical: "Transplanting to flowering", method: "Flood → AWD (Alternate Wetting & Drying)", tips: "Use AWD technique — save 20-30% water without yield loss. Maintain 5cm water during flowering only." },
  { crop: "Wheat", water: "450-650 mm", critical: "Crown Root Initiation & Flowering", method: "Sprinkler / Border strip", tips: "6 irrigations at CRI, tillering, jointing, flowering, milk, and dough stages. Skip tillering if rain received." },
  { crop: "Tomato", water: "600-800 mm", critical: "Flowering & Fruit development", method: "Drip irrigation recommended", tips: "Consistent moisture critical — irregular watering causes blossom-end rot. Mulch to retain moisture." },
  { crop: "Cotton", water: "700-1200 mm", critical: "Square to boll development", method: "Drip / Furrow", tips: "Stop irrigation 2 weeks before first picking. Avoid waterlogging — increases root rot risk." },
  { crop: "Potato", water: "500-700 mm", critical: "Tuber initiation to bulking", method: "Drip / Sprinkler", tips: "Maintain consistent soil moisture during tuber bulking. Reduce irrigation 2 weeks before harvest." },
  { crop: "Sugarcane", water: "1500-2500 mm", critical: "Grand growth phase (4-9 months)", method: "Drip (sub-surface ideal)", tips: "Subsurface drip saves 40% water vs flood. Irrigate every 7-10 days in summer." },
  { crop: "Maize", water: "500-700 mm", critical: "Tasseling and silking", method: "Sprinkler / Furrow", tips: "Water stress during silking reduces yield by 50%. Ensure adequate moisture 2 weeks before and after tasseling." },
  { crop: "Soybean", water: "450-700 mm", critical: "Flowering to seed filling", method: "Sprinkler / Rain-fed", tips: "Often rain-fed in India. Supplement with sprinkler during dry spells in reproductive stage." },
];

const smartTips = [
  { title: "Test Soil Moisture Before Irrigating", desc: "Push a screwdriver 6 inches into soil — if it goes in easily, soil is moist enough. Don't irrigate by calendar alone.", icon: Gauge },
  { title: "Irrigate in Early Morning or Evening", desc: "Reduce evaporation loss by 20-30% by avoiding midday watering. Early morning is best — reduces fungal disease risk.", icon: Thermometer },
  { title: "Harvest Rainwater with Farm Ponds", desc: "Build a lined farm pond (10m × 10m × 3m) to store 300,000 liters. Government subsidy available up to ₹50,000 under PMKSY.", icon: CloudRain },
  { title: "Use Mulching to Conserve Moisture", desc: "Apply 5-7cm organic mulch (straw, leaves) around crops. Reduces evaporation by 30-40% and suppresses weeds.", icon: Leaf },
  { title: "Monitor Water Table Depth", desc: "If water table is above 1.5m, reduce irrigation frequency. Shallow water tables cause waterlogging and salinity.", icon: Droplets },
  { title: "Adopt Alternate Wetting & Drying (AWD) for Rice", desc: "Let rice field dry until cracks appear, then re-flood. Saves 20-30% water with no yield loss. Reduces methane emissions.", icon: CheckCircle },
];

export default function WaterManagement() {
  return (
    <>
      <DashboardNavbar title="Water Management" />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="glass-card p-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-2">
              <Droplets className="h-6 w-6 text-secondary" />
              <h2 className="font-display text-xl font-bold">Smart Water Management</h2>
            </div>
            <p className="text-sm text-muted-foreground">Optimize irrigation practices, understand crop water needs, and implement water-saving techniques for sustainable farming.</p>
          </div>

          {/* Irrigation Methods */}
          <section>
            <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
              <Droplets className="h-5 w-5 text-primary" /> Irrigation Methods Compared
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {irrigationMethods.map((method, i) => (
                <div key={i} className="glass-card p-5 hover-lift animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-display font-semibold">{method.name}</h4>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{method.efficiency} efficient</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{method.desc}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                    <div><span className="text-muted-foreground">Water Saved:</span> <span className="font-medium text-primary">{method.waterSaved}</span></div>
                    <div><span className="text-muted-foreground">Cost:</span> <span className="font-medium">{method.cost}</span></div>
                    <div className="col-span-2"><span className="text-muted-foreground">Best for:</span> <span className="font-medium">{method.best}</span></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className="text-primary font-medium mb-1">✓ Advantages</p>
                      {method.pros.map((p, j) => <p key={j} className="text-muted-foreground">• {p}</p>)}
                    </div>
                    <div>
                      <p className="text-destructive font-medium mb-1">✗ Limitations</p>
                      {method.cons.map((c, j) => <p key={j} className="text-muted-foreground">• {c}</p>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Crop Water Requirements */}
          <section>
            <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary" /> Crop Water Requirements
            </h3>
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/30">
                      <th className="text-left px-4 py-3 text-muted-foreground font-medium">Crop</th>
                      <th className="text-left px-4 py-3 text-muted-foreground font-medium">Water Need</th>
                      <th className="text-left px-4 py-3 text-muted-foreground font-medium">Critical Stage</th>
                      <th className="text-left px-4 py-3 text-muted-foreground font-medium">Recommended Method</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cropWaterRequirements.map((c, i) => (
                      <tr key={i} className="border-b border-border/20 last:border-0 hover:bg-muted/20 transition-colors">
                        <td className="px-4 py-3 font-medium">{c.crop}</td>
                        <td className="px-4 py-3 text-primary font-semibold">{c.water}</td>
                        <td className="px-4 py-3 text-muted-foreground">{c.critical}</td>
                        <td className="px-4 py-3 text-muted-foreground">{c.method}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Detailed tips for each */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
              {cropWaterRequirements.slice(0, 4).map((c, i) => (
                <div key={i} className="glass-card p-4 hover-lift">
                  <h4 className="font-semibold text-sm mb-1">{c.crop}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.tips}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Smart Water Tips */}
          <section>
            <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-secondary" /> Smart Watering Tips
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {smartTips.map((tip, i) => (
                <div key={i} className="glass-card p-5 hover-lift animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
                  <div className="flex items-start gap-3">
                    <tip.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm mb-1">{tip.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{tip.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
