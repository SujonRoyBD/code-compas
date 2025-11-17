import Image from 'next/image'
import React from 'react'
import StarIcon from '../icon/StarIcon'
import AwardIcon from '../icon/AwardIcon'
import { ArrowUpIcon } from 'lucide-react'
import ArrowTop from '../icon/ArrowTopIcon'

export default function OurUnique() {
  return (
    <div className='bg-[#F5F9FF]'>
      <div className='grid grid-cols-1 md:grid-cols-2  gap-[14px]  container pt-[40px] lg:pt-[80px]'>

        <div>
          <div>
            <div className='flex justify-center gap-3 md:justify-start'>
              <AwardIcon />
              <p>Our unique approach</p>
            </div>
          </div>
          <h3 className='text-center md:text-start py-4 text-[#1D1F2C] font-helvetica text-8 md:text-9 lg:text-[48px] font-medium leading-[136%] capitalize'>Digital <span className='text-[#71D0FF]'>Efficiency</span> Sprint  (DES)</h3>
          <p className=' text-center md:text-start'>We work hands-on in your company for 6 months and ensure that your team saves an average of 5 hours per FTE per month. We achieve this through smart digitization, automation, and the use of AI.</p>

          <div className='flex py-8 md:py-[48px] justify-center md:justify-start'>
            <button className='py-2 px-5 bg-[#71D0FF] rounded-full'>Start the Intake</button>
            <div className='border-4  rounded-full p-2 border-[#71D0FF] -ml-2'>
              <ArrowTop />
            </div>
          </div>
        </div>
        <div>
          <Image src="/Images/ourUnique.jpg.png" alt='about' height={473} width={634} className='h-full' />
        </div>
      </div>
    </div>
  )
}
