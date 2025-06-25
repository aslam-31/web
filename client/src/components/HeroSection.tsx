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
          <div className="text-center mt-[50px]">
            <div className="mb-6">
              <div className="flex justify-center items-center mb-4">
                {/* Logo for light mode */}
                <img 
                  src="/images/CLIFTON-CUT-BLACK.png" 
                  alt="CLIFTON Logo" 
                  className="h-24 sm:h-32 lg:h-40 w-auto animate-slide-right dark:hidden"
                />
                {/* Logo for dark mode */}
                <img 
                  src="/images/CLIFTON-CUT-WHITE.png" 
                  alt="CLIFTON Logo" 
                  className="h-24 sm:h-32 lg:h-40 w-auto animate-slide-right hidden dark:block"
                />
              </div>
            </div>

            {/* Centered Animated Text with Static Icons */}
            <div className="mb-8 text-center">
              <div className="flex items-center justify-center gap-3 flex-wrap animate-fade-up animation-delay-300">
                <div className="flex items-center gap-2">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100">CLIFTON</span>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 relative">
                    <svg className="w-full h-full text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L13.09 7.26L18 6L16.74 11.26L22 12L16.74 12.74L18 18L12.74 16.74L12 22L11.26 16.74L6 18L7.26 12.74L2 12L7.26 11.26L6 6L11.26 7.26L12 2Z"/>
                    </svg>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 relative z-10">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-gray-200">Import</span>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 relative">
                    <svg className="w-full h-full text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V12M7 8V4M17 8V12M17 16V20M3 12H21M7 8H17" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 20L8 16H16L12 20Z" />
                    </svg>
                  </div>
                </div>

                <span className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-700 dark:text-gray-300 relative z-10">&</span>

                <div className="flex items-center gap-2 relative z-10">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-gray-200">Export</span>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 relative">
                    <svg className="w-full h-full text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16V12M17 8V4M7 8V12M7 16V20M21 12H3M17 8H7" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4L16 8H8L12 4Z" />
                    </svg>
                  </div>
                </div>

                <div className="flex items-center gap-2 relative z-10">
                  <span className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-700 dark:text-gray-300">with</span>
                  <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-gray-200">Delivery</span>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 relative">
                    <svg className="w-full h-full text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                </div>

              </div>
            </div>
            
            <div className="relative">
              <p className="text-lg sm:text-xl lg:text-2xl mb-10 text-gray-700 dark:text-gray-300 animate-fade-up animation-delay-1500 max-w-4xl mx-auto font-normal leading-relaxed">
                {t("hero.subtitle")}
              </p>
              
              {/* Animated underline */}
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gray-800 dark:via-gray-200 to-transparent mx-auto mb-12 animate-pulse"></div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up animation-delay-900">
              <button 
                onClick={scrollToProducts}
                className="group noise-grid gradient-border glass px-8 py-4 rounded-xl text-black dark:text-white hover-scale transition-all duration-500 font-semibold text-lg relative overflow-hidden"
              >
                <span className="relative z-10">{t("hero.cta.primary")}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/5 dark:from-white/10 dark:to-white/5 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              </button>
              <button 
                onClick={scrollToContact}
                className="group bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl hover-scale transition-all duration-500 font-semibold text-lg border-2 border-transparent hover:border-black/20 dark:hover:border-white/20 relative overflow-hidden"
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
      {/* Double Chevron Down Arrows */}
      <div 
        className="absolute bottom-8 right-8 cursor-pointer group animate-fade-up animation-delay-2000"
        onClick={() => {
          const aboutSection = document.querySelector('#about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <div className="flex flex-col items-center gap-1">
          <svg 
            className="w-8 h-8 text-gray-700 dark:text-gray-300 animate-chevron-bounce group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
          <svg 
            className="w-8 h-8 text-gray-700 dark:text-gray-300 animate-chevron-bounce animation-delay-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
