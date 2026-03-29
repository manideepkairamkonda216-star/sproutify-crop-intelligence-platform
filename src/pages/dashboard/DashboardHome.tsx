import DashboardNavbar from "@/components/DashboardNavbar";
import { Scan, CloudSun, MessageSquare, Leaf, TrendingUp, AlertTriangle, MapPin, BarChart3, Landmark, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Scans Today", value: "12", icon: Scan, color: "text-primary" },
  { label: "Diseases Found", value: "3", icon: AlertTriangle, color: "text-destructive" },
  { label: "Healthy Crops", value: "87%", icon: TrendingUp, color: "text-primary" },
  { label: "AI Queries", value: "28", icon: MessageSquare, color: "text-secondary" },
];

const quickActions = [
  { label: "Crop Detection", icon: Scan, path: "/dashboard/detect", desc: "Scan crops for diseases & get analysis" },
  { label: "Weather", icon: CloudSun, path: "/dashboard/weather", desc: "Check current conditions & forecasts" },
  { label: "AI Chat", icon: MessageSquare, path: "/dashboard/chat", desc: "Ask the AI crop advisor" },
  { label: "Yield Prediction", icon: BarChart3, path: "/dashboard/yield", desc: "Predict harvest & assess risk" },
  { label: "Govt Support", icon: Landmark, path: "/dashboard/government", desc: "Schemes, subsidies & helplines" },
  { label: "Farmer Assist", icon: Heart, path: "/dashboard/assist", desc: "Emergency contacts & seasonal tips" },
];

const cropRecommendations = [
  { crop: "Rice (Paddy)", suitability: 92, reason: "High humidity and warm temperatures ideal for transplanting", season: "Kharif" },
  { crop: "Tomato", suitability: 85, reason: "Current moderate temperatures support healthy vegetative growth", season: "Year-round" },
  { crop: "Maize", suitability: 78, reason: "Good soil moisture levels — ensure proper spacing for ventilation", season: "Kharif" },
  { crop: "Moong (Green Gram)", suitability: 70, reason: "Short duration crop suitable between main seasons", season: "Zaid" },
];

export default function DashboardHome() {
  return (
    <>
      <DashboardNavbar title="Dashboard" />
      <main className="flex-1 p-6 space-y-6 overflow-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="glass-card p-5 hover-lift">
              <div className="flex items-center justify-between mb-3">
                <s.icon className={`h-5 w-5 ${s.color}`} />
                <Leaf className="h-3 w-3 text-muted-foreground/30" />
              </div>
              <p className="font-display text-2xl font-bold">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="font-display text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {quickActions.map((a) => (
              <Link key={a.path} to={a.path} className="glass-card p-5 hover-lift group">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <a.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold mb-1">{a.label}</h3>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Location-based Crop Recommendations */}
        <div>
          <h2 className="font-display text-lg font-semibold mb-1 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" /> Best Crops to Grow Now
          </h2>
          <p className="text-xs text-muted-foreground mb-4">Based on current weather conditions and regional soil data</p>
          <div className="grid md:grid-cols-2 gap-4">
            {cropRecommendations.map((c, i) => (
              <div key={i} className="glass-card p-5 hover-lift">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-display font-semibold">{c.crop}</h4>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{c.season}</span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full gradient-bg rounded-full transition-all duration-700" style={{ width: `${c.suitability}%` }} />
                  </div>
                  <span className="text-sm font-semibold text-primary">{c.suitability}%</span>
                </div>
                <p className="text-xs text-muted-foreground">{c.reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="font-display text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="glass-card divide-y divide-border/30">
            {[
              { text: "Tomato leaf scan — Bacterial Spot detected (High severity)", time: "2 hours ago", type: "alert" },
              { text: "Yield prediction: Rice — Expected 48.3 quintals/hectare", time: "4 hours ago", type: "info" },
              { text: "Weather alert — Heavy rain expected in next 48 hours", time: "5 hours ago", type: "alert" },
              { text: "AI Chat — Fertilizer recommendation for wheat crop", time: "8 hours ago", type: "info" },
              { text: "Rice crop scan — Healthy (98% confidence)", time: "1 day ago", type: "success" },
            ].map((item, i) => (
              <div key={i} className="px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${item.type === "alert" ? "bg-destructive" : item.type === "success" ? "bg-primary" : "bg-secondary"}`} />
                  <p className="text-sm">{item.text}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
