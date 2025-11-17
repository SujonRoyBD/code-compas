import React from 'react'
import AwardIcon from '../icon/AwardIcon'
import Image from 'next/image'

const data = [
    {
        id: 1,
        img: "/Images/Optimizing Global.png",
        btn1: "AI agents",
        btn2: "Connecting Systems",
        btn3: "Building API ",
        title: "Optimizing Global E-commerce Operations",
        desc: "Every company and project is unique and has its own challenges; therefore, we explain these best through video, so you under..."
    },
    {
        id: 2,
        img: "/Images/Streamlining.jpg",
        btn1: "AI agents",
        btn2: "Connecting Systems",
        btn3: "Building API ",
        title: "Optimizing Global E-commerce Operations",
        desc: "Every company and project is unique and has its own challenges; therefore, we explain these best through video, so you under..."
    },
    {
        id: 3,
        img: "/Images/Accelerating.jpg",
        btn1: "AI agents",
        btn2: "Connecting Systems",
        btn3: "Building API ",
        title: "Optimizing Global E-commerce Operations",
        desc: "Every company and project is unique and has its own challenges; therefore, we explain these best through video, so you under..."
    },
    {
        id: 4,
        img: "/Images/Accelerating.jpg",
        btn1: "AI agents",
        btn2: "Connecting Systems",
        btn3: "Building API ",
        title: "Optimizing Global E-commerce Operations",
        desc: "Every company and project is unique and has its own challenges; therefore, we explain these best through video, so you under..."
    },
]

export default function Results() {
    return (
        <div className='bg-[#F1F1F1]'>
            <div className='container py-[40px] md:py-[80px]'>
                <div className="grid grid-cols-1  md:grid-cols-[1fr_3px_1fr] md:gap-[48px]  gap-6 items-center">
                    {/* Left Section */}
                    <div className="w-full ">
                        <div className="flex items-center gap-3 ">
                            <AwardIcon />
                            <p className="text-gray-700 s font-semibold uppercase tracking-wide">Results</p>
                        </div>
                        <h3 className="text-[#1D1F2C]  text-[32px] md:text-[36px] lg:text-[48px] font-medium leading-[1.36]  mt-4">
                            Our <span className="text-[#71D0FF]">Results</span><br /> Highlighted
                        </h3>
                    </div>

                    {/* Middle Border Icon */}
                   <div>
                            {/* Desktop */}
                            <div className="hidden md:block">
                              <Image
                                src="/Images/Line.png"
                                alt="line"
                                width={3}
                                height={90}
                              />
                            </div>
                
                            {/* Mobile */}
                            <div className=' rounded-lg block md:hidden'>
                               <Image src="/Images/line2.png.png" alt='line' height={50} width={700}/>
                            </div>
                          </div>

                    {/* Right Paragraph */}
                    <div className="w-full">
                        <p className="text-[#4A4C56] font-[GeistMono] text-4 md:text-[20px] font-normal leading-[1.6]">
                            Every company and project is unique and has its own challenges; therefore, we explain these best through video, so you understand exactly what we do.
                        </p>
                        <button className='text-[#71D0FF] mt-6'>
                            see more...
                        </button>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
                    {
                        data.map((index) => {
                            return <div key={index.id} className='bg-[#FFFFFF] rounded-lg'>
                                <div className=' p-8 '>
                                    <Image src={index.img} alt='result' height={300} width={564} className='rounded-lg w-full' />
                                    <div className='grid grid-cols-2 md:grid-cols-3 justify-between mt-8 mb-4 space-y-2'>
                                        <button className='px-2 md:px-6 py-3 bg-[#F8FAFB] rounded-full text-[#4A4C56] font-[GeistMono] text-[16px] font-medium leading-[1]'>{index.btn1}</button>
                                        <button className='px-2 md:px-6py-3 bg-[#F8FAFB] rounded-full text-[#4A4C56] font-[GeistMono] text-[16px] font-medium leading-[1]'>{index.btn2}</button>
                                        <button className='px-2 md:px-6 py-3 bg-[#F8FAFB] rounded-full text-[#4A4C56] font-[GeistMono] text-[16px] font-medium leading-[1]'>{index.btn3}</button>

                                    </div>
                                    <p className="text-[#1D1F2C] font-[HelveticaNeue] text-5 md:text-[32px] font-normal leading-[1.36] tracking-[0.32px]">{index.title}</p>
                                    <p className="text-[#4A4C56] font-[HelveticaNeue] text-[16px] font-normal leading-[1.36] tracking-[0.32px] mt-4">{index.desc}</p>

                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
