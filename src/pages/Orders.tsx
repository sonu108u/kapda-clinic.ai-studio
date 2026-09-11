import { Package, ArrowLeft, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function OrdersPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1599553755455-89f925b4260a?auto=format&fit=crop&w=2000&q=80")' }}
      >
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      </div>

      <div className="flex-1 container max-w-4xl mx-auto py-12 px-4 md:px-6 relative z-10">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-smooth">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>
        <div className="flex items-center gap-3 mb-8">
          <Package className="h-8 w-8 text-gold" />
          <h1 className="font-display text-3xl md:text-4xl font-bold">My Orders</h1>
        </div>
        
        <div className="bg-card/80 backdrop-blur-md rounded-2xl border border-border shadow-luxury p-12 flex flex-col items-center justify-center text-center">
          <Clock className="h-16 w-16 text-muted-foreground mb-4 opacity-20" />
          <h2 className="text-xl font-bold mb-2">No active orders</h2>
          <p className="text-muted-foreground mb-6 max-w-md">
            You don't have any recent orders. Book a pickup today to give your clothes the premium care they deserve.
          </p>
          <Button asChild className="bg-gold text-gold-foreground hover:bg-gold/90 shadow-gold">
            <Link to="/#services">Book Pickup</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
