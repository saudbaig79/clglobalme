'use client'

import { AnimatedSection } from "@/components/ui/animated-section"
import { useState } from "react"
import { CheckCircle, Send } from "lucide-react"

export default function DataRequestPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    requestType: "access",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Data Request & Rights</h1>
          <p className="text-zinc-400 mb-8 text-sm">Exercise Your Privacy Rights</p>
          
          <div className="text-zinc-300 text-base leading-relaxed space-y-6 mb-12">
            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Your Privacy Rights</h2>
              <p className="text-justify mb-4">
                In accordance with applicable privacy laws such as GDPR, CCPA, and other regulations, you have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data (right to be forgotten)</li>
                <li><strong>Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Opt-out:</strong> Object to or withdraw consent for data processing</li>
                <li><strong>Restrict Processing:</strong> Limit how your data is used</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">How to Make a Request</h2>
              <p className="text-justify mb-3">
                Complete the form below to submit a data request. Please provide as much detail as possible to help us locate your information. We will respond to your request within the timeframe required by law (typically 30 days).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Verification Process</h2>
              <p className="text-justify mb-3">
                For security purposes, we will verify your identity before processing your request. We may request:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>A copy of your government-issued ID</li>
                <li>Information about your previous interactions with us</li>
                <li>Other information to confirm your identity</li>
              </ul>
            </section>
          </div>

          {/* Data Request Form */}
          <div className="bg-black rounded-3xl p-8 md:p-12 border border-white/5">
            <h3 className="text-2xl font-semibold text-white mb-8">Submit Your Request</h3>
            
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-[#d4af37]" />
                </div>
                <h4 className="text-2xl font-semibold text-white mb-4">Request Submitted</h4>
                <p className="text-white/60 mb-6">
                  Thank you for submitting your data request. We have received your submission and will contact you within the required timeframe to process your request.
                </p>
                <p className="text-white/40 text-sm">
                  You should expect to hear from us via email at {formData.email}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                    Full Name <span className="text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37] transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                    Email Address <span className="text-[#d4af37]">*</span>
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
                  <label htmlFor="requestType" className="block text-white text-sm font-medium mb-2">
                    Request Type <span className="text-[#d4af37]">*</span>
                  </label>
                  <select
                    id="requestType"
                    name="requestType"
                    value={formData.requestType}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                  >
                    <option value="access">Access My Data</option>
                    <option value="deletion">Delete My Data</option>
                    <option value="rectification">Correct My Information</option>
                    <option value="portability">Download My Data</option>
                    <option value="restrict">Restrict Processing</option>
                    <option value="object">Object to Processing</option>
                    <option value="withdrawal">Withdraw Consent</option>
                    <option value="other">Other Request</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                    placeholder="Provide any additional information that may help us process your request..."
                  />
                </div>

                <div className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-800">
                  <p className="text-white/60 text-sm">
                    <span className="font-semibold text-white">Privacy Notice:</span> We will only use the information provided in this form to process your data request and ensure compliance with privacy laws. Your data will be handled securely and confidentially.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#d4af37] hover:bg-[#b8982f] disabled:bg-[#d4af37]/50 text-black font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-[#d4af37]/20"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Submit Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Additional Information */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Response Timeline</h3>
              <p className="text-white/60 text-sm">
                We comply with applicable privacy laws regarding response times. Most requests are processed within 30 days. Complex requests may take longer, and we will notify you of any delays.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Cost</h3>
              <p className="text-white/60 text-sm">
                Data access requests are provided free of charge. In some circumstances, additional requests or manifestly unfounded requests may incur a reasonable fee, which we will communicate in advance.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}
