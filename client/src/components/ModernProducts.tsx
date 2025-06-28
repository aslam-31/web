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
      image: "/images/products/agriculture-cattle.jpg", 
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
            display: none;
          }
          
          @media screen and (max-width: 768px) {
            .swiper-button-prev-custom,
            .swiper-button-next-custom {
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
        <div className="relative max-w-7xl mx-auto px-16">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            loop={false}
            grabCursor={true}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
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
                        className="bg-white/20 hover:bg-white/30 dark:bg-gray-700/30 dark:hover:bg-gray-600/40 backdrop-blur-md border border-white/30 dark:border-gray-600/30 text-gray-900 dark:text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        {product.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-md border border-gray-300/40 rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg z-10">
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </div>
          <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-md border border-gray-300/40 rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg z-10">
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </div>
        </div>
      </div>
    </section>
  );
}