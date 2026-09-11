import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const slides = [
  "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1582735689146-2bf905d4df48?auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1536&q=80"
];

export function AboutShop() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="about" className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-luxury">
            {slides.map((s, idx) => (
              <img
                key={idx}
                src={s}
                alt="Kapda Clinic shop"
                width={1536}
                height={1024}
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
          </div>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring" }}
            className="absolute -bottom-6 -right-6 hidden md:block bg-gradient-gold p-6 rounded-2xl shadow-gold animate-float"
          >
            <div className="text-3xl font-display font-bold text-primary">10+</div>
            <div className="text-xs uppercase tracking-widest text-primary/80">Years of Trust</div>
          </motion.div>
          <div className="absolute top-4 left-4 flex gap-1.5">
            {slides.map((_, idx) => (
              <span key={idx} className={`h-1 rounded-full transition-all ${idx === i ? "w-8 bg-gold" : "w-3 bg-white/50"}`} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">About The Shop</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight">
            Trusted Fabric Care, <span className="text-gradient-gold">Crafted Locally</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            At <strong className="text-foreground">Kapda Clinic</strong>, we treat every garment like our own.
            From everyday cottons to bridal silks and tailored suits, our team blends old-school craftsmanship with
            modern, certified processes — so your clothes look newer, smell fresher, and last longer.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Premium service shouldn't be a luxury. With free doorstep pickup & drop across Sangam Vihar and beyond,
            we make professional fabric care effortless and affordable.
          </p>

          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {[
              "Family-run since a decade",
              "Eco-certified detergents",
              "Hand-finished pressing",
              "100% sanitized garments",
            ].map((t, idx) => (
              <motion.li 
                key={t}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="flex items-center gap-2 text-sm"
              >
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                <span>{t}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
