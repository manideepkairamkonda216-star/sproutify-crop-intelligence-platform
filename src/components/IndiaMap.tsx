import { useState } from "react";
import { statePathsData } from "@/data/indiaStatesData";

interface IndiaMapProps {
  selectedState: string | null;
  onStateSelect: (state: string) => void;
}

export default function IndiaMap({ selectedState, onStateSelect }: IndiaMapProps) {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  return (
    <div className="glass-card p-6 flex flex-col items-center">
      <h3 className="font-display text-lg font-semibold mb-4 gradient-text">Interactive India Map</h3>
      <p className="text-xs text-muted-foreground mb-4">Click a state to explore agricultural data</p>
      <svg viewBox="60 30 430 500" className="w-full max-w-md">
        {/* Background outline */}
        <rect x="60" y="30" width="430" height="500" fill="transparent" />

        {Object.entries(statePathsData).map(([name, data]) => {
          const isSelected = selectedState === name;
          const isHovered = hoveredState === name;

          return (
            <g key={name}>
              <path
                d={data.d}
                fill={
                  isSelected
                    ? "hsl(142 60% 45% / 0.4)"
                    : isHovered
                    ? "hsl(200 70% 45% / 0.3)"
                    : "hsl(220 18% 15% / 0.6)"
                }
                stroke={
                  isSelected
                    ? "hsl(142 60% 50%)"
                    : isHovered
                    ? "hsl(200 70% 55%)"
                    : "hsl(220 15% 30%)"
                }
                strokeWidth={isSelected ? 2.5 : isHovered ? 2 : 1}
                className="cursor-pointer transition-all duration-300"
                onClick={() => onStateSelect(name)}
                onMouseEnter={() => setHoveredState(name)}
                onMouseLeave={() => setHoveredState(null)}
              />
              <text
                x={data.cx}
                y={data.cy}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="9"
                fill={isSelected ? "hsl(142 60% 70%)" : "hsl(220 10% 60%)"}
                className="pointer-events-none select-none font-medium"
              >
                {name.length > 10 ? name.slice(0, 8) + "…" : name}
              </text>
            </g>
          );
        })}
      </svg>
      {hoveredState && !selectedState && (
        <p className="mt-3 text-sm text-muted-foreground animate-fade-in">
          Click <span className="text-primary font-medium">{hoveredState}</span> to view data
        </p>
      )}
    </div>
  );
}
