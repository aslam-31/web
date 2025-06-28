import { useState, useEffect } from "react";
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
import { Testimonials } from "@/components/Testimonials";
import { OurClients } from "@/components/OurClients";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { useLoading } from "@/components/LoadingProvider";

export default function Home() {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Start loading when component mounts
    startLoading();
    
    // Check if all images are loaded
    const checkImagesLoaded = () => {
      const images = document.querySelectorAll('img');
      let loadedCount = 0;
      
      if (images.length === 0) {
        setTimeout(() => {
          stopLoading();
          setShowContent(true);
        }, 1000);
        return;
      }

      const handleImageLoad = () => {
        loadedCount++;
        if (loadedCount >= images.length) {
          setTimeout(() => {
            stopLoading();
            setShowContent(true);
          }, 1000);
        }
      };

      images.forEach((img) => {
        if (img.complete && img.naturalHeight !== 0) {
          loadedCount++;
        } else {
          img.onload = handleImageLoad;
          img.onerror = handleImageLoad;
        }
      });

      if (loadedCount >= images.length) {
        setTimeout(() => {
          stopLoading();
          setShowContent(true);
        }, 1000);
      }
    };

    // Check images after a short delay to let them start loading
    const timer = setTimeout(checkImagesLoaded, 1500);

    return () => clearTimeout(timer);
  }, [startLoading, stopLoading]);

  if (isLoading) {
    return (
      <LoadingScreen 
        onComplete={() => {
          stopLoading();
          setShowContent(true);
        }} 
      />
    );
  }

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
      <Testimonials />
      <OurClients />
      <Contact />
      <Footer />
    </div>
  );
}
