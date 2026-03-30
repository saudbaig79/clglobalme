"use client"

import Image from "next/image"

export function TeamHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
          alt="Team collaboration"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20">
        <span className="inline-block px-4 py-1.5 bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium rounded-full mb-6 animate-fade-in-up">
          Our People
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up delay-100 font-serif">
          Meet the <span className="gradient-text">Team</span>
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          The talented professionals behind CL Global Media who are dedicated 
          to delivering exceptional advertising solutions worldwide.
        </p>
      </div>
    </section>
  )
}
