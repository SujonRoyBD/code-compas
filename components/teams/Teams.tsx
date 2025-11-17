import React from 'react'
import AwardIcon from '../icon/AwardIcon'
import Image from 'next/image'

const data = [
    {
        id: 1,
        img: "/Images/Michael Scott .jpg",
        name: "Michael Scott ",
        title: "Co-Foundor. Chief Architect",
        desc: "Michael Scott was born. The success and growth we have achieved since our inception are a testament to value."
    },
    {
        id: 2,
        img: "/Images/Chandler Rigs.jpg",
        name: "Chandler Rigs ",
        title: "Co-Foundor. Chief Architect",

    },
    {
        id: 3,
        img: "/Images/Isabella Rodriguez.jpg",
        name: "Isabella Rodriguez ",
        title: "Co-Foundor. Chief Architect",
    },
    {
        id: 4,
        img: "/Images/Ava Wilson .jpg",
        name: "Ava Wilson  ",
        title: "Co-Foundor. Chief Architect",
    },

]

export default function Teams() {
    return (
        <div>
            <div className='container py-10 md:py-[80px]'>
                <div className="grid grid-cols-1  md:grid-cols-[1fr_3px_1fr] md:gap-[48px]  gap-6 items-center">
                    {/* Left Section */}
                    <div className="w-full ">
                        <div className="flex items-center gap-3 ">
                            <AwardIcon />
                            <p className="text-gray-700 font-semibold uppercase tracking-wide">Teams</p>
                        </div>
                        <h3 className="text-[#1D1F2C] font-[HelveticaNeue] text-[32px] md:text-[36px] lg:text-[48px] font-medium leading-[1.36] capitalize">
                            Meet  <span className="text-[#71D0FF]">the People</span> Behind the Progress
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
                            Our dedicated team brings passion, expertise, and heart to every project we take on.
                        </p>
                        <button className='text-[#71D0FF] mt-6'>
                            see more...
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12'>
                    {
                        data.map((index) => {
                            return <div key={index.id} className='bg-[#F1F1F1] p-3 rounded-lg'>
                                <Image src={index.img} alt='img' height={100} width={100} className='w-full rounded-lg object-cover h-[300px]' />
                                <div className='px-2'>
                                    <p className='text-[#1D1F2C] font-[HelveticaNeue] text-[24px] font-normal leading-[1] pt-4 pb-3'>{index.name}</p>
                                    <p className='text-[#71D0FF] font-[GeistMono] text-[16px] font-medium leading-[1] pb-6'>{index.title}</p>
                                </div>

                                <p className='text-[#4A4C56] font-[GeistMono] text-[18px] font-normal leading-[1.4]'>{index.desc}</p>

                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
