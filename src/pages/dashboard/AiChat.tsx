import { useState } from "react";
import DashboardNavbar from "@/components/DashboardNavbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User } from "lucide-react";

interface Message {
  role: "user" | "ai";
  content: string;
}

const responses = [
  "Based on the symptoms you described, this could be Fusarium Wilt. I recommend applying a systemic fungicide and improving soil drainage.",
  "For optimal tomato growth, maintain soil pH between 6.0-6.8 and ensure consistent watering. Avoid overhead irrigation to prevent leaf diseases.",
  "Early Blight is common in humid conditions. Remove affected leaves, apply copper fungicide, and mulch around plants to prevent soil splash.",
  "The yellowing pattern you describe suggests a nitrogen deficiency. Apply a balanced NPK fertilizer and consider adding organic compost.",
];

export default function AiChat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: "Hello! I'm your AI crop advisor. Ask me anything about crop diseases, treatments, or farming best practices." },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const aiMsg: Message = {
        role: "ai",
        content: responses[Math.floor(Math.random() * responses.length)],
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 1000);
  };

  return (
    <>
      <DashboardNavbar title="AI Assistant" />
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-auto p-6 space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""} animate-fade-in`}>
              {msg.role === "ai" && (
                <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center shrink-0">
                  <Bot className="h-4 w-4 text-primary-foreground" />
                </div>
              )}
              <div className={`max-w-md px-4 py-3 rounded-2xl text-sm ${
                msg.role === "user"
                  ? "gradient-bg text-primary-foreground rounded-br-md"
                  : "glass-card rounded-bl-md"
              }`}>
                {msg.content}
              </div>
              {msg.role === "user" && (
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <User className="h-4 w-4 text-muted-foreground" />
                </div>
              )}
            </div>
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
              placeholder="Ask about crop diseases, treatments..."
              className="bg-muted/50 border-border/50 focus:border-primary"
            />
            <Button type="submit" size="icon" className="gradient-bg text-primary-foreground hover:opacity-90 shrink-0">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </main>
    </>
  );
}
