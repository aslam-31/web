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
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);

  const products: ProductItem[] = [
    {
      name: "Industrial Machinery",
      description: "High-performance manufacturing equipment and industrial machinery for global markets.",
      image: "/images/products/industrial-machinery.jpg",
      category: "Manufacturing",
      buttonText: "Learn More"
    },
    {
      name: "Consumer Electronics",
      description: "Latest technology products and consumer electronics for international distribution.",
      image: "/images/products/consumer-electronics.jpg",
      category: "Technology",
      buttonText: "Learn More"
    },
    {
      name: "Agricultural Products",
      description: "Premium agricultural products and specialty foods from Spain to global markets.",
      image: "/images/products/agriculture-cattle.jpg",
      category: "Agriculture",
      buttonText: "Learn More"
    },
    {
      name: "Textiles & Fashion",
      description: "Quality textiles and fashion products for international retail and wholesale markets.",
      image: "/images/products/textiles_and_fashion.jpg",
      category: "Fashion",
      buttonText: "Learn More"
    },
    {
      name: "Automotive Components",
      description: "Premium automotive parts and components for international automotive industry.",
      image: "/images/products/automotive.jpg",
      category: "Automotive",
      buttonText: "Learn More"
    },
    {
      name: "Medical Equipment",
      description: "Advanced medical devices and healthcare equipment for global healthcare providers.",
      image: "/images/products/medical.jpg",
      category: "Healthcare",
      buttonText: "Learn More"
    }
  ];

  // Responsive card counts: show more cards efficiently
  const getVisibleCards = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width >= 1600) return 6; // ultra-wide - show all cards
      if (width >= 1400) return 5; // large desktop
      if (width >= 1200) return 4; // desktop 
      if (width >= 900) return 3;  // laptop
      if (width >= 768) return 2;  // tablet
      return 1; // mobile
    }
    return 4; // default
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  // Update visible cards on resize and initial load
  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;
    
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const newVisibleCards = getVisibleCards();
        if (newVisibleCards !== visibleCards) {
          setVisibleCards(newVisibleCards);
          // Reset currentIndex if it's beyond the new max
          const newMaxIndex = Math.max(0, products.length - newVisibleCards);
          if (currentIndex > newMaxIndex) {
            setCurrentIndex(0);
          }
        }
      }, 100); // Debounce resize events
    };
    
    // Set initial value on mount
    const initialCards = getVisibleCards();
    setVisibleCards(initialCards);
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
        clearTimeout(resizeTimeout);
      };
    }
  }, []); // Remove dependencies to prevent constant re-renders

  const maxIndex = Math.max(0, products.length - visibleCards);

  const nextSlide = () => {
    if (isNavigating) return; // Prevent multiple rapid clicks
    setIsNavigating(true);
    
    const newMaxIndex = Math.max(0, products.length - visibleCards);
    if (currentIndex < newMaxIndex) {
      const newIndex = Math.min(currentIndex + 1, newMaxIndex);
      setCurrentIndex(newIndex);
    }
    
    // Reset navigation lock after animation
    setTimeout(() => setIsNavigating(false), 300);
  };

  const prevSlide = () => {
    if (isNavigating) return; // Prevent multiple rapid clicks
    setIsNavigating(true);
    
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
    }
    
    // Reset navigation lock after animation
    setTimeout(() => setIsNavigating(false), 300);
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
    if (!touchStart || !touchEnd || isNavigating) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    const currentMaxIndex = Math.max(0, products.length - visibleCards);

    if (isLeftSwipe && currentIndex < currentMaxIndex) {
      nextSlide();
    }
    if (isRightSwipe && currentIndex > 0) {
      prevSlide();
    }

    // Reset touch states
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Mouse drag handlers
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    e.preventDefault();
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || dragStart === null) return;
    e.preventDefault();
  };

  const onMouseUp = (e: React.MouseEvent) => {
    if (!isDragging || dragStart === null || isNavigating) return;
    
    const distance = dragStart - e.clientX;
    const isLeftDrag = distance > 50;
    const isRightDrag = distance < -50;
    const currentMaxIndex = Math.max(0, products.length - visibleCards);

    if (isLeftDrag && currentIndex < currentMaxIndex) {
      nextSlide();
    }
    if (isRightDrag && currentIndex > 0) {
      prevSlide();
    }

    setIsDragging(false);
    setDragStart(null);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
    setDragStart(null);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 min-h-[700px] bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-black dark:via-gray-950 dark:to-blue-950 relative overflow-hidden">
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
          {/* Navigation Buttons - Only show if there are more cards than can fit */}
          {maxIndex > 0 && (
            <>
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
            </>
          )}

          {/* Scrolling Container */}
          <div 
            className={`overflow-hidden ${maxIndex > 0 ? 'mx-8 md:mx-12' : 'mx-0'} ${isDragging ? 'cursor-grabbing' : maxIndex > 0 ? 'cursor-grab' : 'cursor-default'}`}
            ref={containerRef}
            onTouchStart={maxIndex > 0 ? onTouchStart : undefined}
            onTouchMove={maxIndex > 0 ? onTouchMove : undefined}
            onTouchEnd={maxIndex > 0 ? onTouchEnd : undefined}
            onMouseDown={maxIndex > 0 ? onMouseDown : undefined}
            onMouseMove={maxIndex > 0 ? onMouseMove : undefined}
            onMouseUp={maxIndex > 0 ? onMouseUp : undefined}
            onMouseLeave={maxIndex > 0 ? onMouseLeave : undefined}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ 
                transform: `translateX(-${currentIndex * (100/visibleCards)}%)`,
                width: `${(products.length * 100) / visibleCards}%`
              }}
            >
              {products.map((product, index) => (
                <div
                  key={product.name}
                  className="flex-none noise-grid gradient-border glass rounded-xl shadow-md bg-gray-200/95 dark:bg-gray-700/95 backdrop-blur-sm min-h-[350px] flex flex-col mb-2.5"
                  style={{ 
                    width: `calc(${100 / visibleCards}% - 1.5rem)`,
                    flexShrink: 0,
                    maxWidth: '320px'
                  }}
                >
                  {/* Product Image */}
                  <div className="p-3 pt-3">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-32 sm:h-36 object-cover rounded-lg"
                    />
                  </div>
                  
                  {/* Product Content */}
                  <div className="px-3 pb-4 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-xs mb-3 leading-relaxed line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                    
                    {/* Category and Button */}
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                      <button 
                        onClick={() => setLocation('/products')}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-sm transition-colors duration-200 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30"
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