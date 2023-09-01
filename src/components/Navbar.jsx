"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from './Button';
import SecondryButton from './SecondryButton';
import wa from '@/lib/wa';

export const NavBar = () => {
    // const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const handleWhatsApp = () => {
        wa("Gpogs.fl")
    };

    const liStyle = "font-medium  hover:font-bold cursor-pointer text-sm uppercase lg:text-[16spx]"

    return (
        <nav className='fixed w-[100%] z-50' >
            <div className="flex justify-between items-center px-4 py-2 bg-[#ffffff40] backdrop-blur-lg lg:px-20" >
                {/* left */}

                <Link href='/' >
                    <img src="https://cdn-icons-png.flaticon.com/256/9599/9599122.png" alt="LOGO"
                        className="w-10 "
                    />
                </Link>

                {/* cneter */}
                <div className='hidden lg:flex' >
                    <ul className="flex items-center gap-4" >
                        <Link onClick={toggleMenu} href="/" >
                            <li className={liStyle} >HOME</li>
                        </Link>

                        <Link onClick={toggleMenu} href="products">
                            <li className={liStyle}>Products</li>
                        </Link>

                        <Link onClick={toggleMenu} href="about">
                            <li className={liStyle}>ABOUT</li>
                        </Link>


                        <Link onClick={toggleMenu} href="contact">
                            <li className={liStyle}>CONTECT US</li>
                        </Link>

                        <Link onClick={toggleMenu} href="blog">
                            <li className={liStyle}>BLOG</li>
                        </Link>
                    </ul>
                </div>

                {/* rigth */}
                <div className="hidden lg:flex gap-2" >
                    <SecondryButton onClick={handleWhatsApp} text={"WhatsApp"} />
                </div>

                <div className='lg:hidden' onClick={toggleMenu} >
                    {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
                </div>


            </div>
            {
                isOpen &&
                <div className="lg:hidden bg-[#ffafaf70] backdrop-blur-sm p-4 rounded-md w-60 absolute top-4 right-12 z-50" >
                    <Link onClick={toggleMenu} href="/" >
                        <li className={`${liStyle} mb-4`} >HOME</li>
                    </Link>

                    <Link onClick={toggleMenu} href="about">
                        <li className={`${liStyle} mb-4`}>ABOUT</li>
                    </Link>


                    <Link onClick={toggleMenu} href="products">
                        <li className={`${liStyle} mb-4`}>Products</li>
                    </Link>

                    <Link onClick={toggleMenu} href="contact">
                        <li className={`${liStyle} mb-4`}>CONTECT US</li>
                    </Link>

                    <Link onClick={toggleMenu} href="blog">
                        <li className={`${liStyle} mb-4`}>BLOG</li>
                    </Link>


                    <div className="mt-2">
                        <Button onClick={handleWhatsApp} text={"WhatsApp"} />
                    </div>
                </div>
            }
        </nav>
    );
}
