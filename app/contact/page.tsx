"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
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
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Contact
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Ready to take the first leap in transforming your campaign? Fill out the form below and a member of our team will be in touch soon.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let&apos;s Chat
            </h2>
            <div className="text-white/60">
              <p className="mb-1">Email</p>
              <a 
                href="mailto:clglobalmediausa@gmail.com" 
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                clglobalmediausa@gmail.com
              </a>
            </div>
          </div>

          {submitted ? (
            <div className="bg-green-600/20 border border-green-600/30 rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-white mb-2">Thanks for submitting!</h3>
              <p className="text-white/70">We&apos;ll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white/80 text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors"
              >
                Send
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
