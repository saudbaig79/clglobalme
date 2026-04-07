"use client"

import { Target, Heart, Lightbulb, Shield } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in everything we do, setting high standards and delivering exceptional results.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Our passion for advertising drives us to create innovative campaigns that resonate with audiences.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new technologies and creative approaches to stay ahead in the ever-evolving media landscape.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with transparency and honesty, building trust with our clients and partners.",
  },
]

export function TeamValues() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium rounded-full mb-4">
            What Drives Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-sans">
            Our Core <span className="gradient-text">Values</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <AnimatedSection
              key={index}
              animation="scale"
              delay={index * 100}
            >
              <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 hover:border-[#d4af37]/30 transition-all duration-500 hover-lift h-full">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-[#d4af37]/10 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-[#d4af37]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-white/50 leading-relaxed">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
