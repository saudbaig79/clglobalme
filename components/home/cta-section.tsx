"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

export function CTASection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-billboard.jpg"
          alt="Billboard advertising"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center">
          <span className="inline-block px-4 py-1.5 bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium rounded-full mb-6">
            Start Your Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-sans leading-tight">
            Ready to Make Your Brand{" "}
            <span className="gradient-text">Unforgettable?</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Partner with CL Global Media and transform your advertising strategy. 
            Our team of experts is ready to help you reach new audiences and achieve 
            remarkable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#d4af37] hover:bg-[#b8982f] text-black font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#d4af37]/20"
            >
              Get Started Today
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
