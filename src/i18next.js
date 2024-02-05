// import i18next from "i18next";
// import { initReactI18next } from "react-i18next";
// import HttpApi from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";
// i18next
//   .use(HttpApi)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: navigator.language,
//     // lng: localStorage.getItem("i18nextLng"),
//     debug: false,
//     lng: `${window.localStorage.getItem("i18nextLng")}`,
//     detection: {
//       order: ["localStorage", "path", "cookie", "htmlTag"],
//       caches: ["cookie"],
//       // lookupLocalStorage: "i18nextLng",
//     },
//     // react: { useSuspense: false },
//     backend: {
//       loadPath: "./assets/locales/{{lng}}/translations.json",
//     },
//     interpolation: {
//       escapeValue: false,
//     },
//     supportedLngs: ["en", "ar", "fr"],
//   });
