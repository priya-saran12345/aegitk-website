import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Button } from "@/components/ui/button"
// import {  Lightbulb, Target, Award } from "lucide-react"
import { CheckCircle } from "lucide-react";
// import Link from "next/link"
import Header from "@/components/header";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
export default function AboutPage() {
  return (
    <>
      <Header />
      <div className=" to-white">
        {/* Hero Section */}
        <div className="relative  pb-12">
          <div
            className="bg-cover bg-center h-[40vh] bg-no-repeat"
            style={{ backgroundImage: "url('/images/aboutbg.png')" }} // Change to your image path
          >
            <div className="bg-black/50 h-full">
              {" "}
              {/* Optional: semi-transparent overlay for better text readability */}
              <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto text-center text-white">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="text-[#189CD2]">A</span>bout Aegitek
                  </h1>
                  <p className="text-xl opacity-90">
                    Empowering businesses through innovative technology
                    solutions since 2010
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div
          className="absolute bottom-0 left-0 w-full h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0% 100%)" }}
        ></div> */}
        </div>
        {/* Overview Section */}
        <section className="lg:w-[90%] mx-auto px-6 py-20 ">
          <div className=" mx-auto px-4">
            <div className=" mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    please change our story - Our Story – Aegitek Solutions Pvt.
                    Ltd. Every great journey begins with a simple idea — and
                    ours was to build intelligent digital solutions that empower
                    businesses to grow in a rapidly evolving world. Aegitek
                    Solutions Pvt. Ltd. was founded with a clear mission: 👉 To
                    deliver reliable, future-ready IT solutions that simplify
                    complex business challenges.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    As a new-age technology startup, we are driven by passion,
                    innovation, and a strong belief in the power of digital
                    transformation. While we are at the beginning of our
                    journey, our team brings together years of combined
                    experience in software development, ERP solutions,
                    automation, and enterprise consulting.
                  </p>
                  <p className="text-lg font-bold text-gray-700 mb-6">
                    We specialize in:
                  </p>

                  <div className="flex items-center space-x-2 text-blue-600">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">
                      {" "}
                      Dairy ERP & Industry Automation through our flagship
                      solution, Milk Matrix Dairy ERP
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-blue-600 mt-2">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">
                       Custom Software Development for startups and SMEs
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-blue-600 mt-2">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">
                       Web & Mobile App Development using modern frameworks
                      like React, Next.js, and Flutter
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-blue-600 mt-2">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">
                       AI/ML & Robotic Process Automation (RPA) for process
                      intelligence
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-blue-600 mt-2">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">
                       Digital Marketing & SEO Services to help brands build
                      their online presence
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-blue-600 mt-2">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">
                       Training & Internship Programs for the next generation
                      of developers and tech professionals
                    </span>
                  </div>
                  <br />
                  <p className="text-lg text-gray-700 mb-6">
                    At Aegitek, we may be new, but we are ambitious, committed,
                    and client-focused. Our goal is to build long-term
                    partnerships by delivering solutions that are not just
                    technically sound but also strategically aligned with our
                    clients&apos; growth.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    We are actively collaborating with partners, expanding our
                    footprint, and looking forward to building our client base
                    across industries — one successful project at a time.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    Join us on this journey Whether you&apos;re a business
                    looking for a technology partner or a young professional
                    seeking real-world experience — Aegitek Solutions Pvt. Ltd.
                    is here to grow with you.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full z-10"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-full z-10"></div>
                  <Image
                    src="/images/about.jpg"
                    alt="Aegitek team"
                    width={600}
                    height={500}
                    className="rounded-lg shadow-xl relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        {/* <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="mission" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="mission">Our Mission</TabsTrigger>
                <TabsTrigger value="vision">Our Vision</TabsTrigger>
                <TabsTrigger value="values">Our Values</TabsTrigger>
              </TabsList>

              <TabsContent value="mission" className="p-6 bg-white rounded-lg shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-lg text-gray-700">
                      At Aegitek, our mission is to empower businesses through innovative technology solutions that
                      drive growth, efficiency, and competitive advantage. We believe in creating technology that makes
                      a meaningful difference in how businesses operate and succeed.
                    </p>
                    <p className="text-lg text-gray-700 mt-4">
                      We are committed to understanding our clients&apos; unique challenges and delivering tailored solutions
                      that address their specific needs. By combining technical expertise with industry knowledge, we
                      help organizations navigate the complexities of digital transformation and achieve their strategic
                      objectives.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="vision" className="p-6 bg-white rounded-lg shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Lightbulb className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                    <p className="text-lg text-gray-700">
                      Our vision is to be the global leader in delivering transformative technology solutions that
                      enable businesses to thrive in an increasingly digital world. We aspire to be recognized not just
                      for the quality of our work, but for the impact we create for our clients and the communities we
                      serve.
                    </p>
                    <p className="text-lg text-gray-700 mt-4">
                      We envision a future where technology is seamlessly integrated into business operations, enhancing
                      human capabilities rather than replacing them. Through continuous innovation and a
                      forward-thinking approach, we aim to shape this future and help our clients stay ahead of the
                      curve.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="values" className="p-6 bg-white rounded-lg shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-slate-50 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">Innovation</h4>
                        <p className="text-gray-700">
                          We constantly push the boundaries of what&apos;s possible, embracing new technologies and
                          approaches to solve complex problems.
                        </p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">Excellence</h4>
                        <p className="text-gray-700">
                          We hold ourselves to the highest standards in everything we do, from code quality to client
                          communication.
                        </p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">Integrity</h4>
                        <p className="text-gray-700">
                          We build relationships based on trust and transparency, always doing what&apos;s right for our
                          clients and our team.
                        </p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">Collaboration</h4>
                        <p className="text-gray-700">
                          We believe the best solutions come from working together, combining diverse perspectives and
                          expertise.
                        </p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">Client Success</h4>
                        <p className="text-gray-700">
                          We measure our success by the success of our clients, focusing on delivering outcomes that
                          matter.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section> */}

        {/* Our Approach Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
              <p className="text-lg text-gray-700">
                We take a consultative approach to every project, working
                closely with our clients to understand their unique challenges
                and objectives.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-blue-600 text-xl font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Discover</h3>
                    <p className="text-gray-600">
                      We begin by deeply understanding your business,
                      challenges, and objectives through collaborative workshops
                      and research.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-blue-600 text-xl font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Design</h3>
                    <p className="text-gray-600">
                      Our experts design tailored solutions that address your
                      specific needs, leveraging the latest technologies and
                      best practices.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-blue-600 text-xl font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Deliver</h3>
                    <p className="text-gray-600">
                      We implement solutions with precision and care, ensuring
                      quality, performance, and alignment with your goals.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        {/* <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-700">
              Meet the experienced professionals who guide our company&apos;s vision and strategy.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="CEO"
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Rajesh Kumar</h3>
                <p className="text-blue-600 mb-2">Chief Executive Officer</p>
                <p className="text-gray-600 text-sm">
                  With over 20 years of experience in technology leadership, Rajesh drives our company&apos;s vision and
                  strategy.
                </p>
              </div>

              <div className="text-center">
                <div className="relative mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="CTO"
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Priya Sharma</h3>
                <p className="text-blue-600 mb-2">Chief Technology Officer</p>
                <p className="text-gray-600 text-sm">
                  Priya leads our technical strategy and innovation initiatives, bringing 15 years of expertise in
                  software development.
                </p>
              </div>

              <div className="text-center">
                <div className="relative mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="COO"
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Amit Patel</h3>
                <p className="text-blue-600 mb-2">Chief Operations Officer</p>
                <p className="text-gray-600 text-sm">
                  Amit oversees our day-to-day operations, ensuring we deliver exceptional service to our clients.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button className="bg-blue-600 hover:bg-blue-700">Meet Our Full Team</Button>
            </div>
          </div>
        </div>
      </section> */}

        {/* Clients & Partners Section */}
        {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Clients & Partners</h2>
            <p className="text-lg text-gray-700">
              We&apos;re proud to work with leading organizations across various industries.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
                  <Image
                    src={`/placeholder.svg?height=80&width=120&text=Client ${i}`}
                    alt={`Client ${i}`}
                    width={120}
                    height={80}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

        {/* CTA Section */}
        {/* <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl opacity-90 mb-8">
              Partner with Aegitek to leverage cutting-edge technology solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-blue-700">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section> */}
        <CTA />
      </div>
      <Footer></Footer>
    </>
  );
}
