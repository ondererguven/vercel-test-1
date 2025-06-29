"use client"

import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"
import { Menu, Globe } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const t = useTranslations("navigation")
  const locale = useLocale()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  const getLocalizedPath = (newLocale: string) => {
    const segments = pathname.split("/")
    segments[1] = newLocale
    return segments.join("/")
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-white/70 backdrop-blur border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href={`/${locale}`} className="text-lg font-semibold text-samimi-green">
          Samimi
        </Link>

        {/* Desktop links */}
        <nav className="hidden gap-8 md:flex items-center">
          <Link href={`/${locale}/services`} className="text-sm font-medium hover:text-samimi-green transition-colors">
            {t("services")}
          </Link>
          <Link href={`/${locale}/about`} className="text-sm font-medium hover:text-samimi-green transition-colors">
            {t("about")}
          </Link>
          <Link href={`/${locale}/contact`} className="text-sm font-medium hover:text-samimi-green transition-colors">
            {t("contact")}
          </Link>

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-sm font-medium hover:text-samimi-green transition-colors"
            >
              <Globe className="h-4 w-4" />
              {locale.toUpperCase()}
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg border">
                <Link
                  href={getLocalizedPath("en")}
                  className="block px-3 py-2 text-sm hover:bg-gray-50"
                  onClick={() => setLangOpen(false)}
                >
                  EN
                </Link>
                <Link
                  href={getLocalizedPath("es")}
                  className="block px-3 py-2 text-sm hover:bg-gray-50"
                  onClick={() => setLangOpen(false)}
                >
                  ES
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label={open ? "Close menu" : "Open menu"}>
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile menu sheet */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 overflow-hidden bg-white border-b",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <nav className="flex flex-col px-4 pb-4">
          <Link href={`/${locale}/services`} className="py-2 text-sm font-medium" onClick={() => setOpen(false)}>
            {t("services")}
          </Link>
          <Link href={`/${locale}/about`} className="py-2 text-sm font-medium" onClick={() => setOpen(false)}>
            {t("about")}
          </Link>
          <Link href={`/${locale}/contact`} className="py-2 text-sm font-medium" onClick={() => setOpen(false)}>
            {t("contact")}
          </Link>
          <div className="py-2 border-t mt-2">
            <Link href={getLocalizedPath("en")} className="block py-1 text-sm" onClick={() => setOpen(false)}>
              English
            </Link>
            <Link href={getLocalizedPath("es")} className="block py-1 text-sm" onClick={() => setOpen(false)}>
              Español
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
