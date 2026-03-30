export function AboutPreviewSection() {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div 
              className="aspect-[4/3] rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1920&auto=format&fit=crop')",
              }}
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-blue-400 text-sm font-medium uppercase tracking-wider mb-4">About</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">ABOUT</h2>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Transforming how brands advertise
            </h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Our team of experts works closely with clients to understand their business goals and create custom advertising campaigns that deliver real results. We take pride in delivering exceptional services that exceed our clients&apos; expectations.
            </p>
            <p className="text-white/70 leading-relaxed">
              Your Partner in Building Powerful Advertising Campaigns
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
