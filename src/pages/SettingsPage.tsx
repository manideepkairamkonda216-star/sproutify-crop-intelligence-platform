import { useState } from "react";
import DashboardNavbar from "@/components/DashboardNavbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

export default function SettingsPage() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [notifications, setNotifications] = useState(true);
  const { toast } = useToast();

  const handleSave = () => {
    toast({ title: "Settings saved", description: "Your profile has been updated." });
  };

  return (
    <>
      <DashboardNavbar title="Settings" />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="glass-card p-6 space-y-4 animate-fade-in">
            <h3 className="font-display font-semibold text-lg">Profile Settings</h3>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-muted/50 border-border/50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="settings-email">Email</Label>
              <Input id="settings-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-muted/50 border-border/50" />
            </div>
          </div>

          <div className="glass-card p-6 space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-display font-semibold text-lg">Preferences</h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Email Notifications</p>
                <p className="text-xs text-muted-foreground">Receive alerts about crop health</p>
              </div>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </div>
          </div>

          <Button onClick={handleSave} className="w-full gradient-bg text-primary-foreground font-semibold hover:opacity-90">
            Save Changes
          </Button>
        </div>
      </main>
    </>
  );
}
