import { useState, useRef } from "react";
import DashboardNavbar from "@/components/DashboardNavbar";
import { Button } from "@/components/ui/button";
import { Upload, Scan, AlertTriangle, CheckCircle, Pill } from "lucide-react";

interface Result {
  disease: string;
  confidence: number;
  treatments: string[];
}

const mockResults: Record<string, Result> = {
  default: {
    disease: "Bacterial Leaf Blight",
    confidence: 92,
    treatments: [
      "Apply copper-based bactericide",
      "Remove infected leaves immediately",
      "Ensure proper drainage and air circulation",
      "Use resistant varieties in next planting cycle",
    ],
  },
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
      <DashboardNavbar title="Crop Detection" />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-6">
          {/* Upload */}
          <div className="space-y-4">
            <div
              onClick={() => fileRef.current?.click()}
              className="glass-card aspect-square flex flex-col items-center justify-center cursor-pointer hover:border-primary/30 transition-colors overflow-hidden"
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

          {/* Results */}
          <div className="space-y-4">
            {result ? (
              <>
                <div className="glass-card p-6 animate-fade-in">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    <h3 className="font-display font-semibold text-lg">Detection Result</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Disease Detected</p>
                      <p className="font-semibold text-destructive">{result.disease}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Confidence</p>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full gradient-bg rounded-full transition-all duration-1000" style={{ width: `${result.confidence}%` }} />
                        </div>
                        <span className="text-sm font-semibold">{result.confidence}%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: "0.15s" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <Pill className="h-5 w-5 text-primary" />
                    <h3 className="font-display font-semibold text-lg">Treatment Suggestions</h3>
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
              </>
            ) : (
              <div className="glass-card aspect-square flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Scan className="h-12 w-12 mx-auto mb-3 opacity-30" />
                  <p className="text-sm">Upload and analyze an image to see results</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
