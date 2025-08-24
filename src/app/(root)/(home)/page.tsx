import HeroSection from "@/app/(root)/(home)/_components/HeroSection";
import CompanyOverview from "./_components/CompanyOverview";
import ProductsHighlight from "./_components/ProductsHighlight";
import Testimonials from "./_components/Testimonials";

const HomePage = () => {
  return (
    <>
      <HeroSection />;
      <CompanyOverview />
      <ProductsHighlight />
      <Testimonials />
    </>
  );
};

export default HomePage;
