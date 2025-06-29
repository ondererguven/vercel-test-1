"use client"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useLocale } from "next-intl"
import { ChevronDown, Globe } from "lucide-react"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸", nativeName: "English" },
  { code: "es", name: "Español", flag: "🇪🇸", nativeName: "Español" },
]

interface LanguageSwitcherProps {
  isMobile?: boolean
}

export default function LanguageSwitcher({ isMobile = false }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0]

  const handleLanguageChange = (langCode: string) => {
    // Store the language preference in localStorage for future visits
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred-language", langCode)
    }

    const segments = pathname.split("/")

    // Remove the current locale from the path if it exists
    if (segments[1] && languages.some((lang) => lang.code === segments[1])) {
      segments.splice(1, 1)
    }

    // Create the new path with the selected language
    const newPath = langCode === "en" ? segments.join("/") || "/" : `/${langCode}${segments.join("/") || ""}`

    // Set a cookie to remember the language preference
    document.cookie = `NEXT_LOCALE=${langCode}; path=/; max-age=31536000; SameSite=Lax`

    router.push(newPath)
    setIsOpen(false)
  }

  if (isMobile) {
    return (
      <div className="py-2">
        <div className="flex items-center justify-between w-full text-left text-gray-900 font-medium py-2 mb-2">
          <div className="flex items-center">
            <Globe className="h-4 w-4 mr-2" />
            <span>Language</span>
          </div>
        </div>
        <div className="pl-6 space-y-2">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`flex items-center w-full text-left py-1 text-sm transition-colors ${
                locale === language.code ? "text-samimi-green font-medium" : "text-gray-600 hover:text-samimi-green"
              }`}
            >
              <span className="mr-2">{language.flag}</span>
              {language.nativeName}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="flex items-center space-x-1 text-gray-900 hover:text-samimi-green transition-colors duration-200 font-medium">
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{currentLanguage.nativeName}</span>
        <span className="sm:hidden">{currentLanguage.flag}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`flex items-center w-full px-4 py-3 text-left transition-colors duration-200 ${
                locale === language.code
                  ? "text-samimi-green bg-samimi-beige font-medium"
                  : "text-gray-700 hover:text-samimi-green hover:bg-samimi-beige"
              }`}
            >
              <span className="mr-3">{language.flag}</span>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{language.nativeName}</span>
                <span className="text-xs text-gray-500">{language.name}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
