'use client';

import { Typewriter } from 'react-simple-typewriter';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Custombutton from "@/components/button";
import { useEffect, useState } from 'react';

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const images = [
    "/images/career2.jpeg",
    "/images/career1.jpeg",
    "/images/contact-3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={ref} className="relative isolate min-h-[90vh] overflow-hidden">

      {/* Animated Background Images */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <AnimatePresence>
          <motion.div
            key={images[currentIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${images[currentIndex]})`,
            }}
          >
            <div className="w-full h-full bg-black/50" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex justify-center items-center min-h-[90vh] px-6 lg:px-8">
        <div className="text-center bg-transparent lg:w-[90%]">
          <motion.div
            className="mx-auto max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl font-bold text-white leading-snug sm:leading-[4.2rem] sm:text-6xl">
              <span className="text-[#189CD2]">
                <Typewriter
                  words={['Innovative', 'Intelligent', 'Future-Ready']}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
              <br />
              Technology solutions for the digital age
            </h1>

            <p className="mt-6 text-lg leading-8 text-white">
              Empowering businesses with cutting-edge technology to drive growth, efficiency, and competitive advantage.
            </p>
          </motion.div>

          {/* Animated Button */}
          <motion.div
            className="pt-4 mx-auto w-fit"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          >
            <Custombutton text="Get in Touch" link="/contact" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
