import createMiddleware from "next-intl/middleware"

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "es"],

  // Used when no locale matches
  defaultLocale: "en",

  // Enable automatic locale detection based on the Accept-Language header
  localeDetection: true,

  // Configure locale detection behavior
  localePrefix: "as-needed", // Only add locale prefix when it's not the default locale

  // Custom locale detection function for more control
  alternateLinks: false, // Disable alternate links in HTML head for now
})

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the locale for
    // all requests that don't have a locale prefix
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
}
