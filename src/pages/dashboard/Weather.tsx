import DashboardNavbar from "@/components/DashboardNavbar";
import { CloudSun, Droplets, Wind, Eye, Gauge, Leaf, AlertTriangle, CheckCircle, Thermometer, Umbrella } from "lucide-react";

const weatherData = {
  temp: 28, condition: "Partly Cloudy", humidity: 65, wind: 12, visibility: 10, pressure: 1013, dewPoint: 18, uvIndex: 6,
};

const forecast = [
  { day: "Mon", temp: 29, low: 22, icon: "☀️", rain: "0%", condition: "Sunny" },
  { day: "Tue", temp: 27, low: 20, icon: "⛅", rain: "20%", condition: "Partly Cloudy" },
  { day: "Wed", temp: 24, low: 19, icon: "🌧️", rain: "80%", condition: "Heavy Rain" },
  { day: "Thu", temp: 26, low: 21, icon: "⛅", rain: "30%", condition: "Cloudy" },
  { day: "Fri", temp: 30, low: 23, icon: "☀️", rain: "5%", condition: "Clear Sky" },
];

const agriInsights = [
  { type: "warning", icon: AlertTriangle, title: "Heavy Rain Expected Wednesday", desc: "Delay spraying pesticides/fungicides — they'll wash off. Ensure drainage channels are clear. Harvest any mature crops before rain." },
  { type: "tip", icon: CheckCircle, title: "Ideal for Transplanting (Mon-Tue)", desc: "Temperature 27-29°C with low wind — perfect for transplanting rice and vegetable seedlings. Water immediately after transplanting." },
  { type: "tip", icon: Leaf, title: "Moderate UV — Good Growth Conditions", desc: "UV index 6 promotes photosynthesis without scorching. No shade protection needed for most crops." },
  { type: "warning", icon: Droplets, title: "Monitor Soil Moisture Post-Rain", desc: "After Wednesday's rain, check for waterlogging in low-lying areas. Drain excess water within 24 hours to prevent root rot." },
];

const cropCareByWeather = [
  { crop: "Rice", advice: "Current humidity (65%) is ideal for rice growth. Monitor for blast disease risk which increases above 90%. Plan transplanting for early week.", icon: "🌾" },
  { crop: "Tomato", advice: "28°C is in the optimal range. Ensure staking support before Wednesday's rain. Apply calcium foliar spray to prevent blossom-end rot.", icon: "🍅" },
  { crop: "Wheat", advice: "If in reproductive stage, current temperatures are slightly high. Provide light irrigation in evening to cool soil. Watch for aphid buildup.", icon: "🌾" },
  { crop: "Cotton", advice: "Good conditions for boll development. Avoid irrigation before rain. Scout for bollworm — warm nights increase activity.", icon: "🌿" },
  { crop: "Potato", advice: "Current weather supports tuber bulking. Maintain consistent soil moisture. Hill plants to prevent greening from sun exposure.", icon: "🥔" },
  { crop: "Sugarcane", advice: "Grand growth phase benefits from current warmth. Ensure adequate nitrogen. Prepare drainage before expected rain.", icon: "🎋" },
];

const hourlyForecast = [
  { time: "6 AM", temp: 22, icon: "🌅" },
  { time: "9 AM", temp: 25, icon: "⛅" },
  { time: "12 PM", temp: 28, icon: "☀️" },
  { time: "3 PM", temp: 30, icon: "☀️" },
  { time: "6 PM", temp: 27, icon: "🌅" },
  { time: "9 PM", temp: 24, icon: "🌙" },
];

export default function Weather() {
  return (
    <>
      <DashboardNavbar title="Weather Insights" />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Current Weather */}
          <div className="glass-card p-8 text-center animate-fade-in">
            <CloudSun className="h-16 w-16 text-secondary mx-auto mb-4" />
            <p className="font-display text-5xl font-bold mb-2">{weatherData.temp}°C</p>
            <p className="text-muted-foreground">{weatherData.condition}</p>
            <p className="text-xs text-muted-foreground mt-1">Updated just now</p>
          </div>

          {/* Details Grid */}
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

          {/* Hourly */}
          <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: "0.05s" }}>
            <h3 className="font-display font-semibold mb-4">Today's Hourly Forecast</h3>
            <div className="grid grid-cols-6 gap-3">
              {hourlyForecast.map((h) => (
                <div key={h.time} className="text-center p-3 rounded-lg bg-muted/30">
                  <p className="text-xs text-muted-foreground mb-1">{h.time}</p>
                  <p className="text-xl mb-1">{h.icon}</p>
                  <p className="font-semibold text-sm">{h.temp}°C</p>
                </div>
              ))}
            </div>
          </div>

          {/* 5-Day Forecast */}
          <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-display font-semibold mb-4">5-Day Forecast</h3>
            <div className="space-y-2">
              {forecast.map((d) => (
                <div key={d.day} className="flex items-center justify-between p-3 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors">
                  <div className="flex items-center gap-3 w-24">
                    <span className="text-2xl">{d.icon}</span>
                    <span className="font-semibold text-sm">{d.day}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{d.condition}</span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Umbrella className="h-3 w-3" /> {d.rain}
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">{d.temp}°</span>
                    <span className="text-muted-foreground"> / {d.low}°</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Agri Weather Alerts */}
          <div className="animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary" /> Agricultural Weather Insights
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {agriInsights.map((insight, i) => (
                <div key={i} className="glass-card p-5 hover-lift">
                  <div className="flex items-start gap-3">
                    <insight.icon className={`h-5 w-5 shrink-0 mt-0.5 ${insight.type === "warning" ? "text-yellow-500" : "text-primary"}`} />
                    <div>
                      <h4 className="font-semibold text-sm mb-1">{insight.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{insight.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Crop Care Based on Weather */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
              <Thermometer className="h-5 w-5 text-secondary" /> Weather-Based Crop Care
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cropCareByWeather.map((item, i) => (
                <div key={i} className="glass-card p-5 hover-lift">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{item.icon}</span>
                    <h4 className="font-display font-semibold text-sm">{item.crop}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.advice}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
