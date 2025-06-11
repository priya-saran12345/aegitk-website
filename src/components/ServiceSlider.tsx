"use client"; // Only if using app router (Next.js 13+)
import Slider from 'react-slick'
// import dynam/ic from "next/dynamic";x`
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const Slider = dynamic(() => import("react-slick"), { ssr: false }); // ⛔ Prevent SSR issues

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
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:true,
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
  return (
    <div className=" pt-16 pb-6 px-6 lg:px-12">
      <h2 className="text-3xl w-fit font-bold text-start border-b-2 border-white text-white  mb-10">Our Services</h2>
      <Slider {...sliderSettings}>
        {services.map((service, index) => (
    <div key={index} className="px-4 min-h-[220px] h-[200px] h-inherit">
      <div className="h-full flex flex-col justify-between bg-gray-100 p-6 rounded-xl shadow-md">
        <div>
          <div className="text-2xl mb-4">🛠️</div>
          <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-700 text-sm">{service.description}</p>
        </div>
      </div>
    </div>
        ))}
      </Slider>
    </div>
  );
}
