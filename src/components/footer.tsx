import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { MapPin, Mail, Phone } from "lucide-react";
export default function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center border-t-[1px] border-t-[#189CD2] bg-no-repeat "
      // style={{
      //   backgroundImage:
      //     "url('https://images.unsplash.com/photo-1581091870621-3a6b6b39a7a7?auto=format&fit=crop&w=1400&q=80')",
      // }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  z-0" />
      {/* Content */}
      <div className="relative z-10 lg:w-[90%] mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/aegiteklogo.png"
                alt="Aegitek Logo"
                width={120}
                height={40}
              />
            </div>
            <p className="text-muted-foreground mb-4">
              Innovative technology solutions for businesses of all sizes.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, link: "" },
                { icon: Twitter, link: "" },
                { icon: Linkedin, 
                  link: "https://www.linkedin.com/company/aegitek-software-and-services" },
                {
                  icon: Instagram,
                  link: "https://www.instagram.com/aegitek_solutions/",
                },
              ].map((Icon, idx) => (
                <Link
                  href={Icon.link}
                  key={idx}
                  className="group relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#E6F4FA] hover:bg-[#189CD2] transition-all duration-300"
                >
                  <Icon.icon className="h-5 w-5 text-[#189CD2] group-hover:text-white transition-colors duration-300" />
                  <span className="sr-only">Social Link</span>
                </Link>
              ))}
            </div>
          </div>
          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                {text:"About US",link:"about"},
                {text:"Career",link:"career"},
                {text:"Contact US",link:"contact"}
               ].map((text, index) => (
                <li key={index}>
                  <Link
                    href={`/${text.link}`}
                    className="relative group text-muted-foreground hover:text-blue-400 transition-colors duration-300"
                  >
                    {text.text}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                {text:"Dairy ERP & Industry Automation",link:"/dairy-erp-industry-automation"},
                {text:"Custom Software Development",link:"/custom-software-development"},
                {text:"Web & Mobile App Development",link:"/web-mobile-app-development"},
                {text:"IT Consultancy & System Integration",link:"/it-consultancy-system-integration"},
                {text:"AI, ML & Process Automation (RPA)",link:"/ai-ml-process-automation-rpa"},
                {text:"Digital Marketing & SEO",link:"/digital-marketing-seo"},
                {text:"Training & Internship Programs",link:"/training-internship-programs"},
                {text:"SAP S/4HANA Consultation & Implementation",link:"/sap-consultation-implementation"},
              ].map((text, index) => (
                <li key={index}>
                  <Link
                    href={`/services${text.link}`}
                    className="relative group text-muted-foreground hover:text-blue-400 transition-colors duration-300"
                  >
                    {text.text}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-muted-foreground space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6  mt-1" />
                <p className="text-base leading-relaxed">
                  <strong>Aegitek Solutions Private Limited</strong>
                  <br />
                  Plot No. 117, Pocket 4, Block B, Sector 23,
                  <br />
                  Opposite Pillar No. 390, Yashobhumi, Dwarka,
                  <br />
                  New Delhi - 110075
                </p>
              </div>
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <a
                  href="mailto:info@aegitek.com"
                  className="hover:text-blue-400 transition"
                >
                  info@aegitek.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <a
                  href="tel:+15551234567"
                  className="hover:text-blue-400 transition"
                >
                  +91-9119995726
                </a>
              </p>
            </address>
          </div>
        </div>
        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t-[1px] border-slate-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Aegitek. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (text, index) => (
                <Link
                  key={index}
                  href={`/${text.toLowerCase().replace(/\s+/g, "")}`}
                  className="relative group text-sm text-muted-foreground hover:text-blue-400 transition-colors duration-300"
                >
                  {text}
                  <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
