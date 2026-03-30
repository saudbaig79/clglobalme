"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Meet the Team" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-black/95 backdrop-blur-md shadow-lg shadow-black/20" 
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/logo.png"
                alt="CL Global Media Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-semibold text-white tracking-tight hidden sm:block">
              <span className="text-[#d4af37]">CL</span> Global Media
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="relative px-4 py-2 text-white/80 hover:text-white transition-colors text-sm font-medium group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-3/4" />
              </Link>
            ))}
            <Link 
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-[#d4af37] hover:bg-[#b8982f] text-black font-semibold text-sm rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/30"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact"
              className="mt-2 mx-4 px-6 py-3 bg-[#d4af37] hover:bg-[#b8982f] text-black font-semibold text-sm rounded-full transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
