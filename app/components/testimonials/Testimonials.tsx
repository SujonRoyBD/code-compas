"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import AwardIcon from "../icon/AwardIcon";

interface Testimonial {
  id: number;
  profile: string;
  desc: string;
  name: string;
  title: string;
}

const data: Testimonial[] = [
  {
    id: 1,
    profile: "/Images/Our Clients 1.jpg",
    desc: "Pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily.",
    name: "Patrick Nowrochi",
    title: "Web Developer",
  },
  {
    id: 2,
    profile: "/Images/Our Clients 2.png",
    desc: "The customer service team at pagedone went above and beyond to help me resolve a billing issue  quickly and ",
    name: "Rob West",
    title: "Digital Marketer",
  },
  {
    id: 3,
    profile: "/Images/Our Clients 3.jpg",
    desc: "/Images/OurClients.jpg",
    name: "Nick Fury",
    title: "Cyber Specialist",
  },
  {
    id: 4,
    profile: "/Images/Our Clients 1.jpg",
    desc: "Pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily.",
    name: "Pri Patel",
    title: "Product Designer",
  },
  {
    id: 5,
    profile: "/Images/Our Clients 3.jpg",
    desc: "Pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily.",
    name: "Nick Fury",
    title: "Cyber Specialist",
  },
  {
    id: 6,
    profile: "/Images/Our Clients 1.jpg",
    desc: "Pri Patel has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily.",
    name: "Pri Patel",
    title: "Product Designer",
  }
];

export default function Testimonials() {
  return (
    <div className="bg-[#F5F9FF]">
      <div className="container mx-auto py-10 md:py-20">
           <div className="grid grid-cols-1  md:grid-cols-[1fr_3px_1fr] gap-[48px]  gap-6 items-center">
                            {/* Left Section */}
                            <div className="w-full ">
                                <div className="flex items-center gap-3 ">
                                    <AwardIcon />
                                    <p className="text-gray-700 font-semibold uppercase tracking-wide">Testimonials</p>
                                </div>
                                <h3 className="text-[#1D1F2C] font-[HelveticaNeue] text-8 md:text-[36px] lg:text-[48px] font-medium leading-[1.36] capitalize">
                                    Our Clients  <span className="text-[#71D0FF]">Feedback</span>
                                </h3>
                            </div>
        
                            {/* Middle Border Icon */}
                           <div>
                             {/* Desktop */}
                             <div className="hidden md:block">
                               <Image
                                 src="/Images/Line.png"
                                 alt="line"
                                 width={12}
                                 height={90}
                                 className=""
                               />
                             </div>
                           
                             {/* Mobile */}
                               <div className='border-2 border-[#71D0FF] rounded-lg block md:hidden'>
                                 
                               </div>
                           </div>
        
                            {/* Right Paragraph */}
                            <div className="w-full">
                                <p className="text-[#4A4C56] font-[GeistMono] text-4 md:text-[20px] font-normal leading-[1.6]">
                                    Hear what our clients say genuine experiences, trusted results, and lasting partnerships built on success.
                                </p>
                                <button className='text-[#71D0FF] mt-6'>
                                    see more...
                                </button>
                            </div>
                        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {data.map((item) => (
<SwiperSlide key={item.id}>
  <div
    className="p-6 rounded-xl shadow-sm border border-gray-100 mt-12 bg-white relative overflow-hidden"
    style={
      item.id === 3
        ? {
            backgroundImage: `url(${item.desc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "390px",
          }
        : {}
    }
  >
    {/* Profile Image */}
    <div className="flex items-center gap-3 mb-4 relative z-10">
      <Image
        src={item.profile}
        alt={item.name}
        width={50}
        height={50}
        className="rounded-full"
      />    
    </div>

    {/* If id = 3 → no text */}
    {item.id !== 3 && (
      <p className="text-[#1D1F2C] font-[GeistMono] text-[20px] font-normal leading-[1.6] mb-[106px]">
        {item.desc}
      </p>
    )}

    {/* Name + Title */}
    <div className={`relative z-10 ${item.id === 3 ? "mt-[250px]" : ""}`}>
      <p className="text-[#1D1F2C] font-semibold">{item.name}</p>
      <p className="text-[#71D0FF] text-sm">{item.title}</p>
    </div>

    {/* Dark overlay for better text visibility (optional, but recommended) */}
    {item.id === 3 && (
      <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
    )}
  </div>
</SwiperSlide>



          ))}
        </Swiper>

      </div>
    </div>
  );
}


