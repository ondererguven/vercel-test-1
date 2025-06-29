"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"

export default function HomePage() {
  const t = useTranslations("homepage")

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-samimi-beige to-samimi-beige-alt py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <Image
                src="/images/samimi-logo-transparent.png"
                alt="Samimi"
                width={300}
                height={100}
                className="h-20 w-auto mx-auto"
              />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6">
              {t("heroTitle")}
              <span className="block font-normal text-samimi-green">{t("heroSubtitle")}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-light">
              {t("heroDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-samimi-green text-white px-6 py-3 rounded-full hover:bg-samimi-green-dark transition-colors duration-200 font-medium inline-flex items-center justify-center"
              >
                {t("startJourney")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="border border-gray-300 text-gray-900 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors duration-200 font-medium"
              >
                {t("learnMore")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
