"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

export function JoinTeam() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/10 via-transparent to-[#d4af37]/10" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center">
          <div className="p-12 rounded-3xl gold-border bg-black/50 backdrop-blur-sm">
            <span className="inline-block px-4 py-1.5 bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium rounded-full mb-6">
              Careers
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-sans">
              Join Our <span className="gradient-text">Growing Team</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals who share our passion for 
              innovation and excellence. If you&apos;re ready to make an impact in the 
              advertising industry, we&apos;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#d4af37] hover:bg-[#b8982f] text-black font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#d4af37]/20"
            >
              Get in Touch
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
