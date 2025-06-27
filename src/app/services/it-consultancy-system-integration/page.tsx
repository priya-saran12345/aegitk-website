import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Settings, 
  Layers,
  Shield,
  Zap,
  CheckCircle,
  Database,
  Monitor,
  Link as LinkIcon
} from "lucide-react";
import Header from "@/components/header";
import CustomButton from "@/components/button";
import Footer from "@/components/footer";
import CTA from "@/components/cta";

const ItConsultancy = () => {
  const services = [
    {
      title: "IT Strategy & Infrastructure Consulting",
      icon: Settings,
      description: "We assess your current IT landscape and design robust strategies to align your technology with business goals. Whether it's digital transformation, cloud migration, or modernization — we guide you every step of the way."
    },
    {
      title: "System Integration Services", 
      icon: Layers,
      description: "We connect your enterprise systems to work as one. Our integration services cover ERPs, CRMs, custom apps, databases, payment gateways, SMS APIs, and more — ensuring smooth data flow and operational continuity."
    },
    {
      title: "Cloud & Hybrid Deployments",
      icon: Monitor,
      description: "Leverage the power of the cloud with our deployment services on AWS, Azure, or GCP. We also offer on-premises and hybrid setups to support flexible workloads and secure operations."
    },
    {
      title: "Legacy System Modernization",
      icon: Database,
      description: "We help modernize and extend the life of existing legacy systems by integrating them with new platforms and interfaces — preserving your core logic while enabling innovation."
    }
  ];

  const whyChoose = [
    { icon: Database, title: "Expertise across platforms", desc: "SAP, ERPNext, .NET, Java, REST, GraphQL" },
    { icon: LinkIcon, title: "API-first architecture", desc: "Ensures interoperability and scalability" },
    { icon: Shield, title: "Secure integration", desc: "Role-based access, tokenized APIs, and encryption" },
    { icon: Zap, title: "Real-time synchronization", desc: "For cross-departmental or multi-location data flow" },
    { icon: Settings, title: "Minimal downtime", desc: "Integration with zero or low disruption to ongoing operations" }
  ];

  const useCases = [
    "ERP & CRM integration",
    "GST & payment gateway linking", 
    "IoT device data integration",
    "SMS, email, and notification systems",
    "Centralized dashboards from distributed sources"
  ];

  return (
    <div className="min-h-screen ">
      {/* Header */}
<Header></Header>
      {/* Hero Section */}
      <section className="py-16 bg-blue-50 ">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            IT Consultancy & System Integration
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            We help businesses transform their digital infrastructure by providing expert IT consultancy and seamless system integration services. 
            From architecture planning to enterprise application connectivity, we ensure your IT ecosystem is secure, scalable, and future-ready.
          </p>
                              <div className="pt-4 mx-auto w-fit">
                      <CustomButton text="Get in Touch" link="/contact" />
                    </div>

        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600">Comprehensive IT consulting and integration services</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg border-none transition-shadow h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-600" />
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
            <p className="text-lg text-gray-600">Trusted expertise in IT transformation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="text-center bg-white border-none hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-100 flex items-center justify-center mx-auto mb-4">
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

      {/* Integration Use Cases */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Integration Use Cases</h2>
            <p className="text-lg text-gray-600">Common integration scenarios we handle</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg border-blue-500 transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="font-medium text-gray-900">{useCase}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Process */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Consulting Process</h2>
            <p className="text-lg text-gray-600">Structured approach to IT transformation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Assessment", desc: "Current state analysis and gap identification" },
              { step: "02", title: "Strategy", desc: "Roadmap creation and technology selection" },
              { step: "03", title: "Implementation", desc: "Phased rollout with minimal disruption" },
              { step: "04", title: "Optimization", desc: "Performance tuning and continuous improvement" }
            ].map((phase, index) => (
              <Card key={index} className="text-center bg-white border-none hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-100 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
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

export default ItConsultancy;
