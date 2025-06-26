'use client';

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
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Features() {
  const features = [
    {
      name: "Mobile App Development",
      description:
        "We develop mobile apps delivered across Android and iOS devices using tools like Android Studio, Visual Studio and more.",
      icon: Code,
    },
    {
      name: "Web App Development",
      description:
        "We offers a range of development services for the Web, what distinguishes us is our spirit for excellence.",
      icon: Code,
    },
    {
      name: "UI-UX Designing",
      description:
        "Aegitek front-end development experts uses key front-end languages like JavaScript, CSS, HTML5 and standard framework",
      icon: BarChart,
    },
    {
      name: "Software Testing",
      description:
        "Aegitek expert QA team has expertise in doing testing of web and mobile applications which ensures delivery of high-quality software..",
      icon: Cpu,
    },
    {
      name: "Load & Penetration Testing",
      description:
        "Aegitek Load & Performance testing experts perform penetration testing throughout the development lifecycle to detect configuration errors, software bugs, and backdoors that hackers can exploit.",
      icon: Database,
    },
    {
      name: "Automated Testing",
      description:
        "Aegitek automation testing expert has developed robust framework for automation testing which is based on Selenium.",
      icon: Cpu,
    },
    {
      name: "Security",
      description:
        "Aegitek software security expert team ensure the security compliance that meets GDPR, HIPAA, HITECH, PCI, FISMA, ISO 27000, SEC, GLBA, FINRA, NYDFS, NIST 800-171, and other security compliance standards.",
      icon: Lock,
    },
    {
      name: "Business Analysis",
      description:
        "Aegitek uses best Business Analysis practices for software development to bridge a gap between the business needs and the IT team.",
      icon: Cloud,
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-16 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 max-w-[1440px] mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40, x: 40 }}
        animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-[#189CD2]">What</span> we do
        </h2>
        <p className="text-lg text-muted-foreground">
          We provide a comprehensive range of technology solutions to help your business thrive in the digital age.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-col-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1.2,
              delay: 0.3 + index * 0.2,
              ease: "easeOut",
            }}
            className="relative transition-all duration-300 group"
          >
            <div className="absolute inset-0 -z-10 rounded-2xl scale-105 opacity-0 group-hover:opacity-100 bg-[#189CD2]/20 border border-[#189CD2]/30 transition-all duration-300" />

            <Card className="rounded-2xl border border-slate-200 z-30 shadow-lg bg-white group-hover:border-[#189CD2]/30 transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-md bg-[#189CD2]/20 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-[#189CD2]" />
                </div>
                <CardTitle className="text-[#189CD2] text-lg">{feature.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
