/**
 * Города и языки RoboComm.
 *
 * Новый язык:
 *   1. Скопируйте src/i18n/locales/ru.ts → src/i18n/locales/<code>.ts
 *   2. Переведите строки
 *   3. Добавьте импорт в src/i18n/index.ts и строку сюда
 *
 * Новый город:
 *   1. Добавьте объект в `cities` (id + код страны)
 *   2. В КАЖДОЙ локали добавьте city.<id>.name и city.<id>.genitive
 *   Контент страницы общий; название города подставляется в тексты.
 */
export const languages = [
  { code: "ru", label: "Русский", short: "RU" },
  { code: "en", label: "English", short: "EN" },
] as const;

export const cities = [{ id: "bishkek", country: "KG" }] as const;

export type LanguageCode = (typeof languages)[number]["code"];
export type CityId = (typeof cities)[number]["id"];

export const LANGUAGE_KEY = "robocomm.language";
export const CITY_KEY = "robocomm.city";

export function isLanguage(value: string | null): value is LanguageCode {
  return languages.some((language) => language.code === value);
}

export function isCity(value: string | null): value is CityId {
  return cities.some((city) => city.id === value);
}
