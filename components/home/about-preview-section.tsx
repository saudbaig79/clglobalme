"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

const highlights = [
  "Global network of premium advertising locations",
  "Cutting-edge digital and traditional media solutions",
  "Data-driven campaign optimization",
  "Dedicated client success team",
]

export function AboutPreviewSection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#d4af37]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <AnimatedSection animation="fade-left">
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1920&auto=format&fit=crop"
                  alt="CL Global Media Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-8 -right-8 bg-[#d4af37] rounded-2xl p-6 shadow-2xl">
                <p className="text-black text-4xl font-bold">✓</p>
                <p className="text-black/70 text-sm">Attention to Detail</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection animation="fade-right">
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium rounded-full mb-6">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
                Transforming How Brands{" "}
                <span className="gradient-text">Advertise</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Our team of experts works closely with clients to understand their business goals 
                and create custom advertising campaigns that deliver real results. We take pride 
                in delivering exceptional services that exceed our clients&apos; expectations.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                Your Partner in Building Powerful Advertising Campaigns
              </p>

              <ul className="space-y-4 mb-8">
                {highlights.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/about"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#d4af37] hover:bg-[#b8982f] text-black font-semibold rounded-full transition-all duration-300"
              >
                Learn More About Us
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
