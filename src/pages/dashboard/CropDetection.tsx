import { useState, useRef } from "react";
import DashboardNavbar from "@/components/DashboardNavbar";
import { Button } from "@/components/ui/button";
import { Upload, Scan, AlertTriangle, CheckCircle, Pill, ShieldAlert, Bug, Wind, Shield } from "lucide-react";

interface Result {
  disease: string;
  confidence: number;
  severity: "Low" | "Moderate" | "High" | "Critical";
  causes: string[];
  spreadRisk: string;
  spreadRiskLevel: number;
  treatments: string[];
  preventiveMeasures: string[];
}

const mockResults: Record<string, Result> = {
  default: {
    disease: "Bacterial Leaf Blight",
    confidence: 92,
    severity: "High",
    causes: [
      "Xanthomonas oryzae pv. oryzae bacterium",
      "Contaminated irrigation water or seeds",
      "High humidity (>80%) with temperatures 25–34°C",
      "Overcrowded planting with poor air circulation",
    ],
    spreadRisk: "High risk of spreading to adjacent plants within 5–7 days if untreated. Rain and wind significantly accelerate transmission.",
    spreadRiskLevel: 78,
    treatments: [
      "Apply copper-based bactericide (Copper Hydroxide 77% WP at 2.5g/L)",
      "Remove and destroy infected leaves immediately — do not compost",
      "Drain excess water and ensure proper field drainage",
      "Apply Streptomycin Sulphate (500 ppm) as foliar spray",
      "Use resistant varieties (e.g., IR64, Swarna) in next planting cycle",
    ],
    preventiveMeasures: [
      "Use certified disease-free seeds from reliable sources",
      "Maintain proper spacing (20×15 cm) for adequate air circulation",
      "Avoid excess nitrogen fertilization — it increases susceptibility",
      "Practice crop rotation with non-host crops like pulses or oilseeds",
      "Clean all farm equipment between fields to prevent cross-contamination",
      "Monitor fields twice weekly during monsoon season",
    ],
  },
};

const severityColors: Record<string, string> = {
  Low: "text-primary",
  Moderate: "text-yellow-400",
  High: "text-orange-400",
  Critical: "text-destructive",
};

const severityBg: Record<string, string> = {
  Low: "bg-primary/10",
  Moderate: "bg-yellow-400/10",
  High: "bg-orange-400/10",
  Critical: "bg-destructive/10",
};

export default function CropDetection() {
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setImage(ev.target?.result as string);
      reader.readAsDataURL(file);
      setResult(null);
    }
  };

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setResult(mockResults.default);
      setAnalyzing(false);
    }, 2000);
  };

  return (
    <>
      <DashboardNavbar title="Crop Detection & Analysis" />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Upload + Quick Result */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Upload */}
            <div className="space-y-4">
              <div
                onClick={() => fileRef.current?.click()}
                className="glass-card aspect-[4/3] flex flex-col items-center justify-center cursor-pointer hover:border-primary/30 transition-colors overflow-hidden"
              >
                {image ? (
                  <img src={image} alt="Uploaded crop" className="w-full h-full object-cover rounded-xl" />
                ) : (
                  <div className="text-center p-8">
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">Click to upload a crop image</p>
                    <p className="text-xs text-muted-foreground/50 mt-1">JPG, PNG up to 10MB</p>
                  </div>
                )}
              </div>
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleUpload} />
              <Button
                onClick={handleAnalyze}
                disabled={!image || analyzing}
                className="w-full gradient-bg text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                {analyzing ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Analyzing...
                  </span>
                ) : (
                  <span className="flex items-center gap-2"><Scan className="h-4 w-4" /> Analyze Image</span>
                )}
              </Button>
            </div>

            {/* Detection Result */}
            <div className="space-y-4">
              {result ? (
                <>
                  <div className="glass-card p-6 animate-fade-in">
                    <div className="flex items-center gap-3 mb-5">
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                      <h3 className="font-display font-semibold text-lg">Detection Result</h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Disease Detected</p>
                        <p className="font-semibold text-destructive text-lg">{result.disease}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Confidence</p>
                          <div className="flex items-center gap-3">
                            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                              <div className="h-full gradient-bg rounded-full transition-all duration-1000" style={{ width: `${result.confidence}%` }} />
                            </div>
                            <span className="text-sm font-semibold">{result.confidence}%</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Severity</p>
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${severityColors[result.severity]} ${severityBg[result.severity]}`}>
                            <ShieldAlert className="h-3.5 w-3.5" />
                            {result.severity}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spread Risk */}
                  <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                    <div className="flex items-center gap-3 mb-3">
                      <Wind className="h-5 w-5 text-orange-400" />
                      <h3 className="font-display font-semibold">Spread Risk</h3>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-orange-400 rounded-full transition-all duration-1000" style={{ width: `${result.spreadRiskLevel}%` }} />
                      </div>
                      <span className="text-sm font-semibold text-orange-400">{result.spreadRiskLevel}%</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{result.spreadRisk}</p>
                  </div>
                </>
              ) : (
                <div className="glass-card aspect-[4/3] flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Scan className="h-12 w-12 mx-auto mb-3 opacity-30" />
                    <p className="text-sm">Upload and analyze an image to see results</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Detailed Analysis */}
          {result && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Causes */}
              <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: "0.15s" }}>
                <div className="flex items-center gap-3 mb-4">
                  <Bug className="h-5 w-5 text-secondary" />
                  <h3 className="font-display font-semibold">Causes</h3>
                </div>
                <ul className="space-y-3">
                  {result.causes.map((c, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="w-5 h-5 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">{i + 1}</span>
                      <span className="text-muted-foreground">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Treatments */}
              <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center gap-3 mb-4">
                  <Pill className="h-5 w-5 text-primary" />
                  <h3 className="font-display font-semibold">Treatment Plan</h3>
                </div>
                <ul className="space-y-3">
                  {result.treatments.map((t, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prevention */}
              <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: "0.25s" }}>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-5 w-5 text-accent" />
                  <h3 className="font-display font-semibold">Preventive Measures</h3>
                </div>
                <ul className="space-y-3">
                  {result.preventiveMeasures.map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
