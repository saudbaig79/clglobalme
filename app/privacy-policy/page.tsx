'use client'

import { AnimatedSection } from "@/components/ui/animated-section"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
          <div className="text-zinc-300 text-lg leading-relaxed space-y-6">
            <section>
              <p className="text-justify">
                CL GLOBAL MEDIA LLC ("we," "us," or "our") is committed to protecting the privacy of our clients and partners. This Privacy Policy outlines how we collect, use, and protect your personal and confidential information in accordance with applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">2. Information We Collect</h2>
              <p className="text-justify">
                We may collect personal information that you provide to us directly, such as your name, email address, phone number, and any other information necessary to provide our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">3. Use of Information</h2>
              <p className="text-justify mb-3">We use the information we collect for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To provide and manage our services</li>
                <li>To communicate with you</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">4. Confidentiality and Data Protection</h2>
              <p className="text-justify">
                We recognize the importance of privacy and confidentiality. All conversations, emails, and any other forms of communication related to our company and its operations are considered confidential. The distribution, sharing, or dissemination of any such information without explicit consent is strictly prohibited. We will not sell, trade, or otherwise distribute your private and confidential information to third parties without your explicit consent, except as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">5. Data Security</h2>
              <p className="text-justify">
                We implement reasonable security measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">6. Client Rights</h2>
              <p className="text-justify mb-3">Clients have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access their personal information</li>
                <li>Request corrections to their personal information</li>
                <li>Request the deletion of their personal information, subject to certain exceptions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">7. Changes to This Privacy Policy</h2>
              <p className="text-justify">
                We may update this Privacy Policy from time to time. Any changes will be posted on our website with an updated effective date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">8. Contact Us</h2>
              <p className="text-justify mb-4">If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                <p className="font-semibold text-white mb-2">CL GLOBAL MEDIA LLC</p>
                <p>99 Wall Street</p>
                <p>New York 10005</p>
                <p>USA</p>
              </div>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}
