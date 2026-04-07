'use client'

import { AnimatedSection } from "@/components/ui/animated-section"

export default function CancellationRefundPolicy() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Cancellation & Refund Policy</h1>
          <div className="text-zinc-300 text-lg leading-relaxed space-y-6">
            <section>
              <p className="text-justify">
                At CL Global Media, we are dedicated to delivering high-quality outdoor media and advertising solutions. We understand that circumstances may require cancellations or refunds, and we aim to handle such requests fairly and transparently. Please read our policy carefully before making a purchase.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">1. Cancellation Policy</h2>
              
              <h3 className="text-xl font-semibold text-white mt-4 mb-3">1.1 Campaign & Media Placement Cancellations</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Clients may request a cancellation within 48 hours of booking a service or placing an order</li>
                <li>Cancellations after 48 hours may be subject to fees, depending on the stage of campaign execution</li>
                <li>Once a campaign has been scheduled, produced, or published, it cannot be canceled and will be billed in full</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-4 mb-3">1.3 Event & Production Services</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Event-related services require at least 7 days' notice for cancellations</li>
                <li>Deposits for event bookings and large-scale productions are non-refundable once work has commenced</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">2. Refund Policy</h2>
              
              <h3 className="text-xl font-semibold text-white mt-4 mb-3">2.1 General Refund Eligibility</h3>
              <p className="text-justify mb-3">Refunds will be issued only under the following conditions:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The cancellation request was made within the allowed timeframe</li>
                <li>CL Global Media failed to deliver the agreed-upon services</li>
                <li>A technical error or system failure caused an issue with the order</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-4 mb-3">2.2 Non-Refundable Items & Services</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Custom advertising campaigns and media placements</li>
                <li>Digital marketing services that have already commenced</li>
                <li>Third-party advertising costs (e.g., billboard space, print media)</li>
                <li>Consultation fees and strategy planning sessions</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-4 mb-3">2.3 Refund Processing</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Approved refunds will be processed within 7-10 business days</li>
                <li>Refunds will be credited to the original payment method used for purchase</li>
                <li>Clients are responsible for any transaction fees incurred during the refund process</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">3. Exceptions & Special Cases</h2>
              <p className="text-justify mb-3">Refunds or credits may be considered on a case-by-case basis for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Campaigns significantly disrupted due to issues caused by CL Global Media</li>
                <li>Errors in media placements or incorrect advertisements (with valid proof)</li>
                <li>Force Majeure events (e.g., natural disasters, unforeseen government restrictions)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">4. Contact for Cancellations & Refunds</h2>
              <p className="text-justify mb-4">To request a cancellation or refund, please contact our support team through our Contact Us page.</p>
              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 space-y-2">
                <p className="text-sm">Please include your order number, campaign details, and a brief explanation of your request.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">5. Legal Disclaimer</h2>
              <p className="text-justify">
                CL Global Media reserves the right to modify this policy at any time without prior notice. By engaging with our services, clients agree to abide by this policy and understand that certain services are non-refundable.
              </p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}
