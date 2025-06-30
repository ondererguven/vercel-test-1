"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"

export default function Navigation() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const services = ["Talent Management", "Brand Consulting", "Influencer Marketing", "Brand & Event Activations"]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/samimi-logo-transparent.png"
              alt="Samimi"
              width={1080}
              height={1350}
              className="h-auto w-96"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-900 hover:text-samimi-green transition-colors duration-200 font-medium">
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services/${service.toLowerCase().replace(/\s+/g, "-").replace("&", "and")}`}
                      className="block px-4 py-3 text-gray-700 hover:text-samimi-green hover:bg-samimi-beige transition-colors duration-200"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/talents"
              className="text-gray-900 hover:text-samimi-green transition-colors duration-200 font-medium"
            >
              Talents
            </Link>
            <Link
              href="/about"
              className="text-gray-900 hover:text-samimi-green transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="bg-samimi-green text-white px-6 py-2 rounded-full hover:bg-samimi-green-dark transition-colors duration-200 font-medium"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white/95 backdrop-blur-sm rounded-lg mt-2 border border-gray-100">
            <div className="space-y-4 px-4">
              <div>
                <button
                  className="flex items-center justify-between w-full text-left text-gray-900 font-medium py-2"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={`/services/${service.toLowerCase().replace(/\s+/g, "-").replace("&", "and")}`}
                        className="block text-gray-600 py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/talents"
                className="block text-gray-900 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Talents
              </Link>
              <Link
                href="/about"
                className="block text-gray-900 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block bg-samimi-green text-white px-6 py-2 rounded-full text-center font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
