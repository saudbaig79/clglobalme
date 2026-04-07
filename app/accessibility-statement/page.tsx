'use client'

import { AnimatedSection } from "@/components/ui/animated-section"

export default function AccessibilityStatement() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Accessibility Statement</h1>
          <p className="text-zinc-400 mb-8 text-sm">Last Updated: April 2026</p>
          
          <div className="text-zinc-300 text-base leading-relaxed space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Our Commitment</h2>
              <p className="text-justify">
                CL Global Media LLC is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Accessibility Standards</h2>
              <p className="text-justify mb-3">
                We strive to meet or exceed the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards, which include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li>Perceivable: Information must be presented in ways that users can perceive</li>
                <li>Operable: Interface components must be navigable and usable</li>
                <li>Understandable: Text and operations must be clear and understandable</li>
                <li>Robust: Content must be compatible with current and future assistive technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Accessibility Features</h2>
              <p className="text-justify mb-3">
                Our website includes the following accessibility features:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li><strong>Keyboard Navigation:</strong> All website functions are accessible via keyboard</li>
                <li><strong>Screen Reader Support:</strong> Our Site is compatible with major screen readers</li>
                <li><strong>Alt Text:</strong> Images include descriptive alternative text</li>
                <li><strong>Color Contrast:</strong> Text and background colors meet WCAG contrast requirements</li>
                <li><strong>Resizable Text:</strong> Users can adjust font sizes through browser settings</li>
                <li><strong>Accessible Forms:</strong> Forms are properly labeled and include validation messages</li>
                <li><strong>Semantic HTML:</strong> Page structure uses semantic markup for better accessibility</li>
                <li><strong>Focus Indicators:</strong> Keyboard focus is clearly visible throughout the Site</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Assistive Technology Support</h2>
              <p className="text-justify mb-3">
                Our website has been tested and is compatible with the following assistive technologies:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li>NVDA (NonVisual Desktop Access)</li>
                <li>JAWS (Job Access With Speech)</li>
                <li>VoiceOver (macOS and iOS)</li>
                <li>Narrator (Windows)</li>
                <li>Magnification software</li>
                <li>Voice control and voice navigation tools</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Known Issues and Limitations</h2>
              <p className="text-justify mb-3">
                We continuously work to improve accessibility. Currently, we are aware of the following limitations:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li>Video content may not have captions or transcripts (we are working to add these)</li>
                <li>Some PDF documents may not be fully accessible (we are converting these to accessible formats)</li>
                <li>Third-party embedded content may have accessibility limitations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Third-Party Content</h2>
              <p className="text-justify">
                While we strive to ensure all content on our Site is accessible, some third-party content (such as embedded videos, social media feeds, or advertisements) may not meet accessibility standards. We actively work with third-party providers to improve the accessibility of external content on our Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Browser and Technology Recommendations</h2>
              <p className="text-justify mb-3">
                For the best accessibility experience, we recommend:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li>Using the latest version of your browser</li>
                <li>Enabling JavaScript, as much of our interactive functionality depends on it</li>
                <li>Using current versions of assistive technologies</li>
                <li>Keeping your operating system and security software up to date</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Accessibility Testing</h2>
              <p className="text-justify mb-3">
                We conduct regular accessibility testing including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li>Automated accessibility scanning tools</li>
                <li>Manual testing with keyboard navigation</li>
                <li>Screen reader compatibility testing</li>
                <li>User testing with people with disabilities</li>
                <li>Regular WCAG compliance audits</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Accessibility for Mobile Users</h2>
              <p className="text-justify mb-3">
                Our website is designed to be accessible on mobile devices, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li>Touch target sizes that meet accessibility standards</li>
                <li>Responsive design that works across different screen sizes</li>
                <li>Compatibility with mobile screen readers and assistive technologies</li>
                <li>Support for text scaling on mobile devices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Feedback and Reporting Issues</h2>
              <p className="text-justify mb-4">
                Your feedback is essential in helping us maintain and improve the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us. We will make every effort to address accessibility issues promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Accessibility Resources</h2>
              <p className="text-justify mb-3">
                For more information about web accessibility, we recommend visiting:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li><strong>W3C Web Accessibility Initiative (WAI):</strong> www.w3.org/WAI</li>
                <li><strong>WCAG 2.1 Guidelines:</strong> www.w3.org/WAI/WCAG21/quickref</li>
                <li><strong>WebAIM:</strong> webaim.org</li>
                <li><strong>The A11Y Project:</strong> www.a11yproject.com</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Accessibility Support</h2>
              <p className="text-justify mb-4">
                If you have accessibility questions or need assistance navigating our website, please contact us through our Contact Us page.
              </p>
              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                <p className="font-semibold text-white mb-2">CL GLOBAL MEDIA LLC</p>
                <p>99 Wall Street</p>
                <p>New York 10005</p>
                <p>USA</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">Continuous Improvement</h2>
              <p className="text-justify">
                We are committed to continuing to improve the accessibility of our website. This statement will be updated as we implement new accessibility features and improvements. Thank you for helping us create a more inclusive digital experience.
              </p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}
