"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

const campaigns = [
  {
    title: "Paid Social Campaigns",
    description: "Reach your target audience on social media platforms like Facebook, Instagram, Twitter, and LinkedIn with custom campaigns that drive engagement and generate leads.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "Pay Per Click",
    description: "Drive traffic to your website and increase conversions with advanced targeting techniques and compelling ad copy that drives clicks and results.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "Influencer Campaigns",
    description: "Leverage the power of social media influencers to increase brand awareness, drive engagement, and generate leads through our network of top influencers.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1920&auto=format&fit=crop",
  },
]

export function CampaignsSection() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium rounded-full mb-4">
            Digital Marketing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-sans">
            Campaign <span className="gradient-text">Solutions</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 150}
            >
              <div className="group h-full">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={campaign.image}
                      alt={campaign.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#d4af37] transition-colors">
                  {campaign.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {campaign.description}
                </p>
                <Link 
                  href="/services"
                  className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#f4e4a6] text-sm font-medium transition-colors group/link"
                >
                  Learn More 
                  <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
