import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Custombutton from "@/components/button";

import {
  Star,
  Settings,
  Database,
  Users,
  CheckCircle,
  Zap,
  Shield,
  BarChart3,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CTA from "@/components/cta";

const AiAutomation = () => {
  const services = [
    {
      title: "AI & Machine Learning Solutions",
      icon: Star,
      description:
        "We develop custom AI/ML models that learn from your data and enhance decision-making. Whether it's demand forecasting, image recognition, or behavior analysis — we create solutions that evolve with your business.",
    },
    {
      title: "Robotic Process Automation (RPA)",
      icon: Settings,
      description:
        "Automate high-volume, repetitive tasks such as invoice processing, data entry, report generation, and email responses using software robots. Our RPA solutions increase productivity while reducing human error.",
    },
    {
      title: "Predictive & Prescriptive Analytics",
      icon: BarChart3,
      description:
        "Turn raw data into actionable insights. We help you forecast trends, detect anomalies, and optimize outcomes using data science techniques and machine learning algorithms.",
    },
    {
      title: "Intelligent Document Processing (IDP)",
      icon: Database,
      description:
        "Use AI-powered systems to extract, classify, and validate data from invoices, forms, PDFs, and scanned documents — minimizing manual input and turnaround time.",
    },
    {
      title: "Chatbots & Virtual Assistants",
      icon: Users,
      description:
        "Deploy smart conversational agents to automate customer support, employee helpdesks, and appointment scheduling — enhancing user experience while reducing workload.",
    },
  ];

  const whyChoose = [
    {
      icon: Star,
      title: "Domain-specific models",
      desc: "Trained on your business data",
    },
    {
      icon: Settings,
      title: "End-to-end automation",
      desc: "From input capture to task completion",
    },
    {
      icon: Shield,
      title: "Enterprise-grade security",
      desc: "With encryption & audit trails",
    },
    {
      icon: Zap,
      title: "Seamless integration",
      desc: "With ERPs, CRMs, databases, and cloud platforms",
    },
    {
      icon: BarChart3,
      title: "Transparent reporting",
      desc: "With analytics dashboards & logs",
    },
  ];

  const useCases = [
    "Invoice processing automation",
    "Quality defect detection in manufacturing",
    "Route optimization and logistics prediction",
    "Employee onboarding & offboarding automation",
    "Sales forecasting & customer segmentation",
    "Document classification & data extraction",
  ];

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <Header></Header>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🤖 AI & Automation
          </div> */}
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI, ML & Process Automation (RPA)
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            We harness the power of Artificial Intelligence (AI), Machine
            Learning (ML), and Robotic Process Automation (RPA) to help
            businesses unlock efficiency, accuracy, and intelligent
            decision-making. From automating repetitive tasks to predictive
            analytics — we enable smarter operations at every level.
          </p>
        </div>
                  <div className="pt-4 mx-auto w-fit">
            <Custombutton text="Get in Touch" link="/contact" />
          </div>

      </section>
      {/* What We Offer */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive AI and automation solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg border-none transition-shadow h-full"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#189CD2]" />
                      </div>
                      <span className="text-lg">{service.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      {/* Why Choose Aegitek */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Aegitek?
            </h2>
            <p className="text-lg text-gray-600">
              Leading-edge AI solutions built for business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="text-center border-none bg-white hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-200 to-[#189CD2] flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      {/* Use Cases */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Use Cases We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Real-world applications of AI and automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg border-none transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-200 to-[#189CD2] flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-gray-900">{useCase}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Implementation Process */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our AI Implementation Process
            </h2>
            <p className="text-lg text-gray-600">
              From concept to intelligent automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Data assessment and use case identification",
              },
              {
                step: "02",
                title: "Model Design",
                desc: "AI/ML model development and training",
              },
              {
                step: "03",
                title: "Integration",
                desc: "Seamless deployment into existing systems",
              },
              {
                step: "04",
                title: "Optimization",
                desc: "Continuous learning and performance tuning",
              },
            ].map((phase, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg bg-white border-none transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-200 to-[#189CD2] text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{phase.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <CTA></CTA> {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default AiAutomation;
