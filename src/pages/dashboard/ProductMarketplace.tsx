import { useState, useMemo } from "react";
import DashboardNavbar from "@/components/DashboardNavbar";
import {
  products, allCrops, allDiseases, allCategories,
  type Product,
} from "@/data/productsData";
import {
  FlaskConical, Bug, Droplets, Star, ExternalLink, Filter,
  ShoppingCart, Search, Sparkles, X, ShieldCheck, Beaker, Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";

const categoryConfig = {
  Fertilizer: { icon: FlaskConical, color: "text-primary", bg: "bg-primary/10" },
  Pesticide: { icon: Bug, color: "text-destructive", bg: "bg-destructive/10" },
  Fungicide: { icon: Droplets, color: "text-secondary", bg: "bg-secondary/10" },
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i <= Math.floor(rating)
              ? "text-yellow-400 fill-yellow-400"
              : i - 0.5 <= rating
              ? "text-yellow-400 fill-yellow-400/50"
              : "text-muted-foreground/30"
          }`}
        />
      ))}
    </div>
  );
}

function ProductCard({
  product,
  onDetails,
}: {
  product: Product;
  onDetails: () => void;
}) {
  const config = categoryConfig[product.category];
  const Icon = config.icon;

  return (
    <div className="glass-card p-5 hover-lift group flex flex-col">
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <div
          className={`w-11 h-11 rounded-lg ${config.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
        >
          <Icon className={`h-5 w-5 ${config.color}`} />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="font-display font-semibold text-sm truncate">
            {product.name}
          </h4>
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full ${config.bg} ${config.color} font-medium`}
          >
            {product.category}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
        {product.description}
      </p>

      {/* Crops */}
      <div className="flex flex-wrap gap-1 mb-3">
        {product.crops.slice(0, 3).map((c) => (
          <span
            key={c}
            className="text-[10px] px-2 py-0.5 rounded-full bg-muted/40 text-muted-foreground"
          >
            {c}
          </span>
        ))}
        {product.crops.length > 3 && (
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted/40 text-muted-foreground">
            +{product.crops.length - 3}
          </span>
        )}
      </div>

      {/* Rating & Price */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Stars rating={product.rating} />
          <span className="text-[10px] text-muted-foreground">
            ({product.reviews.toLocaleString()})
          </span>
        </div>
        <span className="font-display font-bold text-primary text-sm">
          ₹{product.price}
        </span>
      </div>

      {/* Purpose tag */}
      <p className="text-[10px] text-accent font-medium mb-4 flex items-center gap-1">
        <Leaf className="h-3 w-3" /> {product.purpose}
      </p>

      {/* Actions — pushed to bottom */}
      <div className="mt-auto flex gap-2">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 text-xs gap-1.5"
          onClick={onDetails}
        >
          <ExternalLink className="h-3 w-3" /> View Details
        </Button>
        <Button
          size="sm"
          className="flex-1 text-xs gap-1.5"
          onClick={() => window.open(product.buyLink, "_blank")}
        >
          <ShoppingCart className="h-3 w-3" /> Buy Now
        </Button>
      </div>
    </div>
  );
}

function ProductDetailsModal({
  product,
  open,
  onClose,
}: {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!product) return null;
  const config = categoryConfig[product.category];
  const Icon = config.icon;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto glass-card border-border/40">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-lg ${config.bg} flex items-center justify-center`}
            >
              <Icon className={`h-6 w-6 ${config.color}`} />
            </div>
            <div>
              <DialogTitle className="font-display text-lg">
                {product.name}
              </DialogTitle>
              <DialogDescription className="flex items-center gap-2 mt-1">
                <Badge variant="outline" className={`${config.color} text-[10px]`}>
                  {product.category}
                </Badge>
                <Stars rating={product.rating} />
                <span className="text-xs">
                  ({product.reviews.toLocaleString()} reviews)
                </span>
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-5 mt-2">
          {/* Price */}
          <div className="flex items-center justify-between bg-muted/20 rounded-lg p-4">
            <span className="font-display text-2xl font-bold text-primary">
              ₹{product.price}
            </span>
            <Button
              size="sm"
              className="gap-1.5"
              onClick={() => window.open(product.buyLink, "_blank")}
            >
              <ShoppingCart className="h-4 w-4" /> Buy Now
            </Button>
          </div>

          {/* Full description */}
          <div>
            <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
              <Beaker className="h-4 w-4 text-primary" /> Description
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {product.fullDescription}
            </p>
          </div>

          {/* Crops */}
          <div>
            <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
              <Leaf className="h-4 w-4 text-primary" /> Suitable Crops
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.crops.map((c) => (
                <Badge key={c} variant="secondary" className="text-xs">
                  {c}
                </Badge>
              ))}
            </div>
          </div>

          {/* Diseases */}
          {product.diseases.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                <Bug className="h-4 w-4 text-destructive" /> Effective Against
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.diseases.map((d) => (
                  <Badge key={d} variant="outline" className="text-xs text-destructive">
                    {d}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Usage */}
          <div>
            <h4 className="text-sm font-semibold mb-2">📋 Usage Instructions</h4>
            <p className="text-sm text-muted-foreground">{product.usage}</p>
          </div>

          {/* Dosage */}
          <div>
            <h4 className="text-sm font-semibold mb-2">💊 Recommended Dosage</h4>
            <p className="text-sm text-muted-foreground">{product.dosage}</p>
          </div>

          {/* Safety */}
          <div>
            <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-yellow-400" /> Safety Precautions
            </h4>
            <ul className="space-y-1.5">
              {product.safety.map((s) => (
                <li
                  key={s}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function ProductMarketplace() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [crop, setCrop] = useState<string>("all");
  const [disease, setDisease] = useState<string>("all");
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (search && !p.name.toLowerCase().includes(search.toLowerCase()) && !p.description.toLowerCase().includes(search.toLowerCase()))
        return false;
      if (category !== "all" && p.category !== category) return false;
      if (crop !== "all" && !p.crops.includes(crop)) return false;
      if (disease !== "all" && !p.diseases.includes(disease)) return false;
      return true;
    });
  }, [search, category, crop, disease]);

  // AI recommendations: top-rated products matching current filters
  const recommended = useMemo(() => {
    const base = disease !== "all"
      ? products.filter((p) => p.diseases.includes(disease))
      : crop !== "all"
      ? products.filter((p) => p.crops.includes(crop))
      : products;
    return [...base].sort((a, b) => b.rating - a.rating).slice(0, 3);
  }, [crop, disease]);

  const hasFilters = search || category !== "all" || crop !== "all" || disease !== "all";

  return (
    <>
      <DashboardNavbar title="Product Marketplace" />
      <main className="flex-1 p-6 overflow-auto">
        {/* AI Recommendations */}
        <section className="glass-card p-5 gradient-border mb-6">
          <h3 className="font-display font-semibold text-sm mb-4 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" /> AI Recommended Products
            {(crop !== "all" || disease !== "all") && (
              <span className="text-xs text-muted-foreground font-normal">
                — based on your selection
              </span>
            )}
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {recommended.map((p) => (
              <div
                key={p.id}
                className="bg-muted/20 rounded-lg p-4 flex items-start gap-3 cursor-pointer hover:bg-muted/30 transition-colors"
                onClick={() => setDetailProduct(p)}
              >
                <div
                  className={`w-9 h-9 rounded-lg ${categoryConfig[p.category].bg} flex items-center justify-center shrink-0`}
                >
                  {(() => {
                    const I = categoryConfig[p.category].icon;
                    return <I className={`h-4 w-4 ${categoryConfig[p.category].color}`} />;
                  })()}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{p.name}</p>
                  <p className="text-[10px] text-muted-foreground">{p.purpose}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Stars rating={p.rating} />
                    <span className="text-primary font-semibold text-xs">₹{p.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Filters */}
        <section className="glass-card p-4 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <h4 className="text-sm font-semibold">Smart Filters</h4>
            {hasFilters && (
              <Button
                variant="ghost"
                size="sm"
                className="ml-auto text-xs gap-1 h-7"
                onClick={() => {
                  setSearch("");
                  setCategory("all");
                  setCrop("all");
                  setDisease("all");
                }}
              >
                <X className="h-3 w-3" /> Clear
              </Button>
            )}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 h-9 text-sm"
              />
            </div>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="h-9 text-sm">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {allCategories.map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={crop} onValueChange={setCrop}>
              <SelectTrigger className="h-9 text-sm">
                <SelectValue placeholder="Crop" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Crops</SelectItem>
                {allCrops.map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={disease} onValueChange={setDisease}>
              <SelectTrigger className="h-9 text-sm">
                <SelectValue placeholder="Disease" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Diseases</SelectItem>
                {allDiseases.map((d) => (
                  <SelectItem key={d} value={d}>{d}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </section>

        {/* Results */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-muted-foreground">
            Showing <span className="text-foreground font-medium">{filtered.length}</span> product{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onDetails={() => setDetailProduct(p)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="glass-card p-12 text-center">
            <p className="text-muted-foreground">No products match your filters. Try adjusting your selection.</p>
          </div>
        )}

        {/* Detail modal */}
        <ProductDetailsModal
          product={detailProduct}
          open={!!detailProduct}
          onClose={() => setDetailProduct(null)}
        />
      </main>
    </>
  );
}
