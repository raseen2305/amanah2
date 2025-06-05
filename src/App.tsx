import React, { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";
import MedicalProducts from "./pages/MedicalProducts";
import ChemicalProducts from "./pages/ChemicalProducts";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import PharmaceuticalCategories from "./components/PharmaceuticalCategories";
import ChemicalCategories from "./components/ChemicalCategories";
import Chatbot from "./components/Chatbot/chatbot";
import "./components/Chatbot/chatbot.css";

import AOS from "aos";
import "aos/dist/aos.css";
import ContactSection from "./components/ContactSection";
import EnquirySection from "./components/EnquirySection";
import Chemicals from "./components/chemical/Index";

const queryClient = new QueryClient();

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const toggleChat = () => setIsChatOpen(!isChatOpen);

  useEffect(() => {
    AOS.init({
      duration: 1300,
      delay: 200,
      offset: 100,
      once: true,
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/chemical-products" element={<ChemicalProducts />} />
            <Route path="/medical-products" element={<MedicalProducts />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/pharma-cat" element={<PharmaceuticalCategories />} />
            <Route path="/chem-cat" element={<ChemicalCategories />} />
            <Route path="/chemical" element={<Chemicals />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/enquiry" element={<EnquirySection />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* Floating Chatbot Button or Chatbot */}
          <div
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              zIndex: 9999,
            }}
          >
            {isChatOpen ? (
              <div
                style={{
                  boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                }}
              >
                {/* Just show chatbot */}
                <Chatbot onClose={toggleChat} />
              </div>
            ) : (
              // Floating Chat Button
              <button
                onClick={toggleChat}
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  fontSize: "24px",
                  border: "none",
                  cursor: "pointer",
                }}
                aria-label="Open Chatbot"
              >
                💬
              </button>
            )}
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;