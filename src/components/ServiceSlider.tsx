'use client';

import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    title: "CUSTOM ERP SOLUTIONS",
    description:
      "We build industry-specific ERP solutions. Our Milk Matrix digitizes procurement, testing, billing, and route planning for the dairy supply chain.",
  },
  {
    title: "ERPNEXT IMPLEMENTATION & CUSTOMIZATION",
    description:
      "Trusted ERPNext consultants for small to mid-sized businesses. Covers inventory, sales, purchase, HR, and accounting.",
  },
  {
    title: "WEB & MOBILE APP DEVELOPMENT",
    description:
      "Responsive web and mobile apps (iOS/Android) that deliver seamless experiences integrated with backend systems.",
  },
  {
    title: "AI, ML & RPA SOLUTIONS",
    description:
      "Predictive analytics, Robotic Process Automation, and AI-driven insights for better decision-making.",
  },
  {
    title: "IT CONSULTING & DIGITAL TRANSFORMATION",
    description:
      "Helping businesses modernize legacy systems, improve data flows, and implement scalable solutions.",
  },
];

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true, // ⛔️ Pauses autoplay on hover
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};

export function ServiceSlider() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="pt-4 pb-6 px-6 lg:px-12" ref={ref}>
      <h2 className="text-3xl w-fit font-bold text-start border-b-2 border-white text-white mb-5">
        Our Services
      </h2>

      <div className="h-full">
        <Slider {...sliderSettings}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-4 h-full"
              initial={{ opacity: 0, y: 40 ,x:-60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
            >
              <div className="h-full flex flex-col justify-between bg-gray-100 p-6 rounded-xl shadow-md min-h-[270px]">
                <div>
                  <div className="text-2xl bg-primary/60 w-fit mx-auto p-3 rounded-lg mb-4">🛠️</div>
                  <h3 className="text-md text-blue font-semibold mb-2 text-center">
                    {service.title}
                  </h3>
                  <p className="text-sm text-center">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
