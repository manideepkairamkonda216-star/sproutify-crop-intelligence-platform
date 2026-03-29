import DashboardNavbar from "@/components/DashboardNavbar";
import { Phone, Heart, Calendar, Sun, CloudRain, Snowflake, Thermometer, Leaf, AlertTriangle, CheckCircle } from "lucide-react";

const emergencyContacts = [
  { name: "Kisan Call Center (24/7)", number: "1800-180-1551", desc: "Free helpline for all farming queries in 22 languages" },
  { name: "National Emergency", number: "112", desc: "For weather emergencies, floods, and natural disasters" },
  { name: "Animal Husbandry Helpline", number: "1800-180-1551", desc: "Livestock health, vaccination, and disease reporting" },
  { name: "Pesticide Poisoning Helpline", number: "1800-11-6117", desc: "Medical assistance for pesticide exposure or poisoning" },
  { name: "NABARD Helpline", number: "022-26539895", desc: "Rural credit, self-help groups, and financial assistance" },
  { name: "Weather Alert (IMD)", number: "1800-180-1717", desc: "Severe weather warnings and cyclone alerts" },
];

const seasonalAdvice = [
  {
    season: "Kharif (June - October)",
    icon: CloudRain,
    color: "text-secondary",
    crops: "Rice, Cotton, Maize, Soybean, Groundnut, Jute",
    tips: [
      "Prepare nursery beds for rice 25-30 days before transplanting",
      "Apply pre-emergence herbicides within 3 days of transplanting",
      "Monitor for stem borer and leaf folder in rice fields weekly",
      "Install pheromone traps for bollworm management in cotton",
      "Ensure proper drainage channels before monsoon onset",
    ],
  },
  {
    season: "Rabi (October - March)",
    icon: Snowflake,
    color: "text-primary",
    crops: "Wheat, Mustard, Gram, Barley, Peas, Linseed",
    tips: [
      "Complete wheat sowing by mid-November for optimal yield",
      "Apply first irrigation (crown root initiation) at 21-25 days",
      "Monitor for aphids in mustard — spray Dimethoate 30 EC if needed",
      "Apply Urea top-dressing in wheat at tillering and flag leaf stage",
      "Protect crops from frost using light irrigation in evening hours",
    ],
  },
  {
    season: "Zaid (March - June)",
    icon: Sun,
    color: "text-yellow-400",
    crops: "Watermelon, Muskmelon, Cucumber, Moong, Fodder crops",
    tips: [
      "Use mulching to conserve soil moisture during hot months",
      "Schedule irrigation in early morning or late evening to reduce evaporation",
      "Apply neem-based pesticides for organic pest management",
      "Harvest Zaid pulses when 80% pods turn brown to avoid shattering",
      "Start nursery preparation for Kharif crops from mid-May",
    ],
  },
];

const careTips = [
  {
    category: "Soil Health",
    icon: Leaf,
    tips: [
      "Get soil tested every 2-3 years through Soil Health Card scheme (free)",
      "Maintain soil pH between 6.0-7.5 for most crops — apply lime for acidic soils",
      "Add 5-10 tonnes/hectare of farmyard manure annually to improve organic carbon",
      "Practice green manuring with Dhaincha or Sunhemp before Kharif planting",
    ],
  },
  {
    category: "Water Management",
    icon: CloudRain,
    tips: [
      "Adopt drip irrigation to save 30-50% water and increase yield by 20-30%",
      "Use tensiometer or feel method to schedule irrigation based on soil moisture",
      "Avoid over-irrigation — it leads to root rot, nutrient leaching, and waterlogging",
      "Harvest rainwater using farm ponds — govt subsidy available up to 50%",
    ],
  },
  {
    category: "Pest Management (IPM)",
    icon: AlertTriangle,
    tips: [
      "Scout fields at least twice weekly and maintain a pest diary",
      "Use yellow sticky traps for whitefly and blue traps for thrips",
      "Release Trichogramma cards (50,000/hectare) for stem borer control",
      "Apply neem seed kernel extract (5%) as first line of defense before chemicals",
    ],
  },
  {
    category: "Post-Harvest",
    icon: CheckCircle,
    tips: [
      "Dry grains to 12-14% moisture before storage to prevent fungal growth",
      "Use hermetic storage bags (Purdue Improved Crop Storage) for pulse storage",
      "Clean storage structures thoroughly and apply malathion spray before stocking",
      "Sell through eNAM platform to get competitive prices from multiple mandis",
    ],
  },
];

export default function FarmerAssistance() {
  return (
    <>
      <DashboardNavbar title="Farmer Assistance" />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Emergency Contacts */}
          <section>
            <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
              <Phone className="h-5 w-5 text-destructive" /> Emergency Contacts
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {emergencyContacts.map((c, i) => (
                <div key={i} className="glass-card p-5 hover-lift">
                  <h4 className="font-display font-semibold text-sm mb-1">{c.name}</h4>
                  <p className="text-xl font-bold text-primary mb-1">{c.number}</p>
                  <p className="text-xs text-muted-foreground">{c.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Seasonal Advice */}
          <section>
            <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" /> Seasonal Crop Advice
            </h3>
            <div className="space-y-4">
              {seasonalAdvice.map((s, i) => (
                <div key={i} className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                      <s.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold">{s.season}</h4>
                      <p className="text-xs text-muted-foreground">Crops: {s.crops}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 ml-[52px]">
                    {s.tips.map((t, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Crop Care Tips */}
          <section>
            <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" /> Crop Care Best Practices
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {careTips.map((c, i) => (
                <div key={i} className="glass-card p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <c.icon className="h-5 w-5 text-primary" />
                    <h4 className="font-display font-semibold">{c.category}</h4>
                  </div>
                  <ul className="space-y-3">
                    {c.tips.map((t, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <span className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">{j + 1}</span>
                        <span className="text-muted-foreground">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
