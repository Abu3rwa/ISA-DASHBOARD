import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import "bootstrap/dist/js/bootstrap.js";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";
import "flag-icon-css/css/flag-icon.min.css";
import { Provider } from "react-redux";
import Spinner from "./components/common/Spinner";

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    // lng: localStorage.getItem("i18nextLng"),
    debug: false,
    // lng: `${window.localStorage.getItem("i18nextLng")}`,
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path"],
      caches: ["cookie"],
    },
    // react: { useSuspense: false },
    backend: {
      loadPath: "./assets/locales/{{lng}}/translations.json",
    },
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ["en", "ar", "fr"],
  });

const loadingMarkup = <Spinner />;

ReactDOM.render(
  <Suspense fallback={loadingMarkup} store={store}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Suspense>,
  document.getElementById("root")
);
