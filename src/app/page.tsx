import ImageSlider from "./components/Courasel/Slider/ImageSlider";
import ExploreCategories from "./components/ExploringNewStyles";
import FeaturedProducts from "./components/FeauturedProduct";
import Footer from "./components/footer";
import HeroSection from "./components/HeroSection/Hero";
import OurProduct from "./components/OurProduct";
import TopCategories from "./components/TopCategories";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImageSlider />
      <FeaturedProducts />
      <TopCategories />
      <ExploreCategories />
      <OurProduct />
      <Footer />
    </>
  );
}
