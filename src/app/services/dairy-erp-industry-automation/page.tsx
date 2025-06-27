import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Custombutton from "@/components/button";
// import { Link } from "next/link";
import { 
  Database, 
  Settings, 
  Users, 
  Activity,
  CheckCircle,
  Zap,
  BarChart3,
  Shield
} from "lucide-react";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import Header from "@/components/header";

const DairyErp = () => {
  const features = [
    {
      title: "Milk Procurement Automation",
      icon: Database,
      items: [
        "Member-wise milk data capture (SNF, FAT, quantity)",
        "Integration with digital milk analyzers, weighing scales, and flow meters",
        "Route-wise milk collection and scheduling",
        "Farmer-wise billing & SMS alerts"
      ]
    },
    {
      title: "Milk Pooling Point (MPP) & BMC Operations",
      icon: Activity,
      items: [
        "Temperature monitoring & chilling center control",
        "Auto reconciliation of received vs dispatched quantity",
        "Tank-wise stock management",
        "Real-time data sync to central server"
      ]
    },
    {
      title: "Payments & Billing",
      icon: Users,
      items: [
        "Farmer billing and payment generation (weekly/fortnight/monthly)",
        "Transporter-wise payment reports",
        "Rate chart configuration based on quality and shift"
      ]
    },
    {
      title: "Inventory & Plant Operations",
      icon: Settings,
      items: [
        "GRN, stock entry, inter-location transfers",
        "Batch tracking and lot-wise costing",
        "Finished goods dispatch and invoicing"
      ]
    },
    {
      title: "Dashboards & Analytics",
      icon: BarChart3,
      items: [
        "Centralized dashboards for union, federation, and plant",
        "Role-based MIS reports: procurement, stock, payment, sales",
        "Alerts on quality variance, non-pickup, and equipment breakdown"
      ]
    }
  ];

  const benefits = [
    { icon: Zap, title: "Reduced manual dependency", desc: "Integrated IoT devices eliminate paper-based entries" },
    { icon: Activity, title: "Real-time monitoring", desc: "Track milk from source to plant across shifts" },
    { icon: CheckCircle, title: "Error-free billing", desc: "Auto calculations based on actual parameters" },
    { icon: BarChart3, title: "Actionable insights", desc: "Visual reports for management decision-making" },
    { icon: Shield, title: "Centralized control", desc: "Syncs all MPPs, BMCs, and Plants in real time" }
  ];

  const idealFor = [
    "Dairy Federations & Milk Unions",
    "Private Dairy Companies", 
    "Milk Producer Companies (MPCs)",
    "Chilling Centers & BMC Operators"
  ];

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <Header/>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Dairy ERP & Industry Automation
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Empowering the Dairy Value Chain with Intelligence, Efficiency & Control. 
            From procurement to production and distribution, our integrated platform optimizes every node of the dairy supply chain.
          </p>
                    <div className="pt-4 mx-auto w-fit">
                      <Custombutton text="Get in Touch" link="/contact" />
                    </div>
          
          {/* <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Request Demo
            </Button>
            <Button size="lg" variant="outline">
              Download Brochure
            </Button>
          </div> */}
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features of Our Dairy ERP Solution</h2>
            <p className="text-lg text-gray-600">Comprehensive modules designed for the dairy industry</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg border-none transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dairy Industry Automation Benefits</h2>
            <p className="text-lg text-gray-600">Transform your operations with intelligent automation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center bg-white border-none hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration & Ideal For */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Integration */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Integration Capabilities</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Compatible with ERPNext, SAP, and legacy systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>API-based architecture for third-party tools</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Aadhaar-enabled farmer onboarding and attendance modules (optional)</span>
                </div>
              </div>
            </div>

            {/* Ideal For */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ideal For</h2>
              <div className="space-y-3">
                {idealFor.map((item, index) => (
                  <Badge key={index} variant="secondary" className="block w-fit text-sm py-2 px-3">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
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

export default DairyErp;
