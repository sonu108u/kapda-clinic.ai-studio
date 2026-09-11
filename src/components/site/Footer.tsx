import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail, Sparkles, Facebook, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WhatsAppIcon } from "./WhatsAppFab";

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
              <img src="/logo.png" alt="Kapda Clinic Logo" className="w-full h-full object-contain p-0.5" />
            </div>
            <div>
              <div className="font-display text-xl font-bold">Kapda Clinic</div>
              <div className="text-xs italic text-white/60">Expert Care For Every Fabric</div>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Premium laundry & dry cleaning in Sangam Vihar — trusted family-run shop with free doorstep pickup, expert care, and fair prices.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="#" aria-label="Facebook" className="h-9 w-9 rounded-full bg-white/10 hover:bg-gold hover:text-primary flex items-center justify-center transition-smooth">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="h-9 w-9 rounded-full bg-white/10 hover:bg-gold hover:text-primary flex items-center justify-center transition-smooth">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://wa.me/918920418164" aria-label="WhatsApp" className="h-9 w-9 rounded-full bg-[#25D366] hover:bg-gold hover:text-primary flex items-center justify-center transition-smooth">
              <WhatsAppIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-display text-lg mb-4 text-gold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/75">
            <li><a href="/#home" className="hover:text-gold transition-smooth">Home</a></li>
            <li><a href="/#services" className="hover:text-gold transition-smooth">Services</a></li>
            <li><a href="/#how-it-works" className="hover:text-gold transition-smooth">How It Works</a></li>
            <li><a href="/#about" className="hover:text-gold transition-smooth">About Shop</a></li>
            <li><Link to="/privacy" className="hover:text-gold transition-smooth">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-gold transition-smooth">Terms</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-lg mb-4 text-gold">Contact</h3>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" /> E-6/142, Block E, Sangam Vihar, New Delhi – 110080. Near Lakshmi Narayan Mandir.</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 text-gold shrink-0 mt-0.5" /> <a href="tel:8920418164" className="hover:text-gold">8920418164</a></li>
            <li className="flex gap-2"><Clock className="h-4 w-4 text-gold shrink-0 mt-0.5" /> Mon – Sun · 8:00 AM – 9:00 PM</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-gold shrink-0 mt-0.5" /> kapdaclinicdryclean@gmail.com</li>
          </ul>
          <a
            href="https://wa.me/918920418164"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-md text-sm font-semibold hover:opacity-90 transition-smooth"
          >
            <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>

        <div>
          <h3 className="font-display text-lg mb-4 text-gold">Newsletter</h3>
          <p className="text-sm text-white/70 mb-3">Tips, offers & seasonal discounts.</p>
          <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
            <Input type="email" placeholder="you@email.com" className="bg-white/10 border-white/20 text-white placeholder:text-white/40" />
            <Button type="submit" className="bg-gradient-gold text-gold-foreground hover:opacity-90">Subscribe</Button>
          </form>

          <div className="mt-6 rounded-lg overflow-hidden border border-white/10 aspect-video">
            <iframe
              title="Kapda Clinic location"
              src="https://www.google.com/maps?q=Sangam+Vihar+E+Block+New+Delhi&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} Kapda Clinic · Shafi Khan. All rights reserved.</p>
          <p>Crafted with care for every fabric.</p>
        </div>
      </div>
    </footer>
  );
}
