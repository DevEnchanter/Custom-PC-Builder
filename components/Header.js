'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isPartsDropdownOpen, setPartsDropdownOpen] = useState(false);
    const [isPreBuiltDropdownOpen, setPreBuiltDropdownOpen] = useState(false);

    return (
        <header className="bg-gray-800 text-white p-4 justify-between items-center">
            <div className="flex items-center">
                <img src="logo.png" alt="Logo" className="h-8 mr-2"/>
                <Link href="/" className="text-xl font-bold">
                    BuildMyRig
                </Link>
            </div>
            <nav>
                <ul className='flex'>
                    <li><Link href="/build" className="px-3">Build Your PC</Link></li>
                    <li className='relative' onMouseEnter={() => setPartsDropdownOpen(true)} onMouseLeave={() => setPartsDropdownOpen(false)}>
                        <Link href='#' className="px-3">Parts</Link>
                        {isPartsDropdownOpen && (
                            <div className='absolute bg--white text-black left-0 mt3 py-2 w-40 border rounded shadow-xl'>
                                <Link href='#' className='block px-4 py-2 hover:bg-gray-500 text-white'>CPUs</Link>
                                <Link href='#' className='block px-4 py-2 hover:bg-gray-500 text-white'>GPUs</Link>
                                <Link href='#' className='block px-4 py-2 hover:bg-gray-500 text-white'>Motherboards</Link>
                                <Link href='#' className='block px-4 py-2 hover:bg-gray-500 text-white'>RAMs</Link>
                                <Link href='#' className='block px-4 py-2 hover:bg-gray-500 text-white'>SSDs</Link>
                                <Link href='#' className='block px-4 py-2 hover:bg-gray-500 text-white'>Cases</Link>
                                <Link href='#' className='block px-4 py-2 hover:bg-gray-500 text-white'>PSUs</Link>
                                <Link href='#' className='block px-4 py-2 hover:bg-gray-500 text-white'>Coolers/Fans</Link>
                            </div>
                        )}
                    </li>
                    <li className='relative' onMouseEnter={() => setPreBuiltDropdownOpen(true)} onMouseLeave={() => setPreBuiltDropdownOpen(false)}>
                        <Link href='#' className="px-3">Pre-Built</Link>
                        {isPreBuiltDropdownOpen && (
                            <div className='absolute bg--white text-black left-0 mt3 py-2 w-40 border rounded shadow-xl'>
                                <Link href='#' className='block px-4 py-2 hover:bg-gray-500 text-white'>Budget</Link>
                                <Link href='#' className='block px-4 py-2 hover:bg-gray-500 text-white'>Mid</Link>
                                <Link href='#' className='block px-4 py-2 hover:bg-gray-500 text-white'>Highend</Link>
                                <Link href='#' className='block px-4 py-2 hover:bg-gray-500 text-white'>God-Tier</Link>
                            </div>
                        )}
                    </li>
                    <li><Link href="/how-it-works" className="px-3">How It Works</Link></li>
                    <li><Link href="/support" className="px-3">Support/FAQs</Link></li>
                    <li><Link href="/reviews" className="px-3">Reviews/Testimonials</Link></li>
                    <li><Link href="/about" className="px-3">About Us</Link></li>
                    <li><Link href="/contact" className="px-3">Contact</Link></li>
                    <li><Link href="/ai-assistant" className="px-3">Ai Assistant</Link></li>
                    {/* Add Links here */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;