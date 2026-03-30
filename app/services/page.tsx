import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Services | CL Global Media",
  description: "Our comprehensive advertising services - CL Global Media",
}

const digitalServices = [
  {
    title: "PAID SOCIAL CAMPAIGNS",
    description: "At CL Global Media, we offer paid social campaigns that are designed to increase brand awareness, engagement and conversions. Our team of experts will create compelling ad content and target the right audience to reach your business goals.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "PAY PER CLICK CAMPAIGNS",
    description: "Our pay per click campaigns are tailored to your business needs and designed to maximize your return on investment. We optimize your campaigns to get the most clicks for the lowest cost and continuously monitor and adjust to ensure optimal performance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "INFLUENCER CAMPAIGNS",
    description: "We work with influencers across different platforms to create authentic and impactful campaigns that resonate with your target audience. Our team will identify the right influencers for your brand, negotiate partnerships and manage the entire campaign process.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1920&auto=format&fit=crop",
  },
]

const onlineServices = [
  {
    title: "SEARCH ENGINE OPTIMIZATION",
    description: "Our search engine optimization services are designed to help your website rank higher on search engine results pages. We conduct keyword research, optimize your website content and structure, and build high-quality backlinks to improve your website's visibility and traffic.",
  },
  {
    title: "ANALYTICS AND REPORTING",
    description: "We provide detailed analytics and reporting to help you understand the performance of your campaigns and make informed decisions. Our team will track and measure key performance indicators, provide insights and recommendations, and continuously optimize your campaigns for success.",
  },
]

const outdoorExamples = [
  {
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1920&auto=format&fit=crop",
    title: "Billboard Campaign",
  },
  {
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=1920&auto=format&fit=crop",
    title: "Digital Display",
  },
  {
    image: "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?q=80&w=1920&auto=format&fit=crop",
    title: "Street Advertising",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      {/* Digital Services Section */}
      <section className="pt-32 pb-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {digitalServices.map((service, index) => (
              <div key={index} className="bg-black rounded-lg overflow-hidden">
                <div 
                  className="aspect-video bg-cover bg-center"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Advertising Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Online Advertising
              </h2>
              <p className="text-white/70 leading-relaxed">
                With our online advertising services, you can be confident that your message will reach the right audience. From targeted campaigns to creative content, we work to ensure that your message is heard by the people who matter most. Our approach is always data-driven, so you can measure the results of your investment and see the impact on your bottom line.
              </p>
            </div>
            <div 
              className="aspect-video rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1920&auto=format&fit=crop')",
              }}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {onlineServices.map((service, index) => (
              <div key={index} className="bg-zinc-900 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outdoor Media Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Outdoor Media
            </h2>
            <p className="text-white/70 leading-relaxed max-w-3xl">
              We specialise in outdoor advertising that stands out from the crowd. Our unique approach and strategic placement ensure maximum exposure for your brand. Below are examples of the type of work we can provide for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {outdoorExamples.map((example, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <div 
                  className="aspect-[4/3] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${example.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-lg font-semibold text-white">{example.title}</h3>
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
