import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import LocaleDetector from "@/components/locale-detector"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Samimi - Social Media Agency",
  description: "Elevating brands through authentic connections and strategic social media excellence.",
    generator: 'v0.dev'
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const messages = await getMessages()

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <LocaleDetector />
          <Navigation />
          <main className="pt-20">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
