import React from 'react';
import AwardIcon from '../icon/AwardIcon';
import BorderIcon from '../icon/BorderIcon';
import Image from 'next/image';
import { ArrowBigRight, ArrowDownRight, ArrowRight, ArrowUpIcon } from 'lucide-react';
import LineIcon from '../icon/Line';
import ArrowTop from '../icon/ArrowTopIcon';

interface ServiceItem {
  id: number;
  service: string;
  description: string;
  btn1: string;
  btn2: string;
  btn3: string;
  img?: string;
}
const data: ServiceItem[] = [
  {
    id: 1,
    service: "AI agents",
    description: "We're done with confusing tech talk and empty promises. You deserve clear, practical solutions that drive real progress without the hassle.",
    btn1: "AI agents",
    btn2: "Connecting Systems",
    btn3: "Building API ",
    img: "/Images/ai.jpg"


  },
  {
    id: 2,
    service: "AI agents",
    description: "We're done with confusing tech talk and empty promises. You deserve clear, practical solutions that drive real progress without the hassle.",
    btn1: "AI agents",
    btn2: "Connecting Systems",
    btn3: "Building API ",


  },
  {
    id: 3,
    service: "AI agents",
    description: "We're done with confusing tech talk and empty promises. You deserve clear, practical solutions that drive real progress without the hassle.",
    btn1: "AI agents",
    btn2: "Connecting Systems",
    btn3: "Building API ",

  },
  {
    id: 4,
    service: "AI agents",
    description: "We're done with confusing tech talk and empty promises. You deserve clear, practical solutions that drive real progress without the hassle.",
    btn1: "AI agents",
    btn2: "Connecting Systems",
    btn3: "Building API ",


  },
  {
    id: 5,
    service: "AI agents",
    description: "We're done with confusing tech talk and empty promises. You deserve clear, practical solutions that drive real progress without the hassle.",
    btn1: "AI agents",
    btn2: "Connecting Systems",
    btn3: "Building API ",

  },
  {
    id: 6,
    service: "AI agents",
    description: "We're done with confusing tech talk and empty promises. You deserve clear, practical solutions that drive real progress without the hassle.",
    btn1: "AI agents",
    btn2: "Connecting Systems",
    btn3: "Building API ",

  },
]

export default function OurService() {
  return (
    <section className="bg-[#F5F9FF] py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}


        {/* Main Content */}
        <div className="grid grid-cols-1  md:grid-cols-[1fr_3px_1fr] gap-4 lg:gap-[48px] py-9 gap-6 items-center">
          {/* Left Section */}
          <div className="w-full  ">
            <div className="flex items-center gap-3 mb-4">
              <AwardIcon />
              <p className="text-gray-700 font-semibold uppercase tracking-wide">Our Services</p>
            </div>
            <h3 className="text-[32px] md:text-[32px] lg:text-[48px] leanding-normal ">
              Let&apos;s be <span className="text-[#71D0FF]">Concrete</span><br />.What exactly do we do?
            </h3>
          </div>

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
            <p className="text-gray-600 leading-relaxed ">
              Our team consists of industry experts with diverse backgrounds, all working together to deliver outstanding results.
            </p>
          </div>
        </div>
        <div>
          {
            data.map((index) => {
              return <div key={index.id}>
                <div className='grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2   py-6 justify-flex'>
                  <div>
                    {/* <div className='flex justify-end'>
                      <button className=' rounded-full block '>
                        <div className='border-2 p-4 rounded-full'>
                          <ArrowTop />
                        </div>
                      </button>
                    </div> */}

                    <div className=''>
                      <div className='flex justify-between'>
                        <p className='text-[#1D1F2C] font-[HelveticaNeue] text-[40px] font-normal leading-[1]'>{index.service}</p>
                        <div className='block lg:hidden '>
                          <button className=' rounded-full'>
                            <div className='border-2 p-4 rounded-full md:block'>
                              <ArrowTop />
                            </div>
                          </button>
                        </div>
                      </div>
                      <p className='py-6 text-[18px]'>{index.description}</p>




                      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3  gap-4'>
                        <p className='px-6 py-3 bg-[#FFFFFF] rounded-full text-[12px] md:text-[16px]'>{index.btn1}</p>
                        <p className='px-2 py-3 bg-[#FFFFFF] rounded-full text-[12px] md:text-[16px] '>{index.btn2}</p>
                        <p className='px-6 py-3 bg-[#FFFFFF] rounded-full text-[12px] md:text-[16px]'>{index.btn3}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    {index.id === 1 && index.img && (
                      <Image
                        src={index.img}
                        width={364}
                        height={210}
                        className="w-full md:w-[] lg:w-[364px] h-[210px] object-cover"
                        alt=""
                      />
                    )}

                    <button className=' rounded-full hidden lg:block'>
                      <div className='border-2 p-4 rounded-full md:block'>
                        <ArrowTop />
                      </div>
                    </button>
                  </div>
                </div>


              </div>
            })
          }
        </div>
      </div>
    </section>
  );
}
