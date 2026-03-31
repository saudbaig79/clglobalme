'use client'

import { AnimatedSection } from "@/components/ui/animated-section"

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Terms and Conditions</h1>
          <div className="text-zinc-300 text-lg leading-relaxed space-y-6">
            <section>
              <p className="text-justify text-base">
                The website located at www.clglobalmedia.com (the "Site") is a copyrighted work belonging to CL Global Media ("Company", "us", "our", and "we"). Certain features of the Site may be subject to additional guidelines, terms, or rules, which will be posted on the Site in connection with such features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Agreement to Terms</h2>
              <p className="text-justify text-base">
                These Terms of Use set forth the legally binding terms and conditions that govern your use of the Site. By accessing or using the Site, you are accepting these Terms (on behalf of yourself or the entity that you represent), and you represent and warrant that you have the right, authority, and capacity to enter into these Terms. You may not access or use the Site if you are not at least 18 years old.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Dispute Resolution</h2>
              <p className="text-justify text-base">
                PLEASE BE AWARE THAT THESE TERMS CONTAIN PROVISIONS GOVERNING HOW TO RESOLVE DISPUTES BETWEEN YOU AND COMPANY. AMONG OTHER THINGS, THESE TERMS INCLUDE AN AGREEMENT TO ARBITRATE WHICH REQUIRES, WITH LIMITED EXCEPTIONS, THAT ALL DISPUTES BETWEEN YOU AND US SHALL BE RESOLVED BY BINDING AND FINAL ARBITRATION. THESE TERMS ALSO CONTAIN A CLASS ACTION AND JURY TRIAL WAIVER.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Account Responsibilities</h2>
              <p className="text-justify text-base mb-3">
                If you create an account, you are responsible for maintaining the confidentiality of your login information and are fully responsible for all activities that occur under your account. You agree to immediately notify Company of any unauthorized use or suspected unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">License and Restrictions</h2>
              <p className="text-justify text-base mb-3">
                Subject to these Terms, Company grants you a non-transferable, non-exclusive, revocable, limited license to use and access the Site solely for your own personal, non-commercial use. The following restrictions apply:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base">
                <li>You shall not license, sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Site</li>
                <li>You shall not modify, make derivative works of, disassemble, reverse compile or reverse engineer any part of the Site</li>
                <li>You shall not access the Site to build a similar or competitive website, product, or service</li>
                <li>No part of the Site may be copied, reproduced, distributed, republished, downloaded, displayed, posted, or transmitted without authorization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Intellectual Property Rights</h2>
              <p className="text-justify text-base">
                All intellectual property rights, including copyrights, patents, trademarks, and trade secrets, in the Site and its content are owned by Company or Company's suppliers. These Terms do not transfer any rights, title, or interest in such intellectual property rights to you. Company and its suppliers reserve all rights not granted in these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Indemnification</h2>
              <p className="text-justify text-base">
                You agree to indemnify and hold Company (and its officers, employees, and agents) harmless, including costs and attorneys' fees, from any claim or demand made by any third party due to or arising out of your use of the Site, your violation of these Terms, or your violation of applicable laws or regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Modification and Discontinuation</h2>
              <p className="text-justify text-base">
                Company reserves the right, at any time, to modify, suspend, or discontinue the Site (in whole or in part) with or without notice to you. You agree that Company will not be liable for any modification, suspension, or discontinuation of the Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">No Support or Maintenance</h2>
              <p className="text-justify text-base">
                You acknowledge and agree that Company will have no obligation to provide you with any support or maintenance in connection with the Site.
              </p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}
