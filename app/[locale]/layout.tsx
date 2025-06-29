import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import LocaleDetector from "@/components/locale-detector"
import ErrorBoundary from "@/components/error-boundary"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Samimi - Social Media Agency",
  description: "Elevating brands through authentic connections and strategic social media excellence.",
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <ErrorBoundary>
          <NextIntlClientProvider messages={messages}>
            <LocaleDetector />
            <Navigation />
            <main className="pt-20">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
