import { Plane, Monitor, ShoppingBag, MapPin, Radio, Building } from "lucide-react"

const services = [
  {
    icon: MapPin,
    title: "Roadside Advertising",
    description: "Classic billboards to modern street-level displays, including our flagship 'Prime View' in London.",
  },
  {
    icon: Monitor,
    title: "Transport Advertising",
    description: "Comprehensive coverage across bus networks, rail systems, and metropolitan areas.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & In-Store Advertising",
    description: "Engaging retail and in-store ads to influence shoppers at the point of purchase.",
  },
  {
    icon: Plane,
    title: "Airport Advertising",
    description: "Ads in 10 key UK airports, reaching over 130 million travelers yearly.",
  },
  {
    icon: Radio,
    title: "Integrated Solutions",
    description: "'MediaFusion' program for seamless integration with digital and radio platforms.",
  },
  {
    icon: Building,
    title: "Other Outdoor Media",
    description: "Outdoor media in key public spaces for maximum brand impact.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-medium uppercase tracking-wider mb-2">Services</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-black/50 p-8 rounded-lg border border-white/5 hover:border-white/10 transition-colors"
            >
              <service.icon className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/60 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
