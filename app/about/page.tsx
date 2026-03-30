import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About | CL Global Media",
  description: "Delivering Legendary Advertising Campaigns - CL Global Media",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Delivering Legendary Advertising Campaigns
          </h1>
          <Link 
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-400 text-sm font-medium uppercase tracking-wider mb-4">OUR APPROACH</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Redefining the Way We Advertise
              </h2>
              <p className="text-white/70 leading-relaxed text-lg">
                At CL Global Media, we believe that advertising should be more than just getting your brand in front of people. Our approach is to create meaningful connections between our clients and their customers. We do this by developing campaigns that are tailored to your brand and your audience. Our team of experts will work with you every step of the way to ensure that your campaign is a success.
              </p>
            </div>
            <div className="relative">
              <div 
                className="aspect-[4/3] rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1920&auto=format&fit=crop')",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-400 text-sm font-medium uppercase tracking-wider mb-4">NEWS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              CL Global Media in the Press
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-zinc-900 rounded-lg overflow-hidden">
                <div 
                  className="aspect-video bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1920&auto=format&fit=crop')",
                  }}
                />
                <div className="p-6">
                  <p className="text-white/40 text-sm mb-2">Press Release</p>
                  <h3 className="text-white font-semibold">Latest Industry News</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
