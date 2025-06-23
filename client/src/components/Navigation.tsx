import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-5 sm:px-8 lg:px-10 pt-5 sm:pt-8">
      <div className="max-w-7xl mx-auto">
        <div className="noise-grid gradient-border glass rounded-2xl px-6 sm:px-10 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <img 
                  src="/images/clifton-logo.jpg" 
                  alt="CLIFTON Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                {t("nav.home")}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                {t("nav.about")}
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                {t("nav.products")}
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                {t("nav.projects")}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                {t("nav.contact")}
              </button>
            </div>

            {/* Language & Theme Toggle */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2 text-sm">
                <button 
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-lg transition-colors ${
                    language === 'en' 
                      ? 'bg-black dark:bg-white text-white dark:text-black' 
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLanguage('pt')}
                  className={`px-3 py-1 rounded-lg transition-colors ${
                    language === 'pt' 
                      ? 'bg-black dark:bg-white text-white dark:text-black' 
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  PT
                </button>
              </div>
              
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {theme === 'light' ? (
                  <i className="fas fa-moon"></i>
                ) : (
                  <i className="fas fa-sun"></i>
                )}
              </button>

              {/* Mobile Menu Button with Animation */}
              <button 
                onClick={toggleMobileMenu}
                className="md:hidden p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : 'group-hover:w-8'
                  }`}></span>
                  <span className={`block h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0 w-6' : 'w-4 group-hover:w-6'
                  }`}></span>
                  <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'group-hover:w-8'
                  }`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col space-y-3">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="py-2 text-left hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  {t("nav.home")}
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="py-2 text-left hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  {t("nav.about")}
                </button>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="py-2 text-left hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  {t("nav.products")}
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="py-2 text-left hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  {t("nav.projects")}
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="py-2 text-left hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  {t("nav.contact")}
                </button>
                <div className="flex items-center space-x-2 py-2">
                  <button 
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                      language === 'en' 
                        ? 'bg-black dark:bg-white text-white dark:text-black' 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    EN
                  </button>
                  <button 
                    onClick={() => setLanguage('pt')}
                    className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                      language === 'pt' 
                        ? 'bg-black dark:bg-white text-white dark:text-black' 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    PT
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
