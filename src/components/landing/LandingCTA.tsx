import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingCTA() {
  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
          Ready to Protect Your Crops?
        </h2>
        <p className="text-sm text-primary-foreground/80 max-w-md mx-auto mb-7">
          Join thousands of farmers who are already using Agrocare to detect diseases early, access government support, and maximize their yield.
        </p>
        <Link to="/login">
          <Button size="lg" className="bg-secondary text-secondary-foreground font-semibold px-10 hover:bg-secondary/90">
            Start Using Agrocare <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
