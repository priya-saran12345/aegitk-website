import Hero from "@/components/hero"
import Features from "@/components/features"
import Services from "@/components/services"
// import Testimonials from "@/components/testimonials"
import Team from "@/components/team"
import Contact from "@/components/contact"
import CTA from "@/components/cta"
import Header from '@/components/header'
import Footer from '@/components/footer'
export default function Home() {
  return (
    <main>
      <Header/>
      <Hero />
      <Features />
      <Services />
      {/* <Testimonials /> */}
      <Team />
      <CTA />
      <Contact />
      <Footer/>
    </main>
  )
}
