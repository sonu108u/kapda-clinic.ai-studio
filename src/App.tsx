import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import PrivacyPage from "@/pages/Privacy";
import TermsPage from "@/pages/Terms";
import CartPage from "@/pages/Cart";
import ProfilePage from "@/pages/Profile";
import OrdersPage from "@/pages/Orders";
import ServiceDetails from "@/pages/ServiceDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
