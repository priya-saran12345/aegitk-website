// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
export default function ContactPage() {
  return (
    <>
      <Header></Header>
      <div className=" ">
        {/* Hero Section */}
        <section className="relative ">
        <div
  className="bg-cover bg-center h-[40vh] bg-no-repeat"
  style={{ backgroundImage: "url('/images/contact.jpg')" }}
>
  <div className="bg-black/50 h-full px-4">
    {/* Centering content */}
    <div className="container h-full flex items-center justify-center mx-auto px-4">
      <div className="max-w-4xl text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-[#189CD2]">C</span>ontact Us
        </h1>
        <p className="text-xl opacity-90">
          We are here to help. Reach out to our team for any inquiries
          or to start your next project.
        </p>
      </div>
    </div>
  </div>
</div>


          {/* <div className="absolute bottom-0 left-0 w-full h-16 bg-white" 
        ></div> */}
        </section>

        <div className="lg:w-[90%] mx-auto px-6  py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 px-4 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <Card
                  className="p-6 group  hover:bg-[#BFDBFF]/20 duration-300 border-t-[1px] border-slate-200 
               shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 group-hover:bg-white duration-300 p-2 rounded-full">
                      <MapPin className="h-6 w-6 text-[#189CD2]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 border-b-[2px] border-[#189CD2] w-fit">
                        Our Address
                      </h3>
                      <p className="text-gray-600">
                        Aegitek Solutions Private Limited
                        <br />
                        Plot No 117, Pocket 4 Block B, Sector 23,
                        <br />
                        Opposite Pillor no 390 Yashobhumi,
                        <br />
                        Dwarka, New Delhi 110075
                      </p>
                    </div>
                  </div>
                </Card>
                <Card
                  className="p-6 group  hover:bg-[#BFDBFF]/20 duration-300 border-t-[1px] border-slate-200 
               shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 group-hover:bg-white duration-300 p-2 rounded-full">
                      <Clock className="h-6 w-6 text-[#189CD2]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 border-b-[2px] border-[#189CD2] w-fit">
                        Business Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday & Sunday: Closed
                      </p>
                    </div>
                  </div>
                </Card>

                <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Card
                    className="p-6 group  hover:bg-[#BFDBFF]/20 duration-300 border-t-[1px] border-slate-200 
               shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 group-hover:bg-white duration-300 p-2 rounded-full">
                        <Phone className="h-6 w-6 text-[#189CD2]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2 border-b-[2px] border-[#189CD2] w-fit">
                          Phone
                        </h3>
                        <p className="text-gray-600">
                          <Link
                            href="tel:+919119995726"
                            className="hover:text-blue-600 transition-colors"
                          >
                            +91-9119995726
                          </Link>
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card
                    className="p-6 group  hover:bg-[#BFDBFF]/20 duration-300 border-t-[1px] border-slate-200 
               shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 group-hover:bg-white duration-300 p-2 rounded-full">
                        <Mail className="h-6 w-6 text-[#189CD2]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2 border-b-[2px] border-[#189CD2] w-fit">
                          Email
                        </h3>
                        <p className="text-gray-600">
                          <Link
                            href="mailto:info@aegitek.com"
                            className="hover:text-blue-600 transition-colors"
                          >
                            info@aegitek.com
                          </Link>
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            {/* <div className="lg:col-span-2">
            <Card className="p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="John Doe" 
                      required 
                      className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      required 
                      className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      placeholder="+91 98765 43210" 
                      className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      placeholder="How can we help?" 
                      required 
                      className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Tell us about your project or inquiry..." 
                    rows={6} 
                    required 
                    className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                    I agree to the <Link href="/privacy-policy" className="text-blue-600 hover:underline">privacy policy</Link>
                  </label>
                </div>

                <Button type="submit" className="w-full md:w-auto bg-blue-600 hover:bg-blue-700">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </Card>
          </div> */}
            <div className="w-full shadow-lg p-5 rounded-xl border-t-[1px] border-slate-200 mx-auto">
              <h2 className="text-2xl font-bold mb-8 border-b-[2px] border-[#189CD2] w-fit">
                Find Us..
              </h2>
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.2739256249356!2d77.0472!3d28.5912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM1JzI4LjMiTiA3N8KwMDInNDkuOSJF!5e0!3m2!1sen!2sin!4v1623825283122!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Aegitek office location"
                ></iframe>
              </div>
              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="bg-blue-100 p-3 rounded-full hover:bg-black group  transition-colors"
                  >
                    <svg
                      className="h-5 w-5 text-blue-600 group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="bg-blue-100 group p-3 rounded-full hover:bg-black  transition-colors"
                  >
                    <svg
                      className="h-5 w-5 text-blue-600 group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="bg-blue-100 p-3 rounded-full group hover:bg-black  transition-colors"
                  >
                    <svg
                      className="h-5 w-5 group-hover:text-white text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="bg-blue-100 p-3 group rounded-full hover:bg-black  transition-colors"
                  >
                    <svg
                      className="h-5 w-5 group-hover:text-white text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        {/* <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Find Us</h2>
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="
                https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.2739256249356!2d77.0472!3d28.5912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM1JzI4LjMiTiA3N8KwMDInNDkuOSJF!5e0!3m2!1sen!2sin!4v1623825283122!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Aegitek office location"
              ></iframe>
            </div>
          </div>
        </div>
      </section> */}
      </div>
      <Footer />
    </>
  );
}
