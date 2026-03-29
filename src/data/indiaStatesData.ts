export interface CropInfo {
  name: string;
  icon: string;
}

export interface DiseaseInfo {
  name: string;
  severity: "Low" | "Medium" | "High";
  description: string;
}

export interface ProductInfo {
  name: string;
  type: "Fertilizer" | "Pesticide" | "Fungicide";
  description: string;
  usage: string;
}

export interface StateData {
  name: string;
  crops: CropInfo[];
  soilType: string;
  soilDescription: string;
  diseases: DiseaseInfo[];
  climate: {
    tempRange: string;
    rainfall: string;
    seasons: string;
  };
  aiInsights: {
    bestCrops: string[];
    risks: string[];
    actions: string[];
  };
  products: ProductInfo[];
}

export const statesData: Record<string, StateData> = {
  "Punjab": {
    name: "Punjab",
    crops: [
      { name: "Wheat", icon: "🌾" },
      { name: "Rice", icon: "🍚" },
      { name: "Cotton", icon: "🧶" },
      { name: "Sugarcane", icon: "🎋" },
    ],
    soilType: "Alluvial Soil",
    soilDescription: "Highly fertile, rich in potash and organic content. Ideal for intensive agriculture.",
    diseases: [
      { name: "Yellow Rust", severity: "High", description: "Fungal disease affecting wheat in cool, humid conditions." },
      { name: "Bacterial Leaf Blight", severity: "Medium", description: "Affects rice during monsoon season with lesions on leaves." },
    ],
    climate: { tempRange: "4°C – 45°C", rainfall: "460–640 mm", seasons: "Rabi (Oct–Mar), Kharif (Jun–Oct)" },
    aiInsights: {
      bestCrops: ["Wheat (Rabi)", "Basmati Rice", "Mustard"],
      risks: ["Water table depletion from paddy", "Stubble burning pollution"],
      actions: ["Adopt drip irrigation", "Consider crop diversification", "Use bio-decomposer for stubble"],
    },
    products: [
      { name: "DAP (Di-Ammonium Phosphate)", type: "Fertilizer", description: "46% P₂O₅ content for strong root development in wheat.", usage: "Basal application at sowing" },
      { name: "Propiconazole 25% EC", type: "Fungicide", description: "Systemic fungicide effective against rust diseases.", usage: "Spray at tillering stage" },
      { name: "Imidacloprid 17.8% SL", type: "Pesticide", description: "Controls sucking pests in cotton and rice.", usage: "Foliar spray at pest onset" },
    ],
  },
  "Maharashtra": {
    name: "Maharashtra",
    crops: [
      { name: "Sugarcane", icon: "🎋" },
      { name: "Cotton", icon: "🧶" },
      { name: "Soybean", icon: "🫘" },
      { name: "Onion", icon: "🧅" },
    ],
    soilType: "Black (Regur) Soil",
    soilDescription: "High moisture retention, rich in calcium, magnesium, and iron. Excellent for cotton.",
    diseases: [
      { name: "Red Rot", severity: "High", description: "Major sugarcane disease causing internal tissue decay." },
      { name: "Bollworm", severity: "High", description: "Devastating cotton pest affecting boll formation." },
    ],
    climate: { tempRange: "12°C – 42°C", rainfall: "600–4500 mm", seasons: "Kharif dominant; Rabi in irrigated zones" },
    aiInsights: {
      bestCrops: ["Soybean (Kharif)", "Tur Dal", "Cotton (Bt)"],
      risks: ["Erratic rainfall in Marathwada", "Bollworm resistance to pesticides"],
      actions: ["Install drip for sugarcane", "Use pheromone traps for bollworm", "Soil testing before sowing"],
    },
    products: [
      { name: "MOP (Muriate of Potash)", type: "Fertilizer", description: "60% K₂O for sugarcane and cotton.", usage: "Top dressing at 45 DAS" },
      { name: "Chlorantraniliprole 18.5% SC", type: "Pesticide", description: "Controls bollworm with long residual activity.", usage: "Spray at square/boll stage" },
      { name: "Carbendazim 50% WP", type: "Fungicide", description: "Broad-spectrum fungicide for red rot in sugarcane.", usage: "Sett treatment before planting" },
    ],
  },
  "Uttar Pradesh": {
    name: "Uttar Pradesh",
    crops: [
      { name: "Wheat", icon: "🌾" },
      { name: "Rice", icon: "🍚" },
      { name: "Sugarcane", icon: "🎋" },
      { name: "Potato", icon: "🥔" },
    ],
    soilType: "Alluvial Soil",
    soilDescription: "Indo-Gangetic plain with new and old alluvium. Extremely productive for cereals.",
    diseases: [
      { name: "Late Blight", severity: "High", description: "Devastating potato disease in cool wet weather." },
      { name: "Smut (Sugarcane)", severity: "Medium", description: "Whip-like growth at top of sugarcane plant." },
    ],
    climate: { tempRange: "3°C – 47°C", rainfall: "650–1000 mm", seasons: "Rabi & Kharif balanced" },
    aiInsights: {
      bestCrops: ["Wheat (HD-3226)", "Early potato varieties", "Mentha"],
      risks: ["Late blight in potato belt", "Sugarcane arrears from mills"],
      actions: ["Prophylactic spraying for blight", "Use certified seed potatoes", "Explore contract farming"],
    },
    products: [
      { name: "Urea (46% N)", type: "Fertilizer", description: "Primary nitrogen source for wheat and rice.", usage: "Split application: sowing + tillering" },
      { name: "Mancozeb 75% WP", type: "Fungicide", description: "Contact fungicide for early/late blight.", usage: "Preventive spray every 10 days" },
      { name: "Cartap Hydrochloride 4G", type: "Pesticide", description: "Granular insecticide for stem borer in rice.", usage: "Broadcast in standing water" },
    ],
  },
  "Tamil Nadu": {
    name: "Tamil Nadu",
    crops: [
      { name: "Rice", icon: "🍚" },
      { name: "Banana", icon: "🍌" },
      { name: "Coconut", icon: "🥥" },
      { name: "Turmeric", icon: "🟡" },
    ],
    soilType: "Red & Laterite Soil",
    soilDescription: "Rich in iron oxides, well-drained. Suitable for plantation crops with proper fertilization.",
    diseases: [
      { name: "Blast (Rice)", severity: "High", description: "Fungal disease causing diamond-shaped lesions on rice leaves." },
      { name: "Sigatoka (Banana)", severity: "Medium", description: "Leaf spot disease reducing photosynthetic area." },
    ],
    climate: { tempRange: "20°C – 38°C", rainfall: "800–1400 mm", seasons: "NE Monsoon (Oct–Dec) dominant" },
    aiInsights: {
      bestCrops: ["Short-duration rice (Samba)", "Banana (Grand Naine)", "Millets"],
      risks: ["Cyclone damage during NE monsoon", "Water scarcity in western districts"],
      actions: ["Adopt SRI method for rice", "Strengthen banana with propping", "Micro-irrigation for turmeric"],
    },
    products: [
      { name: "Neem Cake", type: "Fertilizer", description: "Organic manure with pest-repellent properties.", usage: "Soil application at 250 kg/ha" },
      { name: "Tricyclazole 75% WP", type: "Fungicide", description: "Systemic fungicide specific to rice blast.", usage: "Spray at boot leaf stage" },
      { name: "Fipronil 5% SC", type: "Pesticide", description: "Effective against stem borer and leaf folder.", usage: "Foliar spray at ETL" },
    ],
  },
  "Madhya Pradesh": {
    name: "Madhya Pradesh",
    crops: [
      { name: "Soybean", icon: "🫘" },
      { name: "Wheat", icon: "🌾" },
      { name: "Gram", icon: "🟤" },
      { name: "Lentil", icon: "🫘" },
    ],
    soilType: "Black & Mixed Red Soil",
    soilDescription: "Malwa plateau has rich black soil; Bundelkhand has mixed red-yellow soils.",
    diseases: [
      { name: "Soybean Rust", severity: "High", description: "Asian rust causing rapid defoliation in soybean." },
      { name: "Wilt (Gram)", severity: "Medium", description: "Fusarium wilt affecting chickpea in warm soils." },
    ],
    climate: { tempRange: "5°C – 45°C", rainfall: "800–1400 mm", seasons: "Kharif (soybean), Rabi (wheat/gram)" },
    aiInsights: {
      bestCrops: ["Soybean (JS 2034)", "Gram (JG 14)", "Wheat (Lok-1)"],
      risks: ["Irregular monsoon onset", "Rust in soybean belt"],
      actions: ["Seed treatment with Trichoderma", "Timely sowing before June 25", "Intercropping soybean with pigeon pea"],
    },
    products: [
      { name: "SSP (Single Super Phosphate)", type: "Fertilizer", description: "16% P₂O₅ plus 11% sulphur for soybean.", usage: "Basal dose at sowing" },
      { name: "Hexaconazole 5% EC", type: "Fungicide", description: "Effective systemic fungicide for rust control.", usage: "Spray at R3 stage (pod set)" },
      { name: "Quinalphos 25% EC", type: "Pesticide", description: "Controls girdle beetle and stem fly.", usage: "Spray at 30 DAS" },
    ],
  },
  "West Bengal": {
    name: "West Bengal",
    crops: [
      { name: "Rice", icon: "🍚" },
      { name: "Jute", icon: "🧵" },
      { name: "Tea", icon: "🍵" },
      { name: "Potato", icon: "🥔" },
    ],
    soilType: "Alluvial & Terai Soil",
    soilDescription: "Gangetic delta alluvium ideal for rice; north has acidic terai soil for tea.",
    diseases: [
      { name: "Sheath Blight", severity: "High", description: "Major rice disease in high-humidity lowlands." },
      { name: "Brown Spot (Rice)", severity: "Medium", description: "Nutrient-deficiency linked fungal disease." },
    ],
    climate: { tempRange: "10°C – 40°C", rainfall: "1200–2500 mm", seasons: "Aman (Kharif), Boro (Rabi) rice seasons" },
    aiInsights: {
      bestCrops: ["Aman Rice (Swarna)", "Boro Rice", "Mustard"],
      risks: ["Flooding in delta regions", "Sheath blight in dense canopy"],
      actions: ["Use resistant varieties", "Optimize planting density", "Balanced NPK + Zinc"],
    },
    products: [
      { name: "Zinc Sulphate 21%", type: "Fertilizer", description: "Corrects zinc deficiency in rice paddies.", usage: "25 kg/ha as basal" },
      { name: "Validamycin 3% SL", type: "Fungicide", description: "Antibiotic fungicide for sheath blight.", usage: "Spray at maximum tillering" },
      { name: "Chlorpyrifos 20% EC", type: "Pesticide", description: "Controls stem borer and BPH.", usage: "Apply at pest threshold" },
    ],
  },
  "Karnataka": {
    name: "Karnataka",
    crops: [
      { name: "Coffee", icon: "☕" },
      { name: "Rice", icon: "🍚" },
      { name: "Ragi", icon: "🌾" },
      { name: "Arecanut", icon: "🌴" },
    ],
    soilType: "Laterite & Red Soil",
    soilDescription: "Western ghats have laterite; Deccan plateau has red and black mixed soils.",
    diseases: [
      { name: "Coffee Rust", severity: "High", description: "Orange powdery spots on coffee leaves reducing yield." },
      { name: "Blast (Ragi)", severity: "Medium", description: "Neck blast in finger millet causing chaffy grains." },
    ],
    climate: { tempRange: "15°C – 38°C", rainfall: "500–4000 mm", seasons: "SW Monsoon (Jun–Sep) primary" },
    aiInsights: {
      bestCrops: ["Robusta Coffee", "Ragi (GPU 28)", "Maize"],
      risks: ["White stem borer in coffee", "Drought in north Karnataka"],
      actions: ["Shade management in coffee", "Drip fertigation for arecanut", "Rainfed millets for dry zones"],
    },
    products: [
      { name: "Coffee Special Mix (NPK)", type: "Fertilizer", description: "Customized NPK ratio for arabica and robusta.", usage: "Apply in 2 splits: pre/post monsoon" },
      { name: "Bordeaux Mixture", type: "Fungicide", description: "Copper-based fungicide for coffee rust.", usage: "Spray before monsoon onset" },
      { name: "Beauveria bassiana", type: "Pesticide", description: "Bio-pesticide for white stem borer.", usage: "Trunk injection + soil drench" },
    ],
  },
  "Rajasthan": {
    name: "Rajasthan",
    crops: [
      { name: "Bajra", icon: "🌾" },
      { name: "Mustard", icon: "🌻" },
      { name: "Cumin", icon: "🫙" },
      { name: "Guar", icon: "🌿" },
    ],
    soilType: "Desert & Sandy Soil",
    soilDescription: "Arid sandy soils with low moisture retention. Requires drip irrigation and mulching.",
    diseases: [
      { name: "Downy Mildew (Bajra)", severity: "High", description: "Green ear disease reducing grain formation." },
      { name: "White Rust (Mustard)", severity: "Medium", description: "Albugo fungus causing white pustules on leaves." },
    ],
    climate: { tempRange: "2°C – 50°C", rainfall: "200–500 mm", seasons: "Kharif (short), Rabi dominant" },
    aiInsights: {
      bestCrops: ["Bajra (HHB 67)", "Mustard (RH-749)", "Cluster Bean"],
      risks: ["Extreme heat stress", "Desert locust incursion"],
      actions: ["Adopt drought-tolerant varieties", "Mulching for moisture conservation", "Monitor locust alerts from FAO"],
    },
    products: [
      { name: "Gypsum (CaSO₄)", type: "Fertilizer", description: "Soil amendment for alkaline soils, provides sulphur.", usage: "2.5 ton/ha for sodic soil" },
      { name: "Metalaxyl 35% WS", type: "Fungicide", description: "Seed-treatment for downy mildew in bajra.", usage: "6g per kg seed before sowing" },
      { name: "Lambda Cyhalothrin 5% EC", type: "Pesticide", description: "Rapid knockdown for locust and pod borer.", usage: "ULV spraying at swarm sighting" },
    ],
  },
  "Gujarat": {
    name: "Gujarat",
    crops: [
      { name: "Cotton", icon: "🧶" },
      { name: "Groundnut", icon: "🥜" },
      { name: "Cumin", icon: "🫙" },
      { name: "Castor", icon: "🌿" },
    ],
    soilType: "Black & Alluvial Soil",
    soilDescription: "Saurashtra has black soil; south Gujarat has deep alluvial, both highly productive.",
    diseases: [
      { name: "Tikka Disease (Groundnut)", severity: "Medium", description: "Circular spots on groundnut leaves reducing yield." },
      { name: "Whitefly (Cotton)", severity: "High", description: "Vector for CLCuV virus in cotton." },
    ],
    climate: { tempRange: "10°C – 44°C", rainfall: "400–2000 mm", seasons: "Kharif dominant; Rabi in irrigated belts" },
    aiInsights: {
      bestCrops: ["Bt Cotton", "Groundnut (GG-20)", "Castor"],
      risks: ["CLCuV via whitefly", "Salinity in coastal areas"],
      actions: ["Resistant cotton hybrids", "Neem-based whitefly management", "Drip irrigation for castor"],
    },
    products: [
      { name: "Sulphur 80% WDG", type: "Fertilizer", description: "Provides sulphur for groundnut pod development.", usage: "20 kg/ha at flowering" },
      { name: "Diafenthiuron 50% WP", type: "Pesticide", description: "Effective against whitefly in cotton.", usage: "Spray at ETL in early stage" },
      { name: "Tebuconazole 25.9% EC", type: "Fungicide", description: "Controls tikka and collar rot.", usage: "Spray at 35 and 50 DAS" },
    ],
  },
  "Kerala": {
    name: "Kerala",
    crops: [
      { name: "Rubber", icon: "🌳" },
      { name: "Coconut", icon: "🥥" },
      { name: "Pepper", icon: "🫑" },
      { name: "Cardamom", icon: "🌿" },
    ],
    soilType: "Laterite Soil",
    soilDescription: "Acidic, well-drained laterite with high iron. Suited for plantation crops with lime application.",
    diseases: [
      { name: "Quick Wilt (Pepper)", severity: "High", description: "Phytophthora infection causing rapid vine death." },
      { name: "Root Wilt (Coconut)", severity: "Medium", description: "Phytoplasma disease causing yellowing and flaccidity." },
    ],
    climate: { tempRange: "22°C – 36°C", rainfall: "2500–3500 mm", seasons: "SW Monsoon (Jun–Sep), NE Monsoon (Oct–Nov)" },
    aiInsights: {
      bestCrops: ["Rubber (RRII 105)", "Pepper (Panniyur-1)", "Nutmeg"],
      risks: ["Landslides during heavy rain", "Quick wilt in pepper gardens"],
      actions: ["Improve drainage in pepper beds", "Integrated nutrient management for coconut", "Terrace cultivation on slopes"],
    },
    products: [
      { name: "Dolomite Lime", type: "Fertilizer", description: "Corrects soil acidity and provides Ca + Mg.", usage: "1 kg/palm basin annually" },
      { name: "Potassium Phosphonate", type: "Fungicide", description: "Systemic anti-oomycete for Phytophthora.", usage: "Trunk injection + soil drench" },
      { name: "Neem Oil 1500 ppm", type: "Pesticide", description: "Bio-pesticide for mites and scale insects.", usage: "3 ml/litre foliar spray" },
    ],
  },
  "Andhra Pradesh": {
    name: "Andhra Pradesh",
    crops: [
      { name: "Rice", icon: "🍚" },
      { name: "Chilli", icon: "🌶️" },
      { name: "Cotton", icon: "🧶" },
      { name: "Mango", icon: "🥭" },
    ],
    soilType: "Black & Red Soil",
    soilDescription: "Coastal alluvium for rice; Rayalaseema has red soil suited for groundnut and chilli.",
    diseases: [
      { name: "Leaf Curl (Chilli)", severity: "High", description: "Virus transmitted by thrips causing leaf deformation." },
      { name: "BPH (Rice)", severity: "High", description: "Brown planthopper causing hopperburn in paddy." },
    ],
    climate: { tempRange: "18°C – 43°C", rainfall: "700–1200 mm", seasons: "Kharif & Rabi with canal irrigation" },
    aiInsights: {
      bestCrops: ["Rice (BPT 5204)", "Chilli (Guntur Sannam)", "Oil Palm"],
      risks: ["Cyclone damage on coast", "BPH resurgence from insecticide overuse"],
      actions: ["Use BPH-resistant rice varieties", "IPM for chilli pests", "Crop insurance enrollment"],
    },
    products: [
      { name: "Potash (KCl)", type: "Fertilizer", description: "Improves fruit quality in chilli and mango.", usage: "50 kg/ha at flowering" },
      { name: "Thiamethoxam 25% WG", type: "Pesticide", description: "Neonicotinoid for BPH and thrips.", usage: "Apply judiciously to avoid resistance" },
      { name: "Copper Oxychloride 50% WP", type: "Fungicide", description: "Controls die-back and anthracnose in chilli.", usage: "Spray at 15-day intervals" },
    ],
  },
  "Bihar": {
    name: "Bihar",
    crops: [
      { name: "Rice", icon: "🍚" },
      { name: "Wheat", icon: "🌾" },
      { name: "Maize", icon: "🌽" },
      { name: "Litchi", icon: "🍒" },
    ],
    soilType: "Alluvial Soil",
    soilDescription: "Young alluvial from Ganges and tributaries. Very fertile but flood-prone.",
    diseases: [
      { name: "Bacterial Leaf Streak", severity: "Medium", description: "Narrow brown streaks on rice leaves during humid weather." },
      { name: "Maize Stalk Rot", severity: "Medium", description: "Fungal decay of maize stalks in waterlogged conditions." },
    ],
    climate: { tempRange: "5°C – 44°C", rainfall: "1000–1500 mm", seasons: "Kharif (rice/maize), Rabi (wheat/potato)" },
    aiInsights: {
      bestCrops: ["Hybrid Maize", "Shahi Litchi", "Wheat (HD 2967)"],
      risks: ["Annual flooding in north Bihar", "Litchi fruit drop from heat stress"],
      actions: ["Flood-tolerant rice (Swarna Sub1)", "Mulching in litchi orchards", "Raised-bed wheat sowing"],
    },
    products: [
      { name: "Vermicompost", type: "Fertilizer", description: "Organic compost improving soil structure.", usage: "5 ton/ha as basal" },
      { name: "Streptocycline", type: "Fungicide", description: "Antibiotic for bacterial diseases in rice.", usage: "0.5g/litre + copper spray" },
      { name: "Emamectin Benzoate 5% SG", type: "Pesticide", description: "Controls stem borer and fruit borer.", usage: "0.4g/litre foliar spray" },
    ],
  },
};

// SVG path data for Indian states (simplified)
export const statePathsData: Record<string, { d: string; cx: number; cy: number }> = {
  "Rajasthan": { d: "M150,120 L200,100 L240,120 L250,160 L240,220 L200,240 L160,220 L140,180 Z", cx: 195, cy: 170 },
  "Gujarat": { d: "M120,220 L160,210 L180,230 L180,280 L160,310 L130,300 L110,270 L100,240 Z", cx: 145, cy: 265 },
  "Maharashtra": { d: "M180,280 L240,260 L300,280 L310,320 L280,350 L220,350 L180,330 Z", cx: 245, cy: 310 },
  "Karnataka": { d: "M200,350 L260,340 L290,360 L290,410 L260,430 L220,420 L200,390 Z", cx: 245, cy: 385 },
  "Kerala": { d: "M220,430 L240,420 L250,440 L240,490 L225,500 L215,470 Z", cx: 232, cy: 460 },
  "Tamil Nadu": { d: "M250,400 L300,380 L320,410 L310,460 L270,480 L250,450 Z", cx: 280, cy: 430 },
  "Andhra Pradesh": { d: "M260,330 L320,310 L350,340 L340,380 L300,390 L270,370 Z", cx: 305, cy: 355 },
  "Madhya Pradesh": { d: "M220,200 L300,190 L340,220 L330,260 L280,270 L230,260 Z", cx: 280, cy: 230 },
  "Uttar Pradesh": { d: "M260,120 L340,100 L380,130 L370,180 L320,190 L270,180 L250,150 Z", cx: 315, cy: 145 },
  "Bihar": { d: "M370,140 L420,130 L440,160 L420,180 L380,180 Z", cx: 405, cy: 158 },
  "West Bengal": { d: "M400,170 L430,160 L445,200 L440,260 L420,280 L400,240 L395,200 Z", cx: 420, cy: 215 },
  "Punjab": { d: "M230,60 L260,50 L280,70 L270,110 L240,120 L220,100 Z", cx: 250, cy: 82 },
};
