"use client"

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import CatIcon from "public/assets/cat_icon.png";
import SocialLinks from './SocialLinks';
import {AiOutlineHome, AiOutlineMenu,AiOutlineMail} from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si"


type Props = {}

function Navbar({}: Props) {
  const [div,setDav] = useState(false);

  const handleNav = () => {
    setDav(!div);
  }
  return (
    <nav className='flex justify-between items-center w-full px-10 py-4'>
        <div className='hidden sm:block'>
            <SocialLinks isDark/>
        </div>
       <div className='flex justify-center items-center gap-1'>
        <Image
        src={CatIcon}
        alt="Cat Icon"
        height={40}
        width={40}
        className='fill-white'
        />
        <h1 className='text-2xl font-["HelveticaNeueLT-Condensed",Arial,sans-serif"] font-bold'>Friends of Feral Felines</h1>
      </div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
        {div ? (
            <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg
                bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineHome size={20} />
                    <span className='pl-4'>Home</span>
                </a>
                <a onClick={handleNav} href="#about" className='w-[75%] flex justify-center items-center rounded-full shadow-lg
                bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <SiAboutdotme size={20} />
                    <span className='pl-4'>About</span>
                </a>
                {/*<a onClick={handleNav} href="#skills" className='w-[75%] flex justify-center items-center rounded-full shadow-lg
                bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <DiJavascript1 size={20} />
                    <span className='pl-4'>Skills</span>
                </a>
                <a onClick={handleNav} href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg
                bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineProject size={20} />
                    <span className='pl-4'>Projects</span>
                </a>
                <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg
                bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <BsPerson size={20} />
                    <span className='pl-4'>Resume</span>
                 </a>*/}
                <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg
                bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineMail size={20} />
                    <span className='pl-4'>Contact</span>
                </a>
            </div>
         )
         : (
            ""
         )
         }
      <div className='hidden md:flex justify-between items-center gap-10'>
                <Link href="/">Home</Link>
                <Link href="/">About Us</Link>
                <Link href="/">Contact Us</Link>
            </div>
    </nav>
  )
}

export default Navbar