import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryTabs from "@/components/CategoryTabs";
import FeaturedProducts from "@/components/FeaturedProducts";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CategoryTabs />
      <FeaturedProducts />
    </div>
  );
};

export default Index;
