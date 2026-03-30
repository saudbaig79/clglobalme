"use client"

import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

const teamMembers = [
  {
    name: "Christopher Laurent",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1920&auto=format&fit=crop",
    bio: "Visionary leader with 20+ years in global advertising and media.",
  },
  {
    name: "Sarah Mitchell",
    role: "Chief Operating Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1920&auto=format&fit=crop",
    bio: "Operations expert driving efficiency and excellence across all divisions.",
  },
  {
    name: "David Chen",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1920&auto=format&fit=crop",
    bio: "Award-winning creative mind behind our most impactful campaigns.",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Strategy",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1920&auto=format&fit=crop",
    bio: "Strategic thinker turning brand visions into measurable success.",
  },
  {
    name: "James Wilson",
    role: "Director of Partnerships",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1920&auto=format&fit=crop",
    bio: "Building and nurturing relationships with global media partners.",
  },
  {
    name: "Lisa Thompson",
    role: "Head of Digital",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1920&auto=format&fit=crop",
    bio: "Digital innovation expert leading our technology initiatives.",
  },
  {
    name: "Michael Brown",
    role: "Finance Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1920&auto=format&fit=crop",
    bio: "Financial strategist ensuring sustainable growth and profitability.",
  },
  {
    name: "Amanda Foster",
    role: "Client Success Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1920&auto=format&fit=crop",
    bio: "Dedicated to delivering exceptional client experiences and results.",
  },
]

export function TeamMembers() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium rounded-full mb-4">
            Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif">
            Our <span className="gradient-text">Leadership Team</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="group text-center">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  </div>
                  {/* Social icons overlay */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#d4af37] transition-colors">
                      <Linkedin size={18} className="text-white" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#d4af37] transition-colors">
                      <Twitter size={18} className="text-white" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#d4af37] transition-colors">
                      <Mail size={18} className="text-white" />
                    </a>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#d4af37] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[#d4af37] text-sm mb-2">{member.role}</p>
                <p className="text-white/50 text-sm">{member.bio}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
