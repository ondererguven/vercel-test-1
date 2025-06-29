"use client"

import { useTranslations } from "next-intl"

export default function ServicesPage() {
  const t = useTranslations("navigation")

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">{t("services")}</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Social Media Strategy</h3>
            <p className="text-gray-600">
              Comprehensive social media strategies tailored to your brand's unique voice and goals.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Content Creation</h3>
            <p className="text-gray-600">
              Engaging content that resonates with your audience and drives meaningful interactions.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Community Management</h3>
            <p className="text-gray-600">
              Building and nurturing online communities that foster brand loyalty and engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
