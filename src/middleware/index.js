import {
  determineLanguageFromUrl,
  determineHotelFromUrl,
  redirectToNotFoundPage,
} from "../utils/utils";

export function onRequest({ locals, request }, next) {
  const url = new URL(request.url);
  const isRequestFromNotFoundPage = url.pathname.endsWith("/404");
  
  locals.language = determineLanguageFromUrl(url);
  locals.hotel = determineHotelFromUrl(url);

  // Check specifically for null to determine if the language was invalid.
  if ((!locals.hotel || locals.language === null) && !isRequestFromNotFoundPage) {
    return redirectToNotFoundPage(locals.language);
  }

  return next();
}

