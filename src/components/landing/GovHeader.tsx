import { Phone, Globe, HelpCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/contexts/LanguageContext";

export default function GovHeader() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="bg-foreground text-background text-xs">
      <div className="container mx-auto px-4 sm:px-6 h-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline font-medium">
            Government of India | Ministry of Agriculture & Farmers' Welfare
          </span>
          <span className="sm:hidden font-medium">GOI | Min. of Agriculture</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1.5 opacity-80">
            <Phone className="h-3 w-3" />
            <span>Helpline: 1800-180-1551</span>
          </div>
          <div className="hidden md:flex items-center gap-1.5 opacity-80">
            <HelpCircle className="h-3 w-3" />
            <span>help@agrocare.gov.in</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Globe className="h-3 w-3 opacity-80" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-transparent border-none text-xs text-background outline-none cursor-pointer"
            >
              <option value="en" className="text-foreground">English</option>
              <option value="hi" className="text-foreground">हिन्दी</option>
              <option value="te" className="text-foreground">తెలుగు</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
