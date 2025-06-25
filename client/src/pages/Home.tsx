import { Navigation } from "@/components/Navigation";
import { ThreeBackground } from "@/components/ThreeBackground";
import { MovingVectors } from "@/components/MovingVectors";
import { FloatingVectorField } from "@/components/FloatingVectorField";
import { HeroSection } from "@/components/HeroSection";
import { VisionMission } from "@/components/VisionMission";
import { Founders } from "@/components/Founders";
import { Products } from "@/components/Products";
import { ModernProducts } from "@/components/ModernProducts";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <ThreeBackground />
      <MovingVectors />
      <FloatingVectorField />
      <Navigation />
      <HeroSection />
      <VisionMission />
      <Founders />
      <Products />
      <ModernProducts />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
