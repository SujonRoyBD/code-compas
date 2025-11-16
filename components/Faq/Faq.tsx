import React from 'react'
import AwardIcon from '../icon/AwardIcon'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import ArrowTop from '../icon/ArrowTopIcon'

export default function Faq() {
  return (
    <div className='bg-[#F5F9FF]'>
      <div className='container py-10 md:py-[80px]'>
        <div className="grid grid-cols-1  md:grid-cols-[1fr_3px_1fr] gap-[48px]  gap-6 items-center">
          {/* Left Section */}
          <div className="w-full ">
            <div className="flex items-center gap-3 ">
              <AwardIcon />
              <p className="text-gray-700 font-semibold uppercase tracking-wide">FAQ</p>
            </div>
            <h3 className="text-[#1D1F2C] d font-[HelveticaNeue] text-[32px] md:text-[36px] lg:text-[48px] font-medium leading-[1.36] capitalize">
              Frequently  <span className="text-[#71D0FF]">Asked</span> Questions
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
              Find quick answers to common questions and learn more about how our services work for you.
            </p>
            <button className='text-[#71D0FF] mt-6'>
              see more...
            </button>
          </div>
        </div>
        <div className='mt-12'>
          <Accordion type="single" collapsible className="space-y-6">

            {/* ITEM 1 */}
            <AccordionItem
              value="item-1"
              className="border-none rounded-lg data-[state=open]:bg-[#71D0FF] bg-white"
            >
              <AccordionTrigger
                className="
  text-[#1D1F2C] font-['Helvetica_Neue'] text-[25px] md:text-[36px]
  font-normal leading-[1.2] tracking-[0.72px] p-8 rounded-lg
  [&>svg]:bg-gray-200 [&>svg]:rounded-full [&>svg]:p-2 [&>svg]:w-12 [&>svg]:h-12
"

              >
                How do you ensure IT drives our growth?
              </AccordionTrigger>

              <AccordionContent className="p-8 text-[#4A4C56] font-normal">
                We align IT strategy directly with your business goals, building scalable
                solutions that actively support your long-term expansion, not just fix problems.
              </AccordionContent>
            </AccordionItem>

            {/* ITEM 2 */}
            <AccordionItem
              value="item-2"
              className="border-none rounded-lg data-[state=open]:bg-[#71D0FF] bg-white"
            >
              <AccordionTrigger
                className="
  text-[#1D1F2C] font-['Helvetica_Neue'] text-[25px] md:text-[36px]
  font-normal leading-[1.2] tracking-[0.72px] p-8 rounded-lg
  [&>svg]:bg-gray-200 [&>svg]:rounded-full [&>svg]:p-2 [&>svg]:w-12 [&>svg]:h-12
"
              >
                How do you guarantee results, not just talk?
              </AccordionTrigger>

              <AccordionContent className="p-8 text-[#4A4C56] font-normal">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>

            {/* ITEM 3 */}
            <AccordionItem
              value="item-3"
              className="border-none rounded-lg data-[state=open]:bg-[#71D0FF] bg-white"
            >
              <AccordionTrigger
                className="
  text-[#1D1F2C] font-['Helvetica_Neue'] text-[25px] md:text-[36px]
  font-normal leading-[1.2] tracking-[0.72px] p-8 rounded-lg
  [&>svg]:bg-gray-200 [&>svg]:rounded-full [&>svg]:p-2 [&>svg]:w-12 [&>svg]:h-12
"
              >
                What makes your solutions robust and complete?
              </AccordionTrigger>

              <AccordionContent className="p-8 text-[#4A4C56] font-normal">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>

            {/* ITEM 4 */}
            <AccordionItem
              value="item-4"
              className="border-none rounded-lg data-[state=open]:bg-[#71D0FF] bg-white"
            >
              <AccordionTrigger
                className="
  text-[#1D1F2C] font-['Helvetica_Neue'] text-[25px] md:text-[36px]
  font-normal leading-[1.2] tracking-[0.72px] p-8 rounded-lg
  [&>svg]:bg-gray-200 [&>svg]:rounded-full [&>svg]:p-2 [&>svg]:w-12 [&>svg]:h-12
"
              >
                How do you understand our specific needs?
              </AccordionTrigger>

              <AccordionContent className="p-8 text-[#4A4C56] font-normal">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>

            {/* ITEM 5 */}
            <AccordionItem
              value="item-5"
              className="border-none rounded-lg data-[state=open]:bg-[#71D0FF] bg-white"
            >
              <AccordionTrigger
                className="
  text-[#1D1F2C] font-['Helvetica_Neue'] text-[25px] md:text-[36px]
  font-normal leading-[1.2] tracking-[0.72px] p-8 rounded-lg
  [&>svg]:bg-gray-200 [&>svg]:rounded-full [&>svg]:p-2 [&>svg]:w-12 [&>svg]:h-12
"
              >
                Do you offer ongoing support after projects?
              </AccordionTrigger>

              <AccordionContent className="p-8 text-[#4A4C56] font-normal">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>

          </Accordion>

        </div>
      </div>


    </div>
  )
}
