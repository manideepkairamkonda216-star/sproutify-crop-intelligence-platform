import { useState } from "react";
import DashboardNavbar from "@/components/DashboardNavbar";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, AlertTriangle, Droplets, Thermometer, Layers } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const cropOptions = ["Rice", "Wheat", "Tomato", "Potato", "Cotton", "Sugarcane", "Maize", "Soybean"];
const soilOptions = ["Alluvial", "Black (Regur)", "Red & Laterite", "Sandy Loam", "Clay"];
const weatherOptions = ["Hot & Humid", "Warm & Dry", "Cool & Wet", "Moderate", "Cold & Dry"];

interface PredictionResult {
  expectedYield: string;
  yieldUnit: string;
  riskLevel: "Low" | "Moderate" | "High";
  riskFactors: string[];
  tips: string[];
  monthlyYield: { month: string; yield: number }[];
  comparison: { label: string; value: number }[];
}

const mockPredict = (crop: string, weather: string, soil: string): PredictionResult => {
  const baseYields: Record<string, number> = { Rice: 45, Wheat: 38, Tomato: 280, Potato: 220, Cotton: 18, Sugarcane: 700, Maize: 52, Soybean: 22 };
  const base = baseYields[crop] || 40;
  const weatherMod = weather === "Moderate" ? 1.1 : weather.includes("Dry") ? 0.8 : 1.0;
  const soilMod = soil === "Alluvial" ? 1.15 : soil === "Black (Regur)" ? 1.1 : soil === "Sandy Loam" ? 0.85 : 1.0;
  const predicted = Math.round(base * weatherMod * soilMod * 10) / 10;
  const risk = weatherMod < 0.9 ? "High" : weatherMod < 1.0 ? "Moderate" : "Low";

  return {
    expectedYield: `${predicted}`,
    yieldUnit: crop === "Sugarcane" || crop === "Tomato" || crop === "Potato" ? "tonnes/hectare" : "quintals/hectare",
    riskLevel: risk,
    riskFactors: [
      ...(weather.includes("Dry") ? ["Low rainfall may reduce yield by 15-20%"] : []),
      ...(soil === "Sandy Loam" ? ["Sandy soil has lower water retention — consider drip irrigation"] : []),
      ...(weather.includes("Humid") ? ["High humidity increases fungal disease risk — monitor closely"] : []),
      `${crop} is ${risk === "Low" ? "well-suited" : "moderately suited"} for ${soil} soil in current conditions`,
    ],
    tips: [
      `Optimal sowing window for ${crop}: ${crop === "Rice" ? "June-July (Kharif)" : crop === "Wheat" ? "October-November (Rabi)" : "March-April (Zaid)"}`,
      `Recommended fertilizer: NPK ${crop === "Rice" ? "120:60:60" : "100:50:50"} kg/hectare`,
      `Expected harvest in ${crop === "Rice" ? "120-150" : crop === "Wheat" ? "110-130" : "90-120"} days`,
    ],
    monthlyYield: [
      { month: "Week 1-2", yield: Math.round(predicted * 0.05) },
      { month: "Week 3-4", yield: Math.round(predicted * 0.1) },
      { month: "Week 5-8", yield: Math.round(predicted * 0.25) },
      { month: "Week 9-12", yield: Math.round(predicted * 0.35) },
      { month: "Week 13-16", yield: Math.round(predicted * 0.25) },
    ],
    comparison: [
      { label: "Your Prediction", value: predicted },
      { label: "National Avg", value: Math.round(base * 0.85) },
      { label: "State Best", value: Math.round(base * 1.25) },
    ],
  };
};

const riskColors: Record<string, string> = { Low: "text-primary", Moderate: "text-yellow-400", High: "text-destructive" };

export default function YieldPrediction() {
  const [crop, setCrop] = useState("");
  const [weather, setWeather] = useState("");
  const [soil, setSoil] = useState("");
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = () => {
    if (!crop || !weather || !soil) return;
    setLoading(true);
    setTimeout(() => {
      setResult(mockPredict(crop, weather, soil));
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <DashboardNavbar title="Yield Prediction" />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Input */}
          <div className="glass-card p-6">
            <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" /> Predict Your Crop Yield
            </h3>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">Crop Type</label>
                <select value={crop} onChange={(e) => setCrop(e.target.value)} className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm">
                  <option value="">Select crop</option>
                  {cropOptions.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block flex items-center gap-1"><Thermometer className="h-3 w-3" /> Weather Condition</label>
                <select value={weather} onChange={(e) => setWeather(e.target.value)} className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm">
                  <option value="">Select weather</option>
                  {weatherOptions.map(w => <option key={w} value={w}>{w}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block flex items-center gap-1"><Layers className="h-3 w-3" /> Soil Type</label>
                <select value={soil} onChange={(e) => setSoil(e.target.value)} className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm">
                  <option value="">Select soil type</option>
                  {soilOptions.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>
            <Button onClick={handlePredict} disabled={!crop || !weather || !soil || loading} className="gradient-bg text-primary-foreground font-semibold hover:opacity-90">
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Predicting...
                </span>
              ) : (
                <span className="flex items-center gap-2"><TrendingUp className="h-4 w-4" /> Predict Yield</span>
              )}
            </Button>
          </div>

          {result && (
            <>
              {/* Results Summary */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="glass-card p-6 animate-fade-in">
                  <p className="text-xs text-muted-foreground mb-1">Expected Yield</p>
                  <p className="font-display text-3xl font-bold gradient-text">{result.expectedYield}</p>
                  <p className="text-xs text-muted-foreground mt-1">{result.yieldUnit}</p>
                </div>
                <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                  <p className="text-xs text-muted-foreground mb-1">Risk Level</p>
                  <p className={`font-display text-3xl font-bold ${riskColors[result.riskLevel]}`}>{result.riskLevel}</p>
                  <p className="text-xs text-muted-foreground mt-1">Based on weather & soil analysis</p>
                </div>
                <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <p className="text-xs text-muted-foreground mb-1">Crop</p>
                  <p className="font-display text-3xl font-bold">{crop}</p>
                  <p className="text-xs text-muted-foreground mt-1">{soil} soil • {weather}</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {/* Growth Chart */}
                <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: "0.25s" }}>
                  <h4 className="font-display font-semibold mb-4">Growth Projection</h4>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={result.monthlyYield}>
                      <XAxis dataKey="month" tick={{ fill: "hsl(220 10% 55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fill: "hsl(220 10% 55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
                      <Tooltip contentStyle={{ background: "hsl(220 18% 10%)", border: "1px solid hsl(220 15% 18%)", borderRadius: "8px", fontSize: "12px" }} />
                      <Bar dataKey="yield" radius={[4, 4, 0, 0]}>
                        {result.monthlyYield.map((_, i) => (
                          <Cell key={i} fill={`hsl(${142 + i * 12} 60% ${45 - i * 3}%)`} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Comparison */}
                <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <h4 className="font-display font-semibold mb-4">Yield Comparison</h4>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={result.comparison} layout="vertical">
                      <XAxis type="number" tick={{ fill: "hsl(220 10% 55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
                      <YAxis dataKey="label" type="category" tick={{ fill: "hsl(220 10% 55%)", fontSize: 11 }} axisLine={false} tickLine={false} width={110} />
                      <Tooltip contentStyle={{ background: "hsl(220 18% 10%)", border: "1px solid hsl(220 15% 18%)", borderRadius: "8px", fontSize: "12px" }} />
                      <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                        <Cell fill="hsl(142 60% 45%)" />
                        <Cell fill="hsl(220 10% 40%)" />
                        <Cell fill="hsl(200 70% 45%)" />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Risk & Tips */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: "0.35s" }}>
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className={`h-5 w-5 ${riskColors[result.riskLevel]}`} />
                    <h4 className="font-display font-semibold">Risk Factors</h4>
                  </div>
                  <ul className="space-y-3">
                    {result.riskFactors.map((r, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <Droplets className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <h4 className="font-display font-semibold">Optimization Tips</h4>
                  </div>
                  <ul className="space-y-3">
                    {result.tips.map((t, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">{i + 1}</span>
                        <span className="text-muted-foreground">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}
