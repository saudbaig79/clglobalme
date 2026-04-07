"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/ui/animated-section"

const transportOptions = [
  {
    title: "Bus",
    description: "Nationwide reach, engaging millions on their daily commutes.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "Rail Digital",
    description: "High-impact digital screens in iconic stations.",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "TfL Rail Estate",
    description: "Exclusive advertising across Tube, Tram, and Overground.",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "Metro",
    description: "Expanding brand presence in bustling city centers.",
    image: "https://images.unsplash.com/photo-1565354810165-c3678116e5d1?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "Tram",
    description: "Cost-effective local advertising with strong visibility.",
    image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=1920&auto=format&fit=crop",
  },
]

export function TransportSection() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium rounded-full mb-4">
            Transit Advertising
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-sans">
            Explore <span className="gradient-text">Transport</span>
          </h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transportOptions.map((option, index) => (
            <AnimatedSection 
              key={index}
              animation="scale"
              delay={index * 80}
            >
              <div className="group relative overflow-hidden rounded-2xl cursor-pointer hover-lift">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={option.image}
                    alt={option.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#d4af37] transition-colors">{option.title}</h3>
                  <p className="text-white/60 text-sm">{option.description}</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#d4af37]/0 group-hover:bg-[#d4af37]/20 flex items-center justify-center transition-all duration-300">
                  <svg className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
