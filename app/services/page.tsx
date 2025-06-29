import Link from "next/link"
import { Users, TrendingUp, Zap, Award, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Users,
      title: "Talent Management",
      description:
        "We nurture and develop social media talent, providing comprehensive support from content strategy to brand partnerships. Our talent management approach focuses on authentic growth and sustainable career development.",
      features: [
        "Content Strategy Development",
        "Brand Partnership Facilitation",
        "Career Growth Planning",
        "Performance Analytics",
      ],
      slug: "talent-management",
    },
    {
      icon: TrendingUp,
      title: "Brand Consulting",
      description:
        "Strategic guidance to position your brand for maximum social impact. We analyze market trends, competitor landscapes, and audience behavior to create winning strategies.",
      features: ["Brand Positioning Strategy", "Market Analysis", "Competitor Research", "Social Media Audits"],
      slug: "brand-consulting",
    },
    {
      icon: Zap,
      title: "Influencer Marketing",
      description:
        "Connecting brands with the right voices for meaningful engagement. We facilitate authentic partnerships that drive real results and build lasting relationships.",
      features: ["Influencer Matching", "Campaign Management", "Performance Tracking", "ROI Optimization"],
      slug: "influencer-marketing",
    },
    {
      icon: Award,
      title: "Brand & Event Activations",
      description:
        "Creating memorable experiences that resonate with your audience. From digital campaigns to live events, we bring brands to life through innovative activations.",
      features: [
        "Event Planning & Execution",
        "Digital Campaign Creation",
        "Experiential Marketing",
        "Multi-Platform Integration",
      ],
      slug: "brand-and-event-activations",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-samimi-beige to-samimi-beige-alt py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive social media solutions designed to elevate your brand and create authentic connections with
            your audience.
          </p>
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
                  <h2 className="text-2xl font-semibold text-gray-900">{service.title}</h2>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
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
                  Learn More
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
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your brand's social media presence.
          </p>
          <Link
            href="/contact"
            className="bg-samimi-green text-white px-8 py-4 rounded-full hover:bg-samimi-green-dark transition-colors duration-200 font-medium inline-flex items-center"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
