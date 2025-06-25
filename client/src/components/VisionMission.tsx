import { useLanguage } from "./LanguageProvider";
import { useParallax } from "../hooks/use-parallax";

export function VisionMission() {
  const { t } = useLanguage();
  const parallaxOffset = useParallax(0.4);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Multiple Parallax Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Container Port Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080)`,
            transform: `translateY(${parallaxOffset * 0.5}px)`,
            filter: 'grayscale(90%) brightness(0.4)'
          }}
        />
        {/* Cargo Ships Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080)`,
            transform: `translateY(${parallaxOffset * 0.3}px)`,
            filter: 'grayscale(100%) brightness(0.5)'
          }}
        />
        {/* Airport Cargo Terminal */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1568454537842-d933259bb258?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080)`,
            transform: `translateY(${parallaxOffset * 0.2}px)`,
            filter: 'grayscale(100%) brightness(0.6)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
      </div>
      <div className="absolute inset-0 noise-grid opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="glass-panel p-8 rounded-2xl backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 border border-white/30 dark:border-gray-700/30">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t('vision.title')}</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              {t('vision.description')}
            </p>
          </div>

          {/* Mission */}
          <div className="glass-panel p-8 rounded-2xl backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 border border-white/30 dark:border-gray-700/30">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t('mission.title')}</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              {t('mission.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
