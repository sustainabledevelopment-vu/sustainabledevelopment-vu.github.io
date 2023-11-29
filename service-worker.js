importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

const {registerRoute, setDefaultHandler} = workbox.routing;
const {CacheableResponsePlugin} = workbox.cacheableResponse;
const {ExpirationPlugin} = workbox.expiration;
const {precacheAndRoute} = workbox.precaching;
const {offlineFallback} = workbox.recipes;

const {
    NetworkFirst,
    StaleWhileRevalidate,
    CacheFirst,
    NetworkOnly,
} = workbox.strategies;
const cacheName = 'install-cache';
setDefaultHandler(new NetworkOnly());
offlineFallback();


// Precache the indicator/goal pages.
self.addEventListener('install', (event) => {
  const populateCache = async () => {
    const cache = await caches.open(cacheName);
    await cache.addAll(["/ECO1/","/ECO2/","/ECO3/","/ECO4/","/ENV1/","/ENV2/","/ENV3/","/ENV4/","/ENV5/","/SOC1/","/SOC2/","/SOC3/","/SOC4/","/SOC5/","/SOC6/","/book3/","/book9/"]);
    await cache.addAll(["/operations/","/SOC5-3-3/","/SOC6-6-1/","/ENV3-3-1/","/ECO4-7-2/","/ENV4-2-1/","/SOC6-1-2/","/ENV5-1-1/","/ECO4-4-1/","/SOC4-6-2/","/SOC6-3-1/","/ENV2-3-2/","/SOC3-1-1/","/SOC3-4-1/","/ENV3-4-1/","/SOC4-5-1/","/labor/","/ECO3-6-1/","/SOC4-2-2/","/ENV3-5-3/","/ECO2-4-1/","/ENV5-2-2/","/ENV2-2-1/","/ENV4-5-3/","/SOC5-3-2/","/ECO2-8-1/","/ENV3-2-3/","/shelter/","/ECO1-2-1/","/ECO4-8-1/","/ECO3-1-2/","/ECO3-4-2/","/ECO4-3-2/","/ENV3-1-2/","/SOC6-5-1/","/ENV3-4-2/","/SOC3-3-1/","/health/","/SOC5-2-1/","/SOC5-4-3/","/ENV2-5-2/","/government-financial-statistics/","/business/","/ECO1-5-2/","/ENV1-5-2/","/SOC1-2-2/","/ENV1-1-1/","/SOC1-7-2/","/ECO1-9-1/","/ECO3-4-1/","/ECO2-2-2/","/ECO3-5-1/","/SOC3-1-2/","/ENV4-5-1/","/SOC5-4-2/","/enrolments/","/SOC2-3-1/","/SOC4-7-1/","/ECO1-1-2/","/SOC5-5-2/","/SOC4-3-2/","/ENV5-1-2/","/ECO3-3-3/","/ENV1-4-1/","/SOC6-7-2/","/SOC6-8-1/","/ECO3-1-1/","/SOC1-6-1/","/ECO3-2-3/","/SOC6-9-2/","/ENV5-2-1/","/ENV4-5-2/","/SOC1-1-3/","/ECO4-6-2/","/ECO2-2-1/","/ENV3-1-3/","/agriculture/","/ECO2-5-1/","/ECO1-5-3/","/ECO3-6-2/","/ECO1-8-1/","/SOC4-6-1/","/SOC2-1-1/","/SOC1-2-1/","/SOC3-2-1/","/SOC2-2-1/","/ENV1-4-2/","/ENV3-1-1/","/ECO2-3-1/","/SOC6-8-2/","/ECO1-6-2/","/ENV2-6-1/","/SOC3-4-2/","/ECO4-7-1/","/ECO2-9-2/","/SOC6-9-1/","/ENV3-5-1/","/ENV3-2-2/","/ECO1-5-1/","/census/","/ECO1-1-1/","/SOC6-7-1/","/SOC1-1-2/","/ECO3-3-2/","/ECO3-2-1/","/SOC4-3-1/","/ENV5-4-1/","/ENV3-3-3/","/ECO2-3-2/","/ECO1-4-1/","/SOC6-1-3/","/SOC5-4-1/","/SOC6-3-2/","/ENV2-3-1/","/ENV1-4-3/","/ENV2-4-2/","/SOC3-2-3/","/ENV1-1-2/","/ECO1-6-1/","/SOC1-5-1/","/ECO1-8-2/","/SOC4-2-3/","/SOC1-1-1/","/SOC5-1-2/","/SOC4-7-2/","/ECO2-1-1/","/ENV1-3-3/","/ENV5-6-1/","/ENV4-6-1/","/ENV4-6-2/","/SOC4-1-1/","/ENV4-1-2/","/gdp-growth-rate/","/SOC6-2-1/","/SOC3-2-2/","/exports/","/ECO1-4-2/","/ECO1-3-1/","/ENV2-1-1/","/population/","/ENV1-5-3/","/book9/","/ENV4-4-2/","/SOC1-6-2/","/ENV2-3-3/","/ENV4-3-1/","/ENV4-4-1/","/SOC5-5-3/","/demographics/","/ECO1-7-1/","/imports/","/SOC5-5-1/","/ENV4-2-2/","/SOC1-7-1/","/ECO4-5-1/","/SOC1-3-1/","/SOC6-1-1/","/SOC3-4-3/","/SOC6-5-2/","/ECO1-7-2/","/ECO2-7-0/","/ENV2-6-2/","/ENV1-3-1/","/SOC4-2-1/","/SOC4-4-3/","/ENV5-3-1/","/ECO3-2-2/","/ENV1-1-3/","/ENV3-3-2/","/gdp-constant-price/","/ECO3-3-1/","/SOC4-4-1/","/ECO2-9-1/","/ECO2-1-2/","/ECO4-3-1/","/SOC6-3-3/","/ECO4-9-1/","/ENV1-2-1/","/SOC1-2-3/","/ENV4-7-1/","/SOC5-1-1/","/operations-budget/","/ENV5-5-1/","/ENV2-4-1/","/SOC5-1-3/","/ECO1-3-2/","/ENV4-1-1/","/ECO4-1-1/","/ECO4-2-1/","/ENV2-5-1/","/SOC4-1-2/","/ECO2-6-1/","/SOC2-4-1/","/ENV5-3-2/","/SOC1-4-1/","/SOC3-1-3/","/ENV3-2-1/","/SOC3-3-3/","/ENV3-5-2/","/SOC6-4-1/","/ENV2-2-2/","/ECO4-7-3/","/SOC4-1-3/","/school-attendance/","/SOC3-3-2/","/ECO1-8-3/","/ENV1-5-1/","/SOC6-8-3/","/ENV1-3-2/","/book3/","/SOC5-3-1/","/SOC4-4-2/","/SOC4-3-3/","/ECO4-6-1/","/infrastructure/","/watersanitation&hygiene/","/income/","/disaster-statistics/","/government/","/grades/","/vocational/","/usp/","/donor/","/vat/"]);
    await cache.addAll(["/en/comb/operations.json","/en/comb/SOC5-3-3.json","/en/comb/SOC6-6-1.json","/en/comb/ENV3-3-1.json","/en/comb/ECO4-7-2.json","/en/comb/ENV4-2-1.json","/en/comb/SOC6-1-2.json","/en/comb/ENV5-1-1.json","/en/comb/ECO4-4-1.json","/en/comb/SOC4-6-2.json","/en/comb/SOC6-3-1.json","/en/comb/ENV2-3-2.json","/en/comb/SOC3-1-1.json","/en/comb/SOC3-4-1.json","/en/comb/ENV3-4-1.json","/en/comb/SOC4-5-1.json","/en/comb/labor.json","/en/comb/ECO3-6-1.json","/en/comb/SOC4-2-2.json","/en/comb/ENV3-5-3.json","/en/comb/ECO2-4-1.json","/en/comb/ENV5-2-2.json","/en/comb/ENV2-2-1.json","/en/comb/ENV4-5-3.json","/en/comb/SOC5-3-2.json","/en/comb/ECO2-8-1.json","/en/comb/ENV3-2-3.json","/en/comb/shelter.json","/en/comb/ECO1-2-1.json","/en/comb/ECO4-8-1.json","/en/comb/ECO3-1-2.json","/en/comb/ECO3-4-2.json","/en/comb/ECO4-3-2.json","/en/comb/ENV3-1-2.json","/en/comb/SOC6-5-1.json","/en/comb/ENV3-4-2.json","/en/comb/SOC3-3-1.json","/en/comb/health.json","/en/comb/SOC5-2-1.json","/en/comb/SOC5-4-3.json","/en/comb/ENV2-5-2.json","/en/comb/government-financial-statistics.json","/en/comb/business.json","/en/comb/ECO1-5-2.json","/en/comb/ENV1-5-2.json","/en/comb/SOC1-2-2.json","/en/comb/ENV1-1-1.json","/en/comb/SOC1-7-2.json","/en/comb/ECO1-9-1.json","/en/comb/ECO3-4-1.json","/en/comb/ECO2-2-2.json","/en/comb/ECO3-5-1.json","/en/comb/SOC3-1-2.json","/en/comb/ENV4-5-1.json","/en/comb/SOC5-4-2.json","/en/comb/enrolments.json","/en/comb/SOC2-3-1.json","/en/comb/SOC4-7-1.json","/en/comb/ECO1-1-2.json","/en/comb/SOC5-5-2.json","/en/comb/SOC4-3-2.json","/en/comb/ENV5-1-2.json","/en/comb/ECO3-3-3.json","/en/comb/ENV1-4-1.json","/en/comb/SOC6-7-2.json","/en/comb/SOC6-8-1.json","/en/comb/ECO3-1-1.json","/en/comb/SOC1-6-1.json","/en/comb/ECO3-2-3.json","/en/comb/SOC6-9-2.json","/en/comb/ENV5-2-1.json","/en/comb/ENV4-5-2.json","/en/comb/SOC1-1-3.json","/en/comb/ECO4-6-2.json","/en/comb/ECO2-2-1.json","/en/comb/ENV3-1-3.json","/en/comb/agriculture.json","/en/comb/ECO2-5-1.json","/en/comb/ECO1-5-3.json","/en/comb/ECO3-6-2.json","/en/comb/ECO1-8-1.json","/en/comb/SOC4-6-1.json","/en/comb/SOC2-1-1.json","/en/comb/SOC1-2-1.json","/en/comb/SOC3-2-1.json","/en/comb/SOC2-2-1.json","/en/comb/ENV1-4-2.json","/en/comb/ENV3-1-1.json","/en/comb/ECO2-3-1.json","/en/comb/SOC6-8-2.json","/en/comb/ECO1-6-2.json","/en/comb/ENV2-6-1.json","/en/comb/SOC3-4-2.json","/en/comb/ECO4-7-1.json","/en/comb/ECO2-9-2.json","/en/comb/SOC6-9-1.json","/en/comb/ENV3-5-1.json","/en/comb/ENV3-2-2.json","/en/comb/ECO1-5-1.json","/en/comb/census.json","/en/comb/ECO1-1-1.json","/en/comb/SOC6-7-1.json","/en/comb/SOC1-1-2.json","/en/comb/ECO3-3-2.json","/en/comb/ECO3-2-1.json","/en/comb/SOC4-3-1.json","/en/comb/ENV5-4-1.json","/en/comb/ENV3-3-3.json","/en/comb/ECO2-3-2.json","/en/comb/ECO1-4-1.json","/en/comb/SOC6-1-3.json","/en/comb/SOC5-4-1.json","/en/comb/SOC6-3-2.json","/en/comb/ENV2-3-1.json","/en/comb/ENV1-4-3.json","/en/comb/ENV2-4-2.json","/en/comb/SOC3-2-3.json","/en/comb/ENV1-1-2.json","/en/comb/ECO1-6-1.json","/en/comb/SOC1-5-1.json","/en/comb/ECO1-8-2.json","/en/comb/SOC4-2-3.json","/en/comb/SOC1-1-1.json","/en/comb/SOC5-1-2.json","/en/comb/SOC4-7-2.json","/en/comb/ECO2-1-1.json","/en/comb/ENV1-3-3.json","/en/comb/ENV5-6-1.json","/en/comb/ENV4-6-1.json","/en/comb/ENV4-6-2.json","/en/comb/SOC4-1-1.json","/en/comb/ENV4-1-2.json","/en/comb/gdp-growth-rate.json","/en/comb/SOC6-2-1.json","/en/comb/SOC3-2-2.json","/en/comb/exports.json","/en/comb/ECO1-4-2.json","/en/comb/ECO1-3-1.json","/en/comb/ENV2-1-1.json","/en/comb/population.json","/en/comb/ENV1-5-3.json","/en/comb/book9.json","/en/comb/ENV4-4-2.json","/en/comb/SOC1-6-2.json","/en/comb/ENV2-3-3.json","/en/comb/ENV4-3-1.json","/en/comb/ENV4-4-1.json","/en/comb/SOC5-5-3.json","/en/comb/demographics.json","/en/comb/ECO1-7-1.json","/en/comb/imports.json","/en/comb/SOC5-5-1.json","/en/comb/ENV4-2-2.json","/en/comb/SOC1-7-1.json","/en/comb/ECO4-5-1.json","/en/comb/SOC1-3-1.json","/en/comb/SOC6-1-1.json","/en/comb/SOC3-4-3.json","/en/comb/SOC6-5-2.json","/en/comb/ECO1-7-2.json","/en/comb/ECO2-7-0.json","/en/comb/ENV2-6-2.json","/en/comb/ENV1-3-1.json","/en/comb/SOC4-2-1.json","/en/comb/SOC4-4-3.json","/en/comb/ENV5-3-1.json","/en/comb/ECO3-2-2.json","/en/comb/ENV1-1-3.json","/en/comb/ENV3-3-2.json","/en/comb/gdp-constant-price.json","/en/comb/ECO3-3-1.json","/en/comb/SOC4-4-1.json","/en/comb/ECO2-9-1.json","/en/comb/ECO2-1-2.json","/en/comb/ECO4-3-1.json","/en/comb/SOC6-3-3.json","/en/comb/ECO4-9-1.json","/en/comb/ENV1-2-1.json","/en/comb/SOC1-2-3.json","/en/comb/ENV4-7-1.json","/en/comb/SOC5-1-1.json","/en/comb/operations-budget.json","/en/comb/ENV5-5-1.json","/en/comb/ENV2-4-1.json","/en/comb/SOC5-1-3.json","/en/comb/ECO1-3-2.json","/en/comb/ENV4-1-1.json","/en/comb/ECO4-1-1.json","/en/comb/ECO4-2-1.json","/en/comb/ENV2-5-1.json","/en/comb/SOC4-1-2.json","/en/comb/ECO2-6-1.json","/en/comb/SOC2-4-1.json","/en/comb/ENV5-3-2.json","/en/comb/SOC1-4-1.json","/en/comb/SOC3-1-3.json","/en/comb/ENV3-2-1.json","/en/comb/SOC3-3-3.json","/en/comb/ENV3-5-2.json","/en/comb/SOC6-4-1.json","/en/comb/ENV2-2-2.json","/en/comb/ECO4-7-3.json","/en/comb/SOC4-1-3.json","/en/comb/school-attendance.json","/en/comb/SOC3-3-2.json","/en/comb/ECO1-8-3.json","/en/comb/ENV1-5-1.json","/en/comb/SOC6-8-3.json","/en/comb/ENV1-3-2.json","/en/comb/book3.json","/en/comb/SOC5-3-1.json","/en/comb/SOC4-4-2.json","/en/comb/SOC4-3-3.json","/en/comb/ECO4-6-1.json","/en/comb/infrastructure.json","/en/comb/watersanitation&hygiene.json","/en/comb/income.json","/en/comb/disaster-statistics.json","/en/comb/government.json","/en/comb/grades.json","/en/comb/vocational.json","/en/comb/usp.json","/en/comb/donor.json","/en/comb/vat.json"]);
  };

  event.waitUntil(populateCache());
});


// Cache page navigations (html) with a Network First strategy
registerRoute(
  // Check to see if the request is a navigation to a new page
  ({ request }) => request.mode === 'navigate',
  // Use a Network First caching strategy
  new NetworkFirst({
    cacheName: cacheName,
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  }),
);

// Cache CSS, JS, and Web Worker requests with a Stale While Revalidate strategy
registerRoute(
  // Check to see if the request's destination is style for stylesheets, script for JavaScript, or worker for web worker
  ({ request }) =>
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'worker',
  // Use a Stale While Revalidate caching strategy
  new StaleWhileRevalidate({
    cacheName: cacheName,
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  }),
);

// Cache images/fonts with a Cache First strategy
registerRoute(
  // Check to see if the request's destination is style for an image
  ({ request }) => ['image', 'font'].includes(request.destination),
  // Use a Cache First caching strategy
  new CacheFirst({
    cacheName: cacheName,
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
      // Don't cache more than 50 items, and expire them after 30 days
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
      }),
    ],
  }),
);

// Cache json with a Network First strategy.
registerRoute(
  /.*\.(json|geojson|zip|csv)$/,
  new NetworkFirst({
    cacheName: cacheName,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ]
  }),
);
