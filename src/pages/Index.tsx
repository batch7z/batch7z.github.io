import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import BlogSection from "@/components/BlogSection";
import AboutSection from "@/components/AboutSection";
import QuranPlayer from "@/components/QuranPlayer";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <BlogSection />
      <QuranPlayer />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
