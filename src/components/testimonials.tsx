import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function Testimonials() {
  const testimonials = [
    {
      content:
        "Aegitek transformed our business with their custom software solution. Their team was professional, responsive, and delivered exactly what we needed.",
      author: "Sarah Johnson",
      role: "CTO, TechCorp",
      avatar: "SJ",
    },
    {
      content:
        "The cloud migration project was completed ahead of schedule and under budget. Aegitek's expertise made what could have been a complex process smooth and painless.",
      author: "Michael Chen",
      role: "IT Director, Global Innovations",
      avatar: "MC",
    },
    {
      content:
        "Their cybersecurity assessment identified vulnerabilities we weren't aware of and provided a clear roadmap for addressing them. Highly recommended!",
      author: "Jennifer Lee",
      role: "Security Manager, SecureData Inc.",
      avatar: "JL",
    },
  ]

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">
            {/* Don't just take our word for it. Here's what our clients have to say about working with Aegitek. */}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="relative">
                  {/* <div className="absolute -top-6 -left-2 text-6xl text-primary/20">"</div> */}
                  <p className="relative z-10 italic text-muted-foreground">{testimonial.content}</p>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
