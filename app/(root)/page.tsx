import About from "@/components/sections/About";
import Features from "@/components/sections/Features";
import FeaturedArticles from "@/components/sections/FeautredArticles";
import Gallery from "@/components/sections/Gallery";
import HomeHero from "@/components/sections/HomeHero";
import Pricing from "@/components/sections/Pricing";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function Home() {

  return (
    <>
      <Header />
      <HomeHero />
      <About />
      <Services />
      <Features />
      <Gallery />
      <Pricing />
      <Testimonials />
      <FeaturedArticles />
      <Footer />
    </>
  );
}
