"use client"

import { Lightbulb, Zap, Users, Leaf } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

const reasons = [
  {
    icon: Lightbulb,
    title: "Creativity & Innovation",
    description: "Collaborate with leading designers for impactful advertising that captivates audiences.",
    color: "from-amber-500/20 to-yellow-500/20",
  },
  {
    icon: Zap,
    title: "Efficient Production",
    description: "Intuitive online platform for seamless design submission and rapid approval workflows.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Users,
    title: "Partnership & Support",
    description: "Dedicated support team working alongside you to ensure campaign success.",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Committed to sustainable, eco-friendly, and responsible advertising practices.",
    color: "from-teal-500/20 to-green-500/20",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium rounded-full mb-4">
            Our Advantage
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif">
            Why <span className="gradient-text">Choose Us</span>
          </h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <AnimatedSection 
              key={index}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="text-center group">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <reason.icon className="w-10 h-10 text-[#d4af37]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{reason.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
