import { useLocation } from "wouter";
import { useLanguage } from "./LanguageProvider";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
      name: t("Consumer Electronics"),
      description: t("High-quality electronic devices and components for international markets"),
      image: "/images/products/electronics.jpg",
      category: "Electronics",
      buttonText: t("View Details")
    },
    {
      name: t("Agricultural Products"),
      description: t("Premium agricultural commodities including grains, pulses, and organic produce"),
      image: "/images/products/agriculture.jpg", 
      category: "Agriculture",
      buttonText: t("View Details")
    },
    {
      name: t("Textiles & Fashion"),
      description: t("Quality textiles, fabrics, and fashion accessories for global distribution"),
      image: "/images/products/textiles.jpg",
      category: "Textiles",
      buttonText: t("View Details")
    },
    {
      name: t("Automotive Components"),
      description: t("Precision automotive parts and components for international automotive industry"),
      image: "/images/products/automotive.jpg",
      category: "Automotive", 
      buttonText: t("View Details")
    },
    {
      name: t("Industrial Machinery"),
      description: t("Heavy-duty industrial equipment and machinery for manufacturing sectors"),
      image: "/images/products/machinery.jpg",
      category: "Industrial",
      buttonText: t("View Details")
    },
    {
      name: t("Chemical Products"),
      description: t("Specialized chemicals and pharmaceutical ingredients for global markets"),
      image: "/images/products/chemicals.jpg",
      category: "Chemicals",
      buttonText: t("View Details")
    }
  ];

  const handleProductClick = () => {
    setLocation('/products');
  };

  return (
    <section className="modern-products py-20 relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <style>
        {`
          .modern-products .swiper-button-next,
          .modern-products .swiper-button-prev {
            color: #6E93f7;
            transition: color 0.3s ease;
          }
          
          .modern-products .swiper-button-next:hover,
          .modern-products .swiper-button-prev:hover {
            color: #4070F4;
          }
          
          .modern-products .swiper-button-next::after,
          .modern-products .swiper-button-prev::after {
            font-size: 35px;
          }
          
          .modern-products .swiper-pagination-bullet {
            background-color: #6E93f7;
            opacity: 1;
          }
          
          .modern-products .swiper-pagination-bullet-active {
            background-color: #4070F4;
          }
          
          @media screen and (max-width: 768px) {
            .modern-products .swiper-button-next,
            .modern-products .swiper-button-prev {
              display: none;
            }
          }
        `}
      </style>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t("Our Products")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t("Discover our comprehensive range of premium products across multiple industries, carefully selected to meet global market demands.")}
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={25}
            loop={true}
            grabCursor={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              520: {
                slidesPerView: 2,
              },
              950: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="noise-grid gradient-border glass rounded-xl shadow-md bg-gray-200/95 dark:bg-gray-700/95 backdrop-blur-sm min-h-[350px] flex flex-col">
                  {/* Product Image */}
                  <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  
                  {/* Product Content */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                    
                    {/* Action Button */}
                    <div className="flex justify-center mt-auto">
                      <button
                        onClick={handleProductClick}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 text-sm font-medium"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
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