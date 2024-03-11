import {
  determineLanguageFromUrl,
  determineHotelFromUrl,
  redirectToNotFoundPage,
} from "../utils/utils";

export function onRequest({ locals, request }, next) {
  const url = new URL(request.url);
  const isRequestFromNotFoundPage = url.pathname.endsWith("/404");
  locals.lang = determineLanguageFromUrl(url);
  locals.hotel = determineHotelFromUrl(url);

  if ((!locals.hotel || !locals.lang) && !isRequestFromNotFoundPage) {
    return redirectToNotFoundPage(locals.lang);
  }

  return next();
}
