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
    <section className="py-20 bg-white dark:bg-gray-900">
      <style>
        {`
          .products-swiper .swiper-button-next,
          .products-swiper .swiper-button-prev {
            width: 44px;
            height: 44px;
            margin-top: -22px;
            background: white;
            border: 1px solid #e5e5e5;
            border-radius: 50%;
            color: #666;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
          }
          
          .products-swiper .swiper-button-next:hover,
          .products-swiper .swiper-button-prev:hover {
            color: #333;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          }
          
          .products-swiper .swiper-button-next::after,
          .products-swiper .swiper-button-prev::after {
            font-size: 16px;
            font-weight: 600;
          }
          
          .products-swiper .swiper-button-disabled {
            opacity: 0.3;
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
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow duration-300">
                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Product Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed">
                      {product.description}
                    </p>
                    
                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className="inline-block text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                        {product.category}
                      </span>
                    </div>
                    
                    {/* Action Button */}
                    <button
                      onClick={handleProductClick}
                      className="w-full bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white py-2 px-4 rounded text-sm font-medium transition-colors duration-200"
                    >
                      {product.buttonText}
                    </button>
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