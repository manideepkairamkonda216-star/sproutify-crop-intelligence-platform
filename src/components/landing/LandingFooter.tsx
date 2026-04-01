import { Link } from "react-router-dom";
import { Leaf, Phone } from "lucide-react";

export default function LandingFooter() {
  return (
    <footer className="bg-foreground text-background py-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Leaf className="h-4 w-4" />
              <span className="font-bold text-base">Agrocare</span>
            </div>
            <p className="text-xs opacity-70 leading-relaxed">
              AI-powered crop intelligence platform helping farmers detect diseases, predict yields, and access government support.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Platform</h4>
            <div className="space-y-1.5">
              <Link to="/dashboard/detect" className="block text-xs opacity-70 hover:opacity-100 transition-opacity">Crop Detection</Link>
              <Link to="/dashboard/weather" className="block text-xs opacity-70 hover:opacity-100 transition-opacity">Weather Insights</Link>
              <Link to="/dashboard/chat" className="block text-xs opacity-70 hover:opacity-100 transition-opacity">AI Assistant</Link>
              <Link to="/dashboard/water" className="block text-xs opacity-70 hover:opacity-100 transition-opacity">Water Management</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Resources</h4>
            <div className="space-y-1.5">
              <Link to="/crops" className="block text-xs opacity-70 hover:opacity-100 transition-opacity">Crop Library</Link>
              <Link to="/dashboard/government" className="block text-xs opacity-70 hover:opacity-100 transition-opacity">Government Schemes</Link>
              <Link to="/dashboard/products" className="block text-xs opacity-70 hover:opacity-100 transition-opacity">Marketplace</Link>
              <Link to="/about" className="block text-xs opacity-70 hover:opacity-100 transition-opacity">About Us</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Helpline</h4>
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs opacity-70">
                <Phone className="h-3 w-3" /> 1800-180-1551 (Toll Free)
              </div>
              <p className="text-xs opacity-70">help@agrocare.gov.in</p>
              <p className="text-xs opacity-70">Mon–Sat, 9:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>
        <div className="border-t border-background/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs opacity-50">© 2026 Agrocare — Ministry of Agriculture & Farmers' Welfare, Government of India</p>
          <div className="flex gap-5">
            <Link to="/about" className="text-xs opacity-50 hover:opacity-100 transition-opacity">About</Link>
            <Link to="/crops" className="text-xs opacity-50 hover:opacity-100 transition-opacity">Crops</Link>
            <a href="#services" className="text-xs opacity-50 hover:opacity-100 transition-opacity">Services</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
