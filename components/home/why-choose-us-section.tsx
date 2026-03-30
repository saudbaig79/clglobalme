import { Lightbulb, Zap, Users, Leaf } from "lucide-react"

const reasons = [
  {
    icon: Lightbulb,
    title: "Creativity and Innovation",
    description: "Collaborate with leading designers for impactful advertising.",
  },
  {
    icon: Zap,
    title: "Efficient Production",
    description: "Intuitive online platform for design submission and approval.",
  },
  {
    icon: Users,
    title: "Partnership and Support",
    description: "Dedicated support team to help you succeed with your campaigns.",
  },
  {
    icon: Leaf,
    title: "Sustainability Commitment",
    description: "Committed to sustainable, eco-friendly, and responsible advertising.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why Choose Us</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-600/10 rounded-full flex items-center justify-center">
                <reason.icon className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{reason.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
