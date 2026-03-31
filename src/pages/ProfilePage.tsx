import { useState } from "react";
import DashboardNavbar from "@/components/DashboardNavbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { User, Camera, MapPin, Phone, Mail, Wheat, Calendar } from "lucide-react";

export default function ProfilePage() {
  const { toast } = useToast();
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 98765 43210",
    location: "Punjab, India",
    farmSize: "5 Hectares",
    mainCrops: "Rice, Wheat, Cotton",
    experience: "12 years",
    bio: "Progressive farmer focused on sustainable agriculture and modern farming techniques.",
  });

  const handleChange = (field: string, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    localStorage.setItem("agrocare-profile", JSON.stringify(profile));
    toast({ title: "Profile updated", description: "Your profile has been saved successfully." });
  };

  const stats = [
    { label: "Crops Scanned", value: "47", icon: Wheat },
    { label: "AI Queries", value: "128", icon: Calendar },
    { label: "Farm Size", value: profile.farmSize, icon: MapPin },
  ];

  return (
    <>
      <DashboardNavbar title="My Profile" />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Profile Header */}
          <div className="glass-card p-6 animate-fade-in">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center">
                  <User className="h-10 w-10 text-primary-foreground" />
                </div>
                <button className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center border-2 border-background">
                  <Camera className="h-3.5 w-3.5 text-primary-foreground" />
                </button>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold">{profile.name}</h2>
                <p className="text-sm text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3" /> {profile.location}</p>
                <p className="text-xs text-muted-foreground mt-1">{profile.bio}</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="glass-card p-4 text-center hover-lift animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
                <s.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                <p className="font-display text-xl font-bold">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Edit Form */}
          <div className="glass-card p-6 space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-display font-semibold text-lg">Personal Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="profile-name">Full Name</Label>
                <Input id="profile-name" value={profile.name} onChange={(e) => handleChange("name", e.target.value)} className="bg-muted/50 border-border/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="profile-email">Email</Label>
                <Input id="profile-email" type="email" value={profile.email} onChange={(e) => handleChange("email", e.target.value)} className="bg-muted/50 border-border/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="profile-phone">Phone</Label>
                <Input id="profile-phone" value={profile.phone} onChange={(e) => handleChange("phone", e.target.value)} className="bg-muted/50 border-border/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="profile-location">Location</Label>
                <Input id="profile-location" value={profile.location} onChange={(e) => handleChange("location", e.target.value)} className="bg-muted/50 border-border/50" />
              </div>
            </div>
          </div>

          <div className="glass-card p-6 space-y-4 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <h3 className="font-display font-semibold text-lg">Farm Details</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="profile-farm">Farm Size</Label>
                <Input id="profile-farm" value={profile.farmSize} onChange={(e) => handleChange("farmSize", e.target.value)} className="bg-muted/50 border-border/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="profile-crops">Main Crops</Label>
                <Input id="profile-crops" value={profile.mainCrops} onChange={(e) => handleChange("mainCrops", e.target.value)} className="bg-muted/50 border-border/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="profile-exp">Farming Experience</Label>
                <Input id="profile-exp" value={profile.experience} onChange={(e) => handleChange("experience", e.target.value)} className="bg-muted/50 border-border/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="profile-bio">Bio</Label>
                <Input id="profile-bio" value={profile.bio} onChange={(e) => handleChange("bio", e.target.value)} className="bg-muted/50 border-border/50" />
              </div>
            </div>
          </div>

          <Button onClick={handleSave} className="w-full gradient-bg text-primary-foreground font-semibold hover:opacity-90">
            Save Profile
          </Button>
        </div>
      </main>
    </>
  );
}
