import { Link } from "react-router-dom";
import { 
  Shirt, Wind, Scissors, WashingMachine, Flame, Sofa, Layers, 
  Crown, Briefcase, Gem, Baby, Building2, Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { id: "dry-cleaning", icon: Shirt, title: "Dry Cleaning", image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=800&q=80" },
  { id: "steam-press", icon: Wind, title: "Steam Press", image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80" },
  { id: "alteration-repair", icon: Scissors, title: "Alteration & Repair", image: "/alterations-and-repairs.jpg" },
  { id: "wash-and-fold", icon: WashingMachine, title: "Wash & Fold", image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=800&q=80" },
  { id: "iron", icon: Flame, title: "Iron", image: "/iron-press.jpg" },
  { id: "carpet-cleaning", icon: Layers, title: "Carpet Cleaning", image: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=800&q=80" },
  { id: "sofa-cleaning", icon: Sofa, title: "Sofa Cleaning", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80" },
  { id: "leather-care", icon: Crown, title: "Leather Care", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80" },
  { id: "suit-dry-cleaning", icon: Briefcase, title: "Suit Dry Cleaning", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80" },
  { id: "luxury-garments", icon: Gem, title: "Luxury Garments", image: "/luxury-garments.jpg" },
  { id: "baby-wear-cleaning", icon: Baby, title: "Baby Wear Cleaning", image: "/baby-wear-cleaning.jpg" },
  { id: "bulk-commercial", icon: Building2, title: "Bulk Commercial", image: "/bulk-commercial.jpg" },
  { id: "cotton-cleaning", icon: Sparkles, title: "Cotton Cleaning", image: "/cotton-cleaning.jpg" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: "easeOut"
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">What We Offer</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Our <span className="text-gradient-gold">Premium</span> Services
          </h2>
          <p className="mt-4 text-muted-foreground">
            Specialized fabric care backed by certified detergents, qualified chemicals, and decades of expertise.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Link
                to={`/services/${s.id}`}
                className="group aspect-[4/5] relative overflow-hidden rounded-2xl bg-card border border-border shadow-card hover:shadow-luxury transition-smooth cursor-pointer block h-full w-full"
              >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${s.image})` }}
              />
              {/* Overlay Gradients */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-smooth" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-luxury opacity-0 group-hover:opacity-40 transition-smooth mix-blend-overlay" />
              
              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-end p-5 text-center">
                <div className="h-12 w-12 rounded-full bg-black/60 border border-white/10 group-hover:border-gold/50 flex items-center justify-center mb-4 transition-transform duration-300 transform-gpu group-hover:-translate-y-2">
                  <s.icon className="h-6 w-6 text-white group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-white drop-shadow-md transform-gpu transition-transform duration-300 group-hover:-translate-y-1">
                  {s.title}
                </h3>
                <span className="mt-3 text-[10px] font-bold uppercase tracking-widest text-gold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 transform-gpu">
                  Book Now →
                </span>
              </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
