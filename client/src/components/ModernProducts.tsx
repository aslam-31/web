import { useState } from "react";
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

  const products: ProductItem[] = [
    {
      name: "Consumer Electronics",
      description: "Latest technology products and consumer electronics for international distribution.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Technology",
      buttonText: "Saiba Mais"
    },
    {
      name: "Agricultural Products",
      description: "Fresh agricultural products and specialty foods from Spain to global markets.",
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
    },
    {
      name: "Automotive Components",
      description: "Precision automotive parts and components for global manufacturers.",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Automotive",
      buttonText: "Saiba Mais"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, products.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, products.length - 2)) % Math.max(1, products.length - 2));
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
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            disabled={currentIndex >= products.length - 3}
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>

          {/* Scrolling Container */}
          <div className="overflow-hidden mx-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
            >
              {products.map((product, index) => (
                <div
                  key={product.name}
                  className="flex-none w-1/3 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Product Image */}
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Product Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    
                    {/* Category and Button */}
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">
                        {product.category}
                      </span>
                      <button 
                        onClick={() => setLocation('/products')}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors duration-200"
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