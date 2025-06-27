import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
import { 
  Book, 
  Users,
  Star,
  CheckCircle,
  Code,
  Monitor,
  // Settings,
  Activity
} from "lucide-react";
import Header from "@/components/header";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

const Training = () => {
  const programs = [
    {
      title: "Industry-Oriented Training",
      icon: Book,
      description: "Get mentored by experienced professionals and work on real-time projects that reflect the demands of today's IT and digital industries.",
      courses: [
        "Programming Languages (Python, JavaScript, Java, etc.)",
        "Full-Stack Web Development",
        "Mobile App Development (Flutter, React Native, Android)",
        "ERP & CRM Implementation", 
        "AI, ML, and Data Science",
        "Digital Marketing & SEO",
        "SAP S/4HANA & RPA Tools"
      ]
    },
    {
      title: "Internship Opportunities", 
      icon: Users,
      description: "Our internship program offers in-office and remote options, allowing students and freshers to gain practical experience.",
      courses: [
        "Software Development",
        "UI/UX Design",
        "QA & Testing",
        "Business Analysis",
        "Digital Marketing",
        "Project Coordination"
      ]
    },
    {
      title: "Certification & Placement Support",
      icon: Star,
      description: "Upon successful completion, interns receive an experience certificate, project letter, and career guidance to pursue job opportunities within Aegitek or other leading companies.",
      courses: []
    }
  ];

  const whyChoose = [
    { icon: Users, title: "Expert mentorship", desc: "From industry practitioners" },
    { icon: Code, title: "Real-time project exposure", desc: "Hands-on learning experience" },
    { icon: Star, title: "Recognized certification", desc: "Industry-acknowledged credentials" },
    { icon: Monitor, title: "Flexible formats", desc: "Online/offline learning options" },
    { icon: Activity, title: "Internship-to-job pipeline", desc: "For top performers" }
  ];

  const eligibility = [
    "B.Tech / BCA / MCA / M.Tech / MBA students",
    "Final-year students looking for project internships",
    "Recent graduates seeking practical IT experience", 
    "Digital marketing and business development aspirants"
  ];

  const highlights = [
    { label: "Duration", value: "4 to 12 weeks (customizable)" },
    { label: "Format", value: "Online / Onsite" },
    { label: "Schedule", value: "Weekday / Weekend batches" }
  ];

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <Header/>
      {/* Hero Section */}
      <section className="py-16  bg-blue-50  px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Training & Internship Programs
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            We believe in empowering the next generation of tech talent through hands-on training and real-world internship opportunities. 
            Our structured programs are designed to bridge the gap between academic knowledge and industry expectations — 
            equipping young professionals with the skills they need to thrive.
          </p>

        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600">Comprehensive training and internship opportunities</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card key={index} className="hover:shadow-lg border-blue-600 transition-shadow h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-lg">{program.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed mb-4">{program.description}</p>
                    {program.courses.length > 0 && (
                      <ul className="space-y-2">
                        {program.courses.map((course, courseIndex) => (
                          <li key={courseIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{course}</span>
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
            <h2 className="text-3xl font-bold  text-gray-900 mb-4">Why Choose Aegitek?</h2>
            <p className="text-lg text-gray-600">Launching careers with practical skills</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="text-center border-none bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-4">
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

      {/* Who Can Apply */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Can Apply?</h2>
            <p className="text-lg text-gray-600">Open to aspiring tech professionals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eligibility.map((criteria, index) => (
              <Card key={index} className="hover:shadow-lg border-blue-600 transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="font-medium text-gray-900">{criteria}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16 bg-blue-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Highlights</h2>
            <p className="text-lg text-gray-600">Flexible and comprehensive learning experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center bg-white border-none hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{highlight.label}</h3>
                  <p className="text-gray-600">{highlight.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-lg text-gray-600">Simple steps to start your journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Apply", desc: "Submit your CV and cover letter" },
              { step: "02", title: "Review", desc: "Our team reviews your application" },
              { step: "03", title: "Interview", desc: "Brief discussion about your goals" },
              { step: "04", title: "Start", desc: "Begin your training journey" }
            ].map((phase, index) => (
              <Card key={index} className="text-center border-blue-600 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-50 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
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
<CTA></CTA>
<Footer></Footer>
      {/* CTA Section */}
    </div>
  );
};

export default Training;
