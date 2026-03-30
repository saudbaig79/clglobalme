import Link from "next/link"

export function CoverageSection() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* International Coverage */}
          <div className="relative group overflow-hidden rounded-lg">
            <div 
              className="aspect-[4/3] bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1964&auto=format&fit=crop')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                International Coverage
              </h3>
              <p className="text-white/70 mb-6">
                Our international coverage includes state-of-the-art digital screens in prime locations, providing dynamic and engaging advertising spaces.
              </p>
              <Link 
                href="/services"
                className="inline-block text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                Read More &rarr;
              </Link>
            </div>
          </div>

          {/* Localized Impact */}
          <div className="relative group overflow-hidden rounded-lg">
            <div 
              className="aspect-[4/3] bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1920&auto=format&fit=crop')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Localized Impact
              </h3>
              <p className="text-white/70 mb-6">
                For localized impact, we offer a variety of advertising options in community hubs, retail centers, and transportation networks.
              </p>
              <Link 
                href="/services"
                className="inline-block text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                Services &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
