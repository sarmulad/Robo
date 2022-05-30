import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
// import HttpApi from 'i18next-http-backend'
import translationEN from "./locales/en/translation.json";
import translationFR from "./locales/fr/translation.json";
import translationAR from "./locales/ar/translation.json";

import { initReactI18next } from "react-i18next";


const resources = {
    en:{
     translation: translationEN
   },
    fr:{
      translation: translationFR
  },
  ar:{
    translation: translationAR
     }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  // .use(HttpApi)
  .init({
    resources,
    supportedLngs: ['en', 'fr', 'ar'],
    fallbackLng: "en",
    detection:{
         order: ['cookie', 'htmlTag','localStorage', 'path', 'subdomain'],
         caches: ['localStorage', 'cookie']
    },
    // backend: {
    //   loadPath: '/src/locales/{{lng}}/translation.json',
    // },
    // react: {useSuspense: false}
  });

export default i18n;