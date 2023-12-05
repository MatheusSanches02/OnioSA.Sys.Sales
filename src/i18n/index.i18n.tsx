import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en.json";
import pt from "./translations/pt-Br.json";

import { SALES_PROJECT, LOCALSTORAGE_ROUTES } from "../global/utils/app.utils";

function manusearDefinicaoIdioma() {
  let lingNav = "pt";

  if (
    window.navigator.language !== "en-US" &&
    window.navigator.language !== "en" &&
    window.navigator.language !== "pt-BR"
  ) {
    localStorage.setItem(SALES_PROJECT + LOCALSTORAGE_ROUTES.idioma, "pt");
    return "pt-BR";
  } else {
    if (window.navigator.language === "pt-BR") {
      lingNav = "pt";
    } else if (window.navigator.language === "en-US") {
      lingNav = "en";
    }

    localStorage.setItem(SALES_PROJECT + LOCALSTORAGE_ROUTES.idioma, lingNav);
    return window.navigator.language;
  }
}

i18n.use(initReactI18next).init({
  lng: manusearDefinicaoIdioma(),

  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: en,
    pt: pt,
  },
});

export default i18n;
