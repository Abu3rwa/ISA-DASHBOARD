import React from "react";
import "./bootstrap.min.css";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import App from "./App";
import store from "./redux/store";
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
      loadPath: "../public/locales/{{lng}}/translations.json",
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
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
