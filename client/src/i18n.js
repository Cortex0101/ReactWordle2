import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // Load translations using HTTP
  .use(LanguageDetector) // Detect language
  .use(initReactI18next) // Bind i18next to React
  .init({
    fallbackLng: 'dk', // Use English if detected language is not available
    debug: true, // Enable debug for development

    interpolation: {
      escapeValue: false, // React already escapes values
    },
    backend: {
      loadPath: 'D:/wordle2/wordle2/client/public/locales/{{lng}}/translation.json'
    }
  });

export default i18n;