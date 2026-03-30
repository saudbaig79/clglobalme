"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-white tracking-tight">
              CL Global Media
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <Link 
                href="/" 
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/contact" 
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
