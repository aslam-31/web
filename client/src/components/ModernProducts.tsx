import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { useLanguage } from "./LanguageProvider";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductItem {
  name: string;
  description: string;
  image: string;
  category: string;
  buttonText: string;
}

export function ModernProducts() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const products: ProductItem[] = [
    {
      name: "Industrial Machinery",
      description: "High-performance manufacturing equipment and industrial machinery for global markets.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Manufacturing",
      buttonText: "Saiba Mais"
    },
    {
      name: "Consumer Electronics",
      description: "Latest technology products and consumer electronics for international distribution.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Technology",
      buttonText: "Saiba Mais"
    },
    {
      name: "Agricultural Products",
      description: "Premium agricultural products and specialty foods from Spain to global markets.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Agriculture",
      buttonText: "Saiba Mais"
    },
    {
      name: "Textiles & Fashion",
      description: "Quality textiles and fashion products for international retail and wholesale markets.",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Fashion",
      buttonText: "Saiba Mais"
    }
  ];

  // Responsive card counts: 4 on desktop, 2 on tablet, 1 on mobile
  const getVisibleCards = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 4; // lg and up
      if (window.innerWidth >= 768) return 2;  // md and up
      return 1; // mobile
    }
    return 4; // default
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  // Update visible cards on resize and initial load
  useEffect(() => {
    const handleResize = () => {
      const newVisibleCards = getVisibleCards();
      console.log('Resize detected, new visible cards:', newVisibleCards);
      setVisibleCards(newVisibleCards);
      // Reset currentIndex if it's beyond the new max
      const newMaxIndex = Math.max(0, products.length - newVisibleCards);
      if (currentIndex > newMaxIndex) {
        setCurrentIndex(0);
      }
    };
    
    // Set initial value
    handleResize();
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [currentIndex, products.length]);

  const maxIndex = Math.max(0, products.length - visibleCards);

  const nextSlide = () => {
    console.log('Next slide - Current:', currentIndex, 'Max:', maxIndex, 'Visible cards:', visibleCards);
    if (currentIndex < maxIndex) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    console.log('Prev slide - Current:', currentIndex, 'Visible cards:', visibleCards);
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  // Touch handlers for mobile swiping
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < maxIndex) {
      nextSlide();
    }
    if (isRightSwipe && currentIndex > 0) {
      prevSlide();
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-black dark:via-gray-950 dark:to-blue-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-30 animate-float animation-delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-25 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-float animation-delay-3000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/30 dark:border-blue-700/30 mb-6">
            <span className="font-semibold text-blue-600 dark:text-blue-400 text-[18px]">Our Products</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Commodities</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Sourcing and delivering the finest agricultural products to markets worldwide with uncompromising quality standards
          </p>
        </div>

        {/* Horizontal Scrolling Products */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 noise-grid gradient-border glass bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm shadow-lg rounded-full p-3 hover:bg-white/30 dark:hover:bg-gray-700/30 transition-colors duration-200 disabled:opacity-30"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 noise-grid gradient-border glass bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm shadow-lg rounded-full p-3 hover:bg-white/30 dark:hover:bg-gray-700/30 transition-colors duration-200 disabled:opacity-30"
            disabled={currentIndex >= maxIndex}
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>

          {/* Scrolling Container */}
          <div 
            className="overflow-hidden mx-8 md:mx-12"
            ref={containerRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-4"
              style={{ 
                transform: `translateX(-${currentIndex * (100/visibleCards)}%)`,
                width: `${(products.length / visibleCards) * 100}%`
              }}
            >
              {products.map((product, index) => (
                <div
                  key={product.name}
                  className={`flex-none noise-grid gradient-border glass rounded-xl shadow-md bg-gray-200/95 dark:bg-gray-700/95 backdrop-blur-sm ${
                    visibleCards === 1 ? 'w-full' : 
                    visibleCards === 2 ? 'w-1/2' : 
                    'w-1/4'
                  }`}
                  style={{ 
                    minWidth: visibleCards === 1 ? '100%' : 
                             visibleCards === 2 ? 'calc(50% - 8px)' : 
                             'calc(25% - 12px)'
                  }}
                >
                  {/* Product Image */}
                  <div className="p-3 pt-3">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-44 object-cover rounded-xl"
                    />
                  </div>
                  
                  {/* Product Content */}
                  <div className="px-4 pb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    
                    {/* Category and Button */}
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {product.category}
                      </span>
                      <button 
                        onClick={() => setLocation('/products')}
                        className="text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 font-semibold text-sm transition-colors duration-200"
                      >
                        {product.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}