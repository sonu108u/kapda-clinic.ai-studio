import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="font-display text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        <div className="prose prose-neutral max-w-none space-y-4 text-foreground/90 leading-relaxed">
          <p>Kapda Clinic respects your privacy. We collect only the information needed to provide our laundry and dry cleaning services — your name, address, phone number, and order details.</p>
          <p>We never sell or share your personal data with third parties for marketing purposes. Your contact details are used solely for pickup/delivery coordination and order updates.</p>
          <p>For any privacy queries, contact us at 8920418164.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
