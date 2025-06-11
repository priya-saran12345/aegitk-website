// components/Header.js
import { Menu } from 'antd';
import { DownOutlined, ArrowRightOutlined } from '@ant-design/icons';
import Image from "next/image";
import Link from "next/link"
export default function Header() {
  return (
  <div className=' flex justify-center item-center'>
    <div className="flex lg:w-[80%] items-center justify-between h-16 px-8   ">
      {/* Logo */}
      <div className="flex items-center">
        <div className=" bg-white text-black flex item-center justify-center font-bold rounded mr-2">
          <Link href={'/'}>
          <Image alt ="aegitech" src="/images/aegiteklogo.jpg" height={85} width={85}/>
          </Link>
        </div>
      </div>
      {/* Navigation */}
      <Menu
        mode="horizontal"
        // theme="dark"
        className="bg-transparent !border-white flex-1 justify-center ml-16"
        items={[
          { key: 'home', label: <span className="">Home</span> },
          { key: 'about', label: <span className="">About Us</span> },
          {
            key: 'services',
            label: (
              <span className="">
                Services <DownOutlined className="ml-1 text-xs" />
              </span>
            ),
            children: [
              { key: 'f1', label: 'service 1' },
              { key: 'f2', label: 'service 2' },
            ],
          },
          { key: 'Career', label: <span className="">Career</span> },
          { key: 'contact-us', label: <span className="">Contact</span> },
          { key: 'solution', label: <span className="">Solution</span> },
          { key: 'Technology', label: <span className="Technology"></span> },
          { key: 'What we do', label: <span className="What we do"></span> },
        ]}
      />

      {/* Buttons */}
      <div className="flex items-center space-x-4">
        {/* <Button type="link" className="text-white">
          Log In
        </Button> */}
        <button
          className="bg-[#189CD2] rounded-full px-6 py-2 flex duration-300 group justify-between gap-2 
          text-black font-medium flex item-center">
          <span className="min-h-[30px] -rotate-45 min-w-[30px] bg-white rounded-full flex justify-center item-center group-hover:rotate-0 duration-300">
            <ArrowRightOutlined className='!text-[#189CD2] text-[18px] text-black '/>
          </span>
            <span  className='text-white group-hover:translate-x-2'>

          Apply Now
            </span>
        </button>
      </div>
    </div>
    </div>

  );
}
