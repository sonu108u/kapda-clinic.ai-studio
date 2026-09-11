import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Special } from "@/components/site/Special";
import { FreeOfferings } from "@/components/site/FreeOfferings";
import { AboutShop } from "@/components/site/AboutShop";
import { Slogan } from "@/components/site/Slogan";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Special />
        <FreeOfferings />
        <AboutShop />
        <Slogan />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
