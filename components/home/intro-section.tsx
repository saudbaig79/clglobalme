"use client"

import { AnimatedSection } from "@/components/ui/animated-section"

export function IntroSection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <AnimatedSection animation="fade-up">
          <span className="inline-block px-4 py-1.5 bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium rounded-full mb-6">
            Our Vision
          </span>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={100}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight font-serif">
            Connecting Brands with{" "}
            <span className="gradient-text">Audiences Worldwide</span>
          </h2>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={200}>
          <p className="text-lg text-white/60 leading-relaxed max-w-3xl mx-auto">
            CL Global Media is among the foremost outdoor advertising companies, boasting a diverse 
            portfolio that spans airports, roadside billboards, premium digital displays in top-tier 
            locations, and more. We believe in the power of outdoor advertising to create meaningful 
            connections with audiences everywhere.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
