import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Aegitek</h1>

        <div className="mb-12">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Aegitek office"
            width={800}
            height={400}
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Our Story</h2>
          <p>
            Founded in 2010, Aegitek has been at the forefront of technological innovation for over a decade. What
            started as a small team of passionate engineers has grown into a global technology company serving clients
            across multiple industries.
          </p>

          <h2>Our Mission</h2>
          <p>
            At Aegitek, our mission is to empower businesses through innovative technology solutions that drive growth,
            efficiency, and competitive advantage. We believe in creating technology that makes a meaningful difference
            in how businesses operate and succeed.
          </p>

          <h2>Our Values</h2>
          <ul>
            <li>
              <strong>Innovation:</strong> We constantly push the boundaries of what&apos;s possible.
            </li>
            <li>
              <strong>Excellence:</strong> We hold ourselves to the highest standards in everything we do.
            </li>
            <li>
              <strong>Integrity:</strong> We build relationships based on trust and transparency.
            </li>
            <li>
              <strong>Collaboration:</strong> We believe the best solutions come from working together.
            </li>
            <li>
              <strong>Client Success:</strong> We measure our success by the success of our clients.
            </li>
          </ul>

          <h2>Our Approach</h2>
          <p>
            We take a consultative approach to every project, working closely with our clients to understand their
            unique challenges and objectives. Our solutions are tailored to meet specific needs, leveraging the latest
            technologies and best practices to deliver exceptional results.
          </p>
        </div>
      </div>
    </div>
  )
}
