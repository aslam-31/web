import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "./LanguageProvider";
import type { Founder } from "@shared/schema";

export function Founders() {
  const { t } = useLanguage();
  
  const { data: founders, isLoading } = useQuery<Founder[]>({
    queryKey: ["/api/founders"],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">{t("founders.title")}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[1, 2].map((i) => (
              <div key={i} className="text-center">
                <div className="noise-grid gradient-border glass rounded-2xl p-8 animate-pulse">
                  <div className="w-32 h-32 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-6"></div>
                  <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-4 w-1/2 mx-auto"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mx-auto"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">{t("founders.title")}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t("founders.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {founders?.map((founder) => (
            <div key={founder.id} className="text-center">
              <div className="noise-grid gradient-border glass rounded-2xl p-8 hover-scale transition-transform duration-300">
                <div className="relative mb-6">
                  <img 
                    src={founder.imageUrl} 
                    alt={founder.name} 
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{founder.position}</p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {founder.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
