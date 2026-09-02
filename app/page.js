import Hero from "@/components/home/Hero";
import BrandShowcase from "@/components/home/BrandShowcase";
import TrustSection from "@/components/home/TrustSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BulkCTA from "@/components/home/BulkCTA";
import WhyAtOne from "@/components/home/WhyAtOne";
import BusinessTypes from "@/components/home/BusinessTypes";
import BulkProcess from "@/components/home/BulkProcess";
import ManufacturingAbout from "@/components/home/ManufacturingAbout";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandShowcase />
      <TrustSection />
      <CategoriesSection />
      {/* <FeaturedProducts /> */}
      {/* <BulkCTA /> */}
      {/* <WhyAtOne /> */}
      <BusinessTypes />
      <BulkProcess />
      {/* <ManufacturingAbout /> */}
      <FinalCTA />
    </>
  );
}
