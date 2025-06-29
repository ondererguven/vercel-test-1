"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useLocale } from "next-intl"

const supportedLocales = ["en", "es"]

// Helper function to get the best matching locale from Accept-Language header
function getBrowserLocale(): string {
  if (typeof window === "undefined") return "en"

  // Check if user has a stored preference
  const storedLocale = localStorage.getItem("preferred-language")
  if (storedLocale && supportedLocales.includes(storedLocale)) {
    return storedLocale
  }

  // Get browser languages
  const browserLanguages = navigator.languages || [navigator.language]

  for (const browserLang of browserLanguages) {
    // Check for exact match
    if (supportedLocales.includes(browserLang)) {
      return browserLang
    }

    // Check for language code match (e.g., 'es-MX' -> 'es')
    const langCode = browserLang.split("-")[0]
    if (supportedLocales.includes(langCode)) {
      return langCode
    }
  }

  return "en" // Default fallback
}

export default function LocaleDetector() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale()

  useEffect(() => {
    // Only run on client side and for first-time visitors
    if (typeof window === "undefined") return

    const hasVisited = sessionStorage.getItem("locale-detected")
    if (hasVisited) return

    const detectedLocale = getBrowserLocale()

    // If detected locale is different from current locale and it's not already set
    if (detectedLocale !== currentLocale && detectedLocale !== "en") {
      // Mark that we've detected the locale for this session
      sessionStorage.setItem("locale-detected", "true")

      // Store the preference
      localStorage.setItem("preferred-language", detectedLocale)

      // Set cookie for server-side detection
      document.cookie = `NEXT_LOCALE=${detectedLocale}; path=/; max-age=31536000; SameSite=Lax`

      // Redirect to the detected locale
      const newPath = `/${detectedLocale}${pathname}`
      router.push(newPath)
    } else {
      // Mark as detected even if no redirect is needed
      sessionStorage.setItem("locale-detected", "true")
    }
  }, [currentLocale, pathname, router])

  return null // This component doesn't render anything
}
