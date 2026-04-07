"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Modern city skyline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      </div>

      {/* Animated particles/dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#d4af37]/30 animate-float" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-[#d4af37]/20 animate-float delay-300" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-[#d4af37]/40 animate-float delay-500" />
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 rounded-full bg-[#d4af37]/30 animate-float delay-700" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight animate-fade-in-up delay-100 tracking-tight">
          <span className="text-[#d4af37]">CL</span> Global Media
        </h1>

        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white mb-8 leading-tight animate-fade-in-up delay-150">
          Redefining{" "}
          <span className="gradient-text font-sans italic">Outdoor</span>
          <br />
          Advertising Globally
        </h2>
        
        <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          Where innovation meets visibility. We connect brands with audiences through 
          cutting-edge outdoor media solutions across the globe.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
          <Link 
            href="/services"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#d4af37] hover:bg-[#b8982f] text-black font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#d4af37]/20"
          >
            Explore Our Services
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link 
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
          >
            <Play size={18} className="text-[#d4af37]" />
            Get in Touch
          </Link>
        </div>


      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#d4af37]/30 rounded-full flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#d4af37]/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
