"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSubmitted(true)
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop"
            alt="Contact us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32">
          <span className="inline-block px-4 py-1.5 bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium rounded-full mb-6 animate-fade-in-up">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up delay-100 font-serif">
            <span className="gradient-text">Contact</span> Us
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Ready to transform your advertising campaign? Fill out the form below and our team will be in touch soon.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <AnimatedSection animation="fade-left">
              <div>
                <span className="inline-block px-4 py-1.5 bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium rounded-full mb-6">
                  Contact Information
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
                  Let&apos;s <span className="gradient-text">Chat</span>
                </h2>
                <p className="text-white/60 leading-relaxed mb-12">
                  We&apos;d love to hear from you. Whether you have a question about our services, 
                  pricing, or anything else, our team is ready to answer all your questions.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#d4af37]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <a 
                        href="mailto:clglobalmediausa@gmail.com" 
                        className="text-white/60 hover:text-[#d4af37] transition-colors"
                      >
                        clglobalmediausa@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#d4af37]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Location</h3>
                      <p className="text-white/60">
                        99 Wall Street<br/>
                        New York 10005<br/>
                        USA
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Image */}
                <div className="mt-12 relative aspect-video rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1920&auto=format&fit=crop"
                    alt="Office"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection animation="fade-right">
              <div className="bg-black rounded-3xl p-8 md:p-12 border border-white/5">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-[#d4af37]" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Thank You!</h3>
                    <p className="text-white/60">
                      Your message has been received. We&apos;ll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37] transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                        Email <span className="text-[#d4af37]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37] transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37] transition-colors"
                        placeholder="Your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#d4af37] hover:bg-[#b8982f] disabled:bg-[#d4af37]/50 text-black font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-[#d4af37]/20"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
