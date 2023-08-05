import React from 'react';
import Image from "next/image";
import Link from "next/link";
import CatIcon from "public/assets/cat_icon.png";
import SocialLinks from './SocialLinks';


type Props = {}

function Navbar({}: Props) {
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
        <h1 className='text-2xl font-bold'>Friends of Feral Felines</h1>
      </div>
      <div className='flex justify-between items-center gap-10'>
                <Link href="/">Home</Link>
                <Link href="/">About Us</Link>
                <Link href="/">Contact Us</Link>
            </div>
    </nav>
  )
}

export default Navbar