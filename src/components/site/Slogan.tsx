import { motion } from "framer-motion";

export function Slogan() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-luxury text-primary-foreground">
      <div className="absolute inset-0 animate-shimmer opacity-30" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05]"
        >
          Your Clothes Deserve <br />
          <span className="text-gradient-gold">Professional Care</span>
        </motion.h2>
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 mx-auto h-px w-24 bg-gradient-gold origin-center" 
        />
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 font-display text-xl md:text-2xl text-white/85 italic"
        >
          Premium Laundry & Dry Cleaning Services <br className="hidden sm:block" />
          At Your Doorstep
        </motion.p>
      </div>
    </section>
  );
}
