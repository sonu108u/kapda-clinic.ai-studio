import {
  Truck, BadgeIndianRupee, Wrench, Sparkles, FlaskConical, TestTube,
  Wind, ShieldCheck, Package, Clock
} from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: Truck, title: "Free Doorstep Pickup & Drop", text: "We come to you — schedule & relax." },
  { icon: BadgeIndianRupee, title: "Affordable Pricing", text: "Transparent, fair, premium value." },
  { icon: Wrench, title: "Minor Repairs Check", text: "We fix small issues, free of cost." },
  { icon: Sparkles, title: "Professional Cleaning", text: "Trained experts, careful handling." },
  { icon: FlaskConical, title: "Certified Detergent", text: "Eco-safe & fabric-friendly." },
  { icon: TestTube, title: "Qualified Chemicals", text: "Industry-grade, dermatologist tested." },
  { icon: Wind, title: "Steam Press Finish", text: "Crisp lines, boardroom ready." },
  { icon: ShieldCheck, title: "100% Sanitized", text: "Hygienic, fresh, germ-free." },
  { icon: Package, title: "Custom Packaging", text: "Fold or hang, delivered with care." },
  { icon: Clock, title: "On-Demand Service", text: "Express turnaround when you need it." },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, ease: "easeOut" } }
};

const item = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 md:py-16 bg-gradient-luxury text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 25% 25%, oklch(0.78 0.13 80) 0%, transparent 40%), radial-gradient(circle at 75% 75%, oklch(0.78 0.13 80) 0%, transparent 40%)" }} />
      <div className="mx-auto max-w-7xl px-6 relative">

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold font-semibold">The Process</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">
            How It <span className="text-gradient-gold">Works</span>
          </h2>
          <p className="mt-2 text-sm text-white/70">A seamless ten-step journey from your wardrobe back to perfection.</p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              variants={item}
              className="group relative"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-3">
                  <div className="absolute inset-0 bg-gradient-gold rounded-full opacity-30 group-hover:opacity-60 transition-colors duration-300" />
                  <div className="relative h-14 w-14 md:h-16 md:w-16 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300 transform-gpu will-change-transform">
                    <s.icon className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                  </div>
                  <span className="absolute -top-1 -right-1 h-5 w-5 md:h-6 md:w-6 rounded-full bg-white text-primary text-[10px] md:text-xs font-bold flex items-center justify-center shadow-md">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display text-sm md:text-base font-semibold mb-1">{s.title}</h3>
                <p className="text-[10px] md:text-xs text-white/65 leading-relaxed px-2">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
