import { useLanguage } from "./LanguageProvider";

interface ProductItem {
  name: string;
  description: string;
  icon: JSX.Element;
  gradient: string;
}

const getProductIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case 'coffee':
      return (
        <svg className="w-12 h-12 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2 21h18v-2H2v2zm1.15-4.05L4 15.47l1.4-1.4-.03-.22c-.01-.1-.01-.2 0-.3l.03-.22L4 12.33l.85-1.42 1.28.75c.11-.06.22-.12.34-.18l.1-1.49h1.69l.1 1.49c.12.06.23.12.34.18l1.28-.75L11.82 12l-1.4 1.4.03.22c.01.1.01.2 0 .3l-.03.22 1.4 1.4-.82 1.42-1.28-.75c-.11.06-.22.12-.34.18l-.1 1.49H7.59l-.1-1.49c-.12-.06-.23-.12-.34-.18l-1.28.75-.72-1.4zm3.85-.45c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z"/>
          <path d="M18.5 2c-1.79 0-3.43.73-4.61 1.91C12.73 2.73 11.09 2 9.3 2 7.55 2 5.95 2.69 4.76 3.88c-.53.53-.53 1.39 0 1.92s1.39.53 1.92 0C7.47 5.01 8.35 4.5 9.3 4.5c.95 0 1.83.51 2.62 1.3.79-.79 1.67-1.3 2.62-1.3.95 0 1.83.51 2.62 1.3.53.53 1.39.53 1.92 0s.53-1.39 0-1.92C18.29 2.69 16.69 2 14.94 2h3.56z"/>
        </svg>
      );
    case 'salt':
      return (
        <svg className="w-12 h-12 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          <circle cx="8" cy="8" r="1.5"/>
          <circle cx="16" cy="8" r="1.5"/>
          <circle cx="12" cy="12" r="1.5"/>
          <circle cx="8" cy="16" r="1.5"/>
          <circle cx="16" cy="16" r="1.5"/>
        </svg>
      );
    case 'sugar':
      return (
        <svg className="w-12 h-12 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          <path d="M12 6l1.5 3L17 9.5l-2.5 2.4.6 3.4L12 13.8l-3.1 1.5.6-3.4L7 9.5l3.5-.5L12 6z"/>
        </svg>
      );
    case 'soy':
      return (
        <svg className="w-12 h-12 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      );
    default:
      return (
        <svg className="w-12 h-12 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        </svg>
      );
  }
};

export function ModernProducts() {
  const { t } = useLanguage();

  const products: ProductItem[] = [
    {
      name: "Coffee",
      description: "Premium quality coffee beans sourced from the finest plantations worldwide",
      icon: getProductIcon("coffee"),
      gradient: "from-amber-500 to-orange-600"
    },
    {
      name: "Salt",
      description: "Pure, natural salt products for industrial and consumer applications",
      icon: getProductIcon("salt"),
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      name: "Sugar",
      description: "High-grade sugar products meeting international quality standards",
      icon: getProductIcon("sugar"),
      gradient: "from-pink-500 to-rose-600"
    },
    {
      name: "Soy",
      description: "Sustainable soy products for food processing and agricultural needs",
      icon: getProductIcon("soy"),
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
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Our Products</span>
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

              {/* Icon Container */}
              <div className={`w-20 h-20 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {product.icon}
                
                {/* Sparkle Effect */}
                <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {product.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${product.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Interested in our premium commodity solutions?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Get In Touch
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}