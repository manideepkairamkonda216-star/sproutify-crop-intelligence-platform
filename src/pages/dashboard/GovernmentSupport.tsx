import DashboardNavbar from "@/components/DashboardNavbar";
import { Landmark, Phone, ExternalLink, BookOpen, IndianRupee, GraduationCap, ShieldCheck } from "lucide-react";

const schemes = [
  {
    name: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
    desc: "Direct income support of ₹6,000/year in three installments to small and marginal farmer families.",
    eligibility: "All landholding farmer families with cultivable land",
    benefit: "₹6,000/year",
    link: "https://pmkisan.gov.in",
  },
  {
    name: "PM Fasal Bima Yojana (PMFBY)",
    desc: "Comprehensive crop insurance scheme covering losses from natural calamities, pests, and diseases.",
    eligibility: "All farmers growing notified crops in notified areas",
    benefit: "Insurance coverage at 1.5-5% premium",
    link: "https://pmfby.gov.in",
  },
  {
    name: "Soil Health Card Scheme",
    desc: "Free soil testing and nutrient-based crop recommendations to improve productivity and reduce fertilizer costs.",
    eligibility: "All farmers across India",
    benefit: "Free soil analysis + fertilizer recommendations",
    link: "https://soilhealth.dac.gov.in",
  },
  {
    name: "Kisan Credit Card (KCC)",
    desc: "Provides affordable short-term credit to farmers for crop production, post-harvest expenses, and consumption needs.",
    eligibility: "All farmers, fishermen, and animal husbandry farmers",
    benefit: "Credit at 4% interest (with subsidy)",
    link: "https://www.pmkisan.gov.in",
  },
  {
    name: "National Mission on Sustainable Agriculture (NMSA)",
    desc: "Promotes sustainable practices like rainfed area development, soil health management, and climate adaptation.",
    eligibility: "Farmers in rainfed and vulnerable regions",
    benefit: "Subsidies up to 50% on sustainable farming inputs",
    link: "https://nmsa.dac.gov.in",
  },
];

const subsidies = [
  { crop: "Rice (Paddy)", msp: "₹2,300/quintal", subsidy: "Seeds, fertilizer, and irrigation subsidies available" },
  { crop: "Wheat", msp: "₹2,275/quintal", subsidy: "Input subsidy for certified seeds and micro-irrigation" },
  { crop: "Cotton", msp: "₹7,121/quintal (long staple)", subsidy: "Technology Mission on Cotton subsidy up to 50%" },
  { crop: "Sugarcane", msp: "₹315/quintal (FRP)", subsidy: "State-level subsidies for drip irrigation and machinery" },
  { crop: "Pulses (Moong)", msp: "₹8,558/quintal", subsidy: "NFSM subsidy for certified seeds and plant protection" },
];

const helplines = [
  { name: "Kisan Call Center", number: "1800-180-1551", desc: "24/7 toll-free helpline for farming queries in local languages", icon: Phone },
  { name: "PM-KISAN Helpline", number: "011-24300606", desc: "For PM-KISAN registration, status, and payment queries", icon: IndianRupee },
  { name: "Crop Insurance Helpline", number: "1800-200-7710", desc: "PMFBY claim status, registration, and grievance redressal", icon: ShieldCheck },
  { name: "Soil Health Helpline", number: "1800-180-1551", desc: "Soil testing, card status, and nutrient recommendations", icon: BookOpen },
];

const resources = [
  { title: "ICAR - Indian Council of Agricultural Research", desc: "Research publications, crop advisories, and technology recommendations", url: "https://icar.org.in" },
  { title: "eNAM - National Agriculture Market", desc: "Online trading platform for agricultural commodities", url: "https://enam.gov.in" },
  { title: "Agmarknet - Agricultural Marketing", desc: "Daily mandi prices, arrivals, and commodity trends", url: "https://agmarknet.gov.in" },
  { title: "mKisan Portal", desc: "SMS-based advisories, weather alerts, and market prices for farmers", url: "https://mkisan.gov.in" },
];

export default function GovernmentSupport() {
  return (
    <>
      <DashboardNavbar title="Government Support & Schemes" />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-2">
              <Landmark className="h-6 w-6 text-primary" />
              <h2 className="font-display text-xl font-bold">Government Schemes & Agricultural Support</h2>
            </div>
            <p className="text-sm text-muted-foreground">Access information on government schemes, subsidies, helplines, and educational resources designed to support Indian farmers.</p>
          </div>

          {/* Schemes */}
          <section>
            <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
              <Landmark className="h-5 w-5 text-primary" /> Active Government Schemes
            </h3>
            <div className="space-y-4">
              {schemes.map((s, i) => (
                <div key={i} className="glass-card p-5 hover-lift">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-display font-semibold text-base mb-1">{s.name}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
                      <div className="flex flex-wrap gap-4 text-xs">
                        <span className="text-muted-foreground"><strong className="text-foreground">Eligibility:</strong> {s.eligibility}</span>
                        <span className="text-muted-foreground"><strong className="text-primary">Benefit:</strong> {s.benefit}</span>
                      </div>
                    </div>
                    <a href={s.link} target="_blank" rel="noopener noreferrer" className="shrink-0">
                      <span className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline">
                        Visit Portal <ExternalLink className="h-3 w-3" />
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Subsidies / MSP */}
          <section>
            <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
              <IndianRupee className="h-5 w-5 text-primary" /> Crop MSP & Subsidies (2025-26)
            </h3>
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/30">
                      <th className="text-left px-5 py-3 text-muted-foreground font-medium">Crop</th>
                      <th className="text-left px-5 py-3 text-muted-foreground font-medium">MSP</th>
                      <th className="text-left px-5 py-3 text-muted-foreground font-medium">Available Subsidies</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subsidies.map((s, i) => (
                      <tr key={i} className="border-b border-border/20 last:border-0">
                        <td className="px-5 py-3 font-medium">{s.crop}</td>
                        <td className="px-5 py-3 text-primary font-semibold">{s.msp}</td>
                        <td className="px-5 py-3 text-muted-foreground">{s.subsidy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Helplines */}
          <section>
            <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" /> Farmer Helplines
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {helplines.map((h, i) => (
                <div key={i} className="glass-card p-5 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                      <h.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-sm">{h.name}</h4>
                      <p className="text-lg font-bold text-primary mt-1">{h.number}</p>
                      <p className="text-xs text-muted-foreground mt-1">{h.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Educational Resources */}
          <section>
            <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" /> Educational Resources
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {resources.map((r, i) => (
                <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" className="glass-card p-5 hover-lift group">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="font-display font-semibold text-sm group-hover:text-primary transition-colors">{r.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{r.desc}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
