import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
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
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <ErrorBoundary>
          <NextIntlClientProvider messages={messages}>
            <Navigation />
            <main className="pt-20">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
