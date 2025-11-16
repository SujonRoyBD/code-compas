"use client"
import React from 'react'
import AwardIcon from '../icon/AwardIcon'
import MassageIcon from '../icon/Massage'
import SendIcon from '../icon/SendIcon'
import ExIcon from '../icon/Xicon'
import { useForm, SubmitHandler } from "react-hook-form";


type FormData = {
    name: string;
    email: string;
    message: string;
};

export default function ContactUs() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log("Form Data:", data);
        reset(); // form reset after submit
    };
    return (
        <div className='bg-[#F5F9FF] py-10 md:py-[80px]'>
            <div className='container'>
                <div className=''>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>

                        <div className="w-full ">
                            <div className="flex items-center gap-3 ">
                                <AwardIcon />
                                <p className="text-[#4A4C56] font-[Poppins] text-[16px] font-medium leading-[1.6]">Contact us</p>
                            </div>
                            <h3 className="text-[#1D1F2C] font-[HelveticaNeue] text-8 md:text-9 lg:text-[48px] font-medium leading-[1.36] capitalize mt-4">
                                Let's  <span className="text-[#71D0FF]">Get In</span> Touch.
                            </h3>
                            <p className='mt-5 mb-[35px]'>Feel free to contact us and we will get back to you
                                as soon as it possible.</p>

                            <div className='space-y-6'>
                                <div className='bg-[#FFFFFF] p-6 rounded-lg'>
                                    <p className='mb-4 text-[#71D0FF] font-[Helvetica_Neue] text-1xl md:text-2xl font-normal leading-[1.36]'>
                                        Chat with us
                                    </p>
                                    <p className='text-[#4A4C56] font-[Helvetica_Neue] text-[16px] md:text-[18px] font-normal leading-[100%]'>Speak to our friendly team via live Chat.</p>

                                    <div className='grid grid-cols-1 md:grid-cols-3 mt-6 gap-3'>
                                        <div className='flex gap-2  cursor-pointer'>
                                            <MassageIcon />
                                            <p className='text-[#4A4C56] font-[Helvetica_Neue] text-[16px] font-normal leading-[1] tracking-[-0.4px] underline'>Start a live chat</p>
                                        </div>
                                        <div className='flex gap-2 cursor-pointer'>
                                            <SendIcon />
                                            <p className='text-[#4A4C56] font-[Helvetica_Neue] text-[16px] font-normal leading-[1] tracking-[-0.4px] underline'>Shoot us an email</p>
                                        </div>
                                        <div className='flex gap-2 cursor-pointer'>
                                            <ExIcon />
                                            <p className='text-[#4A4C56] font-[Helvetica_Neue] text-[16px] font-normal leading-[1] tracking-[-0.4px] underline'>Message us on X</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[#FFFFFF] p-6 rounded-lg '>
                                    <p className='mb-4 text-[#71D0FF] font-[Helvetica_Neue] text-1xl md:text-2xl font-normal leading-[1.36]'>
                                        Visit us
                                    </p>
                                    <p className='text-[#4A4C56] font-[Helvetica_Neue] text-[16px] md:text-[18px] font-normal leading-[100%]'>Chat to us in person at our Melbourne HO.</p>

                                    <div className=' mt-6 '>
                                        <div className='flex gap-2  cursor-pointer'>
                                            <MassageIcon />
                                            <p className='text-[#4A4C56] font-[Helvetica_Neue] text-[18px] md:text-[20px] font-normal leading-[1] tracking-[-0.4px] underline'>100 Smith Street. Collinqwood VIC 3066</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* contact from */}
                        <div className='p-6 bg-white rounded-lg'>
                            <p className='text-[#71D0FF]  font-[Helvetica_Neue] text-[32px] font-normal leading-[136%]'>Request a Demo</p>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
                                {/* Name */}
                                <div className='space-y-2 mt-8'>
                                    <label htmlFor="name" className="text-[var(--Gray-Black-400)] font-['Geist_Mono'] text-[18px] font-medium leading-[100%]">Name</label>
                                    <input
                                        id="name"
                                        {...register("name", { required: "Name is required" })}
                                        placeholder="Your Name"
                                        className="mt-1 w-full border rounded-lg px-3 py-2"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                                </div>

                                {/* Email */}
                                <div className='space-y-2'>
                                    <label htmlFor="email" className="text-[var(--Gray-Black-400)] font-['Geist_Mono'] text-[18px] font-medium leading-[100%]">Email</label>
                                    <input
                                        id="email"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                                        })}
                                        placeholder="your@example.com"
                                        className="mt-1 w-full border rounded-lg px-3 py-2"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                                </div>

                                {/* Message */}
                                <div className='space-y-2'>
                                    <label htmlFor="message" className="text-[var(--Gray-Black-400)] font-['Geist_Mono'] text-[18px] font-medium leading-[100%]">Message</label>
                                    <textarea
                                        id="message"
                                        {...register("message", { required: "Message is required" })}
                                        rows={4}
                                        placeholder="Leave a message..."
                                        className="mt-1 w-full border rounded-lg px-3 py-2"
                                    />
                                    {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="bg-[#71D0FF] text-[#1D1F2C] px-6 py-2 rounded-full hover:bg-blue-600 "
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
