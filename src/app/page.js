import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import PopularDishes from "@/components/PopularDishes";
import PromoCards from "@/components/PromoCards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <Hero />
        <Categories />
        <PopularDishes />
        <PromoCards />
      </main>

      <Footer />
    </>
  );
}
