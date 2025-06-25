import { useLanguage } from "./LanguageProvider";

interface ProductItem {
  name: string;
  description: string;
  image: string;
  gradient: string;
}

export function ModernProducts() {
  const { t } = useLanguage();

  const products: ProductItem[] = [
    {
      name: "Coffee",
      description: "Premium quality coffee beans sourced from the finest plantations worldwide",
      image: "/images/products/coffee.jpg",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      name: "Salt",
      description: "Pure, natural salt products for industrial and consumer applications",
      image: "/images/products/salt.jpeg",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      name: "Sugar",
      description: "High-grade sugar products meeting international quality standards",
      image: "/images/products/sugar.jpg",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      name: "Soye",
      description: "Sustainable soye products for food processing and agricultural needs",
      image: "/images/products/soye.jpg",
      gradient: "from-green-500 to-emerald-600"
    }
  ];

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
            <span className="font-semibold text-blue-600 dark:text-blue-400 text-[24px]">Our Products</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Commodities</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Sourcing and delivering the finest agricultural products to markets worldwide with uncompromising quality standards
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group relative bg-white dark:bg-gray-900 rounded-3xl p-8 hover:shadow-2xl transition-all duration-700 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transform hover:-translate-y-4 hover:scale-105 overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-3xl`}></div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 opacity-10 group-hover:opacity-20 transition-all duration-500">
                <svg viewBox="0 0 24 24" className="w-full h-full text-current">
                  <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="currentColor" strokeWidth="1" fill="none">
                    <animateTransform attributeName="transform" type="rotate" values="0 12 12; 360 12 12" dur="15s" repeatCount="indefinite"/>
                  </polygon>
                </svg>
              </div>

              {/* Image Container - Made Much Larger */}
              <div className="w-full h-48 sm:h-56 rounded-2xl mb-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500 shadow-xl">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`}></div>
                
                {/* Sparkle Effect */}
                <div className="absolute top-3 right-3 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                
                {/* Product Name Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl px-4 py-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{product.name}</h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {product.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${product.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>

        {/* Simple CTA Button */}
        <div className="text-center mt-12 sm:mt-16">
          <button
            onClick={() => {
              // Navigate to products page - you can update this with your routing logic
              window.location.href = '/products';
            }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            View All Products
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}