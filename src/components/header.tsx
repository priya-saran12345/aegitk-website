"use client";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon, ChevronDown } from "lucide-react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Custombutton from "@/components/button";
import Link from "next/link";
import Image from "next/image";
export default function Header() {
  // const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const menuItems = [
    { key: "about", label: "About Us", link: "/about" },
    { key: "career", label: "Career", link: "/career" },
    { key: "contact", label: "Contact", link: "/contact" },
  ];

  const serviceItems = [
    {
      key: "Dairy ERP & Industry Automation",
      label: "Dairy ERP & Industry Automation",
      link: "/services/dairy-erp-industry-automation",
    },
    {
      key: "Custom Software Development",
      label: "Custom Software Development",
      link: "/services/custom-software-development",
    },
    {
      key: "Web & Mobile App Development",
      label: "Web & Mobile App Development",
      link: "/services/web-mobile-app-development",
    },
    {
      key: "IT Consultancy & System Integration",
      label: "IT Consultancy & System Integration",
      link: "/services/it-consultancy-system-integration",
    },
    {
      key: "AI, ML & Process Automation (RPA)",
      label: "AI, ML & Process Automation (RPA)",
      link: "/services/ai-ml-process-automation-rpa",
    },
    {
      key: "Digital Marketing & SEO",
      label: "Digital Marketing & SEO",
      link: "/services/digital-marketing-seo",
    },
    {
      key: "Training & Internship Programs",
      label: "Training & Internship Programs",
      link: "/services/training-internship-programs",
    },
    {
      key: "SAP S/4HANA Consultation & Implementation",
      label: "SAP S/4HANA Consultation & Implementation",
      link: "/services/sap-consultation-implementation",
    },
  ];

  // const handleNavigate = (link: string) => {
  //   navigate(link);
  //   setMobileMenuOpen(false);
  // };

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-slate-200 w-full">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link href={"/"}>
            <button className="flex items-center">
              <Image
                src="/images/aegiteklogo.jpg"
                alt="aegitek logo"
                height={72}
                width={72}
                className="object-contain"
              />
            </button>
          </Link>
        </div>
        {/* Desktop Navigation */}
        <div className="flex gap-4">
          <div className="hidden lg:flex flex-1 justify-center ml-8">
            <nav className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link href={item.link} key={item.key}>
                  <button
                    key={item.key}
                    className="relative text-black transition-colors duration-200 hover:text-blue-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.label}
                  </button>
                </Link>
              ))}

              {/* Services Dropdown */}
              <DropdownMenu>
<DropdownMenuTrigger
  className="relative flex items-center gap-1 text-black hover:text-blue-600 transition-colors duration-200 focus:outline-none after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
>
  Services
  <ChevronDown className="h-4 w-4" />
</DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white border border-gray-200 shadow-lg">
                  {serviceItems.map((service) => (
                    <Link href={service.link} key={service.key}>
                      <DropdownMenuItem
                        // onClick={() => handleNavigate(service.link)}
                        className="cursor-pointer border-b-[1px] border-blue-100 hover:bg-gray-50 focus:bg-gray-50"
                      >
                        {service.label}
                      </DropdownMenuItem>
                    </Link>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>
          {/* Desktop Contact Button */}
          <div className="hidden sm:block">
            <Custombutton text="Get in Touch" link="/contact" />
          </div>
        </div>
        {/* Mobile Menu Sheet Trigger */}
        <div className="lg:hidden !bg-white flex items-center gap-3">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className="text-black">
                <MenuIcon className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[260px] bg-white px-4 sm:w-[340px]"
            >
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <Image
                    src="/images/aegiteklogo.jpg"
                    alt="logo"
                    width={56}
                    height={56}
                  />
                </SheetTitle>
              </SheetHeader>

              <div className="mt-4 space-y-4">
                {menuItems.map((item) => (
                  <Link href={item.link} key={item.key}>
                    <button
                      // onClick={() => handleNavigate(item.link)}
                      className="block w-full border-b-[1px]  text-left text-black text-sm font-medium border-b border-gray-200 pb-2 hover:text-blue-600 transition-colors"
                    >
                      {item.label}
                    </button>
                  </Link>
                ))}

                {/* Mobile Services Section */}
                <div className="border-b border-gray-200 pb-2">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full text-left text-black text-sm font-medium hover:text-blue-600 transition-colors"
                  >
                    Services
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileServicesOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      {serviceItems.map((service) => (
                        <Link href={service.link} key={service.key}>
                          <button
                            // onClick={() => handleNavigate(service.link)}
                            className="block w-full text-left border-b-[1px] border-blue-100 py-2 text-gray-600 text-sm hover:text-blue-600 transition-colors"
                          >
                            {service.label}
                          </button>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4">
                  <Custombutton text="Get in Touch" link="/contact" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
