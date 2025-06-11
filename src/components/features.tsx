import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Code,
  Database,
  Lock,
  BarChart,
  Cloud,
  Cpu,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      name: "Custom Software Development",
      description:
        "Tailored solutions designed to meet your specific business needs and objectives.",
      icon: Code,
    },
    {
      name: "Cloud Solutions",
      description:
        "Scalable, secure, and cost-effective cloud infrastructure and migration services.",
      icon: Cloud,
    },
    {
      name: "Data Analytics",
      description:
        "Transform your data into actionable insights that drive informed decision-making.",
      icon: BarChart,
    },
    {
      name: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your business from evolving threats.",
      icon: Lock,
    },
    {
      name: "Database Management",
      description:
        "Optimize your database performance, security, and reliability.",
      icon: Database,
    },
    {
      name: "AI & Machine Learning",
      description:
        "Harness the power of AI to automate processes and gain competitive advantage.",
      icon: Cpu,
    },
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Core Services</h2>
          <p className="text-lg text-muted-foreground">
            We provide a comprehensive range of technology solutions to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 group">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group/card transition-all duration-300"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 -z-10 rounded-2xl scale-105 opacity-0 group-hover/card:opacity-0 group-hover:opacity-100 bg-blue-100 transition-all duration-300 blur-md" />

              {/* Actual Card */}
              <Card className="bg-white rounded-2xl shadow-md transition-all duration-300 border border-transparent group-hover:border-blue-200">
                <CardHeader>
                  <div className="h-12 w-12 rounded-md bg-blue-600 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-blue-700">
                    {feature.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-700">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
