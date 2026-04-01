import { Leaf, LayoutDashboard, Scan, CloudSun, MessageSquare, Wheat, Info, Settings, LogOut, BarChart3, Landmark, Heart, MapPin, ShoppingCart, Droplets, User } from "lucide-react";
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
    <aside className="w-64 min-h-screen border-r border-border bg-card flex flex-col">
      <Link to="/" className="flex items-center gap-3 px-6 py-5 border-b border-border">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <Leaf className="h-4 w-4 text-primary-foreground" />
        </div>
        <span className="font-display text-lg font-bold text-primary">Agrocare</span>
      </Link>

      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-auto">
        {navItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors ${
                active
                  ? "bg-primary/10 text-primary font-medium border-l-2 border-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {t(item.labelKey)}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 py-4 border-t border-border space-y-0.5">
        <Link
          to="/profile"
          className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors ${
            location.pathname === "/profile"
              ? "bg-primary/10 text-primary font-medium"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
        >
          <User className="h-4 w-4" />
          {t("profile")}
        </Link>
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted w-full transition-colors"
        >
          <LogOut className="h-4 w-4" />
          {t("signOut")}
        </button>
      </div>
    </aside>
  );
}
