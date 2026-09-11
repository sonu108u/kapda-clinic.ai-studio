import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Search } from "lucide-react";

// Mock data based on the provided price list
const serviceData = {
  "dry-cleaning": {
    title: "Dry Cleaning Services",
    description: "Premium dry cleaning for all your garments. We ensure deep cleaning and care.",
    items: [
      { name: "Pant", price: "₹80", img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=300&auto=format&fit=crop" },
      { name: "Shirt", price: "₹80", img: "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?q=80&w=300&auto=format&fit=crop" },
      { name: "T-Shirt", price: "₹70", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=300&auto=format&fit=crop" },
      { name: "Jacket", price: "₹120-150", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=300&auto=format&fit=crop" },
      { name: "Half Jacket", price: "₹90", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=300&auto=format&fit=crop" },
      { name: "Kurta Pajama", price: "₹150", img: "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?q=80&w=300&auto=format&fit=crop" },
      { name: "Pullover", price: "₹120", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=300&auto=format&fit=crop" },
      { name: "Sweater", price: "₹100", img: "https://images.unsplash.com/photo-1614975059251-992f11792b9f?q=80&w=300&auto=format&fit=crop" },
      { name: "Saree", price: "₹200", img: "https://images.unsplash.com/photo-1610189044275-c9415494a50d?q=80&w=300&auto=format&fit=crop" },
      { name: "Ladies Suit", price: "₹200", img: "https://plus.unsplash.com/premium_photo-1682089874677-3eee554fee19?q=80&w=300&auto=format&fit=crop" },
      { name: "School Dress", price: "₹60", img: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=300&auto=format&fit=crop" },
      { name: "Double Blanket", price: "₹300-400", img: "https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?q=80&w=300&auto=format&fit=crop" },
      { name: "Single Blanket", price: "₹150-200", img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=300&auto=format&fit=crop" },
      { name: "Double Quilt", price: "₹300-400", img: "https://images.unsplash.com/photo-1616428779958-f54245d61486?q=80&w=300&auto=format&fit=crop" },
      { name: "Single Quilt", price: "₹150-200", img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=300&auto=format&fit=crop" },
      { name: "Curtain", price: "₹150-200", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=300&auto=format&fit=crop" },
      { name: "Suit (2 Piece)", price: "₹280", img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=300&auto=format&fit=crop" },
      { name: "3 Piece Suit", price: "₹360", img: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=300&auto=format&fit=crop" },
      { name: "Shoes", price: "₹200-250", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=300&auto=format&fit=crop" },
      { name: "School Coat", price: "₹150", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=300&auto=format&fit=crop" },
      { name: "Saree Charak", price: "₹70", img: "https://images.unsplash.com/photo-1583391733959-1f5139a13b6f?q=80&w=300&auto=format&fit=crop" },
      { name: "Bed Sheet", price: "₹70", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=300&auto=format&fit=crop" },
      { name: "Sofa", price: "₹250-300", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=300&auto=format&fit=crop" },
      { name: "Carpet", price: "₹20-25 /sqft", img: "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=300&auto=format&fit=crop" },
      { name: "Lower/Shirt", price: "₹60", img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=300&auto=format&fit=crop" },
      { name: "Dhoti Kurta", price: "₹140", img: "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?q=80&w=300&auto=format&fit=crop" },
    ]
  },
  "steam-press": {
    title: "Steam Press Services",
    description: "Crisp and wrinkle-free finish for your daily wear and special garments.",
    items: [
      { name: "Pant", price: "₹25", img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=300&auto=format&fit=crop" },
      { name: "Shirt", price: "₹25", img: "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?q=80&w=300&auto=format&fit=crop" },
      { name: "T-Shirt", price: "₹20", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=300&auto=format&fit=crop" },
      { name: "Jacket", price: "₹40", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=300&auto=format&fit=crop" },
      { name: "Half Jacket", price: "₹30", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=300&auto=format&fit=crop" },
      { name: "Kurta Pajama", price: "₹50", img: "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?q=80&w=300&auto=format&fit=crop" },
      { name: "Pullover", price: "₹40", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=300&auto=format&fit=crop" },
      { name: "Sweater", price: "₹30", img: "https://images.unsplash.com/photo-1614975059251-992f11792b9f?q=80&w=300&auto=format&fit=crop" },
      { name: "Saree", price: "₹100", img: "https://images.unsplash.com/photo-1610189044275-c9415494a50d?q=80&w=300&auto=format&fit=crop" },
      { name: "Ladies Suit", price: "₹80", img: "https://plus.unsplash.com/premium_photo-1682089874677-3eee554fee19?q=80&w=300&auto=format&fit=crop" },
      { name: "School Dress", price: "₹20", img: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=300&auto=format&fit=crop" },
      { name: "Suit (2 Piece)", price: "₹100", img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=300&auto=format&fit=crop" },
      { name: "3 Piece Suit", price: "₹120", img: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=300&auto=format&fit=crop" },
      { name: "School Coat", price: "₹50", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=300&auto=format&fit=crop" },
      { name: "Bed Sheet", price: "₹20", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=300&auto=format&fit=crop" },
      { name: "Dhoti Kurta", price: "₹45", img: "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?q=80&w=300&auto=format&fit=crop" },
    ]
  }
};

export default function ServiceDetails() {
  const { id } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  
  // @ts-ignore
  const service = serviceData[id] || {
    title: "Service Details",
    description: "Premium care for your garments.",
    items: []
  };

  const filteredItems = service.items.filter((item: any) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Premium Uploaded Background Layer */}
      <div 
        className="fixed inset-0 pointer-events-none -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/bg.png')`,
          backgroundColor: '#f4eee1'
        }}
      />

      <Header />
      
      <main className="flex-1 relative z-10">
        {/* Exhibition Style Header */}
        <div className="pt-12 md:pt-16 pb-4 md:pb-8 relative">
          <div className="mx-auto max-w-7xl px-4 md:px-6 relative text-center">
            <Link to="/#services" className="inline-flex items-center text-[#1a365d]/70 hover:text-gold text-sm font-medium mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
            </Link>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-display font-bold mb-3 text-[#0f294d]"
            >
              {service.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[#334155] max-w-xl mx-auto text-xs md:text-sm mb-8"
            >
              {service.description}
            </motion.p>
            
            {/* Search Bar */}
            {service.items.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="max-w-md mx-auto relative shadow-sm hover:shadow-md transition-shadow rounded-full"
              >
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-[#64748b]" />
                </div>
                <input
                  type="text"
                  placeholder="Search for an item..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3 border border-white/50 rounded-full leading-5 bg-white/80 backdrop-blur-sm text-[#0f294d] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 sm:text-sm transition-all"
                />
              </motion.div>
            )}
          </div>
        </div>

        {/* Mini Boxes Grid Section */}
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-6 md:py-12">
          {service.items.length > 0 ? (
            filteredItems.length > 0 ? (
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-5">
                {filteredItems.map((item: any, i: number) => (
                  <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (i % 20) * 0.03 }}
                    className="bg-[#fcfaf7] rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:shadow-gold/20 transition-all border border-[#eaddce] group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-[#f4eee1] p-1.5 sm:p-2">
                      <div className="w-full h-full rounded-lg overflow-hidden bg-white">
                        <img 
                          src={item.img} 
                          alt={item.name}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    <div className="p-2 sm:p-3 text-center bg-[#fcfaf7]">
                      <h3 className="text-[10px] sm:text-xs font-bold text-[#0f294d] leading-tight line-clamp-1 mb-1">
                        {item.name}
                      </h3>
                      <div className="text-[11px] sm:text-sm font-bold text-[#b48e4b]">
                        {item.price}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-zinc-500">No items found matching "{searchQuery}"</p>
              </div>
            )
          ) : (
            <div className="text-center py-20">
              <p className="text-zinc-500">More details coming soon for this service.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
