"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ServerCog,
  LayoutList,
  Smartphone,
  Settings,
  Bot,
  Building2,
  Megaphone,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
// import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Features() {
  // const Router = useRouter();
  const features = [
    {
      name: "Dairy ERP & Industry Automation",
      description:
        "At Aegitek Solutions Pvt. Ltd., we specialize in delivering end-to-end digital transformation for the dairy sector through our powerful Milk Matrix Dairy ERP and automation solutions. From procurement to production and distribution, our integrated platform optimizes every node of the dairy supply chain.",
      icon: ServerCog,
      link:'/services/dairy-erp-industry-automation',
    },
    {
      name: "Custom Software Development",
      description:
        "At Aegitek Solutions Pvt. Ltd., we specialize in building custom software solutions tailored precisely to your business needs. Whether you're a growing enterprise, an innovative startup, or an established organization looking to digitize your operations — we help you streamline workflows, automate tasks, and scale faster with smart, secure, and scalable software.",
      icon: LayoutList,
      link:"/services/custom-software-development"
    },
    {
      name: "Web & Mobile App Development",
      description:
        "At Aegitek Solutions Pvt. Ltd., we craft fast, reliable, and visually stunning web and mobile applications that bring your digital ideas to life. Whether you’re building a customer-facing app, an internal dashboard, or a next-gen product — we deliver scalable solutions that run smoothly on every device.",
      icon: Smartphone,
      link:"/services/web-mobile-app-development"
    },
    {
      name: "IT Consultancy & System Integration",
      description:
        "At Aegitek Solutions Pvt. Ltd., we help businesses transform their digital infrastructure by providing expert IT consultancy and seamless system integration services. From architecture planning to enterprise application connectivity, we ensure your IT ecosystem is secure, scalable, and future-ready.",
      icon: Settings,
      link:"/services/it-consultancy-system-integration"
    },

    {
      name: "AI, ML & Process Automation (RPA)",
      description:
        "At Aegitek Solutions Pvt. Ltd., we harness the power of Artificial Intelligence (AI), Machine Learning (ML), and Robotic Process Automation (RPA) to help businesses unlock efficiency, accuracy, and intelligent decision-making. From automating repetitive tasks to predictive analytics — we enable smarter operations at every level.",
      icon: Bot,
      link:"/services/ai-ml-process-automation-rpa"
    },
    {
      name: "Digital Marketing & SEO",
      description:
        "At Aegitek Solutions Pvt. Ltd., we help businesses grow online through powerful digital marketing strategies and result-driven SEO. From increasing your search engine visibility to running targeted ad campaigns — we create digital experiences that drive traffic, leads, and revenue.",
      icon: Megaphone,
      link:"/services/digital-marketing-seo"
    },
    {
      name: "Training & Internship Programs",
      description:
"At Aegitek Solutions Pvt. Ltd., we believe in empowering the next generation of tech talent through hands-on training and real-world internship opportunities. Our structured programs are designed to bridge the gap between academic knowledge and industry expectations — equipping young professionals with the skills they need to thrive.",
      icon: Megaphone,
      link:"/services/training-internship-programs"
    },
    {
      name: "SAP S/4HANA Consultation & Implementation",
      description:
        "At Aegitek Solutions Pvt. Ltd., we help businesses unlock the full potential of SAP S/4HANA — the next-generation intelligent ERP. From initial assessment and roadmap planning to end-to-end implementation, migration, and post-go-live support, our SAP experts ensure your digital transformation is efficient, aligned, and future-ready.",
      icon: Building2,
      link:"/services/sap-consultation-implementation"
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div
      className="py-16 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 max-w-[1440px] mx-auto"
      ref={ref}
    >
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
          We provide a comprehensive range of technology solutions to help your
          business thrive in the digital age.
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
                <CardTitle className="text-[#189CD2] text-lg">
                  {feature.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  {expandedIndex === index
                    ? feature.description
                    : `${feature.description.slice(0, 200)}... `}
                  <button
                    className="text-sm text-[#189CD2] underline ml-1"
                    onClick={() => toggleDescription(index)}
                  >
                    {expandedIndex === index ? "Show less" : "Read more"}
                  </button>
                </CardDescription> 
                <Link href={feature.link}>
                     <button
                  // onClick={() => {
                  //   Router.push(feature.link);
                  // }}
                  className="bg-[#189CD2] rounded-full cursor-pointer mt-4 px-6 py-2 flex duration-300 group justify-between gap-2 
          text-black font-medium flex item-center"
                >
                  <span className="min-h-[30px] -rotate-45 min-w-[30px] bg-white rounded-full flex justify-center item-center group-hover:rotate-0 duration-300">
                    <ArrowRightOutlined className="!text-[#189CD2] text-[18px] text-black " />
                  </span>
                  <span className="text-white duration-300 group-hover:translate-x-2">
                    View More
                  </span>
                </button>
                </Link>          
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
