import { useState, useRef, useEffect } from "react";
import DashboardNavbar from "@/components/DashboardNavbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User, Pill, Bug, Landmark, Droplets, Leaf } from "lucide-react";

interface Message {
  role: "user" | "ai";
  content: string;
  structured?: {
    title: string;
    items: string[];
    type: "treatment" | "disease" | "fertilizer" | "scheme" | "general";
  };
}

const quickSuggestions = [
  { label: "Disease Treatment", icon: Pill, query: "How do I treat bacterial leaf blight in rice?" },
  { label: "Fertilizer Advice", icon: Droplets, query: "What fertilizer should I use for tomato plants?" },
  { label: "Identify Disease", icon: Bug, query: "My potato leaves have brown spots with yellow halos. What disease is this?" },
  { label: "Govt Schemes", icon: Landmark, query: "What government schemes are available for small farmers?" },
  { label: "Crop Care Tips", icon: Leaf, query: "How do I protect wheat from rust disease?" },
];

const structuredResponses: Record<string, Message["structured"] & { content: string }> = {
  "treat": {
    content: "Here's a treatment plan for Bacterial Leaf Blight in rice:",
    title: "Treatment Plan: Bacterial Leaf Blight",
    type: "treatment",
    items: [
      "Apply Copper Hydroxide 77% WP at 2.5g/L as foliar spray",
      "Remove and burn infected leaves — do not compost them",
      "Drain excess water from the field and improve drainage channels",
      "Apply Streptomycin Sulphate (500 ppm) if severity is high",
      "Switch to resistant varieties like IR64 or Swarna for next season",
      "Avoid excess nitrogen — it increases susceptibility to BLB",
    ],
  },
  "fertilizer": {
    content: "For tomato plants, here's a recommended fertilizer schedule:",
    title: "Fertilizer Recommendation: Tomato",
    type: "fertilizer",
    items: [
      "Base dose: Apply 25 tonnes/hectare of well-decomposed farmyard manure",
      "NPK ratio: 120:60:60 kg/hectare (Nitrogen:Phosphorus:Potassium)",
      "Apply 50% Nitrogen + full P&K at transplanting",
      "Top-dress remaining 50% Nitrogen in two splits at 30 and 60 days",
      "Foliar spray of Calcium Nitrate (5g/L) during fruiting to prevent blossom-end rot",
      "Add micronutrients (Boron, Zinc) if soil test shows deficiency",
    ],
  },
  "spots": {
    content: "Based on your description, this appears to be Early Blight (Alternaria solani):",
    title: "Disease Identification: Early Blight",
    type: "disease",
    items: [
      "Symptoms: Brown spots with concentric rings (target-board pattern) and yellow halos",
      "Cause: Fungus Alternaria solani, thrives in warm (24-29°C) and humid conditions",
      "Spread: Through wind, rain splash, and contaminated seeds/soil",
      "Treatment: Apply Mancozeb 75% WP (2.5g/L) or Chlorothalonil at first sign",
      "Prevention: Use certified disease-free seeds and practice 3-year crop rotation",
      "Severity: Moderate — can cause 30-50% yield loss if left untreated",
    ],
  },
  "scheme": {
    content: "Here are key government schemes available for small farmers:",
    title: "Government Schemes for Small Farmers",
    type: "scheme",
    items: [
      "PM-KISAN: ₹6,000/year direct income support in 3 installments",
      "PMFBY: Crop insurance at 1.5-5% premium covering natural calamities and diseases",
      "Kisan Credit Card: Short-term credit at just 4% interest rate (with subsidy)",
      "Soil Health Card: Free soil testing with personalized fertilizer recommendations",
      "NMSA: Up to 50% subsidy on sustainable farming inputs and micro-irrigation",
      "Call 1800-180-1551 (Kisan Call Center) for help with registration and eligibility",
    ],
  },
  "rust": {
    content: "Here's how to protect your wheat crop from rust disease:",
    title: "Wheat Rust Prevention & Treatment",
    type: "treatment",
    items: [
      "Monitor fields weekly from January for yellow/orange pustules on leaves",
      "Apply Propiconazole 25% EC (1ml/L) at first sign of rust",
      "Use resistant varieties: HD 3086, DBW 187, or PBW 725",
      "Avoid late sowing — it increases rust susceptibility significantly",
      "Ensure balanced fertilization — excess nitrogen promotes lush growth vulnerable to rust",
      "Report outbreaks to your district agriculture office for area-wide management",
    ],
  },
};

function getResponse(input: string): Message {
  const lower = input.toLowerCase();
  if (lower.includes("treat") || lower.includes("blight")) {
    const r = structuredResponses["treat"];
    return { role: "ai", content: r.content, structured: { title: r.title, items: r.items, type: r.type } };
  }
  if (lower.includes("fertilizer") || lower.includes("tomato")) {
    const r = structuredResponses["fertilizer"];
    return { role: "ai", content: r.content, structured: { title: r.title, items: r.items, type: r.type } };
  }
  if (lower.includes("spot") || lower.includes("potato") || lower.includes("brown")) {
    const r = structuredResponses["spots"];
    return { role: "ai", content: r.content, structured: { title: r.title, items: r.items, type: r.type } };
  }
  if (lower.includes("scheme") || lower.includes("government") || lower.includes("subsid")) {
    const r = structuredResponses["scheme"];
    return { role: "ai", content: r.content, structured: { title: r.title, items: r.items, type: r.type } };
  }
  if (lower.includes("rust") || lower.includes("wheat")) {
    const r = structuredResponses["rust"];
    return { role: "ai", content: r.content, structured: { title: r.title, items: r.items, type: r.type } };
  }
  return {
    role: "ai",
    content: "I can help you with crop diseases, treatments, fertilizer recommendations, and government schemes. Try asking about a specific crop issue or use the quick suggestions below!",
  };
}

const typeIcons: Record<string, typeof Pill> = {
  treatment: Pill,
  disease: Bug,
  fertilizer: Droplets,
  scheme: Landmark,
  general: Leaf,
};

export default function AiChat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: "Hello! I'm your AI crop advisor. I can help with crop diseases, treatments, fertilizers, government schemes, and farming best practices. Ask me anything or use the quick suggestions below!" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const handleSend = (text?: string) => {
    const msg = text || input;
    if (!msg.trim()) return;
    const userMsg: Message = { role: "user", content: msg };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const aiMsg = getResponse(msg);
      setMessages((prev) => [...prev, aiMsg]);
      setTyping(false);
    }, 1200);
  };

  return (
    <>
      <DashboardNavbar title="AI Crop Advisor" />
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-auto p-6 space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""} animate-fade-in`}>
              {msg.role === "ai" && (
                <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center shrink-0">
                  <Bot className="h-4 w-4 text-primary-foreground" />
                </div>
              )}
              <div className={`max-w-lg ${msg.role === "user" ? "" : ""}`}>
                <div className={`px-4 py-3 rounded-2xl text-sm ${
                  msg.role === "user"
                    ? "gradient-bg text-primary-foreground rounded-br-md"
                    : "glass-card rounded-bl-md"
                }`}>
                  {msg.content}
                </div>
                {msg.structured && (
                  <div className="glass-card mt-2 p-4 rounded-xl animate-fade-in">
                    <div className="flex items-center gap-2 mb-3">
                      {(() => { const Icon = typeIcons[msg.structured.type]; return <Icon className="h-4 w-4 text-primary" />; })()}
                      <h4 className="font-display font-semibold text-sm">{msg.structured.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {msg.structured.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">{j + 1}</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {msg.role === "user" && (
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <User className="h-4 w-4 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
          {typing && (
            <div className="flex gap-3 animate-fade-in">
              <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center shrink-0">
                <Bot className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="glass-card px-4 py-3 rounded-2xl rounded-bl-md">
                <span className="flex gap-1">
                  <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </span>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Quick Suggestions */}
        <div className="px-4 pt-2 flex gap-2 flex-wrap max-w-3xl mx-auto w-full">
          {quickSuggestions.map((s, i) => (
            <button
              key={i}
              onClick={() => handleSend(s.query)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs glass-card hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <s.icon className="h-3 w-3" />
              {s.label}
            </button>
          ))}
        </div>

        <div className="p-4 border-t border-border/30">
          <form
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="flex gap-2 max-w-3xl mx-auto"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about crop diseases, treatments, fertilizers, schemes..."
              className="bg-muted/50 border-border/50 focus:border-primary"
            />
            <Button type="submit" size="icon" className="gradient-bg text-primary-foreground hover:opacity-90 shrink-0" disabled={typing}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </main>
    </>
  );
}
