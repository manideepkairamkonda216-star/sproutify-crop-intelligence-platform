import { useState } from "react";
import DashboardNavbar from "@/components/DashboardNavbar";
import { Wheat, Bug, Shield, Pill, Leaf, ChevronRight, X, Droplets, Sun, Calendar, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Disease {
  name: string;
  severity: "Low" | "Medium" | "High";
  symptoms: string;
  causes: string[];
  prevention: string[];
  treatment: string[];
}

interface CropDetail {
  name: string;
  icon: string;
  desc: string;
  lifecycle: { stage: string; duration: string; description: string }[];
  diseases: Disease[];
  waterReq: string;
  soilType: string;
  tempRange: string;
  season: string;
  growthDuration: string;
}

const crops: CropDetail[] = [
  {
    name: "Rice", icon: "🌾", desc: "Staple grain crop grown in flooded paddy fields across tropical and subtropical regions.",
    lifecycle: [
      { stage: "Germination", duration: "5-10 days", description: "Seed absorbs water and sprouts in nursery bed" },
      { stage: "Seedling", duration: "15-25 days", description: "Young plants develop roots and 3-4 leaves" },
      { stage: "Tillering", duration: "25-50 days", description: "Plant produces multiple shoots from the base" },
      { stage: "Flowering", duration: "50-70 days", description: "Panicle emerges and pollination occurs" },
      { stage: "Grain Filling", duration: "70-100 days", description: "Starch accumulates in grains" },
      { stage: "Maturity", duration: "100-130 days", description: "Grains harden and turn golden — ready for harvest" },
    ],
    diseases: [
      { name: "Bacterial Leaf Blight", severity: "High", symptoms: "Yellow to white lesions along leaf veins, leaves dry out from tips", causes: ["Xanthomonas oryzae bacteria", "Spread by wind-driven rain and contaminated water", "Excess nitrogen fertilizer"], prevention: ["Use resistant varieties (IR64, Swarna)", "Balanced NPK fertilization", "Avoid clipping seedling tops during transplanting"], treatment: ["Apply Copper Hydroxide 77% WP (2.5g/L)", "Drain excess water from field", "Apply Streptomycin Sulphate 500 ppm if severe"] },
      { name: "Rice Blast", severity: "High", symptoms: "Diamond-shaped lesions on leaves with grey centers and brown margins", causes: ["Magnaporthe oryzae fungus", "High humidity (>90%) and cool nights", "Dense planting and nitrogen excess"], prevention: ["Avoid excessive nitrogen", "Maintain proper spacing", "Use blast-resistant varieties"], treatment: ["Spray Tricyclazole 75% WP (0.6g/L)", "Apply Isoprothiolane 40% EC", "Remove and destroy infected plant debris"] },
      { name: "Sheath Blight", severity: "Medium", symptoms: "Oval greenish-grey lesions on leaf sheaths near water line", causes: ["Rhizoctonia solani fungus", "Warm humid weather and dense canopy", "Continuous flooding"], prevention: ["Maintain proper plant spacing", "Avoid excessive nitrogen", "Drain periodically"], treatment: ["Spray Hexaconazole 5% EC", "Apply Validamycin 3% L", "Remove lower infected leaves"] },
    ],
    waterReq: "1200-1500 mm", soilType: "Clay / Alluvial", tempRange: "20-35°C", season: "Kharif (June-Oct)", growthDuration: "120-150 days",
  },
  {
    name: "Wheat", icon: "🌾", desc: "Widely cultivated winter cereal grain, India's second most important food crop.",
    lifecycle: [
      { stage: "Germination", duration: "5-8 days", description: "Seed absorbs moisture and coleoptile emerges" },
      { stage: "Seedling", duration: "8-20 days", description: "First leaves emerge and root system develops" },
      { stage: "Tillering", duration: "20-45 days", description: "Side shoots emerge — critical for yield potential" },
      { stage: "Stem Extension", duration: "45-65 days", description: "Internodes elongate rapidly" },
      { stage: "Heading", duration: "65-85 days", description: "Ear emerges from flag leaf sheath" },
      { stage: "Grain Fill & Maturity", duration: "85-130 days", description: "Grain filling occurs, plant turns golden" },
    ],
    diseases: [
      { name: "Yellow Rust", severity: "High", symptoms: "Yellow-orange pustules in stripes along leaf veins", causes: ["Puccinia striiformis fungus", "Cool moist weather (10-15°C)", "Wind-borne spores over long distances"], prevention: ["Plant resistant varieties (HD 3086, PBW 725)", "Avoid late sowing", "Monitor from January onwards"], treatment: ["Spray Propiconazole 25% EC (1ml/L)", "Apply Tebuconazole 250 EC", "Two sprays at 15-day intervals if severe"] },
      { name: "Powdery Mildew", severity: "Medium", symptoms: "White powdery patches on leaves, stems, and ears", causes: ["Erysiphe graminis fungus", "Moderate temperature with high humidity", "Dense canopy and shade"], prevention: ["Ensure proper spacing", "Balanced fertilization", "Use tolerant varieties"], treatment: ["Spray Sulfur 80% WP (2.5g/L)", "Apply Carbendazim 50% WP (1g/L)", "Remove badly affected plants"] },
    ],
    waterReq: "450-650 mm", soilType: "Loam / Alluvial", tempRange: "10-25°C", season: "Rabi (Oct-Mar)", growthDuration: "110-130 days",
  },
  {
    name: "Tomato", icon: "🍅", desc: "Popular vegetable crop grown year-round, highly susceptible to multiple diseases.",
    lifecycle: [
      { stage: "Germination", duration: "5-10 days", description: "Seeds sprout in nursery trays at 20-25°C" },
      { stage: "Seedling", duration: "10-30 days", description: "True leaves develop, transplant at 4-leaf stage" },
      { stage: "Vegetative Growth", duration: "30-50 days", description: "Rapid stem and leaf growth, staking needed" },
      { stage: "Flowering", duration: "50-65 days", description: "Yellow flowers appear in clusters" },
      { stage: "Fruit Development", duration: "65-85 days", description: "Fruits set and grow in size" },
      { stage: "Ripening", duration: "85-110 days", description: "Fruits turn red and soften — harvest begins" },
    ],
    diseases: [
      { name: "Early Blight", severity: "High", symptoms: "Brown spots with concentric rings (target-board pattern) and yellow halos on older leaves", causes: ["Alternaria solani fungus", "Warm humid conditions (24-29°C)", "Poor air circulation and overhead irrigation"], prevention: ["Practice 3-year crop rotation", "Use certified disease-free seeds", "Mulch around plants to prevent soil splash"], treatment: ["Spray Mancozeb 75% WP (2.5g/L)", "Apply Chlorothalonil at first sign", "Remove infected lower leaves"] },
      { name: "Late Blight", severity: "High", symptoms: "Water-soaked grey-green patches that turn brown, white mold on leaf underside", causes: ["Phytophthora infestans oomycete", "Cool wet weather (15-22°C) with rain", "Crowded planting"], prevention: ["Avoid overhead irrigation", "Space plants for air circulation", "Plant resistant varieties"], treatment: ["Spray Metalaxyl + Mancozeb (Ridomil Gold)", "Apply Cymoxanil-based fungicide", "Destroy severely affected plants"] },
      { name: "Bacterial Spot", severity: "Medium", symptoms: "Small, dark, water-soaked spots on leaves and fruit", causes: ["Xanthomonas vesicatoria bacteria", "Warm rainy weather", "Contaminated seeds"], prevention: ["Use pathogen-free seeds", "Avoid working in wet fields", "Copper spray preventively"], treatment: ["Spray Copper Oxychloride (3g/L)", "Apply Streptomycin (500 ppm)", "Remove infected fruit"] },
    ],
    waterReq: "600-800 mm", soilType: "Sandy Loam / Loam", tempRange: "20-30°C", season: "Year-round", growthDuration: "90-120 days",
  },
  {
    name: "Corn", icon: "🌽", desc: "Major cereal grain used for food, feed, and industrial products.",
    lifecycle: [
      { stage: "Emergence", duration: "5-10 days", description: "Coleoptile pushes through soil surface" },
      { stage: "Vegetative", duration: "10-50 days", description: "Leaves unfurl, V-stages tracked by leaf count" },
      { stage: "Tasseling", duration: "50-60 days", description: "Male flower (tassel) emerges at top" },
      { stage: "Silking", duration: "60-65 days", description: "Silk emerges from ear, pollination occurs" },
      { stage: "Grain Fill", duration: "65-100 days", description: "Kernels fill with starch (blister to dent stage)" },
      { stage: "Maturity", duration: "100-120 days", description: "Black layer forms — physiological maturity" },
    ],
    diseases: [
      { name: "Gray Leaf Spot", severity: "High", symptoms: "Rectangular grey-brown lesions parallel to leaf veins", causes: ["Cercospora zeae-maydis fungus", "Warm humid weather (25-30°C)", "Continuous corn planting and residue buildup"], prevention: ["Rotate with non-host crops", "Use tolerant hybrids", "Till crop residue to reduce inoculum"], treatment: ["Spray Azoxystrobin at VT stage", "Apply Propiconazole 25% EC", "Foliar application at first symptoms"] },
      { name: "Northern Corn Leaf Blight", severity: "Medium", symptoms: "Long cigar-shaped grey-green lesions on leaves", causes: ["Exserohilum turcicum fungus", "Cool to moderate temperatures with dew", "Susceptible varieties in humid areas"], prevention: ["Plant resistant hybrids", "Crop rotation with legumes", "Balanced fertilization"], treatment: ["Apply Mancozeb 75% WP", "Spray Propiconazole 25% EC", "Remove heavily infected leaves"] },
    ],
    waterReq: "500-700 mm", soilType: "Loam / Sandy Loam", tempRange: "21-30°C", season: "Kharif (June-Oct)", growthDuration: "100-120 days",
  },
  {
    name: "Potato", icon: "🥔", desc: "Root vegetable and the world's fourth most important food crop.",
    lifecycle: [
      { stage: "Sprout Development", duration: "0-15 days", description: "Eyes on seed potato develop sprouts" },
      { stage: "Vegetative Growth", duration: "15-35 days", description: "Stems emerge, leaves expand, roots develop" },
      { stage: "Tuber Initiation", duration: "35-50 days", description: "Stolons swell at tips forming small tubers" },
      { stage: "Tuber Bulking", duration: "50-90 days", description: "Tubers grow rapidly — most critical period" },
      { stage: "Maturation", duration: "90-120 days", description: "Vine dies back, tuber skin sets" },
    ],
    diseases: [
      { name: "Late Blight", severity: "High", symptoms: "Dark water-soaked lesions on leaves and tubers, white fungal growth", causes: ["Phytophthora infestans", "Cool wet weather (12-18°C) with fog/mist", "Infected seed tubers"], prevention: ["Use certified disease-free seed", "Hill potatoes to protect tubers", "Destroy volunteer plants"], treatment: ["Spray Metalaxyl + Mancozeb preventively", "Apply Cymoxanil-based fungicides", "Harvest early if infection is severe"] },
      { name: "Common Scab", severity: "Low", symptoms: "Rough, corky patches on tuber surface", causes: ["Streptomyces scabies bacteria", "Alkaline soil (pH > 7.0)", "Low soil moisture during tuber initiation"], prevention: ["Maintain soil pH 5.0-5.5", "Irrigate consistently during tuber formation", "Use resistant varieties"], treatment: ["Acidify soil with sulfur if needed", "Maintain steady soil moisture", "Apply Pentachloronitrobenzene to soil"] },
    ],
    waterReq: "500-700 mm", soilType: "Sandy Loam / Loam", tempRange: "15-25°C", season: "Rabi (Oct-Feb)", growthDuration: "90-120 days",
  },
  {
    name: "Cotton", icon: "🌿", desc: "Major fiber crop and India's most important commercial crop.",
    lifecycle: [
      { stage: "Germination", duration: "5-10 days", description: "Seed coat splits, radicle and hypocotyl emerge" },
      { stage: "Seedling", duration: "10-25 days", description: "Cotyledons unfold, first true leaves appear" },
      { stage: "Squaring", duration: "35-50 days", description: "Flower buds (squares) begin forming" },
      { stage: "Flowering", duration: "50-80 days", description: "White flowers appear, turn pink after pollination" },
      { stage: "Boll Development", duration: "80-120 days", description: "Bolls grow and fibers develop inside" },
      { stage: "Boll Opening", duration: "120-160 days", description: "Bolls crack open revealing white cotton lint" },
    ],
    diseases: [
      { name: "Cotton Leaf Curl Virus", severity: "High", symptoms: "Leaves curl upward, veins thicken and darken, stunted growth", causes: ["Begomovirus transmitted by whitefly", "High whitefly populations", "Susceptible Bt cotton varieties"], prevention: ["Plant tolerant varieties", "Control whitefly with neem oil", "Remove infected plants immediately"], treatment: ["No direct cure — manage whitefly vectors", "Spray Imidacloprid 17.8% SL", "Apply Thiamethoxam 25% WG"] },
      { name: "Boll Rot", severity: "Medium", symptoms: "Bolls turn brown, rot from inside, lint discolored", causes: ["Multiple fungi (Aspergillus, Fusarium)", "Heavy rain during boll opening", "Insect damage creating entry points"], prevention: ["Maintain proper plant spacing", "Control bollworm infestation", "Avoid late-season irrigation"], treatment: ["Spray Copper Oxychloride (3g/L)", "Apply Carbendazim 50% WP", "Remove and destroy rotted bolls"] },
    ],
    waterReq: "700-1200 mm", soilType: "Black / Alluvial", tempRange: "25-35°C", season: "Kharif (April-Nov)", growthDuration: "150-180 days",
  },
  {
    name: "Soybean", icon: "🫘", desc: "High-protein legume crop also called the 'golden bean' of the 21st century.",
    lifecycle: [
      { stage: "Germination", duration: "5-7 days", description: "Cotyledons emerge above soil" },
      { stage: "Vegetative", duration: "7-40 days", description: "Trifoliate leaves develop, nodes form" },
      { stage: "Flowering", duration: "40-60 days", description: "Small purple/white flowers appear at nodes" },
      { stage: "Pod Development", duration: "60-80 days", description: "Pods form and seeds begin developing" },
      { stage: "Seed Filling", duration: "80-100 days", description: "Seeds enlarge rapidly inside pods" },
      { stage: "Maturity", duration: "100-120 days", description: "Leaves drop, pods turn brown" },
    ],
    diseases: [
      { name: "Soybean Rust", severity: "High", symptoms: "Small tan to brown pustules on leaf undersides", causes: ["Phakopsora pachyrhizi fungus", "Warm humid weather with frequent dew", "Wind-dispersed spores from south"], prevention: ["Plant early-maturing varieties", "Avoid late planting", "Monitor fields from flowering stage"], treatment: ["Spray Trifloxystrobin + Tebuconazole", "Apply Azoxystrobin 23% SC", "Repeat spray after 15 days if needed"] },
    ],
    waterReq: "450-700 mm", soilType: "Loam / Clay Loam", tempRange: "20-30°C", season: "Kharif (June-Oct)", growthDuration: "95-120 days",
  },
  {
    name: "Sugarcane", icon: "🎋", desc: "Tropical grass cultivated for sugar production and ethanol.",
    lifecycle: [
      { stage: "Germination", duration: "10-35 days", description: "Buds on setts sprout and primary shoots emerge" },
      { stage: "Tillering", duration: "35-120 days", description: "Multiple shoots emerge from base of plant" },
      { stage: "Grand Growth", duration: "120-270 days", description: "Rapid elongation of cane — 70% of cane weight gained" },
      { stage: "Maturity", duration: "270-365 days", description: "Sugar accumulates in stalk, growth slows" },
    ],
    diseases: [
      { name: "Red Rot", severity: "High", symptoms: "Internal cane tissue turns red with white patches, foul smell", causes: ["Colletotrichum falcatum fungus", "Waterlogged conditions", "Infected seed cane"], prevention: ["Use disease-free seed cane", "Hot water treatment of setts (52°C for 30 min)", "Practice crop rotation"], treatment: ["No chemical cure once infected", "Remove and destroy infected clumps", "Drain waterlogged areas immediately"] },
      { name: "Smut", severity: "Medium", symptoms: "Long black whip-like structure from top of cane", causes: ["Sporisorium scitamineum fungus", "Infected seed cane and airborne spores", "Ratooning of infected fields"], prevention: ["Use smut-free seed cane", "Hot water treatment of setts", "Avoid ratooning infected fields"], treatment: ["Rogue out infected stools immediately", "Apply Triadimefon 25% WP", "Treat setts with Carbendazim before planting"] },
    ],
    waterReq: "1500-2500 mm", soilType: "Loam / Clay Loam", tempRange: "20-35°C", season: "Feb-Mar planting", growthDuration: "12-18 months",
  },
];

const severityColors: Record<string, string> = {
  Low: "bg-primary/10 text-primary",
  Medium: "bg-yellow-500/10 text-yellow-500",
  High: "bg-destructive/10 text-destructive",
};

export default function Crops() {
  const [selectedCrop, setSelectedCrop] = useState<CropDetail | null>(null);
  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null);

  if (selectedDisease && selectedCrop) {
    return (
      <>
        <DashboardNavbar title={`${selectedDisease.name} — ${selectedCrop.name}`} />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-4xl mx-auto space-y-6">
            <Button variant="ghost" onClick={() => setSelectedDisease(null)} className="text-muted-foreground hover:text-foreground">
              ← Back to {selectedCrop.name}
            </Button>

            <div className="glass-card p-6 animate-fade-in">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-2xl font-bold">{selectedDisease.name}</h2>
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${severityColors[selectedDisease.severity]}`}>{selectedDisease.severity} Severity</span>
              </div>
              <p className="text-sm text-muted-foreground">{selectedDisease.symptoms}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="glass-card p-5 animate-fade-in" style={{ animationDelay: "0.05s" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Bug className="h-4 w-4 text-destructive" />
                  <h4 className="font-display font-semibold">Causes</h4>
                </div>
                <ul className="space-y-2">
                  {selectedDisease.causes.map((c, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <AlertTriangle className="h-3 w-3 text-destructive mt-0.5 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card p-5 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="h-4 w-4 text-primary" />
                  <h4 className="font-display font-semibold">Prevention</h4>
                </div>
                <ul className="space-y-2">
                  {selectedDisease.prevention.map((p, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <Shield className="h-3 w-3 text-primary mt-0.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card p-5 animate-fade-in" style={{ animationDelay: "0.15s" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Pill className="h-4 w-4 text-secondary" />
                  <h4 className="font-display font-semibold">Treatment</h4>
                </div>
                <ul className="space-y-2">
                  {selectedDisease.treatment.map((t, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <Pill className="h-3 w-3 text-secondary mt-0.5 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }

  if (selectedCrop) {
    return (
      <>
        <DashboardNavbar title={`${selectedCrop.name} Details`} />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-5xl mx-auto space-y-6">
            <Button variant="ghost" onClick={() => setSelectedCrop(null)} className="text-muted-foreground hover:text-foreground">
              ← Back to Crop Library
            </Button>

            {/* Header Card */}
            <div className="glass-card p-6 animate-fade-in">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{selectedCrop.icon}</span>
                <div>
                  <h2 className="font-display text-2xl font-bold">{selectedCrop.name}</h2>
                  <p className="text-sm text-muted-foreground">{selectedCrop.desc}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {[
                  { label: "Water Req.", value: selectedCrop.waterReq, icon: Droplets },
                  { label: "Soil", value: selectedCrop.soilType, icon: Leaf },
                  { label: "Temp", value: selectedCrop.tempRange, icon: Sun },
                  { label: "Season", value: selectedCrop.season, icon: Calendar },
                  { label: "Duration", value: selectedCrop.growthDuration, icon: Calendar },
                ].map((info, i) => (
                  <div key={i} className="bg-muted/30 rounded-lg p-3 text-center">
                    <info.icon className="h-4 w-4 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">{info.label}</p>
                    <p className="text-sm font-semibold">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Lifecycle */}
            <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: "0.05s" }}>
              <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
                <Leaf className="h-5 w-5 text-primary" /> Growth Lifecycle
              </h3>
              <div className="space-y-3">
                {selectedCrop.lifecycle.map((stage, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors">
                    <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center shrink-0 text-xs font-bold text-primary-foreground">{i + 1}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h4 className="font-semibold text-sm">{stage.stage}</h4>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{stage.duration}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{stage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Diseases */}
            <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
                <Bug className="h-5 w-5 text-destructive" /> Common Diseases
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {selectedCrop.diseases.map((d, i) => (
                  <button key={i} onClick={() => setSelectedDisease(d)} className="glass-card p-4 text-left hover-lift group">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm">{d.name}</h4>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${severityColors[d.severity]}`}>{d.severity}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{d.symptoms}</p>
                    <span className="text-xs text-primary flex items-center gap-1 group-hover:underline">View details <ChevronRight className="h-3 w-3" /></span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <DashboardNavbar title="Crop Library" />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {crops.map((crop, i) => (
              <button key={crop.name} onClick={() => setSelectedCrop(crop)} className="glass-card p-5 hover-lift animate-fade-in text-left group" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{crop.icon}</span>
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                    <Wheat className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="font-display font-semibold mb-1">{crop.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-2">{crop.desc}</p>
                <span className="text-xs text-primary flex items-center gap-1 group-hover:underline">Explore <ChevronRight className="h-3 w-3" /></span>
              </button>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
