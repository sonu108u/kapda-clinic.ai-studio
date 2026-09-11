import { User, ArrowLeft, Settings, Shield, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1558769132-cb1fac084092?auto=format&fit=crop&w=2000&q=80")' }}
      >
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      </div>

      <div className="flex-1 container max-w-4xl mx-auto py-12 px-4 md:px-6 relative z-10">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-smooth">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>
        <div className="flex items-center gap-3 mb-8">
          <User className="h-8 w-8 text-gold" />
          <h1 className="font-display text-3xl md:text-4xl font-bold">My Profile</h1>
        </div>
        
        <div className="grid md:grid-cols-[250px_1fr] gap-8">
          {/* Sidebar */}
          <div className="space-y-2">
            <Button variant="secondary" className="w-full justify-start font-medium bg-card/60 backdrop-blur-md border border-border">
              <User className="mr-3 h-4 w-4" /> Personal Info
            </Button>
            <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-primary hover:bg-card/40">
              <Shield className="mr-3 h-4 w-4" /> Security
            </Button>
            <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-primary hover:bg-card/40">
              <Bell className="mr-3 h-4 w-4" /> Notifications
            </Button>
            <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-primary hover:bg-card/40">
              <Settings className="mr-3 h-4 w-4" /> Settings
            </Button>
          </div>

          {/* Main content */}
          <div className="bg-card/80 backdrop-blur-md rounded-2xl border border-border shadow-luxury p-6 md:p-8">
            <div className="flex items-center gap-6 mb-8 pb-8 border-b border-border">
              <div className="h-20 w-20 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                <User className="h-10 w-10 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Guest User</h2>
                <p className="text-muted-foreground">guest@example.com</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Phone Number</p>
                <p className="font-medium">+91 - Not Added</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Address</p>
                <p className="font-medium text-muted-foreground italic">No address saved yet.</p>
              </div>
              
              <div className="pt-6">
                <Button className="bg-primary text-primary-foreground">
                  Edit Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
