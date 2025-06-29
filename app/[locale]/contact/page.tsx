"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useTranslations } from "next-intl"

export default function ContactPage() {
  const t = useTranslations("contact")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-samimi-beige to-samimi-beige-alt py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">{t("title")}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("description")}</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8">{t("getInTouch")}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("form.name")} {t("form.required")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-samimi-green focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("form.email")} {t("form.required")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-samimi-green focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("form.company")}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-samimi-green focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("form.serviceOfInterest")}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-samimi-green focus:border-transparent transition-colors"
                  >
                    <option value="">{t("form.selectService")}</option>
                    <option value="talent-management">
                      {t("form.talentManagement", {}, { fallback: "Talent Management" })}
                    </option>
                    <option value="brand-consulting">
                      {t("form.brandConsulting", {}, { fallback: "Brand Consulting" })}
                    </option>
                    <option value="influencer-marketing">
                      {t("form.influencerMarketing", {}, { fallback: "Influencer Marketing" })}
                    </option>
                    <option value="brand-event-activations">
                      {t("form.brandEventActivations", {}, { fallback: "Brand & Event Activations" })}
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("form.message")} {t("form.required")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-samimi-green focus:border-transparent transition-colors resize-none"
                    placeholder={t("form.messagePlaceholder")}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-samimi-green text-white px-8 py-4 rounded-lg hover:bg-samimi-green-dark transition-colors duration-200 font-medium inline-flex items-center justify-center"
                >
                  {t("form.sendMessage")}
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-8">
              <h2 className="text-3xl font-light text-gray-900 mb-8">{t("letsConnect")}</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-samimi-beige p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-samimi-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t("contactInfo.email")}</h3>
                    <p className="text-gray-600">hello@samimi.agency</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-samimi-beige p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-samimi-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t("contactInfo.phone")}</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-samimi-beige p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-samimi-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t("contactInfo.office")}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{t("contactInfo.address")}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-samimi-beige rounded-2xl">
                <h3 className="font-semibold text-gray-900 mb-4">{t("responseTime")}</h3>
                <p className="text-gray-600 mb-4">{t("responseDescription")}</p>
                <p className="text-sm text-gray-500">{t("urgentNote")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
