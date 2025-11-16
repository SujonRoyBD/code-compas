"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-xl font-bold">
                    <Image src="/Images/logo.png" alt="logo" height={48} width={300}/>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8 text-gray-700">
                    <a href="#" className="hover:text-blue-500">Home</a>
                    <a href="#" className="hover:text-blue-500">Expertise</a>
                    <a href="#" className="hover:text-blue-500">Solutions</a>
                    <a href="#" className="hover:text-blue-500">Working Method</a>
                </div>

                {/* Desktop Button */}
                <div className="hidden lg:block">
                    <button className="bg-[#71D0FF] text-white py-2 px-5 rounded-full hover:bg-blue-400 transition">
                        Start the Intake
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-gray-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="lg:hidden bg-white border-t border-gray-200">
                    <div className="flex flex-col px-4 py-4 space-y-4 text-gray-700">
                        <a href="#" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</a>
                        <a href="#" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Expertise</a>
                        <a href="#" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Solutions</a>
                        <a href="#" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Working Method</a>
                        <button
                            className="bg-[#71D0FF] text-white py-2 px-5 rounded-full hover:bg-blue-400 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            Start the Intake
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
