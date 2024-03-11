import { hotels, languages, defaultLang } from "../consts";
import { setLanguage } from "../i18n/utils";

export function determineHotelFromUrl(url: URL) {
  const hotelFromUrl = getHotelFromUrl(url);
  const hotelFound = hotels.some(hotel => hotel.url === hotelFromUrl);
  return hotelFound ? hotelFromUrl : false;
}

export function determineLanguageFromUrl(url: URL) {
  const lang = getLangFromUrl(url);
  return languages.includes(lang) ? lang : false;
}

const getHotelFromUrl = (url: URL): string =>
  url.pathname.split("/").filter(Boolean)[1];

function getLangFromUrl(url: URL): string {
  const [, lang] = url.pathname.split("/");
  return lang;
}

export function redirectToNotFoundPage(language: string | false): Response {
  const lang = setLanguage(language || ''); // If language is false, set it to empty string to use default language
  return new Response(null, {
    status: 302, // Consider using 302 for temporary and 301 for permanent redirects
    headers: {
      'Location': `/${lang}/404`,
    },
  });
}
