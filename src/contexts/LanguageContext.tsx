import { createContext, useContext, useState, type ReactNode } from "react";

export type Language = "en" | "hi" | "te";

type Translations = Record<string, Record<Language, string>>;

const translations: Translations = {
  "dashboard": { en: "Home", hi: "होम", te: "హోమ్" },
  "cropDetection": { en: "Crop Detection", hi: "फसल पहचान", te: "పంట గుర్తింపు" },
  "yieldPrediction": { en: "Yield Prediction", hi: "उपज भविष्यवाणी", te: "దిగుబడి అంచనా" },
  "weather": { en: "Weather", hi: "मौसम", te: "వాతావరణం" },
  "waterManagement": { en: "Water Management", hi: "जल प्रबंधन", te: "నీటి నిర్వహణ" },
  "aiChat": { en: "AI Chat", hi: "एआई चैट", te: "ఏఐ చాట్" },
  "govtSupport": { en: "Govt Support", hi: "सरकारी सहायता", te: "ప్రభుత్వ సహాయం" },
  "farmerAssist": { en: "Farmer Assist", hi: "किसान सहायता", te: "రైతు సహాయం" },
  "agriMap": { en: "Agri Map", hi: "कृषि मानचित्र", te: "వ్యవసాయ మ్యాప్" },
  "products": { en: "Products", hi: "उत्पाद", te: "ఉత్పత్తులు" },
  "crops": { en: "Crops", hi: "फसलें", te: "పంటలు" },
  "about": { en: "About", hi: "हमारे बारे में", te: "మా గురించి" },
  "settings": { en: "Settings", hi: "सेटिंग्स", te: "సెట్టింగ్‌లు" },
  "profile": { en: "Profile", hi: "प्रोफ़ाइल", te: "ప్రొఫైల్" },
  "signOut": { en: "Sign Out", hi: "साइन आउट", te: "సైన్ అవుట్" },
  "saveChanges": { en: "Save Changes", hi: "बदलाव सहेजें", te: "మార్పులు సేవ్ చేయండి" },
  "profileSettings": { en: "Profile Settings", hi: "प्रोफ़ाइल सेटिंग्स", te: "ప్రొఫైల్ సెట్టింగ్‌లు" },
  "preferences": { en: "Preferences", hi: "प्राथमिकताएँ", te: "ప్రాధాన్యతలు" },
  "emailNotifications": { en: "Email Notifications", hi: "ईमेल सूचनाएँ", te: "ఇమెయిల్ నోటిఫికేషన్లు" },
  "receiveAlerts": { en: "Receive alerts about crop health", hi: "फसल स्वास्थ्य के बारे में अलर्ट प्राप्त करें", te: "పంట ఆరోగ్యం గురించి హెచ్చరికలు పొందండి" },
  "fullName": { en: "Full Name", hi: "पूरा नाम", te: "పూర్తి పేరు" },
  "email": { en: "Email", hi: "ईमेल", te: "ఇమెయిల్" },
  "language": { en: "Language", hi: "भाषा", te: "భాష" },
  "languageDesc": { en: "Select your preferred language", hi: "अपनी पसंदीदा भाषा चुनें", te: "మీ ప్రాధాన్య భాషను ఎంచుకోండి" },
  "getStarted": { en: "Get Started", hi: "शुरू करें", te: "ప్రారంభించండి" },
  "howItWorks": { en: "How It Works", hi: "यह कैसे काम करता है", te: "ఇది ఎలా పని చేస్తుంది" },
  "whyAgrocare": { en: "Why Agrocare", hi: "अग्रोकेयर क्यों", te: "అగ్రోకేర్ ఎందుకు" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem("agrocare-lang");
    return (stored === "en" || stored === "hi" || stored === "te") ? stored : "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("agrocare-lang", lang);
  };

  const t = (key: string): string => {
    return translations[key]?.[language] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
