import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Services() {
  return (
    <div className="py-16 lg:w-[90%] mx-auto">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4"><span className="text-[#189CD2]">How</span> We Work</h2>
          <p className="text-lg text-muted-foreground">
            Our proven methodology ensures successful outcomes for every project.
          </p>
        </div>

        <div className="space-y-24">
          {/* Service 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-4">Discovery & Planning</h3>
              <p className="text-muted-foreground mb-6">
                We begin by understanding your business objectives, challenges, and requirements. Our team works closely
                with you to define project scope, timeline, and success metrics.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>In-depth business analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Requirements gathering</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Project roadmap development</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/services">Learn More</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Discovery and Planning"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Service 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Design and Development"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Design & Development</h3>
              <p className="text-muted-foreground mb-6">
                Our experienced designers and developers work collaboratively to create solutions that are both visually
                appealing and functionally robust, following industry best practices.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>User-centered design approach</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Agile development methodology</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Regular progress updates</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/services">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Service 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-4">Testing & Deployment</h3>
              <p className="text-muted-foreground mb-6">
                We conduct thorough testing to ensure your solution meets the highest standards of quality, security,
                and performance before deploying to your production environment.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Comprehensive quality assurance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Security and performance testing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>Smooth deployment process</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/services">Learn More</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Testing and Deployment"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
