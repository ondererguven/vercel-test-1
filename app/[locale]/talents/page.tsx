"use client"

import { useTranslations } from "next-intl"

export default function TalentsPage() {
  const t = useTranslations("talents")

  const talents = [
    {
      name: "Sarah Chen",
      specialty: t("specialties.lifestyleFashion"),
      followers: "2.3M",
      engagement: "8.5%",
      platforms: ["Instagram", "TikTok"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Marcus Johnson",
      specialty: t("specialties.techInnovation"),
      followers: "1.8M",
      engagement: "12.3%",
      platforms: ["YouTube", "LinkedIn"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Elena Rodriguez",
      specialty: t("specialties.foodTravel"),
      followers: "3.1M",
      engagement: "9.7%",
      platforms: ["Instagram", "YouTube"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "David Kim",
      specialty: t("specialties.fitnessWellness"),
      followers: "1.5M",
      engagement: "11.2%",
      platforms: ["TikTok", "Instagram"],
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-samimi-beige to-samimi-beige-alt py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">{t("title")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("description")}</p>
        </div>
      </section>

      {/* Talents Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {talents.map((talent, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-square bg-samimi-beige"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{talent.name}</h3>
                  <p className="text-samimi-green font-medium mb-4">{talent.specialty}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{t("followers")}</span>
                      <span className="font-semibold">{talent.followers}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">{t("engagement")}</span>
                      <span className="font-semibold text-samimi-green">{talent.engagement}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {talent.platforms.map((platform, platformIndex) => (
                      <span
                        key={platformIndex}
                        className="bg-samimi-beige text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-samimi-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">{t("impact")}</h2>
            <p className="text-lg text-gray-600">{t("impactDescription")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-light text-samimi-green mb-2">50+</div>
              <div className="text-gray-600">{t("stats.creators")}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-samimi-green mb-2">100M+</div>
              <div className="text-gray-600">{t("stats.reach")}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-samimi-green mb-2">500+</div>
              <div className="text-gray-600">{t("stats.campaigns")}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-samimi-green mb-2">95%</div>
              <div className="text-gray-600">{t("stats.satisfaction")}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
