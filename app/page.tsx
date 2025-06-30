import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6">
              Authentic
              <span className="block font-normal text-samimi-green">Connections</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-light">
              We elevate brands through strategic social media excellence and meaningful influencer partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-samimi-green text-white px-8 py-4 rounded-full hover:bg-samimi-green-dark transition-colors duration-200 font-medium inline-flex items-center justify-center"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="border border-gray-300 text-gray-900 px-8 py-4 rounded-full hover:bg-gray-50 transition-colors duration-200 font-medium"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20"></section>

      {/* CTA Section */}
    </div>
  )
}
