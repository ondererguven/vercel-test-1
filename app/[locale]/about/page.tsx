"use client"

import { useTranslations } from "next-intl"

export default function AboutPage() {
  const t = useTranslations("navigation")

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">{t("about")}</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">
            Welcome to our about page. This is where we tell our story and share our mission.
          </p>
          <p className="text-lg text-gray-600">
            We are passionate about creating meaningful connections between brands and their audiences through authentic
            social media experiences.
          </p>
        </div>
      </div>
    </div>
  )
}
