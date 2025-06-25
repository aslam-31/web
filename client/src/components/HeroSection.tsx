import { useState, useEffect } from "react";
import { useLanguage } from "./LanguageProvider";

const heroImages = [
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
  "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
  "https://images.unsplash.com/photo-1605902711834-8b11c3e3ef2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
  "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
];

const animations = [
  'animate-slide-left',
  'animate-slide-right', 
  'animate-zoom-in',
  'animate-zoom-out',
  'animate-fade-up',
  'animate-fade-down'
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentAnimation, setCurrentAnimation] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
      setCurrentAnimation((prev) => (prev + 1) % animations.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen hero-bg relative overflow-hidden">
      <div className="absolute inset-0 noise-grid opacity-20"></div>
      
      {/* Auto-sliding Background Images with Smooth Transitions */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-2000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-20' 
                : 'opacity-0'
            }`}
            style={{ 
              backgroundImage: `url(${image})`,
              filter: 'grayscale(100%) contrast(1.2)',
              transform: index === currentSlide 
                ? 'scale(1.02)' 
                : 'scale(1.05)',
            }}
          />
        ))}
      </div>

      {/* Enhanced Background Overlay */}
      <div className="absolute inset-0 z-1">
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/30 to-white/70 dark:from-black/70 dark:via-black/30 dark:to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/40 dark:from-black/40 dark:via-transparent dark:to-black/40"></div>
        
        {/* Moving Vectors Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
            {/* Animated Lines */}
            <g className="animate-pulse">
              <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="currentColor" strokeWidth="1" opacity="0.1" className="text-black dark:text-white">
                <animateTransform attributeName="transform" type="translate" values="0,0; 50,30; 0,0" dur="8s" repeatCount="indefinite"/>
              </line>
              <line x1="70%" y1="10%" x2="90%" y2="30%" stroke="currentColor" strokeWidth="1" opacity="0.1" className="text-black dark:text-white">
                <animateTransform attributeName="transform" type="translate" values="0,0; -30,50; 0,0" dur="10s" repeatCount="indefinite"/>
              </line>
              <line x1="20%" y1="80%" x2="40%" y2="60%" stroke="currentColor" strokeWidth="1" opacity="0.1" className="text-black dark:text-white">
                <animateTransform attributeName="transform" type="translate" values="0,0; 40,-20; 0,0" dur="12s" repeatCount="indefinite"/>
              </line>
            </g>
            
            {/* Animated Arrows */}
            <g className="animate-pulse">
              <path d="M15,25 L35,35 M30,30 L35,35 L30,40" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.15" className="text-black dark:text-white">
                <animateTransform attributeName="transform" type="translate" values="0,0; 100,50; 0,0" dur="15s" repeatCount="indefinite"/>
              </path>
              <path d="M75,15 L95,25 M90,20 L95,25 L90,30" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.15" className="text-black dark:text-white">
                <animateTransform attributeName="transform" type="translate" values="0,0; -50,80; 0,0" dur="18s" repeatCount="indefinite"/>
              </path>
            </g>
            
            {/* Animated Geometric Shapes */}
            <g className="animate-pulse">
              <circle cx="85%" cy="75%" r="3" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.1" className="text-black dark:text-white">
                <animateTransform attributeName="transform" type="translate" values="0,0; -80,-40; 0,0" dur="20s" repeatCount="indefinite"/>
              </circle>
              <polygon points="10,10 20,5 30,10 25,20 15,20" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.1" className="text-black dark:text-white">
                <animateTransform attributeName="transform" type="translate" values="0,0; 120,60; 0,0" dur="22s" repeatCount="indefinite"/>
              </polygon>
            </g>
          </svg>
        </div>
      </div>

      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 text-black dark:text-white leading-tight">
                <span className="inline-block animate-slide-right">{t("hero.title.main")}</span>
                <br />
                <span className="inline-block text-black dark:text-white animate-slide-left animation-delay-300">
                  {t("hero.title.accent")}
                </span>
              </h1>
            </div>
            
            <div className="relative">
              <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-gray-800 dark:text-gray-200 animate-fade-up animation-delay-600 max-w-4xl mx-auto font-light">
                {t("hero.subtitle")}
              </p>
              
              {/* Animated underline */}
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-black dark:via-white to-transparent mx-auto mb-12 animate-pulse"></div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up animation-delay-900">
              <button 
                onClick={scrollToProducts}
                className="group noise-grid gradient-border glass px-10 py-5 rounded-2xl text-black dark:text-white hover-scale transition-all duration-500 font-semibold text-lg relative overflow-hidden"
              >
                <span className="relative z-10">{t("hero.cta.primary")}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/5 dark:from-white/10 dark:to-white/5 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              </button>
              <button 
                onClick={scrollToContact}
                className="group bg-black dark:bg-white text-white dark:text-black px-10 py-5 rounded-2xl hover-scale transition-all duration-500 font-semibold text-lg border-2 border-transparent hover:border-black/20 dark:hover:border-white/20 relative overflow-hidden"
              >
                <span className="relative z-10">{t("hero.cta.secondary")}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 dark:from-black/5 dark:to-black/10 transform skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              </button>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-1/4 left-10 w-4 h-4 bg-white/20 dark:bg-black/20 rounded-full animate-float animation-delay-1000"></div>
            <div className="absolute top-1/3 right-16 w-6 h-6 border-2 border-white/30 dark:border-black/30 rounded-full animate-float animation-delay-1500"></div>
            <div className="absolute bottom-1/4 left-20 w-2 h-2 bg-white/40 dark:bg-black/40 rounded-full animate-float animation-delay-2000"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce animation-delay-2000">
        <div className="w-8 h-12  border-2 border-white/60 dark:border-black/60 rounded-full flex justify-center relative overflow-hidden">
          <div className="w-1 h-4 bg-white dark:bg-black rounded-full mt-2 animate-pulse"></div>
          <div className="absolute inset-0 border-2 border-white/20 dark:border-black/20 rounded-full animate-ping"></div>
        </div>
        <p className="text-white/60 dark:text-black/60 text-sm mt-2 animate-pulse">Scroll Down</p>
      </div>
    </section>
  );
}
