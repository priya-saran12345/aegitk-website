"use client";

import Slider from "react-slick";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRightOutlined } from '@ant-design/icons';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Vendor Management System (VMS)",
    image: "/images/slider/erp.png",
    description: `A cloud-hosted solution designed for managing the entire lifecycle of contingent workforce sourcing, procurement, and billing. This system enables businesses to efficiently engage and oversee a diverse range of temporary workers, contractors, and service providers while ensuring compliance with organizational policies. Key features of a VMS typically include:\n
• Supplier and Vendor Management – Centralized profiling and performance tracking of suppliers.\n
• Requisition and Order Management – Streamlined job requisition creation and automated distribution to preferred vendors.\n
• Candidate and Service Procurement – Seamless submission, evaluation, and onboarding of candidates and service providers.\n
• Time & Expense Tracking – Integrated timesheet management with approval workflows for accurate payroll processing.\n
• Billing & Invoicing – Automated vouchering, consolidated invoicing, and financial reconciliation.\n
• Compliance & Reporting – Customizable reports, analytics and dashboards for tracking workforce metrics, costs, and compliance adherence.`
  },
  {
    title: "Case Management System (CMS)",
    image: "/images/slider/erp2.png",
  description: `An integrated case management platform designed to streamline workflows, improve collaboration, and standardize information across multiple data sources. This platform automates information flow, ensuring efficiency, accuracy, and responsiveness throughout the case lifecycle. Key benefits include:\n
• Case Intake & Processing – Standardized workflows for capturing, categorizing, and managing case-related data.\n
• Automated Workflows & Notifications – Rule-based task automation and real-time alerts for improved case progression.\n
• Document & Evidence Management – Secure storage and retrieval of case documents, images, and multimedia evidence.\n
• Collaboration Tools – Role-based access control and integrated communication channels for multi-team coordination.\n
• Analytics & Reporting – Real-time insights, compliance tracking, and customizable dashboards for data-driven decision-making.`
  },
{
  title: "Screening & Admissions Management System",
  image: "/images/slider/erp4.png",
  description: `A web-based platform for centralized screening, admissions, and tracking of individuals in institutional or program-based settings. This solution enhances operational efficiency by providing real-time access to critical data and automating workflows. Features include:\n
• Centralized Screening & Intake Management – Digitized processes for eligibility assessment and admission approval.\n
• Secure Data Storage & Access – Role-based permissions to ensure data privacy and security compliance.\n
• Tracking & Case Progression – Automated monitoring of individuals throughout their engagement with the system.\n
• Integrated Reporting & Compliance Monitoring – Custom MIS reports for regulatory and operational insights.`
},
{
  title: "Program & Compliance Reporting System",
  image: "/images/slider/erp3.png",
  description: `A web-based reporting platform designed for organizations managing regulatory, financial, and programmatic compliance requirements. This system provides structured data collection, automated report generation, and seamless access to key resources. Features include:\n
• Standardized Data Entry Forms – Predefined templates for consistent and accurate data submission.\n
• Automated Compliance Reporting – Configurable reporting tools that ensure adherence to funding and regulatory guidelines.\n
• Centralized Information Repository – Secure document management for policies, guidelines, and financial records.\n
• Multi-User Collaboration – Role-based access and workflow management for teams handling compliance reporting.\n
• Customizable Dashboards & Analytics – Real-time tracking of key performance indicators and compliance metrics.`
}
];

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
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
  const [isOpen, setIsOpen] = useState(false);

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const [activeService, setActiveService] = useState<any>(null);

  const handleOpenModal = (service:any) => {
    setActiveService(service);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setActiveService(null);
  };

  return (
    <div className="pt-4 pb-6 px-6 lg:px-12" ref={ref}>
      <h2 className="text-3xl w-fit font-bold text-start border-b-2 border-white text-white mb-5">
        Our Services
      </h2>

      <div className="h-full">
        <Slider {...sliderSettings}>
          {services.map((service, index) => {
            const truncatedDescription =
              service.description.length > 150
                ? service.description.slice(0, 150) + "..."
                : service.description;

            return (
              <motion.div
                key={index}
                className="p-4 h-full"
                initial={{ opacity: 0, y: 40, x: -60 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: index * 0.2,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <div className="h-full flex flex-col justify-between bg-gray-100 p-4 rounded-xl shadow-md min-h-[300px]">
                  <div className="flex flex-col justify-between h-full">
                    <div className="text-2xl bg-[#189CD2]/20 w-fit mx-auto p-3 rounded-lg mb-4">
                      <Image
                        src={service.image}
                        height={55}
                        width={55}
                        alt="Service"
                      />
                    </div>
                    <h3 className="text-md text-blue font-semibold mb-2 text-center">
                      {service.title}
                    </h3>

                    <div className="text-center">
                      <p
                        className="text-sm cursor-pointer text-muted-foreground"
                        onClick={() => handleOpenModal(service)}
                      >
                        {truncatedDescription}
                      </p>
                              <div className="flex mx-auto  mt-2 justify-center items-center space-x-4">
          <button
           onClick={() => handleOpenModal(service)}
            className="bg-[#189CD2] rounded-full px-6 py-2 flex duration-300 group justify-between gap-2 
          text-black font-medium flex item-center">
            <span className="min-h-[30px] -rotate-45 min-w-[30px] bg-white rounded-full flex justify-center item-center group-hover:rotate-0 duration-300">
              <ArrowRightOutlined className='!text-[#189CD2] text-[18px] text-black ' />
            </span>
            <span className='text-white group-hover:translate-x-2'>
              View
            </span>
          </button>
        </div>

                      {/* <div className="mx-auto w-fit mt-3">
                        <button
                          onClick={() => handleOpenModal(service)}
                          className="bg-[#189CD2] text-white px-4 py-2 rounded hover:bg-[#157fb3] transition"
                        >
                          View
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </Slider>
      </div>

      {/* Global Modal */}
      {isOpen && activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bold mb-4">{activeService?.title ||''}</h2>
{activeService.description.split('\n').map((line:any, idx:number) => (
  <p key={idx} className="text-sm text-left text-gray-700">{line}</p>
))}
          </div>
        </div>
      )}
    </div>
  );
}
