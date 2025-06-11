// import Link from "next/link"
// import { Button } from "@/components/ui/button"
import {ServiceSlider} from '@/components/ServiceSlider'
export default function Hero() {
  return (
<div
  className="relative isolate overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: "url('/images/banner-bg.jpg')" }}
>
    <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >

      </div>
      <div className="mx-auto  px-6  lg:px-8">
        <div className="mx-auto lg:w-[75%] text-center">
          <div className=' mx-auto mt-8 max-w-2xl'>


          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
             <span className="text-[#189CD2]">Innovative</span>  Technology Solutions for the Digital Age
          </h1>
          <p className="mt-6 text-lg  leading-8 text-white">
            Empowering businesses with cutting-edge technology to drive growth, efficiency, and competitive advantage.
          </p>
          </div>
                        <ServiceSlider />

        </div>
      </div>

    </div>
  )
}
