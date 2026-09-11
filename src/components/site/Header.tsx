import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ShoppingCart, User, Package, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Special Features", href: "/#special" },
  { label: "Free Offerings", href: "/#free-offerings" },
  { label: "About Shop", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[360px] bg-gradient-luxury text-primary-foreground border-0 p-0">
              <SheetHeader className="p-6 border-b border-white/10">
                <SheetTitle className="text-primary-foreground flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <img src="/logo.png" alt="Kapda Clinic Logo" className="w-full h-full object-contain p-0.5" />
                  </div>
                  <span className="font-display text-2xl">Kapda Clinic</span>
                </SheetTitle>
                <p className="text-xs text-white/60 italic mt-1">Expert Care For Every Fabric</p>
              </SheetHeader>
              <nav className="flex flex-col p-4">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    className="group flex items-center justify-between px-4 py-3 rounded-md hover:bg-white/10 transition-smooth"
                  >
                    <span className="text-sm font-medium tracking-wide">{item.label}</span>
                    <span className="text-gold opacity-0 group-hover:opacity-100 transition-smooth">→</span>
                  </motion.a>
                ))}
                <div className="my-3 h-px bg-white/10" />
                <Link to="/privacy" onClick={() => setOpen(false)} className="px-4 py-3 text-sm text-white/70 hover:text-gold transition-smooth">
                  Privacy Policy
                </Link>
                <Link to="/terms" onClick={() => setOpen(false)} className="px-4 py-3 text-sm text-white/70 hover:text-gold transition-smooth">
                  Terms
                </Link>
              </nav>
              <div className="absolute bottom-6 left-6 right-6">
                <a
                  href="https://wa.me/918920418164"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center bg-gold text-gold-foreground rounded-md py-3 font-semibold shadow-gold hover:scale-[1.02] transition-smooth"
                >
                  WhatsApp Us
                </a>
              </div>
            </SheetContent>
          </Sheet>

          <a href="/#home" className="flex items-center gap-2 md:gap-3 group">
            <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center overflow-hidden bg-white shadow-gold shrink-0">
              <img src="/logo.png" alt="Kapda Clinic Logo" className="w-full h-full object-contain p-0.5" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-lg md:text-xl font-bold text-foreground">
                Kapda Clinic
              </span>
              <span className="text-[10px] md:text-xs text-muted-foreground italic tracking-wide">
                Expert Care For Every Fabric
              </span>
            </div>
          </a>
        </div>

        <div className="flex items-center gap-1 md:gap-2">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link to="/profile">
              <Button variant="ghost" size="icon" aria-label="Account">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
