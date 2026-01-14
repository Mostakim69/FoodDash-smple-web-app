import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import PopularDishes from "@/components/PopularDishes";
import PromoCards from "@/components/PromoCards";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/Features";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <PopularDishes />
      <FeaturesSection />
      <PromoCards />
      <Footer />
    </>
  );
}
