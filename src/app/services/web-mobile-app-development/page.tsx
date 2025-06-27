import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Custombutton from "@/components/button";

import { 
  Monitor, 
  Smartphone,
  Zap,
//   Users,
//   CheckCircle,
  Layers,
  Code,
  Star
} from "lucide-react";
import Header from "@/components/header";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

const WebMobile = () => {
  const services = [
    {
      title: "Responsive Web Applications",
      icon: Monitor,
      description: "From dynamic business websites to enterprise portals and PWAs (Progressive Web Apps), we create web applications that are fast, secure, and SEO-optimized — tailored to meet your brand's vision and functionality."
    },
    {
      title: "Android & iOS Mobile Apps", 
      icon: Smartphone,
      description: "We build native and cross-platform mobile applications with intuitive UX and seamless performance. Our apps are designed to work flawlessly across devices, screen sizes, and operating systems."
    },
    {
      title: "Hybrid & Cross-Platform Solutions",
      icon: Layers,
      description: "Using technologies like Flutter and React Native, we deliver single-codebase apps that work across Android, iOS, and the web — reducing cost and time without compromising performance."
    }
  ];

  const whyChoose = [
    { icon: Star, title: "UI/UX Excellence", desc: "Clean, modern, user-friendly designs" },
    { icon: Layers, title: "Cross-platform Expertise", desc: "Native, hybrid, and PWA solutions" },
    { icon: Zap, title: "Agile Development", desc: "Fast iteration with user feedback loops" },
    { icon: Code, title: "Scalable Architecture", desc: "Apps built to grow with your business" },
    { icon: Monitor, title: "Cloud-Ready", desc: "Integrated with AWS, Firebase, Azure & more" }
  ];

  const industries = [
    "E-commerce & Retail",
    "Healthcare & Pharma", 
    "Dairy & Agriculture",
    "Logistics & Transportation",
    "Education & E-learning",
    "Fintech & Insurance"
  ];

  const technologies = [
    "React", "Next.js", "Flutter", "React Native", 
    "Android (Kotlin/Java)", "iOS (Swift)", "Firebase", 
    "Node.js", "MongoDB", "MySQL", "REST APIs"
  ];

  return (
    <div className="min-h-screen ">
      {/* Header */}
<Header/>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Web & Mobile App Development
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            We craft fast, reliable, and visually stunning web and mobile applications that bring your digital ideas to life. 
            Whether you&apos;re building a customer-facing app, an internal dashboard, or a next-gen product — 
            we deliver scalable solutions that run smoothly on every device.
          </p>
                            <div className="pt-4 mx-auto w-fit">
            <Custombutton text="Get in Touch" link="/contact" />
          </div>

        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600">Comprehensive web and mobile development services</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg border-none transition-shadow h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#189CD2]" />
                      </div>
                      <span className="text-lg">{service.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Aegitek */}
      <section className="py-16 bg-blue-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Aegitek?</h2>
            <p className="text-lg text-gray-600">Excellence in every pixel and line of code</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="text-center bg-white border-none hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-50 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600">Tailored solutions across diverse sectors</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center border-[#189CD2] hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <p className="text-sm font-medium text-gray-700">{industry}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-blue-50 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2 px-4
               hover:bg-blue-500 hover:text-white transition-colors">
                {tech}
              </Badge>
            ))}
          </div>
          <p className="text-gray-600 mt-6">Modern tech stack for cutting-edge applications</p>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-lg text-gray-600">From idea to app store and beyond</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Strategy", desc: "User research, wireframing, and technical planning" },
              { step: "02", title: "Design", desc: "UI/UX design with prototyping and user testing" },
              { step: "03", title: "Development", desc: "Agile development with continuous integration" },
              { step: "04", title: "Launch", desc: "App store deployment with ongoing maintenance" }
            ].map((phase, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-600 text-sm">{phase.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA/>
      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default WebMobile;
