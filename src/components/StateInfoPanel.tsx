import { type StateData } from "@/data/indiaStatesData";
import ProductCard from "@/components/ProductCard";
import {
  Wheat, Droplets, Bug, Thermometer, CloudRain, CalendarDays,
  Brain, Lightbulb, AlertTriangle, CheckCircle2, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface StateInfoPanelProps {
  data: StateData;
  onClose: () => void;
}

export default function StateInfoPanel({ data, onClose }: StateInfoPanelProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl font-bold gradient-text">{data.name}</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Major Crops */}
      <section className="glass-card p-5">
        <h3 className="font-display font-semibold mb-3 flex items-center gap-2 text-sm">
          <Wheat className="h-4 w-4 text-primary" /> Major Crops
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {data.crops.map((c) => (
            <div key={c.name} className="flex items-center gap-2 bg-muted/30 rounded-lg px-3 py-2">
              <span className="text-lg">{c.icon}</span>
              <span className="text-sm font-medium">{c.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Soil Type */}
      <section className="glass-card p-5">
        <h3 className="font-display font-semibold mb-2 flex items-center gap-2 text-sm">
          <Droplets className="h-4 w-4 text-secondary" /> Soil Type
        </h3>
        <p className="text-primary font-medium text-sm mb-1">{data.soilType}</p>
        <p className="text-xs text-muted-foreground">{data.soilDescription}</p>
      </section>

      {/* Common Diseases */}
      <section className="glass-card p-5">
        <h3 className="font-display font-semibold mb-3 flex items-center gap-2 text-sm">
          <Bug className="h-4 w-4 text-destructive" /> Common Crop Diseases
        </h3>
        <div className="space-y-3">
          {data.diseases.map((d) => (
            <div key={d.name} className="bg-muted/30 rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-sm">{d.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                  d.severity === "High" ? "bg-destructive/20 text-destructive" :
                  d.severity === "Medium" ? "bg-yellow-500/20 text-yellow-400" :
                  "bg-primary/20 text-primary"
                }`}>{d.severity}</span>
              </div>
              <p className="text-xs text-muted-foreground">{d.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Climate */}
      <section className="glass-card p-5">
        <h3 className="font-display font-semibold mb-3 flex items-center gap-2 text-sm">
          <Thermometer className="h-4 w-4 text-accent" /> Climate Conditions
        </h3>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-muted/30 rounded-lg p-3 text-center">
            <Thermometer className="h-4 w-4 text-primary mx-auto mb-1" />
            <p className="text-xs text-muted-foreground mb-0.5">Temperature</p>
            <p className="text-sm font-semibold">{data.climate.tempRange}</p>
          </div>
          <div className="bg-muted/30 rounded-lg p-3 text-center">
            <CloudRain className="h-4 w-4 text-secondary mx-auto mb-1" />
            <p className="text-xs text-muted-foreground mb-0.5">Rainfall</p>
            <p className="text-sm font-semibold">{data.climate.rainfall}</p>
          </div>
          <div className="bg-muted/30 rounded-lg p-3 text-center">
            <CalendarDays className="h-4 w-4 text-accent mx-auto mb-1" />
            <p className="text-xs text-muted-foreground mb-0.5">Seasons</p>
            <p className="text-xs font-semibold">{data.climate.seasons}</p>
          </div>
        </div>
      </section>

      {/* AI Insights */}
      <section className="glass-card p-5 gradient-border">
        <h3 className="font-display font-semibold mb-4 flex items-center gap-2 text-sm">
          <Brain className="h-4 w-4 text-primary" /> AI Insights for {data.name}
        </h3>
        <div className="space-y-4">
          <div>
            <p className="text-xs text-primary font-medium mb-2 flex items-center gap-1">
              <Lightbulb className="h-3 w-3" /> Best Crops to Grow Now
            </p>
            <div className="flex flex-wrap gap-2">
              {data.aiInsights.bestCrops.map((c) => (
                <span key={c} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">{c}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs text-destructive font-medium mb-2 flex items-center gap-1">
              <AlertTriangle className="h-3 w-3" /> Risk Factors
            </p>
            <ul className="space-y-1">
              {data.aiInsights.risks.map((r) => (
                <li key={r} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-destructive mt-1.5 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs text-secondary font-medium mb-2 flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3" /> Suggested Actions
            </p>
            <ul className="space-y-1">
              {data.aiInsights.actions.map((a) => (
                <li key={a} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-secondary mt-1.5 shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Products */}
      <section>
        <h3 className="font-display font-semibold mb-4 flex items-center gap-2 text-sm">
          🧪 Recommended Products
        </h3>
        <div className="space-y-4">
          {data.products.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
