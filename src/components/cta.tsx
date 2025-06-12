// import Link from "next/link"
// import { Button } from "@/components/ui/button"
import Custombutton from '@/components/button'
export default function CTA() {
  return (
    <section className="py-16 border-t-[2px] border-b-[1px] border-[#189CD2]/20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4"><span className="text-[#189CD2]">Ready</span>  to Transform Your Business?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Contact us today to discuss how our technology solutions can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
<Custombutton text='Get in Touch' link="/" />
            {/* <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get in Touch</Link>
            </Button> */}
            <Custombutton text='Explore Services' link="/services" />

            {/* <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/services">Explore Services</Link>
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  )
}
