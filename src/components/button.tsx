"use client"
import React from 'react'
import { ArrowRightOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation' // correct import

type ButtonProps = {
  text: string
  link: string
}

const CustomButton: React.FC<ButtonProps> = ({ text, link }) => {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push(link)}
      className="bg-[#189CD2] rounded-full px-6 py-2 flex items-center justify-between gap-2 duration-300 group text-white font-medium"
    >
      <span className="min-h-[30px] min-w-[30px] bg-white rounded-full flex justify-center items-center group-hover:rotate-0 duration-300 transform -rotate-45">
        <ArrowRightOutlined className="!text-[#189CD2] text-[18px]" />
      </span>
      <span className="group-hover:translate-x-2 transition-transform duration-300">{text}</span>
    </button>
  )
}

export default CustomButton
