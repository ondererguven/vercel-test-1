"use client"

import { useTranslations } from "next-intl"

export default function Footer() {
  const t = useTranslations("footer")

  return (
    <footer className="bg-samimi-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-gray-500">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
