import { useState } from "react";
import DashboardNavbar from "@/components/DashboardNavbar";
import IndiaMap from "@/components/IndiaMap";
import StateInfoPanel from "@/components/StateInfoPanel";
import { statesData } from "@/data/indiaStatesData";
import { MapPin } from "lucide-react";

export default function AgriMap() {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const stateData = selectedState ? statesData[selectedState] : null;

  return (
    <>
      <DashboardNavbar title="India Agriculture Intelligence Map" />
      <main className="flex-1 p-6 overflow-auto">
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Map (left) */}
          <div className="lg:col-span-2">
            <IndiaMap selectedState={selectedState} onStateSelect={setSelectedState} />
            {/* State list for quick access */}
            <div className="glass-card p-4 mt-4">
              <h4 className="font-display text-xs font-semibold text-muted-foreground mb-3">QUICK SELECT</h4>
              <div className="flex flex-wrap gap-2">
                {Object.keys(statesData).map((name) => (
                  <button
                    key={name}
                    onClick={() => setSelectedState(name)}
                    className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                      selectedState === name
                        ? "bg-primary/20 text-primary font-medium"
                        : "bg-muted/40 text-muted-foreground hover:text-foreground hover:bg-muted/60"
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Data panel (right) */}
          <div className="lg:col-span-3">
            {stateData ? (
              <StateInfoPanel data={stateData} onClose={() => setSelectedState(null)} />
            ) : (
              <div className="glass-card p-12 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-5">
                  <MapPin className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">Select a State</h3>
                <p className="text-sm text-muted-foreground max-w-sm">
                  Click on any state on the map or use the quick-select buttons to explore detailed agricultural intelligence, crop data, soil information, and product recommendations.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
