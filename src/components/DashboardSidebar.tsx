import { Sprout, LayoutDashboard, Scan, CloudSun, MessageSquare, Wheat, Info, Settings, LogOut, BarChart3, Landmark, Heart } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Scan, label: "Crop Detection", path: "/dashboard/detect" },
  { icon: BarChart3, label: "Yield Prediction", path: "/dashboard/yield" },
  { icon: CloudSun, label: "Weather", path: "/dashboard/weather" },
  { icon: MessageSquare, label: "AI Chat", path: "/dashboard/chat" },
  { icon: Landmark, label: "Govt Support", path: "/dashboard/government" },
  { icon: Heart, label: "Farmer Assist", path: "/dashboard/assist" },
  { icon: Wheat, label: "Crops", path: "/crops" },
  { icon: Info, label: "About", path: "/about" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export default function DashboardSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <aside className="w-64 min-h-screen border-r border-border/30 bg-card/50 backdrop-blur-sm flex flex-col">
      <Link to="/" className="flex items-center gap-2 px-6 py-5 border-b border-border/30">
        <Sprout className="h-6 w-6 text-primary" />
        <span className="font-display text-lg font-bold gradient-text">Sproutify</span>
      </Link>

      <nav className="flex-1 px-3 py-4 space-y-1 overflow-auto">
        {navItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                active
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 py-4 border-t border-border/30">
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 w-full transition-all"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
