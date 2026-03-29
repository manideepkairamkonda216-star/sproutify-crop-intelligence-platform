import { type ProductInfo } from "@/data/indiaStatesData";
import { FlaskConical, Bug, Droplets, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const typeConfig = {
  Fertilizer: { icon: FlaskConical, color: "text-primary" },
  Pesticide: { icon: Bug, color: "text-destructive" },
  Fungicide: { icon: Droplets, color: "text-secondary" },
};

export default function ProductCard({ product }: { product: ProductInfo }) {
  const config = typeConfig[product.type];
  const Icon = config.icon;

  return (
    <div className="glass-card p-5 hover-lift group">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
          <Icon className={`h-6 w-6 ${config.color}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-display font-semibold text-sm truncate">{product.name}</h4>
            <span className={`text-[10px] px-2 py-0.5 rounded-full bg-muted ${config.color} shrink-0`}>
              {product.type}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mb-2">{product.description}</p>
          <p className="text-xs text-foreground/70">
            <span className="text-primary font-medium">Usage:</span> {product.usage}
          </p>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <Button variant="outline" size="sm" className="text-xs gap-1.5">
          <ExternalLink className="h-3 w-3" /> View Product
        </Button>
      </div>
    </div>
  );
}
