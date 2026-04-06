'use client'

import { AnimatedSection } from "@/components/ui/animated-section"

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-zinc-400 mb-8 text-sm">Last Updated: April 2026</p>
          
          <div className="text-zinc-300 text-base leading-relaxed space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">1. Introduction</h2>
              <p className="text-justify">
                CL Global Media LLC ("we," "us," "our," or "Company") uses cookies and similar tracking technologies on our website (the "Site") to enhance your browsing experience, understand how you interact with our content, and to deliver targeted advertising. This Cookie Policy explains what cookies are, how we use them, and your choices regarding their use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">2. What Are Cookies?</h2>
              <p className="text-justify mb-3">
                Cookies are small text files that are placed on your device when you visit a website. They contain information about your browsing activity and are stored locally on your computer or mobile device. Cookies can be:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li><strong>Session Cookies:</strong> Temporary files deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device until manually deleted or until they expire</li>
                <li><strong>First-Party Cookies:</strong> Set directly by the website you visit</li>
                <li><strong>Third-Party Cookies:</strong> Set by external domains (e.g., analytics partners)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">3. Types of Cookies We Use</h2>
              
              <h3 className="text-lg font-semibold text-white mt-4 mb-3">3.1 Essential Cookies</h3>
              <p className="text-justify mb-3">
                These cookies are necessary for the Site to function properly. They enable basic functions such as:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li>Authentication and user account management</li>
                <li>Security and fraud prevention</li>
                <li>Session management and remembering your preferences</li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-4 mb-3">3.2 Performance and Analytics Cookies</h3>
              <p className="text-justify mb-3">
                We use analytics tools to understand how visitors interact with our Site. These cookies help us:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li>Analyze traffic patterns and user behavior</li>
                <li>Identify which pages are most popular</li>
                <li>Understand visitor demographics and interests</li>
                <li>Improve Site performance and user experience</li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-4 mb-3">3.3 Functional Cookies</h3>
              <p className="text-justify mb-3">
                These cookies remember your preferences and choices, such as:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li>Language and regional preferences</li>
                <li>Saved form data and login information</li>
                <li>Display preferences (e.g., dark/light mode)</li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-4 mb-3">3.4 Marketing and Advertising Cookies</h3>
              <p className="text-justify mb-3">
                We use these cookies to deliver personalized advertisements and measure campaign effectiveness. They allow us to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li>Display targeted ads based on your interests</li>
                <li>Track conversion rates and ad performance</li>
                <li>Prevent showing you the same ad repeatedly</li>
                <li>Partner with third-party advertising networks</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">4. Third-Party Cookies</h2>
              <p className="text-justify mb-3">
                Our Site may contain content from third-party services that set their own cookies, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li>Google Analytics for website analytics</li>
                <li>Facebook Pixel and other social media tracking</li>
                <li>Advertising networks and ad exchange partners</li>
                <li>Content delivery networks (CDNs)</li>
              </ul>
              <p className="text-justify">
                We do not control these third-party cookies, and their use is governed by their respective privacy policies. We recommend reviewing their policies to understand how they collect and use your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">5. Your Cookie Choices</h2>
              
              <h3 className="text-lg font-semibold text-white mt-4 mb-3">5.1 Browser Controls</h3>
              <p className="text-justify mb-3">
                Most web browsers allow you to manage cookies through settings. You can:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li>Accept or reject all cookies</li>
                <li>Delete existing cookies</li>
                <li>Block cookies from specific domains</li>
                <li>Enable "Do Not Track" signals</li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-4 mb-3">5.2 Cookie Banner and Consent</h3>
              <p className="text-justify mb-6">
                When you first visit our Site, we display a cookie consent banner. You can accept all cookies, reject non-essential cookies, or customize your preferences. Your choice is stored and respected for future visits.
              </p>

              <h3 className="text-lg font-semibold text-white mt-4 mb-3">5.3 Opting Out of Advertising</h3>
              <p className="text-justify mb-6">
                You can opt out of targeted advertising through industry initiatives such as the Network Advertising Initiative (NAI) or Digital Advertising Alliance (DAA). Visit their websites for more information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">6. Data Retention</h2>
              <p className="text-justify mb-3">
                Cookies are retained for different periods depending on their type:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li>Session cookies are deleted when you close your browser</li>
                <li>Persistent cookies expire according to their set duration (typically 1-2 years)</li>
                <li>Analytics data is typically retained for 13-26 months</li>
                <li>Marketing cookies may be retained for up to 24 months</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">7. GDPR and Privacy Regulations</h2>
              <p className="text-justify mb-3">
                For users in the European Union and other jurisdictions with privacy regulations:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li>We obtain your explicit consent before placing non-essential cookies</li>
                <li>You have the right to withdraw consent at any time</li>
                <li>We provide transparent information about cookie usage</li>
                <li>We comply with applicable data protection laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">8. Changes to This Policy</h2>
              <p className="text-justify">
                We may update this Cookie Policy periodically to reflect changes in our practices or applicable laws. We will notify you of significant changes by updating the "Last Updated" date and posting the revised policy on our Site. Continued use of the Site constitutes your acceptance of any updated Cookie Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">9. Contact Us</h2>
              <p className="text-justify mb-4">
                If you have questions about our cookie practices or this Cookie Policy, please contact us:
              </p>
              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                <p className="font-semibold text-white mb-2">CL GLOBAL MEDIA LLC</p>
                <p className="text-white/60">Email: clglobalmediausa@gmail.com</p>
                <p className="text-white/60">99 Wall Street</p>
                <p className="text-white/60">New York 10005</p>
                <p className="text-white/60">USA</p>
              </div>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}
