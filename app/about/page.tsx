import { Target, Heart, Zap, Users } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Authenticity",
      description: "We believe in genuine connections and authentic storytelling that resonates with real people.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every campaign, partnership, and creative endeavor we undertake.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We stay ahead of trends and embrace new technologies to deliver cutting-edge solutions.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We foster a supportive community where talents and brands can thrive together.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">About Samimi</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are a forward-thinking social media agency dedicated to creating authentic connections between brands
              and their audiences through strategic partnerships and innovative campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between brands and authentic social media talent, Samimi has
                  grown into a trusted partner for companies seeking meaningful digital engagement.
                </p>
                <p>
                  Our journey began with a simple belief: that the most powerful marketing comes from genuine
                  connections and authentic storytelling. Today, we continue to champion this philosophy while helping
                  brands navigate the ever-evolving social media landscape.
                </p>
                <p>
                  With a curated network of talented creators and a deep understanding of digital trends, we craft
                  campaigns that not only capture attention but also drive real business results.
                </p>
              </div>
            </div>
            <div className="bg-samimi-beige rounded-2xl aspect-square"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients and talents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-2xl p-8 mb-4 hover:shadow-lg transition-shadow duration-300">
                  <value.icon className="h-8 w-8 text-samimi-green mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-samimi-green text-white rounded-2xl mx-4 sm:mx-6 lg:mx-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Our Mission</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            To empower brands and creators to build authentic relationships that drive meaningful engagement, foster
            community, and create lasting impact in the digital world.
          </p>
        </div>
      </section>
    </div>
  )
}
