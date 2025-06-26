'use client';

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {  MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import Custombutton from "@/components/button";
import { Menu } from "antd";

export default function Header() {
  const router = useRouter();

  const menuItems = [
    // { key: 'home', label: 'Home', link: '/' },
    { key: 'about', label: 'About Us', link: '/about' },
    { key: 'Career', label: 'Career', link: '/career' },
    { key: 'contact', label: 'Contact', link: '/contact' },
    // { key: 'Technology', label: 'Technology', link: '/technology' },
    // { key: 'What we do', label: 'What we do', link: '/what-we-do' },
  ];

  const handleNavigate = (link: string) => {
    router.push(link);
  };

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-slate-200 w-full">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">

        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/aegiteklogo.jpg"
              alt="aegitek logo"
              height={72}
              width={72}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 justify-center ml-8">
          <Menu
            mode="horizontal"
            className="bg-transparent border-none"
            onClick={({ key }) => {
              const selected = menuItems.find(item => item.key === key);
              if (selected) handleNavigate(selected.link);
            }}
            items={menuItems.map((item) => ({
              key: item.key,
              label: <Link href={item.link}><span className="text-black">{item.label}</span></Link>,
            }))}
          />
        </div>

        {/* Desktop Contact Button */}
        <div className="  hidden sm:block">
          <Custombutton text="Get in Touch" link="/contact" />
        </div>

        {/* Mobile Menu Sheet Trigger */}
        <div className="lg:hidden !bg-white flex items-center gap-3">
          <Sheet  >
            <SheetTrigger asChild>
              <button className="text-black">
  <MenuIcon className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[260px] bg-white pl-12 sm:w-[300px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <Image
                    src="/images/aegiteklogo.jpg"
                    alt="logo"
                    width={56}
                    height={56}
                  />
                  {/* <span className="text-base font-semibold">Aegitek</span> */}
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 space-y-4">
                {menuItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleNavigate(item.link)}
                    className="block w-full text-left text-black text-sm font-medium border-b border-gray-200 pb-2"
                  >
                    {item.label}
                  </button>
                ))}
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
