import { useLanguage } from "./LanguageProvider";
import { useParallax } from "@/hooks/use-parallax";

export function VisionMission() {
  const { t } = useLanguage();
  const { elementRef, transform } = useParallax(0.3);

  return (
    <section ref={elementRef} id="about" className="vision-mission-section py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img 
          src="images/3.jpg" 
          alt="Import Export background" 
          className="w-full h-full object-cover"
          style={{ transform, filter: 'grayscale(100%)' }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">{t("vision.title")}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t("vision.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="noise-grid gradient-border glass rounded-2xl p-8 lg:p-12 hover-scale transition-transform duration-300 relative overflow-hidden">
            {/* Moving Vector Elements */}
            <div className="absolute top-4 right-4 w-8 h-8 opacity-20">
              <svg viewBox="0 0 32 32" className="w-full h-full text-current">
                <path d="M4,16 L28,16 M24,12 L28,16 L24,20" stroke="currentColor" strokeWidth="1" fill="none">
                  <animateTransform attributeName="transform" type="translate" values="0,0; 10,0; 0,0" dur="3s" repeatCount="indefinite"/>
                </path>
              </svg>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-300 rounded-xl flex items-center justify-center mb-6">
              <i className="fas fa-eye text-2xl text-white dark:text-black"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4">{t("vision.vision.title")}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {t("vision.vision.description")}
            </p>
          </div>

          <div className="noise-grid gradient-border glass rounded-2xl p-8 lg:p-12 hover-scale transition-transform duration-300 relative overflow-hidden">
            {/* Moving Vector Elements */}
            <div className="absolute top-4 right-4 w-8 h-8 opacity-20">
              <svg viewBox="0 0 32 32" className="w-full h-full text-current">
                <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1" fill="none">
                  <animateTransform attributeName="transform" type="rotate" values="0 16 16; 360 16 16" dur="8s" repeatCount="indefinite"/>
                </circle>
                <circle cx="16" cy="8" r="2" fill="currentColor">
                  <animateTransform attributeName="transform" type="rotate" values="0 16 16; 360 16 16" dur="8s" repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-300 rounded-xl flex items-center justify-center mb-6">
              <i className="fas fa-bullseye text-2xl text-white dark:text-black"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4">{t("vision.mission.title")}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {t("vision.mission.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
