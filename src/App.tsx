import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import CropDetection from "./pages/dashboard/CropDetection";
import Weather from "./pages/dashboard/Weather";
import AiChat from "./pages/dashboard/AiChat";
import YieldPrediction from "./pages/dashboard/YieldPrediction";
import GovernmentSupport from "./pages/dashboard/GovernmentSupport";
import FarmerAssistance from "./pages/dashboard/FarmerAssistance";
import AgriMap from "./pages/dashboard/AgriMap";
import ProductMarketplace from "./pages/dashboard/ProductMarketplace";
import WaterManagement from "./pages/dashboard/WaterManagement";
import Crops from "./pages/Crops";
import About from "./pages/About";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {

useEffect(() => {
  console.log("Preview mode - backend disabled");
}, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<DashboardHome />} />
              <Route path="/dashboard/detect" element={<CropDetection />} />
              <Route path="/dashboard/weather" element={<Weather />} />
              <Route path="/dashboard/chat" element={<AiChat />} />
              <Route path="/dashboard/yield" element={<YieldPrediction />} />
              <Route path="/dashboard/government" element={<GovernmentSupport />} />
              <Route path="/dashboard/assist" element={<FarmerAssistance />} />
              <Route path="/dashboard/map" element={<AgriMap />} />
              <Route path="/dashboard/products" element={<ProductMarketplace />} />

              {/* ✅ FIX ADDED HERE */}
              <Route path="/dashboard/water" element={<WaterManagement />} />

              <Route path="/crops" element={<Crops />} />
              <Route path="/about" element={<About />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;