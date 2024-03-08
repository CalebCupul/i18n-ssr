import {
  determineLanguageFromUrl,
  determineHotelFromUrl,
  redirectToNotFoundPage,
} from "../utils/utils";

export function onRequest({ locals, request }, next) {
  const url = new URL(request.url);
  const isRequestForNotFoundPage = url.pathname.endsWith("/404"); // Flag to not redirect to 404 page if it's already a 404 page

  locals.lang = determineLanguageFromUrl(url);
  locals.hotel = determineHotelFromUrl(url);

  if (!locals.hotel && !isRequestForNotFoundPage) {
    return redirectToNotFoundPage(locals.lang);
  }

  return next();
}
