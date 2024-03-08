import { hotels, languages, defaultLang } from "../consts";

export function determineLanguageFromUrl(url: URL) {
  const hotel = getHotelFromUrl(url);
  return hotels.includes(hotel) ? hotel : false;
}

export function determineHotelFromUrl(url: URL) {
  const lang = getLangFromUrl(url);
  return languages.includes(lang) ? lang : defaultLang;
}

const getHotelFromUrl = (url: URL) =>
  url.pathname.split("/").filter(Boolean)[1];

function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  return lang;
}

export const hotelExists = (hotel: string = ""): string | false => hotels.includes(hotel) ? hotel : false;
export const langExists = (lang: string = ""): string | false => languages.includes(lang) ? lang : defaultLang;

