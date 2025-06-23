import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";
import { useLanguage } from "./LanguageProvider";
import type { Product } from "@shared/schema";

export function Products() {
  const { t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <section id="products" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">{t("products.title")}</h2>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex-none w-80 noise-grid gradient-border glass rounded-2xl p-6 animate-pulse">
                <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 rounded-xl mb-4"></div>
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                <div className="space-y-2 mb-4">
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">{t("products.title")}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t("products.subtitle")}
          </p>
        </div>

        {/* Horizontal Scrolling Products */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="scroll-container flex gap-6 overflow-x-auto pb-6"
          >
            {products?.map((product, index) => (
              <div 
                key={product.id} 
                className="flex-none w-80 noise-grid gradient-border glass rounded-2xl p-6 hover-scale transition-all duration-500 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{product.category}</span>
                  <button className="text-black dark:text-white hover:underline">
                    {t("products.learnMore")}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Controls */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 noise-grid gradient-border glass rounded-full flex items-center justify-center hover-scale transition-transform"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 noise-grid gradient-border glass rounded-full flex items-center justify-center hover-scale transition-transform"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
