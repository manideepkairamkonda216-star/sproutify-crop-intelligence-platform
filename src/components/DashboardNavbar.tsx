import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardNavbar({ title }: { title: string }) {
  return (
    <header className="h-16 border-b border-border/30 bg-card/30 backdrop-blur-sm flex items-center justify-between px-6">
      <h1 className="font-display text-lg font-semibold">{title}</h1>
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <Bell className="h-5 w-5" />
        </Button>
        <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
          <User className="h-4 w-4 text-primary-foreground" />
        </div>
      </div>
    </header>
  );
}
