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

      <section id="hero">
        <Hero />
      </section>

      <section id="categories">
        <Categories />
      </section>

      <section id="popular-dishes">
        <PopularDishes />
      </section>

      <section id="features">
        <FeaturesSection />
      </section>

      <section id="promo-cards">
        <PromoCards />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </>
  );
}
