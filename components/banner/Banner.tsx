"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import AwardIcon from "../icon/AwardIcon";


const data = [
    {
        id: 1,
        prise: "1250+",
        description: "Project Completed"
    },
    {
        id: 2,
        prise: "1250+",
        description: "Project Completed"
    },
    {
        id: 3,
        prise: "1250+",
        description: "Project Completed"
    },
]

export default function BannerPage() {
    return (
        <section className="bg-[#F1F1F1] py-20">
            <div className="container px-4 mx-auto">

                {/* Small pill with icon */}
                <div className="bg-white rounded-full shadow-sm w-fit">
                    <div className="flex items-center gap-3 py-[5px] px-[14px]">
                        <AwardIcon />
                        <p className="font-medium text-gray-700">Lorem ipsum dolor sit.</p>
                    </div>
                </div>

                {/* Heading */}
                <h1 className="max-w-[1280px] font-normal text-[40px] md:text-[72px] leading-[116%] tracking-[-0.04em] mt-6">
                    Lorem, ipsum dolor sit amet consectetur
                </h1>

                {/* Content Section */}
                <div className="grid grid-cols-1 py-10 md:grid-cols-3 gap-14">

                    {/* LEFT Column (Buttons) */}
                    <div className="w-full md:w-[420px] grid grid-cols-3 gap-4">
                        <button className="py-3 px-6 bg-[#F8F8F8] rounded-full text-gray-700 text-[16px] font-medium whitespace-nowrap shadow-sm">
                            Button 1
                        </button>
                        <button className="py-3 px-6 bg-[#F8F8F8] rounded-full text-gray-700 text-[16px] font-medium whitespace-nowrap shadow-sm">
                            Button 2
                        </button>
                        <button className="py-3 px-6 bg-[#F8F8F8] rounded-full text-gray-700 text-[16px] font-medium whitespace-nowrap shadow-sm">
                            Button 3
                        </button>
                        <button className="py-3 px-6 bg-[#F8F8F8] rounded-full text-gray-700 text-[16px] font-medium whitespace-nowrap shadow-sm">
                            Button 4
                        </button>
                        <button className="py-3 px-6 bg-[#F8F8F8] rounded-full text-gray-700 text-[16px] font-medium whitespace-nowrap shadow-sm">
                            Button 5
                        </button>
                        <button className="py-3 px-6 bg-[#F8F8F8] rounded-full text-gray-700 text-[16px] font-medium whitespace-nowrap shadow-sm">
                            Button 6
                        </button>
                    </div>

                    {/* MIDDLE DIVIDER */}
                    <div className="flex justify-center w-full">
                        <div className="border-l-2 border-[#71D0FF] h-28 rounded-md rotate-90 md:rotate-0"></div>
                    </div>

                    {/* RIGHT Column (Text) */}
                    <div className="w-full md:w-[400px] text-gray-700 leading-relaxed text-[17px]">
                        <p>
                            We are done with IT professionals who only understand themselves.
                            You deserve solutions that work for you. No lengthy processes,
                            vague advice, or empty promises, but real progress.
                        </p>
                    </div>

                </div>

                <div className="flex flex-col gap-6 md:flex-row">
                    <div className="w-full md:w-2/3">
                        <Image src="/Images/banner.jpg" alt="banner" height={455} width={954} />
                    </div>
                    <div className="bg-[#FFFFFF] w-full md:w-1/3 p-8 ">
                        {
                            data.map((index) => {
                                return <div key={index.id} className="py-8">
                                    <p className="font-sans font-medium text-[40px] leading-[100%] tracking-[0%]">{index.prise}</p>
                                    <p className="mt-3 font-mono font-normal text-[18px] leading-[100%] tracking-[0%] text-[#4A4C56]">{index.description}</p>

                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}
