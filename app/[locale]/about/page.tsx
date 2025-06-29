"use client"

import { Target, Heart, Zap, Users } from "lucide-react"
import { useTranslations } from "next-intl"

export default function AboutPage() {
  const t = useTranslations("about")

  const values = [
    {
      icon: Heart,
      key: "authenticity",
    },
    {
      icon: Target,
      key: "excellence",
    },
    {
      icon: Zap,
      key: "innovation",
    },
    {
      icon: Users,
      key: "community",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-samimi-beige to-samimi-beige-alt py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">{t("title")}</h1>
            <p className="text-xl text-gray-600 leading-relaxed">{t("description")}</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">{t("ourStory")}</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {(t.raw("storyParagraphs") as string[]).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="bg-samimi-beige rounded-2xl aspect-square"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-samimi-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">{t("ourValues")}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("valuesDescription")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-2xl p-8 mb-4 hover:shadow-lg transition-shadow duration-300">
                  <value.icon className="h-8 w-8 text-samimi-green mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">{t(`values.${value.key}.title`)}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{t(`values.${value.key}.description`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-samimi-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">{t("ourMission")}</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">{t("missionDescription")}</p>
        </div>
      </section>
    </div>
  )
}
