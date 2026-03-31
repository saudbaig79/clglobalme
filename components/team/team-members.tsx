"use client"

import { AnimatedSection } from "@/components/ui/animated-section"

const ceo = {
  name: "Duncan McHugh",
  role: "CEO",
  title: "The Media Mogul Redefining Advertising",
  bio: "Duncan McHugh is a powerhouse in media, advertising, and brand storytelling. As a media mogul and strategic mastermind, he has shaped high-impact campaigns, luxury brand collaborations, and global events that redefine industry standards. With a sharp eye for market trends and an unmatched network, Duncan transforms brands into cultural icons, ensuring every campaign captivates, influences, and delivers results.",
  initials: "DM",
}

const leadershipTeam = [
  {
    name: "John Hamilton",
    role: "Head of Personnel",
    bio: "With two decades in media and advertising, John ensures that CL Global Media's team is equipped with the best talent in the industry. His leadership fosters a high-performance culture, driving innovation in outdoor media.",
    initials: "JH",
  },
  {
    name: "Lucía Rodríguez",
    role: "Head of Sales",
    bio: "A dynamic sales strategist with a deep understanding of the outdoor advertising landscape, Lucía has successfully led multimillion-dollar campaigns. She specializes in building strong client relationships and maximizing revenue growth.",
    initials: "LR",
  },
  {
    name: "Antoine Dubois",
    role: "Head of Customer Service",
    bio: "With extensive experience in media account management, Antoine ensures seamless client experiences. His expertise in customer relations and campaign execution guarantees smooth, results-driven advertising solutions.",
    initials: "AD",
  },
  {
    name: "Saud Baig",
    role: "Head of Design",
    bio: "Saud Baig brings a creative edge to outdoor media, crafting visually compelling campaigns that captivate audiences. His expertise in design innovation helps brands stand out in the competitive advertising space.",
    initials: "SB",
  },
]

export function TeamMembers() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CEO Section */}
        <AnimatedSection className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium rounded-full mb-4">
            Founder & CEO
          </span>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" className="mb-24">
          <div className="max-w-4xl mx-auto bg-zinc-900/50 rounded-3xl p-8 md:p-12 border border-zinc-800 hover:border-[#d4af37]/30 transition-all duration-500">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* CEO Avatar with Initials */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8960c] flex items-center justify-center shadow-2xl shadow-[#d4af37]/20">
                  <span className="text-4xl md:text-5xl font-bold text-black font-serif">
                    {ceo.initials}
                  </span>
                </div>
              </div>
              
              {/* CEO Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 font-serif">
                  {ceo.name}
                </h3>
                <p className="text-[#d4af37] font-medium mb-2">{ceo.role}</p>
                <p className="text-white/70 italic text-lg mb-4">{ceo.title}</p>
                <p className="text-white/60 leading-relaxed">
                  {ceo.bio}
                </p>

              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Leadership Team Section */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium rounded-full mb-4">
            Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif">
            Our <span className="gradient-text">Leadership Team</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipTeam.map((member, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="group bg-zinc-900/50 rounded-2xl p-6 border border-zinc-800 hover:border-[#d4af37]/30 transition-all duration-500 h-full flex flex-col">
                {/* Avatar with Initials */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#d4af37]/80 to-[#b8960c]/80 flex items-center justify-center shadow-lg group-hover:shadow-[#d4af37]/20 transition-shadow duration-500">
                    <span className="text-2xl font-bold text-black font-serif">
                      {member.initials}
                    </span>
                  </div>
                </div>
                
                <div className="text-center flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#d4af37] transition-colors font-serif">
                    {member.name}
                  </h3>
                  <p className="text-[#d4af37] text-sm mb-4">{member.role}</p>
                  <p className="text-white/50 text-sm leading-relaxed flex-1">{member.bio}</p>
                  

                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
