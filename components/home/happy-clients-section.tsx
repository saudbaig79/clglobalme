"use client"

import { Star, Quote } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

const testimonials = [
  {
    quote: "CL Global Media transformed our advertising strategy. Their innovative approach and extensive network delivered exceptional results.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFlow Inc.",
  },
  {
    quote: "The team's dedication to our success was evident from day one. They exceeded all expectations with their creative solutions.",
    author: "Michael Chen",
    role: "Brand Manager",
    company: "Luxe Brands",
  },
  {
    quote: "Outstanding service and remarkable reach. Our brand visibility increased by 300% within the first quarter.",
    author: "Emma Williams",
    role: "CEO",
    company: "StartUp Hub",
  },
]

export function HappyClientsSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#d4af37] via-[#f4e4a6] to-[#d4af37] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center mb-16">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-black fill-black" />
            ))}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-black font-serif">
            Happy Clients
          </h2>
          <p className="text-black/70 mt-4 text-lg">
            Trusted by leading brands worldwide
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 150}
            >
              <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-8 h-full">
                <Quote className="w-10 h-10 text-[#d4af37] mb-6" />
                <p className="text-white/80 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-[#d4af37] text-sm">{testimonial.role}</p>
                  <p className="text-white/50 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
