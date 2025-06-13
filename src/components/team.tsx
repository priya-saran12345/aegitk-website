'use client';

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import type { Variants } from 'framer-motion';

const cardVariants:Variants= {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const contentVariants:Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Team() {
  const team = [
    {
      name: "Alex Morgan",
      role: "CEO & Founder",
      bio: "With over 20 years of experience in technology leadership, Alex founded Aegitek with a vision to help businesses leverage technology for growth.",
      avatar: "AM",
    },
    {
      name: "Taylor Chen",
      role: "CTO",
      bio: "Taylor leads our technical strategy and ensures we stay at the cutting edge of technology to deliver innovative solutions for our clients.",
      avatar: "TC",
    },
    {
      name: "Jordan Smith",
      role: "Head of Development",
      bio: "Jordan oversees our development team, ensuring we deliver high-quality, scalable solutions that meet our clients' needs.",
      avatar: "JS",
    },
    {
      name: "Casey Williams",
      role: "Head of Design",
      bio: "Casey brings a user-centered approach to design, creating intuitive and engaging experiences for our clients' customers.",
      avatar: "CW",
    },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setStartAnimation(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section className="lg:w-[90%] mx-auto px-6 py-16" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={startAnimation ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#189CD2]">Meet</span> Our Team
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={startAnimation ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Our team of experts is passionate about technology and committed to your success.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={startAnimation ? "visible" : "hidden"}
              custom={index}
            >
              <Card className="border-0 shadow-sm h-full">
                <CardContent className="pt-6 text-center">
                  <motion.div
                    className="relative mx-auto z-20 flex items-end justify-center rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 xl:w-52 xl:h-52 
                    bg-black/20 hover:bg-[#D4ECF7] group transition-all duration-300 ease-in-out overflow-visible mb-4"
                    variants={contentVariants}
                    custom={index}
                  >
                    <div className="grayscale hover:grayscale-0 inset-0 rounded-full overflow-hidden top-2 group-hover:top-0 transition-all duration-200 ease-in-out relative w-full h-full">
                      <Image
                        src="/images/aegiteklogo.jpg"
                        alt={`Profile image of ${member.name}`}
                        width={145}
                        height={130}
                        className="object-cover transition-all duration-200 ease-in-out rounded-full"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>

                  <motion.h3
                    className="font-bold text-lg"
                    variants={contentVariants}
                    custom={index + 1}
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p
                    className="text-sm text-primary mb-2"
                    variants={contentVariants}
                    custom={index + 2}
                  >
                    {member.role}
                  </motion.p>
                  <motion.p
                    className="text-sm text-muted-foreground"
                    variants={contentVariants}
                    custom={index + 3}
                  >
                    {member.bio}
                  </motion.p>
                </CardContent>

                <CardFooter className="justify-center space-x-4">
                  <motion.div
                    className="bg-[#189CD2]/20 hover:bg-black duration-300 hover:text-white rounded-full p-3"
                    variants={contentVariants}
                    custom={index + 4}
                  >
                    <Link href="#">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </motion.div>
                  <motion.div
                    className="bg-[#189CD2]/20 hover:bg-black duration-300 hover:text-white rounded-full p-3"
                    variants={contentVariants}
                    custom={index + 5}
                  >
                    <Link href="#">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
