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

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-16 lg:w-[90%] px-6 mx-auto" ref={ref}>
      <div className="mx-auto px-4">
        {/* Heading & Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 ,x:40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
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

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              {/* Glow effect */}
              <div className="absolute inset-0 -z-10 rounded-2xl scale-105 opacity-0 group-hover:opacity-100 bg-[#189CD2]/20 border-[1px] border-[#189CD2]/30 transition-all duration-300" />

              {/* Card */}
              <Card className="rounded-2xl border-[1px] border-slate-200 z-30 shadow-lg transition-all duration-300 border bg-white border-transparent group-hover:border-[#189CD2]/30">
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
    </div>
  );
}
