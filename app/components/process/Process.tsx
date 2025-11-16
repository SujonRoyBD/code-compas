import React from 'react'
import AwardIcon from '../icon/AwardIcon'
import Image from 'next/image'
import { ArrowUpToLine } from 'lucide-react'
import ArrowTop from '../icon/ArrowTopIcon'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion"

export default function Process() {
  return (
    <div className='bg-[#F5F9FF]'>
      <div className='container '>
        {/* Main Content */}
        <div className="grid grid-cols-1  md:grid-cols-[1fr_3px_1fr] gap-[48px] py-9 gap-6 items-center">
          {/* Left Section */}
          <div className="w-full ">
            <div className="flex items-center gap-3 mb-8">
              <AwardIcon />
              <p className="text-gray-700 font-semibold uppercase tracking-wide">Process</p>
            </div>
            <h3 className="text-[#1D1F2C] font-[HelveticaNeue] text-[32px] md:text-[48px] lg:text-[48px] font-medium leading-[1.36] capitalize">
              What does the <span className="text-[#71D0FF]">process <br /> look</span> like?
            </h3>
          </div>

          {/* Middle Border Icon */}
         <div>
           {/* Desktop */}
           <div className="hidden md:block">
             <Image
               src="/Images/Line.png"
               alt="line"
               width={2}
               height={90}
             />
           </div>
         
           {/* Mobile */}
             <div className='border-2 border-[#71D0FF] rounded-lg block md:hidden'>
               
             </div>
         </div>

          {/* Right Paragraph */}
          <div className="w-full">
            <p className="text-[#4A4C56] font-[GeistMono] text-4 md:text-[20px] font-normal leading-[1.6]">
              Discover how we transform your operations through our proven sprint methodology.
            </p>
          </div>
        </div>



        <div>
          <Accordion type="single" collapsible className='space-y-6 text-[#4A4C56]'>
            <AccordionItem value="item-1" className='border-none hover:border-none' >
              <AccordionTrigger className="text-[#4A4C56] font-helvetica text-[28px] md:text-[36px] font-normal leading-[1.2] tracking-[0.72px]  bg-white  p-4 md:p-8 hover:border-none">1. Accelerator Day</AccordionTrigger>
              <AccordionContent>
                <div className='bg-[#FFFFFF] p-8 rounded-lg'>



                  <div className=" bg-white flex flex-col md:flex-row justify-between mt-8 gap-12">
                    {/* Left Side - Text Section */}
                    <div className="md:w-1/2 order-2 md:order-1">
                      <h2 className="text-[#71D0FF] font-[GeistMono] text-[20px] font-medium leading-[1.2] capitalize pb-6">Approach:</h2>
                      <p className="text-[#4A4C56] font-[GeistMono] text-[18px] font-normal leading-[1.6]">
                        We kick off with a focused workshop designed to deeply understand your team's daily operations, identify points, and assess your existing tech stack.
                      </p>

                      <h2 className="text-[#71D0FF] font-[GeistMono] text-[20px] font-medium leading-[1.2] capitalize py-6">Final Result:</h2>
                      <ul className="text-[#4A4C56] font-[GeistMono] text-[18px] font-normal leading-[1.6] space-y-3">
                        <li>✔ Clear understanding of current operational bottlenecks</li>
                        <li>✔ Identified areas for immediate digital intervention</li>
                        <li>✔ Alignment on project scope and key objectives</li>
                      </ul>

                      {/* Full Case Study Button */}
                      <div className=''>
                        <button className="mt-6 border-2 py-2 px-6 rounded-full inline-block cursor-pointer font-medium relative flex justify-center items-center">
                          <p>Full Case Study</p> <span className="inline-block ml-2 bg-[#71D0FF] rounded-full p-[10px]"><ArrowTop /></span>
                        </button>
                      </div>
                    </div>

                    {/* Right Side - Image Section */}
                    <div className="md:w-1/2 mt-8 md:mt-0 order-1 md:order-2">
                      <div className="relativ">
                        <img src="/Images/Accelerator.jpg" alt="Case Study" className="w-full h-auto rounded-lg shadow-md" />

                      </div>
                    </div>
                  </div>

                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className='border-none'>
              <AccordionTrigger className="text-[#4A4C56] font-helvetica text-[28px] md:text-[36px] font-normal leading-[1.2] tracking-[0.72px] bg-white  p-4 md:p-8 rounded-lg">2. Deep Process Scan</AccordionTrigger>
              <AccordionContent className='bg-white px-8'>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className='border-none'>
              <AccordionTrigger className="text-[#4A4C56] font-helvetica text-[28px] md:text-[36px] font-normal leading-[1.2] tracking-[0.72px]  bg-white  p-4 md:p-8 rounded-lg border-b-none">3. Smart Automation Implementation</AccordionTrigger>
              <AccordionContent className='bg-white px-8'>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className='border-none pb-[80px]'>
              <AccordionTrigger className="text-[#4A4C56]   font-helvetica text-[28px] md:text-[36px] font-normal leading-[1.2] tracking-[0.72px]  bg-white p-4 md:p-8 rounded-lg border-none">4. Training & Handover
                
              </AccordionTrigger>
              <AccordionContent className='bg-white px-8'>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
