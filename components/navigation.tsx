"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Menu } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const t = useTranslations("navigation")
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold">
          Samimi
        </Link>

        {/* Desktop links */}
        <nav className="hidden gap-8 md:flex">
          <Link href="/services" className="text-sm font-medium">
            {t("services")}
          </Link>
          <Link href="/about" className="text-sm font-medium">
            {t("about")}
          </Link>
          <Link href="/contact" className="text-sm font-medium">
            {t("contact")}
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label={open ? "Close menu" : "Open menu"}>
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile menu sheet */}
      <div
        className={cn(
          "md:hidden transition-transform origin-top overflow-hidden bg-white",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <nav className="flex flex-col px-4 pb-4">
          <Link href="/services" className="py-2 text-sm font-medium" onClick={() => setOpen(false)}>
            {t("services")}
          </Link>
          <Link href="/about" className="py-2 text-sm font-medium" onClick={() => setOpen(false)}>
            {t("about")}
          </Link>
          <Link href="/contact" className="py-2 text-sm font-medium" onClick={() => setOpen(false)}>
            {t("contact")}
          </Link>
        </nav>
      </div>
    </header>
  )
}
