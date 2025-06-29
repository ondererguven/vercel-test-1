"use client"

import Link from "next/link"
import { Users, TrendingUp, Zap, Award, ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"

export default function ServicesPage() {
  const t = useTranslations("services")

  const services = [
    {
      icon: Users,
      key: "talentManagement",
      slug: "talent-management",
    },
    {
      icon: TrendingUp,
      key: "brandConsulting",
      slug: "brand-consulting",
    },
    {
      icon: Zap,
      key: "influencerMarketing",
      slug: "influencer-marketing",
    },
    {
      icon: Award,
      key: "brandEventActivations",
      slug: "brand-and-event-activations",
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

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-samimi-green text-white p-3 rounded-xl mr-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900">{t(`${service.key}.title`)}</h2>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{t(`${service.key}.description`)}</p>

                <ul className="space-y-2 mb-6">
                  {(t.raw(`${service.key}.features`) as string[]).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-samimi-green rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-samimi-green font-medium hover:text-samimi-green-dark transition-colors"
                >
                  {t("learnMore")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-samimi-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">{t("readyToStart")}</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">{t("readyDescription")}</p>
          <Link
            href="/contact"
            className="bg-samimi-green text-white px-8 py-4 rounded-full hover:bg-samimi-green-dark transition-colors duration-200 font-medium inline-flex items-center"
          >
            {t("contactToday")}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
