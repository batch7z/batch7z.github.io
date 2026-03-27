import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DashboardSection from "@/components/DashboardSection";
import WriteupsSection from "@/components/WriteupsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DashboardSection />
      <WriteupsSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
