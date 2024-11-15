import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";

precacheAndRoute(self.__WB_MANIFEST);

const BASE_URL = import.meta.env.VITE_APP_API_URL;
registerRoute(
  ({ url, request }) =>
    url.origin === BASE_URL &&
    url.searchParams.has("lat") &&
    url.searchParams.has("lon") &&
    url.searchParams.has("appid") &&
    request.method === "GET",
  new StaleWhileRevalidate({
    cacheName: "weather-api-cache",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 3,
      }),
    ],
  })
);
