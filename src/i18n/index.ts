import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en";
import ru from "./locales/ru";

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources: {
      ru: { translation: ru },
      en: { translation: en },
    },
    lng: "ru",
    fallbackLng: "ru",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
}

export default i18n;
