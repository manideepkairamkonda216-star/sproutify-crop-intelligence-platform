import { Star, Users } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Patel",
    role: "Rice Farmer, Gujarat",
    text: "Agrocare detected bacterial leaf blight in my rice field two weeks before I would have noticed it. Saved nearly 30% of my yield that season.",
    rating: 5,
  },
  {
    name: "Maria Santos",
    role: "Tomato Grower, Maharashtra",
    text: "The AI chatbot helped me understand which fertilizer to use and even found a government subsidy I didn't know about.",
    rating: 5,
  },
  {
    name: "Arun Kumar",
    role: "Wheat Farmer, Punjab",
    text: "Weather-based crop recommendations changed how I plan my planting cycle. My yield increased by 20% in the first year.",
    rating: 5,
  },
];

export default function LandingTestimonials() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Testimonials</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Trusted by Farmers Across India
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-5 hover-lift">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
