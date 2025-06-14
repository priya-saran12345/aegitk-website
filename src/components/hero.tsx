'use client';

import { ServiceSlider } from '@/components/ServiceSlider';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      className="relative isolate overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/banner-bg.jpg')" }}
      ref={ref}
    >
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      ></div>

      <div className="mx-auto px-6 lg:px-8">
        <div className="mx-auto lg:w-[90%] text-center">
          <motion.div
            className="mx-auto mt-8 max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              <span className="text-[#189CD2]">
                <Typewriter
                  words={['Innovative', 'Intelligent', 'Future-Ready']}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
              <br />
              Technology Solutions for the Digital Age
            </h1>

            <p className="mt-6 text-lg leading-8 text-white">
              Empowering businesses with cutting-edge technology to drive growth, efficiency, and competitive advantage.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
