"use client"

import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"

/**
 * A tiny client-side helper that:
 * 1. Reads the browser’s preferred languages.
 * 2. Redirects to the best-matching locale route the first time the user visits the site.
 *
 * NOTE:  If you already implemented language detection in middleware
 *        this component can be removed.  It is included here so that a
 *        default export exists and deployment succeeds.
 */
export default function LocaleDetector() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Only run on first render of root route (no locale in path)
    if (pathname && /^\/(en|es)(\/|$)/i.test(pathname)) return

    const preferred = navigator.languages?.[0] || navigator.language || "en"
    const short = preferred.split("-")[0]
    const supported = ["en", "es"]
    const target = supported.includes(short) ? short : "en"

    router.replace(`/${target}${pathname}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
