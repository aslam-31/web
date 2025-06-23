import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-black dark:bg-white text-white dark:text-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-300 dark:from-black dark:to-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-black dark:text-white font-bold text-lg">IE</span>
              </div>
              <span className="text-xl font-semibold">{t("nav.brand")}</span>
            </div>
            <p className="text-gray-400 dark:text-gray-600">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-600">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="hover:text-white dark:hover:text-black transition-colors"
                >
                  {t("nav.home")}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white dark:hover:text-black transition-colors"
                >
                  {t("nav.about")}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="hover:text-white dark:hover:text-black transition-colors"
                >
                  {t("nav.products")}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="hover:text-white dark:hover:text-black transition-colors"
                >
                  {t("nav.projects")}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.services.title")}</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-600">
              <li>{t("footer.services.import")}</li>
              <li>{t("footer.services.export")}</li>
              <li>{t("footer.services.logistics")}</li>
              <li>{t("footer.services.quality")}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-600">
              <li>{t("contact.info.location")}</li>
              <li>+34 91 123 4567</li>
              <li>info@importexport.es</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 dark:text-gray-600">
            {t("footer.copyright")}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors">
              {t("footer.privacy")}
            </a>
            <a href="#" className="text-gray-400 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
