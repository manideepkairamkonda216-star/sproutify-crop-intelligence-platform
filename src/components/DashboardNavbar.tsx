import { Bell, User, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

export default function DashboardNavbar({ title }: { title: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="h-16 border-b border-border/30 bg-card/30 backdrop-blur-sm flex items-center justify-between px-6">
      <h1 className="font-display text-lg font-semibold">{title}</h1>
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" onClick={toggleTheme}>
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <Bell className="h-5 w-5" />
        </Button>
        <Link to="/profile">
          <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <User className="h-4 w-4 text-primary-foreground" />
          </div>
        </Link>
      </div>
    </header>
  );
}
