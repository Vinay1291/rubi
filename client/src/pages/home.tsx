import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductCarousel from "@/components/ProductCarousel";
import ServicesGrid from "@/components/ServicesGrid";
import IndustriesSection from "@/components/IndustriesSection";
import AboutSection from "@/components/AboutSection";
import ClientsSection from "@/components/ClientsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductCarousel />
      <ServicesGrid />
      <IndustriesSection />
      <AboutSection />
      <ClientsSection />
      <Footer />
    </div>
  );
}
