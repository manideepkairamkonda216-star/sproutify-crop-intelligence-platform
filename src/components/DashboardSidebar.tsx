import { Sprout, LayoutDashboard, Scan, CloudSun, MessageSquare, Wheat, Info, Settings, LogOut, BarChart3, Landmark, Heart, MapPin, ShoppingCart, Droplets, User } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const navItems = [
  { icon: LayoutDashboard, labelKey: "dashboard", path: "/dashboard" },
  { icon: Scan, labelKey: "cropDetection", path: "/dashboard/detect" },
  { icon: BarChart3, labelKey: "yieldPrediction", path: "/dashboard/yield" },
  { icon: CloudSun, labelKey: "weather", path: "/dashboard/weather" },
  { icon: Droplets, labelKey: "waterManagement", path: "/dashboard/water" },
  { icon: MessageSquare, labelKey: "aiChat", path: "/dashboard/chat" },
  { icon: Landmark, labelKey: "govtSupport", path: "/dashboard/government" },
  { icon: Heart, labelKey: "farmerAssist", path: "/dashboard/assist" },
  { icon: MapPin, labelKey: "agriMap", path: "/dashboard/map" },
  { icon: ShoppingCart, labelKey: "products", path: "/dashboard/products" },
  { icon: Wheat, labelKey: "crops", path: "/crops" },
  { icon: Info, labelKey: "about", path: "/about" },
  { icon: Settings, labelKey: "settings", path: "/settings" },
];

export default function DashboardSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <aside className="w-64 min-h-screen border-r border-border/30 bg-card/50 backdrop-blur-sm flex flex-col">
      <Link to="/" className="flex items-center gap-2 px-6 py-5 border-b border-border/30">
        <Sprout className="h-6 w-6 text-primary" />
        <span className="font-display text-lg font-bold gradient-text">Agrocare</span>
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
              {t(item.labelKey)}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 py-4 border-t border-border/30 space-y-1">
        <Link
          to="/profile"
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
            location.pathname === "/profile"
              ? "bg-primary/10 text-primary font-medium"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          }`}
        >
          <User className="h-4 w-4" />
          {t("profile")}
        </Link>
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 w-full transition-all"
        >
          <LogOut className="h-4 w-4" />
          {t("signOut")}
        </button>
      </div>
    </aside>
  );
}
