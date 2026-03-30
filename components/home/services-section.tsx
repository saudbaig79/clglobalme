"use client"

import { Plane, Monitor, ShoppingBag, MapPin, Radio, Building } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

const services = [
  {
    icon: MapPin,
    title: "Roadside Advertising",
    description: "Classic billboards to modern street-level displays, including our flagship 'Prime View' in London.",
  },
  {
    icon: Monitor,
    title: "Transport Advertising",
    description: "Comprehensive coverage across bus networks, rail systems, and metropolitan areas.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & In-Store",
    description: "Engaging retail and in-store ads to influence shoppers at the point of purchase.",
  },
  {
    icon: Plane,
    title: "Airport Advertising",
    description: "Ads in 10 key UK airports, reaching over 130 million travelers yearly.",
  },
  {
    icon: Radio,
    title: "Integrated Solutions",
    description: "'MediaFusion' program for seamless integration with digital and radio platforms.",
  },
  {
    icon: Building,
    title: "Other Outdoor Media",
    description: "Outdoor media in key public spaces for maximum brand impact.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium rounded-full mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif">
            Our <span className="gradient-text">Services</span>
          </h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection 
              key={index}
              animation="scale"
              delay={index * 100}
            >
              <div className="group p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 hover:border-[#d4af37]/30 transition-all duration-500 hover-lift h-full">
                <div className="w-14 h-14 mb-6 rounded-xl bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-colors">
                  <service.icon className="w-7 h-7 text-[#d4af37]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-white/50 leading-relaxed">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
