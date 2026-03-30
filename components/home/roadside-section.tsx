const roadsideOptions = [
  {
    title: "Large Format",
    description: "Bold billboards in key urban areas for maximum reach.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "The A-List",
    description: "Premium digital sites in London to elevate your brand.",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "Street Hub",
    description: "Digital touchpoints bringing brands closer to consumers.",
    image: "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "Small Format",
    description: "Eye-level 6-sheets for everyday audience engagement.",
    image: "https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "Convenience 6-Sheets",
    description: "Influence shoppers right before they buy.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "Kiosks",
    description: "19,000 locations offering prime retail proximity.",
    image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=1920&auto=format&fit=crop",
  },
]

export function RoadsideSection() {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Explore Roadside</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadsideOptions.map((option, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <div 
                className="aspect-[4/3] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${option.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
                <p className="text-white/70 text-sm">{option.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
