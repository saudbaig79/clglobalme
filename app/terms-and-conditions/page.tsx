'use client'

import { AnimatedSection } from "@/components/ui/animated-section"

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Website Terms of Use</h1>
          <p className="text-zinc-400 mb-8 text-sm">Version 1.0</p>
          
          <div className="text-zinc-300 text-base leading-relaxed space-y-6">
            <section>
              <p className="text-justify">
                The website located at www.clglobalmedia.com (the "Site") is a copyrighted work belonging to CL Global Media ("Company", "us", "our", and "we"). Certain features of the Site may be subject to additional guidelines, terms, or rules, which will be posted on the Site in connection with such features. All such additional terms, guidelines, and rules are incorporated by reference into these Terms.
              </p>
            </section>

            <section>
              <p className="text-justify">
                These Terms of Use (these "Terms") set forth the legally binding terms and conditions that govern your use of the Site. By accessing or using the Site, you are accepting these Terms (on behalf of yourself or the entity that you represent), and you represent and warrant that you have the right, authority, and capacity to enter into these Terms (on behalf of yourself or the entity that you represent). You may not access or use the Site or accept the Terms if you are not at least 18 years old. If you do not agree with all of the provisions of these Terms, do not access and/or use the Site.
              </p>
            </section>

            <section className="bg-zinc-900/50 border-l-4 border-[#d4af37] p-6 my-8">
              <p className="text-white font-semibold text-justify">
                PLEASE BE AWARE THAT SECTION 8.2 CONTAINS PROVISIONS GOVERNING HOW TO RESOLVE DISPUTES BETWEEN YOU AND COMPANY. AMONG OTHER THINGS, SECTION 8.2 INCLUDES AN AGREEMENT TO ARBITRATE WHICH REQUIRES, WITH LIMITED EXCEPTIONS, THAT ALL DISPUTES BETWEEN YOU AND US SHALL BE RESOLVED BY BINDING AND FINAL ARBITRATION. SECTION 8.2 ALSO CONTAINS A CLASS ACTION AND JURY TRIAL WAIVER. PLEASE READ SECTION 8.2 CAREFULLY.
              </p>
              <p className="text-white font-semibold text-justify mt-4">
                UNLESS YOU OPT OUT OF THE AGREEMENT TO ARBITRATE WITHIN 30 DAYS: (1) YOU WILL ONLY BE PERMITTED TO PURSUE DISPUTES OR CLAIMS AND SEEK RELIEF AGAINST US ON AN INDIVIDUAL BASIS, NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS OR REPRESENTATIVE ACTION OR PROCEEDING, AND YOU WAIVE YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION; AND (2) YOU ARE WAIVING YOUR RIGHT TO PURSUE DISPUTES OR CLAIMS AND SEEK RELIEF IN A COURT OF LAW AND TO HAVE A JURY TRIAL.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Accounts</h2>
              
              <h3 className="text-lg font-semibold text-white mb-3">Account Creation</h3>
              <p className="text-justify mb-6">
                In order to use certain features of the Site, you must register for an account ("Account") and provide certain information about yourself as prompted by the account registration form. You represent and warrant that: (a) all required registration information you submit is truthful and accurate; (b) you will maintain the accuracy of such information. You may delete your Account at any time, for any reason, by following the instructions on the Site. Company may suspend or terminate your Account in accordance with Section 7.
              </p>

              <h3 className="text-lg font-semibold text-white mb-3">Account Responsibilities</h3>
              <p className="text-justify">
                You are responsible for maintaining the confidentiality of your Account login information and are fully responsible for all activities that occur under your Account. You agree to immediately notify Company of any unauthorized use, or suspected unauthorized use of your Account or any other breach of security. Company cannot and will not be liable for any loss or damage arising from your failure to comply with the above requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Access to the Site</h2>
              
              <h3 className="text-lg font-semibold text-white mb-3">License</h3>
              <p className="text-justify mb-6">
                Subject to these Terms, Company grants you a non-transferable, non-exclusive, revocable, limited license to use and access the Site solely for your own personal, non-commercial use.
              </p>

              <h3 className="text-lg font-semibold text-white mb-3">Certain Restrictions</h3>
              <p className="text-justify mb-3">
                The rights granted to you in these Terms are subject to the following restrictions:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 mb-6 text-justify">
                <li>You shall not license, sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Site, whether in whole or in part, or any content displayed on the Site</li>
                <li>You shall not modify, make derivative works of, disassemble, reverse compile or reverse engineer any part of the Site</li>
                <li>You shall not access the Site in order to build a similar or competitive website, product, or service</li>
                <li>Except as expressly stated herein, no part of the Site may be copied, reproduced, distributed, republished, downloaded, displayed, posted, or transmitted in any form or by any means. Unless otherwise indicated, any future release, update, or other addition to functionality of the Site shall be subject to these Terms. All copyright and other proprietary notices on the Site (or on any content displayed on the Site) must be retained on all copies thereof.</li>
              </ul>

              <h3 className="text-lg font-semibold text-white mb-3">Modification</h3>
              <p className="text-justify mb-6">
                Company reserves the right, at any time, to modify, suspend, or discontinue the Site (in whole or in part) with or without notice to you. You agree that Company will not be liable to you or to any third party for any modification, suspension, or discontinuation of the Site or any part thereof.
              </p>

              <h3 className="text-lg font-semibold text-white mb-3">No Support or Maintenance</h3>
              <p className="text-justify mb-6">
                You acknowledge and agree that Company will have no obligation to provide you with any support or maintenance in connection with the Site.
              </p>

              <h3 className="text-lg font-semibold text-white mb-3">Ownership</h3>
              <p className="text-justify mb-6">
                You acknowledge that all the intellectual property rights, including copyrights, patents, trademarks, and trade secrets, in the Site and its content are owned by Company or Company's suppliers. Neither these Terms (nor your access to the Site) transfers to you or any third party any rights, title or interest in or to such intellectual property rights, except for the limited access rights expressly set forth in Section 2.1. Company and its suppliers reserve all rights not granted in these Terms. There are no implied licenses granted under these Terms.
              </p>

              <h3 className="text-lg font-semibold text-white mb-3">Indemnification</h3>
              <p className="text-justify">
                You agree to indemnify and hold Company (and its officers, employees, and agents) harmless, including costs and attorneys&apos; fees, from any claim or demand made by any third party due to or arising out of (a) your use of the Site, (b) your violation of these Terms or (c) your violation of applicable laws or regulations. Company reserves the right, at your expense, to assume the exclusive defence and control of any matter for which you are required to indemnify us, and you agree to cooperate with our defence of these claims. You agree not to settle any matter without the prior written consent of Company. Company will use reasonable efforts to notify you of any such claim, action, or proceeding upon becoming aware of it.
              </p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}
