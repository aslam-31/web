import React from 'react';
import { useLanguage } from '../components/LanguageProvider';
import { useTheme } from '../components/ThemeProvider';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ThreeBackground } from '../components/ThreeBackground';

const Products = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const products = [
    {
      name: 'Coffee',
      image: '/images/products/coffee.jpg',
      gradient: 'from-amber-600 to-amber-800',
      description: 'Premium quality coffee beans sourced from the finest farms worldwide'
    },
    {
      name: 'Salt',
      image: '/images/products/salt.jpeg',
      gradient: 'from-blue-600 to-blue-800',
      description: 'High-grade industrial and food-grade salt for various applications'
    },
    {
      name: 'Sugar',
      image: '/images/products/sugar.jpg',
      gradient: 'from-pink-600 to-pink-800',
      description: 'Refined and raw sugar varieties meeting international quality standards'
    },
    {
      name: 'Soye',
      image: '/images/products/soye.jpg',
      gradient: 'from-green-600 to-green-800',
      description: 'Sustainable soybean products for food and industrial applications'
    }
  ];

  const benefits = [
    {
      icon: '🏆',
      title: 'Quality Certified',
      description: 'International quality standards with full traceability'
    },
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Efficient logistics and timely global shipping'
    },
    {
      icon: '💰',
      title: 'Competitive Pricing',
      description: 'Market-leading prices with flexible payment terms'
    },
    {
      icon: '🌍',
      title: 'Global Reach',
      description: 'Worldwide network of trusted suppliers and partners'
    }
  ];

  const commitments = [
    'Sourcing from verified and sustainable farms',
    'Comprehensive quality testing and certification',
    'Transparent pricing with no hidden costs',
    '24/7 customer support and order tracking'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black relative overflow-hidden">
      <ThreeBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-5 sm:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Premium Commodities
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
              Discover our range of high-quality agricultural commodities, sourced from trusted global suppliers and delivered with excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-20 px-5 sm:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={product.name}
                className="group relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-700 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transform hover:-translate-y-4 hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                
                {/* Product Image */}
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-500">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 opacity-10 group-hover:opacity-20 transition-all duration-500">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-current">
                    <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="currentColor" strokeWidth="1" fill="none">
                      <animateTransform attributeName="transform" type="rotate" values="0 12 12; 360 12 12" dur="15s" repeatCount="indefinite"/>
                    </polygon>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CLIFTON Section */}
      <section className="relative py-20 px-5 sm:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Why Choose CLIFTON for Your Commodity Needs?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
              With decades of experience in international trade, we ensure the highest quality standards, competitive pricing, and reliable supply chains for all your agricultural commodity requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group noise-grid gradient-border glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:scale-105 relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="relative py-20 px-5 sm:px-8 lg:px-10 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Commitment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {commitments.map((commitment, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-6 noise-grid gradient-border glass rounded-xl hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"></div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">{commitment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Information Section */}
      <section className="relative py-20 px-5 sm:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Trade Volumes */}
            <div className="noise-grid gradient-border glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Trade Volumes</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Minimum Order</span>
                  <span className="font-bold text-gray-900 dark:text-white">25 MT</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Standard Containers</span>
                  <span className="font-bold text-gray-900 dark:text-white">20ft & 40ft FCL</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Bulk Shipments</span>
                  <span className="font-bold text-gray-900 dark:text-white">Up to 50,000 MT</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600 dark:text-gray-400">Payment Terms</span>
                  <span className="font-bold text-gray-900 dark:text-white">LC, TT, DP</span>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="noise-grid gradient-border glass rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to discuss your commodity requirements?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Our trade specialists are here to help.
              </p>
              
              <div className="space-y-4">
                <button className="w-full bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  Request Quote
                </button>
                
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <p>
                    <strong>Call us:</strong> +34 123 456 789
                  </p>
                  <p>
                    <strong>Email:</strong> trade@cliftontraders.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;