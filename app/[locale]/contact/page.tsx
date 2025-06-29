"use client"

import { useTranslations } from "next-intl"

export default function ContactPage() {
  const t = useTranslations("navigation")

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">{t("contact")}</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">Get in touch with us to start your social media journey.</p>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-samimi-green focus:ring-samimi-green"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-samimi-green focus:ring-samimi-green"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-samimi-green focus:ring-samimi-green"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-samimi-green text-white py-2 px-4 rounded-md hover:bg-samimi-green-dark transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
