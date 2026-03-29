import { Outlet } from "react-router-dom";
import DashboardSidebar from "@/components/DashboardSidebar";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}
