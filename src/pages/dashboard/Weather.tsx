import DashboardNavbar from "@/components/DashboardNavbar";
import { CloudSun, Droplets, Wind, Thermometer, Eye, Gauge } from "lucide-react";

const weatherData = {
  temp: 28,
  condition: "Partly Cloudy",
  humidity: 65,
  wind: 12,
  visibility: 10,
  pressure: 1013,
};

const forecast = [
  { day: "Mon", temp: 29, icon: "☀️" },
  { day: "Tue", temp: 27, icon: "⛅" },
  { day: "Wed", temp: 24, icon: "🌧️" },
  { day: "Thu", temp: 26, icon: "⛅" },
  { day: "Fri", temp: 30, icon: "☀️" },
];

export default function Weather() {
  return (
    <>
      <DashboardNavbar title="Weather Insights" />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Current */}
          <div className="glass-card p-8 text-center animate-fade-in">
            <CloudSun className="h-16 w-16 text-secondary mx-auto mb-4" />
            <p className="font-display text-5xl font-bold mb-2">{weatherData.temp}°C</p>
            <p className="text-muted-foreground">{weatherData.condition}</p>
            <p className="text-xs text-muted-foreground mt-1">Updated just now</p>
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Droplets, label: "Humidity", value: `${weatherData.humidity}%` },
              { icon: Wind, label: "Wind", value: `${weatherData.wind} km/h` },
              { icon: Eye, label: "Visibility", value: `${weatherData.visibility} km` },
              { icon: Gauge, label: "Pressure", value: `${weatherData.pressure} hPa` },
            ].map((item) => (
              <div key={item.label} className="glass-card p-4 text-center hover-lift">
                <item.icon className="h-5 w-5 text-secondary mx-auto mb-2" />
                <p className="font-semibold">{item.value}</p>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Forecast */}
          <div className="glass-card p-6">
            <h3 className="font-display font-semibold mb-4">5-Day Forecast</h3>
            <div className="grid grid-cols-5 gap-3">
              {forecast.map((d) => (
                <div key={d.day} className="text-center p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <p className="text-xs text-muted-foreground mb-2">{d.day}</p>
                  <p className="text-2xl mb-2">{d.icon}</p>
                  <p className="font-semibold text-sm">{d.temp}°C</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
