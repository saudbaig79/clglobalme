import Link from "next/link"

const campaigns = [
  {
    title: "PAID SOCIAL CAMPAIGNS",
    description: "Our paid social campaigns are designed to reach your target audience on social media platforms such as Facebook, Twitter, Instagram and LinkedIn. We create custom campaigns that drive engagement, increase brand awareness and generate leads.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "PAY PER CLICK",
    description: "Our pay per click (PPC) campaigns are designed to drive traffic to your website and increase conversions. We use advanced targeting techniques to reach your ideal audience and create compelling ad copy that drives clicks.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "INFLUENCER CAMPAIGNS",
    description: "Our influencer campaigns are designed to leverage the power of social media influencers to increase brand awareness, drive engagement and generate leads. We work with a network of top influencers to create custom campaigns that deliver real results.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1920&auto=format&fit=crop",
  },
]

export function CampaignsSection() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <div 
                  className="aspect-[4/3] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${campaign.image}')` }}
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{campaign.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                {campaign.description}
              </p>
              <Link 
                href="/services"
                className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
