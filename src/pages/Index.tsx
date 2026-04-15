import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ModulesSection from "@/components/ModulesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-dvh bg-background text-foreground overflow-hidden selection:bg-neon selection:text-primary-foreground">
      {/* Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,hsl(var(--plating)/0.25)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--plating)/0.25)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ModulesSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
