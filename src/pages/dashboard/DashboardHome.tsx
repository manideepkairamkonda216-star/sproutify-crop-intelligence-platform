import DashboardNavbar from "@/components/DashboardNavbar";
import { Scan, CloudSun, MessageSquare, Leaf, TrendingUp, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Scans Today", value: "12", icon: Scan, color: "text-primary" },
  { label: "Diseases Found", value: "3", icon: AlertTriangle, color: "text-destructive" },
  { label: "Healthy Crops", value: "87%", icon: TrendingUp, color: "text-primary" },
  { label: "AI Queries", value: "28", icon: MessageSquare, color: "text-secondary" },
];

const quickActions = [
  { label: "Crop Detection", icon: Scan, path: "/dashboard/detect", desc: "Scan your crops for diseases" },
  { label: "Weather", icon: CloudSun, path: "/dashboard/weather", desc: "Check current conditions" },
  { label: "AI Chat", icon: MessageSquare, path: "/dashboard/chat", desc: "Ask the AI assistant" },
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

        {/* Recent Activity */}
        <div>
          <h2 className="font-display text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="glass-card divide-y divide-border/30">
            {[
              { text: "Tomato leaf scan - Bacterial Spot detected", time: "2 hours ago" },
              { text: "Weather alert - Heavy rain expected", time: "5 hours ago" },
              { text: "Rice crop scan - Healthy", time: "1 day ago" },
            ].map((item, i) => (
              <div key={i} className="px-5 py-4 flex items-center justify-between">
                <p className="text-sm">{item.text}</p>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
