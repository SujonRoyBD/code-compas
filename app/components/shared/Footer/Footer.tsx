import ArrowTop from '@/app/components/icon/ArrowTopIcon'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <div className='bg-[#F1F1F1]'>
            <div className='container'>
                <div className="flex flex-col md:flex-row justify-between pt-[76px] gap-10">

                    {/* Left Section */}
                    <div>
                        <h3 className="text-[32px] md:text-[56px] leading-tight">
                            Let’s Work <br /> Together
                        </h3>

                        <div className="flex items-center mt-8">
                            <button className="bg-[#71D0FF] px-6 py-[16px] rounded-full text-white">
                                Let’s Talk
                            </button>

                            <div className="border-4 border-[#71D0FF] rounded-full p-4 -ml-3">
                                <ArrowTop />
                            </div>
                        </div>
                    </div>

                    {/* Right Section (Social Icons) */}
                    <div className="space-y-4 flex md:block gap-3  md:justify-end">
                        <div className="bg-white p-2 rounded-full flex justify-center items-center mt-3 md:mt-0">
                            <Facebook className="text-black " />
                        </div>
                        <div className="bg-white p-2 rounded-full">
                            <Twitter className="text-black" />
                        </div>
                        <div className="bg-white p-2 rounded-full">
                            <Linkedin className="text-black" />
                        </div>
                        <div className="bg-white p-2 rounded-full">
                            <Instagram className="text-black" />
                        </div>
                    </div>

                </div>

                <div className='flex flex-col md:flex-row md:gap-6 md:justify-between mt-[100px] '>
                    <div>
                        <Image src="/Images/logo.png" alt='logo' height={50} width={300} />
                    </div>
                    <div className='flex flex-col md:flex-row gap-8 mt-6'>
                        <div className='cursor-pointer'>
                            Home
                        </div>
                        <div className='cursor-pointer'>
                            Expertise
                        </div>
                        <div className='cursor-pointer'>
                            Solutions
                        </div>
                        <div className='cursor-pointer'>
                            Working Method
                        </div>

                    </div>
                </div>
                <div className='flex justify-between mt-[56px]'>
                    <p>© 2025 Code Kompas
                        All Rights Reserved</p>
                    <p className='mb-[52px]'>Terms & Conditions
                        Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}
