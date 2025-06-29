"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"

export default function Footer() {
  const t = useTranslations("footer")

  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Samimi. {t("allRightsReserved")}
          </p>

          <nav className="flex gap-6 text-sm">
            <Link href="/privacy">{t("privacy")}</Link>
            <Link href="/terms">{t("terms")}</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
