import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-2xl p-8 flex flex-col lg:flex-row items-center gap-8 relative overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full lg:w-1/2">
          <Image
            src="/images/not-found.webp"
            alt="Page not found illustration"
            width={400}
            height={300}
            className="mx-auto rounded-2xl "
            priority
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl pointer-events-none" /> */}
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <div className="space-y-2">
            <h1 className="text-6xl font-bold text-[#189CD2] tracking-tight">404</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto lg:mx-0 rounded-full" />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Page Not Found</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              This page is not found for now.{" "}
              <span className="text-blue-600 font-semibold">It may be live soon.</span> We&apos;re constantly working on new content and features.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Link href="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Go Home
              </Link>
            </Button>

            {/* <Button
              asChild
              variant="outline"
              size="lg"
              className="border-slate-300 hover:bg-slate-50 transition-all duration-200"
            >
              <Link href="/search" className="flex items-center gap-2">
                <Search className="w-4 h-4" />
                Search Site
              </Link>
            </Button> */}

            {/* <Button
              asChild
              variant="ghost"
              size="lg"
              className="text-slate-600 hover:text-slate-800 transition-all duration-200"
            >
              <Link href="javascript:history.back()" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </Link>
            </Button> */}
          </div>

          {/* Additional Info */}
          {/* <p className="text-sm text-slate-500 pt-6">
            If you believe this is an error, please{" "}
            <Link href="/contact" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">
              contact our support team
            </Link>
            .
          </p> */}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse" />
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-4 w-12 h-12 bg-pink-200 rounded-full opacity-20 animate-pulse delay-500" />
      </div>
    </div>
  );
}
