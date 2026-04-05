import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ProductsSection from "@/components/ProductsSection";
import PopularCalcs from "@/components/PopularCalcs";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <ProductsSection />
        <PopularCalcs />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
