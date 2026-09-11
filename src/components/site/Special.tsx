import { Shirt, Heart, ShieldCheck, Wallet, Truck, ChevronRight, Shield, Leaf, Clock, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { 
    icon: Shirt, 
    title: "White Cloth", 
    text: "Brilliant whites, restored.",
    img: "/white-cloth-specialist.jpeg",
    pos: "left-[50%] top-[0%]" 
  },
  { 
    icon: Heart, 
    title: "Wedding Cloth", 
    text: "Heirloom-grade care.",
    img: "/wedding-cloth-specialist.jpeg",
    pos: "left-[95%] top-[38%]" 
  },
  { 
    icon: ShieldCheck, 
    title: "Luxury Fabric", 
    text: "Silk, wool, cashmere safe.",
    img: "/luxury-garments.jpg",
    pos: "left-[80%] top-[90%]" 
  },
  { 
    icon: Truck, 
    title: "Free Pickup", 
    text: "Always at your service.",
    img: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=400",
    pos: "left-[20%] top-[90%]" 
  },
  { 
    icon: Wallet, 
    title: "Budget Friendly", 
    text: "Premium without the price.",
    img: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=400",
    pos: "left-[5%] top-[38%]" 
  },
];

const trustMarkers = [
  { icon: Shield, title: "Trusted & Safe", desc: "Your clothes are in expert hands." },
  { icon: Leaf, title: "Eco-Friendly Process", desc: "Clean clothes, cleaner planet." },
  { icon: Clock, title: "On-Time Service", desc: "Because your time matters." },
  { icon: Star, title: "Quality Guaranteed", desc: "We care about every stitch." }
];

export function Special() {
  return (
    <section id="special" className="py-20 md:py-32 bg-zinc-950 overflow-hidden relative">
      
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/5 via-zinc-950 to-zinc-950 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Header Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.15]">
            <span className="text-gold font-light italic">Your Clothes Deserve</span><br/>
            The Best Care
          </h2>
          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto text-lg">
            Premium cleaning, expert care and complete garment solutions — all in one place.
          </p>
        </motion.div>

        <div className="flex flex-col items-center">
          
          {/* Main Content: Big Circle + Trust Markers */}
          <div className="flex flex-col items-center w-full max-w-5xl">
            
            {/* Large Circular Feature Graphic */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] rounded-full border border-gold/20 mb-20 md:mb-32 mx-auto"
            >
              {/* Inner glow - replaced blur with a fast radial gradient */}
              <div className="absolute inset-4 rounded-full bg-[radial-gradient(circle,_rgba(212,175,55,0.1)_0%,_transparent_70%)]" />
              
              {/* Center Logo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10">
                <div className="w-20 h-20 sm:w-28 sm:h-28 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)] border-4 border-zinc-950 p-2 sm:p-3">
                  <img src="/logo.png" alt="Kapda Clinic" className="w-full h-full object-contain" />
                </div>
              </div>
              
              {/* The small circles positioned on the edge */}
              {services.map((s, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5, ease: "easeOut" }}
                  className={`absolute ${s.pos} -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-24 sm:w-28 text-center z-20`}
                >
                  <div className="relative group cursor-pointer">
                    <img 
                      src={s.img} 
                      alt={s.title} 
                      className="w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-zinc-950 shadow-xl transform-gpu group-hover:scale-105 transition-transform duration-300 will-change-transform" 
                    />
                    {/* Little icon badge */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-7 h-7 sm:w-8 sm:h-8 bg-zinc-900 border border-gold/30 rounded-full flex items-center justify-center text-gold shadow-lg">
                      <s.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                  <h4 className="text-[10px] sm:text-xs font-bold text-white mt-3 leading-tight">{s.title}</h4>
                  <p className="text-[9px] sm:text-[10px] text-zinc-400 mt-1 leading-tight hidden sm:block">{s.text}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Markers (Bottom) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full mt-8"
            >
              {trustMarkers.map((t, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    <t.icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h5 className="font-bold text-sm text-white">{t.title}</h5>
                    <p className="text-xs text-zinc-400 mt-0.5">{t.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
