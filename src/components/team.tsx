import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Team() {
  const team = [
    {
      name: "Alex Morgan",
      role: "CEO & Founder",
      bio: "With over 20 years of experience in technology leadership, Alex founded Aegitek with a vision to help businesses leverage technology for growth.",
      avatar: "AM",
    },
    {
      name: "Taylor Chen",
      role: "CTO",
      bio: "Taylor leads our technical strategy and ensures we stay at the cutting edge of technology to deliver innovative solutions for our clients.",
      avatar: "TC",
    },
    {
      name: "Jordan Smith",
      role: "Head of Development",
      bio: "Jordan oversees our development team, ensuring we deliver high-quality, scalable solutions that meet our clients' needs.",
      avatar: "JS",
    },
    {
      name: "Casey Williams",
      role: "Head of Design",
      bio: "Casey brings a user-centered approach to design, creating intuitive and engaging experiences for our clients' customers.",
      avatar: "CW",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground">
            Our team of experts is passionate about technology and committed to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="pt-6 text-center">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarFallback className="text-xl">{member.avatar}</AvatarFallback>
                </Avatar>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
              <CardFooter className="justify-center space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
