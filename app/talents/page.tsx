export default function TalentsPage() {
  const talents = [
    {
      name: "Sarah Chen",
      specialty: "Lifestyle & Fashion",
      followers: "2.3 M",
      engagement: "8.5 %",
      platforms: ["Instagram", "TikTok"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Marcus Johnson",
      specialty: "Tech & Innovation",
      followers: "1.8 M",
      engagement: "12.3 %",
      platforms: ["YouTube", "LinkedIn"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Elena Rodriguez",
      specialty: "Food & Travel",
      followers: "3.1 M",
      engagement: "9.7 %",
      platforms: ["Instagram", "YouTube"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "David Kim",
      specialty: "Fitness & Wellness",
      followers: "1.5 M",
      engagement: "11.2 %",
      platforms: ["TikTok", "Instagram"],
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Our Talents</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the exceptional creators who bring authenticity and creativity to every brand partnership.
          </p>
        </div>
      </section>

      {/* Talent grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {talents.map((talent) => (
              <div
                key={talent.name}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square bg-samimi-beige" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{talent.name}</h3>
                  <p className="text-samimi-green font-medium mb-4">{talent.specialty}</p>

                  <div className="space-y-1 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Followers</span>
                      <span className="font-semibold">{talent.followers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Engagement</span>
                      <span className="font-semibold text-samimi-green">{talent.engagement}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {talent.platforms.map((p) => (
                      <span
                        key={p}
                        className="bg-samimi-beige text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Talented Creators", value: "50 +" },
              { label: "Combined Reach", value: "100 M+" },
              { label: "Successful Campaigns", value: "500 +" },
              { label: "Client Satisfaction", value: "95 %" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-light text-samimi-green mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
