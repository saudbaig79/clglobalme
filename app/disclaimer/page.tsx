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
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">1. General Disclaimer</h2>
              <p className="text-justify mb-3">
                The information contained on the clglobalmedia.com website (the "Site") is provided by CL Global Media LLC for general informational purposes only. All information on the Site is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
              </p>
              <p className="text-justify">
                Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the Site or reliance on any information provided on the Site. Your use of the Site and your reliance on any information on the Site is solely at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">2. No Professional Advice</h2>
              <p className="text-justify mb-3">
                The Site cannot and does not contain business, legal, financial, or other professional advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with appropriate professionals.
              </p>
              <p className="text-justify">
                We do not provide any kind of legal, tax, investment, or financial advice. Do not use any content on this Site as a substitute for professional legal, tax, financial, or other advice. Always seek the advice of qualified professionals in the relevant field before making business decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">3. Accuracy of Information</h2>
              <p className="text-justify mb-3">
                While we endeavor to keep the information on our Site current and correct, we make no representations, warranties, or guarantees, whether express or implied, that the content on the Site is accurate, complete, or up to date. Information may be changed or updated without notice.
              </p>
              <p className="text-justify">
                Industry data, statistics, and market information referenced on the Site are sourced from third-party sources that we believe to be reliable, but we cannot guarantee their accuracy. You should independently verify any information before relying on it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">4. "AS IS" Basis</h2>
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
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">5. External Links Disclaimer</h2>
              <p className="text-justify">
                The Site may contain links to external websites that are not provided or maintained by, or in any way affiliated with, CL Global Media LLC. Please note that CL Global Media LLC does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them. We have no control over the nature, content, and availability of those sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">6. Testimonials & Results</h2>
              <p className="text-justify mb-3">
                The Site may contain testimonials from clients and descriptions of past results. These testimonials and results are not necessarily representative of the experience of other clients. Past results do not guarantee or imply similar results in the future.
              </p>
              <p className="text-justify">
                Individual results will vary based on a range of factors, including but not limited to business size, market conditions, geographic location, and how our recommendations are implemented. We make no guarantee that you will achieve any particular result.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">7. Limitation of Liability</h2>
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
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">8. Errors & Omissions</h2>
              <p className="text-justify">
                While we make every effort to ensure the information on the Site is complete and accurate, errors and omissions may occur. If you find information on the Site that you believe is incorrect or outdated, please contact us and we will review and, where appropriate, correct the information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">9. User-Generated Content</h2>
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
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">10. Viruses and Security</h2>
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
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">11. Service Interruptions</h2>
              <p className="text-justify">
                While we strive to maintain uninterrupted service, CL Global Media LLC is not liable for any interruptions, downtime, or unavailability of the Site due to server maintenance, technical issues, natural disasters, government actions, or circumstances beyond our reasonable control. We will make reasonable efforts to restore service promptly, but make no guarantees regarding timing or availability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">12. Indemnification</h2>
              <p className="text-justify">
                You agree to indemnify and hold harmless CL Global Media LLC and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, or expenses (including reasonable attorneys' fees) arising from or related to your use of the Site, your violation of this Disclaimer, or your violation of applicable laws or the rights of third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">13. Modifications</h2>
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
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">14. Fair Use Notice</h2>
              <p className="text-justify">
                The Site may contain copyrighted material the use of which has not always been specifically authorized by the copyright owner. We make such material available for educational and informational purposes. We believe this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the US Copyright Law. If you wish to use copyrighted material from the Site for your own purposes that go beyond fair use, you must obtain permission from the copyright owner. To report any copyright concerns, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">15. Jurisdictional Issues</h2>
              <p className="text-justify">
                The information and services provided on our Site are intended for use in jurisdictions where such services are legal. We do not represent that information on our Site is appropriate or available for use in all jurisdictions. If you access the Site from outside authorized jurisdictions, you do so at your own risk and are responsible for compliance with local laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">16. Governing Law</h2>
              <p className="text-justify">
                This Disclaimer shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Your use of the Site constitutes acceptance of this Disclaimer and all other policies on our Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">17. Contact Information</h2>
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
