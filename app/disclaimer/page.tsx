'use client'

import { AnimatedSection } from "@/components/ui/animated-section"

export default function Disclaimer() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Legal Disclaimer</h1>
          <p className="text-zinc-400 mb-8 text-sm">Last Updated: April 2026</p>
          
          <div className="text-zinc-300 text-base leading-relaxed space-y-6">
            <section className="bg-zinc-900/50 border-l-4 border-[#d4af37] p-6 my-8">
              <p className="text-white font-semibold text-justify">
                This disclaimer is provided to inform you of the limitations and disclaimers associated with your use of our website and services. Please read this carefully, as it contains important information about your legal rights and responsibilities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">1. No Professional Advice</h2>
              <p className="text-justify">
                The content, services, and information provided on our website are for informational purposes only and do not constitute professional advice. CL Global Media LLC does not provide legal, financial, tax, medical, or other professional advice. You should not rely on our website or services as a substitute for professional consultation. Always consult with qualified professionals before making decisions based on information provided on our Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">2. "AS IS" Basis</h2>
              <p className="text-justify mb-3">
                Our website and all services are provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either expressed or implied, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li>Warranties of merchantability or fitness for a particular purpose</li>
                <li>Warranties that the Site will be uninterrupted, secure, or error-free</li>
                <li>Warranties regarding the accuracy, completeness, or reliability of content</li>
                <li>Warranties that any defects in the Site will be corrected</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">3. Limitation of Liability</h2>
              <p className="text-justify mb-3">
                To the fullest extent permitted by applicable law, CL Global Media LLC shall not be liable for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                <li>Loss of profits, revenue, data, or goodwill</li>
                <li>Business interruption or loss of anticipated savings</li>
                <li>Damages arising from unauthorized access to or alterations of transmissions or data</li>
                <li>Any other damages, regardless of the form of action, even if advised of the possibility</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">4. Accuracy of Information</h2>
              <p className="text-justify mb-3">
                While we strive to provide accurate and current information, CL Global Media LLC makes no representation regarding the:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li>Accuracy, completeness, or timeliness of information on our Site</li>
                <li>Accuracy of pricing information or product descriptions</li>
                <li>Suitability of our services for your specific needs</li>
              </ul>
              <p className="text-justify">
                Information may be outdated or contain errors. We recommend verifying all information independently before relying on it for important decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">5. Third-Party Links and Content</h2>
              <p className="text-justify mb-3">
                Our Site may contain links to third-party websites, content, and resources that are not controlled by CL Global Media LLC. We are not responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li>The availability or accuracy of third-party websites or content</li>
                <li>The privacy practices or terms of service of third-party sites</li>
                <li>Any damages or losses arising from your use of third-party websites or services</li>
              </ul>
              <p className="text-justify">
                Inclusion of third-party links does not imply endorsement. We encourage you to review the terms and privacy policies of any third-party site before using their services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">6. User-Generated Content</h2>
              <p className="text-justify mb-3">
                If our Site allows you to submit content (such as comments, reviews, or feedback), you are solely responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li>The content you submit</li>
                <li>Ensuring your content does not infringe any intellectual property rights</li>
                <li>Ensuring your content complies with applicable laws</li>
              </ul>
              <p className="text-justify">
                We reserve the right to remove any user-generated content that violates these terms or applicable laws, without notice or liability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">7. Viruses and Security</h2>
              <p className="text-justify mb-3">
                We take reasonable precautions to prevent viruses and malicious content; however, CL Global Media LLC:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li>Does not guarantee the Site is free from viruses or malicious code</li>
                <li>Is not responsible for any damage to your computer systems resulting from your use of the Site</li>
                <li>Recommends maintaining appropriate security measures (firewalls, antivirus software, etc.)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">8. Service Interruptions</h2>
              <p className="text-justify">
                While we strive to maintain uninterrupted service, CL Global Media LLC is not liable for any interruptions, downtime, or unavailability of the Site due to server maintenance, technical issues, natural disasters, government actions, or circumstances beyond our reasonable control. We will make reasonable efforts to restore service promptly, but make no guarantees regarding timing or availability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">9. Indemnification</h2>
              <p className="text-justify">
                You agree to indemnify and hold harmless CL Global Media LLC and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, or expenses (including reasonable attorneys' fees) arising from or related to your use of the Site, your violation of this Disclaimer, or your violation of applicable laws or the rights of third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">10. Modifications</h2>
              <p className="text-justify mb-3">
                CL Global Media LLC reserves the right to modify, update, or remove any content, services, or features of the Site at any time, with or without notice. Such modifications include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li>Changes to website design and functionality</li>
                <li>Removal or addition of services</li>
                <li>Termination of the Site or specific features</li>
              </ul>
              <p className="text-justify">
                We are not liable for any impacts on your use resulting from such modifications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">11. Jurisdictional Issues</h2>
              <p className="text-justify">
                The information and services provided on our Site are intended for use in jurisdictions where such services are legal. We do not represent that information on our Site is appropriate or available for use in all jurisdictions. If you access the Site from outside authorized jurisdictions, you do so at your own risk and are responsible for compliance with local laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">12. Governing Law</h2>
              <p className="text-justify">
                This Disclaimer shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Your use of the Site constitutes acceptance of this Disclaimer and all other policies on our Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">13. Contact Information</h2>
              <p className="text-justify mb-4">
                If you have questions about this Disclaimer or our policies, please contact us:
              </p>
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
