'use client';

import Image from "next/image";
import CustomButton from "@/components/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "We begin by understanding your business objectives, challenges, and requirements. Our team works closely with you to define project scope, timeline, and success metrics.",
    points: [
      "In-depth business analysis",
      "Requirements gathering",
      "Project roadmap development",
    ],
    image: "https://aegitek.com/img/vms-new1.jpg",
  },
  {
    number: "02",
    title: "Design & Development",
    description:
      "Our experienced designers and developers work collaboratively to create solutions that are both visually appealing and functionally robust.",
    points: [
      "User-centered design approach",
      "Agile development methodology",
      "Regular progress updates",
    ],
    image: "https://aegitek.com/img/vms-new1.jpg",
  },
  {
    number: "03",
    title: "Testing & Deployment",
    description:
      "We conduct thorough testing to ensure your solution meets the highest standards of quality, security, and performance before deploying to production.",
    points: [
      "Comprehensive quality assurance",
      "Security and performance testing",
      "Smooth deployment process",
    ],
    image: "https://aegitek.com/img/vms-new1.jpg",
  },
];

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="bg-gray-50">
      <section className="py-16 lg:w-[90%] mx-auto px-6 lg:px-10 bg-gray-50">
        <div className="mx-auto text-center mb-12">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <span className="text-[#189CD2]">How</span> We Work
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Our proven methodology ensures successful outcomes for every project.
          </motion.p>
        </div>

        <div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          ref={ref}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 + index * 0.2, ease: "easeOut" }}
            >
              {/* Number Badge */}
              <motion.div
                className="absolute top-4 left-4 z-20 border-2 border-white w-10 h-10 rounded-full bg-[#189CD2] text-white flex items-center justify-center font-bold shadow-md"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              >
                {service.number}
              </motion.div>

              {/* Image */}
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2 text-sm mb-4 text-gray-700">
                  {service.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex bg-slate-100 p-2 rounded-lg items-start"
                    >
                      <span className="mr-2 text-[#189CD2]">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <CustomButton link="contact" text="Read More" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
