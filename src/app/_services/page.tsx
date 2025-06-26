import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored software solutions designed to address your specific business challenges and objectives.",
      details:
        "Our team of experienced developers creates custom applications that streamline operations, enhance customer experiences, and drive business growth. From concept to deployment, we handle every aspect of the development process.",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable, secure, and cost-effective cloud infrastructure and migration services.",
      details:
        "We help businesses leverage the power of cloud computing to improve agility, reduce costs, and enhance security. Our cloud experts design, implement, and manage solutions across all major cloud platforms.",
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights that drive informed decision-making.",
      details:
        "Our data analytics services help you collect, process, and analyze data to uncover valuable insights. We build dashboards and reporting tools that make complex data accessible and useful for your business.",
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business from evolving threats.",
      details:
        "We provide end-to-end security services including risk assessment, security architecture design, implementation, and ongoing monitoring to safeguard your critical assets and data.",
    },
    {
      title: "AI & Machine Learning",
      description: "Harness the power of artificial intelligence to automate processes and gain competitive advantage.",
      details:
        "Our AI specialists develop intelligent solutions that automate repetitive tasks, predict outcomes, and uncover patterns in your data, helping you stay ahead in your industry.",
    },
    {
      title: "IT Consulting",
      description: "Strategic technology guidance to align your IT investments with business objectives.",
      details:
        "Our consultants work with you to develop technology roadmaps, optimize IT operations, and implement best practices that drive efficiency and innovation across your organization.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive technology solutions tailored to your business needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="h-full">
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{service.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
