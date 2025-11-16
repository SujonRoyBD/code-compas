import Image from 'next/image'
import React from 'react'
import StarIcon from '../icon/StarIcon'
import AwardIcon from '../icon/AwardIcon'
import { ArrowUpIcon } from 'lucide-react'

const stats = [
  { value: "10,000+", label: "Meetings Driven" },
  { value: "$1B+", label: "Client Revenue" },
  { value: "10+", label: "Channels Used" },
  { value: "$500M", label: "Client Spend" },
];
export default function Marketing() {
  return (
    <div className='bg-[#F5F9FF]'>
      <div className='grid grid-cols-1 md:grid-cols-2 pb-[80px] pt-[100px] gap-[48px]  container'>
        <div>
          <Image src="/Images/marketing.png" alt='about' height={534} width={616} className='h-auto h-full' />
        </div>
        <div className='mt-0 md:mt-20'>
          <div>
            <div className='flex justify-center gap-3 md:justify-start'>
              <AwardIcon />
              <p>B2B marketing</p>
            </div>
          </div>
          <h3 className='flex justify-center md:justify-start py-4 text-[#1D1F2C] font-helvetica text-[32px] md:text- lg:text-[48px] font-medium leading-[136%] capitalize'>We Know B2Bmarketing </h3>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-2 relative">

            {/* Middle Vertical Line */}
            <div className=" md:block absolute left-1/2 top-0 bottom-0 w-px bg-blue-300"></div>

            {/* Middle Horizontal Line */}
            <div className="absolute left-0 right-0 top-1/2 h-px bg-blue-300"></div>

            {stats.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center py-8 text-center"
              >
                <h2 className="text-3xl font-semibold text-black">{item.value}</h2>
                <p className="mt-2 text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
