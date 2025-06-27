import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Settings, 
  Zap,
  Shield,
  Users,
  Layers,
  Database
} from "lucide-react";
import Header from "@/components/header";
import Custombutton from "@/components/button";
import Footer from "@/components/footer";
import CTA from "@/components/cta";

const CustomSoftware = () => {
  const services = [
    {
      title: "Enterprise Software Solutions",
      icon: Settings,
      description: "We design and develop enterprise-grade applications including custom ERP, CRM, HRMS, inventory, billing, and supply chain systems that align perfectly with your internal processes."
    },
    {
      title: "Web & Mobile App Development", 
      icon: Code,
      description: "Build powerful web portals, mobile apps (Android & iOS), and responsive dashboards. We focus on clean UI/UX and robust backend architectures to ensure optimal performance across all platforms."
    },
    {
      title: "API Development & System Integration",
      icon: Layers,
      description: "Seamlessly connect your systems with third-party tools using secure APIs. Whether it's payment gateways, SMS systems, GST services, or legacy software — we ensure smooth and secure data exchange."
    }
  ];

  const whyChoose = [
    { icon: Database, title: "Domain-driven design", desc: "We develop based on your business logic, not just code" },
    { icon: Layers, title: "Full-stack development", desc: "From UI to backend to database — all in one team" },
    { icon: Zap, title: "Agile & scalable", desc: "Rapid development cycles with room for future expansion" },
    { icon: Shield, title: "Security-first", desc: "Secure coding practices and data protection by design" },
    { icon: Users, title: "Post-launch support", desc: "Ongoing maintenance, updates, and enhancements" }
  ];

  const technologies = [
    "React", "Node.js", ".NET", "Python", "Java", 
    "Flutter", "SQL", "MongoDB", "AWS"
  ];

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <Header></Header>
      {/* Hero Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Custom Software Development
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            We specialize in building custom software solutions tailored precisely to your business needs. 
            Whether you&apos;re a growing enterprise, an innovative startup, or an established organization looking to digitize your operations — 
            we help you streamline workflows, automate tasks, and scale faster with smart, secure, and scalable software.
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
            <p className="text-lg text-gray-600">Comprehensive custom software development services</p>
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
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Aegitek?</h2>
            <p className="text-lg text-gray-600">Our commitment to excellence in every project</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="text-center bg-white border-none hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#189CD2] to-blue-500 flex items-center justify-center mx-auto mb-4">
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

      {/* Technologies */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technologies We Work With</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2 px-4 
              hover:bg-blue-100 hover:text-[#189CD2] transition-colors">
                {tech}
              </Badge>
            ))}
          </div>
          <p className="text-gray-600 mt-6">And more cutting-edge technologies to meet your specific needs</p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-lg text-gray-600">From concept to deployment and beyond</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your business requirements and goals" },
              { step: "02", title: "Design", desc: "Creating user-centric designs and system architecture" },
              { step: "03", title: "Development", desc: "Agile development with regular feedback loops" },
              { step: "04", title: "Deployment", desc: "Seamless launch with ongoing support and maintenance" }
            ].map((phase, index) => (
              <Card key={index} className="text-center bg-white border-none hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#189CD2] to-blue-100 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
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
<Footer/>
    </div>
  );
};

export default CustomSoftware;
