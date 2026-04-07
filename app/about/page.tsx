"use client"

import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            alt="Modern office"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32">
          <span className="inline-block px-4 py-1.5 bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium rounded-full mb-6 animate-fade-in-up">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up delay-100 font-sans">
            Delivering <span className="gradient-text">Legendary</span><br />
            Advertising Campaigns
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8 animate-fade-in-up delay-200">
            With innovation, creativity, and a global reach that transforms how brands connect with their audiences.
          </p>
          <Link 
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#d4af37] hover:bg-[#b8982f] text-black font-semibold rounded-full transition-all duration-300 animate-fade-in-up delay-300"
          >
            Get in Touch
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-left">
              <div>
                <span className="inline-block px-4 py-1.5 bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium rounded-full mb-6">
                  Our Approach
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-sans">
                  Redefining the Way We <span className="gradient-text">Advertise</span>
                </h2>
                <p className="text-white/60 leading-relaxed text-lg mb-8">
                  At CL Global Media, we believe that advertising should be more than just getting your brand in front of people. Our approach is to create meaningful connections between our clients and their customers.
                </p>
                <p className="text-white/60 leading-relaxed mb-8">
                  We do this by developing campaigns that are tailored to your brand and your audience. Our team of experts will work with you every step of the way to ensure that your campaign is a success.
                </p>
                <ul className="space-y-4">
                  {["Tailored campaign strategies", "Data-driven insights", "Global network reach", "Dedicated support team"].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-right">
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1920&auto=format&fit=crop"
                    alt="Team meeting"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#d4af37] rounded-2xl p-6 shadow-2xl">
                  <p className="text-black text-3xl font-bold">500+</p>
                  <p className="text-black/70 text-sm">Successful Campaigns</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#d4af37] via-[#f4e4a6] to-[#d4af37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-black/70 text-lg">Building powerful advertising campaigns globally with our comprehensive network and creative expertise.</p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium rounded-full mb-4">
              Latest Updates
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-sans">
              CL Global Media in the <span className="gradient-text">Press</span>
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Expanding Global Reach", desc: "New partnerships across European markets" },
              { title: "Innovation Award 2026", desc: "Recognized for digital advertising excellence" },
              { title: "Sustainability Initiative", desc: "Commitment to eco-friendly advertising" },
            ].map((item, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
                <div className="group bg-[#0a0a0a] rounded-2xl overflow-hidden hover-lift">
                  <div className="aspect-video relative">
                    <Image
                      src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1920&auto=format&fit=crop"
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[#d4af37] text-sm mb-2">Press Release</p>
                    <h3 className="text-white font-semibold mb-2 group-hover:text-[#d4af37] transition-colors">{item.title}</h3>
                    <p className="text-white/50 text-sm">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
