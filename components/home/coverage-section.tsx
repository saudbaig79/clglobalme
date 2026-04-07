"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

export function CoverageSection() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium rounded-full mb-4">
            Global Reach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-sans">
            Our <span className="gradient-text">Coverage</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {/* International Coverage */}
          <AnimatedSection animation="fade-left">
            <div className="relative group overflow-hidden rounded-2xl gold-border hover-lift h-full">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1964&auto=format&fit=crop"
                  alt="International Coverage"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-block px-3 py-1 bg-[#d4af37]/20 text-[#d4af37] text-xs font-medium rounded-full mb-4">
                  Worldwide
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-sans">
                  International Coverage
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Our international coverage includes state-of-the-art digital screens in prime locations, providing dynamic and engaging advertising spaces across continents.
                </p>
                <Link 
                  href="/services"
                  className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#f4e4a6] font-medium transition-colors group/link"
                >
                  Learn More 
                  <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Localized Impact */}
          <AnimatedSection animation="fade-right">
            <div className="relative group overflow-hidden rounded-2xl gold-border hover-lift h-full">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1920&auto=format&fit=crop"
                  alt="Localized Impact"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-block px-3 py-1 bg-[#d4af37]/20 text-[#d4af37] text-xs font-medium rounded-full mb-4">
                  Local Markets
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-sans">
                  Localized Impact
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  For localized impact, we offer a variety of advertising options in community hubs, retail centers, and transportation networks tailored to your audience.
                </p>
                <Link 
                  href="/services"
                  className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#f4e4a6] font-medium transition-colors group/link"
                >
                  Our Services 
                  <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
