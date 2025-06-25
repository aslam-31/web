import { useLanguage } from "./LanguageProvider";
import { Globe, Users, Shield, Heart } from "lucide-react";

const getBenefitIcon = (benefitKey: string) => {
  switch (benefitKey) {
    case 'network':
      return (
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-6 relative overflow-hidden group shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Globe className="w-10 h-10 text-white relative z-10" />
        </div>
      );
    case 'expertise':
      return (
        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mb-6 relative overflow-hidden group shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Users className="w-10 h-10 text-white relative z-10" />
        </div>
      );
    case 'reliability':
      return (
        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mb-6 relative overflow-hidden group shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Shield className="w-10 h-10 text-white relative z-10" />
        </div>
      );
    case 'customerCentric':
      return (
        <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center mb-6 relative overflow-hidden group shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Heart className="w-10 h-10 text-white relative z-10" />
        </div>
      );
    default:
      return (
        <div className="w-20 h-20 bg-gradient-to-br from-gray-500 to-gray-600 rounded-3xl flex items-center justify-center mb-6 relative overflow-hidden group shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Globe className="w-10 h-10 text-white relative z-10" />
        </div>
      );
  }
};

export function Projects() {
  const { t } = useLanguage();

  const benefits = [
    { key: 'network', title: t("projects.benefits.network.title"), description: t("projects.benefits.network.description") },
    { key: 'expertise', title: t("projects.benefits.expertise.title"), description: t("projects.benefits.expertise.description") },
    { key: 'reliability', title: t("projects.benefits.reliability.title"), description: t("projects.benefits.reliability.description") },
    { key: 'customerCentric', title: t("projects.benefits.customerCentric.title"), description: t("projects.benefits.customerCentric.description") },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">{t("projects.title")}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.key}
              className="noise-grid gradient-border glass rounded-2xl p-8 hover-scale transition-all duration-500 group relative overflow-hidden text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Moving Vector Elements */}
              <div className="absolute top-6 right-6 w-8 h-8 opacity-10 group-hover:opacity-20 transition-all duration-300">
                <svg viewBox="0 0 24 24" className="w-full h-full text-current">
                  <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="1" fill="none">
                    <animateTransform attributeName="transform" type="rotate" values="0 12 12; 360 12 12" dur="10s" repeatCount="indefinite"/>
                  </path>
                </svg>
              </div>
              
              {getBenefitIcon(benefit.key)}
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
