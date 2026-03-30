import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TeamHero } from "@/components/team/team-hero"
import { TeamMembers } from "@/components/team/team-members"
import { TeamValues } from "@/components/team/team-values"
import { JoinTeam } from "@/components/team/join-team"

export const metadata: Metadata = {
  title: "Meet the Team | CL Global Media",
  description: "Meet the talented professionals behind CL Global Media who are dedicated to delivering exceptional advertising solutions.",
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <TeamHero />
      <TeamMembers />
      <TeamValues />
      <JoinTeam />
      <Footer />
    </main>
  )
}
