import { useState } from "react";
import DashboardNavbar from "@/components/DashboardNavbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useLanguage, type Language } from "@/contexts/LanguageContext";

const languageLabels: Record<Language, string> = {
  en: "English",
  hi: "हिन्दी (Hindi)",
  te: "తెలుగు (Telugu)",
};

export default function SettingsPage() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [notifications, setNotifications] = useState(true);
  const { toast } = useToast();
  const { language, setLanguage, t } = useLanguage();

  const handleSave = () => {
    toast({ title: "Settings saved", description: "Your profile has been updated." });
  };

  return (
    <>
      <DashboardNavbar title={t("settings")} />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="glass-card p-6 space-y-4 animate-fade-in">
            <h3 className="font-display font-semibold text-lg">{t("profileSettings")}</h3>
            <div className="space-y-2">
              <Label htmlFor="name">{t("fullName")}</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-muted/50 border-border/50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="settings-email">{t("email")}</Label>
              <Input id="settings-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-muted/50 border-border/50" />
            </div>
          </div>

          <div className="glass-card p-6 space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-display font-semibold text-lg">{t("preferences")}</h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">{t("emailNotifications")}</p>
                <p className="text-xs text-muted-foreground">{t("receiveAlerts")}</p>
              </div>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">{t("language")}</p>
                <p className="text-xs text-muted-foreground">{t("languageDesc")}</p>
              </div>
              <Select value={language} onValueChange={(v) => setLanguage(v as Language)}>
                <SelectTrigger className="w-44 h-9 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {(Object.entries(languageLabels) as [Language, string][]).map(([code, label]) => (
                    <SelectItem key={code} value={code}>{label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button onClick={handleSave} className="w-full gradient-bg text-primary-foreground font-semibold hover:opacity-90">
            {t("saveChanges")}
          </Button>
        </div>
      </main>
    </>
  );
}
