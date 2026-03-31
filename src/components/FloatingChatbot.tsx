import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, User, Pill, Bug, Droplets, Leaf, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  role: "user" | "ai";
  content: string;
  structured?: { title: string; items: string[]; };
}

const responses: Record<string, { content: string; structured?: { title: string; items: string[] } }> = {
  disease: { content: "Common crop diseases include:", structured: { title: "Disease Detection Tips", items: ["Look for spots, lesions, or discoloration on leaves", "Check leaf undersides for fungal growth or pustules", "Note any wilting, stunting, or abnormal growth patterns", "Take clear photos and use Crop Detection for AI analysis"] } },
  fertilizer: { content: "Here are general fertilizer guidelines:", structured: { title: "Fertilizer Basics", items: ["Get soil tested first — Soil Health Card scheme provides free testing", "NPK ratio varies by crop: Rice 120:60:60, Wheat 100:50:50 kg/ha", "Apply organic manure (FYM/compost) as base at 10-25 tonnes/ha", "Split nitrogen into 2-3 doses to reduce losses"] } },
  water: { content: "Smart irrigation recommendations:", structured: { title: "Water Management", items: ["Drip irrigation saves 30-50% water — subsidy up to 55% available", "Irrigate early morning to reduce evaporation loss", "Use mulching to conserve soil moisture by 30-40%", "For rice, try AWD (Alternate Wetting & Drying) to save 20-30% water"] } },
  weather: { content: "Weather-based farming advice:", structured: { title: "Weather Tips", items: ["Check the Weather page for 5-day forecast with crop care recommendations", "Don't spray pesticides if rain is expected within 6 hours", "Irrigate before heat waves to protect crop roots", "Harvest mature crops before expected heavy rainfall"] } },
  scheme: { content: "Key government schemes for farmers:", structured: { title: "Govt Support", items: ["PM-KISAN: ₹6,000/year direct income support", "PMFBY: Crop insurance at 1.5-5% premium", "Kisan Credit Card: Credit at 4% interest rate", "Call 1800-180-1551 (Kisan Call Center) for registration help"] } },
  crop: { content: "Crop selection guidance:", structured: { title: "Crop Recommendations", items: ["Visit the Crops page for detailed information on 8+ major crops", "Use Agri Map to find state-specific crop recommendations", "Consider soil type, water availability, and season", "Check Yield Prediction tool to estimate potential output"] } },
};

function getResponse(input: string): Message {
  const lower = input.toLowerCase();
  if (lower.includes("disease") || lower.includes("blight") || lower.includes("spot") || lower.includes("rust")) {
    return { role: "ai", ...responses.disease };
  }
  if (lower.includes("fertilizer") || lower.includes("manure") || lower.includes("npk") || lower.includes("urea")) {
    return { role: "ai", ...responses.fertilizer };
  }
  if (lower.includes("water") || lower.includes("irrigat") || lower.includes("drip") || lower.includes("rain")) {
    return { role: "ai", ...responses.water };
  }
  if (lower.includes("weather") || lower.includes("temp") || lower.includes("forecast")) {
    return { role: "ai", ...responses.weather };
  }
  if (lower.includes("scheme") || lower.includes("govt") || lower.includes("subsid") || lower.includes("loan")) {
    return { role: "ai", ...responses.scheme };
  }
  if (lower.includes("crop") || lower.includes("rice") || lower.includes("wheat") || lower.includes("tomato") || lower.includes("grow")) {
    return { role: "ai", ...responses.crop };
  }
  return { role: "ai", content: "I'm your Agrocare assistant! Ask me about crop diseases, fertilizers, water management, weather tips, government schemes, or crop selection. I'm here to help with all your farming questions!" };
}

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: "Hi! 👋 I'm your Agrocare assistant. Ask me anything about crops, diseases, fertilizers, or farming!" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: "user", content: input }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, getResponse(input)]);
      setTyping(false);
    }, 800);
  };

  const quickQuestions = ["How to detect crop disease?", "Best fertilizer for rice?", "Water saving tips", "Govt schemes for farmers"];

  return (
    <>
      {/* FAB */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-bg flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-fade-in"
          aria-label="Open chat assistant"
        >
          <Bot className="h-6 w-6 text-primary-foreground" />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[360px] h-[500px] glass-card flex flex-col shadow-2xl animate-fade-in overflow-hidden">
          {/* Header */}
          <div className="gradient-bg px-4 py-3 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary-foreground" />
              <div>
                <p className="text-sm font-semibold text-primary-foreground">Agrocare Assistant</p>
                <p className="text-[10px] text-primary-foreground/70">Online • Ask anything</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-primary-foreground/80 hover:text-primary-foreground">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-auto p-3 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : ""}`}>
                {msg.role === "ai" && (
                  <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center shrink-0">
                    <Bot className="h-3 w-3 text-primary-foreground" />
                  </div>
                )}
                <div className={`max-w-[85%]`}>
                  <div className={`px-3 py-2 rounded-xl text-xs ${msg.role === "user" ? "gradient-bg text-primary-foreground rounded-br-sm" : "bg-muted/50 rounded-bl-sm"}`}>
                    {msg.content}
                  </div>
                  {msg.structured && (
                    <div className="bg-muted/30 rounded-lg p-2.5 mt-1.5 text-xs">
                      <p className="font-semibold text-[11px] mb-1.5">{msg.structured.title}</p>
                      <ul className="space-y-1">
                        {msg.structured.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-1.5 text-muted-foreground">
                            <span className="text-primary font-bold">•</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                {msg.role === "user" && (
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <User className="h-3 w-3 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
            {typing && (
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center shrink-0">
                  <Bot className="h-3 w-3 text-primary-foreground" />
                </div>
                <div className="bg-muted/50 px-3 py-2 rounded-xl rounded-bl-sm">
                  <span className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick Questions */}
          {messages.length <= 1 && (
            <div className="px-3 pb-1 flex flex-wrap gap-1">
              {quickQuestions.map((q, i) => (
                <button key={i} onClick={() => { setInput(q); }} className="text-[10px] px-2 py-1 rounded-full bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors">
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="p-3 border-t border-border/30 flex gap-2 shrink-0">
            <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about crops, diseases..." className="text-xs h-9 bg-muted/50 border-border/50" />
            <Button type="submit" size="icon" className="gradient-bg text-primary-foreground h-9 w-9 shrink-0 hover:opacity-90" disabled={typing}>
              <Send className="h-3.5 w-3.5" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
