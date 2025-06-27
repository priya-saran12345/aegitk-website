import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Search, 
  Users,
  Monitor,
  Mail,
  CheckCircle,
  BarChart3,
  Star,
  Activity
} from "lucide-react";
import Custombutton from "@/components/button";
import Header from "@/components/header";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

const DigitalMarketing = () => {
  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      icon: Search,
      description: "We optimize your website for search engines to improve your ranking, traffic, and authority.",
      features: [
        "On-page SEO: Keyword optimization, meta tags, schema, image SEO",
        "Off-page SEO: Backlink building, content syndication, guest posting", 
        "Technical SEO: Site speed, mobile-friendliness, crawlability",
        "Local SEO: Google My Business, map listings, reviews"
      ]
    },
    {
      title: "Social Media Marketing (SMM)", 
      icon: Users,
      description: "Engage your audience and build brand loyalty on platforms like Facebook, Instagram, LinkedIn, and X (Twitter).",
      features: [
        "Content calendar planning & creative design",
        "Paid social media campaigns",
        "Audience targeting & remarketing"
      ]
    },
    {
      title: "Google Ads & Paid Campaigns (PPC)",
      icon: Monitor,
      description: "Run highly targeted ad campaigns that convert visitors into leads and customers.",
      features: [
        "Search ads, display ads, video ads",
        "Keyword research & competitor analysis",  
        "ROI-focused campaign setup & optimization"
      ]
    },
    {
      title: "Content Marketing & Blogging",
      icon: Activity,
      description: "We create compelling, SEO-rich content that positions your brand as an industry authority.",
      features: [
        "Website content & landing pages",
        "Blogs & articles",
        "Infographics, eBooks, and more"
      ]
    },
    {
      title: "Email Marketing & Automation",
      icon: Mail,
      description: "Keep your customers engaged with drip campaigns, newsletters, and behavior-based automation.",
      features: []
    }
  ];

  const whyChoose = [
    { icon: Search, title: "Proven SEO results", desc: "With traffic and ranking improvement" },
    { icon: BarChart3, title: "Data-driven targeting", desc: "With measurable KPIs" },
    { icon: Star, title: "Creative design + content", desc: "Under one roof" },
    { icon: Activity, title: "Transparent reporting", desc: "With real-time dashboards" },
    { icon: Users, title: "Dedicated strategist", desc: "For your brand" }
  ];

  const industries = [
    "Dairy & FMCG",
    "Retail & E-Commerce",
    "Real Estate & Construction", 
    "Healthcare & Education",
    "IT & SaaS",
    "B2B and B2C Enterprises"
  ];

  return (
    <div className="min-h-screen ">
      {/* Header */}
    <Header/>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-green-50 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Digital Marketing & SEO
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            We help businesses grow online through powerful digital marketing strategies and result-driven SEO. 
            From increasing your search engine visibility to running targeted ad campaigns — 
            we create digital experiences that drive traffic, leads, and revenue.
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
            <p className="text-lg text-gray-600">Comprehensive digital marketing solutions</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg border-none transition-shadow h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-teal-600" />
                      </div>
                      <span className="text-lg">{service.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                    {service.features.length > 0 && (
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
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
            <p className="text-lg text-gray-600">Results that speak for themselves</p>
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

      {/* Industries We Serve */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600">Tailored marketing strategies across sectors</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <p className="text-sm font-medium text-gray-700">{industry}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Process */}
      <section className="py-16 bg-blue-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Marketing Process</h2>
            <p className="text-lg text-gray-600">Systematic approach to digital growth</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Analysis", desc: "Market research and competitor analysis" },
              { step: "02", title: "Strategy", desc: "Custom marketing plan and channel selection" },
              { step: "03", title: "Execution", desc: "Campaign implementation and content creation" },
              { step: "04", title: "Optimization", desc: "Performance monitoring and continuous improvement" }
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

export default DigitalMarketing;
