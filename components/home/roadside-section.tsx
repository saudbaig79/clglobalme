"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/ui/animated-section"

const roadsideOptions = [
  {
    title: "Large Format",
    description: "Bold billboards in key urban areas for maximum reach.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "The A-List",
    description: "Premium digital sites in London to elevate your brand.",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "Street Hub",
    description: "Digital touchpoints bringing brands closer to consumers.",
    image: "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "Small Format",
    description: "Eye-level 6-sheets for everyday audience engagement.",
    image: "https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "Convenience 6-Sheets",
    description: "Influence shoppers right before they buy.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "Kiosks",
    description: "19,000 locations offering prime retail proximity.",
    image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=1920&auto=format&fit=crop",
  },
]

export function RoadsideSection() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium rounded-full mb-4">
            Outdoor Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif">
            Explore <span className="gradient-text">Roadside</span>
          </h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadsideOptions.map((option, index) => (
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
