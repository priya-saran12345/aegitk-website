import Image from "next/image"
import CustomButton from "@/components/button"
const services = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "We begin by understanding your business objectives, challenges, and requirements. Our team works closely with you to define project scope, timeline, and success metrics.",
    points: [
      "In-depth business analysis",
      "Requirements gathering",
      "Project roadmap development",
    ],
    image: "https://aegitek.com/img/vms-new1.jpg",
  },
  {
    number: "02",
    title: "Design & Development",
    description:
      "Our experienced designers and developers work collaboratively to create solutions that are both visually appealing and functionally robust.",
    points: [
      "User-centered design approach",
      "Agile development methodology",
      "Regular progress updates",
    ],
    image: "https://aegitek.com/img/vms-new1.jpg",
  },
  {
    number: "03",
    title: "Testing & Deployment",
    description:
      "We conduct thorough testing to ensure your solution meets the highest standards of quality, security, and performance before deploying to production.",
    points: [
      "Comprehensive quality assurance",
      "Security and performance testing",
      "Smooth deployment process",
    ],
    image: "https://aegitek.com/img/vms-new1.jpg",
  },
]

export default function Services() {
  return (
    <div className="bg-gray-50">
    <section className="py-16 lg:w-[90%] mx-auto px-6 lg:px-10 bg-gray-50">
      <div className=" mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-[#189CD2]">How</span> We Work
        </h2>
        <p className="text-muted-foreground text-lg">
          Our proven methodology ensures successful outcomes for every project.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Number Badge */}
            <div className="absolute top-4 left-4 border-[2px] border-white  w-10 h-10 rounded-full bg-[#189CD2] text-white flex items-center justify-center font-bold z-20  shadow-md">
              {service.number}
            </div>

            {/* Image */}
            <Image
              src={service.image}
              alt={service.title}
              width={600}
              height={300}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
              <ul className="space-y-2 text-sm mb-4 text-gray-700">
                {service.points.map((point, idx) => (
                  <li key={idx} className="flex bg-slate-100  p-2 rounded-lg items-start">
                    <span className="mr-2 text-[#189CD2]">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
<CustomButton link="contact" text="Read More" />            </div>
          </div>
        ))}
      </div>
    </section>
        </div>

  )
}
