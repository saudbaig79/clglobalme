import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Meet the Team" },
  { href: "/contact", label: "Contact" },
]

const services = [
  "Roadside Advertising",
  "Transport Advertising",
  "Airport Advertising",
  "Retail Advertising",
  "Digital Solutions",
]

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo.png"
                  alt="CL Global Media Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-semibold text-white">
                <span className="text-[#d4af37]">CL</span> Global Media
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Redefining outdoor advertising with our extensive network and partners. 
              Your trusted partner in building powerful advertising campaigns worldwide.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#d4af37] flex items-center justify-center transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-white/60 group-hover:text-black" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#d4af37] flex items-center justify-center transition-all duration-300 group"
                aria-label="Twitter"
              >
                <Twitter size={18} className="text-white/60 group-hover:text-black" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#d4af37] flex items-center justify-center transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram size={18} className="text-white/60 group-hover:text-black" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-white/50 hover:text-[#d4af37] text-sm transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/50 group-hover:bg-[#d4af37] transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/50 text-sm inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/50" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:clglobalmediausa@gmail.com" 
                  className="text-white/50 hover:text-[#d4af37] text-sm transition-colors flex items-start gap-3"
                >
                  <Mail size={18} className="text-[#d4af37] mt-0.5 flex-shrink-0" />
                  <span>clglobalmediausa@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin size={18} className="text-[#d4af37] mt-0.5 flex-shrink-0" />
                <span>Global Operations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm">
              &copy; {new Date().getFullYear()} CL Global Media. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/30 hover:text-white/60 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/30 hover:text-white/60 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
