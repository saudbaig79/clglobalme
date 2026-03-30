import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">CL Global Media</h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-md">
              Redefining outdoor advertising with our extensive network and partners. 
              Your trusted partner in building powerful advertising campaigns.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/60 hover:text-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-white text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/60 hover:text-white text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:clglobalmediausa@gmail.com" 
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  clglobalmediausa@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} CL Global Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
