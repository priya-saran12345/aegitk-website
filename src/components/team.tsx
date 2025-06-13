import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
  ];

  return (
    <section className=" lg:w-[90%] mx-auto px-6 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-[#189CD2]">Meet</span> Our Team
          </h2>
          <p className="text-lg text-muted-foreground">
            Our team of experts is passionate about technology and committed to
            your success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="pt-6 text-center">
                <div
                  className="relative mx-auto z-20 flex items-end justify-center rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 xl:w-52 xl:h-52 
                    bg-black/20 hover:bg-[#D4ECF7]
                    group transition-all duration-300 ease-in-out overflow-visible mb-4"
                >
                  <div
                    className="grayscale hover:grayscale-0 inset-0 rounded-full 
                    overflow-hidden top-2 group-hover:top-0 transition-all duration-200 ease-in-out relative w-full h-full"
                  >
                    <Image
                      src="/images/aegiteklogo.jpg"
                      alt={`Profile image of ${member.name}`}
                      width={145}
                      height={130}
                      className="object-cover transition-all duration-200 ease-in-out rounded-full"
                      loading="lazy"
                    />
                  </div>
                  {/* <div className="absolute border-white border-4 z-[9999] fade-in w-[50px] h-[50px] sm:w-[55px] sm:h-[55px]  right-5 flex items-center justify-center rounded-full bg-blue">
                    <span className="text-white text-xl font-semibold flex items-center justify-center">
                      <Image
                        src={"https://www.shutterstock.com/shutterstock/photos/396743521/display_1500/stock-vector-code-icon-396743521.jpg"}
                        alt="chevron icon"
                        width={25}
                        height={25}
                      />
                    </span>
                  </div> */}
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
              <CardFooter className="justify-center space-x-4">
                <div className="bg-[#189CD2]/20 hover:bg-black duration-300 hover:text-white rounded-full p-3">
                  <Link href="#">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
                <div className="bg-[#189CD2]/20 hover:bg-black duration-300 hover:text-white rounded-full p-3">
                  <Link href="#">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
