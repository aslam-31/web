import { useLocation } from "wouter";
import { useLanguage } from "./LanguageProvider";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

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

  const products: ProductItem[] = [
    {
      name: "Consumer Electronics",
      description: "Latest technology products and consumer electronics for international distribution.",
      image: "/images/products/electronics.jpg",
      category: "Technology",
      buttonText: "Saiba Mais"
    },
    {
      name: "Agricultural Products",
      description: "Premium agricultural products and specialty foods from Spain to global markets.",
      image: "/images/products/agriculture.jpg", 
      category: "Agriculture",
      buttonText: "Saiba Mais"
    },
    {
      name: "Textiles & Fashion",
      description: "Quality textiles and fashion products for international retail and wholesale markets.",
      image: "/images/products/textiles.jpg",
      category: "Fashion",
      buttonText: "Saiba Mais"
    },
    {
      name: "Automotive Components",
      description: "Precision automotive components for global manufacturers.",
      image: "/images/products/automotive.jpg",
      category: "Automotive", 
      buttonText: "Saiba Mais"
    }
  ];

  const handleProductClick = () => {
    setLocation('/products');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <style>
        {`
          .products-swiper .swiper-button-next,
          .products-swiper .swiper-button-prev {
            width: 50px;
            height: 50px;
            margin-top: -25px;
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            color: #374151;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            z-index: 10;
          }
          
          .products-swiper .swiper-button-next {
            right: -25px;
          }
          
          .products-swiper .swiper-button-prev {
            left: -25px;
          }
          
          .products-swiper .swiper-button-next:hover,
          .products-swiper .swiper-button-prev:hover {
            background: rgba(255, 255, 255, 0.95);
            color: #111827;
            box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
            transform: scale(1.05);
          }
          
          .products-swiper .swiper-button-next::after,
          .products-swiper .swiper-button-prev::after {
            font-size: 18px;
            font-weight: 700;
          }
          
          .products-swiper .swiper-button-disabled {
            opacity: 0.4;
            pointer-events: none;
          }
          
          .dark .products-swiper .swiper-button-next,
          .dark .products-swiper .swiper-button-prev {
            background: rgba(31, 41, 55, 0.8);
            border: 1px solid rgba(75, 85, 99, 0.3);
            color: #d1d5db;
          }
          
          .dark .products-swiper .swiper-button-next:hover,
          .dark .products-swiper .swiper-button-prev:hover {
            background: rgba(31, 41, 55, 0.95);
            color: #f9fafb;
          }
          
          @media screen and (max-width: 768px) {
            .products-swiper .swiper-button-next,
            .products-swiper .swiper-button-prev {
              display: none;
            }
          }
        `}
      </style>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Products
          </h2>
        </div>

        {/* Products Grid with Navigation */}
        <div className="relative max-w-7xl mx-auto">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            loop={false}
            grabCursor={true}
            navigation={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            className="products-swiper"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="noise-grid gradient-border glass rounded-xl shadow-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-300/40 dark:border-gray-600/40 hover:shadow-xl transition-all duration-300 hover:bg-white/95 dark:hover:bg-gray-800/95">
                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden rounded-lg m-3 mb-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  
                  {/* Product Content */}
                  <div className="p-4 pt-3">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    
                    {/* Bottom Section */}
                    <div className="flex items-center justify-between">
                      {/* Category Badge */}
                      <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100/70 dark:bg-gray-700/70 px-3 py-1 rounded-full backdrop-blur-sm">
                        {product.category}
                      </span>
                      
                      {/* Action Button */}
                      <button
                        onClick={handleProductClick}
                        className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                      >
                        {product.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}