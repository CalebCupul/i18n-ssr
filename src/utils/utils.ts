import { hotels, languages, defaultLang } from "../consts";
import { setLanguage } from "../i18n/utils";

export function determineHotelFromUrl(url: URL) {
  const hotelFromUrl = getHotelFromUrl(url);
  const hotelFound = hotels.some(hotel => hotel.url === hotelFromUrl);
  return hotelFound ? hotelFromUrl : false;
}

export function determineLanguageFromUrl(url: URL): string | null {
  const lang = getLangFromUrl(url);
  return languages.includes(lang) ? lang : null;
}

const getHotelFromUrl = (url: URL): string =>
  url.pathname.split("/").filter(Boolean)[1];

function getLangFromUrl(url: URL): string {
  const [, lang] = url.pathname.split("/");
  return lang;
}

export function redirectToNotFoundPage(language: string | null): Response {
  // Direct handling of null to make decisions based on the presence of a valid language
  const lang = language === null ? defaultLang : language;
  return new Response(null, {
    status: 302,
    headers: {
      'Location': `/${lang}/404`,
    },
  });
}

