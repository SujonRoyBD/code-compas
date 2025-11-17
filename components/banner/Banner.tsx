
"use client";
import Image from "next/image";
import React from "react";
import LineIcon2 from "../icon/LineIcon";

const data = [
  { id: 1, price: "1250+", description: "Project Completed" },
  { id: 2, price: "450+", description: "Happy Clients" },
  { id: 3, price: "98%", description: "Success Rate" },
];

export default function Banner() {
  return (
    <div className="bg-[#F1F1F1]">
      <div className="container pt-[80px] pb-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-0 md:gap-2">

          {/* LEFT SECTION */}
          <div className="md:col-span-3">

            {/* ⭐ Small Device Carousel */}
            <div className="block md:hidden overflow-hidden">
              <div className="flex gap-3 animate-slide">
                <button className="px-4  py-3 bg-[#FBFBFC] rounded-full text-[16px]">AI agents</button>
                <button className="px-4 py-3 bg-[#FBFBFC] rounded-full text-[16px]">Connecting Systems</button>
                <button className="px-4 py-3 bg-[#FBFBFC] rounded-full">Building API </button>
                <button className="px-4 py-3 bg-[#FBFBFC] rounded-full">Custom Software</button>
                <button className="px-4 py-3 bg-[#FBFBFC] rounded-full">Customer Portals</button>
                <button className="px-4 py-3 bg-[#FBFBFC] rounded-full">CRMs</button>
              </div>
            </div>

            {/* ⭐ MD+ GRID */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-9 md:gap-3 w-full justify-between">
              <button className="px-2 py-3 bg-[#FBFBFC] rounded-full">AI agents</button>
              <button className="px py-3 bg-[#FBFBFC] rounded-full">Connecting Systems</button>
              <button className="px-2 py-3 bg-[#FBFBFC] rounded-full">Building API </button>
              <button className="px-2 py-3 bg-[#FBFBFC] rounded-full">Custom Software</button>
              <button className="px-2 py-3 bg-[#FBFBFC] rounded-full">Customer Portals</button>
              <button className="px-2 py-3 bg-[#FBFBFC] rounded-full">CRMs</button>
            </div>
          </div>

          {/* MIDDLE LINE */}
          <div className=" md:col-span-1 flex items-center justify-center  rounded-lg">
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
                       <div className=' rounded-lg block md:hidden py-4'>
                          <Image src="/Images/line2.png.png" alt='line' height={50} width={700}/>
                       </div>
                     </div>
           
          </div>
          

          {/* RIGHT SECTION */}
          <div className="md:col-span-3">
            We are done with IT professionals who only understand themselves. You deserve solutions that work for you. No lengthy processes, vague advice, or empty promises, but real progress.
          </div>
        </div>

        {/* ⭐ Carousel Animation CSS */}
        <style>{`
        @keyframes slide {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-60%); }
        }
        .animate-slide {
          animation: slide 8s linear infinite;
          width: max-content;
        }
      `}</style>

        {/* IMAGE + STATS */}
        <div className="mt-10 flex flex-col gap-6 md:flex-row">
          <div className="w-ful md:w-2/3 rounded-lg">
            <Image 
              src="/Images/banner.jpg"
              alt="banner"
              height={100}
              width={954}
              className="h-full  rounded-lg"
            
            /> 
          </div>

          <div className=" flex md:flex-col gap-4 w-full md:w-1/3 p-8 bg-[#FFFFFF] rounded-lg">
            {data.map((item) => (
              <div key={item.id} className="py-8">
                <p className="font-sans font-medium text-[40px] leading-none">
                  {item.price}
                </p>
                <p className="mt-3 font-mono text-[18px] text-[#4A4C56]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}









// "use client";
// import { Star } from "lucide-react";
// import Image from "next/image";
// import React from "react";
// import AwardIcon from "../icon/AwardIcon";


// const data = [
//     {
//         id: 1,
//         prise: "1250+",
//         description: "Project Completed"
//     },
//     {
//         id: 2,
//         prise: "1250+",
//         description: "Project Completed"
//     },
//     {
//         id: 3,
//         prise: "1250+",
//         description: "Project Completed"
//     },
// ]

// export default function BannerPage() {
//     return (
//         <section className="bg-[#F1F1F1] py-20">
//             <div className="container px-4 mx-auto">

//                 {/* Small pill with icon */}
//                 <div className="bg-white rounded-full shadow-sm w-fit">
//                     <div className="flex items-center gap-3 py-[5px] px-[14px]">
//                         <AwardIcon />
//                         <p className="font-medium text-gray-700">Lorem ipsum dolor sit.</p>
//                     </div>
//                 </div>

//                 {/* Heading */}
//                 <h1 className="max-w-[1280px] font-normal text-[40px] md:text-[72px] leading-[116%] tracking-[-0.04em] mt-6">
//                     Lorem, ipsum dolor sit amet consectetur
//                 </h1>

//                 {/* Content Section */}
//                 <div className="grid grid-cols-1 md:grid-cols-[1fr_100px_1fr] gap-[48px] py-9">

//                     {/* LEFT Column (Buttons) */}
//                     <div className="w-full  grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                         <button className="py-3 px-6 bg-[#F8F8F8] rounded-full text-gray-700 text-[16px] font-medium whitespace-nowrap shadow-sm">
//                             Button 1
//                         </button>
//                         <button className="py-3 px-6 bg-[#F8F8F8] rounded-full text-gray-700 text-[16px] font-medium whitespace-nowrap shadow-sm">
//                             Button 2
//                         </button>
//                         <button className="py-3 px-6 bg-[#F8F8F8] rounded-full text-gray-700 text-[16px] font-medium whitespace-nowrap shadow-sm">
//                             Button 3
//                         </button>
//                         <button className="py-3 px-6 bg-[#F8F8F8] rounded-full text-gray-700 text-[16px] font-medium whitespace-nowrap shadow-sm">
//                             Button 4
//                         </button>
//                         <button className="py-3 px-6 bg-[#F8F8F8] rounded-full text-gray-700 text-[16px] font-medium whitespace-nowrap shadow-sm">
//                             Button 5
//                         </button>
//                         <button className="py-3 px-6 bg-[#F8F8F8] rounded-full text-gray-700 text-[16px] font-medium whitespace-nowrap shadow-sm">
//                             Button 6
//                         </button>
//                     </div>

//                     {/* MIDDLE DIVIDER */}
//                     <div className="flex justify-center w-full  md:w-[100px] ">
//                         <div className="border-l-2 border-[#71D0FF] h-28 rounded-md rotate-90 md:rotate-0"></div>
//                     </div>

//                     {/* RIGHT Column (Text) */}
//                     <div className="w-full  text-gray-700 leading-relaxed text-[17px]">
//                         <p>
//                             We are done with IT professionals who only understand themselves.
//                             You deserve solutions that work for you. No lengthy processes,
//                             vague advice, or empty promises, but real progress.
//                         </p>
//                     </div>

//                 </div>

//                 <div className="flex flex-col gap-6 md:flex-row">
//                     <div className="w-full md:w-2/3">
//                         <Image src="/Images/banner.jpg" alt="banner" height={100} width={954} className="h-full"/>
//                     </div>
//                     <div className="bg-[#FFFFFF] w-full md:w-1/3 p-8 ">
//                         {
//                             data.map((index) => {
//                                 return <div key={index.id} className="py-8">
//                                     <p className="font-sans font-medium text-[40px] leading-[100%] tracking-[0%]">{index.prise}</p>
//                                     <p className="mt-3 font-mono font-normal text-[18px] leading-[100%] tracking-[0%] text-[#4A4C56]">{index.description}</p>

//                                 </div>
//                             })
//                         }
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
