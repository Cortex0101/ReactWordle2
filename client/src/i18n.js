import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'da', // Danish as fallback
    debug: true, // Enable debug for detailed logs

    interpolation: {
      escapeValue: false, // React already escapes values
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Dynamic loading based on language
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'], // Language detection order
      lookupQuerystring: 'lng', // Look for ?lng= in query parameters
      lookupCookie: 'i18next', // Look for language in cookies
      caches: ['localStorage', 'cookie'], // Cache detected language
    },
    load: 'languageOnly', // Ignore locale (use only 'da' instead of 'da-DK')
  });
  
export default i18n;