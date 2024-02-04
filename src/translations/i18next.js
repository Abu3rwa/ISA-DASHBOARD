import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

// i18next.use(HttpApi).init(i18nextOptions);
i18n
  .use(LanguageDetector)
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "../../public/locales/{{lng}}/translations.json",
    },
    react: { useSuspense: false },

    detection: {
      order: [
        "htmlTag",
        "cookie",
        "localStorage",
        "querystring",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
  });
export default i18n;
