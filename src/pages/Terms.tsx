import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="font-display text-5xl font-bold mb-4">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        <div className="space-y-4 text-foreground/90 leading-relaxed">
          <p>By using Kapda Clinic services, you agree to these terms. We undertake reasonable care of all garments entrusted to us and follow industry-standard cleaning practices.</p>
          <p>Liability for damages, where applicable, is limited to ten times the cleaning charge of the garment in question. Pickup and delivery are subject to availability within our service area.</p>
          <p>For any concerns or claims, please contact us within 48 hours of delivery at 8920418164.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
