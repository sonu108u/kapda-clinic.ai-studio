import { Wrench, Scissors, Shirt, Sparkles, Gift } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: Wrench, title: "Minor Repair", image: "/minor-repair.jpeg" },
  { icon: Scissors, title: "Bottom Stitching", image: "/bottom-stitching.jpeg" },
  { icon: Shirt, title: "Collar Bone Replacement", image: "/collar-bone-replacement.jpeg" },
  { icon: Sparkles, title: "Cotton Ring Care & Starching", image: "/cotton-ring-care.jpeg" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, ease: "easeOut" } }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

export function FreeOfferings() {
  return (
    <section id="free-offerings" className="py-20 md:py-28 bg-secondary overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold font-semibold">
            <Gift className="h-4 w-4" /> Complimentary
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Free Offerings <span className="text-gradient-gold">With Dry Cleaning</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every dry cleaning order includes these on the house — because the details matter.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {items.map((s) => (
            <motion.div
              key={s.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group aspect-[4/5] sm:aspect-square relative overflow-hidden rounded-2xl bg-card border border-border text-center transition-smooth shadow-card hover:shadow-luxury cursor-pointer"
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

              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gold text-gold-foreground text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-lg z-10 border border-white/20">
                Free
              </div>
              
              <div className="relative h-full flex flex-col items-center justify-end p-6 text-center z-10">
                <div className="h-14 w-14 mx-auto rounded-full bg-black/60 border border-white/10 group-hover:border-gold/50 flex items-center justify-center mb-4 transition-transform duration-300 transform-gpu group-hover:-translate-y-2">
                  <s.icon className="h-7 w-7 text-white group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="font-display font-semibold text-base sm:text-lg text-white drop-shadow-md transform-gpu transition-transform duration-300 group-hover:-translate-y-1">
                  {s.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
