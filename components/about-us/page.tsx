import Image from 'next/image'
import React from 'react'
import StarIcon from '../icon/StarIcon'
import AwardIcon from '../icon/AwardIcon'
import { ArrowUpIcon } from 'lucide-react'
import ArrowTop from '../icon/ArrowTopIcon'

export default function AboutUs() {
  return (
    <div className='bg-[#F1F1F1]'>
      <div className='grid grid-cols-1 md:grid-cols-2 py-[40px] md:py-[100px] gap-[48px]  container'>
        <div>
          <Image src="/Images/aboutUs.png" alt='about' height={534} width={616} className='h-full' />
        </div>
        <div>
          <div>
            <div className='flex justify-center gap-3 md:justify-start'>
              <AwardIcon />
              <p>About US</p>
            </div>
          </div>
          <h3 className='text-center md:text-start py-4 text-[#1D1F2C] font-helvetica text-8 md:text-9 lg:text-[48px] font-medium leading-[136%]  '>Why we <span className='text-[#71D0FF]'>do it</span>  & <br /> What we do.</h3>
          <p className=' text-center md:text-start'>We believe that IT should not be a stumbling block, but rather the foundation for growth. Too often we see companies struggling with half-baked IT solutions or consultants who talk a lot but deliver little. </p>
          <p className='mt-2 text-center md:text-start'>That frustrates, wastes time, and rarely provides what you truly need. We do it differently: we listen, deliver what we promise, and ensure that IT works for your company - not the other way around.</p>
          <div className='flex py-8 md:py-[48px] justify-center md:justify-start'>
            <button className='py-2 px-5 bg-[#71D0FF] rounded-full'>Start the Intake</button>
            <div className='border-4  rounded-full p-2 border-[#71D0FF] -ml-2'>
              <ArrowTop />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
