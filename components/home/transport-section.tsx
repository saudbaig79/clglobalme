const transportOptions = [
  {
    title: "Bus",
    description: "Nationwide reach, engaging millions on their daily commutes.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "Rail Digital",
    description: "High-impact digital screens in iconic stations.",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "TfL Rail Estate",
    description: "Exclusive advertising across Tube, Tram, and Overground.",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "Metro",
    description: "Expanding brand presence in bustling city centers.",
    image: "https://images.unsplash.com/photo-1565354810165-c3678116e5d1?q=80&w=1920&auto=format&fit=crop",
  },
  {
    title: "Tram",
    description: "Cost-effective local advertising with strong visibility.",
    image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=1920&auto=format&fit=crop",
  },
]

export function TransportSection() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Explore Transport</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transportOptions.map((option, index) => (
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
