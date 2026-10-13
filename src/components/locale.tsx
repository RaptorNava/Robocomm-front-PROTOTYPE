import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useTranslation } from "react-i18next";
import {
  CITY_KEY,
  LANGUAGE_KEY,
  cities,
  isCity,
  isLanguage,
  languages,
  type CityId,
  type LanguageCode,
} from "@/i18n/registry";
import i18n from "@/i18n";

type LocaleValue = {
  city: CityId;
  language: LanguageCode;
  setCity: (city: CityId) => void;
  setLanguage: (language: LanguageCode) => void;
};

const LocaleContext = createContext<LocaleValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [city, setCityState] = useState<CityId>("bishkek");
  const [language, setLanguageState] = useState<LanguageCode>("ru");

  useEffect(() => {
    const storedLanguage = localStorage.getItem(LANGUAGE_KEY);
    const storedCity = localStorage.getItem(CITY_KEY);
    if (isLanguage(storedLanguage)) {
      setLanguageState(storedLanguage);
      void i18n.changeLanguage(storedLanguage);
      document.documentElement.lang = storedLanguage;
    }
    if (isCity(storedCity)) setCityState(storedCity);
  }, []);

  const value = useMemo<LocaleValue>(
    () => ({
      city,
      language,
      setCity: (next) => {
        setCityState(next);
        localStorage.setItem(CITY_KEY, next);
      },
      setLanguage: (next) => {
        setLanguageState(next);
        localStorage.setItem(LANGUAGE_KEY, next);
        void i18n.changeLanguage(next);
        document.documentElement.lang = next;
      },
    }),
    [city, language],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("useLocale must be used within LocaleProvider");
  return value;
}

export function useCityName(form: "name" | "genitive" = "name") {
  const { t } = useTranslation();
  const { city } = useLocale();
  return t(`city.${city}.${form}`);
}

export { cities, languages };
