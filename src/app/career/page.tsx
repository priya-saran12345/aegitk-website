/* eslint-enable @typescript-eslint/no-explicit-any */

// import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {   Zap, Heart, Award } from "lucide-react"
// import { Briefcase, MapPin, Clock, ChevronRight,  } from "lucide-react"
// import Link from "next/link"
import { Briefcase, Users, CheckCircle } from 'lucide-react';

import Image from "next/image"
import Header from '@/components/header'
import Footer from '@/components/footer'

// Job listing data
// const jobListings = [
//   {
//     id: 1,
//     title: "Senior Full Stack Developer",
//     department: "Engineering",
//     location: "New Delhi, India",
//     type: "Full-time",
//     experience: "5+ years",
//     description:
//       "We're looking for an experienced Full Stack Developer to join our team and help build innovative solutions for our clients.",
//     responsibilities: [
//       "Design and develop high-quality web applications using React, Node.js, and other modern technologies",
//       "Collaborate with cross-functional teams to define, design, and ship new features",
//       "Ensure the performance, quality, and responsiveness of applications",
//       "Identify and correct bottlenecks and fix bugs",
//       "Help maintain code quality, organization, and automatization",
//     ],
//     requirements: [
//       "5+ years of experience in full stack development",
//       "Proficiency in React, Node.js, and modern JavaScript",
//       "Experience with database design and optimization",
//       "Strong problem-solving skills and attention to detail",
//       "Excellent communication and teamwork skills",
//     ],
//   },
//   {
//     id: 2,
//     title: "UX/UI Designer",
//     department: "Design",
//     location: "Remote",
//     type: "Full-time",
//     experience: "3+ years",
//     description:
//       "We are seeking a talented UX/UI Designer to create amazing user experiences for our web and mobile applications.",
//     responsibilities: [
//       "Create user-centered designs by understanding business requirements and user feedback",
//       "Create user flows, wireframes, prototypes and mockups",
//       "Design UI elements and tools such as navigation menus, search boxes, tabs, and widgets",
//       "Develop UI mockups and prototypes that clearly illustrate how sites function and look",
//       "Collaborate with front-end developers to implement visual design and UX",
//     ],
//     requirements: [
//       "3+ years of experience in UX/UI design",
//       "Proficiency in design tools such as Figma, Adobe XD, or Sketch",
//       "Portfolio of design projects",
//       "Understanding of interaction design and information architecture",
//       "Knowledge of HTML, CSS, and JavaScript is a plus",
//     ],
//   },
//   {
//     id: 3,
//     title: "DevOps Engineer",
//     department: "Operations",
//     location: "New Delhi, India",
//     type: "Full-time",
//     experience: "4+ years",
//     description:
//       "We're looking for a DevOps Engineer to help us build and maintain our cloud infrastructure and deployment pipelines.",
//     responsibilities: [
//       "Design, implement and manage DevOps processes for software development",
//       "Set up and maintain CI/CD pipelines",
//       "Manage and optimize cloud infrastructure on AWS/Azure",
//       "Implement security and data protection solutions",
//       "Monitor system performance and troubleshoot issues",
//     ],
//     requirements: [
//       "4+ years of experience in DevOps or similar role",
//       "Experience with AWS/Azure cloud services",
//       "Knowledge of infrastructure as code tools (Terraform, CloudFormation)",
//       "Experience with containerization technologies (Docker, Kubernetes)",
//       "Strong scripting skills (Bash, Python)",
//     ],
//   },
// ]
  const steps = [
    {
      title: 'Application Review',
      description:
        'Submit your application and our team will review your qualifications and experience.',
      icon: <Briefcase className="text-blue-600 w-8 h-8" />,
    },
    {
      title: 'Interview Process',
      description:
        'Selected candidates will go through technical and cultural fit interviews with our team.',
      icon: <Users className="text-blue-600 w-8 h-8" />,
    },
    {
      title: 'Offer & Onboarding',
      description:
        'Successful candidates will receive an offer and begin our comprehensive onboarding process.',
      icon: <CheckCircle className="text-blue-600 w-8 h-8" />,
    },
  ];


export default function CareerPage() {
  return (
    <>
    <Header></Header>
    <div className="">
      {/* Hero Section */}
<div
  className="h-[40vh] flex flex-col justify-center items-center text-white mx-auto text-center mb-12 bg-cover bg-center"
  style={{ backgroundImage: "url('/images/lifeBanner.png')" }}
>
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      <span className="text-[#189CD2]">Join</span> Our Team
    </h1>
    <p className="text-xl opacity-90">
      Build your career with us and help shape the future of technology
    </p>
    {/* <Button className="mt-8 bg-white text-blue-600 hover:bg-blue-50">View Open Positions</Button> */}
  </div>
</div>
      {/* <section className="relative  pb-20">
        <div
          className="absolute bottom-0 left-0 w-full h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0% 100%)" }}
        ></div>
      </section> */}

      {/* Why Join Us Section */}
      <section className="pb-12  lg:w-[90%] px-8 mx-auto">
        <div className=" mx-auto  px-4">
          <div className=" mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Join Aegitek?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
              <Card className="border-t-[1px] border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Zap className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Innovative Projects</h3>
                      <p className="text-gray-600">
                        Work on cutting-edge technologies and challenging projects that make a real impact in various
                        industries.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className=" border-t-[1px] border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Collaborative Culture</h3>
                      <p className="text-gray-600">
                        Join a team of passionate professionals who value collaboration, knowledge sharing, and mutual
                        growth.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className=" border-t-[1px] 
              border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Heart className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Work-Life Balance</h3>
                      <p className="text-gray-600">
                        We believe in maintaining a healthy work-life balance with flexible work arrangements and
                        supportive policies.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className=" border-t-[1px] border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Award className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Growth Opportunities</h3>
                      <p className="text-gray-600">
                        Continuous learning, professional development programs, and clear career advancement paths for
                        all employees.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Culture Section */}
      <section className="py-16 bg-slate-50">
        <div className="lg:w-[90%]  mx-auto px-6">
          <div className=" mx-auto px-4 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
                <p className="text-lg text-gray-700 mb-6">
                  At Aegitek, we foster a culture of innovation, collaboration, and continuous learning. We believe that
                  great ideas can come from anywhere, and we encourage our team members to think creatively and take
                  initiative.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  We celebrate diversity and inclusion, recognizing that different perspectives lead to better
                  solutions. Our team members come from various backgrounds and bring unique skills and experiences to
                  the table.
                </p>
                <div className="flex flex-wrap gap-3 mt-8">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-3 py-1 text-sm">Innovation</Badge>
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-3 py-1 text-sm">Collaboration</Badge>
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-3 py-1 text-sm">Excellence</Badge>
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-3 py-1 text-sm">Integrity</Badge>
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-3 py-1 text-sm">Diversity</Badge>
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-3 py-1 text-sm">Growth</Badge>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/career1.jpeg"
                  alt="Team collaboration"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-md"
                />
                <Image
                  src="/images/career2.jpeg"
                  alt="Office environment"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-md mt-8"
                />
                <Image
                  src="/images/career3.jpeg"
                  alt="Team event"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-md mt-8"
                />
                <Image
                  src="/images/career4.jpeg"
                  alt="Work environment"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
<section className="py-20">
  <div className="container mx-auto px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Current Openings</h2>

      <div className="bg-white w-fit border-[1px] border-slate-200 shadow-md rounded-2xl p-6 mb-6 hover:shadow-xl transition duration-300">
        <h3 className="text-2xl font-semibold text-blue-700 mb-2">PHP Developer</h3>
        <p className="text-gray-600 mb-1"><span className="font-semibold">Experience:</span> 3 – 7 Years</p>
        <p className="text-gray-600 mb-4"><span className="font-semibold">Openings:</span> 1</p>
        <div className="text-sm text-gray-400">© 2021 ASPL - All Rights Reserved</div>
      </div>
            {/* <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="engineering">Engineering</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="operations">Operations</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-6">
                {jobListings.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </TabsContent>

              <TabsContent value="engineering" className="space-y-6">
                {jobListings
                  .filter((job) => job.department === "Engineering")
                  .map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
              </TabsContent>

              <TabsContent value="design" className="space-y-6">
                {jobListings
                  .filter((job) => job.department === "Design")
                  .map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
              </TabsContent>

              <TabsContent value="operations" className="space-y-6">
                {jobListings
                  .filter((job) => job.department === "Operations")
                  .map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
              </TabsContent>
            </Tabs> */}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="lg:w-[90%] mx-auto px-6">
          <div className=" mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-12">Our Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            ))}
          </div>
            <div className="mt-12">
              <p className="text-lg mb-6">
                Don&apos;t see a position that matches your skills? We&apos;re always looking for talented individuals to join our
                team.
              </p>
              {/* <Button className="bg-blue-600 hover:bg-blue-700">Submit General Application</Button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer></Footer>
    </>

  )
}

// Job Card Component
/* eslint-disable @typescript-eslint/no-explicit-any */

// function JobCard({ job }:any) {
//   return (
//     <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
//       <CardContent className="p-0">
//         <div className="p-6">
//           <div className="flex justify-between items-start">
//             <div>
//               <h3 className="text-xl font-bold mb-2">{job.title}</h3>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 <Badge variant="outline" className="flex items-center gap-1 text-sm">
//                   <Briefcase className="h-3 w-3" /> {job.department}
//                 </Badge>
//                 <Badge variant="outline" className="flex items-center gap-1 text-sm">
//                   <MapPin className="h-3 w-3" /> {job.location}
//                 </Badge>
//                 <Badge variant="outline" className="flex items-center gap-1 text-sm">
//                   <Clock className="h-3 w-3" /> {job.type}
//                 </Badge>
//               </div>
//               <p className="text-gray-600 mb-4">{job.description}</p>
//             </div>
//           </div>

//           <Tabs defaultValue="responsibilities">
//             <TabsList className="grid w-full grid-cols-2">
//               <TabsTrigger value="responsibilities">Responsibilities</TabsTrigger>
//               <TabsTrigger value="requirements">Requirements</TabsTrigger>
//             </TabsList>
//             <TabsContent value="responsibilities" className="pt-4">
//               <ul className="list-disc pl-5 space-y-1 text-gray-600">
//                 {job?.responsibilities?.map((item:any, index:number) => (
//                   <li key={index}>{item}</li>
//                 ))}
//               </ul>
//             </TabsContent>
//             <TabsContent value="requirements" className="pt-4">
//               <ul className="list-disc pl-5 space-y-1 text-gray-600">
//                 {job?.requirements?.map((item:any, index:number) => (
//                   <li key={index}>{item}</li>
//                 ))}
//               </ul>
//             </TabsContent>
//           </Tabs>
//         </div>

//         <div className="bg-slate-50 p-4 flex justify-end">
//           <Link href={`/career/${job.id}`}>
//             <Button className="bg-blue-600 hover:bg-blue-700">
//               Apply Now <ChevronRight className="ml-2 h-4 w-4" />
//             </Button>
//           </Link>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }
